import React, { useEffect, useState } from "react";
import presenters from "../../data/presenters";
import useKeyPress from "../../hooks/useKeyPress";
import { css, styled } from "../../theme";
import { PresenterKeyType } from "../../types";
import backgroundMusicMp3 from "./audio/backgroundMusic.mp3";
import playerSelectMp3 from "./audio/playerSelect.mp3";
import chunLiGif from "./characterAnimations/chunLi.gif";
import ryuGif from "./characterAnimations/ryu.gif";
import zangiefGif from "./characterAnimations/zangief.gif";

// THIS CODE WAS HACKED TOGETHER IN A SHORT TIME FRAME. IT IS BAD, NEEDS TO BE REWRITTEN

// https://www.fightersgeneration.com/characters/zangief-a.html
// https://codepen.io/evanglp-the-vuer/pen/RwwyaRz
// https://ezgif.com/crop/ezgif-4-ee784f0d96fa.gif

const Layout = styled.section`
  ${({ theme }) => css`
    width: 100%;
    flex-grow: 1;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @import url("https://fonts.googleapis.com/css?family=Merriweather:400,700");

    font-family: "Merriweather", serif;

    background: #0d0d3a;

    h1 {
      text-align: center;
      text-transform: uppercase;
      color: #dac751;
      letter-spacing: 0.1em;
      text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.6);
    }

    p {
      text-transform: uppercase;
      color: #dac751;
      letter-spacing: 0.1em;
      text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.6);
    }

    a {
      text-decoration: none;
      margin: 0;
      padding: 0;
    }

    .sf-logo {
      width: 150px;
      margin: 1em auto;
      display: block;
    }

    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .title {
      text-align: center;
      text-transform: uppercase;
      color: #dac751;
      letter-spacing: 0.1em;
      text-shadow: 0px 2px 2px rgba(255, 255, 255, 0.6);
    }

    .select-container {
      max-width: 860px;
      display: flex;
      margin: 1em auto 3em;
      flex-wrap: wrap;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.5);
      padding: 4px 4px 0px;
    }

    @keyframes flash {
      0% {
        filter: brightness(100%);
      }
      20% {
        filter: brightness(150%);
      }
      40% {
        filter: brightness(100%);
      }
      60% {
        filter: brightness(150%);
      }
      80% {
        filter: brightness(100%);
      }
      100% {
        filter: brightness(150%);
      }
    }
  `}
`;

// audio(autobuffer="autobuffer",autoplay="autoplay" loop="true")
// source(src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/02.%20Player%20Select.mp3",  type="audio/ogg")

const Background = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;

  position: absolute;
  top: 0;
  left: 0;
