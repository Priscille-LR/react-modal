import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.8);
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const ModalWrapper = styled.div`
   border-radius: 20px;
   width: 500px;
   height: 300px;
   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
   background: #fff;
   padding: 2rem 0;
   // color: #000;
   position: fixed;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   z-index: 10;
   @keyframes modalOpen {
      from {
         opacity: 0;
         transform: translateY(-150px);
      }
      to {
         opacity: 1;
      }
   }
   animation: modalOpen 500ms;
`;

const ModalImg = styled.img`
   width: 30%;
   height: 30%;
   object-fit: contain;
   //   margin: 2rem auto;
`;

const ModalContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   line-height: 2;
   color: #343e7a;
   margin: 1rem;
   p {
      margin-bottom: 1rem;
   }
   button {
      margin: 0.5rem;
      padding: 10px 24px;
      background: #343e7a;
      color: #fff;
      border: none;
      border-radius: 10px;
      &:hover {
         opacity: 0.8;
      }
   }
`;

const CloseModalButton = styled(MdClose)`
   cursor: pointer;
   position: absolute;
   top: 20px;
   right: 20px;
   width: 32px;
   height: 32px;
   padding: 0;
   z-index: 10;
`;

interface IModalProps {
   setShowModal: (arg: boolean) => void;
   modalTitle: string;
   modalMessage: string;
   buttonContent: string;
}

const Modal: React.FC<IModalProps> = ({
   setShowModal,
   modalTitle,
   modalMessage,
   buttonContent,
}) => {
   const closeModal = () => setShowModal(false);

   
    const keyPress = useCallback(
      (e) => {
         if (e.key === 'Escape') {
            setShowModal(false);
         }
      },
      [setShowModal]
   );

   useEffect(() => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
   }, [keyPress]);
   
   return (
      <div className="modal">
         <Background onClick={closeModal}>
            <ModalWrapper>
               {/* <ModalImg src={require('./modal-logo.png')} alt="checked" /> */}
               <ModalContent>
                  <h2>{modalTitle}</h2>
                  <p>{modalMessage}</p>
                  <button onClick={closeModal}>{buttonContent}</button>
                  <CloseModalButton onClick={closeModal} />
               </ModalContent>
            </ModalWrapper>
         </Background>
      </div>
   );
};

export default Modal;
