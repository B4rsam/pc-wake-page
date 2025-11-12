"use client";

import { sendWakeRequest } from "@/src/services/wake";
import s from "./button.module.css";

const WakeButton = () => {
    return <button className={s.button} onClick={() => sendWakeRequest()}>Wake</button>;
};

export default WakeButton;
