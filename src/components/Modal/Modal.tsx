import React, { SetStateAction } from 'react';
import { GrClose } from 'react-icons/gr';
import './modal.css';

interface IModalProps {
   setShowModal: React.Dispatch<SetStateAction<boolean>>;
   children: React.ReactNode;
   buttonContent: string;
}

//const logo = require('../../assets/modal-logo.png');

const Modal: React.FC<IModalProps> = ({
   setShowModal,
   children,
   buttonContent,
}) => {
   const closeModal = () => setShowModal(false);

   return (
      <div className="modal-background" onClick={closeModal}>
         <div className="modal-wrapper">
            {/* <img src={logo} alt="" className="modal-img" /> */}
            <div className="modal-content">
               <GrClose onClick={closeModal} />
               <div className="modal-text">{children}</div>
               <button onClick={closeModal}>{buttonContent}</button>
            </div>
         </div>
      </div>
   );
};

export default Modal;
