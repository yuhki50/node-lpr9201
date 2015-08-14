class ByteUtil {
    private ByteUtil() {

    }

    /**
     * 指定されたデータ長の上位1byteづつ切り出す {high, mid... low}
     *
     * @param value 切り出す値
     * @param length 出力する配列長
     * @return 切り出した数値の配列
     */
    public static splitBigEndian(value:number, length:number):number[] {
        var list:number[] = [];

        for (var i = length - 1; i >= 0; i--) {
            list.push((value >>> (8 * i)) & 0xFF);
        }

        return list;
    }

    /**
     * 指定されたデータ長の下位1byteづつ切り出す {low, mid... high}
     *
     * @param value 切り出す値
     * @param length 出力する配列長
     * @return 切り出した数値の配列
     */
    public static splitLittleEndian(value:number, length:number):number[] {
        var list:number[] = [];

        for (var i = 0; i < length; i++) {
            list.push((value >>> (8 * i)) & 0xFF);
        }

        return list;
    }

    /**
     * 指定された配列を上位から結合する {high, mid... low}
     *
     * @param values 結合する配列
     * @return 結合された数値
     */
    public static mergeBigEndian(values:number[]):number {
        var dest = 0;

        for (var i = 0; i < values.length; i++) {
            dest = (dest << 8) | values[i];
        }

        return dest;
    }

    /**
     * 指定された配列を下位から結合する {low, mid... high}
     *
     * @param values 結合する配列
     * @return 結合された数値
     */
    public static mergeLittleEndian(values:number[]):number {
        var dest = 0;

        for (var i = 1; i <= values.length; i++) {
            dest = (dest << 8) | values[values.length - i];
        }

        return dest;
    }
}
