import React from "react";
import { ButtonView } from '../../ButtonView';

type Props = {
  handlePrevClick: () => void,
  handleNextClick: () => void,
  children: React.ReactNode,
  prevText?: string,
  nextText?: string,
}

export const CalenderHeaderView = React.memo<Props>(function CalenderHeaderView({
  handlePrevClick,
  handleNextClick,
  children,
  prevText = '前の月',
  nextText = '次の月',
},) {
  return (
    <div>
      <div className="flex justify-between">
        <ButtonView onClick={handlePrevClick} text={prevText} testid="prevButton" />
        <p>{children}</p>
        <ButtonView onClick={handleNextClick} text={nextText} testid="nextButton" />
      </div>
    </div>
  )
})
