import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const setBudget = (event) => {
        const val = event.target.value;
        if (val > 20000) {
            alert(`The value cannot exceed ${currency}20,000`);
            return;
        } 
        if (val < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
            return;
        } 
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
                onChange = {setBudget}
                >
                </input>
            </span>
        </div >
    );
};
export default Budget;

