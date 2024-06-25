import { FC, useState } from "react";
import ButtonContact from "./ButtonContact";
import MenuIcon from "./icons/MenuIcon";
import BookIcon from "./icons/BookIcon";
import PrinterIcon from "./icons/PrinterIcon";

type CertificateType = {
  link: string;
};

const MenuDropdown: FC<CertificateType> = ({ link }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="inline-block cursor-pointer print:hidden">
      <div className="relative">
        <div className="text-red-800 z-20" onClick={() => setIsShow(!isShow)}>
          <ButtonContact Icon={MenuIcon} title="" />
        </div>

        <div
          className={`absolute z-0 duration-500 overflow-hidden ${
            isShow ? "scale-100 -translate-y-0" : "scale-0 -translate-y-20"
          }`}
        >
          <div className="grid-cols-2">
            <button onClick={() => print()}>
              <ButtonContact Icon={PrinterIcon} title="Print" />
            </button>
            <a target="_blank" rel="noreferrer" href={link}>
              <ButtonContact Icon={BookIcon} title="link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDropdown;
