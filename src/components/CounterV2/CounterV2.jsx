import { useState } from "react"

const CounterV2 = () => {
  const [rangeValue, setRangeValue] = useState(1)
  const [inputValue, setInputValue] = useState(0)

  const today = new Date()
  const futureDate = new Date(today)
  futureDate.setDate(today.getDate() + inputValue)
  const futureDateString = futureDate.toDateString()

  const increment = () => {
    setInputValue((prev) => {
      return prev + rangeValue
    })
  }

  const decrement = () => {
    setInputValue((prev) => {
      return prev - rangeValue
    })
  }
  return (
    <div>
      <div className="slider">
        <input
          type="range"
          id="myRange"
          min="0"
          max="10"
          value={rangeValue}
          onChange={(e) => setRangeValue(Number(e.target.value))}
        />{" "}
        {rangeValue}
      </div>
      <div className="counter">
        <button onClick={decrement}>-</button>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(Number(e.target.value))}
        />
        <button onClick={increment}>+</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        {inputValue === 0
          ? `Today is ${futureDateString}`
          : `${inputValue} days from today is ${futureDateString}`}
      </div>
    </div>
  )
}

export default CounterV2
