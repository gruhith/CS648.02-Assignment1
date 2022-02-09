const NAME = "Gruhith Akula";

const element = React.createElement(
	"div",
	{ className: "container border" },
	React.createElement(
		"h1",
		{ className: "border" },
		NAME
	),
	React.createElement("img", { className: "border", src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80", width: "300px" }),
	React.createElement(
		"p",
		null,
		"A Fullstack Web Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Big Data Analytics with an expected graduation date of May 2023. Actively seeking internships in Software Development for Summer 2022."
	),
	React.createElement(
		"a",
		{ href: "https://github.com/gruhith", target: "_blank" },
		React.createElement(
			"button",
			{ className: "border" },
			React.createElement(
				"h3",
				null,
				"VIEW MY GITHUB REPO"
			)
		)
	)
);

ReactDOM.render(element, document.getElementById('root'));
