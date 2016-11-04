"use strict";

/****************************************
* Alert Widget
****************************************/
$(".alert span:last-child").click( function() {
	$(".alert").hide();
	$("#bell-icon").hide();
});



/****************************************
* Traffic Chart Widget
****************************************/
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
					week: 'MMM D YYYY'
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
}

var trafficChart = $("#traffic-chart");

var trafficLineChart = new Chart(trafficChart, {
    type: 'line',
    data: data,
    options: options
});


