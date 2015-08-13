package com.yuhki50.lpr9201.util;

public class Checksum {
    private Checksum() {

    }

    /**
     * Checksumを計算する
     * 1byte毎にXORした値
     *
     * @param arr    チェックサムを計算するデータ
     * @param length チェックサムを計算する配列の長さ
     * @return 計算したチェックサム値
     */
    public static int calculate(int[] arr, int length) {
        int checksum = 0;

        for (int i = 0; i < Math.min(arr.length, length); i++) {
            checksum ^= arr[i];
        }

        return checksum;
    }

    /**
     * Checksumを計算する
     * 1byte毎にXORした値
     *
     * @param arr チェックサムを計算するデータ
     * @return 計算したチェックサム値
     */
    public static int calculate(int[] arr) {
        return calculate(arr, arr.length);
    }

    /**
     * Checksumを計算する
     * 1byte毎にXORした値
     *
     * @param arr    チェックサムを計算するデータ
     * @param length チェックサムを計算する配列の長さ
     * @return 計算したチェックサム値
     */
    public static Integer calculate(Integer[] arr, int length) {
        int checksum = 0;

        for (int i = 0; i < Math.min(arr.length, length); i++) {
            checksum ^= arr[i];
        }

        return checksum;
    }

    /**
     * Checksumを計算する
     * 1byte毎にXORした値
     *
     * @param arr チェックサムを計算するデータ
     * @return 計算したチェックサム値
     */
    public static Integer calculate(Integer[] arr) {
        return calculate(arr, arr.length);
    }
}
