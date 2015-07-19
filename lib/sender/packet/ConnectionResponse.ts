/*
 * 結果
 * 成功時: ConnectionResult
 *   0x00: 成功(5.2.12接続結果 参照)
 *
 * 失敗時 : ConnectionResult
 *   0x01: 失敗(5.2.12接続結果 参照)
 *   0xDB以上: 5.2.3NACK を参照
 */
class ConnectionResponse implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x0D;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 子接続の可否
     */
    public responseType : boolean;

    /**
     * 許可IEEEアドレス
     */
    public ieeeAddress : number;

    /**
     * 子側に設定するショートアドレス
     */
    public childShortAddress : number;

    /**
     * 接続応答
     * 親子モード時の子接続の接続通知に対する応答をする
     *
     * @param responseType      子接続の可否
     * @param ieeeAddress       許可IEEEアドレス (接続通知と同じIEEEアドレスを設定してください)
     * @param childShortAddress 子側に設定するショートアドレス
     */
    public ConnectionResponse(responseType : boolean, ieeeAddress : number, childShortAddress : number) {
        this.responseType = responseType;
        this.ieeeAddress = ieeeAddress;
        this.childShortAddress = childShortAddress;
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number{
        return ConnectionResponse.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ConnectionResponse.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        var datas : number[]= [];
        datas.push(this.responseType ? 1 : 0);
        datas = datas.concat(Arrays.asList(Util.splitBigEndian(this.ieeeAddress, 8)));
        datas = datas.concat(Arrays.asList(Util.splitBigEndian(this.childShortAddress, 2)));
        return datas;
    }
}
