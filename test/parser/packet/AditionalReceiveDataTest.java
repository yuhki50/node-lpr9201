package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.ReceiveDataType;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class AditionalReceiveDataTest {
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
        AditionalReceiveData aditionalReceiveData = this.createAditionalReceiveData();
        Assert.assertTrue(aditionalReceiveData.canParse());
    }

    /**
     * Method: getRssi()
     */
    @Test
    public void testGetRssi() throws Exception {
        AditionalReceiveData aditionalReceiveData = this.createAditionalReceiveData();
        Assert.assertEquals(-5, aditionalReceiveData.getRssi());
    }

    /**
     * Method: getReceiveDataType()
     */
    @Test
    public void testGetReceiveDataType() throws Exception {
        AditionalReceiveData aditionalReceiveData = this.createAditionalReceiveData();
        Assert.assertEquals(ReceiveDataType.NORMAL, aditionalReceiveData.getReceiveDataType());
    }

    /**
     * Method: getSourceAddress()
     */
    @Test
    public void testGetSourceAddress() throws Exception {
        AditionalReceiveData aditionalReceiveData = this.createAditionalReceiveData();
        Assert.assertEquals(1000, aditionalReceiveData.getSourceAddress());
    }

    /**
     * Method: getJustBeforeSourceAddress()
     */
    @Test
    public void testGetJustBeforeSourceAddress() throws Exception {
        AditionalReceiveData aditionalReceiveData = this.createAditionalReceiveData();
        Assert.assertEquals(2000, aditionalReceiveData.getJustBeforeSourceAddress());
    }

    /**
     * Method: getDatas()
     */
    @Test
    public void testGetDatas() throws Exception {
        AditionalReceiveData aditionalReceiveData = this.createAditionalReceiveData();
        Assert.assertArrayEquals(new int[]{
                0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39
        }, aditionalReceiveData.getDatas());
    }

    /**
     * AditionalReceiveDataを作成する
     *
     * @return
     */
    AditionalReceiveData createAditionalReceiveData() {
        return new AditionalReceiveData(new Result(0x90, new int[]{
                0xFB,  // Rssi: -5
                0x00,  // データ種別: 通常データ
                0x03, 0xE8, // 送信元アドレス: 1000
                0x07, 0xD0, // 直前送信元アドレス: 2000
                0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, // データ: 0123456789
        }));
    }
}
