/// <reference path='../util/ByteUtil.ts' />
/// <reference path='../util/Checksum.ts' />
/// <reference path='ISender.ts' />
/// <reference path='packet/ISendPacket.ts' />

class Sender {
    protected senderInstance : ISender;

    private static START_BYTES : number[] = [0x5A, 0xA5];

    /**
     *
     */
    /* //FIXME
    public constructor() {
        this.senderInstance = null;
    }
    */

    /**
     * @param sender
     */
    public constructor(sender : ISender) {
        this.senderInstance = sender;
    }

    /**
     * @param sender
     */
    public setSender(sender : ISender) : void {
        this.senderInstance = sender;
    }

    /**
     * パケットを送信
     *
     * @param sendPacket
     */
    public send(sendPacket : ISendPacket) : void {
        var packet : number[] = [];

        // start
        packet = packet.concat(Sender.START_BYTES);

        // command
        packet.push(sendPacket.getCommandId());

        // data length
        var serializedData : number[] = sendPacket.serialize();
        packet = packet.concat(ByteUtil.splitBigEndian(serializedData.length, sendPacket.getDataLengthByteSize()));

        // data
        packet = packet.concat(serializedData);

        // checksum
        packet.push(Checksum.calculate(packet));

        if (this.senderInstance != null) {
            this.senderInstance.write(packet);
        }
    }
}
