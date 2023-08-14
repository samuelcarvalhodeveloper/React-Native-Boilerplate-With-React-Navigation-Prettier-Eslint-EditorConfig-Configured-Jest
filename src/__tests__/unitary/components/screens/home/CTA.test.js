import { describe, expect, test } from "@jest/globals";
import { render } from "@testing-library/react-native";
import { MAIN_CTA_SCREEN_TEXT_ELEMENT_TEXT } from "../../../../constants/screens/index/pageElementsInnerTextConstants";
import CTA from "../../../../../components/screens/home/cta/CTA";

describe("Test Element CTA Behavior", () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = render(<CTA />);

    expect(getByText(MAIN_CTA_SCREEN_TEXT_ELEMENT_TEXT)).toBeTruthy();
  });
});
