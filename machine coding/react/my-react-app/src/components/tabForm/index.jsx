import React, { useState } from "react";
import Interests from "./interests";
import Profile from "./profile";
import Settings from "./settings";
import "./index.css";

const ReactTabs = () => {
  const [active, setActive] = useState(0);
  const [data, setData] = useState({
    name: "Akshay",
    age: "29",
    email: "akshay@gmail.com",
    interests: ["cading", "music"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interests,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const ActiveTabComponent = tabs[active]?.component;
  return (
    <div style={{ textAlign: "center" }}>
      <div className="heading-container">
        {tabs.map((t, i) => {
          return (
            <div
              onClick={() => setActive(i)}
              className={i === active ? `heading active` : `heading`}
              key={i}
            >
              {t.name}
            </div>
          );
        })}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
    </div>
  );
};

export default ReactTabs;
