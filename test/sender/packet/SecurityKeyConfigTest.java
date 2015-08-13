package com.yuhki50.lpr9201.sender.packet;

import org.junit.Assert;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;

import java.util.List;

public class SecurityKeyConfigTest {
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
        List<Integer> serialized = new SecurityKeyConfig(0x01, new Integer[]{
                0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, //
                0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F, //
        }).serialize();
        Assert.assertArrayEquals(new Integer[]{
                0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, //
                0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F, //
                0x01, //
        }, serialized.toArray(new Integer[serialized.size()]));
    }
}
