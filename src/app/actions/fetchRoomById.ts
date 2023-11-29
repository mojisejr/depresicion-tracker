"use server";
import { prisma } from "../../../prisma";

export const fetchRoomById = async (roomId: number) => {
  return await prisma.room.findUnique({
    where: { id: roomId },
    include: {
      beacons: true,
      floor: {
        include: {
          bulding: true,
        },
      },
    },
  });
};
