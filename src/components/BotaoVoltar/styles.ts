import  { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const BotaoVoltar = styled(Link)`
    height: 64px;
    width: 64px;
    background-color: ${variaveis.blue};
    color: #fff;
    position: fixed;
    top: 40px; /* Alterado para top */
    left: 40px; /* Alterado para left */
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    text-decoration: none;
`;