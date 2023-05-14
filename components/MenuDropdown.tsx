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
        <div className="text-red-800" onClick={() => setIsShow(!isShow)}>
          <ButtonContact Icon={MenuIcon} title="" />
        </div>

        <div
          className={`absolute z-10 duration-300 ${
            isShow ? "" : "h-0 overflow-hidden"
          }`}
        >
          <div className="grid-cols-2">
            <button onClick={() => print()}>
              <ButtonContact Icon={PrinterIcon} title="Print" />
            </button>
            <a target="_blank" rel="noreferrer" href={link}>
              <ButtonContact Icon={BookIcon} title="link" />
            </a>
            <a target="_blank" rel="noreferrer" href={link}>
              <ButtonContact Icon={BookIcon} title="link" />
            </a>
            <a target="_blank" rel="noreferrer" href={link}>
              <ButtonContact Icon={BookIcon} title="link" />
            </a>
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
