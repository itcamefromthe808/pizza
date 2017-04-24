export const getPizzaShortDescription = state => {
  return {
    size: state.pizza.pie.size.Name ? state.pizza.pie.size.Name : '',
    crust: state.pizza.pie.crust.Name ? state.pizza.pie.crust.Name : '',
    toppings: state.pizza.pie.toppings.length ? state.pizza.pie.toppings.map((t) => t.Name) : []
  }
}

// export const getToppingOption = state => state.pizza.options.toppings
// export const getPeopleOption = state => state.pizza.options.toppings
// export const getHungerOption = state => state.pizza.options.toppings
