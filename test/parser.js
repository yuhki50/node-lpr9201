var chai = require('chai');
var expect = chai.expect;
var module = require('../lib');
var Sender = module.Sender;
var Parser = module.Parser;
var Result = module.Result;


describe('parser', function() {
	beforeEach(function() {
    var self = this;

    // テストクラスのインスタンス
    this.parser = new Parser();

    /**
     * @param {int[]} datas
     * @api private
     */
    this.receive = function receive(datas) {
      var result = null;

      for (var i = 0, il = datas.length; i < il; i++) {
        var r = self.parser.parse(datas[i]);
        if (r !== null) {
          result = r;
        }
      }

      return result;
    }
	});

	it('receiveConnectionConfirmation', function() {
		var receiveDatas = [
      0x00, 0xFF,  // dummy
      0x5A, 0xA5, 0x00, 0x00, 0xFF,  // 接続確認リザルト
      0x00, 0xFF,  // dummy
		];
		var parsedData = [];
		var result = this.receive(receiveDatas);
    expect(Result.ConnectionConfirmation.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ConnectionConfirmation.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);
	});

	it('receiveAck', function() {
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x81, 0x00, 0x7E,  // ACK
				0x00, 0xFF,  // dummy
		];
		var parsedData = [];
		var result = this.receive(receiveDatas);
    expect(Result.Ack.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Ack.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);
	});

	it('receiveNack', function() {
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x82, 0x01, 0x01, 0x7D,  // NACK
				0x00, 0xFF,  // dummy
		];
		var reason = 0x01;  // パラメータエラー
		var parsedData = [reason];
		var result = this.receive(receiveDatas);
    expect(Result.Nack.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Nack.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);

    var nack = new Result.Nack(result);
    expect(nack.reasonCode).to.equal(Result.Nack.Reason.PARAMETER_ERROR);
	});

	it('receiveReceiveData', function() {
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x83, 0x00, 0x0A, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x77,  // 受信データ
				0x00, 0xFF,  // dummy
		];
		var parsedData = [0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39];
		var result = this.receive(receiveDatas);
    expect(Result.ReceiveData.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ReceiveData.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);

    var receiveData = new Result.ReceiveData(result);
    expect(receiveData.datas).to.eql(parsedData);
	});

	it('receiveRssi', function() {
		var rssiValue = 0x93;
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x84, 0x01, rssiValue, 0xE9,  // RSSI
				0x00, 0xFF,  // dummy
		];
		var parsedData = [rssiValue]
		var result = this.receive(receiveDatas);
    expect(Result.Rssi.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Rssi.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);

    var rssi = new Result.Rssi(result);
		expect(rssi.value).to.equal(rssiValue);
	});

	it('receiveProfileParameterSize1Byte', function() {
		var paramValue = 0x21;
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x85, 0x01, (paramValue >>> 0) & 0xFF, 0x5A,  // プロファイルパラメータ確認  チャンネルに33が設定されていた場合
				0x00, 0xFF,  // dummy
		];
		var parsedData = [(paramValue >>> 0) & 0xFF];
		var result = this.receive(receiveDatas);
    expect(Result.ProfileParameterResult.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ProfileParameterResult.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);

    var profileParameterResult = new Result.ProfileParameterResult(result);
    expect(profileParameterResult.value).to.equal(paramValue);
	});

	it('receiveProfileParameterSize2Byte', function() {
		var paramValue = 0x03E8;
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x85, 0x02, (paramValue >>> 8) & 0xFF, (paramValue >> 0) & 0xFF, 0x93,  // プロファイルパラメータ確認  PAN IDに1000が設定されていた場合
				0x00, 0xFF,  // dummy
		];
		var parsedData = [(paramValue >>> 8) & 0xFF, (paramValue >>> 0) & 0xFF];
		var result = this.receive(receiveDatas);
    expect(Result.ProfileParameterResult.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ProfileParameterResult.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);

    var profileParameterResult = new Result.ProfileParameterResult(result);
    expect(profileParameterResult.value).to.equal(paramValue);
	});

	it('receiveProfileParameterSize8Byte', function() {
		var paramValueHigh = 0x00000000;
		var paramValueLow = 0x00000001;
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x85, 0x08,  //
				(paramValueHigh >>> 24) & 0xFF,  //
				(paramValueHigh >>> 16) & 0xFF,  //
				(paramValueHigh >>> 8) & 0xFF,  //
				(paramValueHigh >>> 0) & 0xFF,  //
				(paramValueLow >>> 24) & 0xFF,  //
				(paramValueLow >>> 16) & 0xFF,  //
				(paramValueLow >>> 8) & 0xFF,  //
				(paramValueLow >>> 0) & 0xFF,  //
				0x73,  // プロファイルパラメータ確認  親IEEEアドレスに0x00_00_00_00_00_00_00_01が設定されていた場合
				0x00, 0xFF,  // dummy
		];
		var parsedData = [
				(paramValueHigh >>> 24) & 0xFF,  //
				(paramValueHigh >>> 16) & 0xFF,  //
				(paramValueHigh >>> 8) & 0xFF,  //
				(paramValueHigh >>> 0) & 0xFF,  //
				(paramValueLow >>> 24) & 0xFF,  //
				(paramValueLow >>> 16) & 0xFF,  //
				(paramValueLow >>> 8) & 0xFF,  //
				(paramValueLow >>> 0) & 0xFF,  //
		];
		var result = this.receive(receiveDatas);
    expect(Result.ProfileParameterResult.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ProfileParameterResult.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);

    var profileParameterResult = new Result.ProfileParameterResult(result);
    expect(profileParameterResult.valueHigh).to.equal(paramValueHigh);
    expect(profileParameterResult.valueLow).to.equal(paramValueLow);
	});

	it('receiveWup', function() {
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x86, 0x00, 0x79,  // WUP
				0x00, 0xFF,  // dummy
		];
		var parsedData = [];
		var result = this.receive(receiveDatas);
    expect(Result.Wup.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Wup.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);
	});

	it('receiveRing', function() {
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x87, 0x00, 0x78,  // RING
				0x00, 0xFF,  // dummy
		];
		var parsedData = [];
		var result = this.receive(receiveDatas);
    expect(Result.Ring.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Ring.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);
	});

	it('receiveEdScanRate1', function() {
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x8C, 0x1D, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, // EDスキャン結果
				0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0xFD,  // EDスキャン結果
				0x00, 0xFF,  // dummy
		];
		var parsedData = [
				0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93,
				0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93
		];
		var result = this.receive(receiveDatas);
    expect(Result.EdScan.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.EdScan.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);

    var edScan = new Result.EdScan(result);
		for (var i = 0; i < parsedData.length; i++) {
      expect(edScan.rssis[i + 33]).to.equal(parsedData[i]);  // start 33ch
		}
	});

	it('receiveEdScanRate2', function() {
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x8C, 0x0E, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x7D,  // EDスキャン結果
				0x00, 0xFF,  // dummy
		];
		var parsedData = [
				0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93, 0x93
		];
		var result = this.receive(receiveDatas);
    expect(Result.EdScan.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.EdScan.RESULT_CODE);
    expect(result.datas).to.eql(parsedData);

    var edScan = new Result.EdScan(result);
		for (var i = 0; i < parsedData.length; i++) {
      expect(edScan.rssis[i + 33]).to.equal(parsedData[i]);  // start 33ch
		}
	});
});
