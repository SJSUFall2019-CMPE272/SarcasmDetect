import React, {Component} from 'react';
import DashboardTopBar from './dashboardTopBar.js'
//import TableauReport from 'tableau-react';
import tableau from 'tableau-api';


class YukiReport extends Component {

  componentDidMount() {
    this.initViz();
    //   const response = fetch('https://10ay.online.tableau.com/api/3.6/auth/signin', {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: {
    //     "credentials": {
    //       "name": "Pranav Patil",
    //       "password": "RanjanIsOk272",
    //       "site": {
    //         "contentUrl": "yukisarcasmdetect"
    //       },
    //       "token": "4T_7nFnLQGK_WdIWhKhTtQ|yyKDYB4iU2lnW5FbBhpOg8aEckXab00x"
    //     }
    //   }
    //   }).then(() => {
    //
    //   })
    //
    // if(response.ok){
    //   console.log("Tableau Sign In");
    // }else {
    //   console.log("NOPE");
    // }


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

  // <script type='text/javascript' src='https://10ay.online.tableau.com/javascripts/api/viz_v1.js'></script><div class='tableauPlaceholder' style='width: 1000px; height: 827px;'><object class='tableauViz' width='1000' height='827' style='display:none;'><param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;yukisarcasmdetect' /><param name='name' value='Demo2&#47;Dashboard1' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /></object></div>

  initViz() {
    //const vizUrl = 'https://10ay.online.tableau.com/javascripts/api/viz_v1.js/yukisarcasmdetect/views/Demo2/Dashboard1?:showAppBanner=true&:display_count=n&:showVizHome=n&:origin=viz_share_link?:refresh=yes';
    const vizUrl = 'https://10ay.online.tableau.com/t/yukisarcasmdetect/views/Demo2/Dashboard1?:showAppBanner=true&:display_count=n&:showVizHome=n&:origin=viz_share_link?:refresh=yes';
    //const vizUrl = 'https://10ay.online.tableau.com/javascripts/api/viz_v1.js';
    //const vizUrl = 'https://10ay.online.tableau.com/t/yukisarcasmdetect/views/result/Dashboard1?:showAppBanner=true&:display_count=n&:showVizHome=n&:origin=viz_share_link?:refresh=yes'
    //const vizUrl = 'https://10ay.online.tableau.com/t/yukisarcasmdetect/views/testsql2/Dashboard1?:showAppBanner=true&:display_count=n&:showVizHome=n&:origin=viz_share_link?:refresh=yes';
    //const vizUrl = 'https://public.tableau.com/views/Demo1_15733466801170/Demo1?:display_count=y&:origin=viz_share_link';
    const vizContainer = this.vizContainer;
    let viz = new window.tableau.Viz(vizContainer, vizUrl)
  }

  render(){
    return(
      // <div class='tableauPlaceholder' style='width: 1000px; height: 827px;'>
      //   <object class='tableauViz' width='1000' height='827' style='display:none;'>
      //     <param name='host_url' value='https%3A%2F%2F10ay.online.tableau.com%2F' />
      //     <param name='embed_code_version' value='3' />
      //     <param name='site_root' value='&#47;t&#47;yukisarcasmdetect' />
      //     <param name='name' value='Demo2&#47;Dashboard1' />
      //     <param name='tabs' value='no' />
      //     <param name='toolbar' value='yes' />
      //     <param name='showAppBanner' value='false' />
      //   </object>
      // </div>
      // <div ref={(div) => { this.vizContainer = div }}>
      // </div>
      <div>

        <div ref={(div) => { this.vizContainer = div }}>
        </div>
        {/*
        <div onLoad={async ()  => {
          const response = await fetch('https://10ay.online.tableau.com/api/3.6/auth/signin', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: {
              "credentials": {
                "name": "pranav.patil@sjsu.edu",
                "password": "RanjanIsOk272",
                "site": {
                  "contentUrl": "yukisarcasmdetect"
                }
              }
            }
          })
          if(response.ok){
            console.log("Tableau Login");
          }
        }}>
        </div>*/}
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
