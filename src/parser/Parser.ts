/// <reference path="../util/ByteUtil.ts" />
/// <reference path="../util/Checksum.ts" />
/// <reference path="packet/Result.ts" />

/**
 * データをパースするクラス
 */
class Parser {
    /**
     * スタートバイト1バイト目
     */
    //private static const START_BYTE1 : number = 0x5A;
    private static START_BYTE1 : number = 0x5A;

    /**
     * スタートバイト2バイト目
     */
    //private static const START_BYTE2 : number = 0xA5;
    private static START_BYTE2 : number = 0xA5;

    /**
     * スタートバイトのバイト数
     */
    //private static const START_BYTE_LENGTH : number = 2;
    private static START_BYTE_LENGTH : number = 2;

    /**
     * コマンドのバイト数
     */
    //private static const COMMAND_BYTE_LENGTH : number = 1;
    private static COMMAND_BYTE_LENGTH : number = 1;

    /**
     * チェックサムのバイト数
     */
    //private static const CHECKSUM_BYTE_LENGTH : number = 1;
    private static CHECKSUM_BYTE_LENGTH : number = 1;

    /**
     * 受信バッファの最大バイト数
     */
    //private static const RECEIVE_DATA_BUFFER_LENGTH : number = 512;
    private static RECEIVE_DATA_BUFFER_LENGTH : number = 512;

    /**
     * 受信バッファ
     */
    private receiveData : number[] = new Array(Parser.RECEIVE_DATA_BUFFER_LENGTH);

    /**
     * 受信バッファ書き込み位置
     */
    private receiveDataLength : number = 0;

    /**
     * 受信開始中か
     */
    private isStart : boolean = false;

    /**
     * データをパースするクラス
     */
    public Parser() {
    }

    /**
     * 通信データを逐次パースする
     *
     * @param data 受信したデータ
     * @return パース出来た場合はResultクラス、出来なかった場合はnull
     */
    public parse(data : number) : Result {
        // ヘッダーチェック
        if (!this.isStart && this.receiveData[0] == Parser.START_BYTE1 && data == Parser.START_BYTE2) {
            this.receiveDataLength = 1;
            this.isStart = true;
        }

        // データを格納
        this.receiveData[this.receiveDataLength] = data;

        if (!this.isStart) {
            return null;
        }

        this.receiveDataLength++;

        // バッファサイズを超えた
        if (this.receiveDataLength > Parser.RECEIVE_DATA_BUFFER_LENGTH) {
            this.clearBuffer();
            return null;
        }

        // コマンドIDを受信するまで待つ
        if (this.receiveDataLength <= Parser.START_BYTE_LENGTH) {
            return null;
        }

        // コマンドIDからデータ長サイズを取得する
        var commandId : number = this.receiveData[2];
        if (!Result.DATA_LENGTH_BYTE_SIZE_MAP[commandId]) {  //FIXME
            this.clearBuffer();
            return null;
        }

        var dataLengthByteSize : number = Result.DATA_LENGTH_BYTE_SIZE_MAP[commandId];
        if (this.receiveDataLength <= Parser.START_BYTE_LENGTH + dataLengthByteSize) {
            return null;
        }

        // チェックサムを受信するまで待つ
        var dataLength : number = ByteUtil.mergeBigEndian(this.receiveData.slice( //
                Parser.START_BYTE_LENGTH + Parser.COMMAND_BYTE_LENGTH, //
                Parser.START_BYTE_LENGTH + Parser.COMMAND_BYTE_LENGTH + dataLengthByteSize));
        if (this.receiveDataLength < Parser.START_BYTE_LENGTH + Parser.COMMAND_BYTE_LENGTH + dataLengthByteSize + dataLength + Parser.CHECKSUM_BYTE_LENGTH) {
            return null;
        }

        var result : Result = null;

        // Checksumをチェック
        var checksum : number = this.receiveData[this.receiveDataLength - 1];
        if (checksum == Checksum.calculateWithLength(this.receiveData, this.receiveDataLength - 1)) {
            result = new Result(commandId, this.receiveData.slice( //
                    Parser.START_BYTE_LENGTH + Parser.COMMAND_BYTE_LENGTH + dataLengthByteSize, //
                    this.receiveDataLength - Parser.CHECKSUM_BYTE_LENGTH));
        }

        this.clearBuffer();
        return result;
    }

    /**
     * バッファをクリアする
     */
    public clearBuffer() : void {
        this.receiveDataLength = 0;
        this.isStart = false;
    }
}
