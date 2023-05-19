import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnterdName] = useState('');
  const [enterdNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputChanegeHandler = (event) => {
    setEnterdName(event.target.value);
  };

  const formSunmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    setEnterdName('');
  };

  const nameInputClasses = enterdNameIsValid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSunmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          onChange={nameInputChanegeHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {!enterdNameIsValid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
