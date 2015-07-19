package com.yuhki50.lpr9201.sender;

import com.yuhki50.lpr9201.util.Util;
import com.yuhki50.lpr9201.sender.packet.ISendPacket;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Sender {
    protected ISender senderInstance;

    private static final Integer[] START_BYTES = new Integer[]{0x5A, 0xA5};

    /**
     *
     */
    public Sender() {
        this.senderInstance = null;
    }

    /**
     * @param sender
     */
    public Sender(ISender sender) {
        this.senderInstance = sender;
    }

    /**
     * @param sender
     */
    public void setSender(ISender sender) {
        this.senderInstance = sender;
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
        packet.addAll(Arrays.asList(Util.splitBigEndian(serializedData.size(), sendPacket.getDataLengthByteSize())));

        // data
        packet.addAll(serializedData);

        // checksum
        int checksum = 0;
        for (Integer p : packet) {
            checksum ^= p;
        }
        packet.add(checksum);

        if (senderInstance != null) {
            senderInstance.write(packet.toArray(new Integer[packet.size()]));
        }
    }
}
