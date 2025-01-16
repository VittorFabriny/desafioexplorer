import { Container } from "./styles";

import logo from "../../assets/Logo.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Login() {
  return (
    <Container>
      <hero>
        <img src={logo} alt="Logotipo" />

        <sectionwrapper>

          <h1>Faça Login</h1>

          <section>
            <span>Email</span>
            <Input type="email" placeholder="exemplo@exemplo.com" />
          </section>

          <section>
            <span>Senha</span>
            <Input type="password" placeholder="No mínimo 6 caracteres" />
          </section>

          <section>
            <Button title="Entrar" />
          </section>

          <a href="">Criar Conta</a>
        </sectionwrapper>
      </hero>
    </Container>
  );
}
