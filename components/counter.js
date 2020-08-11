import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core/';
import { incrementCount, decrementCount, resetCount } from '../redux/actions';

const Counter = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Count:
        {' '}
        <span>{count}</span>
      </h1>
      <Button onClick={() => dispatch(incrementCount())}>
        +1
      </Button>
      <Button onClick={() => dispatch(decrementCount())}>
        -1
      </Button>
      <Button onClick={() => dispatch(resetCount())}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;
