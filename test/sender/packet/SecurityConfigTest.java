package com.yuhki50.lpr9201.sender.packet;

import org.junit.Assert;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;

import java.util.List;

public class SecurityConfigTest {
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
     * Security enable
     * Method: serialize()
     */
    @Test
    public void testSerializeSecurityEnable() throws Exception {
        List<Integer> serialized = new SecurityConfig(true).serialize();
        Assert.assertArrayEquals(new Integer[]{0x01}, serialized.toArray(new Integer[serialized.size()]));
    }

    /**
     * Security disable
     * Method: serialize()
     */
    @Test
    public void testSerializeSecurityDisable() throws Exception {
        List<Integer> serialized = new SecurityConfig(false).serialize();
        Assert.assertArrayEquals(new Integer[]{0x00}, serialized.toArray(new Integer[serialized.size()]));
    }
}
