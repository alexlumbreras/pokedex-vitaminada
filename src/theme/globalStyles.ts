import { index } from "@/ui";
import { reset } from "@/ui/reset";
import { createGlobalStyle, css } from "styled-components";
import { Theme } from "./theme";

export const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${reset}
  ${index}
`;
