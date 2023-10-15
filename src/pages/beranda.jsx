import Layout from "../Components/layout"

const beranda = () => {
  return (
    <Layout>
      <div id="berandaPage" className="bg-white w-3/4 p-5 text-center rounded-lg">
        <p className="text-2xl font-bold mb-4">Haloo Ini Halaman Beranda <br /> Silahkan ke Halaman Tentang Untuk Dapat Quotes Hari Ini <br /> Atau silahkan ke Halaman kontak untuk menghubungi saya</p>
      </div>
    </Layout>
  )
}

export default beranda