import React from 'react';
import Chart from "react-google-charts";



function ChartContainer({data, type}) {


  const chartData = data.map(item => {
    return [item.name, item.amount.value]
  });

  if(type === "Malt") {
    chartData.unshift([type, "kilograms"])
  }

  if(type === "Hops") {
    chartData.unshift([type, "grams"])
  }

  return (
    <>
      <Chart
        width={'100%'}
        height={'250px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          legend:'bottom',
          title: `Types of ${type}`,
          sliceVisibilityThreshold: 0.1,
          colors: ['#D06400', '#FC880F', '#FDB23E', '#f8b95b', '#f1c685'],
          fontSize: 16,
          fontName:'Roboto'
        }}
        rootProps={{ 'data-testid': '7' }}
      />
    </>
  );
}

export default ChartContainer;







