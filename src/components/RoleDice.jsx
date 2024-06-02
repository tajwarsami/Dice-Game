import styled from "styled-components"

import { useState } from "react";


const RoleDice = ({roleDice, currentDice})=>{

    // const generateRandomNumber = (min, max) => {
    //     console.log(Math.floor(Math.random()*(max - min) + min));
    //     return Math.floor(Math.random()*(max - min) + min);
    // };

    // const roleDice = () => {
    //     const randomNumber = generateRandomNumber(1, 7);

    //     setCurrentDice((prev) => randomNumber);
    // }

    return(
        <DiceContainer>
        <div className="dice"
         onClick={roleDice}
        >
            <img src={`./images/dice/dice_${currentDice}.png`} alt={`Dice ${currentDice}`} />
        </div>

        <p>Click dice to roll</p>

        </DiceContainer>

    )
}

export default RoleDice


const DiceContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

p{
   font-size: 24px;
}

.dice{
    cursor: pointer;
}

`