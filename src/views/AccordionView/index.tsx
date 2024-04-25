import React from "react"

type Props = {
  title: string,
  children: React.ReactNode
}

export const AccordionView = React.memo<Props>(function AccordionView({
  title, children
}) {
  return (
    <>
      <div>{title}</div>
      <div>{children}</div>
    </>
  )
})
