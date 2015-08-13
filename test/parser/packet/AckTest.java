package com.yuhki50.lpr9201.parser.packet;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class AckTest {
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
        Ack ack = this.createAck();
        Assert.assertTrue(ack.canParse());
    }

    /**
     * Method: getNodeAddress()
     */
    @Test
    public void testGetNodeAddress() throws Exception {
        Ack ack = this.createAckWithNodeAddress();
        Assert.assertEquals(1000, ack.getNodeAddress());
    }

    /**
     * Method: getNodeAddress()
     * データ無しの場合は例外を起こす
     */
    @Test(expected = RuntimeException.class)
    public void testGetNodeAddressException() throws Exception {
        Ack ack = this.createAck();
        Assert.assertEquals(1000, ack.getNodeAddress());
    }

    /**
     * データ無しのAckを作成する
     *
     * @return
     */
    Ack createAck() {
        return new Ack(new Result(0x81, new int[]{}));
    }

    /**
     * ノードアドレス(1000)付きのAckを作成する
     *
     * @return
     */
    Ack createAckWithNodeAddress() {
        return new Ack(new Result(0x81, new int[]{
                0x03, 0xE8, // ノードアドレス: 1000
        }));
    }
}
