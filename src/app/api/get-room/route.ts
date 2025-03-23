

import admin from "@/app/firebase-admin";
import { Database } from "firebase-admin/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const db: Database = admin.database();

        const { roomId } = await request.json();

        const snap = await db.ref(`rooms/${roomId}`).get();

        if (!snap.exists()) {
            throw new Error("Unable to find any such Room");
        }

        return NextResponse.json(snap);
    } catch (e) {
        return NextResponse.json({ error: "Something went wrong, please try again.", message: e }, { status: 500 });
    }
}