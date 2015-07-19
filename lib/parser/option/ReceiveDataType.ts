package com.yuhki50.lpr9201.parser.option;

public enum ReceiveDataType {
    /**
     * 通常データ
     */
    NORMAL,

    /**
     * マルチホップデータ
     */
    MULTIHOP;

    /**
     * 順序から列挙子を取得する
     *
     * @param ordinal 順序
     * @return 順序に対応した列挙子
     */
    public static ReceiveDataType getEnumByOrdinal(int ordinal) {
        ReceiveDataType[] enumArray = ReceiveDataType.values();

        for (ReceiveDataType enumInt : enumArray) {
            if (ordinal == enumInt.ordinal()) {
                return enumInt;
            }
        }

        throw new IllegalArgumentException("not found ordinal: " + ordinal);
    }
}
