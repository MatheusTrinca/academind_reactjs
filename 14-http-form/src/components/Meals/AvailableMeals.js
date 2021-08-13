import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import useHttp from '../hooks/useHttp';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest(
      {
        url: 'https://academind-react-c9abc-default-rtdb.firebaseio.com/meals.json',
      },
      data => {
        let dataArray = [];
        for (let key in data) {
          dataArray.push({
            id: key,
            description: data[key].description,
            name: data[key].name,
            price: data[key].price,
          });
        }
        setMeals(dataArray);
      }
    );
  }, [sendRequest]);

  if (isLoading) {
    return (
      <section className={classes.mealIsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.mealError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
