import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import './css/currency.css';

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    }

    return (
        <div className='alert curr'> Currency {
            <select
            className='curr'
            name="Currency" 
            id="Currency" 
            onChange={event=>changeCurrency(event.target.value)}>
                <option value="£">£ Pound</option>
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>	
            }	
        </div>
    );
};

export default Currency;
