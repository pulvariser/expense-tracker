import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'


const Chart = (props) => {
  // console.log(props.chartDataPoints)
      
  let priceArray = props.chartDataPoints.map(row => row.price)

  
   let maxPrice = Math.max(...priceArray)
//  console.log(maxPrice)

  return (
    <div className='chart'>
         
         {
          props.chartDataPoints.map((record,index)=>{
            return (
              <ChartBar key={index} label = {record.label} value={record.price} maxValue={maxPrice} />
              
            )
          })
         }

    </div>
  )
}

export default Chart
