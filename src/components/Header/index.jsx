import { Container, SideMenu } from "./styles";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

import { Input } from "../Input";
import { Button } from "../Button";
import { ButtonText } from "../ButtonText";
import { Footer } from "../Footer";

import logo from "../../assets/Logo.png";

import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import OrderIcon from "../../assets/svg/Order";
import LogOut from "../../assets/svg/logout";

export function Header({ $menuIsOpen, onOpenMenu, onCloseMenu, userAdmin }) {
  userAdmin = userAdmin;
  return (
    <Container>
      {$menuIsOpen ? (
        <SideMenu data-menu-is-open={$menuIsOpen}>
          <div className="menuWrapper">
            <div className="main">
              <div className="menuContent">
                <IoClose size={25} onClick={onCloseMenu} />
                <span>Menu</span>
              </div>
            </div>
          </div>

          <div className="main">
            <div className="content">
              <Input
                icon={CiSearch}
                size={20}
                placeholder="Busque por pratos ou ingredientes"
              />

              {userAdmin && <a href="">Novo Prato</a>}
              <a href="#">Sair</a>
            </div>
          </div>
          <Footer />
        </SideMenu>
      ) : (
        <div className="headerWrapper">
          <div className="main">
            <div className="headerContent">
              <div className="headerMenu">
                <RxHamburgerMenu size={24} onClick={onOpenMenu} />
              </div>

              <div className="logo">
                <img src={logo} alt="" />
              </div>

              <Input
                $hideonmobile
                icon={CiSearch}
                size={20}
                placeholder="Busque por pratos ou ingredientes"
              />

              <div className="orderButton">
                <OrderIcon />
                <p>Pedidos (0)</p>
              </div>

              <LogOut width={80} />

              <div className="orderIcon">
                <OrderIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
