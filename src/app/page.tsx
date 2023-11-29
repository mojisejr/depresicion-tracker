import RoomBox from "@/components/Contents/RoomBox";
import { fetchRoomById } from "./actions/fetchRoomById";
import SearchBar from "@/components/Shared/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const room = await fetchRoomById(+searchParams.roomId!);

  return (
    <>
      {room == undefined ? (
        <div className="h-[80vh] flex flex-col justify-center items-center">
          <SearchBar />
        </div>
      ) : (
        <RoomBox room={room!} />
      )}
    </>
  );
}
