package com.yuhki50.lpr9201.sender.packet;

import org.junit.Assert;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;

import java.util.List;

public class SaveProfileTest {
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
     * Profile0
     *
     * Method: serialize()
     */
    @Test
    public void testSerializeProfile0() throws Exception {
        List<Integer> serialized = new SaveProfile(0).serialize();
        Assert.assertArrayEquals(new Integer[]{0x00}, serialized.toArray(new Integer[serialized.size()]));
    }

    /**
     * Profile1
     *
     * Method: serialize()
     */
    @Test
    public void testSerializeProfile1() throws Exception {
        List<Integer> serialized = new SaveProfile(1).serialize();
        Assert.assertArrayEquals(new Integer[]{0x01}, serialized.toArray(new Integer[serialized.size()]));
    }
}
