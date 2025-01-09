import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Products/Card";

function ProductPage() {
  const location = useLocation();
  console.log("hi path ",location.pathname)
  const query = location.pathname.split('/').at(-1);  
  console.log(query);

  const url_api = `https://fakestoreapi.com/products/${query}`;
  console.log("new url ",url_api)
  const [datas, setDatas] = useState(null);  
  const [loading, setLoading] = useState(false);  


  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url_api);
      const data = await res.json();
      setDatas(data);  
      console.log("Data fetched:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setDatas(null); 
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className="grid grid-cols-4">
      <h1>Product Page</h1>
      {loading ? (
        <h1>Loading.....</h1>
      ) : datas ? (
        <Card product={datas} />
      ) : (
        <h1>No product found</h1>
      )}
    </div>
  );
}

export default ProductPage;
