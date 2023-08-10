import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react-native";
import Home from "../../screens/Home";
import { MAIN_CTA_SCREEN_TEXT_ELEMENT_TEXT } from "../constants/screens/index/pageElementsInnerTextConstants";

describe("Test Domain Home Behavior", () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = render(<Home />);

    expect(getByText(MAIN_CTA_SCREEN_TEXT_ELEMENT_TEXT)).toBeTruthy();
  });
});
