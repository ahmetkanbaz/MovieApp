import styled from "styled-components";

export const CustomCard = styled.div`
  border-radius: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: ${({theme}) => theme == 'light' ? '#F2F2F2' : '#666666'};
  color: ${({theme}) => theme == 'light' ? '#000000' : '#EAEAEA'};
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    background-color: ${({theme}) => theme == 'light' ? '#E0E0E0' : '#414141'};
  }

  img {
    height: 150px;
    border-radius: 12px;
  }

  p {
    font-size: 0.93rem;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    @media screen and (max-width: 768px) {
      -webkit-line-clamp: 2;
    }
  }
  a {
    color: ${({theme}) => theme == 'light' ? '#232323' : '#F5F5F5'};
    transition: all .3s ease-in-out;
    &:nth-child(1 ) {
      color: #FF0000;
      &:hover {
        color: #F828FB;
      }
    }
    &:nth-child(2) {
      color: #0000FF;
      &:hover {
        color: #28DEFB;
      }
    }
  }
`;
