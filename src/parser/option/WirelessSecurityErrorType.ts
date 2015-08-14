enum WirelessSecurityErrorType {
    /**
     * セキュリティシーケンスカウンタ不一致
     */
    SECURITY_SEQUENCE_COUNTER_MISMATCH,  // 0xDB

    /**
     * セキュリティレベル不一致
     */
    SECURITY_LEVEL_MISMATCH,  // 0xDD

    /**
     * セキュリティキーエラー
     */
    SECURITY_KEY_ERROR,  // 0xE4

    /**
     * セキュリティ設定エラー
     */
    SECURITY_CONFIGURATION_ERROR,  // 0xF3

    /**
     * その他のエラー
     */
    OTHER_ERROR,  // 0xFF
}

class _WirelessSecurityErrorType {
    protected static ERROR_CODE_MAP:number[] = [
        0xDB,  // SECURITY_SEQUENCE_COUNTER_MISMATCH
        0xDD,  // SECURITY_LEVEL_MISMATCH
        0xE4,  // SECURITY_KEY_ERROR
        0xF3,  // SECURITY_CONFIGURATION_ERROR
        0xFF,  // OTHER_ERROR
    ];

    /**
     * エラーコード
     */
    //protected int errorCode;

    /**
     * コンストラクタ
     *
     * @param errorCode エラーコード
     */
    /*
     WirelessSecurityErrorType(int errorCode) {
     this.errorCode = errorCode;
     }
     */

    /**
     * エラーコードを取得する
     *
     * @return エラーコード
     */
    /*
     public int getErrorCode() {
     return this.errorCode;
     }
     */

    /**
     * エラーコードから列挙子を取得する
     *
     * @param errorCode エラーコード
     * @return エラーコードに対応した列挙子
     */
    public static getEnumByErrorCode(errorCode:number):WirelessSecurityErrorType {
        for (var i = 0; i < _WirelessSecurityErrorType.ERROR_CODE_MAP.length; i++) {
            if (_WirelessSecurityErrorType.ERROR_CODE_MAP[i] == errorCode) {
                return i;
            }
        }

        return WirelessSecurityErrorType.OTHER_ERROR;
    }
}
