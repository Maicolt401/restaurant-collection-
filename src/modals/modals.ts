import { toast } from "react-toastify";

export const correctAction = (message: string) => toast.success(message);
export const wrongAction = (message: string) => toast.error(message);
export const loading = (message: string) => toast.loading(message);
