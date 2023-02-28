import { useState } from 'react'

function Dice(props) {
    const styles = {
        backgroundColor: props.isHeld ? '#59E391' : 'white'
    }
    return (
        <div 
            style={styles} 
            className='dice-face' 
            onClick={props.holdDice}
        >
            <h2 className='die-num'>{props.value}</h2>
        </div>
    )
}

export default Dice