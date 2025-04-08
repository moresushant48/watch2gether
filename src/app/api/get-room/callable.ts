'use server'

import { appBaseUrl } from "@/utils/utils";

export async function scGetRoom(roomId: string): Promise<Room> {

    const response = await fetch(`${appBaseUrl}/api/get-room`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            roomId: roomId,
        }),
    });

    if (!response.ok) {
        throw new Error("No such room exists, please create another Room");
    }

    return await response.json();
}

export type Room = {
    roomId: string;
    content: string;
}