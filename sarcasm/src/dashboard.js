import React, {Component} from 'react';
import DashboardTopBar from './dashboardTopBar.js'
import TableauReport from 'tableau-react';


const YukiReport = props => (
  <TableauReport
    url="http://reports.my-site.com/my-workbook/my-report"
    token="<TRUSTED TICKET HERE>"
  />
)

//FOR MORE IMPLEMENTATION DETAILS:
//https://www.npmjs.com/package/tableau-react

class Dashboard extends React.Component {

  render(){
    return(
      <div>
        <DashboardTopBar/>
        <div>
          <YukiReport/>
        </div>
      </div>
    )
  }

}

export default Dashboard;
