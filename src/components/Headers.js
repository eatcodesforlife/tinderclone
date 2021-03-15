import React from 'react'
import './Headers.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import tinderlogo from '../images/tinderlogo.jpg'
import ForumIcon from '@material-ui/icons/Forum';


const Headers = () => {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize='large' className='header__icon' />
            </IconButton>
            <img src={tinderlogo} alt="logo" className='header__logo' />
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>
        </div>
    )
}

export default Headers
