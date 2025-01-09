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
      console.log("Data fetched:", data); 
    } catch (error) {
      console.error("Error fetching data:", error); 
      setDatas([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className="grid grid-cols-4">
      <h1 className="bg-red-300 text-amber-600">Home Page</h1>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <Card product = {datas}/>
      )}
    </div>
  );
}

export default Home;
