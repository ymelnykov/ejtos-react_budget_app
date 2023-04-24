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
            className="curr"
            name="Currency" 
            id="Currency" 
            // onFocus={this.size=5}
            // onBlur={this.size=0}
            onChange={event=>changeCurrency(event.target.value)}>
            {/* onChange={this.size=1}
            onChange={this.blur()} */}
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
