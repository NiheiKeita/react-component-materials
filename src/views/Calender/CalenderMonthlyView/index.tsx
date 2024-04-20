import React from "react"
import { CalenderDailyView } from "../CalenderDailyView"
import { CalenderMonth } from "../types/CalenderMonth"
import { format } from "date-fns"
import { ButtonView } from '../../ButtonView';

type Props = {
  handleClick: () => void,
  calender: CalenderMonth,
}

export const CalenderMonthlyView = React.memo<Props>(function CalenderMonthlyView({
  handleClick,
  calender,
},) {
  const doClick = (day: Date) => {
    console.log(format(day, "yyyy-MM-dd"))
    handleClick()
  }
  const handleBeforeClick = () => {
    console.log("d")
  }
  const handleNextClick = () => {
    console.log("d")
  }
  const dayOfWeeks = ["日", "月", "火", "水", "木", "金", "土"]
  const emptyDteNum: number = calender.days[0].getDay()
  return (
    <div>
      <div className="flex justify-between">
        <ButtonView className="" onClick={handleBeforeClick} text="前の月" />
        <p>{calender.month}月 カレンダー</p>
        <ButtonView onClick={handleNextClick} text="次の月" />
      </div>
      <div className="mt-5 grid grid-cols-7">
        {
          dayOfWeeks.map((dayOfWeek, index) => {
            return (
              <div className="flex items-center justify-center bg-slate-400" key={index} >{dayOfWeek}</div>
            )
          })
        }
        {
          [...Array(emptyDteNum)].map((value, index) => {
            return (<div key={index}></div>)
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
