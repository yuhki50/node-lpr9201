/*
 * 結果
 * 成功時: なし (Sleep状態に入ります)
 * WakeUp 信号で復帰後、WUP リザルトを返す
 * (すでに Sleep 解除後でも WakeUp 信号入力で WUP リザルトを返す)
 *
 * 失敗時: Nack
 * 受信データが残っている場合や、マルチホップ中継動作中等の処理中は NACK になる
 * マルチホップ通信を使用する場合は、Sleep 状態に入れない
 */
class Sleep implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x09;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * Sleep設定
     * モジュールをSleep状態にする
     * WakeUp 信号でのみ Sleep 解除できる
     */
    public Sleep() {

    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return Sleep.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return Sleep.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        return [];
    }
}
