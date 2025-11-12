import {NextResponse} from "next/server";
import wol from "wake_on_lan";

export const PUT = () => {
    wol.wake(process.env.MAC as string);

    return new NextResponse("Wake command launched", { status: 201 });
};