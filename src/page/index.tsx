import { Container, Input } from "./styles";

export function Page() {
  return (
    <Container>
      <header>
        <h1>todos</h1>
        <Input 
          type="text"
          placeholder="What needs to be done?"
        />
      </header>
    </Container>
  )
}