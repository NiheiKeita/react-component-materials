import React from "react"
import { CalenderDailyView } from "../CalenderDailyView"
import { CalenderMonth } from "../types/CalenderMonth"

type Props = {
  handleClick: () => void,
  calender: CalenderMonth,
}

export const CalenderMonthlyView = React.memo<Props>(function CalenderMonthlyView({
  handleClick,
  calender,
},) {
  const doClick = () => {
    handleClick
  }
  return (
    <div data-testid="button" className="w-fit rounded bg-red-500 px-4 py-2 text-white hover:bg-red-300" onClick={handleClick}>
      {
        calender.days.map((day, index) => {
          return (
            <CalenderDailyView key={index} day={day} handleClick={doClick} />
          )
        })
      }
    </div>
  )
})
