interface ISendPacket {
    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    getCommandId() : number;

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    getDataLengthByteSize() : number;

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return * 構築したパケットをシリアライズしたデータ列
     */
    serialize() : number[];
}
