import React from "react";
import styles from "./whysection.module.scss";

import firstPhone from "../../../assets/PageImages/firstPhone.png";
import secondPhone from "../../../assets/PageImages/secondPhone.png";
import thirdPhone from "../../../assets/PageImages/thirdPhone.png";
import Phone from "./Phone";

const phoneList = [
  {
    img: firstPhone,
    firstText: "Tag work experiences to",
    secondText: "build your skills profile",

    alt: "Stock Connect",
  },
  {
    img: secondPhone,
    firstText: "Add skills you need to",
    secondText: "know where to improve",
    alt: "My skills profile",
  },
  {
    img: thirdPhone,
    firstText: "Track all work experiences to",
    secondText: "create a CV for every role",
    alt: "Experiences",
  },
];

function WhySection() {
  return (
    <section className={styles.whySection}>
      <h1 className={styles.whySectionTitle}>
        Why Use <span>uSkillz</span>?
      </h1>
      <div className={styles.whySectionContent}>
        {phoneList.map((item, i) => (
          <Phone key={i} item={item} />
        ))}
      </div>
    </section>
  );
}

export default WhySection;
