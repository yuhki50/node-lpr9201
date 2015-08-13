package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.NackReason;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class NackTest {
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
        Nack nack = this.createNack();
        Assert.assertTrue(nack.canParse());
    }

    /**
     * Method: getReason()
     */
    @Test
    public void testGetReason() throws Exception {
        Nack nack = this.createNack();
        Assert.assertEquals(NackReason.PARAMETER_ERROR, nack.getReason());
        Assert.assertEquals(0x01, nack.getReason().getReasonCode());
    }

    /**
     * Method: getReason()
     */
    @Test
    public void testGetReasonUnknown() throws Exception {
        Nack nack = this.createNackWithUnknownCode();
        Assert.assertEquals(NackReason.OTHER_ERROR, nack.getReason());
        Assert.assertEquals(0xFF, nack.getReason().getReasonCode());
    }

    /**
     * Nackを作成する
     *
     * @return
     */
    Nack createNack() {
        return new Nack(new Result(0x82, new int[]{0x01}));
    }

    /**
     * 不正なコードのNackを作成する
     *
     * @return
     */
    Nack createNackWithUnknownCode() {
        return new Nack(new Result(0x82, new int[]{0xC0}));
    }
}
