package com.yuhki50.lpr9201.sender.packet;

import com.yuhki50.lpr9201.sender.option.ProfileParameterType;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class WriteProfileParameterTest {
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
     * Write 1byte
     * Method: serialize()
     */
    @Test
    public void testSerialize1Byte() throws Exception {
        List<Integer> serialized = new WriteProfileParameter(ProfileParameterType.CHANNEL, 33).serialize();
        Assert.assertArrayEquals(new Integer[]{0x03, 0x21}, serialized.toArray(new Integer[serialized.size()]));
    }

    /**
     * Write 2byte
     * Method: serialize()
     */
    @Test
    public void testSerialize2Byte() throws Exception {
        List<Integer> serialized = new WriteProfileParameter(ProfileParameterType.PAN_ID, 0x0001).serialize();
        Assert.assertArrayEquals(new Integer[]{0x01, 0x00, 0x01}, serialized.toArray(new Integer[serialized.size()]));
    }

    /**
     * Write 8byte
     * Method: serialize()
     */
    @Test
    public void testSerialize8Byte() throws Exception {
        List<Integer> serialized = new WriteProfileParameter(ProfileParameterType.PARENT_IEEE_ADDRESS, 0x0000000000000001).serialize();
        Assert.assertArrayEquals(new Integer[]{0x15, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01}, serialized.toArray(new Integer[serialized.size()]));
    }
}
