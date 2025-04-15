import { Link } from "react-router-dom";

function Details({ id, title, description, rating, price }) {
  const shortTitle = title?.split(" ").slice(0, 10).join(" ") + (title?.split(" ").length > 10 ? "..." : "");
  const shortDesc = description?.split(" ").slice(0, 80).join(" ") + "...";

  return (
    <Link to={`/product/${id}`} className="block">
      <div className="mt-4 flex flex-col bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {shortTitle}
        </h2>
        <p className="text-gray-600 text-sm mb-2 leading-relaxed overflow-hidden text-ellipsis line-clamp-3">
          {shortDesc}
        </p>
        <div className="flex justify-between items-center text-sm text-gray-700 mt-2">
          <span>⭐ {rating?.rate ?? 0} ({rating?.count ?? 0})</span>
          <span className="font-semibold text-indigo-600">${price.toFixed(2)}</span>
        </div>
      </div>
    </Link>
  );
}

export default Details;
