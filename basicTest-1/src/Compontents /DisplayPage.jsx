const Displaypage = () => {
  const field = localStorage.getItem('input')
  return (
    <>
      <p>{field}</p>
    </>
  )
}
export default Displaypage
