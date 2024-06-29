import styles from "./HeroStyles.module.css"
import heroImg from "../../assets/romi.jpg"
import sun from "../../assets/sun.svg"
import moon from "../../assets/moon.svg"
import telegramLight from "../../assets/telegram-light.svg"
import telegramDark from "../../assets/telegram-dark.svg"
import githubLight from "../../assets/github-light.svg"
import githubDark from "../../assets/github-dark.svg"
import cv from "../../assets/romi-cv.pdf"
import { useTheme } from "../../common/ThemeContext"

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const telegramIcon = theme === "light" ? telegramDark : telegramLight;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
        className={`${styles.heroImg} ${styles.hero}`}
        src={heroImg}
        alt="romi's pict"
        />
        <img
        className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Romi <br/> Yusnandar</h1>
        <h2>Android Developer</h2>
        <span>
          <a
          href="https://t.me/romiyusna"
          target="_blank">
            <img src={telegramIcon} alt="Telegram" />
          </a>
          <a
          href="https://github.com/romiyusnandar"
          target="_blank">
            <img src={githubIcon} alt="Github" />
          </a>
        </span>
        <p>
          With a passion for developing modern mobile apps for commercial.
        </p>
        <p>
          btw the theme is: {theme}
        </p>
        <a href={cv} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero
