"use strict";

/****************************************
* Alert Widget
****************************************/
$(".alert span:last-child").click( function() {
	$(".alert").hide();
	$("#bell-icon").hide();
});



/****************************************
* Traffic Line Chart Widget
****************************************/

// remove highlight from traffic buttons
function removeHighlight () {
	$(".traffic-hour").removeClass("traffic-selected");
	$(".traffic-day").removeClass("traffic-selected");
	$(".traffic-week").removeClass("traffic-selected");
	$(".traffic-month").removeClass("traffic-selected");
}

// Setup on load
var data = {
    labels: ["Aug 15 2016", "Aug 22 2016", "Aug 29 2016", "Sep 2 2016", "Sep 9 2016", "Sep 16 2016", "Sep 23 2016", "Sep 26 2016", "Oct 3 2016", "Oct 10 2016", "Oct 17 2016", "Oct 24 2016", "Oct 31 2016"],
    datasets: [
        {
            label: "TRAFFIC",
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(116,119,191,0.2)",
			borderWidth: 1,
            borderColor: "rgba(116,119,191,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(116,119,191,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: "rgba(116,119,191,1)",
            pointHoverBorderColor: "rgba(116,119,191,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 7,
            pointHitRadius: 10,
            data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
            spanGaps: false,
        }
    ]
};

var options = {
	responsive: true,
	responsiveAnimationDuration: 500,
	maintainAspectRatio: false,
	legend: {
		display: false
	},
	scales: {
		xAxes: [{
			type: 'time',
			time: {
				displayFormats: {
					week: 'MMM D'
				},
				unit: 'week'
			}
		}],
		yAxes: [{
			type: 'linear',
			ticks: {
				beginAtZero:true,
				max: 2500,
				stepSize: 500
			},
		}]
	}
};

var trafficChart = $("#traffic-chart");

var trafficLineChart = new Chart(trafficChart, {
	type: 'line',
	data: data,
	options: options
});

// Change chart when hour button is clicked
$(".traffic-hour").click( function () {
	
	// highlight Day button
	removeHighlight();
	$(".traffic-hour").addClass("traffic-selected");
		
	// Make a new chart
	data.labels = ["Nov 1 2016 00:00:00", "Nov 1 2016 01:00:00", "Nov 1 2016 02:00:00", "Nov 1 2016 03:00:00", "Nov 1 2016 04:00:00", "Nov 1 2016 05:00:00", "Nov 1 2016 06:00:00", "Nov 1 2016 07:00:00", "Nov 1 2016 08:00:00", "Nov 1 2016 09:00:00", "Nov 1 2016 10:00:00", "Nov 1 2016 11:00:00", "Nov 1 2016 12:00:00", "Nov 1 2016 13:00:00", "Nov 1 2016 14:00:00", "Nov 1 2016 15:00:00", "Nov 1 2016 16:00:00", "Nov 1 2016 17:00:00", "Nov 1 2016 18:00:00", "Nov 1 2016 19:00:00", "Nov 1 2016 20:00:00", "Nov 1 2016 21:00:00", "Nov 1 2016 22:00:00", "Nov 1 2016 23:00:00"];
	data.datasets[0].data = [9, 7, 1, 2, 0, 3, 8, 28, 87, 21, 15, 45, 72, 32, 12, 9, 10, 27, 22, 25, 16, 13, 19, 8];
	
	options.scales.xAxes[0].time.unit = "hour";
	options.scales.xAxes[0].time.displayFormats.hour = "h a";
	options.scales.yAxes[0].ticks.max = 100;
	options.scales.yAxes[0].ticks.stepSize = 20;
	
	trafficLineChart.destroy();
	trafficLineChart = new Chart(trafficChart, {
		type: 'line',
		data: data,
		options: options
	});
});

// Change chart when day button is clicked
$(".traffic-day").click( function () {
	
	// highlight Day button
	removeHighlight();
	$(".traffic-day").addClass("traffic-selected");
		
	// Make a new chart
	data.labels = ["Oct 31 2016", "Nov 1 2016", "Nov 2 2016", "Nov 3 2016", "Nov 4 2016", "Nov 5 2016", "Nov 6 2016"];
	data.datasets[0].data = [115, 157, 138, 215, 256, 312, 78];
	
	options.scales.xAxes[0].time.unit = "day";
	options.scales.xAxes[0].time.displayFormats.day = "dddd";
	options.scales.yAxes[0].ticks.max = 500;
	options.scales.yAxes[0].ticks.stepSize = 100;
	
	trafficLineChart.destroy();
	trafficLineChart = new Chart(trafficChart, {
		type: 'line',
		data: data,
		options: options
	});
});

