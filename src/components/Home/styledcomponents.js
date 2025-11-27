import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  
  align-items: center;
  padding: 20px;
  background-color: #eff8f8ff;
  height: 100vh;
  width: 100vw; 
`

export const Title = styled.h1`
margin-top: 5%;
  font-size: 2em;
  color: #333;
`

export const Description = styled.p`
  font-size: 1.2em;
  color: #666;
  text-align: center;
  max-width: 600px;
`

export const Logo = styled.img`
  width: 150px;
  height: 50px;
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 20px;
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

export const HomeImage = styled.img`
  width: 40%;
  height: 30%;
  margin-top: 10%;
`   