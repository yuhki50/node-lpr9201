package com.yuhki50.lpr9201.parser.packet;

public interface IParsePacket {
    /**
     * 結果コードを取得する
     *
     * @return 結果コード
     */
    int getResultCode();

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    int getDataLengthByteSize();

    /**
     * パース可能か
     *
     * @return true:パース可能, false: パース不可
     */
    boolean canParse();
}
