package com.yuhki50.lpr9201.sender.packet;

import com.yuhki50.lpr9201.sender.option.ProfileParameterType;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*
 * 結果
 * 読出し成功時: ProfileParameter
 * 読出し失敗時: Nack
 */
public class ReadProfileParameter implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x03;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * プロファイルパラメータ
     */
    public ProfileParameterType profileParameterType;

    /**
     * プロファイルパラメータ設定読出し
     * 設定値を読み出す
     *
     * @param profileParameterType プロファイルパラメータ
     */
    public ReadProfileParameter(ProfileParameterType profileParameterType) {
        this.profileParameterType = profileParameterType;
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
        return new ArrayList<Integer>(Collections.singletonList(this.profileParameterType.getParamNo() & 0xFF));
    }
}
