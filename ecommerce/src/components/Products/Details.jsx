import { NavLink } from "react-router-dom";

function Details({ id, title, price, description, rating }) {
    console.log("id of product is ",id)
    return (
        <div className="flex flex-col w-[400px]">
            <NavLink to={`/products/${title}/${id}`}>
                <h1>{title}</h1>
            </NavLink>

            <p>{description}</p>
            <h2>{price}</h2>
            <h3>{rating.rate}</h3>
            <h3>{rating.count}</h3>

        </div>
    );
};
export default Details;
