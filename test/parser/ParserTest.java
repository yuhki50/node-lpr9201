package com.yuhki50.lpr9201.parser;

import com.yuhki50.lpr9201.parser.option.NackReason;
import com.yuhki50.lpr9201.parser.packet.Ack;
import com.yuhki50.lpr9201.parser.packet.Nack;
import com.yuhki50.lpr9201.parser.packet.ReceiveData;
import com.yuhki50.lpr9201.parser.packet.Result;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ParserTest {
    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: parse(int data)
     */
    @Test
    public void testParseAck() throws Exception {
        extractPacket(new int[]{
                0x5A, 0xA5, 0x81, 0x00, 0x7E
        }, new IParsedRunner() {
            public void parsed(Result result) {
                Assert.assertTrue(new Ack(result).canParse());
            }
        });
    }

    /**
     * Method: parse(int data)
     */
    @Test
    public void testParseNack() throws Exception {
        extractPacket(new int[]{
                0x5A, 0xA5, 0x82, 0x01, 0x01, 0x7D
        }, new IParsedRunner() {
            public void parsed(Result result) {
                Nack nack = new Nack(result);
                Assert.assertTrue(nack.canParse());
                Assert.assertEquals(NackReason.PARAMETER_ERROR, nack.getReason());
            }
        });
    }

    /**
     * Method: parse(int data)
     */
    @Test
    public void testParseReceiveData() throws Exception {
        extractPacket(new int[]{
                0x5A, 0xA5, 0x83, 0x00, 0x0A, 0x30, 0x31, 0x32, //
                0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x77, //
        }, new IParsedRunner() {
            public void parsed(Result result) {
                ReceiveData receiveData = new ReceiveData(result);
                Assert.assertTrue(receiveData.canParse());
                Assert.assertArrayEquals(
                        new int[]{0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39}, //
                        receiveData.getDatas());
            }
        });
    }

    /**
     * 通信データをパケットに切り出す
     *
     * @param arr          パースさせるデータ
     * @param parsedRunner パース成功時に実行するクラス
     */
    void extractPacket(int[] arr, IParsedRunner parsedRunner) throws Exception {
        Parser parser = new Parser();
        boolean isFinished = false;

        for (int bin : this.createPacketWithDummy(arr)) {
            Result result = parser.parse(bin);

            if (result == null) {
                continue;
            }

            parsedRunner.parsed(result);
            isFinished = true;
        }

        Assert.assertTrue("isFinished", isFinished);
    }

    /**
     * 引数の配列の前後にダミーデータを付けたデータを作成する
     *
     * @return ダミーデータ付きの通信データ
     */
    int[] createPacketWithDummy(int[] data) {
        int[] mergeArray = new int[]{};
        int[] dummy = new int[]{0x00, 0xFF}; // dummy

        mergeArray = concat(mergeArray, dummy);
        mergeArray = concat(mergeArray, data);
        mergeArray = concat(mergeArray, dummy);

        return mergeArray;
    }

    /**
     * 配列を結合する
     *
     * @param arr1 1つ目の配列
     * @param arr2 2つ目の配列
     * @return 結合された配列
     */
    int[] concat(int[] arr1, int[] arr2) {
        int[] dest = new int[arr1.length + arr2.length];
        System.arraycopy(arr1, 0, dest, 0, arr1.length);
        System.arraycopy(arr2, 0, dest, arr1.length, arr2.length);
        return dest;
    }
}

/**
 * パース成功時に実行するクラスのインターフェース
 */
interface IParsedRunner {
    void parsed(Result result);
}
