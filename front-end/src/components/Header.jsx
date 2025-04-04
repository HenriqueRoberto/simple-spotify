import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logoSpotify} alt="Logo do Spotify" />
      </Link>

      <Link to="/" className="header__link">
        <h1>Spotify</h1>
      </Link>
    </div>
  );
};

export default Header;


// Nomeação de Componente
// PascalCase

// Nomeação de Variavel, Função...
// camelCase
// Nomeação de classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// item-list__header
// Nomes compostos são separados por -

// Tag vazia em React se chama Fragment ou Fragmento
