import { usePathname, useRouter } from "next/navigation";
import type { SyntheticEvent, KeyboardEvent } from "react";
import { useState, useEffect } from "react";

import type { RootCategory } from "@/app/components/nav/nav-list/NavList.props";
import spaceOrEnterPressed from "@/utils/spaceOrEnterPressed";

const useMenu = (menuConfiguration: RootCategory[]) => {
  const [menu, setMenu] = useState(menuConfiguration);

  const router = useRouter();

  const pathname = usePathname();
  const pathnameEndpointAlias = (pathname.match(/(\w[-_]*)+/g) || [])[1] ?? "";

  const activeRootCategory = menu.find((category) =>
    category.subCategories.find((subCategory) =>
      subCategory.pages
        .map(({ alias }) => alias)
        .includes(pathnameEndpointAlias)
    )
  );

  const activeSubCategory = activeRootCategory?.subCategories.find(
    (subCategory) =>
      subCategory.pages
        .flatMap(({ alias }) => alias)
        .includes(pathnameEndpointAlias)
  );

  useEffect(() => {
    if (activeRootCategory?.alias && activeSubCategory?._id?.secondCategory) {
      closeAllMenuItemsExceptActive(
        activeRootCategory.alias,
        activeSubCategory._id.secondCategory
      );
    }
  }, [
    pathname,
    activeRootCategory?.alias,
    activeSubCategory?._id?.secondCategory,
  ]);

  const updateMenuByRootCategory = (updatedCategory: RootCategory) => {
    setMenu((prev) =>
      prev.map((category) =>
        category.alias === updatedCategory.alias ? updatedCategory : category
      )
    );
  };

  const closeAllMenuItemsExceptActive = (
    rootCategoryAlias: string,
    subCategoryId: string
  ) => {
    setMenu((prev) =>
      prev.map((rootCategory) => {
        const subCategories = rootCategory.subCategories.map((subCategory) =>
          subCategory._id.secondCategory === subCategoryId
            ? subCategory
            : {
                ...subCategory,
                isOpen: false,
              }
        );

        return rootCategory.alias === rootCategoryAlias
          ? {
              ...rootCategory,
              subCategories,
            }
          : {
              ...rootCategory,
              isOpen: false,
              subCategories,
            };
      })
    );
  };

  const toggleRootCategory = (categoryAlias: string) => {
    const currentCategory = menu.find(
      (category) => category.alias === categoryAlias
    );

    if (currentCategory) {
      currentCategory.isOpen = !currentCategory.isOpen;
      updateMenuByRootCategory(currentCategory);
    }
  };

  const toggleSubCategory = (
    event: SyntheticEvent<HTMLElement>,
    categoryAlias: string,
    subCategoryId: string
  ) => {
    event.stopPropagation();

    const currentCategory = menu.find(
      (category) => category.alias === categoryAlias
    );

    if (currentCategory) {
      currentCategory.subCategories = currentCategory.subCategories.map(
        (subCategory) =>
          subCategory._id.secondCategory === subCategoryId
            ? {
                ...subCategory,
                isOpen: !subCategory.isOpen,
              }
            : subCategory
      );

      updateMenuByRootCategory(currentCategory);
    }
  };

  const handleRootCategoryKeyDown = (
    event: KeyboardEvent<HTMLSpanElement>,
    categoryAlias: string
  ) => {
    const isSpaceOrEnterPressed = spaceOrEnterPressed(event);
    if (isSpaceOrEnterPressed) {
      toggleRootCategory(categoryAlias);
    }
  };

  const handleSubCategoryKeyDown = (
    event: KeyboardEvent<HTMLSpanElement>,
    categoryAlias: string,
    subCategoryId: string
  ) => {
    const isSpaceOrEnterPressed = spaceOrEnterPressed(event);
    if (isSpaceOrEnterPressed) {
      toggleSubCategory(event, categoryAlias, subCategoryId);
    }
  };

  const handleEndpointKeyDown = (
    event: KeyboardEvent<HTMLAnchorElement>,
    endpoint: string
  ) => {
    const isSpaceOrEnterPressed = spaceOrEnterPressed(event);
    if (isSpaceOrEnterPressed) {
      router.push(endpoint);
    }
  };

  return {
    menu,
    activeRootCategory,
    activeSubCategory,
    activeLink: pathnameEndpointAlias,
    toggleRootCategory,
    toggleSubCategory,
    handleRootCategoryKeyDown,
    handleSubCategoryKeyDown,
    handleEndpointKeyDown,
  };
};

export default useMenu;
