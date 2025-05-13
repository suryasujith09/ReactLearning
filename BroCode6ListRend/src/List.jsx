function List() {
  const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']
  fruits.sort()
  const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
  return <ol>{listItems}</ol>
}
export default List
//hello here we have done some changes for the list and mapping
// and sorting the list
// and also added the key prop to the list items
