import { useState, useRef } from "react";
import Toast from "../components/Toast";

const useToast = () => {
    const [toastOptionsList, setToastOptionsList] = useState([]);
    const timersRef = useRef({});

    const triggerToast = (options) => {
        console.log(options);
        const id = new Date().getTime();
        setToastOptionsList(prev => [...prev, {...options, id}]);

        const timer = setTimeout(() => {
            handleClose(id);
        }, options.duration);

        timersRef.current = {...timer.current, id: timer};
    }

    const handleClose = (id) => {
        const updatedToastList = toastOptionsList.filter((toast) => toast.id !== id);

        delete timersRef.current[id];

        setToastOptionsList(updatedToastList);
    }

    const ToastComponent = <Toast optionsList={toastOptionsList} onClose={(id) => handleClose(id)} />;

    return [ToastComponent, triggerToast];
}

export default useToast;