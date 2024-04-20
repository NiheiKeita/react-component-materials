import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import * as stories from "./index.stories";
const { Deafault } = composeStories(stories);

describe("画面のテスト", () => {
  test("画面のテスト", async () => {
    const { container } = render(<Deafault />);
    await Deafault.play({ canvasElement: container });
  });
})