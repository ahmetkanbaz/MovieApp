import styled from "styled-components";

export const UpdateModalWrapper = styled.div`
  .modal-content {
    background-color: ${({ theme }) =>
      theme == "light" ? "#F5F5F5" : "#333333"};
    input {
      color: ${({ theme }) => (theme == "light" ? "#000000" : "#F5F5F5")};
      &:focus {
        border-color: #000000;
        background-color: ${({ theme }) =>
          theme == "light" ? "#F5F5F5" : "#636363"};
      }
    }
  }
`;
