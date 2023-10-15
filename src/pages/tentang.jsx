import { useState } from "react"
import Layout from "../Components/layout"
import axios from "axios";

const Tentang = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = () => {
    setLoading(true);
    axios.get('https://api.api-ninjas.com/v1/quotes?category=happiness',{
      headers: { 'X-Api-Key': 'oFE13+sxRwrhn9/6x1DYqw==V6ENG0X3X0N5wxzd'}
    })
      .then((response) => {
        setData(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setLoading(false);
      });
  };
  return (
    <Layout>
      <div id="tentangPage" className="bg-white w-[60%] p-5 rounded-lg min-h-[20rem]">
        <p className="text-xl font-bold mb-4">Bisa Dipencet ya tombol dibawah, buat dapet quotes nya :*</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-5" onClick={fetchData} disabled={loading}>Get Quote</button>
        <p className="text-2xl font-serif mb-4">{data.quote}</p>
        <p className="text-2xl font-bold mb-4">{data.author}</p>
      </div>
    </Layout>
  )
}

export default Tentang