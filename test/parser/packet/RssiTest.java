package com.yuhki50.lpr9201.parser.packet;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class RssiTest {
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
        Rssi rssi = this.createRssi();
        Assert.assertTrue(rssi.canParse());
    }

    /**
     * Method: getRssi()
     */
    @Test
    public void testGetRssi() throws Exception {
        Rssi rssi = this.createRssi();
        Assert.assertEquals(-5, rssi.getRssi());
    }

    /**
     * Rssiを作成する
     *
     * @return
     */
    Rssi createRssi() {
        return new Rssi(new Result(0x84, new int[]{
                0xFB,  // Rssi: -5
        }));
    }
}
