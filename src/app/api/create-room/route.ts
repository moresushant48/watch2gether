

import admin from "@/app/firebase-admin";
import { Database } from "firebase-admin/database";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";


export async function POST(request: NextRequest) {
    try {
        const db: Database = admin.database();

        const uid = uuidv4();

        const { videoUrl } = await request.json();

        if (!videoUrl) {
            throw new Error("Couldn't get the Video URL, please enter a valid URL.");
        }

        await db.ref(`rooms/${uid}`).set({
            roomId: uid,
            content: videoUrl,
            createdAt: Date.now(),
        });

        return NextResponse.json(uid);
    } catch (e) {
        return NextResponse.json({ error: "Something went wrong, please try again.", message: e }, { status: 500 });
    }
}