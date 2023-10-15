import Layout from "../Components/layout"
import { useState } from "react"
import React from "react";

const Kontak = () => {  

  const [name, setName] = useState("");
  const [saran, setSaran] = useState("");
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + 1);
    console.log("Nama:", name);
    console.log("Saran:", saran);
  };

  return (
    <Layout>
      <div className="bg-white w-[60%] p-5 rounded-lg min-h-[20rem]">
        <p className="text-xl font-bold mb-4">Hubungi Saya : </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="Nama">Nama</label>
          <input id="Nama" className="border-2 border-black rounded-md" type="text" value={name}
            onChange={(e) => setName(e.target.value)}/>
          <label htmlFor="Saran" className="mt-3">Saran</label>
          <textarea className="border-2 border-black rounded-md" name="" id="Saran" cols="30" rows="5" value={saran} onChange={(e) => setSaran(e.target.value)}></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mt-5 mb-2" type="submit">Submit</button>
        </form>
        <p className="text-xl font-light mb-4 text-center">Pesan Yang Sudah Masuk : {count}</p>
      </div>
    </Layout>
  )
}
export default Kontak