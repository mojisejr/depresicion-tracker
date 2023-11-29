import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const buildings = [
  {
    name: "OPD Building",
    description: "OPD Main Buildling",
  },
  {
    name: "Emergency Building",
    description: "Main ER",
  },
  {
    name: "IPD Building 1",
  },
];

const floors = [
  {
    name: "Floor 1",
    description: "OPD Floor 1",
    buildingId: 1,
  },
  {
    name: "Floor 2",
    description: "OPD Floor 2",
    buildingId: 1,
  },
  {
    name: "Floor 3",
    description: "OPD Floor 3",
    buildingId: 1,
  },
  {
    name: "Floor 1",
    description: "ER Floor 1",
    buildingId: 2,
  },
  {
    name: "Floor 2",
    description: "ER Floor 2",
    buildingId: 2,
  },
  {
    name: "Floor 1",
    description: "IPD Floor 1",
    buildingId: 3,
  },
  {
    name: "Floor 2",
    description: "IPD Floor 2",
    buildingId: 3,
  },
];

const rooms = [
  {
    name: "OPD 001",
    description: "room number 001",
    width: 5,
    height: 15,
    floorId: 1,
  },
  {
    name: "OPD 201",
    description: "room number 201",
    width: 4,
    height: 2,
    floorId: 2,
  },
  {
    name: "OPD 202",
    description: "room number 202",
    width: 6,
    height: 5,
    floorId: 2,
  },
];

const gateways = [
  {
    mac: "MAC0PD0011",
    name: "G-OPD001-1",
    description: "gateway number 1",
    x: 1,
    y: 0,
    position: "top-left",
    roomId: 1,
  },
];

const beacons = [
  {
    mac: "BE12300",
    description: "BEACON2",
    eName: "Blood Pressure",
    txPower: -40,
    roomId: 1,
  },
  {
    mac: "BE15689",
    description: "BEACON1",
    eName: "Infusion Pump ",
    txPower: -45,
    roomId: 1,
  },
];

const main = async () => {
  await prisma.building.createMany({ data: buildings });
  await prisma.floor.createMany({ data: floors });
  await prisma.room.createMany({ data: rooms });
  await prisma.gateway.createMany({ data: gateways });
  await prisma.beacon.createMany({
    data: beacons,
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
