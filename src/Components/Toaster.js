import React from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toaster = (description) => {
    return toast.error(description, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }
  export const Toastersuccess = (description) => {
    return toast.success(description, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }