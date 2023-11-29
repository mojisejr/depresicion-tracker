// "use client";
import React from "react";
import { useMqtt } from "@/context/MqttContext";

interface BeaconTableProps {
  data: any[];
}

const BeaconTable = ({ data }: BeaconTableProps) => {
  // const { connect, disconnect, isConnected, payload } = useMqtt();
  if (data == undefined)
    return (
      <>
        <div>No data</div>
      </>
    );

  return (
    <div className="h-[65vh] overflow-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Mac</th>
            <th>Name</th>
            <th>EnterAt</th>
          </tr>
        </thead>
        <tbody>
          {data.length <= 0
            ? null
            : data.map((d) => (
                <tr key={d.id}>
                  <td>{d.mac}</td>
                  <td>{d.eName}</td>
                  <td>12/12/23:18:00</td>
                </tr>
              ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default BeaconTable;
