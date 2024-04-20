
import React from 'react';
import { ButtonView } from '../../ButtonView';
import { CalenderMonth } from '../types/CalenderMonth';
import { format } from 'date-fns';
import { CalenderDailyView } from '../CalenderDailyView';


type Props = {
  handleClick: () => void,
  calender: CalenderMonth,
}

export const CalenderWeeklyView = React.memo<Props>(function CalenderWeeklyView({
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
  const handleextClick = () => {
    console.log("d")
  }
  const dayOfWeeks = ["日", "月", "火", "水", "木", "金", "土"]
  const emptydateNum: number = calender.days[0].getDay()
  return (
    <div>
      <div className="flex justify-between">
        <ButtonView className="" onClick={handleBeforeClick} text="前の週" />
        <p>週カレンダー</p>
        <ButtonView onClick={handleextClick} text="次の週" />
      </div>
      <div className="mt-5 grid grid-cols-7">
        {
          [...Array(7)].map((value, index) => {
            return (<div className="flex items-center justify-center bg-slate-400" key={index} >{dayOfWeeks[(emptydateNum + index) % 7]}</div>)
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

