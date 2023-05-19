import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnterdName] = useState('');

  const nameInputChanegeHandler = (event) => {
    setEnterdName(event.target.value);
  };

  const formSunmissionHandler = (event) => {
    event.preventDefault();

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnterdName('');
  };

  return (
    <form onSubmit={formSunmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          onChange={nameInputChanegeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
