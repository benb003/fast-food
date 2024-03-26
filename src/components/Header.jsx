import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Fast Food</h1>
      </div>
      <nav>
        <button>CART</button>
      </nav>
    </header>
  );
};
export default Header;
