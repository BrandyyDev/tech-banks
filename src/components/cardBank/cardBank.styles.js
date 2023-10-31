import styled from "styled-components";



export const Card = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImage = styled.img`
  max-width: 200px;
  height: 200px;
`;

export const CardDescription = styled.p`
  margin: 10px 0;
`;
