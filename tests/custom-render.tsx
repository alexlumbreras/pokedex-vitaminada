import React, { ReactElement } from "react";
import { render, RenderOptions, act, screen } from "@testing-library/react";
import { ThemeProvider } from "@/theme/ThemeProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
