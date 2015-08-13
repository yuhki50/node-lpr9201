package com.yuhki50.lpr9201.parser.packet;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ConnectionNotificationTest {
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
        ConnectionNotification connectionNotification = this.createConnectionNotification();
        Assert.assertTrue(connectionNotification.canParse());
    }

    /**
     * Method: getChildIeeeAddressBytes()
     */
    @Test
    public void testGetChildIeeeAddressBytes() throws Exception {
        ConnectionNotification connectionNotification = this.createConnectionNotification();
        Assert.assertArrayEquals(new int[]{0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08},
                connectionNotification.getChildIeeeAddressBytes());
    }

    /**
     * ConnectionNotificationを作成する
     *
     * @return
     */
    ConnectionNotification createConnectionNotification() {
        return new ConnectionNotification(new Result(0x91, new int[]{
                0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, // 子のIEEEアドレス
        }));
    }
}
