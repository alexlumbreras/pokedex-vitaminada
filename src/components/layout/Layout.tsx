import { Outlet } from "react-router-dom";
import { Footer } from "../molecules/Footer";
import { Header } from "../molecules/Header";
import { StyledWrapper } from "./Layout.styled";

export const Layout = () => {
	return (
		<StyledWrapper>
			<Header />
			<Outlet />
			<Footer />
		</StyledWrapper>
	);
};
