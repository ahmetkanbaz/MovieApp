import styled from 'styled-components'

export const CustomCard = styled.div `
  border-radius: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #F2F2F2;
  transition: all .5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    background-color: #212121;
  }
`;