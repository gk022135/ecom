function ImageProduct({ image }) {
    return (
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-[250px] aspect-square overflow-hidden rounded-xl shadow-md bg-white hover:scale-105 transition-transform duration-300">
          <img
            src={image}
            alt="product"
            className="w-full h-full object-contain p-4"
          />
        </div>
      </div>
    );
  }
  
  export default ImageProduct;
  