enum AutoStartupErrorType {
    /**
     * その他のエラー
     */
    OTHER_ERROR,  // 0xFF
}

class _AutoStartupErrorType {
    protected static ERROR_CODE_MAP:number[] = [
        0xFF, // AutoStartupErrorType.OTHER_ERROR
    ];

    /**
     * エラーコード
     */
    //protected errorCode:number;

    /**
     * コンストラクタ
     *
     * @param errorCode エラーコード
     */
    /*
    AutoStartupErrorType(errorCode:number) {
        this.errorCode = errorCode;
    }
    */

    /**
     * エラーコードを取得する
     *
     * @return エラーコード
     */
    /*
    public getErrorCode():number {
        return this.errorCode;
    }
    */

    /**
     * エラーコードから列挙子を取得する
     *
     * @param errorCode エラーコード
     * @return エラーコードに対応した列挙子
     */
    public static getEnumByErrorCode(errorCode:number):AutoStartupErrorType {
        for (var i = 0; i < _AutoStartupErrorType.ERROR_CODE_MAP.length; i++) {
            if (_AutoStartupErrorType.ERROR_CODE_MAP[i] == errorCode) {
                return i;
            }
        }

        throw new Error("not found errorCode: " + errorCode);
    }
}
