interface IParsePacket {
    /**
     * 結果コードを取得する
     *
     * @return 結果コード
     */
    getResultCode() : number;

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    getDataLengthByteSize() : number;

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    canParse() : boolean;
}
