# React Modal

A simple and reusable Modal component for React, using Typescript.

## Installation

This package can be installed via [NPM](https://www.npmjs.com/) :
`npm i react-modal-plr`

Or [Yarn](https://yarnpkg.com/) :
`yarn add react-modal-plr`

You’ll need to install React and PropTypes separately since those dependencies aren’t included in the package.

## Usage

Here is an example of how you can use this modal component :

```javascript
import { Modal } from 'react-modal-plr';

const Example = () => {
   const [showModal, setShowModal] = useState(false);
   return (
      <Modal
         setShowModal={setShowModal}
         children={
            <>
               <h2>Oh yeah !</h2>
               <p>What you wanted to do was a success</p>
            </>
         }
         buttonContent={'Close'}
      />
   );
};
```

Need more customization ? You can always override the default styles by assigning new CSS properties to the elements.

## License

MIT © [PriscilleLR](https://github.com/Priscille-LR)
