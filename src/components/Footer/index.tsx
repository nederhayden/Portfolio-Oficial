// components
import { Router } from "next/router";
import { SiLinkedin, SiGithub } from "react-icons/si";

// styles
import styles from "./styles.module.scss";

export default function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
    smoothScrollTo(0, 0);
  }

  return (
    <div id="footer" className={styles.container}>
      <section>
        <SiLinkedin
          onClick={() =>
            handleRedirect("https://www.linkedin.com/in/neder-hayden/")
          }
        />
        <SiGithub
          onClick={() => handleRedirect("https://github.com/nederhayden")}
        />
      </section>
      <button onClick={handleScrollTop}>Voltar ao início</button>
    </div>
  );
}

function smoothScrollTo(endX: number, endY: number, duration?: any) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 400;

  // Easing function
  const easeInOutQuart = (
    time: number,
    from: any,
    distance: number,
    duration?: any
  ) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}
