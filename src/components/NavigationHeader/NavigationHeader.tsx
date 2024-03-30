import { TABS } from "../../config";

const NAVIGATION_OPTIONS = {
  [TABS.HOME]: {
    title: "Home",
  },
  [TABS.ABOUT]: {
    title: "About",
  },
  [TABS.RESUME]: {
    title: "Resume",
  },
  [TABS.PROJECT]: {
    title: "Project",
  },
  [TABS.CONTACT]: {
    title: "Contact",
  },
};

export default function NavigationHeader({
  tab,
  setTab,
}: {
  tab: TABS;
  setTab: (tab: TABS) => void;
}) {
  return (
    <div
      style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        top: 20,
        left: 0,
        right: 0,
        textAlign: "center",

        borderRadius: 50,
        border: 1,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#171717",

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 7,
        paddingBottom: 6,

        alignSelf: "center",
        flex: 1,
        width: "80%",
      }}
    >
      {Object.keys(NAVIGATION_OPTIONS).map((key) => (
        <div
          style={{
            ...{
              fontSize: 20,

              paddingTop: 10,
              paddingBottom: 10,

              color: "#222222",

              flex: 1,

              maxWidth: 133,

              cursor: "pointer",
            },
            ...(key === tab
              ? {
                  borderRadius: 60,
                  border: 1,
                  borderStyle: "solid",

                  color: "#ffffff",
                  backgroundColor: "#4F6F52",
                }
              : {}),
          }}
          onClick={() => setTab(key as TABS)}
        >
          {NAVIGATION_OPTIONS[key as keyof typeof NAVIGATION_OPTIONS].title}
        </div>
      ))}
    </div>
  );
}
