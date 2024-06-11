import styled from "styled-components";
import {Title} from "./utils.tsx";
import {colors} from "./colors.ts";
import {FaFacebookSquare, FaInstagramSquare} from "react-icons/fa";

export const Contacts = () => {
    return (<ContactsWrapper>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: '40px'}}>
            <Title color={colors.darkViolet}>Контактна Інформація</Title>
        </div>
        <ContactsInfo>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '10px'}}>Івано-Франківськ, вул. Січових Стрільців 5</div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '20px'}}>Номер телефону: +380957139594</div>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <a href='https://www.instagram.com/kids.chess.academy.if' target='_blank'>
                    <FaInstagramSquare color={colors.darkViolet} size={40} style={{marginRight: '10px'}}></FaInstagramSquare>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100066388603258' target='_blank'>
                    <FaFacebookSquare color={colors.darkViolet} size={40}></FaFacebookSquare>
                </a>
            </div>
        </ContactsInfo>
    </ContactsWrapper>)
}


const ContactsWrapper = styled.div`
    background-color: ${colors.white};
    padding: 40px 0px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ContactsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border: 1px solid ${colors.darkViolet};
    background-color: ${colors.white};
    padding: 40px;
    width: 500px;
    color: ${colors.darkViolet};
`