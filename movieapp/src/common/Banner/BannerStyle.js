import styled from "styled-components";

export const CustomBanner = styled.div`
  position: relative;
  color: #FFFFFF;
  .bannerBackground {
    z-index: -1;
    img {
      height: 450px;
    }
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
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }
`;
