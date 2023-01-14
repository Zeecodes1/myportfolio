import { ImFacebook, ImTwitter, ImLinkedin2, ImGithub } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home__container">
        <section className="Home--button">
          <button>
            <a
              href="https://twitter.com/Olarotimi_"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ImTwitter />
            </a>
          </button>
          <button>
            <a
              href="https://instagram.com/Olarotimi_"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ImFacebook />
            </a>
          </button>
          <button>
            <a
              href="https://instagram.com/Olarotimi_"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiInstagram />
            </a>
          </button>
          <button>
            <a
              href="https://ng.linkedin.com/in/olarotimi-adamson-988b7187"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ImLinkedin2 />
            </a>
          </button>
          <button>
            <a
              href="https://github.com/Ola-rotimi"
              target="_blank"
              rel="noreferrer noopener"
            >
              <ImGithub />
            </a>
          </button>
        </section>
        <section className="Home--details">
          <section className="Home--text">
            <h1>Hi, I'm Olarotimi Adamson</h1>
            <p>A Frontend Web Developer</p>
          </section>
          <section className="Home--image">
            <img
              src="https://pbs.twimg.com/profile_images/1549344051048206338/X9PaUsQa_400x400.jpg"
              alt="my avatar"
            />
          </section>
        </section>
      </div>
    </div>
  );
}