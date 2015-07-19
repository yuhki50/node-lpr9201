package com.yuhki50.lpr9201.util;

import java.util.ArrayList;
import java.util.List;

public class Util {
    private Util() {

    }

    /**
     * 指定されたデータ長の上位1byteづつ切り出す {high, mid... low}
     *
     * @param value 切り出す値
     * @param length 出力する配列長
     * @return 切り出した数値の配列
     */
    public static Integer[] splitBigEndian(long value, int length) {
        List<Integer> list = new ArrayList<Integer>();

        for (int i = length - 1; i >= 0; i--) {
            list.add((int) (value >>> (8 * i)) & 0xFF);
        }

        return list.toArray(new Integer[list.size()]);
    }

    /**
     * 指定されたデータ長の下位1byteづつ切り出す {low, mid... high}
     *
     * @param value 切り出す値
     * @param length 出力する配列長
     * @return 切り出した数値の配列
     */
    public static Integer[] splitLittleEndian(long value, int length) {
        List<Integer> list = new ArrayList<Integer>();

        for (int i = 0; i < length; i++) {
            list.add((int) (value >>> (8 * i)) & 0xFF);
        }

        return list.toArray(new Integer[list.size()]);
    }

    /**
     * 指定された配列を上位から結合する {high, mid... low}
     *
     * @param values 結合する配列
     * @return 結合された数値
     */
    public static long mergeBigEndian(int[] values) {
        long dest = 0;

        for (int value : values) {
            dest = (dest << 8) | value;
        }

        return dest;
    }

    /**
     * 指定された配列を下位から結合する {low, mid... high}
     *
     * @param values 結合する配列
     * @return 結合された数値
     */
    public static long mergeLittleEndian(int[] values) {
        long dest = 0;

        for (int i = 1; i <= values.length; i++) {
            dest = (dest << 8) | values[values.length - i];
        }

        return dest;
    }
}
