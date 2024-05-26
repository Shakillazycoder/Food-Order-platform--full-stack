import SectionTitle from "../../../Component/SectionTitle";
import featured from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <section>
        <div className="featured-item bg-fixed text-white pt-8 my-20">
    <SectionTitle subHeading="check it out" heading="Featured Item" ></SectionTitle>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 bg-opacity-30 bg-black  pb-20 pt-12 px-4 md:px-36">
        <div>
            <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
            <p>Aug 20, 2024</p>
            <p className="uppercase">Where can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
        </div>
    </div>
</div>
    </section>
  );
};

export default Featured;
