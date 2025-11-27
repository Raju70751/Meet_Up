import styled from "styled-components";     

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

export const NotFoundImage = styled.img`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
`;

export const NotFoundHeading = styled.h1`
  font-size: 2em;
  color: #333;
  margin-bottom: 10px;
`;

export const NotFoundDescription = styled.p`
  font-size: 1.2em;
  color: #666;
  text-align: center;
  max-width: 400px;
`;      