var img_pie

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['Work', 8],
  ['Friends', 2],
  ['Eat', 2],
  ['TV', 2],
  ['Gym', 2],
  ['Sleep', 8]
]);

  // Optional; add a title and set the width and height of the chart
  // var options = {'title':'My Average Day', 'width':550, 'height':400};
  var options = {
      legend:{position:'none'}, 
      chartArea:{left:0,top:0,width:'100%',height:'95%'}, 
      pieHole: 0.3,
      pieStartAngle: 100,
      sliceVisibilityThreshold: .2,
      pieSliceText:'label',
      pieResidueSliceColor: '#ccc',
      pieResidueSliceLabel: 'Outros',
      backgroundColor: 'transparent'}

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  // Wait for the chart to finish drawing before calling the getImageURI() method.
  google.visualization.events.addListener(chart, 'ready', function () {
    //chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
    document.getElementById("grafico-torta").src= chart.getImageURI();
    //console.log(chart_div.innerHTML);
  });

  chart.draw(data, options);
 
}