import { Container } from "./styles";

import { Button } from "../Button";
import { ButtonText } from "../ButtonText";

import dish01 from "../../assets/dishes/dish01.png";

import { FiMinus, FiPlus } from "react-icons/fi";
import FavoriteIcon from "../../assets/svg/FavoriteIcon";
import EditIcon from "../../assets/svg/EditIcon";

export function Order({ title, userAdmin }) {
  return (
    <Container>
      <div className="orderWrapper">
        <div className="orderContent" data-user-is-admin={userAdmin}>
          <img src={dish01} alt="" />
          <h2>{title}</h2>
          <span>R$ 49,97</span>

          <div className="cartControl" data-user-is-admin={userAdmin}>
            <ButtonText icon={FiMinus} />
            <span>01</span>
            <ButtonText icon={FiPlus} />
          </div>

          {!userAdmin && <Button title="incluir" />}
          {userAdmin ? <EditIcon /> : <FavoriteIcon />}
        </div>
      </div>
    </Container>
  );
}
