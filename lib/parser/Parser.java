package com.yuhki50.lpr9201.parser;

import com.yuhki50.lpr9201.parser.packet.Result;
import com.yuhki50.lpr9201.util.ByteUtil;
import com.yuhki50.lpr9201.util.Checksum;

import java.util.Arrays;

/**
 * データをパースするクラス
 */
public class Parser {
    /**
     * スタートバイト1バイト目
     */
    private static final int START_BYTE1 = 0x5A;

    /**
     * スタートバイト2バイト目
     */
    private static final int START_BYTE2 = 0xA5;

    /**
     * スタートバイトのバイト数
     */
    private static final int START_BYTE_LENGTH = 2;

    /**
     * コマンドのバイト数
     */
    private static final int COMMAND_BYTE_LENGTH = 1;

    /**
     * チェックサムのバイト数
     */
    private static final int CHECKSUM_BYTE_LENGTH = 1;

    /**
     * 受信バッファの最大バイト数
     */
    private static final int RECEIVE_DATA_BUFFER_LENGTH = 512;

    /**
     * 受信バッファ
     */
    private int[] receiveData = new int[RECEIVE_DATA_BUFFER_LENGTH];

    /**
     * 受信バッファ書き込み位置
     */
    private int receiveDataLength = 0;

    /**
     * 受信開始中か
     */
    private boolean isStart = false;

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
    public Result parse(int data) {
        // ヘッダーチェック
        if (!this.isStart && this.receiveData[0] == START_BYTE1 && data == START_BYTE2) {
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
        if (receiveDataLength > RECEIVE_DATA_BUFFER_LENGTH) {
            clearBuffer();
            return null;
        }

        // コマンドIDを受信するまで待つ
        if (this.receiveDataLength <= START_BYTE_LENGTH) {
            return null;
        }

        // コマンドIDからデータ長サイズを取得する
        int commandId = this.receiveData[2];
        if (!Result.DATA_LENGTH_BYTE_SIZE_MAP.containsKey(commandId)) {
            clearBuffer();
            return null;
        }

        int dataLengthByteSize = Result.DATA_LENGTH_BYTE_SIZE_MAP.get(commandId);
        if (this.receiveDataLength <= START_BYTE_LENGTH + dataLengthByteSize) {
            return null;
        }

        // チェックサムを受信するまで待つ
        int dataLength = (int) ByteUtil.mergeBigEndian(Arrays.copyOfRange( //
                this.receiveData, //
                START_BYTE_LENGTH + COMMAND_BYTE_LENGTH, //
                START_BYTE_LENGTH + COMMAND_BYTE_LENGTH + dataLengthByteSize));
        if (this.receiveDataLength < START_BYTE_LENGTH + COMMAND_BYTE_LENGTH + dataLengthByteSize + dataLength + CHECKSUM_BYTE_LENGTH) {
            return null;
        }

        Result result = null;

        // CheckSumをチェック
        int checksum = this.receiveData[this.receiveDataLength - 1];
        if (checksum == Checksum.calculate(this.receiveData, this.receiveDataLength - 1)) {
            result = new Result(commandId, Arrays.copyOfRange( //
                    this.receiveData, //
                    START_BYTE_LENGTH + COMMAND_BYTE_LENGTH + dataLengthByteSize, //
                    this.receiveDataLength - CHECKSUM_BYTE_LENGTH));
        }

        clearBuffer();
        return result;
    }

    /**
     * バッファをクリアする
     */
    void clearBuffer() {
        this.receiveDataLength = 0;
        this.isStart = false;
    }
}
