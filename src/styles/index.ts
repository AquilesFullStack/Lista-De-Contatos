import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
    }
`

export const DivContacts = styled.ul`
    max-width: 1024px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    li{
        width: 32%;
        margin-right: 8px;

    }
`

export const MainContainer = styled.main`
    max-width: 840px;
    width: 100%;
    margin: 0 auto; 
    padding: 24px; 
`

export const Titulo = styled.h2`
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 18px;
    font-wight: bold; 
`

export const Campo = styled.input`
    display: inline;
    padding: 8px;
    background-color: ${variaveis.gray};
    border-radius: 8px;
    font-weight: bold;
    color: #030202;
    border-color: #030202;
    flex: 1 1 33%;
    margin-right: 8px; 
    margin-bottom: 8px;
`

export const Botao = styled.button`
font-wight: bold;
font-size: 18px;
color: #fff;
padding: 8px 12px;
border: none;
cursor: pointer;
background-color: ${variaveis.blue};
border-radius: 12px;   
`

export const BotaoSalvar = styled(Botao)`
background-color: ${variaveis.green};
`

export default EstiloGlobal