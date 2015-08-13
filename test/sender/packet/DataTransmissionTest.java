package com.yuhki50.lpr9201.sender.packet;

import com.yuhki50.lpr9201.sender.option.SendOption;
import org.junit.*;

import java.util.List;

public class DataTransmissionTest {
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
     * SendOption.NORMAL
     * Method: serialize()
     */
    @Test
    public void testSerializeSendOptionNormal() throws Exception {
        List<Integer> serialized = new DataTransmission(1000, new int[]{0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39}, SendOption.NORMAL).serialize();
        Assert.assertArrayEquals(
                new Integer[]{
                        0x00, //
                        0x03, 0xE8, //
                        0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, //
                },
                serialized.toArray(new Integer[serialized.size()]));
    }

    /**
     * SendOption.ACK
     * Method: serialize()
     */
    @Test
    public void testSerializeSendOptionAck() throws Exception {
        List<Integer> serialized = new DataTransmission(1000, new int[]{0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39}, SendOption.ACK).serialize();
        Assert.assertArrayEquals(
                new Integer[]{
                        0x01, //
                        0x03, 0xE8, //
                        0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, //
                },
                serialized.toArray(new Integer[serialized.size()]));
    }

    /**
     * SendOption.ACK_UPMULTIHOP
     * Method: serialize()
     */
    @Test
    public void testSerializeSendOptionAckUpMultihop() throws Exception {
        List<Integer> serialized = new DataTransmission(1000, new int[]{0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39}, SendOption.ACK_UPMULTIHOP).serialize();
        Assert.assertArrayEquals(
                new Integer[]{
                        0x02, //
                        0x03, 0xE8, //
                        0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, //
                },
                serialized.toArray(new Integer[serialized.size()]));
    }

    /**
     * SendOption.BROADCAST
     * Method: serialize()
     */
    @Test
    public void testSerializeSendOptionBroadcast() throws Exception {
        List<Integer> serialized = new DataTransmission(1000, new int[]{0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39}, SendOption.BROADCAST).serialize();
        Assert.assertArrayEquals(
                new Integer[]{
                        0x04, //
                        0x03, 0xE8, //
                        0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, //
                },
                serialized.toArray(new Integer[serialized.size()]));
    }

    /**
     * SendOption.ACK_UPMULTIHOP_BROADCAST
     * Method: serialize()
     */
    @Test
    public void testSerializeSendOptionAckUpMultihopBroadcast() throws Exception {
        List<Integer> serialized = new DataTransmission(1000, new int[]{0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39}, SendOption.ACK_UPMULTIHOP_BROADCAST).serialize();
        Assert.assertArrayEquals(
                new Integer[]{
                        0x06, //
                        0x03, 0xE8, //
                        0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, //
                },
                serialized.toArray(new Integer[serialized.size()]));
    }

    /**
     * SendOption.ACK_UPMULTIHOP_DOWNMULTIHOP
     * Method: serialize()
     */
    @Test
    public void testSerializeSendOptionAckUpMultihopDownMultihop() throws Exception {
        List<Integer> serialized = new DataTransmission(1000, new int[]{0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39}, SendOption.ACK_UPMULTIHOP_DOWNMULTIHOP).serialize();
        Assert.assertArrayEquals(
                new Integer[]{
                        0x0A, //
                        0x03, 0xE8, //
                        0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, //
                },
                serialized.toArray(new Integer[serialized.size()]));
    }
}
