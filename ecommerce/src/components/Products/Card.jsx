import Details from "./Details";
import ImageProduct from "./ImageProduct";

function Card({ product }) {

  if (Array.isArray(product)) {
    if (product.length === 0) {
      return <h1>No Products Found</h1>;
    }
    return (
      <div>
        {product.map(({ id, title, price, description, category, image, rating }) => (
          <div key={id}>
            <ImageProduct image={image} />
            <Details
              title={title}
              description={description}
              rating={rating}
              price={price}
              id={id}
            />
          </div>
        ))}
      </div>
    );
  }

  // Handle single product object
  if (!product) {
    return <h1>No Product Found</h1>;
  }

  const { id, title, price, description, category, image, rating } = product;
  return (
    <div key={id}>
      <h1>{title}</h1>
      <ImageProduct image={image} />
      <Details
        title={title}
        description={description}
        rating={rating}
        price={price}
        id={id}
      />
    </div>
  );
}

export default Card;
