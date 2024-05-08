import React from "react";
import { useStep } from "./contexts/StepContext";
import { StepContext } from "./contexts/StepContext";

export const TabSwitchingView = React.memo(function TabSwitchingView() {
  const stepValue = useStep()
  const Child = () => {
    switch (stepValue.step) {
      case 1:
        return (
          <>1</>
        )
      case 2:
        return (
          <>2</>
        )
      default:
        return (
          <>default</>
        )
    }
  }
  return (
    <>
      <StepContext.Provider value={stepValue}>
        <Child />
      </StepContext.Provider>
    </>
  )
});
TabSwitchingView.displayName = "CountView";
