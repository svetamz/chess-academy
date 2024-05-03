import styled from "styled-components";
import {copy} from "../text.ts";
import {colors} from "./colors.ts";
import {range} from "lodash";
import {Title} from "./utils.tsx";
let sqaures = range(20);

export const Intro = () => {
    return <IntoContainer>
        <SquareWrapper>
            <SquareRow>
                {sqaures.map(s => <Square square={s}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s+1}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s+1}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s+1}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s+1}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s+1}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s+1}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s}></Square>)}
            </SquareRow>
            <SquareRow>
                {sqaures.map(s => <Square square={s+1}></Square>)}
            </SquareRow>
        </SquareWrapper>
        <TextWrapper>
            <Title>{copy.moto}</Title>
        </TextWrapper>
    </IntoContainer>
}

const IntoContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${colors.violet};
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

const SquareRow = styled.div`
    display: flex;
    flex: 1
`

const Square = styled.div<{square: number}>`
    min-width: 200px;
    min-height: 200px;
    background-color: ${props => props.square % 2 === 0 ? '#e6e6e6' : colors.violet};
    flex: 1;
    display: flex
`

const TextWrapper = styled.div`
    display: inline-flex;
    position: relative;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(49, 2, 100, 0.95);
    align-items: center;
    justify-content: center;
`