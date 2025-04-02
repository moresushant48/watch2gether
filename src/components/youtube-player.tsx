'use client';

import { rtdbRooms } from "@/app/firebase-client";
import { getPlayStateByStateNumber, PlayState } from "@/utils/player-states";
import { onValue } from "firebase/database";
import { useRef } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

export default function YoutubePlayer({
    videoUrl,
    roomId,
    updatePlayState,
}: {
    videoUrl: string,
    roomId: string,
    updatePlayState: (roomId: string, currentState: string, currentSeekTime: number) => Promise<boolean>
}) {

    onValue(rtdbRooms(roomId), (snap) => {
        if (!playerRef) {
            return;
        }

        if (!snap.exists() || !(snap.val())) {
            return;
        }

        const room = snap.val();

        if (room["playState"] !== getPlayStateByStateNumber(playerRef.current?.getPlayerState())) {
            if (room["playState"] === PlayState.PLAYING) {
                playerRef.current?.seekTo(room["currentTime"] ?? 0, true)
                playerRef.current?.playVideo();
                return;
            }

            if (room["playState"] === PlayState.PAUSED) {
                playerRef.current?.seekTo(room["currentTime"] ?? 0, true)
                playerRef.current?.pauseVideo();
                return;
            }
        }
    });

    function getCurrentTime() {
        return playerRef.current?.getCurrentTime() ?? 0;
    }

    async function onPlay() {
        updatePlayState(roomId, PlayState.PLAYING, getCurrentTime());
    }

    async function onPause() {
        updatePlayState(roomId, PlayState.PAUSED, getCurrentTime());
    }

    // onReady callback to get player instance
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const playerRef = useRef<any>(null);

    async function onReady(event: YouTubeEvent) {
        playerRef.current = event.target;
        playerRef.current?.playVideo();
    };

    const onStateChange = (event: YouTubeEvent) => {
        const state = getPlayStateByStateNumber(event.target?.getPlayerState());
        if (state === PlayState.PLAYING) {
            onPlay();
        }
        if (state === PlayState.PAUSED) {
            onPause();
        }
    }

    return (
        <YouTube
            videoId={getYouTubeVideoId(videoUrl)}
            onStateChange={onStateChange}
            onReady={onReady}
        ></YouTube>
    );
}

function getYouTubeVideoId(url: string): string {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]*\/\S*\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);

    if (match) {
        return match[1]; // The video ID is captured in the first group
    } else {
        return ""; // Return null if the URL doesn't match the expected formats
    }
}