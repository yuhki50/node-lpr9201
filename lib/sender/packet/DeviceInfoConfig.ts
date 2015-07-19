/*
 * 結果
 * 読出し成功時: Ack
 * 読出し失敗時: Nack
 */
class DeviceInfoConfig implements ISendPacket {
    /**
     * コマンドID
     */
    private static COMMAND_ID : number = 0x21;

    /**
     * データ長のバイト数
     */
    private static DATA_LENGTH_BYTE_SIZE : number = 1;

    /**
     * デバイスIndex  0x00 ~ 0x40
     */
    public deviceIndex : number;

    /**
     * 0x0001 ~ 0x3FFF
     */
    public panId : number;

    /**
     * ショートアドレス  0x0000 ~ 0xFFFD
     */
    public shortAddress : number;

    /**
     * IEEEアドレス  0x0000000000000001 ~ 0xFFFFFFFFFFFFFFFF
     */
    public ieeeAddress : number;

    /**
     * デバイス情報設定
     * セキュリティのデバイス情報を設定します。セキュリティ ON で通信する相手ノードの情報を設定します。
     *
     * @param deviceIndex  デバイスIndex  0x00 ~ 0x40
     * @param panId        PAN ID  0x0001 ~ 0x3FFF
     * @param shortAddress ショートアドレス  0x0000 ~ 0xFFFD
     * @param ieeeAddress  IEEEアドレス  0x0000000000000001 ~ 0xFFFFFFFFFFFFFFFF
     */
    public DeviceInfoConfig(deviceIndex : number, panId : number, shortAddress : number, ieeeAddress : number) {
        this.deviceIndex = deviceIndex;
        this.panId = panId;
        this.shortAddress = shortAddress;
        this.ieeeAddress = ieeeAddress;
    }

    /**
     * コマンドIDを取得する
     *
     * @return コマンドID
     */
    public getCommandId() : number {
        return DeviceInfoConfig.COMMAND_ID;
    }

    /**
     * データ長のバイト数を取得する
     *
     * @return データ長のバイト数
     */
    public getDataLengthByteSize() : number {
        return DeviceInfoConfig.DATA_LENGTH_BYTE_SIZE;
    }

    /**
     * 構築したパケットをシリアライズしたデータ列を取得する
     *
     * @return 構築したパケットをシリアライズしたデータ列
     */
    public serialize() : number[] {
        List<Integer> datas = new ArrayList<Integer>();
        datas.addAll(Arrays.asList(Util.splitBigEndian(this.panId, 2)));
        datas.addAll(Arrays.asList(Util.splitBigEndian(this.shortAddress, 2)));
        datas.addAll(Arrays.asList(Util.splitBigEndian(this.ieeeAddress, 8)));
        datas.add(this.deviceIndex);
        return datas;
    }
}
