import type { FC } from "react";

import type { AsideProps } from "./Aside.props";

const Aside: FC<AsideProps> = ({ ...props }) => {
  return (
    <aside {...props}>
      Лого и поиск
      <nav>Навигация</nav>
    </aside>
  );
};

export default Aside;
