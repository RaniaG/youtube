import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useAppSelector } from "../../store";
import "react-toastify/dist/ReactToastify.css";

export function ErrorNotification() {
  const error = useAppSelector((state) => state.error.error);
  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
}
