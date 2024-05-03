import {copy} from "../text.ts";
import styled from "styled-components";
import {Title} from "./utils.tsx";
import {colors} from "./colors.ts";

export const Advantages = () => {
    return (<AdvantagesContainer>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Title color={colors.darkViolet}>Наші Переваги</Title>
        </div>
        {copy.advantages.map((a, index) => (<Advatage index={index}>
            <AdvantageWrapper>
                <div style={{marginRight: '20px'}}>
                    <Arrow index={index}></Arrow>
                </div>
                <div>
                    <AdvantageTitle index={index}>{a.title}</AdvantageTitle>
                    <AdvantageText index={index}>{a.description}</AdvantageText>
                </div>
            </AdvantageWrapper>
        </Advatage>))}
    </AdvantagesContainer>)
}

const AdvantagesContainer = styled.div`
    padding: 40px 0px 0px;
    background-color: ${colors.white};
`

const Advatage = styled.div<{ index: number }>`
    display: flex;
    background-color: ${props => props.index % 2 === 0 ? colors.white : colors.violet};
    padding: 40px 0px;
    justify-content: center;
`

const AdvantageWrapper = styled.div`
    display: flex;
    width: 900px;
`

const AdvantageTitle = styled.span<{ index: number }>`
    color: ${props => props.index % 2 === 0 ? colors.darkViolet : colors.white};
    font-size: 1.5rem;
    display: block;
    margin-bottom: 20px;
`

const AdvantageText = styled.span<{ index: number }>`
    color: ${props => props.index % 2 === 0 ? colors.darkViolet : colors.white};
    display: block;
`

const Arrow = ({index}) => (<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
    <path d="M6 17.5L13 24.5L27 9.5" stroke={index % 2 === 0 ? colors.darkViolet : colors.white} stroke-width="1.5" stroke-linecap="round"
          stroke-linejoin="round"/>
</svg>)