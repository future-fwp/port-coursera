import Header from "./components/Header";
import Profile from "./components/Profile";
import ContactUs from "./components/ContactUs";
import Project from "./components/Project";
export default function App() {
	return (
		<div className="bg-black text-white min-h-screen p-5">
			{/* Header Section */}
			<Header></Header>

			{/* Profile Section */}
			<Profile></Profile>

			{/* Feature Projects Section */}
			<Project></Project>
			{/* Contact Section */}
			<ContactUs></ContactUs>
		</div>
	);
}
