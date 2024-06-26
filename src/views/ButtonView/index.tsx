import React from "react";

type Props = {
  onClick: () => void,
  text: string,
  testid?: string,
}

export const ButtonView = React.memo<Props>(function ButtonView({
  onClick,
  text,
  testid = 'button',
},) {
  return (
    <div data-testid={testid} className="w-fit cursor-pointer rounded bg-red-500 px-4 py-2 text-white hover:bg-red-300" onClick={onClick}>
      {text}
    </div>
  )
})

