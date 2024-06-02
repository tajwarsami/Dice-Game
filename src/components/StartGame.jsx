
import styled from "styled-components"
import {Button} from "../styled/Button"

const StartGame = ({toggle})=>{
   return(

    <Container>
        <div>
        <img src="./images/dices1.png" alt="" />
        </div>
    
    <div className="content">
        <h1>Dice Game</h1>
        <div className="content-btn">
        <Button
        onClick={toggle}>Play Now</Button>
        </div>
    </div>
    </Container>
   )
}

export default StartGame

const Container = styled.div`

    max-width: 1180px;
    display: flex;
    align-items: center;
    justify-content: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;
        }

        .content-btn{
            display: flex;
            justify-content: end;
        }
    }

`

