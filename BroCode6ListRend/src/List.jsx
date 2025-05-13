function List() {
  const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']
  fruits.sort()
  const listItems = fruits.map((fruit, index) => <li key={index}>{fruit}</li>)
  return <ol>{listItems}</ol>
}
export default List
