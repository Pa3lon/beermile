import Scroll from "./Scroll";

interface Props {
  player: {
    name: string;
    image: string;
    intro: string;
  };
}

const MainCard = (props: Props) => {
  return (
    <>
      <div className="hidden w-full text-sm text-white sm:flex">
        <div className="absolute flex items-center justify-center w-84">
          <img src="card-bg.png" alt="background" />
          <img
            className="absolute rounded-full w-44 top-28 2xl:w-52"
            src={props.player.image}
            alt="player"
          />
          <h2 className="absolute mb-4 text-lg italic 2xl:mb-5">
            {props.player.name}
          </h2>
          <Scroll text={props.player.intro} />
        </div>
      </div>
      <div className="sm:hidden">
        <div className="flex items-center justify-center text-white bg-black">
          <img src="card-bg.png" alt="background" />
          <img
            style={{ top: "4.5rem" }}
            className="absolute w-32 rounded-full "
            src={props.player.image}
            alt="player"
          />
          <h2 className="absolute mb-4 text-lg italic 2xl:mb-5">
            {props.player.name}
          </h2>
          <Scroll text={props.player.intro} />
        </div>
      </div>
    </>
  );
};

export default MainCard;
