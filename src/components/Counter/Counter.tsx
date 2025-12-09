import { useState } from "react"

const Counter = () => {
  const [step, setStep] = useState(1)
  const [counter, setCounter] = useState(0)
  const today = new Date()
  const futureDate = new Date(today)
  futureDate.setDate(today.getDate() + counter)
  const futureDateString = futureDate.toDateString()

  const incrementCounter = () => {
    setCounter((prev) => prev + step)
  }

  const decrementCounter = () => {
    setCounter((prev) => prev - step)
  }

  const incrementStep = () => {
    setStep((prev) => prev + 1)
  }

  const decrementStep = () => {
    setStep((prev) => prev - 1)
  }

  console.log(futureDateString, "date")
  return (
    <div>
      <div className="counter">
        <button onClick={decrementStep}>-</button>
        <p>Step: {step}</p>
        <button onClick={incrementStep}>+</button>
      </div>
      <div className="counter">
        <button onClick={decrementCounter}>-</button>
        <p>Count: {counter}</p>
        <button onClick={incrementCounter}>+</button>
      </div>
      <p className="text">
        {counter === 0
          ? `Today is ${futureDateString}`
          : `${counter} days from today is ${futureDateString}`}
      </p>
    </div>
  )
}

export default Counter
