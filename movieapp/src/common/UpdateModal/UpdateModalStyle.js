import styled from "styled-components";

export const UpdateModalWrapper = styled.div`
  .modal-content {
    background-color: ${({ theme }) =>
      theme == "light" ? "#F5F5F5" : "#333333"};
  }
`;
