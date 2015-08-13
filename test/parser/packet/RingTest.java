package com.yuhki50.lpr9201.parser.packet;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * データを受信したことを通知する
 * 設定の受信通知(0x14)が 1 の場合のみ通知する
 * RING 通知後のデータ読出しは、10ms 以上待ってから行う
 * 10ms 以上待たない場合、受信データ読出しコマンド、付加受信データ読出しコマンドに対して Nackが返ることがある
 */
public class RingTest {
    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: getResultCode()
     */
    @Test
    public void testGetResultCode() throws Exception {
        //TODO: Test goes here...
    }

    /**
     * Method: getDataLengthByteSize()
     */
    @Test
    public void testGetDataLengthByteSize() throws Exception {
        //TODO: Test goes here...
    }

    /**
     * Method: canParse()
     */
    @Test
    public void testCanParse() throws Exception {
        Ring ring = this.createRing();
        Assert.assertTrue(ring.canParse());
    }

    /**
     * Wupを作成する
     *
     * @return
     */
    Ring createRing() {
        return new Ring(new Result(0x87, new int[]{}));
    }
}
