import styled,  { createGlobalStyle } from 'styled-components'
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

export const Container = styled.div`
    display: grid;
    grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
    padding: 0 40px;
    height: 100vh;
    overflow-y: scroll;
`

export const Titulo = styled.h2`
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 18px;
    font-wight: bold; 
`

export const Campo = styled.input`
    padding: 8px;
    backgroud-color: ${variaveis.gray};
    border-radius: 8px;
    font-weight: bold;
    color: #030202;
    border-color: #030202;
    width: 50%;
`

export const  Botao = styled.button`
    font-wight: bold;
    font-size: 12px;
    color: #fff;
    padding; 8px 12px;
    border: none;
    cursor: pointer:
    background-color: ${variaveis.blue};
    border-radious: 8px;
`

export const BotaoSalvar = styled(Botao)`
background-color: ${variaveis.green};
`
