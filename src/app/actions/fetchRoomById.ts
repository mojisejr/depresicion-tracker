"use server";
import { prisma } from "../../../prisma";

export const fetchRoomById = async (roomId: number) => {
  if (!roomId) return;
  return await prisma.room.findUnique({
    where: { id: roomId },
    include: {
      beacons: true,
      gateways: true,
      floor: {
        include: {
          bulding: true,
        },
      },
    },
  });
};
