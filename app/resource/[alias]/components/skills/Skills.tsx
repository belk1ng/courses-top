import type { FC } from "react";

import Heading from "@/components/heading";
import Tag from "@/components/tag";

import classes from "./Skills.module.css";
import type { SkillsProps } from "./Skills.props";

const Skills: FC<SkillsProps> = ({ values }) => {
  return (
    <section className={classes.skills}>
      <header>
        <Heading as="h2">Получаемые навыки</Heading>
      </header>
      <ul className={classes.skills__tags}>
        {values.map((tagTitle) => (
          <li key={tagTitle}>
            <Tag color="primary">{tagTitle}</Tag>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
