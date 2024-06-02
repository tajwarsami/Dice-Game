import Score from "./Score"
import NumberSelector from "./NumberSelector"
import styled from "styled-components"
import RoleDice from "./RoleDice"

import { useState } from "react"
import {Button, OutLineButton} from '../styled/Button'
import Rules from "./Rules"



const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random()*(max - min) + min));
        return Math.floor(Math.random()*(max - min) + min);
    };

    const roleDice = () => {

        if(!selectedNumber){


            setError("You haven't selected any number");

            return;

        } 

        setError("");

        const randomNumber = generateRandomNumber(1, 7);

        setCurrentDice((prev) => randomNumber);

        if(selectedNumber === randomNumber){
            setScore((prev) => prev + randomNumber)
        }
        else{
            setScore((prev) => prev - 2)
        }

        setSelectedNumber(undefined);
    }


    const resetScore = () => {
        setScore(0);
    }

   
    return(
        <MainContainer>

            <div className="top-section">
            <Score score={score}></Score>
           <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}></NumberSelector>
           </div>
           <RoleDice currentDice={currentDice} roleDice={roleDice}></RoleDice> 
           <div className="btns">
             <Button onClick={resetScore}>Reset</Button>
            <OutLineButton onClick={() => setShowRules((prev) => (!prev))}>{showRules ? "Hide ":"Show "}Rules</OutLineButton> 
           </div>

           {showRules && <Rules></Rules>}
        </MainContainer>
    )
}

export default GamePlay


const MainContainer = styled.main`

padding-top: 70px;

.top-section{
     display: flex;
     justify-content: space-around;
     align-items: end;
}

.btns{
    gap: 10px;
    /* margin-top: 10px; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
}
`