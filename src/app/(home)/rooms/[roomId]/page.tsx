'use server'

import { Room, scGetRoom } from "@/app/api/get-room/callable";
import React from "react";
import YoutubePlayer from "./youtube-player";
import { actionUpdatePlayState } from "@/actions/video-play-action";

export default async function RoomPage({ params }: { params: { roomId: string } }) {

    const { roomId } = await params;

    const room: Room = await scGetRoom(roomId);

    return (
        <div>
            <h1 className="text-2xl">W2G</h1>

            <br />

            <YoutubePlayer
                roomId={room.roomId}
                videoUrl={room.content}
                updatePlayState={actionUpdatePlayState}
            />
        </div>
    );
}

