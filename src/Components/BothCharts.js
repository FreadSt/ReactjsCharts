import React,{useState, useEffect} from "react";
import { Switch } from "@mui/material";
import {Bar, Line} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {

    const [labels, setLabels] = useState('')
    const [values, setValues] = useState('')
    const [toggle, setToggle] = useState(false)
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

    const toggleTrueFalse = () => setToggle(!toggle);

    return(
        <div className="inputs">
            <form  noValidate>
                <input
                    className="first"
                    value={labels}
                    onChange={(e) => setLabels(e.target.value)}
                    style={{width:"250px", height:"25px", padding:"10px"}}
                    placeholder="Your Name"
                    type="text"
                    required                     
                />
                <input
                    value={values}
                    className="second"
                    onChange={(e) => setValues(e.target.value)}
                    style={{width:"250px", height:"25px", padding:"10px"}}
                    placeholder="Number"
                    type="text"
                    required                     
                />
            </form>
            
            <Switch onClick={toggleTrueFalse}
                    className="switch"
            />
            
            <div className="charts">
                
                {toggle ? <Bar width={130}
                            height={42}
                            data={data}
                                        /> : 
                                            <Line width={130}
                                                height={42}
                                                data={data}
                                                style={{backgroundColor:"#bebdbd"}}
                                                            />
            }
        </div>
        </div>
    )
}

export default LineChart;
