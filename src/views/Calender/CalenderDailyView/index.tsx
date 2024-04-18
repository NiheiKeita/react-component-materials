import React from "react"
import { CalenderDay } from "../types/CalenderDay"

type Props = {
  handleClick: () => void,
  day: CalenderDay,
}

export const CalenderDailyView = React.memo<Props>(function CalenderDailyView({
  handleClick,
  day,
},) {
  return (
    <div onClick={handleClick}>
      {String(day.date)}
    </div>
  )
})
