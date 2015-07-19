package com.yuhki50.lpr9201.sender.packet;

import java.util.ArrayList;
import java.util.List;

/*
 * 結果
 * 読出し成功時: Rssi
 * 読出し失敗時: Nack
 *
 * 最後に受信した自ノード宛の有効なデータの RSSI 値を返します。 マルチホップの中継機として使用した場合、中継データの RSSI 値は保存されません。
 */
public class ReadRssiData implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x05;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * RSSI データ読出し
     * 最後に受信したデータの RSSI データを読出す
     */
    public ReadRssiData() {

    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public int getCommandId() {
        return COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public int getDataLengthByteSize() {
        return DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public List<Integer> serialize() {
        return new ArrayList<Integer>();
    }
}
