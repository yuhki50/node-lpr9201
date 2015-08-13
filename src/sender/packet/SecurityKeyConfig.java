package com.yuhki50.lpr9201.sender.packet;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * 結果
 * 設定成功時: Ack
 * 設定失敗時: Nack
 */
public class SecurityKeyConfig implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x22;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * セキュリティレベル    0x01 ~ 0x07
     */
    public int securityLevel;

    /**
     * セキュリティキー情報
     */
    public Integer[] securityKey;

    /**
     * キー情報設定
     * セキュリティのキー情報を設定する
     *
     * @param securityLevel セキュリティレベル  0x01 ~ 0x07
     * @param securityKey   セキュリティキー情報
     */
    public SecurityKeyConfig(int securityLevel, Integer[] securityKey) {
        this.securityLevel = securityLevel;
        this.securityKey = securityKey;
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
        List<Integer> datas = new ArrayList<Integer>();
        datas.addAll(Arrays.asList(this.securityKey));
        datas.add(this.securityLevel);
        return datas;
    }
}
