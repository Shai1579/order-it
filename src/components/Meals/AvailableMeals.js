import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [allMeals, setAllMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://order-it-6fb76-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      setError(null);
      const meals = await response.json();
      const tempAllMeals = [];
      Object.keys(meals).forEach((mealId) => {
        tempAllMeals.push({
          id: mealId,
          name: meals[mealId].name,
          description: meals[mealId].description,
          price: meals[mealId].price,
          category: meals[mealId].category,
          image: meals[mealId].image
        });
      });
      setAllMeals(tempAllMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, []);
  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }
  const mealsByCategory = {};
  allMeals.forEach((meal) => {
    if (!meal.category) {
      meal.category = "Misc.";
    }
    if (!mealsByCategory[meal.category]) {
      mealsByCategory[meal.category] = [];
    }
    mealsByCategory[meal.category].push(
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        image={meal.image}
      ></MealItem>
    );
  });
  const categoriesForUI = [];
  Object.keys(mealsByCategory).forEach((category) => {
    categoriesForUI.push(<Card key={category}>
      <h1 className={classes.category}>{category}</h1>
      <ScrollMenu inertiaScrollingSlowdown={0.7} inertiaScrolling={true} alignOnResize={false} wheel={false} data={mealsByCategory[category]}></ScrollMenu>
    </Card>);
  });
  return (
    <section className={classes.meals}>
      {categoriesForUI}
    </section>
  );
};

export default AvailableMeals;
