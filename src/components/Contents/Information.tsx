import React from "react";

interface InformationProps {
  data: any;
}

const Information = ({ data }: InformationProps) => {
  console.log(data);
  return (
    <table className="table table-xs">
      <thead>
        <tr>
          <th>Detail</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="font-semibold">Room</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td className="font-semibold">Floor</td>
          <td>{data.floor.name}</td>
        </tr>
        <tr>
          <td className="font-semibold">Building</td>
          <td>{data.floor.bulding.name}</td>
        </tr>
        <tr>
          <td className="font-semibold">Gateway Position</td>
          <td>top-left</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Information;
