/*
 * 結果
 * 送信成功時: Ack
 *   ACK 有り送信時は送信先から ACK 受信時、ACK 無し送信時は送信完了時
 *
 * 送信失敗時: Nack
 */
class DataTransmission implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x01;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 2;

    /**
     * 送信先アドレス
     */
    public destinationAddress : number;

    /**
     * 送信データ
     */
    public data : number[];

    /**
     * 送信オプション
     */
    public option : SendOption;

    /**
     * データ送信
     * データ送信を実行
     *
     * @param destinationAddress 送信先(マルチホップ送信時は最終送信先)のアドレスを設定
     * @param data               送信するデータを設定 最大長は500オクテット
     * @param option             送信オプション
     */
    public DataTransmission(destinationAddress : number, data : number[], option : SendOption) {
        this.destinationAddress = destinationAddress;
        this.data = data;
        this.option = option;
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return DataTransmission.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return DataTransmission.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        var datas : number = [];
        datas.push(this.option.getOptionCode());
        datas = datas.concat(Arrays.asList(Util.splitBigEndian(this.destinationAddress, 2)));
        datas = datas.concat(this.data);
        return datas;
    }
}
