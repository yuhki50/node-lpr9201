var chai = require('chai');
var expect = chai.expect;
var module = require('../lib');
var LPR9201 = module.LPR9201;
var Result = module.Result;


describe('lpr9201', function() {
	/**
	 * テストクラスのインスタンス
	 */
  var lpr9201 = new LPR9201();

	/**
	 * Senderで処理するデータを保存する
	 */
	var senderBuffer = [];


	beforeEach(function() {
		lpr9201 = new LPR9201();
		lpr9201.setSender(function(data) {
      senderBuffer = data;
		});
	});


	it('connectionConfirmation', function() {
		lpr9201.connectionConfirmation();
    expect(senderBuffer).to.eql([0x5A, 0xA5, 0x00, 0x00, 0xFF]);
	});

	it('dataTransmissionWithoutOption', function() {
		lpr9201.dataTransmission(1000, [0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39], false, false, false);
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x01, 0x00, 0x0D, 0x00, 0x03, 0xE8, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x19]);
  });

	it('dataTransmissionWithAckOption', function() {
		lpr9201.dataTransmission(1000, [0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39], true, false, false);
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x01, 0x00, 0x0D, 0x01, 0x03, 0xE8, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x18]);
	});

	it('dataTransmission', function() {
		lpr9201.dataTransmission(1000, [0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39], false, true, false);
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x01, 0x00, 0x0D, 0x02, 0x03, 0xE8, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x1B]);
	});

	it('dataTransmissionWithBroadcastOption', function() {
		lpr9201.dataTransmission(1000, [0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39], false, false, true);
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x01, 0x00, 0x0D, 0x04, 0x03, 0xE8, 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x1D]);
	});

	it('writeProfileParameter', function() {
		//FIXME いくつかのデータサイズのパラメータでテストする
		lpr9201.writeProfileParameter(0x01, 1000);  // PAN IDに1000を設定
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x02, 0x03, 0x01, 0x03, 0xE8, 0x14]);
	});

	it('readProfileParameter', function() {
		lpr9201.readProfileParameter(0x01);  // PAN IDを読み込み
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x03, 0x01, 0x01, 0xFC]);
	});

	it('readReceiveData', function() {
		lpr9201.readReceiveData();
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x04, 0x00, 0xFB]);
	});

	it('readRssiData', function() {
		lpr9201.readRssiData();
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x05, 0x00, 0xFA]);
	});

	it('writeProfile', function() {
		lpr9201.writeProfile(0);
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x06, 0x01, 0x00, 0xF8]);
	});

	it('readProfile', function() {
		lpr9201.readProfile(0);
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x07, 0x01, 0x00, 0xF9]);
	});

	it('resetProfile', function() {
		lpr9201.resetProfile();
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x08, 0x00, 0xF7]);
	});

	it('sleep', function() {
		lpr9201.sleep();
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x09, 0x00, 0xF6]);
	});

	it('sleepInterval', function() {
		lpr9201.sleepInterval(300, 100);
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x0A, 0x03, 0x01, 0x2C, 0x64, 0xBF]);
	});

	it('activateRequest', function() {
		lpr9201.activateRequest();
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x0B, 0x00, 0xF4]);
	});

	it('edScan', function() {
		lpr9201.edScan();
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x0C, 0x00, 0xF3]);
	});

	it('reset', function() {
		lpr9201.reset();
		expect(senderBuffer).to.eql([0x5A, 0xA5, 0x7F, 0x00, 0x80]);
	});

	it('receiveConnectionConfirmation', function() {
		var receiveDatas = [
      0x00, 0xFF,  // dummy
      0x5A, 0xA5, 0x00, 0x00, 0xFF,  // 接続確認リザルト
      0x00, 0xFF,  // dummy
		];
		var parsedData = [];
		var result = receive(receiveDatas);
    expect(Result.ConnectionConfirmation.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ConnectionConfirmation.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.ConnectionConfirmation.DATA_LENGTH_BYTE_SIZE);
    expect(result.datas).to.eql(parsedData);
	});

	it('receiveAck', function() {
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x81, 0x00, 0x7E,  // ACK
				0x00, 0xFF,  // dummy
		];
		var parsedData = [];
		var result = receive(receiveDatas);
    expect(Result.Ack.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Ack.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.Ack.DATA_LENGTH_BYTE_SIZE);
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
		var result = receive(receiveDatas);
    expect(Result.Nack.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Nack.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.Nack.DATA_LENGTH_BYTE_SIZE);
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
		var result = receive(receiveDatas);
    expect(Result.ReceiveData.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ReceiveData.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.ReceiveData.DATA_LENGTH_BYTE_SIZE);
    expect(result.datas).to.eql(parsedData);
	});

	it('receiveRssi', function() {
		var rssiValue = 0x93;
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x84, 0x01, rssiValue, 0xE9,  // RSSI
				0x00, 0xFF,  // dummy
		];
		var parsedData = [rssiValue]
		var result = receive(receiveDatas);
    expect(Result.Rssi.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Rssi.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.Rssi.DATA_LENGTH_BYTE_SIZE);
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
		var result = receive(receiveDatas);
    expect(Result.ProfileParameterResult.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ProfileParameterResult.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.ProfileParameterResult.DATA_LENGTH_BYTE_SIZE);
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
		var result = receive(receiveDatas);
    expect(Result.ProfileParameterResult.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ProfileParameterResult.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.ProfileParameterResult.DATA_LENGTH_BYTE_SIZE);
    expect(result.datas).to.eql(parsedData);

    var profileParameterResult = new Result.ProfileParameterResult(result);
    expect(profileParameterResult.value).to.equal(paramValue);
	});

	it('receiveProfileParameterSize8Byte', function() {
		var paramValueHigh = 0x0000000000000000;
		var paramValueLow = 0x0000000000000001;
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
		var result = receive(receiveDatas);
    expect(Result.ProfileParameterResult.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.ProfileParameterResult.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.ProfileParameterResult.DATA_LENGTH_BYTE_SIZE);
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
		var result = receive(receiveDatas);
    expect(Result.Wup.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Wup.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.Wup.DATA_LENGTH_BYTE_SIZE);
    expect(result.datas).to.eql(parsedData);
	});

	it('receiveRing', function() {
		var receiveDatas = [
				0x00, 0xFF,  // dummy
				0x5A, 0xA5, 0x87, 0x00, 0x78,  // RING
				0x00, 0xFF,  // dummy
		];
		var parsedData = [];
		var result = receive(receiveDatas);
    expect(Result.Ring.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.Ring.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.Ring.DATA_LENGTH_BYTE_SIZE);
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
		var result = receive(receiveDatas);
    expect(Result.EdScan.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.EdScan.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.EdScan.DATA_LENGTH_BYTE_SIZE);
    expect(result.datas).to.eql(parsedData);

    var edScan = new Result.EdScan(result);
		for (var i = 0; i < parsedData.length; i++) {
      expect(edScan.value[i + 33]).to.equal(parsedData[i]);  // start 33ch
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
		var result = receive(receiveDatas);
    expect(Result.EdScan.canParse(result)).to.be.true;
    expect(result.resultCode).to.equal(Result.EdScan.RESULT_CODE);
    expect(result.dataLengthByteSize).to.equal(Result.EdScan.DATA_LENGTH_BYTE_SIZE);
    expect(result.datas).to.eql(parsedData);

    var edScan = new Result.EdScan(result);
		for (var i = 0; i < parsedData.length; i++) {
      expect(edScan.value[i + 33]).to.equal(parsedData[i]);  // start 33ch
		}
	});

  /**
   * @param {int[]} datas
   * @api private
   */
	function receive(datas) {
		var result = null;

    for (var i = 0, il = datas.length; i < il; i++) {
			var r = lpr9201.receiver(datas[i]);
			if (r !== null) {
				result = r;
			}
		}

		return result;
	}
});
