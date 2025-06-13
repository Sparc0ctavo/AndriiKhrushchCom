import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
const NavBar = () => {

    const { t } = useTranslation();

    


    return (

        
        <nav className={styles.Nav}>
            <ul className={styles.ul}>
                <Link to="/Home" className={styles.LinkCustom}>{t("nav.home")}</Link>
                <Link to="/Blog" className={styles.LinkCustom}>{t("nav.blog")}</Link>
                <Link to="/Profile" className={styles.LinkCustom}>{t("nav.profile")}</Link>
                <LanguageSwitch />
            </ul>
        </nav>
    )
}

export default NavBar;