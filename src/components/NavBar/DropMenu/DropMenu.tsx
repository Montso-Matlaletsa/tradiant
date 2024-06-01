import {
  Menu,
  MenuButton,
  Transition,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import React, { FC } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface Props {
  classNames: (...items: string[]) => string;
}
export const DropMenu: FC<Props> = ({ classNames }) => {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className=" rounded-md px-3 py-2 text-sm font-medium text-gray-400 flex flex-row justify-center items-center ">
          <span>Journey</span>
          <ChevronDownIcon height={16} width={16} className="mx-1 self-auto" />
        </MenuButton>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Journey 1
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Journey 2
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Journey 3
              </a>
            )}
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
};
