import React, {Component} from 'react';
import DashboardTopBar from './dashboardTopBar.js'
//import TableauReport from 'tableau-react';
import tableau from 'tableau-api';


class YukiReport extends Component {

  componentDidMount() {
    this.initViz()
  }

  // initTableau() {
  //       const vizUrl =
  //           "https://public.tableau.com/views/Demo1_15733466801170/Demo1?:display_count=y&:origin=viz_share_link";
  //
  //       const options = {
  //           hideTabs: true,
  //           width: "800px",
  //           height: "800px",
  //           onFirstInteractive: () => {
  //               const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Table");
  //               const options = {
  //                   ignoreAliases: false,
  //                   ignoreSelection: false,
  //                   includeAllColumns: false
  //               };
  //               sheet.getUnderlyingDataAsync(options).then((t) => {
  //                   const tableauData = t.getData();
  //                   let data = [];
  //                   const pointCount = tableauData.length;
  //                   for(let a = 0; a < pointCount; a++ ) {
  //                       data = data.concat({
  //                           x: tableauData[a][0].value,
  //                           y: Math.round(tableauData[a][3].value,2)
  //                     })
  //                 };
  //             })
  //         }
  //     }
  //
  //     let viz = new window.tableau.Viz(this.container, vizUrl, options);
  //
  //   }


  initViz() {
    const vizUrl = 'https://public.tableau.com/views/Demo1_15733466801170/Demo1?:display_count=y&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }

  render(){
    return(
      <div ref={(div) => { this.vizContainer = div }}>
      </div>
    )
  }
}

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
