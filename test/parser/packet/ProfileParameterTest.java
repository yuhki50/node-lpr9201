package com.yuhki50.lpr9201.parser.packet;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ProfileParameterTest {
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
        ProfileParameter profileParameter = new ProfileParameter(new Result(0x85, new int[]{}));
        Assert.assertTrue(profileParameter.canParse());
    }

    /**
     * Method: getValue()
     */
    @Test
    public void testGetValue1ByteInt() throws Exception {
        ProfileParameter profileParameter = this.createProfileParameter();
        Assert.assertEquals(10, profileParameter.getValueInt());
    }

    /**
     * Method: getValue()
     */
    @Test
    public void testGetValue2ByteInt() throws Exception {
        ProfileParameter profileParameter = this.createProfileParameter2Byte();
        Assert.assertEquals(1000, profileParameter.getValueInt());
    }

    /**
     * Method: getValue()
     */
    @Test
    public void testGetValue3ByteLong() throws Exception {
        ProfileParameter profileParameter = this.createProfileParameter3Byte();
        Assert.assertEquals(100000, profileParameter.getValueLong());
    }

    /**
     * Method: getValue()
     */
    @Test
    public void testGetValue3ByteBytes() throws Exception {
        ProfileParameter profileParameter = this.createProfileParameter3Byte();
        Assert.assertArrayEquals(new int[]{0x01, 0x86, 0xA0}, profileParameter.getValueBytes());
    }

    /**
     * 1Byteデータ付きのProfileParameterを作成する
     *
     * @return
     */
    ProfileParameter createProfileParameter() {
        return new ProfileParameter(new Result(0x85, new int[]{0x0A}));
    }

    /**
     * 2Byteデータ付きのProfileParameterを作成する
     *
     * @return
     */
    ProfileParameter createProfileParameter2Byte() {
        return new ProfileParameter(new Result(0x85, new int[]{0x03, 0xE8}));
    }

    /**
     * 3Byteデータ付きのProfileParameterを作成する
     *
     * @return
     */
    ProfileParameter createProfileParameter3Byte() {
        return new ProfileParameter(new Result(0x85, new int[]{0x01, 0x86, 0xA0}));
    }
}
