package com.yuhki50.lpr9201.sender.packet;

import org.junit.Assert;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;

import java.util.List;

public class SleepIntervalTest {
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
        List<Integer> serialized = new SleepInterval(1000, 100).serialize();
        Assert.assertArrayEquals(new Integer[]{
                0x03, 0xE8, //
                0x64, //
        }, serialized.toArray(new Integer[serialized.size()]));
    }
}
