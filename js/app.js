var app = angular.module("abhishandy", []);

app.controller('mainCtrl', ['$scope', function($scope){
	$scope.sections = [{
		title: "education",
		points: [{
			completed: false,
			main: "Dual Degree (B.Tech & M.Tech), Department of Metallurgical and Materials Engineering, Indian Institute of Technology Madras, India",
			period: "2017"
		}, {
			completed: true,
			main: "Class XII, ISC Board, DBMS English School, Jamshedpur, India",
			period: "2012"
		}, {
			completed: true,
			main: "Class X, ICSE Board, DBMS English School, Jamshedpur, India",
			period: "2010"
		}]
	}, {
		title: "professional experience",
		points: [{
			main: "Project Trainee, TRDDC, Pune, India",
			period: "2015"
		}, {
			main: "Intern as Front end web-developer, AdWyze, Bangalore, India",
			period: "2014"
		}, {
			main: "Intern, R&D Department, Tata Steel, Jamshedpur, India",
			period: "2014"
		}]
	}, {
		title: "projects",
		points: [{
			main: "Modelling and Simulation of Frank-Read source, IIT Madras",
			period: "2015"
		}, {
			main: "Compaction and Sintering of Alumina, IIT Madras",
			period: "2015"
		}, {
			main: "Modelling and Simulation of Dendritic Morphology in Solidification of undercooled melt using phase-field and lattice-Boltzmann method, under Dr. Gerald Tennyson and Dr. Mahesh Mynam, Process Engg. Department, TRDDC, Pune, India",
			period: "2015"
		}, {
			main: "Studying the role of Flow-Modifiers employed in Tundish, under Dr. Anil Kumar, R&D Department, TATA Steel, Jamshedpur, India",
			period: "2014"
		}]
	}, {
		title: "skills",
		points: [{
			main: "Front end web-development: HTML5, CSS3, Javascript"
		}, {
			main: "Programming: Java, C, C++, Python"
		}, {
			main: "Engineering Softwares: MATLAB, SolidWorks, AutoCAD"
		}]
	},
	// {
	// 	title: "interests",
	// 	points: [{
	// 		main: "Numerical methods"
	// 	}, {
	// 		main: "Computational materials science"
	// 	}, {
	// 		main: "Composites"
	// 	}]
	// },
	// {
	// 	title: "extra-curricular activities",
	// 	points: [{
	// 		main: "Basketball"
	// 	}]
	// }
	// {
	// 	title: "co-curricular activities",
	// 	points: [{
	// 		main: "Led the school team in QUANTA, an International competition"
	// 	}]
	// }
	]
}]);