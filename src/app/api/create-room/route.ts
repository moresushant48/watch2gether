

import admin from "@/app/firebase-admin";
import { Database } from "firebase-admin/database";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";


export async function POST() {
    try {
        const db: Database = admin.database();

        const uid = uuidv4();

        await db.ref(`rooms/${uid}`).set({
            roomId: uid,
            content: "https://www.youtube.com/watch?v=SpQ8_CLP8VI",
            createdAt: Date.now(),
        });

        return NextResponse.json(uid);
    } catch (e) {
        return NextResponse.json({ error: "Something went wrong, please try again.", message: e }, { status: 500 });
    }
}