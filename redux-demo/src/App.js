import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';

function App() {
    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.logged);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter-{counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button>-</button>
            {isLogged ? <h3>Value Information I shouldn't see</h3> : ''}
        </div>
    );
}

export default App;
