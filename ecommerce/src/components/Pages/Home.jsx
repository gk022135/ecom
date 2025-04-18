import { useEffect, useState } from "react";
import Card from "../Products/Card";

function Home() {
  const url_api = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url_api);
      const data = await res.json();
      setDatas(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDatas([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-indigo-600 mb-8">
        🛒 Explore Our Products
      </h1>

      {loading ? (
        <div className="text-center text-lg text-gray-700 font-semibold">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {datas.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
//lkj;kl 

//lkjk
//kjj