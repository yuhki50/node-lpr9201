/*
 * 結果
 * 成功時: Ack
 * 失敗時: Nack
 */
class ResetProfile implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x08;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * プロファイルパラメータ初期化
     * 各種パラメータ値を初期値に戻す
     */
    public ResetProfile() {

    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return ResetProfile.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ResetProfile.DATA_LENGTH_BYTE_SIZE;
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
