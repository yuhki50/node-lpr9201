enum ProfileParameterType {
    ///**
    // * PAN ID
    // * 0x0001 ~ 0x3FFF
    // */
    //PAN_ID(0x01, 2),
    //
    ///**
    // * ショートアドレス
    // * 0x0000 ~ 0xFFFD
    // */
    //SHORT_ADDRESS(0x02, 2),
    //
    ///**
    // * チャネル
    // * 0, 33 ~ 61
    // */
    //CHANNEL(0x03, 1),
    //
    ///**
    // * 送信出力
    // * 0: 1mW, 1: 10mW, 2: 20mW
    // */
    //RADIO_POWER(0x04, 1),
    //
    ///**
    // * 転送レート
    // * 1: 50kbps, 2: 100kbps
    // */
    //TRANSFER_RATE(0x05, 1),
    //
    ///**
    // * 再送回数
    // * 0 ~ 5
    // */
    //TRANSFER_RETRY_COUNT(0x06, 1),
    //
    ///**
    // * 自動起動要求
    // * 0: 自動起動要求なし, 1: 自動起動要求あり
    // */
    //AUTO_ACTIVATE_REQUEST(0x07, 1),
    //
    ///**
    // * ボーレート
    // * 0: 9600bps, 1: 19200bps, 2: 38400bps, 3: 57600bps, 4: 115200bps, 5: 230400bps
    // */
    //BAUDRATE(0x08, 1),
    //
    ///**
    // * フロー制御
    // * 0: フロー制御無し, 1: ハードウェアフロー
    // */
    //FLOW_CONTROL(0x09, 1),
    //
    ///**
    // * ブロードキャスト 受信
    // * 0: ブロードキャスト受信しない, 1: ブロードキャスト受信許可
    // */
    //RECEIVE_BROADCAST(0x0A, 1),
    //
    ///**
    // * マルチホップ enable
    // * 0: マルチホップ送信しない, 1: マルチホップ送信許可
    // */
    //MULTIHOP_ENABLE(0x0B, 1),
    //
    ///**
    // * マルチホップ 送信先数
    // * 0 ~ 10
    // */
    //MULTIHOP_DESTINATION_COUNT(0x0C, 1),
    //
    ///**
    // * マルチホップ 送信先1
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION1(0x0D, 2),
    //
    ///**
    // * マルチホップ 送信先2
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION2(0x0E, 2),
    //
    ///**
    // * マルチホップ 送信先3
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION3(0x0F, 2),
    //
    ///**
    // * マルチホップ 送信先4
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION4(0x10, 2),
    //
    ///**
    // * マルチホップ 送信先5
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION5(0x11, 2),
    //
    ///**
    // * マルチホップ 送信先6
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION6(0x1A, 2),
    //
    ///**
    // * マルチホップ 送信先7
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION7(0x1B, 2),
    //
    ///**
    // * マルチホップ 送信先8
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION8(0x1C, 2),
    //
    ///**
    // * マルチホップ 送信先9
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION9(0x1D, 2),
    //
    ///**
    // * マルチホップ 送信先10
    // * 0x0001 ~ 0xFFFD
    // */
    //MULTIHOP_DESTINATION10(0x1E, 2),
    //
    ///**
    // * デフォルト プロファイル
    // * 0 ~ 1
    // */
    //DEFAULT_PROFILE(0x12, 1),
    //
    ///**
    // * 受信許可/禁止
    // * 0: 許可(受信する), 1:禁止(受信しない)
    // */
    //PROHIBIT_RECEIVE(0x13, 1),
    //
    ///**
    // * 受信通知
    // * 0: RING 信号で通知, 1: UART のリザルトで通知, 2: 通常データ, 3: 付加データ
    // */
    //NOTIFY_RECEIVE(0x14, 1),
    //
    ///**
    // * 親 IEEE アドレス
    // * 0x0000000000000001 ~ 0xFFFFFFFFFFFFFFFF
    // */
    //PARENT_IEEE_ADDRESS(0x15, 8),
    //
    ///**
    // * 自 IEEE アドレス (ReadOnly)
    // * 0x0000000000000001 ~ 0xFFFFFFFFFFFFFFFF
    // */
    //IEEE_ADDRESS(0x16, 8),
    //
    ///**
    // * 親ショートアドレス
    // * 0x0000 ~ 0xFFFD
    // * 0:の場合 0xAA00 に設定
    // */
    //PARENT_SHORT_ADDRESS(0x17, 2),
    //
    ///**
    // * デバイスタイプ
    // * 0: コーディネータ, 1: エンドデバイス
    // */
    //DEVICE_TYPE(0x18, 2),
    //
    ///**
    // * LIFE
    // * マルチホップ時の LIFE 値
    // * 1 ~ 63
    // */
    //LIFE(0x19, 1),
    //
    ///**
    // * データバイト間隔
    // * UART の 1Byte 間隔のエラータイマー (ms)
    // * 10 ~ 1000
    // */
    //DATA_BYTE_INTERVAL(0x1F, 2),
    //
    ///**
    // * RINGタイマー
    // * RINGリザルト再送時間
    // * 0: 再送なし, 1: 50ms, 2: 100ms, 3:500ms
    // */
    //RING_TIMER(0x20, 1);
    //
    ///**
    // * パラメータNo
    // */
    //protected paramNo : number;
    //
    ///**
    // * データ長のバイト数
    // */
    //protected dataLengthByteSize : number;
    //
    ///**
    // * @param paramNo            パラメータNo
    // * @param dataLengthByteSize データ長のバイト数
    // */
    //constructor(paramNo : number, dataLengthByteSize : number) {
    //    this.paramNo = paramNo;
    //    this.dataLengthByteSize = dataLengthByteSize;
    //}
    //
    ///**
    // * パラメータNoを取得する
    // *
    // * @return パラメータNo
    // */
    //public getParamNo() : number {
    //    return this.paramNo;
    //}
    //
    ///**
    // * データ長バイトサイズを取得
    // *
    // * @return データ長バイトサイズ
    // */
    //public getDataLengthByteSize() : number {
    //    return this.dataLengthByteSize;
    //}
    //
    ///**
    // * パラメータNoから列挙子を取得する
    // *
    // * @param paramNo パラメータNo
    // * @return パラメータNoに対応した列挙子
    // */
    //public static getEnumByParamNo(paramNo : number) : ProfileParameterType {
    //    var enumArray : ProfileParameterType[] = ProfileParameterType.values();
    //
    //    for (ProfileParameterType enumInt : enumArray) {
    //        if (paramNo == enumInt.paramNo) {
    //            return enumInt;
    //        }
    //    }
    //
    //    throw new IllegalArgumentException("not found paramNo: " + paramNo);
    //}
}
