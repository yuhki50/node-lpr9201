package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.RateType;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class EdScanTest {
    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: getResultCode()
     */
    @Test
    public void testGetResultCode() throws Exception {
        //TODO: Test goes here...
    }

    /**
     * Method: getDataLengthByteSize()
     */
    @Test
    public void testGetDataLengthByteSize() throws Exception {
        //TODO: Test goes here...
    }

    /**
     * Method: canParse()
     */
    @Test
    public void testCanParse() throws Exception {
        EdScan edScan = createEdScan();
        Assert.assertTrue(edScan.canParse());
    }

    /**
     * Method: getRssis()
     */
    @Test
    public void testGetRssis() throws Exception {
        EdScan edScan = createEdScan();
        int[] rssis = new int[]{
                -5, -5, -5, -5, -5, //
                -5, -5, -5, -5, -5, //
                -5, -5, -5, -5, -5, //
                -5, -5, -5, -5, -5, //
                -5, -5, -5, -5, -5, //
                -5, -5, -5, -5, //
        };

        for (int i = 0; i < rssis.length; i++) {
            Assert.assertEquals((Integer) rssis[i], edScan.getRssis().get(i + 33));
        }
    }

    /**
     * Method: getRssis()
     */
    @Test
    public void testGetRssis2() throws Exception {
        EdScan edScan = createEdScan2();
        int[] rssis = new int[]{
                -5, -5, -5, -5, -5, -5, -5, //
                -5, -5, -5, -5, -5, -5, -5, //
        };

        for (int i = 0; i < rssis.length; i++) {
            Assert.assertEquals((Integer) rssis[i], edScan.getRssis().get(i + 33));
        }
    }

    /**
     * Method: getRate()
     */
    @Test
    public void testGetRate1() throws Exception {
        EdScan edScan = createEdScan();
        Assert.assertEquals(RateType.Rate1, edScan.getRate());
    }

    /**
     * Method: getRate()
     */
    @Test
    public void testGetRate2() throws Exception {
        EdScan edScan = createEdScan2();
        Assert.assertEquals(RateType.Rate2, edScan.getRate());
    }

    /**
     * Rate1のEdScanを作成する
     *
     * @return
     */
    EdScan createEdScan() {
        return new EdScan(new Result(0x8C, new int[]{
                0xFB, 0xFB, 0xFB, 0xFB, 0xFB, //
                0xFB, 0xFB, 0xFB, 0xFB, 0xFB, //
                0xFB, 0xFB, 0xFB, 0xFB, 0xFB, //
                0xFB, 0xFB, 0xFB, 0xFB, 0xFB, //
                0xFB, 0xFB, 0xFB, 0xFB, 0xFB, //
                0xFB, 0xFB, 0xFB, 0xFB //
        }));
    }

    /**
     * Rate2のEdScanを作成する
     *
     * @return
     */
    EdScan createEdScan2() {
        return new EdScan(new Result(0x8C, new int[]{
                0xFB, 0xFB, 0xFB, 0xFB, 0xFB, 0xFB, 0xFB, //
                0xFB, 0xFB, 0xFB, 0xFB, 0xFB, 0xFB, 0xFB, //
        }));
    }
}
