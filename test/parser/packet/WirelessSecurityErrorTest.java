package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.WirelessSecurityErrorType;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class WirelessSecurityErrorTest {
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
        WirelessSecurityError wirelessSecurityError = new WirelessSecurityError(new Result(0x94, new int[]{}));
        Assert.assertTrue(wirelessSecurityError.canParse());
    }

    /**
     * Method: getErrorType()
     */
    @Test
    public void testGetErrorType() throws Exception {
        WirelessSecurityError wirelessSecurityError = this.createWirelessSecurityError();
        Assert.assertEquals(WirelessSecurityErrorType.SECURITY_SEQUENCE_COUNTER_MISMATCH, wirelessSecurityError.getErrorType());
        Assert.assertEquals(0xDB, wirelessSecurityError.getErrorType().getErrorCode());
    }

    /**
     * Method: getSourcePanId()
     */
    @Test
    public void testGetSourcePanId() throws Exception {
        WirelessSecurityError wirelessSecurityError = this.createWirelessSecurityError();
        Assert.assertEquals(1000, wirelessSecurityError.getSourcePanId());
    }

    /**
     * Method: getSourceAddress()
     */
    @Test
    public void testGetSourceAddress() throws Exception {
        WirelessSecurityError wirelessSecurityError = this.createWirelessSecurityError();
        Assert.assertEquals(100, wirelessSecurityError.getSourceAddress());
    }

    /**
     * Method: getDestinationPanId()
     */
    @Test
    public void testGetDestinationPanId() throws Exception {
        WirelessSecurityError wirelessSecurityError = this.createWirelessSecurityError();
        Assert.assertEquals(2000, wirelessSecurityError.getDestinationPanId());
    }

    /**
     * Method: getDestinationAddress()
     */
    @Test
    public void testGetDestinationAddress() throws Exception {
        WirelessSecurityError wirelessSecurityError = this.createWirelessSecurityError();
        Assert.assertEquals(200, wirelessSecurityError.getDestinationAddress());
    }

    /**
     * WirelessSecurityErrorを作成する
     *
     * @return
     */
    WirelessSecurityError createWirelessSecurityError() {
        return new WirelessSecurityError(new Result(0x94, new int[]{
                0xDB, // エラー種別: セキュリティシーケンスカウンタ不一致
                0x03, 0xE8, // エラー時の送信元PAN ID: 1000
                0x00, 0x64, // エラー時の送信元アドレス ID: 100
                0x07, 0xD0, // エラー時の送信先PAN ID: 2000
                0x00, 0xC8, // エラー時の送信元アドレス: 200
        }));
    }
}
