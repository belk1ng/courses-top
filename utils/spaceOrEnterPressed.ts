import type { KeyboardEvent } from "react";

const spaceOrEnterPressed = (event: KeyboardEvent<HTMLElement>) => {
  if (event.code === "Space" || event.code === "Enter") {
    event.preventDefault();
    return true;
  }

  return false;
};

export default spaceOrEnterPressed;
