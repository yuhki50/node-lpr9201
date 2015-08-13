package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.AutoStartupErrorType;
import com.yuhki50.lpr9201.parser.option.DeviceType;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ConnectionConfirmationTest {
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
        ConnectionConfirmation connectionConfirmation = new ConnectionConfirmation(new Result(0x00, new int[]{}));
        Assert.assertTrue(connectionConfirmation.canParse());
    }

    /**
     * Method: getErrorType()
     */
    @Test
    public void testGetErrorType() throws Exception {
        ConnectionConfirmation connectionConfirmation = this.createConnectionConfirmationWithError();
        Assert.assertEquals(AutoStartupErrorType.OTHER_ERROR, connectionConfirmation.getErrorType());
    }

    /**
     * Method: hasErrorType()
     */
    @Test
    public void testHasErrorType() throws Exception {
        ConnectionConfirmation connectionConfirmation = this.createConnectionConfirmationWithError();
        Assert.assertTrue(connectionConfirmation.hasErrorType());
    }

    /**
     * Method: getNodeAddress()
     */
    @Test
    public void testGetNodeAddress() throws Exception {
        ConnectionConfirmation connectionNotification = this.createConnectionConfirmationWithNodeAddress();
        Assert.assertEquals(1000, connectionNotification.getNodeAddress());
    }

    /**
     * Method: hasNodeAddress()
     */
    @Test
    public void testHasNodeAddress() throws Exception {
        ConnectionConfirmation connectionConfirmation = this.createConnectionConfirmationWithNodeAddress();
        Assert.assertTrue(connectionConfirmation.hasNodeAddress());
    }

    /**
     * Method: getDeviceType()
     */
    @Test
    public void testGetDeviceTypeUnknown() throws Exception {
        ConnectionConfirmation connectionConfirmation = this.createConnectionConfirmation();
        Assert.assertEquals(DeviceType.UNKNOWN, connectionConfirmation.getDeviceType());
    }

    /**
     * Method: getDeviceType()
     */
    @Test
    public void testGetDeviceTypeCoordinator() throws Exception {
        ConnectionConfirmation connectionConfirmation = this.createConnectionConfirmationWithError();
        Assert.assertEquals(DeviceType.COORDINATOR, connectionConfirmation.getDeviceType());
    }

    /**
     * Method: getDeviceType()
     */
    @Test
    public void testGetDeviceTypeEndDevices() throws Exception {
        ConnectionConfirmation connectionConfirmation = this.createConnectionConfirmationWithNodeAddress();
        Assert.assertEquals(DeviceType.END_DEVICE, connectionConfirmation.getDeviceType());
    }

    /**
     * ConnectionConfirmationを作成する
     *
     * @return
     */
    ConnectionConfirmation createConnectionConfirmation() {
        return new ConnectionConfirmation(new Result(0x91, new int[]{}));
    }

    /**
     * エラー種別付きのConnectionConfirmationを作成する
     *
     * @return
     */
    ConnectionConfirmation createConnectionConfirmationWithError() {
        return new ConnectionConfirmation(new Result(0x91, new int[]{
                0xFF, // エラー種別: その他のエラー
        }));
    }

    /**
     * 自ノードアドレス付きのConnectionConfirmationを作成する
     *
     * @return
     */
    ConnectionConfirmation createConnectionConfirmationWithNodeAddress() {
        return new ConnectionConfirmation(new Result(0x91, new int[]{
                0x03, 0xE8, // 自ノードアドレス: 1000
        }));
    }
}
