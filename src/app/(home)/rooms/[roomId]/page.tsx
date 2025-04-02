'use server'

import { Room, scGetRoom } from "@/app/api/get-room/callable";
import React from "react";
import { actionUpdatePlayState } from "@/actions/video-play-action";
import ShareButtonComponent from "@/components/share-button-component";
import Link from "next/link";
import YoutubePlayer from "@/components/youtube-player";

export default async function RoomPage({ params }: { params: Promise<{ roomId: string }> }) {

    const { roomId } = await params;

    const room: Room = await scGetRoom(roomId);

    return (
        <main className="bg-gradient-to-br from-gray-900 to-black min-h-screen p-4">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center my-6">
                    <Link href="/" className="inline-block">
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Watch<span className="text-purple-400">2</span>Gether
                        </h1>
                    </Link>
                </div>

                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-2xl border border-gray-700">
                    <div className="aspect-w-16 aspect-h-9 mb-6">
                        <YoutubePlayer
                            roomId={room.roomId}
                            videoUrl={room.content}
                            updatePlayState={actionUpdatePlayState}
                        />
                    </div>

                    <div className="flex justify-center">
                        <ShareButtonComponent />
                    </div>
                </div>
            </div>
        </main>
    );
}

