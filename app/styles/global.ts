import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    background-color: #fafafa;
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.56;
    font-weight: 400;
    padding: 0;
  }

  strong {
    font-weight: 800;
  }
`;
