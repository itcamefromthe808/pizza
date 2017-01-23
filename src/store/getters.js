export const getPizzaShortDescription = state => {
  return {
    size: state.pizza.pie.size.Name? state.pizza.pie.size.Name : '' ,
    crust: state.pizza.pie.crust.Name? state.pizza.pie.crust.Name : '',
    toppings: state.pizza.pie.toppings.length? state.pizza.pie.toppings.map((t) => t.Name) : []
  }
}
