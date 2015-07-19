package com.yuhki50.lpr9201.sender.packet;

import com.yuhki50.lpr9201.sender.option.ProfileParameterType;
import com.yuhki50.lpr9201.util.Util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * 結果
 * 設定成功時: Ack
 * 設定失敗時: Nack
 *
 * このコマンドで FLASH への保存は行いません。
 */
public class WriteProfileParameter implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x02;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * プロファイルパラメータ
     */
    public ProfileParameterType profileParameterType;

    /**
     * パラメータ設定値
     */
    public long paramValue;

    /**
     * プロファイルパラメータ設定
     * 各プロファイルの各種設定値を設定する
     *
     * @param profileParameterType プロファイルパラメータ
     */
    public WriteProfileParameter(ProfileParameterType profileParameterType, long paramValue) {
        this.profileParameterType = profileParameterType;
        this.paramValue = paramValue;
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
        datas.add(this.profileParameterType.getParamNo());
        datas.addAll(Arrays.asList(Util.splitBigEndian(this.paramValue, this.profileParameterType.getDataLengthByteSize())));
        return datas;
    }
}
