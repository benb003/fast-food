import { useContext } from "react";
import logo from "../assets/logo.png";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

const Header = () => {
  const cartCxt = useContext(CartContext);
  const userProgressCxt = useContext(UserProgressContext);

  const showCart = () => {
    userProgressCxt.showCart();
  };

  const totalCartItems = cartCxt.items.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>Fast Food</h1>
      </div>
      <nav>
        <Button textOnly onClick={showCart}>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
};
export default Header;
