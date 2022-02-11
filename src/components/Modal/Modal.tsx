import React, { SetStateAction } from 'react';
import { GrClose } from 'react-icons/gr';
import './modal.css';

interface IModalProps {
   setShowModal: React.Dispatch<SetStateAction<boolean>>;
   modalTitle: string;
   modalMessage: string;
   buttonContent: string;
}

//const logo = require('../../assets/modal-logo.png');

const Modal: React.FC<IModalProps> = ({
   setShowModal,
   modalTitle,
   modalMessage,
   buttonContent,
}) => {
   const closeModal = () => setShowModal(false);

   return (
      <div className="modal-background" onClick={closeModal}>
         <div className="modal-wrapper">
            {/* <img src={logo} alt="" className="modal-img" /> */}
            <div className="modal-content">
               <GrClose onClick={closeModal} />
               <h2>{modalTitle}</h2>
               <p>{modalMessage}</p>
               <button onClick={closeModal}>{buttonContent}</button>
            </div>
         </div>
      </div>
   );
};

export default Modal;
