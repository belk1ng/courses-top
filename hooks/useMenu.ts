import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { useState, useEffect } from "react";

import type { RootCategory } from "@/app/(main)/components/nav/nav-list/NavList.props";

const useMenu = (menuConfiguration: RootCategory[]) => {
  const [menu, setMenu] = useState(menuConfiguration);

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
    event: MouseEvent<HTMLLIElement>,
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

  return {
    menu,
    activeRootCategory,
    activeSubCategory,
    activeLink: pathnameEndpointAlias,
    toggleRootCategory,
    toggleSubCategory,
  };
};

export default useMenu;
