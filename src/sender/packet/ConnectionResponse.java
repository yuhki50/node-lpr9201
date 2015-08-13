package com.yuhki50.lpr9201.sender.packet;

import com.yuhki50.lpr9201.util.ByteUtil;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * 結果
 * 成功時: ConnectionResult
 *   0x00: 成功(5.2.12接続結果 参照)
 *
 * 失敗時 : ConnectionResult
 *   0x01: 失敗(5.2.12接続結果 参照)
 *   0xDB以上: 5.2.3NACK を参照
 */
public class ConnectionResponse implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x0D;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * 子接続の可否
     */
    public boolean responseType;

    /**
     * 許可IEEEアドレス
     */
    public long ieeeAddress;

    /**
     * 子側に設定するショートアドレス
     */
    public int childShortAddress;

    /**
     * 接続応答
     * 親子モード時の子接続の接続通知に対する応答をする
     *
     * @param responseType      子接続の可否
     * @param ieeeAddress       許可IEEEアドレス (接続通知と同じIEEEアドレスを設定してください)
     * @param childShortAddress 子側に設定するショートアドレス
     */
    public ConnectionResponse(boolean responseType, long ieeeAddress, int childShortAddress) {
        this.responseType = responseType;
        this.ieeeAddress = ieeeAddress;
        this.childShortAddress = childShortAddress;
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
        datas.add(this.responseType ? 1 : 0);
        datas.addAll(Arrays.asList(ByteUtil.splitBigEndian(this.ieeeAddress, 8)));
        datas.addAll(Arrays.asList(ByteUtil.splitBigEndian(this.childShortAddress, 2)));
        return datas;
    }
}
