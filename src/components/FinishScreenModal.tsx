import { ReactElement, useEffect, useRef } from 'react'

type ModalProps = {
    openModal?: boolean;
    closeModal?: () => void;
    children: ReactElement;
}

export default function FinishScreenModal({openModal, closeModal, children}: ModalProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if(openModal){
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal])

  return (
    <dialog
        className='lg:w-[654px] w-[327px] h-[488px] lg:h-[702px] border-2 border-black bg-stone-100 rounded-2xl'
        ref={ref}
        onCancel={closeModal} 
    >
        {children}  
    </dialog>
  )
}