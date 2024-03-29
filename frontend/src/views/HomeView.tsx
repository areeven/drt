import drtLogo from "../img/drt-logo.png";

const HomeView: React.FC = () => {
  return (
    <>
      <div>
        <div className="text-4xl font-bold">Den rullande tärningen</div>
        <img
          src={drtLogo}
          alt="den rullande tärningen"
          width="1100"
          height="auto"
          className="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
        />
      </div>
    </>
  );
};

export default HomeView;
