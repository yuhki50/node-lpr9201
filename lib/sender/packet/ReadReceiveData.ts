package com.yuhki50.lpr9201.sender.packet;

import java.util.ArrayList;
import java.util.List;

/*
 * 結果
 * 設定成功時: ReceiveData
 * 設定失敗時: Nack
 *
 * 受信データバッファは2段です。 受信データバッファにデータが2段埋まっている場合は、受信した順番でデータを読み出せます。
 */
public class ReadReceiveData implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x04;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 受信データ読出し
     * 最後に受信した受信データを読出す
     */
    public ReadReceiveData() {

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
