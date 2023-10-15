import { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
        <div className="bg-blue-500 w-full flex justify-center p-4 fixed">
            <div className="w-1/4 flex justify-between">
                <a href="/" id="berandaTag" className={`text-lg ${location.pathname === '/' ? 'font-semibold' : ''} text-white`}>Beranda</a>
                <a href="/tentang" id="tentangTag" className={`text-lg ${location.pathname === '/tentang' ? 'font-semibold' : ''} text-white`}>Tentang</a>
                <a href="/kontak" id="kontakTag" className={`text-lg ${location.pathname === '/kontak' ? 'font-semibold' : ''} text-white`}>Kontak</a>
            </div>
        </div>
    )
  }
}
export default Navbar;