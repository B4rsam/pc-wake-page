import api from "@/src/services/instance";

const endpoint = "/api/wake";

export const sendWakeRequest = () => {
    return api.put(endpoint);
};