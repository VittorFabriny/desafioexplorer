import { Container } from "./styles";

import { Input } from "../Input";
import { Footer } from "../Footer";



export function SideMenu({ $menuIsOpen }) {
  return (
    <Container data-menu-is-open={$menuIsOpen}>
      <div className="main">
        <header>
          <IoClose size={25} />
          <span>Menu</span>
        </header>

        <div className="content">
          <Input icon={CiSearch} placeholder="Busque por pratos ou ingredientes"/>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
