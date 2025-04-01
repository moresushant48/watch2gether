export enum PlayState {
    UNSTARTED = "UNSTARTED",
    ENDED = "ENDED",
    PLAYING = "PLAYING",
    PAUSED = "PAUSED",
    BUFFERING = "BUFFERING",
    VIDEO_CUED = "VIDEO_CUED",
}


// State Code	Constant Name	Description
// -1         | UNSTARTED     | Video has not started yet.
// 0          | ENDED         | Video has finished playing.
// 1          | PLAYING       | Video is currently playing.
// 2          | PAUSED        | Video is paused.
// 3          | BUFFERING     | Video is buffering / loading.
// 5          | VIDEO_CUED    | Video is cued and ready to play.
export function getPlayStateByStateNumber(state: number): string {
    switch (state) {
        case -1:
            return "UNSTARTED";
        case 0:
            return "ENDED";
        case 1:
            return "PLAYING";
        case 2:
            return "PAUSED";
        case 3:
            return "BUFFERING";
        case 4:
            return "VIDEO_CUED";
        default:
            return "PLAYING";
    }
}