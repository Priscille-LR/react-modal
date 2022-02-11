import React from 'react';
import { render } from '@testing-library/react';

import Modal from './Modal';

describe('Modal', () => {
   test('renders the Modal component', () => {
      const setShowModal = jest.fn();
      render(
         <Modal
            setShowModal={setShowModal}
            modalTitle={'Success !'}
            modalMessage={'Employee has been created'}
            buttonContent={'Close'}
         />
      );
   });
});
