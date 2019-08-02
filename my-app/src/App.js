import React  from 'react';
import './App.css';
import Chart from 'react-google-charts';
import Component from 'react-component-component';

class RemoteData extends React.Component {
  render() {
    return (
      <Component
        initialState={{ dataLoadingStatus: 'loading', chartData: [] }}
        didMount={async function(component) {
          try {
            //Get data of NASA API
            const response = await fetch(
              'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY',
            )
            if (!response.ok) {
              throw Error(response.statusText)
            }
            const json = await response.json()
  
            const chartData = [['NEO Name', 'Min Estimated Diameter (KM)', 'Max Estimated Diameter (KM)','Orbiting Body']]
            for (let i = 0; i < json.page.size; i += 1) {
              if (typeof json.near_earth_objects[i].close_approach_data[0] == 'undefined') {
                var x = 'Unknown'
              }
              else {
                x = json.near_earth_objects[i].close_approach_data[0].orbiting_body
              }
              chartData.push([json.near_earth_objects[i].name, 
                json.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_min, 
                json.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max,
                x])
            } 

                      
              // Sorting Data By descending Order
              chartData.sort(function(a,b) {
                return b[1]-a[1]
              });
              
              component.setState({
                dataLoadingStatus: 'ready',
                sortBy: ['Min Estimated Diameter (KM)'],
                chartData: chartData
              })
          }catch (error) {
            console.log(error)
          }
    
        }}
      >
        {component => {
          return component.state.dataLoadingStatus === 'ready' ? (
            <Chart
              chartType='BarChart'
              data={component.state.chartData}
              options={{
                chartArea: { width: '50%' },
                hAxis: {
                  title: 'Min Estimated Diameter (KM)',
                  minValue: 0
                },
                vAxis: {
                  title: 'Neo Name',
                },
              }}
              
              rootProps={{ 'data-testid': '1' }}
              chartWrapperParams={{ view: { columns: [0,1, 2] } }}
              chartPackages={['corechart', 'controls']}
              controls={[
                {
                  controlType: 'CategoryFilter',
                  options: {
                    filterColumnIndex: 3,
                    ui: {
                      labelStacking: 'vertical',
                      label: 'Orbiting Body:',
                      allowMultiple: false,
                    },
                  },
                },
              ]}
            />
          ) : (
            <div>Fetching data from API</div>
          )
        }}
      </Component>
    );
  }
}

export default RemoteData;
