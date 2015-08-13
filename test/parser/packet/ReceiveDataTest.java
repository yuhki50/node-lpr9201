package com.yuhki50.lpr9201.parser.packet;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ReceiveDataTest {
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
        ReceiveData receiveData = this.createReceiveData();
        Assert.assertTrue(receiveData.canParse());
    }

    /**
     * Method: getDatas()
     */
    @Test
    public void testGetDatas() throws Exception {
        ReceiveData receiveData = this.createReceiveData();
        Assert.assertArrayEquals(new int[]{
                0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39
        }, receiveData.getDatas());
    }

    /**
     * ReceiveDataを作成する
     *
     * @return
     */
    ReceiveData createReceiveData() {
        return new ReceiveData(new Result(0x83, new int[]{
                0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, // データ: 0123456789
        }));
    }
}
