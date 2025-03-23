'use client';

import YouTube from "react-youtube";

export default function YoutubePlayer({ videoUrl }: { videoUrl: string }) {
    return (
        <YouTube
            videoId={getYouTubeVideoId(videoUrl)}
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