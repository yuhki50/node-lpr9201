/*
 * 結果
 * 設定成功時: Ack
 * 設定失敗時: Nack
 *
 * このコマンドで FLASH への保存は行いません。
 */
class WriteProfileParameter implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x02;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * プロファイルパラメータ
     */
    public profileParameterType : ProfileParameterType;

    /**
     * パラメータ設定値
     */
    public paramValue : number;

    /**
     * プロファイルパラメータ設定
     * 各プロファイルの各種設定値を設定する
     *
     * @param profileParameterType プロファイルパラメータ
     */
    public WriteProfileParameter(profileParameterType : ProfileParameterType, paramValue : number) {
        this.profileParameterType = profileParameterType;
        this.paramValue = paramValue;
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return WriteProfileParameter.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return WriteProfileParameter.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        var datas : number[] = [];
        datas.push(this.profileParameterType.getParamNo());
        datas = datas.concat(Util.splitBigEndian(this.paramValue, this.profileParameterType.getDataLengthByteSize()));
        return datas;
    }
}
