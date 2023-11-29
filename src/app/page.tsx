import BeaconTable from "@/components/Contents/BeaconTable";
import { ContentBox } from "@/components/Contents/ContentBox";
import ContentHeader from "@/components/Contents/ContentHeader";
import ContentLayout from "@/components/Contents/ContentLayout";
import Information from "@/components/Contents/Information";
import InnerContentBox from "@/components/Contents/InnerContentBox";
import { fetchRoomById } from "./actions/fetchRoomById";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const room = await fetchRoomById(+searchParams.roomId!);

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
}