`;

const characters = [
  {
    name: "Akuma",
    id: "akuma",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/akuma.png",
    gif: ryuGif,
  },
  {
    name: "Balrog",
    id: "balrog",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/balrog.png",
    gif: ryuGif,
  },
  {
    name: "M. Bison",
    id: "bison",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/bison.png",
    gif: ryuGif,
  },
  {
    name: "Blanka",
    id: "blanka",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/blanka.png",
    gif: ryuGif,
  },
  {
    name: "Cammy",
    id: "cammy",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/cammy.png",
    gif: ryuGif,
  },
  {
    // name: "Chun Li",
    name: presenters[PresenterKeyType.hayleyTom].name,
    id: "chunli",
    // imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/chunli.png",
    imgSrc: presenters[PresenterKeyType.hayleyTom].portrait,
    gif: chunLiGif,
    job: "Software Developer @ Easy Agile",
    presentation: "Translating a React app",
  },
  {
    name: "Dhalsim",
    id: "dhalsim",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/dhalsim.png",
    gif: ryuGif,
  },
  {
    name: "E. Honda",
    id: "ehonda",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ehonda.png",
    gif: ryuGif,
  },
  {
    name: "Evil Ryu",
    id: "evilryu",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ryu.pnevilg.png",
    gif: ryuGif,
  },
  {
    name: "Guile",
    id: "guile",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/guile.png",
    gif: ryuGif,
  },
  {
    name: "Ken",
    id: "ken",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ken.png",
    gif: ryuGif,
  },
  {
    // name: "Ryu",
    name: presenters[PresenterKeyType.mattRowles].name,
    id: "ryu",
    // imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/ryu.png",
    imgSrc: presenters[PresenterKeyType.mattRowles].portrait,
    gif: ryuGif,
    job: "Lead Software Engineer @ Devika",
    presentation: "JavaScript Everywhere",
  },
  {
    name: "Sagat",
    id: "sagat",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/sagat.png",
    gif: ryuGif,
  },
  {
    name: "T-Hawk",
    id: "thawk",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/t-hawk.png",
    gif: ryuGif,
  },
  {
    name: "Vega",
    id: "vega",
    imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/vega.png",
    gif: ryuGif,
  },
  {
    // name: "Zangief",
    name: presenters[PresenterKeyType.samWighton].name,
    id: "zangief",
    // imgSrc: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/813538/zangief.png",
    imgSrc: presenters[PresenterKeyType.samWighton].portrait,
    gif: zangiefGif,
    job: "Automation Specialist @ Tibra",
    presentation: "Web Assembly",
  },
];

const CharactersLayout = styled.ul`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(8, 100px);
  grid-template-rows: repeat(2, 120px);
  grid-gap: 4px;
  justify-content: center;

  li {
    margin-bottom: 4px;
    width: auto;
    max-height: 120px;
    align-self: stretch;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    position: relative;
    text-align: center;

    .name {
      position: absolute;
      width: 100%;
      bottom: -4px;
      display: none;
    }

    img,
    .name {
      margin: 0;
      padding: 0;
    }

    img {
      filter: grayscale(0.84);
      height: 120px;
      width: 100px;
      object-fit: cover;
    }

    &.active {
      transform: scale(1.05);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
      z-index: 100;

      .name {
        display: block;
        width: 100%;
        background: #e3231e;
        color: white;
        opacity: 0.7;
        margin-top: 0.8em;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700;
        padding: 0.3em 0;
      }

      /* &:after {
        content: "1P";
        position: absolute;
        text-align: center;
        top: -15px;
        left: 30%;
        font-size: 36px;
        color: #e3231e;
        font-weight: 700;
        text-shadow: 0px 0px 5px rgba(255, 255, 255, 1);
      } */

      img {
        filter: grayscale(0);
        outline: 4px solid white;
        animation: flash 300ms linear;
      }
    }
  }
`;

const PlayerNumber = styled.span`
  position: absolute;
  text-align: center;
  top: -30px;
  left: 30%;
  font-size: 36px;
  color: #e3231e;
  font-weight: 700;
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 1);
`;

export const AnimatedCharacter = styled.img`
  width: 480px;
  height: 340px;

  object-fit: contain;
`;

const SELECTABLE_I = [11, 5, 15];

const backgroundMusicSound = new Audio(backgroundMusicMp3);
const playerSelectSound = new Audio(playerSelectMp3);

const playPlayerSelectSound = () => {
  playerSelectSound.currentTime = 0;
  playerSelectSound.play();
};

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StreetFighter = () => {
  const [index, setIndex] = useState(0);
  const selectedCharacter = characters[SELECTABLE_I[index]];
  const [isSound, setSound] = useState(false);
  const setRightArrowHandler = useKeyPress(["m"]);

  setRightArrowHandler(() => {
    setSound((value) => !value);
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = index + 1 > SELECTABLE_I.length - 1 ? 0 : index + 1;
      setIndex(newIndex);
      playPlayerSelectSound();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [index, setIndex]);

  useEffect(() => {
    if (isSound) {
      backgroundMusicSound.play();
    } else {
      backgroundMusicSound.pause();
    }
  }, [isSound]);

  return (
    <Layout>
      {/* <Background src={background} /> */}

      <Row>
        <AnimatedCharacter src={selectedCharacter.gif} />
        <Column>
          <p>{selectedCharacter.presentation}</p>
          <br />
          <p>{selectedCharacter.name}</p>
          <p>{selectedCharacter.job}</p>
        </Column>
      </Row>
      <br />
      <h1>PLAYER SELECT</h1>
      <br />
      <CharactersLayout>
        {characters.map(({ imgSrc, name }, i) => (
          <li key={imgSrc} className={i === SELECTABLE_I[index] ? "active" : ""}>
            <img src={imgSrc} />
            <p className="name">{name}</p>
            {i === SELECTABLE_I[index] && <PlayerNumber>{index + 1}P</PlayerNumber>}
          </li>
        ))}
      </CharactersLayout>
    </Layout>
  );
};
