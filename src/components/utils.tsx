import {colors} from "./colors.ts";
import styled from "styled-components";

export const Title = styled.span`
    color: ${props => props.color ? props.color : colors.white};
    font-size: 2.5rem;
    display: inline-block;
`