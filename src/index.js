$(function() {
 
 // Signin form popup
	$(".signin-link").on('click', function() {
	  $(".logindiv").css("display", "block");	
  });

// Login form popup login-button click event.

// Signup form popup
  $('.signup-link').on('click', function() {
  	$('.signupdiv').css('display', 'block');
  });


// Session completed highcharts
  $('.user-chart').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Average sessions completed during one week'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            plotBands: [{ // visualize the weekend
                from: 4.5,
                to: 6.5,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Minutes'
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' sessions'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'John',
            data: [3, 4, 3, 5, 4, 10, 12]
        }]
    });

});

