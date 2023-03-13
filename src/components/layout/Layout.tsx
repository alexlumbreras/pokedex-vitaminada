import { Outlet } from "react-router-dom";
import { Footer } from "@/components/molecules/Footer";
import { Header } from "@/components/molecules/Header";
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
