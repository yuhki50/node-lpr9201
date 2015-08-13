package com.yuhki50.lpr9201.sender.packet;

import org.junit.Assert;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;

import java.util.List;

public class DeviceInfoConfigTest {
    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: getCommandId()
     */
    @Test
    public void testGetCommandId() throws Exception {
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
     * Method: serialize()
     */
    @Test
    public void testSerialize() throws Exception {
        List<Integer> serialized = new DeviceInfoConfig(0x00, 0x3FFF, 0xFFFD, 0x0123456789ABCDEFL).serialize();
        Assert.assertArrayEquals(
                new Integer[]{
                        0x3F, 0xFF, //
                        0xFF, 0xFD, //
                        0x01, 0x23, 0x45, 0x67, 0x89, 0xAB, 0xCD, 0xEF, //
                        0x00, //
                },
                serialized.toArray(new Integer[serialized.size()]));
    }
}
