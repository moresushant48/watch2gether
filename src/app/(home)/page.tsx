'use client'

import { useRouter } from "next/navigation";

export default function HomePage() {

    const router = useRouter();

    async function createRoom() {
        const response = await fetch('/api/create-room', {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to create room');
        }

        const roomId: string = await response.json();

        router.push(`/rooms/${roomId}`)
    }

    return (
        <>
            <main className="flex justify-center items-center">
                <button className="p-4" onClick={createRoom}> Create a Room </button>
            </main>
        </>
    );
}
