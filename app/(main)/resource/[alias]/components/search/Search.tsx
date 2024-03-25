"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import type { FC, ChangeEvent, KeyboardEvent } from "react";

import Button from "@/components/button";
import Input from "@/components/input";

import classes from "./Search.module.css";

const Search: FC = () => {
  const searchParams = useSearchParams();

  const [searchString, setSearchString] = useState(searchParams.get("q") ?? "");

  const { replace } = useRouter();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleNavigate();
    }
  };

  const handleNavigate = () => {
    const params = new URLSearchParams(searchParams);

    const q = searchString.trim();
    if (q) {
      params.set("q", q);

      replace(`/search?${params.toString()}`);
    } else {
      replace("/");
    }
  };

  return (
    <label className={classes.search}>
      <Input
        className={classes.search__input}
        enterKeyHint="search"
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
        placeholder="Поиск..."
        value={searchString}
      />
      <Button className={classes.search__button} onClick={handleNavigate}>
        <Image alt="Иконка поиска" height={13} src="/search.svg" width={13} />
      </Button>
    </label>
  );
};

export default Search;
