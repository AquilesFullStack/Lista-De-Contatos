import styled from 'styled-components'

export const Form = styled.form`
    max-width: 840px;
    width:100%;
    font-weight: bold;
    font-size: 14px;
    color: #666666;

    textarea {
        resize: none;
        margin: 16px 0;
    }
`

export const Opcoes = styled.div`
    margin-bottom: 16px;
    
    
    p{
        margin-top: 16px;
        margin-bottom: 6px;
    }

    label{
        margin-right: 12px;
    }
`
export const Opcao = styled.div`
  display: inline;
  text-transform: capitalize;
  margin-bottom: 16px;
`