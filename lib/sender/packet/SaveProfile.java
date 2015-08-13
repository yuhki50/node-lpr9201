package com.yuhki50.lpr9201.sender.packet;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
 * 結果
 * 保存成功時: Ack
 * 保存失敗時: Nack
 */
public class SaveProfile implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x06;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * プロファイルNo
     */
    public int profileNo;

    /**
     * プロファイル保存
     * 設定コマンドで設定可能な各種パラメータ値を指定されたプロファイル番号のエリアに保存する
     *
     * @param profileNo 保存するプロファイル番号 0 ~ 1
     */
    public SaveProfile(int profileNo) {
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
