import { NavLink } from "react-router-dom";
import { routingPaths } from "../../routes/RoutingPathUrl";

const NavBar: React.FC = () => {
  return (
    <>
      <div>
        <ul>
          <NavLink to={routingPaths.homeView}>Hem</NavLink>
          <NavLink to={routingPaths.boardGameView}>Brädspel</NavLink>
          <NavLink to={routingPaths.rolePlayView}>Rollspel</NavLink>
          <NavLink to={routingPaths.tcgView}>TCG</NavLink>
          <NavLink to={routingPaths.aboutView}>Om Oss</NavLink>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
