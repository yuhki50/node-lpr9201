enum ChildConnectionResult {
    /**
     * 成功
     */
    SUCCESS, // 0x00

    /**
     * 失敗
     */
    FAILURE, // 0x01

    //以下はNackの0xDB以上と同じ 5.2.3NACK を参照
    /**
     * 受信フレームのフレームカウントが不正
     */
    INCORRECT_FRAME_COUNT_OF_RECEIVED_FRAMES,  // 0xDB

    /**
     * 受信キー使用不可
     */
    RECEIVING_KEY_UNAVAILABLE,  // 0xDC

    /**
     * 受信セキュリティレベル不一致
     */
    RECEIVING_SECURITY_LEVEL_MISMATCH,  // 0xDD

    /**
     * レガシーセキュリティ(IEEE802.15.4-2003)フレーム受信非サポート
     */
    LEGACY_SECURITY_FRAME_RECEIVING_NON_SUPPORT,  // 0xDE

    /**
     * セキュリティフレーム受信非サポート
     */
    SECURITY_FRAME_RECEIVING_NON_SUPPORT,  // 0xDF

    /**
     * ビーコンロスト
     */
    BEACON_LOST,  // 0xE0

    /**
     * 該当チャネル使用不可(CSMA-CA 失敗)
     */
    CORRESPONDING_CHANNEL_DISABLED,  // 0xE1

    /**
     * PAN コーディネータ GTS リクエスト拒否
     */
    PAN_COORDINATOR_GTS_REQUEST_DENIED,  // 0xE2

    /**
     * トランシーバ無効処理失敗
     */
    TRANSCEIVER_INVALID_PROCESSING_FAILURE,  // 0xE3

    /**
     * セキュア受信フレーム復号化失敗
     */
    SECURE_RECEPTION_FRAME_DECODING_FAILURE,  // 0xE4

    /**
     * 最大送信フレーム長超過
     */
    MAXIMUM_TRANSMISSION_FRAME_LENGTH_EXCEEDED,  // 0xE5

    /**
     * GTS送信失敗
     */
    GTS_TRANSMISSION_FAILURE,  // 0xE6

    /**
     * MSDUハンドル不正
     */
    MSDU_HANDLE_FRAUD,  // 0xE7

    /**
     * パラメータ不正
     */
    PARAMETERS_FRAUD,  // 0xE8

    /**
     * ACK非受信
     */
    ACK_NON_RECEPTION,  // 0xE9

    /**
     * ビーコンなし
     */
    NO_BEACON,  // 0xEA

    /**
     * データなし
     */
    NO_DATA,  // 0xEB

    /**
     * ショートアドレスなし
     */
    NO_SHORT_ADDRESS,  // 0xEC

    /**
     * CAP期間内未完了により受信許可リクエスト不成功
     */
    RECEIVED_PERMISSION_REQUEST_UNSUCCESSFUL_BY_CAP_PERIOD_IN_UNFINISHED,  // 0xED

    /**
     * PAN ID競合
     */
    PAN_ID_CONFLICT,  // 0xEE

    /**
     * Coordinator Realignmentコマンド受信
     */
    RECEIVE_COORDINATOR_REALIGNMENT_COMMAND,  // 0xEF

    /**
     * 送信期限切
     */
    TRANSMISSION_EXPIRED,  // 0xF0

    /**
     * 送信オーバフロー
     */
    TRANSMISSION_OVERFLOW,  // 0xF1

    /**
     * 送信中(受信要求時)
     */
    DURING_TRANSMISSION,  // 0xF2

    /**
     * 受信キー不正
     */
    RECEIVING_KEY_FRAUD,  // 0xF3

    /**
     * サポートされていないPIBアトリビュート
     */
    NOT_SUPPORTED_PIB_ATTRIBUTES,  // 0xF4

    /**
     * アドレス不正による送信失敗
     */
    SEND_FAILURE_ADDRESS_FRAUD,  // 0xF5

    /**
     * ビーコン間隔より長いシンボル数指定による受信許可要求失敗
     */
    FAILED_RECEIVED_PERMISSION_REQUEST_BY_LONG_BEACON_DURATION,  // 0xF6

    /**
     * スーパフレーム間隔中未完了または次のスーパフレームまで延期 非許可による受信許可要求失敗
     */
    FAILED_RECEIVED_PERMISSION_REQUEST_BY_SUPER_FRAME_DURATION,  // 0xF7

    /**
     * コーディネータのビーコンがトラッキングされていないことによる、 コーディネータのタイミングに基づくビーコン送信開始失敗
     */
    FAILED_TRANSMISSION_BY_COORDINATOR_TIMING,  // 0xF8

    /**
     * テーブルインデックス範囲外によるMAC PIBアトリビュート書込失敗
     */
    FAILED_WRITING_PIB_ATTRIBUTE,  // 0xF9

    /**
     * PANディスクリプタ上限到達によるスキャン中断 1時間あたりの送信時間制限(T108)により送信不可
     */
    LIMIT_TRANSMISSION,  // 0xFA

    /**
     * SET/GETリクエストを読み取り専用識別子に発行
     */
    ISSUE_SET_GET_REQUEST_TO_READONLY_IDENTIFIER,  // 0xFB

    /**
     * スキャン起動中によるスキャンリクエスト失敗
     */
    FAILED_SCAN_REQUEST_DURING_SCANING, // 0xFC

    /**
     * コーディネータビーコンタイミング衝突によるビーコン送信失敗
     */
    FAILED_TRANSMISSION_BEACON_TIMING_COLLISION,  // 0xFD

    /**
     * 上位層から発行されたプリミティブがMLMEでサポートされていない、または処理できない状態
     */
    NOT_SUPPORT_OR_NOT_PROCESSED_PRIMITIVES,  // 0xFE

    /**
     * その他理由
     */
    OTHER_ERROR,  // 0xFF
}

