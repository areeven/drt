import { NavLink } from "react-router-dom";
import { routingPaths } from "../../routes/RoutingPathUrl";
import about from "../../img/about.png";
import home from "../../img/home.png";
import roleplay from "../../img/roleplay.png";
import TCG from "../../img/TCG.png";
import boardgame from "../../img/boardgame.png";
import warhammer from "../../img/warhammer.png";

const NavBar: React.FC = () => {
  const navLinks = [
    { path: routingPaths.homeView, text: "Hem", icon: home },
    { path: routingPaths.boardGameView, text: "Brädspel", icon: boardgame },
    { path: routingPaths.rolePlayView, text: "Rollspel", icon: roleplay },
    { path: routingPaths.tcgView, text: "Magic", icon: TCG },
    { path: routingPaths.boardGameView, text: "Warhammer", icon: warhammer },
    { path: routingPaths.aboutView, text: "Om Oss", icon: about },
  ];

  return (
    <>
      <div className="md:min-w-xl">
        <ul className="h-48 flex items-center justify-center bg-gradient-to-b from-slate-400 to-white">
          {navLinks.map((link, index) => (
            <li className="">
              <NavLink
                key={index}
                className="content flex items-center justify-center border-solid border-2 m-2 bg-white border-teal-600 p-2 w-40"
                to={link.path}
              >
                <img src={link.icon} alt="" width="40" className="inline" />
                <p className="text-l font-bold m-2">{link.text}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
