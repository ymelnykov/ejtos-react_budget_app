import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseTotal from './ExpenseTotal';
const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);

    const setBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload:val,
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:   {currency}
                <input
                required='required'
                max='20000'
                min={ExpenseTotal}
                step='10'
                type='number'
                id='budget'
                value={budget}
                style={{width: '8rem'}}
                onChange = {e => setBudget(e.target.value)}>
                </input>
            </span>
        </div >
    );
};
export default Budget;

