import MealItem from "./meal-item";
import style from './meals-grid.module.css'

interface Meal {
    id: string;
    image: string;
    title: string;
    summary: string;
    creator: string | number;
  }
  
const MealsGrid: React.FC<{meals:Meal[]}> = ({meals}) => {
  return (
    <ul className={style.meals}>
        {meals.map((meal) => (
          <li key={meal.id} className="meal-item">
            <MealItem {...meal}/>
          </li>
        ))}
      
    </ul>
  )
}
export default MealsGrid
