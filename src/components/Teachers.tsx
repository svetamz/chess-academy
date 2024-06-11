import styled from "styled-components";
import { copy } from "../text.ts";
import { colors } from "./colors.ts";
import { Title } from "./utils.tsx";

export const Teachers = () => {
    return (
        <TrainerWrppaer>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <Title color={colors.white}>Наші тренера</Title>
            </div>
            <div style={{ display: "flex" }}>
                <TrainerWrapper>
                    <Trainer>
                        <TrainerPhotoWrapper>
                            <TrainerPhoto>
                                <img src={copy.trainers[0].image}></img>
                            </TrainerPhoto>
                        </TrainerPhotoWrapper>
                        <TrainerTitle>{copy.trainers[0].name} <p style={{margin:'0px'}}>{copy.trainers[0].title}</p></TrainerTitle>
                        <Description>{copy.trainers[0].description}</Description>
                        <Achievements>
                            {copy.trainers[0].items.map(i => (<span>&#183; {i}</span>))}
                        </Achievements>
                    </Trainer>
                </TrainerWrapper>
                <TrainerWrapper>
                    <Trainer>
                        <TrainerPhotoWrapper>
                            <TrainerPhoto>
                                <img src={copy.trainers[1].image}></img>
                            </TrainerPhoto>
                        </TrainerPhotoWrapper>
                        <TrainerTitle>{copy.trainers[1].name} <p style={{margin:'0px'}}> {copy.trainers[1].title}</p></TrainerTitle>
                        <Description>{copy.trainers[1].description}</Description>
                        <Achievements>
                            {copy.trainers[1].items.map(i => (<span>&#183; {i}</span>))}
                        </Achievements>
                    </Trainer>
                </TrainerWrapper>
            </div>
        </TrainerWrppaer>
    )
}

const TrainerWrppaer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.violet};
    padding: 40px 0 0;
`

const TrainerPhotoWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const TrainerPhoto = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    img {
        width: 100%;
        height: auto;
        object-fit: cover;
        background-position: center;
        border-radius: 50%;
    }
`

const TrainerWrapper = styled.div`
    padding: 40px 160px;
    width: 50%;
`

const Trainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid ${colors.white};
    background-color: ${colors.violet};
    padding: 40px;
`

const TrainerTitle = styled.span`
    display: inline-block;
    width: 100%;
    text-align: center;
    margin: 20px 0px;
    color: ${colors.white};
    font-weight: bold;
    font-size: 1.2rem;
`

const Description = styled.span`
    color: ${colors.white};
    font-weight: normal;
`

const Achievements = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    color: ${colors.white};
    font-weight: normal;
`