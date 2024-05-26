import SectionTitle from "../../../Component/SectionTitle";
import chef from "../../../assets/home/slide1.jpg";

const ChefRecommended = () => {
  return (
    <section className="mb-20 px-2">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"chef recommends"}
      ></SectionTitle>
      <div className="flex flex-col md:flex-row gap-5">
        {/* card 1*/}
        <div className="card  h-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={chef} alt="Shalad" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-primary">add to cart</button>
            </div>
          </div>
        </div>
        {/* card 2*/}
        <div className="card  h-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={chef} alt="Shalad" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-primary">add to cart</button>
            </div>
          </div>
        </div>
        {/* card 3*/}
        <div className="card  h-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={chef} alt="Shalad" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-primary">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRecommended;
