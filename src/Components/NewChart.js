import React,{useState, useEffect, useCallback} from "react";
import { Bar } from 'react-chartjs-2';
import { debounce } from "lodash";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const NewChart = () => {

    const [labels, setLabels] = useState('')
    
    const [values, setValues] = useState('')

    useEffect(() => {
       const labelsArr = labels.split(',')
       if(labelsArr.length) {
            setData({labels:labelsArr, datasets: data.datasets})
            console.log(labels)
       }
    },[labels])
    
    useEffect(() => {
        const valuesArr = values.split(',')
        if(valuesArr.length) {
            setData({labels: data.labels, datasets:[{...data.datasets[0],  data: valuesArr}]})
            console.log(valuesArr)
        }
    },[values])

    const [data, setData] = useState(
        {
            labels:[],
            datasets:[
                {
                    data: [],
                    label: "Data",
                    borderColor: "#3333ff",
                    backgroundColor: "rgba(0, 0, 255, 0.5)",
                    fill: true
                }
            ]
        }
    );

    const barChartData = {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            data: [1,5,10,1,2],
            label: "Data",
            borderColor: "#3333ff",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            fill: true
          }
        ]
    };

    return(
        <div>
            <form  noValidate>
                <input
                    name="first"
                    value={labels}
                    onChange={(e) => setLabels(e.target.value)}
                    style={{width:"250px", height:"30px"}}
                    placeholder="Your Name"
                    type="text"
                    required                     
                />
                <input
                    value={values}
                    name="second"
                    onChange={(e) => setValues(e.target.value)}
                    style={{width:"250px", height:"30px"}}
                    placeholder="Number"
                    type="text"
                    required                     
                />
            </form>

            <Bar
                width={130}
                height={50}
                /*options={{
                    title: {
                        display: true,
                        text: "COVID-19 Cases of Last 3 Months",
                        fontSize: 15
                    },
                    legend: {
                        display: true, //Is the legend shown?
                        position: "top" //Position of the legend.
                    }
                }}
                */
                data={data}
            />
        </div>
    
    )
}

export default NewChart;