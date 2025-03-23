
import { NextResponse } from "next/server";


export async function GET() {
    try {
        // const room = await prisma.room.create({
        //     data: { content: "https://www.youtube.com/watch?v=SpQ8_CLP8VI" },
        // });

        // return NextResponse.json(room.id);
    } catch (e) {
        return NextResponse.json({ error: "Something went wrong, please try again.", message: e }, { status: 500 });
    }
}