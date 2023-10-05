import { StyledNavbarLogo, StyledNavbar } from "./StyledNavbar";

import fullLogo from "../../assets/logo/logo1.png";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarLogo src={fullLogo} />
    </StyledNavbar>
  );
};
