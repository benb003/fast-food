import { currencyFormatter } from "../util/currencyFormatter";
import Button from "./UI/Button";

const MealItem = ({ meal }) => {
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{currencyFormatter(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button textOnly>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
export default MealItem