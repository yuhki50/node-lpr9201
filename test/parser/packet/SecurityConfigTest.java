package com.yuhki50.lpr9201.parser.packet;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class SecurityConfigTest {
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
        SecurityConfig securityConfig = this.createSecurityConfig();
        Assert.assertTrue(securityConfig.canParse());
    }

    /**
     * Method: getSecurityState()
     */
    @Test
    public void testGetSecurityState() throws Exception {
        SecurityConfig securityConfig = this.createSecurityConfig();
        Assert.assertTrue(securityConfig.getSecurityState());
    }

    /**
     * SecurityConfigを作成する
     *
     * @return
     */
    SecurityConfig createSecurityConfig() {
        return new SecurityConfig(new Result(0x93, new int[]{
                0x01, // セキュリティ状態: ON
        }));
    }
}
