import React, { useRef } from 'react';

function InputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

// export default InputWithFocusButton;





// updated component
import React, { useRef } from 'react';

function InputWithFocusButton() {
  const inputEl = useRef(null);

  return (
    <>
      <input ref={inputEl} type="text" />
      <button>Focus the input</button>
    </>
  );
}

export default InputWithFocusButton;



// Assignment:

// The user is given a boilerplate folder which contains the source code for a React app that demonstrates the use of the useRef hook. However,
//  some parts of the code that are necessary to complete the demonstration have been removed. The user's task is to fill in the missing code so
//   that the app correctly demonstrates the use of the useRef hook, and the test cases in Cypress pass.