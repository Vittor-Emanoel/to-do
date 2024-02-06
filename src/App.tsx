import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global';
import { Page } from './page';


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Page />
      </ThemeProvider>
  )
}

