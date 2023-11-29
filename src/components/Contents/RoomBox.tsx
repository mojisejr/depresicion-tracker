import React from "react";
import BeaconTable from "@/components/Contents/BeaconTable";
import ContentBox from "@/components/Contents/ContentBox";
import ContentHeader from "@/components/Contents/ContentHeader";
import ContentLayout from "@/components/Contents/ContentLayout";
import Information from "@/components/Contents/Information";
import InnerContentBox from "@/components/Contents/InnerContentBox";

interface RoomBoxProps {
  room: any;
}

const RoomBox = ({ room }: RoomBoxProps) => {
  return (
    <ContentLayout>
      <ContentHeader
        left={room?.name!}
        right={`${room?.width}x${room?.height}`}
      />
      <ContentBox>
        <InnerContentBox title="Information">
          <Information data={room} />
        </InnerContentBox>
        <InnerContentBox title="In-Room">
          <BeaconTable data={room?.beacons!} />
        </InnerContentBox>
      </ContentBox>
    </ContentLayout>
  );
};

export default RoomBox;
