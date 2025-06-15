import React from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../../localizations/languages";
import styles from "./LanguageSwitch.module.css";
import clsx from "clsx";

const LanguageSwitch = ({className}) => {


    const i18n = useTranslation();

    const handleLanguageChange = () => {

        let currentLanguageIndex = languages.findIndex(lang => lang.code === i18n.i18n.language);

        if(currentLanguageIndex === languages.length - 1) currentLanguageIndex = 0;
        else currentLanguageIndex++;
            
        
        i18n.i18n.changeLanguage(languages[currentLanguageIndex].code);
        
    }

    return(

        <>
        <button className={clsx(styles.switchButton, className)} onClick={handleLanguageChange}>{i18n.i18n.language}</button>
        </>
    )
}

export default LanguageSwitch;