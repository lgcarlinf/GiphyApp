import { userFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";
import Loading from "./Loading";

const Gifgrid = ({ category }) => {
  const { images, isLoading } = userFetchGifs(category);

  return (
    <>
      <h3 className=" text-2xl text-center my-6 uppercase text-white">
        {category}
      </h3>
      {isLoading && <Loading />}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default Gifgrid;
