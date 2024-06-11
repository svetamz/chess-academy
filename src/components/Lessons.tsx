import styled from "styled-components";
import {colors} from "./colors.ts";
import {copy} from "../text.ts";
import {Title} from "./utils.tsx";

export const Lessons = () => {
    return (
        <LessonsContainer>
            <LessonsRow>
                <LessonsBlock index={1}>
                    <Title>{copy.chessLessons[0].title}</Title>
                    <DescriptionWrapper>
                        {copy.chessLessons[0].items.map(i => (<DescriptionItem index={0}>&#183; {i}</DescriptionItem>))}
                    </DescriptionWrapper>
                </LessonsBlock>
                <LessonsBlock index={2}>
                    <Title color={colors.darkViolet}>{copy.checkersLessons[0].title}</Title>
                    <DescriptionWrapper>
                        {copy.checkersLessons[0].items.map(i => (
                            <DescriptionItem index={1}>&#183; {i}</DescriptionItem>))}
                    </DescriptionWrapper>
                </LessonsBlock>
            </LessonsRow>
            <LessonsRow>
                <LessonsBlock index={2}>
                    <Title color={colors.darkViolet}>{copy.chessLessons[1].title}</Title>
                    <DescriptionWrapper>
                        {copy.chessLessons[1].items.map(i => (<DescriptionItem index={1}>&#183; {i}</DescriptionItem>))}
                    </DescriptionWrapper>
                </LessonsBlock>
                <LessonsBlock index={1}>
                    <Title>{copy.checkersLessons[1].title}</Title>
                    <DescriptionWrapper>
                        {copy.checkersLessons[1].items.map(i => (
                            <DescriptionItem index={0}>&#183; {i}</DescriptionItem>))}
                    </DescriptionWrapper>
                </LessonsBlock>
            </LessonsRow>
            <LessonsRow>
                <LessonsBlock index={1}>
                    <Title>{copy.chessLessons[2].title}</Title>
                    <DescriptionWrapper>
                        {copy.chessLessons[2].items.map(i => (<DescriptionItem index={0}>&#183; {i}</DescriptionItem>))}
                    </DescriptionWrapper>
                </LessonsBlock>
                <LessonsBlock index={2}>
                    <Title color={colors.darkViolet}>{copy.checkersLessons[2].title}</Title>
                    <DescriptionWrapper>
                        {copy.checkersLessons[2].items.map(i => (
                            <DescriptionItem index={1}>&#183; {i}</DescriptionItem>))}
                    </DescriptionWrapper>
                </LessonsBlock>
            </LessonsRow>
        </LessonsContainer>
    )
}


const LessonsContainer = styled.div`
    width: 100vw;
`

const LessonsRow = styled.div`
    display: flex;
`

const LessonsBlock = styled.div<{ index: number }>`
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: ${props => props.index % 2 === 0 ? colors.white : colors.darkViolet};
    justify-content: center;
    align-items: center;
    padding: 80px 10px;
`

const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
`

const DescriptionItem = styled.div<{ index: number }>`
    color: ${props => props.index % 2 === 0 ? colors.white : colors.darkViolet};
    font-size: 1rem;
    line-height: 2rem;
`