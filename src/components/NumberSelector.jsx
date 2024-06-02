import styled from "styled-components"

import { useState } from "react"

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {

    const array = [1, 2, 3, 4, 5, 6]


    const numberSelectorHandler = (value)=>{
        setSelectedNumber(value);
        setError("");
    }
   

    //console.log(selectedNumber)

    return(
        <NumContainer>
            <p className="error">
                {error}
            </p>
            <div className="flex">
            {array.map((value, i) =>(
                <Box           
                key={i}
                isSelected = {value === selectedNumber}
                onClick={() => numberSelectorHandler(value)}>{value}</Box>
            ))}
            </div>

            <p>
                Select Number
            </p>
        </NumContainer>
    )
}

export default NumberSelector


const NumContainer = styled.div`
    
    .flex{
        display: flex;
        gap: 24px;
    }

    p{
        font-size: 24px;
        font-weight: 700;
        display: flex;
        justify-content: end;
    }

    .error{
        color: red;
    }


`

const Box = styled.div`
   
   width: 72px;
   height: 72px;
   border: 1px solid black;

  display: grid;
  place-items: center;

  font-size: 24px;
  font-weight: 700;


  background-color: ${(props)=> (props.isSelected ? "black":"white")};
  color: ${(props)=> (props.isSelected ? "white":"black")};


`