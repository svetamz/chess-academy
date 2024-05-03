import {copy} from "../text.ts";
import styled from "styled-components";
import {colors} from "./colors.ts";
import {Title} from "./utils.tsx";

export const Benefits = () => {
    return (<BenefitsWrapper>
        <Wrapper>
            <Title color={colors.white}>{copy.help.title}</Title>
        </Wrapper>
        <SquareWrapper>
            {copy.help.items.map(i => (<Square key={i}>{i}</Square>))}
        </SquareWrapper>
    </BenefitsWrapper>)
}

const Wrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 40px;
`

const BenefitsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 20px 60px;
    background-color: ${colors.violet};
`

const SquareWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const Square = styled.div`
    min-width: 200px;
    min-height: 200px;
    flex: 1;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    font-size: 1rem;
    color: ${colors.white};
    border: 1px solid ${colors.white};
`