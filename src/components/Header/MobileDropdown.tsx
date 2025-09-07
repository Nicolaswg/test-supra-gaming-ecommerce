import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "./icons";

interface MenuItem {
  title: string;
  path?: string;
  submenu?: MenuItem[];
}

interface MobileDropdownProps {
  menuItem: MenuItem;
  onClose: () => void;
}

const MobileDropdown = ({ menuItem, onClose }: MobileDropdownProps) => {
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        className="flex items-center w-full gap-2 text-sm cursor-pointer capitalize  font-medium text-dark py-2 px-3 rounded-md hover:bg-blue/10 hover:text-blue transition-colors justify-between"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={`submenu-${menuItem.title}`}
      >
        <span className="flex items-center gap-2">{menuItem.title}</span>

        <span
          className={`transform transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        >
          <ChevronDown />
        </span>
      </button>
      {open && menuItem.submenu && (
        <ul
          id={`submenu-${menuItem.title}`}
          className="ml-6 mt-1 flex flex-col gap-1"
        >
          {menuItem.submenu.map((sub, idx) =>
            sub.submenu ? (
              <MobileDropdown key={idx} menuItem={sub} onClose={onClose} />
            ) : (
              <li key={idx}>
                <Link
                  href={sub.path!}
                  className="flex items-center gap-2 text-sm font-medium text-dark py-2 px-3 rounded-md hover:bg-blue-50 hover:text-blue transition-colors"
                  onClick={onClose}
                >
                  {sub.title}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
};

export default MobileDropdown;
