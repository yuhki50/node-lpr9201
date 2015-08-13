package com.yuhki50.lpr9201.sender.packet;

import java.util.ArrayList;
import java.util.List;

/*
 * 結果
 * 読出し成功時: SecurityConfig
 * 読出し失敗時: Nack
 */
public class GetSecurityState implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x23;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * セキュリティ状態取得
     * セキュリティの状態を取得する
     */
    public GetSecurityState() {

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
