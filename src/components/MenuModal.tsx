import { ReactElement, useEffect, useRef } from 'react'

type ModalProps = {
    openModal?: boolean;
    closeModal?: () => void;
    children: ReactElement;
}

export default function MenuModal({openModal, closeModal, children}: ModalProps) {
    const ref = useRef<HTMLDialogElement>(null);


    // logic that handles when the modal gets closed or opened
    useEffect(() => {
        if(openModal){
            ref.current?.showModal();
        } else {
            ref.current?.close();
        }
    }, [openModal])

  return (
    <dialog
        className='w-[327px] h-[224px] border-2 border-black bg-stone-100 rounded-2xl'
        ref={ref}
        onCancel={closeModal} 
    >
        {children}  
    </dialog>
  )
}