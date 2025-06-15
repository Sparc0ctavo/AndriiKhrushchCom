import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useState } from "react";
import { useEffect } from "react";
const NavBar = () => {

    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 425) {
          setIsOpen(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (

        <>
        <nav className={styles.Nav}>
            <ul className={styles.ul}>
                <Link to="/Home" className={styles.LinkMenu}>{t("nav.home")}</Link>
                <Link to="/Blog" className={styles.LinkMenu}>{t("nav.blog")}</Link>
                <Link to="/Profile" className={styles.LinkMenu}>{t("nav.profile")}</Link>
            </ul>
        </nav>

        
        
    
    <button className={styles.burgerButton} onClick={() => setIsOpen(!isOpen)} />
      
      
        <div className={`${styles.burgerOffScreen} ${isOpen? styles.open : ''}`}>
          <div className={styles.burgerOffScreenContainer}>
            <Link to="/Home" className={styles.linkBurger} onClick={() => setIsOpen(false)}>{t("nav.home")}</Link>
            <Link to="/Blog" className={styles.linkBurger} onClick={() => setIsOpen(false)}>{t("nav.blog")}</Link>
            <Link to="/Profile" className={styles.linkBurger} onClick={() => setIsOpen(false)}>{t("nav.profile")}</Link>
          </div>
        </div>
      
        </>

    )
}

export default NavBar;