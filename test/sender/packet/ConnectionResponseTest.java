package com.yuhki50.lpr9201.sender.packet;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class ConnectionResponseTest {
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
        List<Integer> serialized = new ConnectionResponse(true, 0x0123456789ABCDEFL, 0x1234).serialize();
        Assert.assertArrayEquals(
                new Integer[]{
                        0x01, //
                        0x01, 0x23, 0x45, 0x67, 0x89, 0xAB, 0xCD, 0xEF, //
                        0x12, 0x34, //
                },
                serialized.toArray(new Integer[serialized.size()]));
    }
}
