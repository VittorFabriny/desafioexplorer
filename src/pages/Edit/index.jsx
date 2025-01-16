import { useEffect, useState } from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Marker } from "../../components/Marker";
import { Footer } from "../../components/Footer";

import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { LuUpload } from "react-icons/lu";

export function Edit() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const userAdmin = true;

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Arquivo selecionado:", file);
  };

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
          <div className="contentWrapper">
            <div className="navWrapper">
              <IoIosArrowBack size={22} />
              <a href="#">voltar</a>
            </div>

            <h1>Editar Prato</h1>

            <div className="inputWrapper">
              <h2>Imagem do Prato</h2>
              <Input
                icon={LuUpload}
                size={34}
                placeholder="Selecione imagem"
                type="file"
                id="file"
                onChange={handleFileChange}
              />
            </div>

            <div className="inputWrapper">
              <h2>Nome</h2>
              <Input placeholder="Ex.: Salada Ceasar" />
            </div>

            <div className="inputWrapper">
              <h2>Categoria</h2>
              <select>
                <option value="refeição">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </select>
            </div>

            <div className="inputWrapper">
              <h2>Ingredientes</h2>
              <div className="markerWrapper">
                <Marker title="Cenoura" />
                <Marker isNew />
              </div>
            </div>

            <div className="inputWrapper">
              <h2>Preço</h2>
              <Input type="number" placeholder="R$ 00,00" />
            </div>

            <div className="inputWrapper">
              <h2>Descrição</h2>
              <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
            </div>

            <div className="submitWrapper">
              <Button title="Excluir prato" />
              <Button title="Salvar alterações" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Container>
  );
}
