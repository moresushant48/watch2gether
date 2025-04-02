"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";
import { scCreateRoom } from "../../api/create-room/callable";

export default function HomePage() {
    const router = useRouter();
    const inputVideoUrlRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const videoUrl = inputVideoUrlRef.current?.value;

        if (videoUrl) {
            scCreateRoom(videoUrl).then(
                (roomId) => {
                    if (roomId) {
                        router.push(`/rooms/${roomId}`);
                    }
                }
            );
        }
    }

    return (
        <>
            <main className="flex justify-center items-center">
                <form onSubmit={handleSubmit}>
                    <input ref={inputVideoUrlRef} type="url" placeholder="Enter a youtube video URL..." />
                    <button type="submit" className="p-4" > Create a Room </button>
                </form>
            </main>
        </>
    );
}

export const dynamic = "force-dynamic";
