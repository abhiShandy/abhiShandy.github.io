var app = angular.module("abhishandy", []);

app.controller('mainCtrl', ['$scope', function($scope){
	$scope.sections = [{
		title: "education",
		points: [{
			completed: false,
			main: "Dual Degree (B.Tech & M.Tech) student, Department of Metallurgical and Materials Engineering, Indian Institute of Technology Madras, India",
			period: "2012 - 2017"
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
		title: "projects",
		points: [{
			main: "Modelling and Simulation of Dendritic Morphology in Solidification of undercooled melt using phase-field and lattice-Boltzmann method, under Dr. Gerald Tennyson and Dr. Mahesh Mynam, Process Engg. Department, TRDDC, Pune, India",
			period: "2015"
		}, {
			main: "Studying the role of Flow-Modifiers employed in Tundish, under Dr. Anil Kumar, R&D Department, TATA Steel, Jamshedpur, India",
			period: "2014"
		}]
	}, {
		title: "skills",
		points: [{
			main: "Frontend web-development: HTML5, CSS3, Javascript"
		}, {
			main: "Programming: Java, C, C++, Python"
		}, {
			main: "Engineering Softwares: MATLAB, SolidWorks, AutoCAD"
		}]
	}]
}]);