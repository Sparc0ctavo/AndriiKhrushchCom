import React from "react";
import NavBar from "../../components/NavBar/NavBar.jsx"
import styles from "./Home.module.css";

const Home = () => {
    return (
        <>

       
        
        <div className={styles.pageContainer}>
            <section className={styles.sectionHero}>
                <div className={styles.title}>
                    <h1 style={{fontSize: '28'}} className={styles.titleChildrenMargin}>HELLO, MY NAME IS ANDRII</h1>
                    <h2 className={styles.titleChildrenMargin}>I AM</h2>
                    <h1 style={{fontSize: '42'}} className={styles.titleChildrenMargin}>SOFTWARE DEVELOPER</h1>
                </div>
                <div className={styles.faq}>
                    <h3>WHO AM I?</h3>
                    <p className={styles.paragraph}>Adkvmdkfvm kjdmsodsmfdoskm jjd kjnfwifnwodof wjnfwijfnwfn ijjwnjfifnifwjn iwenjfienfejfn jewnfijewfnewjfn egegegegffegtrgtggrt</p>
                </div>
            </section>
        </div>
        </>
    )
 
}

export default Home