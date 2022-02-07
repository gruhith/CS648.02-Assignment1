const NAME = "Gruhith Akula";

const element = (
	<div className="container border">
		<h1 className="border">{NAME}</h1>
		<img className="border" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80" width="300px" />
		<p>A Fullstack Web Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Big Data Analytics with an expected graduation date of May 2023. Actively seeking internships in Software Development for Summer 2022.</p>
		<a href="https://github.com/gruhith/CS-648.02" target="_blank">
			<button className="border"><h3>VIEW MY GITHUB REPO</h3></button>
		</a>
	</div>
);

ReactDOM.render(element, document.getElementById('root'));