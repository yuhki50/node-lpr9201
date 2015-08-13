package com.yuhki50.lpr9201.sender.packet;

import com.yuhki50.lpr9201.util.ByteUtil;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * 結果
 * 読出し成功時: Ack
 * 読出し失敗時: Nack
 */
public class DeviceInfoConfig implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x21;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * デバイスIndex  0x00 ~ 0x40
     */
    public int deviceIndex;

    /**
     * 0x0001 ~ 0x3FFF
     */
    public int panId;

    /**
     * ショートアドレス  0x0000 ~ 0xFFFD
     */
    public int shortAddress;

    /**
     * IEEEアドレス  0x0000000000000001 ~ 0xFFFFFFFFFFFFFFFF
     */
    public long ieeeAddress;

    /**
     * デバイス情報設定
     * セキュリティのデバイス情報を設定します。セキュリティ ON で通信する相手ノードの情報を設定します。
     *
     * @param deviceIndex  デバイスIndex  0x00 ~ 0x40
     * @param panId        PAN ID  0x0001 ~ 0x3FFF
     * @param shortAddress ショートアドレス  0x0000 ~ 0xFFFD
     * @param ieeeAddress  IEEEアドレス  0x0000000000000001 ~ 0xFFFFFFFFFFFFFFFF
     */
    public DeviceInfoConfig(int deviceIndex, int panId, int shortAddress, long ieeeAddress) {
        this.deviceIndex = deviceIndex;
        this.panId = panId;
        this.shortAddress = shortAddress;
        this.ieeeAddress = ieeeAddress;
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
        datas.addAll(Arrays.asList(ByteUtil.splitBigEndian(this.panId, 2)));
        datas.addAll(Arrays.asList(ByteUtil.splitBigEndian(this.shortAddress, 2)));
        datas.addAll(Arrays.asList(ByteUtil.splitBigEndian(this.ieeeAddress, 8)));
        datas.add(this.deviceIndex);
        return datas;
    }
}
