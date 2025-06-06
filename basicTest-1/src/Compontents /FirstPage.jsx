import {useState} from 'react'

const onClickbtn = () => {
  localStorage.setItem('input', input)
  navigate('/display', {replace: false})
}

const Firstpage = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const onChangeBtn = event => {
    setInput(event.target.value)
  }

  return (
    <div>
      <label htmlFor="textpass">Type your text</label>
      <input type="text" id="textpass" value={input} onChange={onChangeBtn} />
      <button type="submit" onClick={onClickbtn}>
        Display
      </button>
    </div>
  )
}
export default Firstpage
