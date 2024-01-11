import './toggle.css'
import React, { useState } from 'react';

function Toggle ( {handleChange, isChecked})  {

    const [imageLoaded, setImageLoaded] = useState(true)

    const changeImage = () => {
        return isChecked ? './dm2.png' : './lm.png'
    }

    const handleImageLoaded = () => {
        setImageLoaded(true)
    }

    return (
        <div className='toggle-container'>
            <div className='toggle-wrapper'>
            <input 
            type='checkbox'
            id='check'
            className='toggle'
            onChange={handleChange}
            checked={isChecked}
            />
            <label htmlFor='check' className={`image-transition ${!imageLoaded ? 'hidden' : ''}`}>
                <img className='toggle-img' src={changeImage()} alt={isChecked ? 'Day and Night Icon' : 'Dark Mode Icon'} />
                </label>
                </div>
        </div>
    )

}

export default Toggle