import styled from "styled-components";

export const CustomCard = styled.div`
  border-radius: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #f2f2f2;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    background-color: #f7f7f7;
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
`;
