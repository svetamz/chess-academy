import styled, { keyframes } from "styled-components";
import { copy } from "../text.ts";
import { colors } from "./colors.ts";
import { range } from "lodash";
import { Title } from "./utils.tsx";
import image from "../images/image2.webp";
import chess from "../images/chess.png";
import chess2 from "../images/chess2.png";
import chess3 from "../images/chess3.png";




export const Intro = () => {
    return <IntoContainer>
        <SquareWrapper>
            <BackgroundImage>
                <img src={image} alt="background" />
                <ChessContainerRight>
                    <img src={chess} />
                </ChessContainerRight>
                <ChessContainerMiddle>
                    <img src={chess2} />
                </ChessContainerMiddle>
                <ChessContainerTop>
                    <img src={chess3} />
                </ChessContainerTop>
            </BackgroundImage>
        </SquareWrapper>
        <TextWrapper>
            <Title style={{ paddingBottom: '10%' }}>{copy.moto}</Title>
        </TextWrapper>
    </IntoContainer>
}

const IntoContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`

const SquareWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-shrink: 0;
    overflow: hidden;
    flex-direction: column;
`


const TextWrapper = styled.div`
    display: inline-flex;
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    //background-color: rgba(49, 2, 100, 0.95);
    align-items: center;
    justify-content: center;
`

const BackgroundImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background-color: #010010;
    img{
        object-fit: cover;
        object-position: center;
        width: 300%;
        }
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ChessContainerRight = styled.div`
    width: 50px;
    img{
        width: 50px;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 15%;
        right: 10%;
        animation: ${rotate} 6s linear infinite;
        }
`
const ChessContainerMiddle = styled.div`
    width: 20px;
    img{
        width: 50px;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 55%;
        left: 5%;
        animation: ${rotate} 4s linear infinite;
        }
`
const ChessContainerTop = styled.div`
    width: 20px;
    img{
        width: 50px;
        object-fit: cover;
        object-position: center;
        position: absolute;
        top: 15%;
        left: 15%;
        animation: ${rotate} 10s linear infinite;
        }
`