import React, {ReactElement, useEffect} from 'react'

export interface PopupProps {
    title: string;
    togglePopup: () => void;
    children: ReactElement[] | ReactElement
}

const Popup:React.FC<PopupProps> = (props) => {
    const {title, children, togglePopup} = props;
    useEffect(() => {
        let timer: number | null = null;
        timer = setTimeout(() => {
            togglePopup();
        }, 3000);

        return () => clearTimeout(timer);

    }, []);

  return (
    <div className='popup-container'>
        <header className='popup-header'>
            <span>{title}</span>
            <button onClick={togglePopup}>X</button>
        </header>
        {children}
    </div>
  )
}

export default Popup