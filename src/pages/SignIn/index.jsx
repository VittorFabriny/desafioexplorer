import { Container } from "./styles";

import logo from "../../assets/Logo.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <div className="hero">
        <img src={logo} alt="Logotipo" />

        <div className="sectionwrapper">
          <h1>Crie sua conta</h1>

          <section>
            <span>Seu nome</span>
            <Input type="text" placeholder="Exemplo: Maria da Silva" />
          </section>

          <section>
            <span>Email</span>
            <Input type="email" placeholder="exemplo@exemplo.com" />
          </section>

          <section>
            <span>Senha</span>
            <Input type="password" placeholder="No mínimo 6 caracteres" />
          </section>

          <section>
            <Button title="Cria conta" />
          </section>

          <a href="">Já tenho uma conta</a>
        </div>
      </div>
    </Container>
  );
}
