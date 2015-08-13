package com.yuhki50.lpr9201.parser.option;

public enum WirelessSecurityErrorType {
    /**
     * セキュリティシーケンスカウンタ不一致
     */
    SECURITY_SEQUENCE_COUNTER_MISMATCH(0xDB),

    /**
     * セキュリティレベル不一致
     */
    SECURITY_LEVEL_MISMATCH(0xDD),

    /**
     * セキュリティキーエラー
     */
    SECURITY_KEY_ERROR(0xE4),

    /**
     * セキュリティ設定エラー
     */
    SECURITY_CONFIGURATION_ERROR(0xF3),

    /**
     * その他のエラー
     */
    OTHER_ERROR(0xFF);

    /**
     * エラーコード
     */
    protected int errorCode;

    /**
     * コンストラクタ
     *
     * @param errorCode エラーコード
     */
    WirelessSecurityErrorType(int errorCode) {
        this.errorCode = errorCode;
    }

    /**
     * エラーコードを取得する
     *
     * @return エラーコード
     */
    public int getErrorCode() {
        return this.errorCode;
    }

    /**
     * エラーコードから列挙子を取得する
     *
     * @param errorCode エラーコード
     * @return エラーコードに対応した列挙子
     */
    public static WirelessSecurityErrorType getEnumByErrorCode(int errorCode) {
        WirelessSecurityErrorType[] enumArray = WirelessSecurityErrorType.values();

        for (WirelessSecurityErrorType enumInt : enumArray) {
            if (errorCode == enumInt.errorCode) {
                return enumInt;
            }
        }

        return OTHER_ERROR;
    }
}