import ShwetaSVG from "../../assets/shweta.svg";
import DecorationSVG from "../../assets/decoration.svg";
import HomeTitleSVG from "../../assets/homeTitle.svg";
import QuoteSVG from "../../assets/quote.svg";
import ExperienceSVG from "../../assets/experience.svg";
import ArrowSVG from "../../assets/arrow.svg";
import { useState } from "react";

const enum TAB {
  PORTFOLIO = "PORTFOLIO",
  HIRE_ME = "HIRE_ME",
}

export default function Home() {
  const [hovering, setHovering] = useState(false);
  const [tab, setTab] = useState<TAB>(TAB.PORTFOLIO);

  const tabs = [
    {
      key: TAB.PORTFOLIO,
      title: "Portfolio",
      onMouseEnter: () => setTab(TAB.PORTFOLIO),
      onMouseLeave: () => {},
    },
    {
      key: TAB.HIRE_ME,
      title: "Hire me",
      onMouseEnter: () => setTab(TAB.HIRE_ME),
      onMouseLeave: () => setTab(TAB.PORTFOLIO),
    },
  ];

  return (
    <div style={{ minHeight: "100%", flex: 1 }}>
      <img
        id="homeLeftText"
        src={QuoteSVG}
        className={hovering ? "m-moveUp" : "m-moveDown"}
      />
      <img
        id="homeRightText"
        src={ExperienceSVG}
        className={hovering ? "m-moveUp" : "m-moveDown"}
      />
      <img
        id="homeTitle"
        src={HomeTitleSVG}
        className={hovering ? "m-fadeOut" : "m-fadeIn"}
      />
      <img
        id="homeImg"
        src={ShwetaSVG}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        width={332}
      />
      <img
        id="decorationImg"
        src={DecorationSVG}
        className={hovering ? "m-fadeIn" : "m-fadeOut"}
        width={900}
      />
      <div
        id="homeRedirectLinkContainer"
        style={{
          display: "flex",
          flexDirection: "row",
          border: 1,
          borderStyle: "solid",
          borderRadius: 50,
          fontSize: 25.69,
          backdropFilter: "blur(10px)",
          width: 367,
          textAlign: "center",
          justifyContent: "center",
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        {tabs.map((t) => (
          <div
            style={{
              flex: 0.4,
              display: "flex",
              flexDirection: "row",
              cursor: "pointer",
              alignItems: "center",
              justifyContent: "center",
              height: 62,
              transition: "flex 0.3s ease",
              ...(tab === t.key
                ? {
                    flex: 0.6,
                    color: "white",
                    backgroundColor: "#4F6F52",
                    borderStyle: "solid",
                    border: 1,
                    borderRadius: 60,
                  }
                : {}),
            }}
            onMouseEnter={t.onMouseEnter}
            onMouseLeave={t.onMouseLeave}
          >
            <div>{t.title}</div>{" "}
            {tab === t.key && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={ArrowSVG} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div id="semicircle" />
    </div>
  );
}
