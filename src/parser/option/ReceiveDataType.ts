enum ReceiveDataType {
    /**
     * 通常データ
     */
    NORMAL,

    /**
     * マルチホップデータ
     */
    MULTIHOP,
}

class ReceiveDataType_ {
    /**
     * 順序から列挙子を取得する
     *
     * @param ordinal 順序
     * @return 順序に対応した列挙子
     */
    public static getEnumByOrdinal(ordinal : number) : ReceiveDataType {
        if (ReceiveDataType[ordinal]) {
            return ordinal;
        }

        throw new Error("not found ordinal: " + ordinal);
    }
}
