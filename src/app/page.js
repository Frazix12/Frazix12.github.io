import { FaArrowRightLong } from "react-icons/fa6";
import { FaYoutube, FaGithub, FaDiscord } from "react-icons/fa";
import "./page.css";
export default function Home() {
  return (
    <div className="container">
      <div className="box left hidden">
        <h1 className="tittle">Frazix</h1>
        <h3 className="subTittle">( Developer / Designer / Gamer)</h3>
        <p>
          I&apos;m <span className="name img"> Frazix</span>, a
          <span className="dev"> Full Stack Developer</span> from
          <span className="BD img"> Bangladesh</span>.I build
          <span className="web"> interactive websites</span> and have a passion
          for turning ideas into{" "}
          <span className="prodeuct"> beautiful products</span>.
        </p>
        <h3 className="skill">
          🔥 Expert in <span className="html">HTML</span>,
          <spam className="css">CSS</spam> and{" "}
          <span className="js">Javascript</span>
        </h3>
        <h3 className="skill">🚀 Mediocre in ReactJS And NextJS</h3>
        <h3 className="skill">
          📖 Skills - Tailwind, Javascript, NodeJS, Python, Shadcn, daisyUI,
          Figma
        </h3>
      </div>
      <div className="box right hidden">
        <div className="links">
          <h1 className="tittle">🔗Links</h1>
          <button className="btn">
            <a href="https://youtube.com/@CWfrazix" target="_blank">
              Youtube
            </a>
          </button>
          <button className="btn">
            <a href="https://github.com/Frazix12" target="_blank">
              Github
            </a>
          </button>
          <button className="btn">
            <a href="https://discord.com/invite/ynWdPzqhdH/" target="_blank">
              Discord
            </a>
          </button>
        </div>
        <div className="stuffs">
          <h1 className="tittle">📁Stuff</h1>
          <div className="item item1">
            <a href="/projects">
              <h2 className="tittle">Projects</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
