package com.yuhki50.lpr9201.sender.packet;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
 * 結果
 * 読出し成功時: Ack
 * 読出し失敗時: Nack
 */
public class LoadProfile implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x07;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * プロファイルNo
     */
    public int profileNo;

    /**
     * プロファイルパラメータ設定
     * 各プロファイルの各種設定値を設定する
     *
     * @param profileNo 読み出すプロファイル番号 0 ~ 1
     */
    public LoadProfile(int profileNo) {
        this.profileNo = profileNo;
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
        return new ArrayList<Integer>(Collections.singletonList(this.profileNo & 0xFF));
    }
}
