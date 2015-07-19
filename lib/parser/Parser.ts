/// <reference path='packet/Result.ts' />
/// <reference path='../util/Checksum.ts' />

/**
 * データをパースするクラス
 */
class Parser {
    /**
     * スタートバイト1バイト目
     */
    private static START_BYTE1 : number= 0x5A;

    /**
     * スタートバイト2バイト目
     */
    private static START_BYTE2 : number = 0xA5;

    /**
     * スタートバイトのバイト数
     */
    private static START_BYTE_LENGTH : number = 2;

    /**
     * コマンドのバイト数
     */
    private static COMMAND_BYTE_LENGTH : number = 1;

    /**
     * チェックサムのバイト数
     */
    private static CHECKSUM_BYTE_LENGTH : number = 1;

    /**
     * 受信バッファの最大バイト数
     */
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
    public constructor() {
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
        if (receiveDataLength > Parser.RECEIVE_DATA_BUFFER_LENGTH) {
            this.clearBuffer();
            return null;
        }

        // コマンドIDを受信するまで待つ
        if (this.receiveDataLength <= Parser.START_BYTE_LENGTH) {
            return null;
        }

        // コマンドIDからデータ長サイズを取得する
        var commandId = this.receiveData[2];
        if (!Result.DATA_LENGTH_BYTE_SIZE_MAP.containsKey(commandId)) {
            this.clearBuffer();
            return null;
        }

        var dataLengthByteSize = Result.DATA_LENGTH_BYTE_SIZE_MAP.get(commandId);
        if (this.receiveDataLength <= Parser.START_BYTE_LENGTH + dataLengthByteSize) {
            return null;
        }

        // チェックサムを受信するまで待つ
        var dataLength = Util.mergeBigEndian(Arrays.copyOfRange( //
                this.receiveData, //
                Parser.START_BYTE_LENGTH + Parser.COMMAND_BYTE_LENGTH, //
                Parser.START_BYTE_LENGTH + Parser.COMMAND_BYTE_LENGTH + dataLengthByteSize));
        if (this.receiveDataLength < Parser.START_BYTE_LENGTH + Parser.COMMAND_BYTE_LENGTH + dataLengthByteSize + dataLength + Parser.CHECKSUM_BYTE_LENGTH) {
            return null;
        }

        var result : Result = null;

        // CheckSumをチェック
        var checksum = this.receiveData[this.receiveDataLength - 1];
        if (checksum == Checksum.calculate(this.receiveData, this.receiveDataLength - 1)) {
            result = new Result(commandId, Arrays.copyOfRange( //
                    this.receiveData, //
                    Parser.START_BYTE_LENGTH + Parser.COMMAND_BYTE_LENGTH + dataLengthByteSize, //
                    this.receiveDataLength - Parser.CHECKSUM_BYTE_LENGTH));
        }

        this.clearBuffer();
        return result;
    }

    /**
     * バッファをクリアする
     */
    private clearBuffer() : void {
        this.receiveDataLength = 0;
        this.isStart = false;
    }
}
