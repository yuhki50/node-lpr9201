/*
 * 結果
 * 読出し成功時: Ack
 * 読出し失敗時: Nack
 */
class LoadProfile implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x07;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * プロファイルNo
     */
    public profileNo : number;

    /**
     * プロファイルパラメータ設定
     * 各プロファイルの各種設定値を設定する
     *
     * @param profileNo 読み出すプロファイル番号 0 ~ 1
     */
    public LoadProfile(profileNo : number) {
        this.profileNo = profileNo;
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return LoadProfile.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return LoadProfile.DATA_LENGTH_BYTE_SIZE;
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
