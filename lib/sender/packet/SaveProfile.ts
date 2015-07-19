/*
 * 結果
 * 保存成功時: Ack
 * 保存失敗時: Nack
 */
class SaveProfile implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x06;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * プロファイルNo
     */
    public profileNo : number;

    /**
     * プロファイル保存
     * 設定コマンドで設定可能な各種パラメータ値を指定されたプロファイル番号のエリアに保存する
     *
     * @param profileNo 保存するプロファイル番号 0 ~ 1
     */
    public SaveProfile(profileNo : number) {
        this.profileNo = profileNo;
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return SaveProfile.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return SaveProfile.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        return [this.profileNo & 0xFF];
    }
}