// Change chart when week button is clicked
$(".traffic-week").click( function () {
	
	// highlight Week button
	removeHighlight();
	$(".traffic-week").addClass("traffic-selected");
		
	// Make a new chart
	data.labels = ["Aug 15 2016", "Aug 22 2016", "Aug 29 2016", "Sep 2 2016", "Sep 9 2016", "Sep 16 2016", "Sep 23 2016", "Sep 26 2016", "Oct 3 2016", "Oct 10 2016", "Oct 17 2016", "Oct 24 2016", "Oct 31 2016"];
	data.datasets[0].data = [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000];
	
	options.scales.xAxes[0].time.unit = "week";
	options.scales.xAxes[0].time.displayFormats.week = 'MMM D';
	options.scales.yAxes[0].ticks.max = 2500;
	options.scales.yAxes[0].ticks.stepSize = 500;
	
	trafficLineChart.destroy();
	trafficLineChart = new Chart(trafficChart, {
		type: 'line',
		data: data,
		options: options
	});
});

// Change chart when month button is clicked
$(".traffic-month").click( function () {
	
	// highlight Month button
	removeHighlight();
	$(".traffic-month").addClass("traffic-selected");
		
	// Make a new chart
	data.labels = ["Aug 1 2016", "Sep 1 2016", "Oct 1 2016", "Nov 1 2016"];
	data.datasets[0].data = [0, 2250, 5750, 8000];
	
	options.scales.xAxes[0].time.unit = "month";
	options.scales.xAxes[0].time.displayFormats.month = 'MMM';
	options.scales.yAxes[0].ticks.max = 10000;
	options.scales.yAxes[0].ticks.stepSize = 2000;
	
	trafficLineChart.destroy();
	trafficLineChart = new Chart(trafficChart, {
		type: 'line',
		data: data,
		options: options
	});
});


/****************************************
* Daily Traffic Bar Chart Widget
****************************************/
// Setup on load
var dataBar = {
    labels: ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
        {
            label: "TRAFFIC",
			backgroundColor: "#7477bf",
			borderColor: "#7477bf",
            data: [115, 157, 138, 215, 256, 312, 78],
        },
        {
            label: "TRAFFIC",
			backgroundColor: "#4d4c72",
			borderColor: "#4d4c72",
            data: [273, 185, 150, 205, 456, 442, 198],
        }
   ]
};

var optionsBar = {
	responsive: true,
	responsiveAnimationDuration: 500,
	maintainAspectRatio: false,
	legend: {
		display: false
	},
	scales: {
		xAxes: [{
			type: 'category',
			time: {
				displayFormats: {
					day: 'dddd'
				},
				unit: 'day'
			},
			gridLines: {
				offsetGridLines: true
			}
		}],
		yAxes: [{
			type: 'linear',
			ticks: {
				beginAtZero:true,
				max: 500,
				stepSize: 100
			}
		}]
	}
};

var dailyChart = $("#daily-chart");

var dailyBarChart = new Chart(dailyChart, {
	type: 'bar',
	data: dataBar,
	options: optionsBar
});


/****************************************
* Device Used Doughnut Chart Widget
****************************************/
// Setup on load
var dataDoughnut = {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
        {
            label: "DEVICE",
			borderColor: [
				"#7477bf",
				"#81c98f",
				"#4d4c72",
			],
			backgroundColor: [
				"#7477bf",
				"#81c98f",
				"#4d4c72",
			],
            data: [25, 15, 55],
        },
   ]
};

var optionsDoughnut = {
	responsive: true,
	responsiveAnimationDuration: 500,
	maintainAspectRatio: false,
	legend: {
		display: true,
		position: "right"
	}
};

var deviceChart = $("#device-chart");

var deviceDoughnutChart = new Chart(deviceChart, {
	type: 'doughnut',
	data: dataDoughnut,
	options: optionsDoughnut
});
