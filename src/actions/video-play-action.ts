'use server'

import admin from "@/app/firebase-admin";
import { Database } from "firebase-admin/database";

export async function actionUpdatePlayState(roomId: string, currentState: string, currentTime: number): Promise<boolean> {

    try {
        const db: Database = admin.database();

        await db.ref(`rooms/${roomId}`).update({
            "playState": currentState,
            "prevPlayState": currentState === "PLAY" ? "PAUSE" : "PLAY",
            "currentTime": currentTime,
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}