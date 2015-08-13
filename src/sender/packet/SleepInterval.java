package com.yuhki50.lpr9201.sender.packet;

import com.yuhki50.lpr9201.util.ByteUtil;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


/*
 * 結果
 * 成功時: なし (Sleep状態に入ります)
 * WakeUp 信号で復帰後、WUP リザルトを返す
 * (すでに Sleep 解除後でも WakeUp 信号入力で WUP リザルトを返す)
 *
 * 失敗時: Nack
 * 受信データが残っている場合や、マルチホップ中継動作中等の処理中は NACK になる
 * マルチホップ通信を使用する場合は、Sleep 状態に入れない
 *
 * 指定時間により Sleep に入るタイミングで、受信データが残っている場合や、やマルチホップ中継動作中等の処理中は Sleep に入りません。Sleep に入れる状態になったタイミングで Sleep に入ります。
 * ※ WakeUp端子を制御することで解除されます。
 */
public class SleepInterval implements ISendPacket {
    /**
     * コマンドID
     */
    protected static final int COMMAND_ID = 0x0A;

    /**
     * データ長のバイト数
     */
    protected static final int DATA_LENGTH_BYTE_SIZE = 1;

    /**
     * Sleep時間
     */
    public int sleepTime;

    /**
     * 受信時間
     */
    public int receiveTime;

    /**
     * 指定時間Sleep設定
     * モジュールを指定された時間 Sleep 状態にする 指定時間経過後、Sleep 解除し指定時間受信を行い、Sleep 状態と受信状態を繰り返す
     *
     * @param sleepTime   Sleep状態に設定する時間（単位秒） 1 ~ 65535秒
     * @param receiveTime Sleep解除後に受信動作を行う時間（単位ミリ秒） 1 ~ 255ミリ秒
     */
    public SleepInterval(int sleepTime, int receiveTime) {
        this.sleepTime = sleepTime;
        this.receiveTime = receiveTime;
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
        datas.addAll(Arrays.asList(ByteUtil.splitBigEndian(this.sleepTime, 2)));
        datas.add(this.receiveTime & 0xFF);
        return datas;
    }
}
