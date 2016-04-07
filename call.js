
function drawChart(whichclass,whichcontainer, title) {
var maxrows=$( "#chartMax" ).val();

var count=1;
	$(".countryG").each(function(){
	 count++;
	});

	 var totalA = 0;
    		var x = document.getElementsByClassName("tdarearea");
		var i;
		for (i = 0; i < maxrows; i++) {
    			totalA+= parseInt(x[i].innerHTML);
		}
	 var totalP = 0;
    		var x = document.getElementsByClassName("tdpopop");
		var i;
		for (i = 0; i < maxrows; i++) {
    			totalP+= parseInt(x[i].innerHTML);
		}

var OthersA = parseInt($("#totala").html()) - parseInt(totalA);
var OthersP= parseInt($("#totalp").html()) - parseInt(totalP);
//alert(OthersA+" "+OthersP);
var chart = new Highcharts.Chart({
    chart: {
        renderTo: 'container'+whichcontainer,
        type: 'pie'
    },
   title: {
	text: title
   },tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},

    series: [{
        data: []
    }]
});	
var arrayOfMetric =new Array();
var y;
var x;
var area;
var popu;

$("#tableP tbody").find("tr").each(function(i, obj) {
	
	x=$(this).find("td:eq(1)").html();
	area=$(this).find("td:eq(2)");
	popu=$(this).find("td:eq(3)");
	if($(area).hasClass("tdarearea") && whichclass==".tdarearea")
	{
		y=parseInt(area.html());
		arrayOfMetric[0]= {name:"Others",y:OthersA};
		arrayOfMetric[i+1]= {name:x,y:y};
		
	}
	 if($(popu).hasClass("tdpopop") && whichclass==".tdpopop")
	{
		y=parseInt(popu.html());
		arrayOfMetric[0]= {name:"Others",y:OthersP};
		arrayOfMetric[i+1]= {name:x,y:y};	
	}
	
	if(i==parseInt(maxrows)-1 || i==parseInt(count))
	{
		chart.series[0].setData(arrayOfMetric, true);
		return false;
	}	 	
});
 

}

$( document ).ready(function() {
	$( "#continent" ).prop( "disabled", true );	
	$( "#metric" ).prop( "disabled", true );	
	$( "#chartMax" ).prop( "disabled", true );
	$( "#tableP" ).hide();
	
	$( "#containerP" ).css( "cursor", "not-allowed" );
});

$('#button').click(function () {
	$( "#continent" ).prop( "disabled", false );	
	$( "#metric" ).prop( "disabled", false );	
	$( "#chartMax" ).prop( "disabled", false );
	$( "#containerP" ).css( "cursor", "default" );
	$( "#tableP" ).show();
	
	drawChart(".tdarearea","ma", "Area in sqkm");
	drawChart(".tdpopop", "mp", "Population");
});
$('#continent').click(function () {
		
	drawChart(".tdarearea","ma", "Area in sqkm");
	drawChart(".tdpopop", "mp", "Population");
});
$('#metric').click(function () {
	if($(this).val() == "areaInSqKm")
	{
		$("#tdarea").show();
		$(".tdarearea").show();
		$("#containerma").show();
		$("#totala").show();
		drawChart(".tdarearea","ma", "Area in sqkm");
		$("#tdpop").hide();
		$("#containermp").hide();
		$(".tdpopop").hide();
		$("#totalp").hide();
	}
	else if($(this).val() == "population")
	{	
		$("#tdpop").show();
		$(".tdpopop").show();
		$("#containermp").show();
		$("#totalp").show();
		drawChart(".tdpopop", "mp", "Population");
		$("#tdarea").hide();
		$("#containerma").hide();
		$(".tdarearea").hide();
		$("#totala").hide();
	}
	else
	{
		$("#containermp").show();
		$("#containerma").show();
		$("#tdpop").show();
		$(".tdpopop").show();
		$("#totala").show();
		$("#containermp").show();
		$("#tdarea").show();
		$(".tdarearea").show();
		$("#containerma").show();
		$("#totalp").show();
		drawChart(".tdarearea","ma", "Area in sqkm");
		drawChart(".tdpopop", "mp", "Population");
	}
});
$('#chartMax').click(function () {

	drawChart(".tdarearea","ma", "Area in sqkm");
	drawChart(".tdpopop", "mp", "Population");
});
$('.tdfetch').click(function () {
	drawChart(".tdarearea","ma", "Area in sqkm");
	drawChart(".tdpopop", "mp", "Population");
});


