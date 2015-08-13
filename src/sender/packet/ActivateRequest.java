package com.yuhki50.lpr9201.sender.packet;

import java.util.ArrayList;
import java.util.List;

/*
 * 結果
 * 成功時: Ack
 * 失敗時: Nack
 */
public class ActivateRequest implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x0B;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 起動要求
     * 無線通信を可能にする 電源投入後やリセット後、またプロファイルパラメータである PAN ID、ショートアドレス、チャネル、送信出力、 転送レートを変更した際は、この起動要求コマンドを発行する
     */
    public ActivateRequest() {
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
