import React, { useState, useEffect } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from '../axios'

const TinderCards = () => {
    const [ users, setUsers ] = useState([])


    useEffect(() => {
        const getData = async() => {
            const res = await axios.get('/profiles')
            setUsers(res.data)
        }

        getData()

    }, [])

    console.log(users)

    const onSwipe = (name, direction) => {
        console.log(`You swiped ${name} to ${direction}`)
    }
    const outOfScreen = (name) => {
        console.log(name, 'is out of screen')
    }
    return (
        <div className='tinder__cards'>
            <div className="tinder__cards__container">
                {
                    users.map( ({name, imgURL, _id}) => (
                        <TinderCard 
                            onSwipe={(dir) => onSwipe(name, dir)} 
                            key={_id}
                            className='swipe'
                            preventSwipe={[ "up", "down" ]}
                            onCardLeftScreen={() => outOfScreen(name)}
                        >
                            <div className="card" style={{ backgroundImage: `url(${imgURL})`}}>
                                <h3 className>{name}</h3>
                            </div>
                        </TinderCard>
                        
                    ))
                }
            </div>
        </div>
    )
}

export default TinderCards
