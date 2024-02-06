import styled, { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'


export const Title = styled.h1`
  color: ${(props) => props.theme['gray-700']};
`;

function App() {


  return (
    <ThemeProvider theme={defaultTheme}>

      <div>
        <Title>olá</Title>
      </div>

      </ThemeProvider>
    

  )
}

export default App
