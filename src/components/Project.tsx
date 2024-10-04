import React from "react";
const ProjectName = [
	{
		name: "React Project Title1",
		description: "React project description1",
		image: "https://via.placeholder.com/150",
	},
	{
		name: "React Project Title2",
		description: "React project description2",
		image: "https://via.placeholder.com/150",
	},
	{
		name: "React Project Title3",
		description: "React project description3",
		image: "https://via.placeholder.com/150",
	},
	{
		name: "React Project Title4",
		description: "React project description4",
		image: "https://via.placeholder.com/150",
	},
];
const Project = () => {
	return (
		<section
			id="projects"
			className="mb-16"
		>
			<h2 className="text-2xl font-bold mb-6 text-center">Feature Project</h2>
			<div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
				{/* Project Cards */}
				{ProjectName &&
					ProjectName.map((each, index) => (
						<div
							key={index}
							className="bg-gray-800 p-4 rounded-md shadow-md"
						>
							<div className="h-32 lg:h-40 mb-4">
								<img
									className="object-cover w-full h-full rounded-md"
									src={each.image}
									alt={each.name}
								/>
							</div>
							<h3 className="text-lg lg:text-xl font-semibold mb-2">{each.name}</h3>
							<p className="text-sm mb-4">{each.description}</p>
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
