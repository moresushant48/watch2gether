export async function scGetRoom(roomId: string): Promise<Room> {

    const response = await fetch("http://localhost:3000/api/get-room", {
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

export class Room {
    roomId!: string;
    content!: string;
}