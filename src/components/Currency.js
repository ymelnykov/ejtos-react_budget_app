import React, {useContext, useEffect} from 'react';
import {AppContext} from '../context/AppContext';
import './css/currency.css';


const Currency = () => {
    const {dispatch} = useContext(AppContext);

    useEffect((dispatch) => {
        const dropdown = document.querySelector('.custom-dropdown');
        const selectedOption = dropdown.querySelector('.selected-option');
        const optionsList = dropdown.querySelector('.options-list');
        const options = dropdown.querySelectorAll('.options-list li');
    
        options.forEach(option => {
        option.addEventListener('click', () => {
            selectedOption.textContent = `Currency (${option.textContent}) \u25bc`;
            changeCurrency(option.dataset.value);
            optionsList.style.display = 'none';
        });
        });
    
        selectedOption.addEventListener('click', () => {
        optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
        });
        return () =>{
            options.forEach(option => {
                option.addEventListener('click', () => {
                    selectedOption.textContent = `Currency (${option.textContent}) \u25bc`;
                    changeCurrency(option.dataset.value);
                    optionsList.style.display = 'none';
                });
                });
            
                selectedOption.addEventListener('click', () => {
                optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
                });
            }
    }, []);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    }

    return (
        <div className='alert curr'>
            <div class="custom-dropdown">
            <div class="selected-option">Currency (£ Pound) &#9660;</div>
            <ul class="options-list">
                <li data-value="$">$ Dollar</li>
                <li data-value="£">£ Pound</li>
                <li data-value="€">€ Euro</li>
                <li data-value="₹">₹ Ruppee</li>
            </ul>
            </div>
        </div>
    );
};

export default Currency;



