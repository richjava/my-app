import { DataView } from "@/components/shared/data-view/data-view";
import { Intro } from "@/components/shared/intro/intro";
import Link from "next/link";

export default function Header1({ content }: any) {
  if (!content) return <></>;
  let menuItems;
  let { collections = [], global = {} } = { ...content };
  const collectionNames = {
    PRIMARY_MENU_ITEMS: "primary-menu-items",
  };
  if (collections && collections[collectionNames.PRIMARY_MENU_ITEMS]) {
    menuItems = collections[collectionNames.PRIMARY_MENU_ITEMS].data;
  }
  return (
    <section id="header-1" className="template">
      {content.collections &&
        menuItems.map((menuItem: any) => {
          return (
            <li
              key={menuItem.attributes.label}
            >
              <Link
                className="flex justify-center w-full p-3 text-gray-600 transition duration-200 ease-in-out rounded-md dark:text-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-800 md:w-auto"
                href={menuItem.attributes.url}
              >
                {menuItem.attributes.label}
              </Link>
            </li>
          );
        })}
    </section>
  );
}
