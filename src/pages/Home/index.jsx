import { useEffect, useState } from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";

import heroBanner from "../../assets/HeroBanner.png";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const userAdmin = false;

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header
        $menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        onOpenMenu={() => setMenuIsOpen(true)}
        userAdmin={userAdmin}
      />

      <div id="page" data-menu-is-open={menuIsOpen}>
        <div className="main">
          <div className="hero" data-menu-is-open={menuIsOpen}>
            <img src={heroBanner} alt="Banner" />
            <div className="heroWrapper">
              <div className="heroDesc">
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="content" data-menu-is-open={menuIsOpen}>
            <Section title="Refeições" userAdmin={userAdmin} />
            <Section title="Sobremesas" userAdmin={userAdmin} />
            <Section title="Bebidas" userAdmin={userAdmin} />
          </div>
        </div>

        <Footer />
      </div>
    </Container>
  );
}
