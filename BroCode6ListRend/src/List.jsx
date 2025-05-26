function List() {
  const fruits = [
    {id: 1, name: 'apple', calories: 48},
    {id: 2, name: 'banana', calories: 95},
    {id: 3, name: 'cherry', calories: 105},
    {id: 4, name: 'date', calories: 159},
    {id: 5, name: 'elderberry', calories: 60},
  ]
  fruits.sort((a, b) => a.name.localeCompare(b.name))
  // fruits.sort((a, b) => a.calories - b.calories)
  // fruits.sort((a, b) => a.id - b.id)
  // fruits.sort((a, b) => a.name.length - b.name.length)
  // fruits.sort((a, b) => a.name.length - b.name.length)
  // fruits.sort((a, b) => a.calories - b.calories)
  // fruits.sort((a, b) => a.id - b.id)
  // fruits.sort((a, b) => a.name.length - b.name.length)
  // fruits.sort((a, b) => a.calories - b.calories)
  // fruits.sort((a, b) => a.id - b.id)
  // fruits.sort((a, b) => a.name.length - b.name.length)
  // fruits.sort((a, b) => a.calories - b.calories)
  // fruits.sort((a, b) => a.id - b.id)
  // fruits.sort((a, b) => a.name.length - b.name.length)
  // fruits.sort((a, b) => a.calories - b.calories)

  const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
  const listItems = fruits.map(fruit => (
    <li key={fruits.id}>
      {lowCalFruits.name}: {fruits.calories}
    </li>
  ))
  return <ol>{listItems}</ol>
}
export default List
//hello here we have done some changes for the list and mapping
// and sorting the list
// and also added the key prop to the list items
// hi
