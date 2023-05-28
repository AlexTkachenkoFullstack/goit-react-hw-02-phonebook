import styled from 'styled-components';

export const FormContainer = styled.form`
display: flex;
flex-direction: column;
border: 1px solid black;
width: 500px;
height: auto;
padding: 20px;
`
export const FormLabelName = styled.label`
font-size: 30px;
font-weight: 600;
margin-bottom: 15px;
`

export const FormInputName = styled.input`
border: 1px solid black;
padding: 5px;
margin-bottom: 10px;
width: 300px;
height: 30px;
`

export const FormInputTel = styled.input`
border: 1px solid black;
padding: 5px;
margin-bottom: 10px;
width: 300px;
height: 30px;
`
export const FormButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 40px;
font-size: 24px;
padding-top: 5px;
padding-bottom: 5px;
border-radius: 8px;
`