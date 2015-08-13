package com.yuhki50.lpr9201.parser.option;

public enum AutoStartupErrorType {
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
    AutoStartupErrorType(int errorCode) {
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
    public static AutoStartupErrorType getEnumByErrorCode(int errorCode) {
        AutoStartupErrorType[] enumArray = AutoStartupErrorType.values();

        for (AutoStartupErrorType enumInt : enumArray) {
            if (errorCode == enumInt.errorCode) {
                return enumInt;
            }
        }

        throw new IllegalArgumentException("not found errorCode: " + errorCode);
    }
}
