import React from 'react';
import './App.css';
import Chart from 'react-google-charts';
import Component from 'react-component-component';
//get data from local file (json) 
import json from './data/neo.json';

class LocalData extends Component {
  render() {
    return(
      <Component
        initialState={{ dataLoadingStatus: 'loading', chartData: [] }}
        didMount={async function(component) {

          const chartData = [['NEO Name', 'Min Estimated Diameter (KM)', 'Max Estimated Diameter (KM)']]
          for (let i = 0; i < json.page.size; i += 1) {
            chartData.push([json.near_earth_objects[i].name, 
              json.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_min, 
              json.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max])
          }      
                    
          // Sorting Data By descending Order
          chartData.sort(function(a,b) {
            return b[1]-a[1]
          });

          component.setState({
            dataLoadingStatus: 'ready',
            chartData: chartData
          })
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
                }
              }}
              
              rootProps={{ 'data-testid': '1' }}
            />
          ) : (
            <div>Fetching data from API</div>
          )
        }}
      </Component>
    );
  }
}

export default LocalData;

