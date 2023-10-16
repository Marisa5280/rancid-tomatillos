import './Header.css';
import rancidLogo from '../../assets/Rancid_Logo_Lower.png';

function Header() {
  return (
    <header>
      <img
        src={rancidLogo}
        alt="Rancid Tomatillos Logo"
        className="logo-image"
      />
      <h1 className="sr-only">Rancid Tomatillos</h1>
    </header>
  );
}

export default Header;
