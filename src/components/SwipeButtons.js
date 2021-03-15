import React from 'react'
import './SwipeButtons.css'
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';


const buttonIcons = [ 
    { 
        id: 1,
        IconName: ReplayIcon,
        icons: "swipe__btn__replay",      
    }, 
    { 
        id: 2,
        IconName: CloseIcon,
        icons: "swipe__btn__close",      
    }, 
    { 
        id: 3,
        IconName: StarIcon,
        icons: "swipe__btn__star",      
    }, 
    { 
        id: 4,
        IconName: FavoriteIcon,
        icons: "swipe__btn__favorite",      
    }, 
    { 
        id: 5,
        IconName: FlashOnIcon,
        icons: "swipe__btn__flash",      
    }
]

const SwipeButtons = () => {
    return (
        <div className='swipe__buttons'>
            {
                buttonIcons.map( ({ id, IconName, icons}) => (
                    <IconButton className={icons} key={id} >
                        <IconName fontSize='large' />
                    </IconButton>
                ))
            }
        </div>
    )
}

export default SwipeButtons
