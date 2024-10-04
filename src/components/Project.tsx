import React from "react";

const Project = () => {
	return (
		<section
			id="projects"
			className="mb-16"
		>
			<h2 className="text-2xl font-bold mb-6 text-center">Feature Project</h2>
			<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{/* Project Cards */}
				{Array(4)
					.fill(0)
					.map((_, index) => (
						<div
							key={index}
							className="bg-gray-800 p-4 rounded-md shadow-md"
						>
							<div className="bg-gray-400 h-32 lg:h-40 mb-4"></div>
							<h3 className="text-lg lg:text-xl font-semibold mb-2">React Project Title</h3>
							<p className="text-sm mb-4">React project description</p>
							<a
								href="#"
								className="text-blue-400 hover:underline"
							>
								See more →
							</a>
						</div>
					))}
			</div>
		</section>
	);
};

export default Project;
