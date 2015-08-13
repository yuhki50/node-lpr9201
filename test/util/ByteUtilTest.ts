package com.yuhki50.lpr9201.util;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ByteUtilTest {
    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * ビックエンディアンで1byte分の入力で1byte分取り出す
     * Method: splitBitEndian(long value, int length)
     */
    @Test
    public void testSplitBigEndianIn1ByteOut1Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x01}, ByteUtil.splitBigEndian(0x01L, 1));
    }

    /**
     * ビックエンディアンで2byte分の入力で1byte分取り出す
     * Method: splitBitEndian(long value, int length)
     */
    @Test
    public void testSplitBigEndianIn2ByteOut1Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x00}, ByteUtil.splitBigEndian(0x0100L, 1));
    }

    /**
     * ビックエンディアンで2byte分の入力で2byte分取り出す
     * Method: splitBitEndian(long value, int length)
     */
    @Test
    public void testSplitBigEndianIn2ByteOut2Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x01, 0x02}, ByteUtil.splitBigEndian(0x0102L, 2));
    }

    /**
     * ビックエンディアンで3byte分の入力で2byte分取り出す
     * Method: splitBitEndian(long value, int length)
     */
    @Test
    public void testSplitBigEndianIn3ByteOut2Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x02, 0x03}, ByteUtil.splitBigEndian(0x010203L, 2));
    }

    /**
     * ビックエンディアンで3byte分の入力で3byte分取り出す
     * Method: splitBitEndian(long value, int length)
     */
    @Test
    public void testSplitBigEndianIn3ByteOut3Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x01, 0x02, 0x03}, ByteUtil.splitBigEndian(0x010203L, 3));
    }

    /**
     * リトルエンディアンで1byte分の入力で1byte分取り出す
     * Method: splitLittleEndian(long value, int length)
     */
    @Test
    public void testSplitLittleEndianIn1ByteOut1Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x01}, ByteUtil.splitLittleEndian(0x01L, 1));
    }

    /**
     * リトルエンディアンで2byte分の入力で1byte分取り出す
     * Method: splitLittleEndian(long value, int length)
     */
    @Test
    public void testSplitLittleEndianIn2ByteOut1Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x00}, ByteUtil.splitLittleEndian(0x0100L, 1));
    }

    /**
     * リトルエンディアンで2byte分の入力で2byte分取り出す
     * Method: splitLittleEndian(long value, int length)
     */
    @Test
    public void testSplitLittleEndianIn2ByteOut2Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x02, 0x01}, ByteUtil.splitLittleEndian(0x0102L, 2));
    }

    /**
     * リトルエンディアンで3byte分の入力で2byte分取り出す
     * Method: splitLittleEndian(long value, int length)
     */
    @Test
    public void testSplitLittleEndianIn3ByteOut2Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x03, 0x02}, ByteUtil.splitLittleEndian(0x010203L, 2));
    }

    /**
     * リトルエンディアンで3byte分の入力で3byte分取り出す
     * Method: splitLittleEndian(long value, int length)
     */
    @Test
    public void testSplitLittleEndianIn3ByteOut3Byte() throws Exception {
        Assert.assertArrayEquals(new Integer[]{0x03, 0x02, 0x01}, ByteUtil.splitLittleEndian(0x010203L, 3));
    }

    /**
     * ビックエンディアンで1byte分の配列を結合する
     * Method: mergeBigEndian(int[] values)
     */
    @Test
    public void testMergeBigEndian1Byte() throws Exception {
        Assert.assertEquals(0x01L, ByteUtil.mergeBigEndian(new int[]{0x01}));
    }

    /**
     * ビックエンディアンで2byte分の配列を結合する
     * Method: mergeBigEndian(int[] values)
     */
    @Test
    public void testMergeBigEndian2Byte() throws Exception {
        Assert.assertEquals(0x0102L, ByteUtil.mergeBigEndian(new int[]{0x01, 0x02}));
    }

    /**
     * ビックエンディアンで3byte分の配列を結合する
     * Method: mergeBigEndian(int[] values)
     */
    @Test
    public void testMergeBigEndian3Byte() throws Exception {
        Assert.assertEquals(0x010203L, ByteUtil.mergeBigEndian(new int[]{0x01, 0x02, 0x03}));
    }

    /**
     * リトルエンディアンで1byte分の配列を結合する
     * Method: mergeLittleEndian(int[] values)
     */
    @Test
    public void testMergeLittleEndian1Byte() throws Exception {
        Assert.assertEquals(0x01L, ByteUtil.mergeLittleEndian(new int[]{0x01}));
    }

    /**
     * リトルエンディアンで2byte分の配列を結合する
     * Method: mergeLittleEndian(int[] values)
     */
    @Test
    public void testMergeLittleEndian2Byte() throws Exception {
        Assert.assertEquals(0x0201L, ByteUtil.mergeLittleEndian(new int[]{0x01, 0x02}));
    }

    /**
     * リトルエンディアンで3byte分の配列を結合する
     * Method: mergeLittleEndian(int[] values)
     */
    @Test
    public void testMergeLittleEndian3Byte() throws Exception {
        Assert.assertEquals(0x030201L, ByteUtil.mergeLittleEndian(new int[]{0x01, 0x02, 0x03}));
    }
}
