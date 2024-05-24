import sideImage from "/sideImage1.png";
import circle from "/circle.png";
type Props = {};

const ImageClip = (props: Props) => {
  return (
    <>
      <img
        src={sideImage}
        alt="side Image"
        className=" absolute -left-60 -top-16 h-[115%]  -scale-x-100 "
      />
      <img
        src={sideImage}
        alt="side Image"
        className=" absolute -right-44 -top-16 h-[115%]  "
      />
      <img
        src={circle}
        alt="side Image"
        className=" absolute right-44 top-36 w-28  "
      />
    </>
  );
};

export default ImageClip;
