import { Id, toast } from "react-toastify";
let IdUser: Id;

export const correctAction = (message: string) => toast.success(message);
export const wrongAction = (message: string) => toast.error(message);
export const loading = (message: string) => {
  IdUser = toast.loading(message);
};

export const loadingOff = () => toast.dismiss(IdUser);
