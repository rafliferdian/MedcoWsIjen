import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import axios from "axios";
import DatePicker from "react-datepicker";
import bsCustomFileInput from 'bs-custom-file-input';
import ReactExport from 'react-data-export';

const refreshPage = () => {
  window.location.reload();

}

function History() {
  //Date
  const [date, setDate] = useState()
  console.log("Date", date)
  //ComponentDidMount
  const [stateValue, useStateValue] = useState();
  useEffect(() => {
    bsCustomFileInput.init()
  }, [stateValue]);

  const baseUrl1 = 'https://api.ecowitt.net/api/v3/device/history?application_key=8DA3747EF84A37915E2238B11D0FC35A&api_key=b4aa34cc-64f2-4835-a05f-ce07ecd88c78&mac=C4:5B:BE:5D:AD:C9&start_date='
  const baseUrl2 = '&cycle_type=auto&call_back=outdoor,indoor,rainfall,solar_and_uvi,pressure'
  axios.get(baseUrl1 + date + ' 00:00:00&end_date=' + date + ' 23:59:59' + baseUrl2)
    .then(response => {
      // console log
      console.log(response)
      // Indoor Humidity & Outdoor
      const IH = response.data.data.indoor.humidity.list
      Object.values(IH).map(IH => console.log("indoor Humidity: "+IH))
      const IT = response.data.data.indoor.temperature.list
      Object.values(IT).map(IT => console.log("indoor Temperature: "+IT))
      // Outdoor Humidity & Outdoor
      const OH = response.data.data.outdoor.humidity.list
      Object.values(OH).map(OH => console.log("outdoor Humidity: "+OH))
      const OT = response.data.data.outdoor.temperature.list
      Object.values(OT).map(OT => console.log("outdoor Temperature: "+OT))
      // Solar and Uvi
      const SU = response.data.data.solar_and_uvi.solar.list
      Object.values(SU).map(SU => console.log("Solar : "+SU))
      const SV = response.data.data.solar_and_uvi.uvi.list
      Object.values(SV).map(SV => console.log("uvi: "+SV))
      // Pressure
      const PR = response.data.data.pressure.absolute.list
      Object.values(PR).map(PR => console.log("pressure absolute: "+PR))
      const PS = response.data.data.pressure.relative.list
      Object.values(PS).map(PS => console.log("pressure relative: "+PS))
      // Rainfall
      const RD = response.data.data.rainfall.daily.list
      Object.values(RD).map(RD => console.log("rainfall daily: "+RD))
      const RE = response.data.data.rainfall.event.list
      Object.values(RE).map(RE => console.log("rainfall event: "+RE))
      const RH = response.data.data.rainfall.hourly.list
      Object.values(RH).map(RH => console.log("rainfall hourly: "+RH))
      const RM = response.data.data.rainfall.monthly.list
      Object.values(RM).map(RM => console.log("rainfall monthly: "+RM))
      const RR = response.data.data.rainfall.rain_rate.list
      Object.values(RR).map(RR => console.log("rainfall rain rate: "+RR))
      const RW = response.data.data.rainfall.weekly.list
      Object.values(RW).map(RW => console.log("rainfall weekly: "+RW))
      const RY = response.data.data.rainfall.yearly.list
      Object.values(RY).map(RY => console.log("rainfall yearly: "+RY))

      // console.log(datas);
      // datas.map(data => {
      //   console.log(data);
      // })
      }).catch(res => {
        console.log(res)
      })

      return (
        <div>
          <div className="page-header">
            <h3 className="page-title"> History </h3>
            <div>
              <button type="button" className="btn btn-info btn-icon-text">
                <i className="mdi mdi-printer btn-icon-append"></i> Print
              </button>
              &ensp;
              <button type="button" className="btn btn-warning btn-icon-text" onClick={refreshPage}>
                <i className="mdi mdi-reload btn-icon-prepend"></i> Refresh
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center">History Weather Station</h3>
                  <form className="form-sample">
                    {/* <p className="card-description text-center"> input date and time to view data history weather station </p> */}
                    <br />
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
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <th rowSpan="2" className="table-dark text-center"> Time </th>
                          <th colSpan="2" className="table-dark text-center"> Indoor </th>
                          <th colSpan="2" className="table-dark text-center"> Outdoor </th>
                          <th colSpan="2" className="table-dark text-center"> Solar & Uvi </th>
                          <th colSpan="2" className="table-dark text-center"> Pressure </th>
                          <th colSpan="7" className="table-dark text-center"> Rainfall </th>
                        </tr>
                        <tr>
                          <th className="table-dark">Humidity</th>
                          <th className="table-dark">Temperature</th>
                          <th className="table-dark">Humidity</th>
                          <th className="table-dark">Temperature</th>
                          <th className="table-dark">Solar</th>
                          <th className="table-dark">Uvi</th>
                          <th className="table-dark">Absolute</th>
                          <th className="table-dark">Relative</th>
                          <th className="table-dark">Daily</th>
                          <th className="table-dark">Event</th>
                          <th className="table-dark">Hourly</th>
                          <th className="table-dark">Monthly</th>
                          <th className="table-dark">Rain Rate</th>
                          <th className="table-dark">Weekly</th>
                          <th className="table-dark">Yearly</th>
                        </tr>
                        <tr className="text-center">
                          <td>
                            {sessionStorage.getItem("time")}
                          </td>
                          <td>
                            {sessionStorage.getItem("indoor_humidity")} %
                          </td>
                          <td>
                            {sessionStorage.getItem("indoor_temperature")} ºF
                          </td>
                          <td>
                            {sessionStorage.getItem("outdoor_humidity")} %
                          </td>
                          <td>
                          {sessionStorage.getItem("outdoor_temperature")} ºF
                          </td>
                          <td>
                            {sessionStorage.getItem("sau_solar")} W/m²
                          </td>
                          <td>
                            {sessionStorage.getItem("sau_uvi")}
                          </td>
                          <td>
                            {sessionStorage.getItem("pressure_absolute")} W/m²
                          </td>
                          <td>
                            {sessionStorage.getItem("pressure_relative")}
                          </td>
                          <td>
                            {sessionStorage.getItem("rainfall_daily")} in
                          </td>
                          <td>
                            {sessionStorage.getItem("rainfall_event")} in
                          </td>
                          <td>
                            {sessionStorage.getItem("rainfall_hourly")} in
                          </td>
                          <td>
                            {sessionStorage.getItem("rainfall_monthly")} in
                          </td>
                          <td>
                            {sessionStorage.getItem("rainfall_rain_rate")} in/hr
                          </td>
                          <td>
                            {sessionStorage.getItem("rainfall_weekly")} in
                          </td>
                          <td>
                            {sessionStorage.getItem("rainfall_yearly")} in
                          </td>
                        </tr>
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
