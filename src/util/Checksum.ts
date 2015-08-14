class Checksum {
    private Checksum() {

    }

    /**
     * Checksumを計算する
     * 1byte毎にXORした値
     *
     * @param arr    チェックサムを計算するデータ
     * @param length チェックサムを計算する配列の長さ
     * @return 計算したチェックサム値
     */
    public static calculateWithLength(arr:number[], length:number):number {
        var checksum = 0;

        for (var i = 0; i < Math.min(arr.length, length); i++) {
            checksum ^= arr[i];
        }

        return checksum;
    }

    /**
     * Checksumを計算する
     * 1byte毎にXORした値
     *
     * @param arr チェックサムを計算するデータ
     * @return 計算したチェックサム値
     */
    public static calculate(arr:number[]):number {
        return this.calculateWithLength(arr, arr.length);
    }
}
