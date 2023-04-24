import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    const setBudget = (val) => {
        // if (val < {totalExpenses}) {
        //     alert('Budget cannot be less than Spent so far'+{totalExpenses});
        //     return;
        // }
        // val = remaining>=0 ? val : budget
        dispatch({
            type: 'SET_BUDGET',
            payload: val
        })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:   {currency}
                <input
                required='required'
                max='20000'
                min={totalExpenses}
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

