package com.yuhki50.lpr9201.parser.packet;

import com.yuhki50.lpr9201.parser.option.ChildConnectionResult;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class ConnectionResultTest {
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
        ConnectionResult connectionResult = this.createConnectionResultWithSuccess();
        Assert.assertTrue(connectionResult.canParse());
    }

    /**
     * Method: getChildConnectionResult()
     */
    @Test
    public void testGetChildConnectionResultSuccess() throws Exception {
        ConnectionResult connectionResult = this.createConnectionResultWithSuccess();
        Assert.assertEquals(ChildConnectionResult.SUCCESS, connectionResult.getChildConnectionResult());
    }

    /**
     * Method: getChildConnectionResult()
     */
    @Test
    public void testGetChildConnectionResultFailure() throws Exception {
        ConnectionResult connectionResult = this.createConnectionResultWithFailure();
        Assert.assertEquals(ChildConnectionResult.FAILURE, connectionResult.getChildConnectionResult());
    }

    /**
     * SuccessのConnectionResultを作成する
     *
     * @return
     */
    ConnectionResult createConnectionResultWithSuccess() {
        return new ConnectionResult(new Result(0x92, new int[]{
                0x00, // 子接続の結果: 成功
        }));
    }

    /**
     * FailureのConnectionResultを作成する
     *
     * @return
     */
    ConnectionResult createConnectionResultWithFailure() {
        return new ConnectionResult(new Result(0x92, new int[]{
                0x01, // // 子接続の結果: 失敗
        }));
    }
}
