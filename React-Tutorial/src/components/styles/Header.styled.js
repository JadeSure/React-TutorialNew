import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(props) => props.theme.colors.header};
  /* background-color: ${({ theme }) => theme.colors.header}; */
  color: ${(props) => props.bg};

  padding: 40px 0;
  h1 {
    color: blue;
  }

  &:hover {
    background-color: orange;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    margin: 40px 0 30px;
  }
`;
