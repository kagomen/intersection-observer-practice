import { useState } from "react"
import Article from "./components/Article"
import Title from "./components/Title"
import Button from "./components/Button"

const App = () => {
  const [isDisp, setIsDisp] = useState(true)
  function handleClick() {
    setIsDisp(prev => !prev)
  }
  return (
    <div className="max-w-[800px] my-24 mx-auto text-stone-800">
      <Button handleClick={handleClick} />
      {isDisp && (
        <div>
          <Title />
          <Article />
          <Article />
          <Article />
        </div>
      )}
    </div>
  )
}

export default App