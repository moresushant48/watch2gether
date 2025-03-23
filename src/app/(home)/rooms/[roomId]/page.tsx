import { Room, scGetRoom } from "@/app/api/get-room/callable";
import React from "react";
import YoutubePlayer from "./youtube-player";

export default async function RoomPage({ params }: { params: { roomId: string } }) {

    const { roomId } = await params;

    const room: Room = await scGetRoom(roomId);

    return (
        <div>
            <h1>This is a room for you to Enjoy.</h1>
            <br />
            <YoutubePlayer videoUrl={room.content}></YoutubePlayer>
        </div>
    );
}

