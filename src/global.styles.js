
import {createGlobalStyle} from 'styled-components'
const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 20px 40px;
    font-family: 'Open Sans';
    -webkit-font-smoothing:antialiased ;
    -moz-osx-font-smoothing: grayscale;

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas,'Courier New',
        monospace;
    }
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}
`