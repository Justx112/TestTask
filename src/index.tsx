import ReactDOM from 'react-dom/client';
import App from './App';
import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  ${normalize}

    body {
    font-family: 'Ubuntu', sans-serif;
  }
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);

