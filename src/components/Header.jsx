import logo from "../assets/logo.png";
import Button from "./UI/Button";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Fast Food</h1>
      </div>
      <nav>
        <Button textOnly>CART</Button>
      </nav>
    </header>
  );
};
export default Header;
