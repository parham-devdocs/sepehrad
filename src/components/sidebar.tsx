import Logo from "/SepehradLogo.png"; // Keep the logo import as is
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCurrencyExchange } from "react-icons/bs";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaHandHoldingUsd } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";
import { FaListCheck } from "react-icons/fa6";
import { GrTask } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ReactNode, useEffect, useState } from "react";
import useSidebarToggle from "../hooks/useSidebarToggle";

type DashboardLinkType = {
  text: string;
  icon: ReactNode; // This will be the path to the icon
  link?: string;
  sublinks?: DashboardLinkType[]; // Optional sublinks
};

// Define the paths for the icons directly
const dashboardLinks: DashboardLinkType[] = [
  { text: "داشبورد", icon: <LuLayoutDashboard />, link: "/dashboard" },
  {
    text: "امور مالی",
    icon: <BsCurrencyExchange />,
    sublinks: [
      {
        text: "گزارشات مالی",
        icon: <LiaClipboardListSolid />,
        link: "/financial/reports",
      },
      {
        text: "مدیریت چک ها",
        icon: <FaHandHoldingUsd />,
        link: "/financial/checks",
      },
      {
        text: "لیست بستانکار ها",
        icon: <BsFillPeopleFill />,
        link: "/financial/creditors",
      },
      {
        text: "لیست بدهی ها",
        icon: <IoIosListBox />,
        link: "/financial/debts",
      },
      {
        text: "لیست پرداخت ها",
        icon: <GrTask />,
        link: "/",
      },
    ],
  },
  {
    text: "مدیریت تسک ها",
    icon: <FaListCheck />,
    link: "/tasks",
  },
];

const Sidebar = () => {
  const { mobileMode } = useSidebarToggle();
  const [sidebarIsOpen, setSidebarIsOpen] = useState(!mobileMode); // Start closed in mobile mode

  const toggleSidebar = () => {
    if (!mobileMode) {
      setSidebarIsOpen((prev) => !prev);
    }
  };
  useEffect(() => {
    setSidebarIsOpen((prev) => !prev);
  }, [mobileMode]);

  return (
    <div
      className={`${
        sidebarIsOpen ? "w-[240px]" : "w-[80px]"
      } h-screen pt-12 px-6 bg-Background-dark transition-all duration-500 flex justify-center`}
    >
      <div
        className={`space-y-4  ${
          sidebarIsOpen ? "w-[190px]" : "w-[50px]"
        } transition-all`}
      >
        <button onClick={toggleSidebar}>
          <img src={Logo} alt="logo" />
        </button>

        {dashboardLinks.map((link) => (
          <SidebarLink
            key={link.text}
            link={link}
            sidebarIsOpen={sidebarIsOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

function SidebarLink({
  link,
  sidebarIsOpen,
}: {
  link: DashboardLinkType;
  sidebarIsOpen: boolean;
}) {
  const [toggleFinance, setToggleFinance] = useState(false);

  function financeToggleHandler(text: string) {
    if (text === "امور مالی") {
      setToggleFinance((prevState) => !prevState);
    }
  }

  return (
    <div>
      <NavLink
        onClick={() => financeToggleHandler(link.text)}
        to={link.link ? link.link : "#"}
        className={`${
          sidebarIsOpen ? "justify-end" : "justify-end"
        } flex items-center justify-between  max-h-10 animate-fade-in space-x-3 w-full px-4 text-[14px] py-2 bg-veronika text-Primary-main rounded-[8px] hover:bg-Primary-main hover:text-veronika transition-all duration-300`}
      >
        { link.text === "امور مالی" && <Arrow direction={toggleFinance ? "up":"down"} />}
        <div className=" flex gap-3 ">
          {sidebarIsOpen && (
            <p className="animate-fade-in transition-colors">{link.text}</p>
          )}
          {link.icon}
        </div>
      </NavLink>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          toggleFinance ? "max-h-72" : "max-h-0"
        }`}
      >
        {link.sublinks && toggleFinance && (
          <div className="space-y-4 mt-4 animate-fade-in transition-all duration-300">
            {link.sublinks.map((sublink) => (
              <SidebarLink
                key={sublink.text}
                link={sublink}
                sidebarIsOpen={sidebarIsOpen}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


function Arrow({direction}:{direction:string}) {
  // const [text,setTex]=useState<string>("")
  
if (direction === "up") {
 return <IoIosArrowUp className=" mr-16 animate-fade-in"/>

}
  return <IoIosArrowDown className=" mr-16 animate-fade-in"/>
}