import boardGameTable from "../../shared/images/boardgames/boardgames_multiple.jpg";

const BoardGameView: React.FC = () => {
  return (
    <>
      <div className="flex justify-center mt-8">
        <img src={boardGameTable} alt="BoardGames" width="600" />
      </div>
      <div className="flex justify-center">Text här</div>
    </>
  );
};

export default BoardGameView;
