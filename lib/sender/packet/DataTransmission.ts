package com.yuhki50.lpr9201.sender.packet;

import com.yuhki50.lpr9201.util.Util;
import com.yuhki50.lpr9201.sender.option.SendOption;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
 * 結果
 * 送信成功時: Ack
 *   ACK 有り送信時は送信先から ACK 受信時、ACK 無し送信時は送信完了時
 *
 * 送信失敗時: Nack
 */
public class DataTransmission implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x01;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 2;

    /**
     * 送信先アドレス
     */
    public int destinationAddress;

    /**
     * 送信データ
     */
    public int[] data;

    /**
     * 送信オプション
     */
    public SendOption option;

    /**
     * データ送信
     * データ送信を実行
     *
     * @param destinationAddress 送信先(マルチホップ送信時は最終送信先)のアドレスを設定
     * @param data               送信するデータを設定 最大長は500オクテット
     * @param option             送信オプション
     */
    public DataTransmission(int destinationAddress, int[] data, SendOption option) {
        this.destinationAddress = destinationAddress;
        this.data = data;
        this.option = option;
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
        datas.add(this.option.getOptionCode());
        datas.addAll(Arrays.asList(Util.splitBigEndian(this.destinationAddress, 2)));

        for (int d : this.data) {
            datas.add(d & 0xFF);
        }

        return datas;
    }
}
