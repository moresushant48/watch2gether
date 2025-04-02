export async function scCreateRoom(videoUrl: string): Promise<string> {

    const response = await fetch('/api/create-room', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            videoUrl: videoUrl,
        })
    });

    if (!response.ok) {
        throw new Error('Failed to create room : ' + (await response.text()));
    }

    const roomId: string = await response.json();

    return roomId;
}
