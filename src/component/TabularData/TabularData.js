import React from 'react';
import './TabularData.css';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class TabularData extends React.Component{
	
	render(){
		let tableDataValue = []
		let ECPM = 0;
		this.props.apiData.map((e,i) =>{
			ECPM = (e.revenue/e.impressions)*1000;
			tableDataValue.push({timestamp:e.timestamp,game:e.game,revenue:e.revenue,impressions:e.impressions,ecpm:ECPM});
		})
		const data = tableDataValue;
 
		const columns = [
			{
		    	Header: 'TimeStamp',
		    	accessor: 'timestamp' 
		  	},{
		    	Header: 'Game',
		    	accessor: 'game',
		  	},{
		    	Header: 'Revenue',
		    	accessor: 'revenue',
		  	},{
		    	Header: 'Impressions',
		    	accessor: 'impressions',
		  	},{
		    	Header: 'ECPM',
		    	accessor: 'ecpm',
		  	}
		]
 
		return(
				<div className="tableData">
					<h2>Table Format</h2>
					
					<ReactTable
					    data={data}
					    columns={columns}
  						pageSizeOptions= {[5, 10]}
  						defaultPageSize= {5}
					  />
				</div>
			)
	}
}

export default TabularData;