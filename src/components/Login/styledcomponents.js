import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eff6f6ff;
  height: 100vh;
  width: 100vw;
`

export const Logo = styled.img`
  width: 150px;
  height: 50px;
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 20px;
`

export const Title = styled.h1`
  font-size: 2em;
  color: #333;
`   

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
`

export const Image = styled.img`
  width: 40%;
  height: 70%;
  margin-right: 10px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  height: 60vh;
  border: 1px solid #dbd9d9ff;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  padding-top: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const FormTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 40px;
  align-self: flex-start;
`
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 15px;
`
export const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 92%;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`

export const Select = styled.select`
  padding: 10px;
  margin: 10px;
  width: 96%;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`

export const Label = styled.label`
    font-size: 1em;     
    color: #333;
    align-self: flex-start;
    margin-left: 15px;
`

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  outline: none;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9em;
  margin-top: 10px;
`   