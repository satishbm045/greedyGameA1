import React from 'react';
import './App.css';
import TabularData from './component/TabularData/TabularData';
import GraphicalData from './component/GraphicalData/GraphicalData';
// import {BrowserRouter, Route,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {GetData} from './reducer/Action/Action'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
			dates: {
        fromDate: '',
        toDate: ''
      }
		}
  }
  componentDidMount() {
    this.props.dispatch(GetData())
  }
  dateSelect = (fromDate,toDate) =>{
    this.setState({
      dates.fromDate : fromDate,
      dates.toDate : toDate
    })
  }
  render(){
	  console.log(this.state.dates);
    return (
      <div className="mainApp">
        <div className="graphBlock">
          { !this.props.apiData.loading && this.props.apiData.posts &&
            <GraphicalData apiData={this.props.apiData.posts} dateSelect={this.dateSelect}/>
          }
        </div>
        <div className="tableBlock">
          { !this.props.apiData.loading && this.props.apiData.posts &&
            <TabularData apiData={this.props.apiData.posts}/>
          }
        </div>
      </div>
    )
  }
}

const mapStoreToProps = (store) => {
    return {
      apiData : store.dataReducer
    }
}
export default connect(mapStoreToProps)(App);
