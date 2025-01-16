import { useEffect, useState } from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Tags } from "../../components/Tags";

import dish from "../../assets/dishes/dish01.png";

import { IoIosArrowBack } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import OrderIcon from "../../assets/svg/Order";

export function Dish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const userAdmin = false;

  const dishImg = dish;
  const dishTitle = "Salada Ravanello";
  const dishDesc =
    "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.";
  // const tags = ;
  const dishPrice = "25,00";

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <Header
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        onOpenMenu={() => setMenuIsOpen(true)}
        userAdmin={userAdmin}
      />

      <div id="page" data-menu-is-open={menuIsOpen}>
        <div className="content" data-menu-is-open={menuIsOpen}>
          <div className="navWrapper">
            <IoIosArrowBack size={32} />
            <a href="#">voltar</a>
          </div>
          <img src={dishImg} alt="Pedido em destaque" />

          <div className="dishWrapper">
            <h1>{dishTitle}</h1>
            <p>{dishDesc}</p>

            <div className="tags">
              <Tags title="alface" />
              <Tags title="cebola" />
              <Tags title="pão naan" />
              <Tags title="pepino" />
              <Tags title="rabanete" />
              <Tags title="tomate" />
            </div>

            <div className="controlWrapper">
              {!userAdmin && (
                <div className="control">
                  <ButtonText icon={FiMinus} />
                  <span>01</span>
                  <ButtonText icon={FiPlus} />
                </div>
              )}

              <Button
                title={userAdmin ? "Editar Prato" : `pedir • R$${dishPrice}`}
                icon={!userAdmin && <OrderIcon width={18} />}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
}
