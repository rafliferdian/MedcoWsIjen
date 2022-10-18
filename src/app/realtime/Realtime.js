import React, { Component } from 'react';
import axios from "axios";
import {getRealtime} from '../../data/ecowitt'

const refreshPage = () => {
  window.location.reload();

}

export class Realtime extends Component {

  componentWillMount() {
    getRealtime()
  }

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Realtime </h3>
          <div>
            <button type="button" className="btn btn-warning btn-icon-text" onClick={refreshPage}>
              <i className="mdi mdi-reload btn-icon-prepend"></i> Refresh
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Realtime Weather Station</h3>
                <div className="col-md-6">
                  <h4>Baterai: {sessionStorage.getItem("battery_unit")}</h4>
                  <h4>Time: {sessionStorage.getItem("time")} </h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin ">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">INDOOR</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th className="table-dark"> NO </th>
                        <th className="table-dark"> Key </th>
                        <th className="table-dark"> Value </th>
                      </tr>
                      <tr>
                        <td> 1 </td>
                        <td> Humidity </td>
                        <td>
                          {sessionStorage.getItem("indoor_humidity")} %
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Temperature </td>
                        <td>
                          {sessionStorage.getItem("indoor_temperature")} ºC
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin ">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">OUTDOOR</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th className="table-dark"> NO </th>
                        <th className="table-dark"> Key </th>
                        <th className="table-dark"> Value </th>
                      </tr>
                      <tr>
                        <td> 1 </td>
                        <td> Humidity </td>
                        <td>
                          {sessionStorage.getItem("outdoor_humidity")} %
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Temperature </td>
                        <td>
                          {sessionStorage.getItem("outdoor_temperature")} ºC
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin ">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">Pressure</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th className="table-dark"> NO </th>
                        <th className="table-dark"> Key </th>
                        <th className="table-dark"> Value </th>
                      </tr>
                      <tr>
                        <td> 1 </td>
                        <td> Pressure Absolute </td>
                        <td>
                          {sessionStorage.getItem("pressure_absolute")} W/m²
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Pressure Relative </td>
                        <td>
                          {sessionStorage.getItem("pressure_relative")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 grid-margin ">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">SOLAR & UVI</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th className="table-dark"> NO </th>
                        <th className="table-dark"> Key </th>
                        <th className="table-dark"> Value </th>
                      </tr>
                      <tr>
                        <td> 1 </td>
                        <td> Solar </td>
                        <td>
                          {sessionStorage.getItem("sau_solar")} W/m²
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Uvi </td>
                        <td>
                          {sessionStorage.getItem("sau_uvi")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 grid-margin ">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title text-center">RAINFALL</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th className="table-dark"> NO </th>
                        <th className="table-dark"> Key </th>
                        <th className="table-dark"> Value </th>
                      </tr>
                      <tr>
                        <td> 1 </td>
                        <td> Rainfall Daily </td>
                        <td>
                          {sessionStorage.getItem("rainfall_daily")} in
                        </td>
                      </tr>
                      <tr>
                        <td> 2 </td>
                        <td> Rainfall Event </td>
                        <td>
                          {sessionStorage.getItem("rainfall_event")} in
                        </td>
                      </tr>
                      <tr>
                        <td> 3 </td>
                        <td> Rainfall Hourly </td>
                        <td>
                          {sessionStorage.getItem("rainfall_hourly")} in
                        </td>
                      </tr>
                      <tr>
                        <td> 4 </td>
                        <td> Rainfall Monthly </td>
                        <td>
                          {sessionStorage.getItem("rainfall_monthly")} in
                        </td>
                      </tr>
                      <tr>
                        <td> 5 </td>
                        <td> Rainfall Rain Rate </td>
                        <td>
                          {sessionStorage.getItem("rainfall_rain_rate")} in/hr
                        </td>
                      </tr>
                      <tr>
                        <td> 6 </td>
                        <td> Rainfall Weekly</td>
                        <td>
                          {sessionStorage.getItem("rainfall_weekly")} in
                        </td>
                      </tr>
                      <tr>
                        <td> 7 </td>
                        <td> Rainfall Yearly</td>
                        <td>
                          {sessionStorage.getItem("rainfall_yearly")} in
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Realtime;