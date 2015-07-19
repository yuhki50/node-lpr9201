/*
 * 結果
 * 読出し成功時: ProfileParameter
 * 読出し失敗時: Nack
 */
class ReadProfileParameter implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x03;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * プロファイルパラメータ
     */
    public profileParameterType : ProfileParameterType;

    /**
     * プロファイルパラメータ設定読出し
     * 設定値を読み出す
     *
     * @param profileParameterType プロファイルパラメータ
     */
    public ReadProfileParameter(profileParameterType: ProfileParameterType) {
        this.profileParameterType = profileParameterType;
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return ReadProfileParameter.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ReadProfileParameter.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        return [this.profileParameterType.getParamNo() & 0xFF];
    }
}
