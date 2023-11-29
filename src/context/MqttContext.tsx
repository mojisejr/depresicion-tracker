"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { connect, MqttClient } from "mqtt";

interface Payload {
  gmc?: string;
  room?: string;
  obj?: PayloadObj[];
}

interface PayloadObj {
  data1?: string;
  dmac?: string;
  name?: string;
  rawRssi?: number;
  serial?: string;
  diff: number;
  time?: string;
  type?: number;
  smaRssi?: number;
  d: number;
}

const options = {
  url: "ws://localhost:9001",
  clientId: "MQTT_UI",
  topic: "/",
};

type MqttContextType = {
  mqttClient: MqttClient | undefined;
  connect: () => void;
  payload: GatewayPayload[] | [];
  disconnect: () => void;
  isConnected: boolean;
};

const defaultMqttContextType: MqttContextType = {
  mqttClient: undefined,
  connect: () => ({}),
  payload: [],
  disconnect: () => ({}),
  isConnected: false,
};

const MqttContext = createContext<MqttContextType>(defaultMqttContextType);

interface MqttProviderProps {
  children: ReactNode;
}

export const MqttProvider = ({ children }: MqttProviderProps) => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [mqttClient, setMqttClient] = useState<MqttClient>();
  const [payload, setPayload] = useState<GatewayPayload[] | []>([]);

  useEffect(() => {
    if (mqttClient) {
      mqttClient?.on("connect", () => {
        console.log("connected to ", options.url);
        setIsConnected(true);
      });

      mqttClient?.on("message", (topic, payload) => {
        setPayload(JSON.parse(payload.toString()) as GatewayPayload[]);
      });

      mqttClient.subscribe("kbeacon/server/publish/rooms");

      mqttClient?.on("end", () => {
        mqttClient.unsubscribe("kbeacon/server/publish/rooms");
        setIsConnected(false);
      });
    }
  }, [mqttClient]);

  const mqttConnect = () => {
    setMqttClient(
      connect(options.url, {
        clientId: options.clientId,
      })
    );
  };

  const mqttDisconnect = () => {
    if (mqttClient) {
      try {
        mqttClient.end(false, () => {
          setIsConnected(false);
          console.log("disconnected successful");
        });
      } catch (error) {
        console.log("disconnected error");
      }
    }
  };

  const values = {
    connect: mqttConnect,
    disconnect: mqttDisconnect,
    mqttClient,
    isConnected,
    payload,
  };

  return <MqttContext.Provider value={values}>{children}</MqttContext.Provider>;
};

export const useMqtt = () => {
  return useContext(MqttContext);
};

export interface GatewayInput {
  gmac?: string;
  name?: string;
  obj?: BeaconPayload[];
}

export interface GatewayRoomData {
  room: {
    id?: number;
    no: string;
    name: string;
    width: number;
    height: number;
    hpx: number;
    wpx: number;
    department?: string;
    rssi_0: number;
    n: number;
    gateway_x: number;
    gateway_y: number;
    floorId: number;
  };
  floor: {
    id?: number;
    name?: string;
  };
}

export interface GatewayPayload {
  floorId?: number;
  floor?: Floor;
}

export interface Floor {
  id?: number;
  name?: string;
  rooms?: Room[];
}

export interface Room {
  id?: number;
  no?: string;
  name?: string;
  width?: number;
  height?: number;
  hpx?: number;
  wpx?: number;
  department?: string;
  rssi_0?: number;
  n?: number;
  gateway_x?: number;
  gateway_y?: number;
  floorId?: number;
  gmac?: string;
  obj?: BeaconPayload[];
}

export interface BeaconPayload {
  type?: number;
  dmac?: string;
  data1?: string;
  rssi?: number;
  time?: string;
  uuid?: string;
  majorId?: number;
  minorId?: number;
  refpower?: number;
  url?: string;
  vbatt?: number;
  temp?: number;
  advCnt?: number;
  secCnt?: number;
  d?: number;
  isOut?: boolean;
}
