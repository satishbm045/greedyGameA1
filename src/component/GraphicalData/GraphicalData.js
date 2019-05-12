import React from 'react';
import './GraphicalData.css'
import Highcharts from 'highcharts';

class GraphicalData extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			xDataValue: [],
			fromDateValue: 0,
			toDateValue: 0,
			useDate : 0
		}
	}
	componentDidMount(){
		var sortArr = this.props.apiData.sort();
		document.getElementById("fromdatefield").setAttribute("min", sortArr[0].timestamp);
		document.getElementById("todatefield").setAttribute("min", sortArr[0].timestamp);
		document.getElementById("fromdatefield").setAttribute("max", sortArr[sortArr.length - 1].timestamp);
		document.getElementById("todatefield").setAttribute("max", sortArr[sortArr.length - 1].timestamp);
		this.setState({
			fromDateValue: sortArr[0].timestamp,
			toDateValue: sortArr[sortArr.length - 1].timestamp
		})
		this.highChartsRender();		
	}
	highChartsRender() {		
		let xData = []
		let yData1 = [];
		let yData2 = [];
		var ecpm = 0;
		let fromDateValue = this.state.fromDateValue;
		let toDateValue = this.state.toDateValue;
		let seriesValue = ['Callbreak Multiplier','World Cricket Championship'];
		if(this.state.useDate == 0){
			this.props.apiData.forEach(function(e,i){
				ecpm = (e.revenue/e.impressions)*1000;
				if(e.game =='Callbreak Multiplier'){
					yData1.push(ecpm);
				}else{
					yData2.push(ecpm);
					xData.push(e.timestamp);
				}
			})
		}else{
			this.props.apiData.forEach(function(e,i){
				if(fromDateValue <= e.timestamp && toDateValue >= e.timestamp){
					ecpm = (e.revenue/e.impressions)*1000;
					if(e.game =='Callbreak Multiplier'){
						yData1.push(ecpm);
					}else{
						yData2.push(ecpm);
						xData.push(e.timestamp);
					}

				}
			})
		}
		this.setState({
			xDataValue: xData
		})
		Highcharts.chart('dataShow', {

		    title: {
		        text: ''
		    },

		    subtitle: {
		        text: ''
		    },
		    xAxis: {
		    	categories: xData,
		    	title: {
		    		text: 'Time Stamp'
		    	}
		    },
		    yAxis: {
		        title: {
		            text: 'ECPM'
		        }
		    },
		    legend: {
		        layout: 'vertical',
		        align: 'right',
		        verticalAlign: 'middle'
		    },

		    series: [
			    {
			        name: 'Callbreak Multiplier',
			        data: yData1
			    },
			    {
			        name: 'World Cricket Championship',
			        data: yData2
			    }
		    ],

		    responsive: {
		        rules: [{
		            condition: {
		                maxWidth: 500
		            },
		            chartOptions: {
		                legend: {
		                    layout: 'horizontal',
		                    align: 'center',
		                    verticalAlign: 'bottom'
		                }
		            }
		        }]
		    }

		});
	}
	fromDate = (event) =>{
		this.setState({
			fromDateValue: event.target.value
		})
	}
	toDate = (event) =>{
		this.setState({
			toDateValue: event.target.value
		})	
	}
	dateSubmit = () =>{
		if(this.state.fromDateValue > this.state.toDateValue){
			alert("Enter correct date Range");
			return;
		}
		this.setState({
			useDate: 1
		})
		this.highChartsRender();
	}
	render(){
		return(
			<div>
				<div className="dateRange">
					From Date:<input className="field" id="fromdatefield" type="date" onChange={this.fromDate}/>
					To Date:<input className="field" id="todatefield" type="date" onChange={this.toDate}/>
					<button className="field" onClick={this.dateSubmit}>Submit</button>
				</div>
				<div className="GraphData">
					<div id="dataShow"></div>
				</div>
			</div>
		)
	}
}

export default GraphicalData;