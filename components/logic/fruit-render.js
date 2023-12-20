import Blueberry from "../design/svgs/fruit/blueberry";
import Cherry from "../design/svgs/fruit/cherry";
import DragonFruit from "../design/svgs/fruit/dragon-fruit";
import Grape from "../design/svgs/fruit/grape";
import Kiwi from "../design/svgs/fruit/kiwi";
import Lime from "../design/svgs/fruit/lime";
import Mango from "../design/svgs/fruit/mango";
import Mint from "../design/svgs/fruit/mint";
import PassionFruit from "../design/svgs/fruit/passion-fruit";
import Peach from "../design/svgs/fruit/peach";
import Pineapple from "../design/svgs/fruit/pineapple";
import Raspberry from "../design/svgs/fruit/raspberry";
import Strawberry from "../design/svgs/fruit/strawberry";

const iconComponents = {
  "dragon-fruit": DragonFruit,
  "passion-fruit": PassionFruit,
  lime: Lime,
  mint: Mint,
  pineapple: Pineapple,
  mango: Mango,
  peach: Peach,
  kiwi: Kiwi,
  blueberry: Blueberry,
  grape: Grape,
  strawberry: Strawberry,
  raspberry: Raspberry,
  cherry:Cherry,
};

const FruitRender = ({ iconName }) => {
  // console.log(iconName);
  const IconComponentToRender = iconComponents[iconName] || Cherry;

  return <IconComponentToRender />;
};

export default FruitRender;
