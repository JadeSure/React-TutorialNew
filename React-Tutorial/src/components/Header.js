import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";

export default function Header() {
  return (
    <StyledHeader bg="red">
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="likui" />
          <Button>Try it</Button>
        </Nav>
        <Flex>
          <div>
            <h1>Love</h1>
            <p>dudu lu and dudu lu....</p>
            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </div>

          <Image src="./images/illustration-mockups.svg" alt="dudlu"></Image>
        </Flex>
      </Container>
    </StyledHeader>
  );
}
