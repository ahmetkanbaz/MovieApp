import styled from "styled-components";

export const CustomSingleActor = styled.a`
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  color: ${({theme}) => theme == 'light' ? '#000000' : '#F5F5F5'};
  transition: all .5s ease-in-out;
  img {
    height: 300px;
    transition: all .5s ease-in-out;
  }

  &:hover {
    color: #BA49FF;
    img {
      transform: scale(1.1);
    }
  }
`;