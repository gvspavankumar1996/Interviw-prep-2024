import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const ToastComponent = () => {
  const [toasts, setToasts] = useState([]);
  let timersRef = useRef({});

  const handleClose = (id) => {
    // setShow(false);
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
    const filterToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(filterToasts);
  };
  const handleAdd = (message, type) => {
    console.log("handle adddd");
    const id = new Date().getTime();
    console.log(id, "id hello");
    setToasts((prevState) => [
      ...prevState,
      {
        id,
        message,
        type,
      },
    ]);
    timersRef.current[id] = setTimeout(() => handleClose(id), 5000);
    // setTimeout(handleClose, 5000);
  };
  return (
    <div className="container">
      <div className="toast-container">
        {toasts &&
          toasts.length > 0 &&
          toasts.map((toast) => {
            return (
              <div
                key={toast?.id}
                className={`toast ${toast?.type || "success"}`}
              >
                {toast?.message}
                <span onClick={() => handleClose(toast?.id)}>x</span>
              </div>
            );
          })}
      </div>

      <button onClick={() => handleAdd("Success Message", "success")}>
        Success Toast
      </button>
      <button onClick={handleAdd}>info Toast</button>
      <button onClick={handleAdd}>warning Toast</button>
      <button onClick={handleAdd}>error Toast</button>
    </div>
  );
};

export default ToastComponent;
