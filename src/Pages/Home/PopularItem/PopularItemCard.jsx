const PopularItemCard = ({ popularItem }) => {
  const { image, price, name, recipe } = popularItem;
  return (
    <div>
      <div className="flex items-center space-x-2 px-10 lg:px-20">
        <div>
          <img src={image} className="popular-img" alt="" />
        </div>
        <div>
          <h1 className="uppercase text-[#151515]">{name}------------</h1>
          <p className="text-[#737373]">{recipe}</p>
        </div>
        <div>
          <h1 className="text-yellow-500">${price}</h1>
        </div>
      </div>
    </div>
  );
};

export default PopularItemCard;
