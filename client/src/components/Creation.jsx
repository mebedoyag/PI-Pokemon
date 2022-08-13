import { useState } from 'react';
import validate from '../utils';

function Creation() {
  const [input, setInput] = useState({
    name: '',
    typeOne: '',
    height: '',
    weight: ''
  });

  const [error, setError] = useState({});

  const handleInpChan = (e) => {
    setInput({
      ...input, 
      [e.target.name]: e.target.value
    });
    // alert(validate);
    setError(validate({
      ...input, 
      [e.target.name]: e.target.value
    }));
  }

  return (
    <form action="post">
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleInpChan} value={input.name} />
      </div>
      <div>
        <label htmlFor="typeOne">Type</label>
        <input type="text" name="typeOne" id="typeOne" onChange={handleInpChan} value={input.typeOne} />
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <input type="text" name="height" id="height" onChange={handleInpChan} value={input.height} />
      </div>
      <div>
        <label htmlFor="weight">Weight</label>
        <input type="text" name="weight" id="weight" onChange={handleInpChan} value={input.weight} />
      </div>
    </form>
  );
}

export default Creation;