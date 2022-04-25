import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Shizuru&display=swap'); */
*{
    box-sizing: border-box;
}

body{
    background-color: ${(props) => props.theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-size: 1.15em;
    margin: 0;
    font-family: 'Poppins', cursive;
}

p{
    opacity: 0.6;
    line-height: 1.5;
}

img{
    max-width: 100%;
}

`;

export default GlobalStyles;
