import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import React from "react";
import * as stories from "./index.stories";
const { Default } = composeStories(stories);

describe("画面のテスト", () => {
  test("画面のテスト", async () => {
    const { container } = render(<Default />);
    await Default.play({ canvasElement: container });
  });
})