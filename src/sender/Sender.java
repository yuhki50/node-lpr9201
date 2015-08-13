package com.yuhki50.lpr9201.sender;

import com.yuhki50.lpr9201.sender.packet.ISendPacket;
import com.yuhki50.lpr9201.util.ByteUtil;
import com.yuhki50.lpr9201.util.Checksum;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Sender {
    protected ISender senderHandler;

    private static final Integer[] START_BYTES = new Integer[]{0x5A, 0xA5};

    /**
     *
     */
    public Sender() {
        this.senderHandler = null;
    }

    /**
     * @param sender
     */
    public Sender(ISender sender) {
        this.senderHandler = sender;
    }

    /**
     * @param sender
     */
    public void setSenderHandler(ISender sender) {
        this.senderHandler = sender;
    }

    /**
     * パケットを送信
     *
     * @param sendPacket
     */
    public void send(ISendPacket sendPacket) {
        List<Integer> packet = new ArrayList<Integer>();

        // start
        packet.addAll(Arrays.asList(START_BYTES));

        // command
        packet.add(sendPacket.getCommandId());

        // data length
        List<Integer> serializedData = sendPacket.serialize();
        packet.addAll(Arrays.asList(ByteUtil.splitBigEndian(serializedData.size(), sendPacket.getDataLengthByteSize())));

        // data
        packet.addAll(serializedData);

        // checksum
        packet.add(Checksum.calculate(packet.toArray(new Integer[packet.size()])));

        if (this.senderHandler != null) {
            this.senderHandler.write(packet.toArray(new Integer[packet.size()]));
        }
    }
}
