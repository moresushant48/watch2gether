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
            <main className="bg-gradient-to-br from-gray-900 to-black min-h-screen flex items-center justify-center p-4">
                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 w-full max-w-md shadow-2xl border border-gray-700">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Watch<span className="text-purple-400">2</span>Gether
                        </h1>
                        <p className="text-gray-300 text-sm">Share music and videos with friends in real-time</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="videoUrl" className="block text-gray-300 text-sm font-medium">
                                Enter YouTube URL
                            </label>
                            <input
                                ref={inputVideoUrlRef}
                                type="url"
                                id="videoUrl"
                                name="videoUrl"
                                placeholder="https://www.youtube.com/watch?v=..."
                                className="w-full px-4 py-3 bg-gray-700 bg-opacity-70 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-white placeholder-gray-400"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 shadow-lg"
                        >
                            Listen 2gether
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
}