class _ChildConnectionResult {
    protected static RESULT_CODE_MAP:number[] = [
        0x00,  // SUCCESS
        0x01,  // FAILURE
        0xDB,  // INCORRECT_FRAME_COUNT_OF_RECEIVED_FRAMES
        0xDC,  // RECEIVING_KEY_UNAVAILABLE
        0xDD,  // RECEIVING_SECURITY_LEVEL_MISMATCH
        0xDE,  // LEGACY_SECURITY_FRAME_RECEIVING_NON_SUPPORT
        0xDF,  // SECURITY_FRAME_RECEIVING_NON_SUPPORT
        0xE0,  // BEACON_LOST
        0xE1,  // CORRESPONDING_CHANNEL_DISABLED
        0xE2,  // PAN_COORDINATOR_GTS_REQUEST_DENIED
        0xE3,  // TRANSCEIVER_INVALID_PROCESSING_FAILURE
        0xE4,  // SECURE_RECEPTION_FRAME_DECODING_FAILURE
        0xE5,  // MAXIMUM_TRANSMISSION_FRAME_LENGTH_EXCEEDED
        0xE6,  // GTS_TRANSMISSION_FAILURE
        0xE7,  // MSDU_HANDLE_FRAUD
        0xE8,  // PARAMETERS_FRAUD
        0xE9,  // ACK_NON_RECEPTION
        0xEA,  // NO_BEACON
        0xEB,  // NO_DATA
        0xEC,  // NO_SHORT_ADDRESS
        0xED,  // RECEIVED_PERMISSION_REQUEST_UNSUCCESSFUL_BY_CAP_PERIOD_IN_UNFINISHED
        0xEE,  // PAN_ID_CONFLICT
        0xEF,  // RECEIVE_COORDINATOR_REALIGNMENT_COMMAND
        0xF0,  // TRANSMISSION_EXPIRED
        0xF1,  // TRANSMISSION_OVERFLOW
        0xF2,  // DURING_TRANSMISSION
        0xF3,  // RECEIVING_KEY_FRAUD
        0xF4,  // NOT_SUPPORTED_PIB_ATTRIBUTES
        0xF5,  // SEND_FAILURE_ADDRESS_FRAUD
        0xF6,  // FAILED_RECEIVED_PERMISSION_REQUEST_BY_LONG_BEACON_DURATION
        0xF7,  // FAILED_RECEIVED_PERMISSION_REQUEST_BY_SUPER_FRAME_DURATION
        0xF8,  // FAILED_TRANSMISSION_BY_COORDINATOR_TIMING
        0xF9,  // FAILED_WRITING_PIB_ATTRIBUTE
        0xFA,  // LIMIT_TRANSMISSION
        0xFB,  // ISSUE_SET_GET_REQUEST_TO_READONLY_IDENTIFIER
        0xFC,  // FAILED_SCAN_REQUEST_DURING_SCANING
        0xFD,  // FAILED_TRANSMISSION_BEACON_TIMING_COLLISION
        0xFE,  // NOT_SUPPORT_OR_NOT_PROCESSED_PRIMITIVES
        0xFF,  // OTHER_ERROR
    ];

    /**
     * 結果コード
     */
    //protected resultCode : number;

    /**
     * コンストラクタ
     *
     * @param resultCode 結果コード
     */
    /*
    ChildConnectionResult(resultCode : number) {
        this.resultCode = resultCode;
    }
    */

    /**
     * 結果コードを取得する
     *
     * @return 結果コード
     */
    /*
    public getResultCode() : number {
        return this.resultCode;
    }
    */

    /**
     * 結果コードから列挙子を取得する
     *
     * @param resultCode 結果コード
     * @return 結果コードに対応した列挙子
     */
    public static getEnumByResultCode(resultCode : number) : ChildConnectionResult {

        for (var i = 0; i < _ChildConnectionResult.RESULT_CODE_MAP.length; i++) {
            if (_ChildConnectionResult.RESULT_CODE_MAP[i] == resultCode) {
                return i;
            }
        }

        throw new Error("not found resultCode: " + resultCode);
    }
}