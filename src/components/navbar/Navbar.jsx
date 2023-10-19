import { StyledNavbarLogo, StyledNavbar } from "./StyledNavbar";

import placeholderLogo from "../../assets/logo/logo-placeholder.png";

export const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavbarLogo src={placeholderLogo} />
    </StyledNavbar>
  );
};
