import React from "react"
import { CalenderDailyView } from "../CalenderDailyView"
import { CalenderMonth } from "../types/CalenderMonth"
import { format } from "date-fns"

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
  const dayOfWeeks = ["月", "火", "水", "木", "金", "土", "日"]
  const emptydateNum: number = calender.days[0].getDay()
  console.log(format(calender.days[0], "yyyy-MM-dd"))
  console.log(calender.days[0].getDay())
  return (
    <div>
      {/* {emptydateNum} */}
      <div className="grid-cols-7 grid">
        {
          dayOfWeeks.map((dayOfWeek, index) => {
            return (
              <div className="flex justify-center items-center" key={index}>{dayOfWeek}</div>
            )
          })
        }
        {
          [...Array(emptydateNum)].map(() => {
            return (<div></div>)
          })
        }
        {
          calender.days.map((day, index) => {
            return (
              <CalenderDailyView key={index} day={day} handleClick={doClick} />
            )
          })
        }
      </div>
    </div>
  )
})
