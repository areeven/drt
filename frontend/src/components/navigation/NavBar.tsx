import { NavLink } from "react-router-dom";
import { routingPaths } from "../../routes/RoutingPathUrl";
import about from "../../shared/images/navigation/about.png";
import dice from "../../shared/images/navigation/dice_t20.png";
import home from "../../shared/images/navigation/home.png";
import roleplay from "../../shared/images/navigation/roleplay.png";
import TCG from "../../shared/images/navigation/TCG.png";

const NavBar: React.FC = () => {
  const navLinks = [
    { path: routingPaths.homeView, text: "Hem", icon: home },
    { path: routingPaths.boardGameView, text: "Brädspel", icon: dice },
    { path: routingPaths.rolePlayView, text: "Rollspel", icon: roleplay },
    { path: routingPaths.tcgView, text: "TCG", icon: TCG },
    { path: routingPaths.aboutView, text: "Om Oss", icon: about },
  ];

  return (
    <>
      <div>
        <ul className="h-48 flex items-center justify-center">
          {navLinks.map((link, index) => (
            <li className="">
              <NavLink
                key={index}
                className="content flex items-center justify-center border-solid border-2 m-2 border-teal-600 p-2 w-48 rounded-lg"
                to={link.path}
              >
                <img src={link.icon} alt="" width="50" className="inline" />
                <p className="text-xl font-bold m-2">{link.text}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
