/*
 * 結果
 * 成功時: Ack
 * 失敗時: Nack
 */
class ActivateRequest implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x0B;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * 起動要求
     * 無線通信を可能にする 電源投入後やリセット後、またプロファイルパラメータである PAN ID、ショートアドレス、チャネル、送信出力、 転送レートを変更した際は、この起動要求コマンドを発行する
     */
    public ActivateRequest() {
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return ActivateRequest.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return ActivateRequest.DATA_LENGTH_BYTE_SIZE;
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
