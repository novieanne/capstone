import React from 'react';

type ModalProps ={
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;

}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if ( !isOpen ) return null;

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        if(e.target instanceof HTMLElement && e.target.id === 'wrapper') onClose();
    }

    return (
        <div onClick={(handleClose)} id="wrapper" className='fixed inset-0 bg-black/30 backdrop-invert  backdrop-opacity-10 flex justify-center items-center'>
            <div className='w-[800px] flex flex-col relative'>
                <button className='absolute top-6 right-6 bg-amber-400 p-1 font-bold rounded-sm place-self-end'
                    onClick={() => onClose()}
                >
                    X
                </button>
                <div className='bg-white p-6 rounded-sm'>{children}</div>
            </div>    
        </div>
    );
}

export default Modal;
