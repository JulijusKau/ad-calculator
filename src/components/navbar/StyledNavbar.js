import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 20% 20px 20%;
`;

export const StyledNavbarLogo = styled.img`
  width: min(50vw, 240px);
  @media (max-width: 650px) {
    width: min(50vw, 150px);
  }
`;
