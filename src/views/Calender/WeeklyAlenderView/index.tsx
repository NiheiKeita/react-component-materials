
import { ButtonView } from '../../ButtonView';

export const WeeklyAlenderView = (( props: any ) => {
  return (
    <div>
      <div className="flex justify-between">
        <ButtonView onClick={props.clickEvent} text="前の月"/>
        <p>カレンダー</p>
        <ButtonView onClick={props.clickEvent} text="次の月"/>
      </div>
      <div>
        <div>
          月火水木金土日
        </div>
        <div>
          ◎バツとかとクリック処理
        </div>  
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
