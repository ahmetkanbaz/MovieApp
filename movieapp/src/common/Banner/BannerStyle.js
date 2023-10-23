import styled from "styled-components";

export const CustomBanner = styled.div`
  position: relative;
  color: #FFFFFF;
  img {
    height: 450px;
  }
  .bannerBackground {
    z-index: -1;
    .gradientBackground {
      position: absolute;
      top: 0;
      left: 0;
      height: 450px;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.7)
      );
    }
  }

  .bannerInfo {
    position: absolute;
    top: 0;
    z-index: 1;
    height: 100%;
  }
`;
