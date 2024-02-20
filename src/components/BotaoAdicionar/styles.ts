import  { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Circulo = styled(Link)`
    height: 64px;
    widht: 64px;
    background-color: ${variaveis.blue};
    color: #fff;
    position: fixed;
    bottom: 40px;
    right: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    font-size: 40px/
    text-decoration: none;
`
