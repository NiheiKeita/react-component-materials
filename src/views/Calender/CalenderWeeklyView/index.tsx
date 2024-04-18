
import React from 'react';
import { ButtonView } from '../../ButtonView';

type Props = {
  handleClick: () => void,
}

export const CalenderWeeklyView = React.memo<Props>(function CalenderWeeklyView({
  handleClick
},) {
  return (
    <div>
      <div className="flex justify-between">
        <ButtonView onClick={handleClick} text="前の月" />
        <p>カレンダー</p>
        <ButtonView onClick={handleClick} text="次の月" />
      </div>
      <button onClick={handleClick} data-testid="buttonddd">ddddd</button>
      <div>
        <div>
          月火水木金土日
        </div>
        <div data-testid="text">
          ◎バツとかとクリック処理
        </div>
        <input data-testid="input" />
        <table className="w-full border border-black">
          <thead className="w-full bg-blue-800 text-white">
            <tr className='w-full'>
              <th className="w-1/3 border border-black">グループ</th>
              <th className="w-1/3 border border-black">名前</th>
              <th className="w-1/3 border border-black">年齢</th>
            </tr>
          </thead>
          <tbody className="bg-blue-300 text-black">
            <td className="border border-black">www</td>
            <td className="border border-black">eee</td>
            <td className="border border-black">rname</td>
          </tbody>
        </table>
      </div>
    </div>
  );
});
