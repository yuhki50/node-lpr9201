package com.yuhki50.lpr9201.sender.packet;

import com.yuhki50.lpr9201.sender.option.ProfileParameterType;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class ReadProfileParameterTest {
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
        List<Integer> serialized = new ReadProfileParameter(ProfileParameterType.PAN_ID).serialize();
        Assert.assertEquals(ProfileParameterType.PAN_ID, ProfileParameterType.getEnumByParamNo(0x01));
        Assert.assertArrayEquals(new Integer[]{0x01}, serialized.toArray(new Integer[serialized.size()]));
    }
}
