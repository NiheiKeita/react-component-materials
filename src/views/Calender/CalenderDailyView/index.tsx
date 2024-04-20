import React from "react"
import { CalenderDay } from "../types/CalenderDay"
import { format } from "date-fns"

type Props = {
  handleClick: () => void,
  day: Date,
}

export const CalenderDailyView = React.memo<Props>(function CalenderDailyView({
  handleClick,
  day,
},) {
  return (
    <div className=" bg-pink-200 rounded-xl shadow-md flex items-center justify-center m-2">
      <p className="text-pink-600 p-2 ">{format(day, "dd")}</p>
    </div>
    // <div onClick={handleClick} className="border ">
    //   {String(day.date)}
    // </div>
  )
})
