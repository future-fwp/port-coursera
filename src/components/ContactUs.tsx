import React from "react";

const ContactUs = () => {
	return (
		<section
			id="contact"
			className="bg-gray-900 p-5 lg:p-10 rounded-lg"
		>
			<h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
			<form className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
				{/* Left Side Inputs */}
				<div className="flex flex-col space-y-4">
					<div>
						<label className="block mb-1">Name</label>
						<input
							type="text"
							className="w-full p-2 bg-gray-800 rounded"
							placeholder="Enter your name"
						/>
					</div>
					<div>
						<label className="block mb-1">Email address</label>
						<input
							type="email"
							className="w-full p-2 bg-gray-800 rounded"
							placeholder="Enter your email address"
						/>
					</div>
					<div>
						<label className="block mb-1">Country</label>
						<select className="w-full p-2 bg-gray-800 rounded">
							<option>Select your country</option>
							<option>Country 1</option>
							<option>Country 2</option>
						</select>
					</div>
				</div>

				{/* Right Side Inputs */}
				<div className="flex flex-col space-y-4">
					<label className="block mb-1">Message</label>
					<textarea
						className="w-full p-2 bg-gray-800 rounded h-32"
						placeholder="Enter your message"
					></textarea>
					<button className="bg-white text-black py-2 px-4 rounded mt-4 hover:bg-gray-300">Submit</button>
				</div>
			</form>
		</section>
	);
};

export default ContactUs;
