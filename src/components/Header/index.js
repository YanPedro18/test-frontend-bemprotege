// Header.js
import {LinkedinLogo, YoutubeLogo, InstagramLogo } from "@phosphor-icons/react"
import  { useState } from "react";
import imgLogo from "../../assets/logo-bemprotege.svg"
import styles from "./Header.module.css";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <header className={styles.header}>
      <div className={styles.logo}><img src={imgLogo} alt="" /></div>
      <nav className={styles.nav_links}>
        <a href="/">Home</a>
        <a href="/QuemSomos">Quem Somos</a>
        <a href="/Soluções">Soluções</a>
        <YoutubeLogo size={25} />
        <LinkedinLogo size={27} />
        <InstagramLogo size={27} />

      </nav>



      <div className={styles.hamburguer_icon} onClick={handleMenuToggle}>
        {/* <!-- Ícone do hambúrguer --> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z" />
        </svg>
      </div>
      <div className={`${styles.menu_modal} ${isMenuOpen ? styles.active : ""}`}>
        {/* <!-- Conteúdo do menu modal, como os links de navegação --> */}
        <a href="/">Home</a>
        <a href="/QuemSomos">Quem Somos</a>
        <a href="/Soluções">Soluções</a>
      </div>

    </header>
    </>
  );
}

export default Header;
