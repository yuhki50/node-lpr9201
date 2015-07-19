package com.yuhki50.lpr9201.sender.packet;

import java.util.List;

public interface ISendPacket {
    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    int getCommandId();

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    int getDataLengthByteSize();

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return * 構築したパケットをシリアライズしたデータ列
     */
    List<Integer> serialize();
}
