import { Parallax } from 'react-parallax';

const Card = ({ img, title, description }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="Our Menu"
        strength={-200}
    >
        <div
        className="hero h-[350px] md:h-[700px] bg-cover bg-center"
      >
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
      
    </div>
  );
};

export default Card;
