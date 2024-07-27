import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuItemsProps,
} from "@headlessui/react";
import React, { ReactNode } from "react";
import { ViewProfile } from "./hocs/SneakerCustomization";

export type DropdownItem = {
  title: string;
  setProfile(profile: ViewProfile): void;
  profile: ViewProfile;
};

interface dropdownProps extends MenuItemsProps {
  icon: ReactNode;
  title: string;
  menuItems?: DropdownItem[];
}

const Dropdown: React.FC<dropdownProps> = ({
  icon,
  title,
  menuItems,
  anchor,
}) => {
  return (
    <Menu as="div" className={`relative inline-block text-left`}>
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-full px-4 py-2 text-sm shadow-sm ring-1 ring-inset ring-gray-300">
          {title}
          {icon}
        </MenuButton>
      </div>

      <MenuItems
        transition
        anchor={anchor}
        className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
      >
        <div className="py-1">
          {menuItems?.map((item) => (
            <MenuItem>
              <button
                onClick={() => item.setProfile(item.profile)}
                className="block px-4 w-full py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
              >
                {item.title}
              </button>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
