import styled from 'styled-components'

export const Form = styled.form`
    max-width: 920px;
    width:100vw;
    height: 100%;
    margin: 0 auto; 
    padding: 24px;
    background-color: #f9f9f9; 
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-weight: bold;
    font-size: 14px;
    color: #666666;

    textarea {
        resize: none;
        margin: 16px 0;
        width: 100%;
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
        font-family: inherit;
        font-size: 14px;
        color: #666666;
    }

    input[type="submit"] {
        display: inline-block;
        padding: 8px 16px;
        margin-top: 16px;
        border: none;
        border-radius: 4px;
        background-color: #007bff; 
        color: white;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    input[type="submit"]:hover {
        background-color: #0056b3; 
    }
`

export const Opcoes = styled.div`
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    background: #f9f9f9; 
    border-radius: 8px; 
    padding: 16px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 

    p {
        margin-top: 0;
        margin-bottom: 8px;
        color: #333; 
        font-weight: bold; 
        text-transform: uppercase; 
    }
`

export const Opcao = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer; 
    position: relative; 

    input[type="radio"] {
        display: none; 
    }
    span {
        color: #555;
        text-transform: capitalize; 
        font-size: 1.2em; /
        transition: color 0.3s; 
    }

    input[type="radio"] + span::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-right: 8px;
        border-radius: 50%; 
        border: 2px solid #555; 
        transition: background-color 0.3s; 
    }

    input[type="radio"]:checked + span::before {
        background-color: #007bff; 
    }

    &:hover input[type="radio"] + span::before {
        border-color: #007bff; 
    }

    &:hover span {
        color: #007bff; 
    }

    input[type="radio"]:checked + span::after {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #007bff; 
    }
`