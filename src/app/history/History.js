import React, { useState, useEffect, useRef } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';
import { Form } from 'react-bootstrap';
import axios from "axios";

function History() {
  //convert F to C
  function convertToC(f) {
    var celcius = ((f - 32) * 5 / 9).toFixed(2)
    return celcius;
  }

  //convert hpa to inHg
  function convertToInHg(hpa) {
    var inHg = (hpa * 33.86389).toFixed(1)
    return inHg;
  }

  //convert Time
  function convertTime(unix) {
    var date = new Date(unix * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Will display time in 00.00 format
    var formattedTime = hours + '.' + minutes.substr(-2);
    return formattedTime
  }
  
  //Date
  const [date, setDate] = useState()

  //Export excel
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: 'HistoryDataWS ' + date,
    sheet: 'Medco WS Ijen'
  })
  // console.log("Date", date)
  //Data
  const [check, setCheck] = useState([])
  const [IH, setIH] = useState([]);
  const [IT, setIT] = useState([]);
  const [OH, setOH] = useState([]);
  const [OT, setOT] = useState([]);
  const [SO, setSO] = useState([]);
  const [UV, setUV] = useState([]);
  const [PA, setPA] = useState([]);
  const [PR, setPR] = useState([]);
  const [RD, setRD] = useState([]);
  const [RE, setRE] = useState([]);
  const [RH, setRH] = useState([]);
  const [RM, setRM] = useState([]);
  const [RR, setRR] = useState([]);
  const [RW, setRW] = useState([]);
  const [RY, setRY] = useState([]);

  const appKey = "8DA3747EF84A37915E2238B11D0FC35A"
  const macAddress = "C4:5B:BE:5D:AD:C9"
  const apiKey = "b4aa34cc-64f2-4835-a05f-ce07ecd88c78"

  const url = `https://api.ecowitt.net/api/v3/device/history?application_key=${appKey}&api_key=${apiKey}&mac=${macAddress}&start_date=${date} 00:00:00&end_date=${date} 23:59:59&cycle_type=auto&call_back=auto&call_back=outdoor,indoor,rainfall,solar_and_uvi,pressure`

  //console.log(url)

  useEffect(() => {
    axios.get(url)
      .then(res => {
        // console.log(res.data.data);
        setCheck(res.data.data)
        setIH(res.data.data.indoor.humidity.list);
        setIT(res.data.data.indoor.temperature.list);
        setOH(res.data.data.outdoor.humidity.list);
        setOT(res.data.data.outdoor.temperature.list);
        setSO(res.data.data.solar_and_uvi.solar.list);
        setUV(res.data.data.solar_and_uvi.uvi.list);
        setPA(res.data.data.pressure.absolute.list);
        setPR(res.data.data.pressure.relative.list);
        setRD(res.data.data.rainfall.daily.list);
        setRE(res.data.data.rainfall.event.list);
        setRH(res.data.data.rainfall.hourly.list);
        setRM(res.data.data.rainfall.monthly.list);
        setRR(res.data.data.rainfall.rain_rate.list);
        setRW(res.data.data.rainfall.weekly.list);
        setRY(res.data.data.rainfall.yearly.list);
      })
      .catch(res => console.log(res))
  }, [date]);

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> History </h3>
        <div>
          <button onClick={onDownload} type="button" className="btn btn-info btn-icon-text">
            <i className="mdi mdi-printer btn-icon-append"></i> Print
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">History Weather Station</h3>
              <form className="form-sample">
                <div className="row">
                  <div className="col-md-4">
                    <Form.Group className="row">
                      <label className="col-sm-3 col-form-label">Date : </label>
                      <div className="col-sm-9">
                        <input type="date" onChange={e => setDate(e.target.value)} />
                      </div>
                    </Form.Group>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-12 grid-margin ">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">Table Date History Weather Station</h4>
              <div className="table-responsive">
                <table className="table table-bordered" ref={tableRef}>
                  <tbody>
                    <tr>
                      <th rowSpan="2" className="table-dark text-center"> Time </th>
                      <th colSpan="2" className="table-dark text-center"> Indoor </th>
                      <th colSpan="2" className="table-dark text-center"> Outdoor </th>
                      <th colSpan="2" className="table-dark text-center"> Solar & Uvi </th>
                      <th colSpan="2" className="table-dark text-center"> Pressure </th>
                      <th colSpan="7" className="table-dark text-center"> Rainfall </th>
                    </tr>
                    <tr className="text-center">
                      <th className="table-dark">Humidity(%)</th>
                      <th className="table-dark">Temperature(ºC)</th>
                      <th className="table-dark">Humidity(%)</th>
                      <th className="table-dark">Temperature(ºC)</th>
                      <th className="table-dark">Solar(W/m²)</th>
                      <th className="table-dark">Uvi</th>
                      <th className="table-dark">Absolute(inHg)</th>
                      <th className="table-dark">Relative(inHg)</th>
                      <th className="table-dark">Daily(in)</th>
                      <th className="table-dark">Event(in)</th>
                      <th className="table-dark">Hourly(in)</th>
                      <th className="table-dark">Monthly(in)</th>
                      <th className="table-dark">Rain Rate(in/hr)</th>
                      <th className="table-dark">Weekly(in)</th>
                      <th className="table-dark">Yearly(in)</th>
                    </tr>
                    {
                      Object.keys(IH, IT, OH, OT, SO, UV, PA, PR, RD, RE, RH, RM, RR, RW, RY).map((key, index) => {
                        if (check.length == 0) {
                          return (
                            <tr key={index}></tr>
                          )
                        } else {
                          return (
                            <tr className="text-center" key={index}>
                              <td>{convertTime(key)}</td>
                              <td>{IH[key]}</td>
                              <td>{convertToC(IT[key])}</td>
                              <td>{OH[key]}</td>
                              <td>{convertToC(OT[key])}</td>
                              <td>{SO[key]}</td>
                              <td>{UV[key]}</td>
                              <td>{convertToInHg(PA[key])}</td>
                              <td>{convertToInHg(PR[key])}</td>
                              <td>{RD[key]}</td>
                              <td>{RE[key]}</td>
                              <td>{RH[key]}</td>
                              <td>{RM[key]}</td>
                              <td>{RR[key]}</td>
                              <td>{RW[key]}</td>
                              <td>{RY[key]}</td>
                            </tr>
                          )
                        }
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History
