package com.yuhki50.lpr9201.util;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ChecksumTest {
    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: calculate(int[] arr, int length)
     */
    @Test
    public void testCalculateWithLength() throws Exception {
        int[] arr = getIntData();
        Assert.assertEquals(0x08, Checksum.calculate(arr, arr.length - 1));
    }

    /**
     * Method: calculate(int[] arr)
     */
    @Test
    public void testCalculate() throws Exception {
        int[] arr = getIntData();
        Assert.assertEquals(0x01, Checksum.calculate(arr));
    }

    /**
     * Method: calculate(Integer[] arr, int length)
     */
    @Test
    public void testCalculateWithLength2() throws Exception {
        Integer[] arr = getIntegerData();
        Assert.assertEquals(0x08, (int) Checksum.calculate(arr, arr.length - 1));
    }

    /**
     * Method: calculate(Integer[] arr)
     */
    @Test
    public void testCalculate2() throws Exception {
        Integer[] arr = getIntegerData();
        Assert.assertEquals(0x01, (int) Checksum.calculate(arr));
    }

    /**
     * int配列のテストデータを取得する
     *
     * @return
     */
    int[] getIntData() {
        return new int[]{
                0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09
        };
    }

    /**
     * Integer配列のテストデータを取得する
     *
     * @return
     */
    Integer[] getIntegerData() {
        return new Integer[]{
                0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09
        };
    }
}
