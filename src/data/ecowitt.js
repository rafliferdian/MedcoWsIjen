import axios from 'axios';

const RealtimeUrl = 'https://api.ecowitt.net/api/v3/device/real_time?application_key=8DA3747EF84A37915E2238B11D0FC35A&api_key=b4aa34cc-64f2-4835-a05f-ce07ecd88c78&mac=C4:5B:BE:5D:AD:C9&call_back=all';

export const getRealtime = async () => {
    try {
        axios.get(RealtimeUrl)
            .then(response => {
                //time
                const time = response.data.data.battery.sensor_array.time
                var date = new Date(time * 1000);
                // Hours part from the timestamp
                var hours = date.getHours();
                // Minutes part from the timestamp
                var minutes = "0" + date.getMinutes();
                // Will display time in 00.00 format
                var formattedTime = hours + '.' + minutes.substr(-2);
                sessionStorage.setItem("time", formattedTime)

                //battery unit
                const battery_unit = response.data.data.battery.sensor_array.unit
                sessionStorage.setItem("battery_unit", battery_unit)

                //indoor
                const indoor_humidity = response.data.data.indoor.humidity.value
                sessionStorage.setItem("indoor_humidity", indoor_humidity)
                const indoor_temperature = response.data.data.indoor.temperature.value
                //Convert Fahrenheit to Celcius
                var cIndoor = ((indoor_temperature - 32) * 5 / 9).toFixed(2)
                sessionStorage.setItem("indoor_temperature", cIndoor)

                //outdoor
                const outdoor_humidity = response.data.data.outdoor.humidity.value
                sessionStorage.setItem("outdoor_humidity", outdoor_humidity)
                const outdoor_temperature = response.data.data.outdoor.temperature.value
                //Convert Fahrenheit to Celcius
                var cOutdoor = ((outdoor_temperature - 32) * 5 / 9).toFixed(2)
                sessionStorage.setItem("outdoor_temperature", cOutdoor)

                //pressure
                const pressure_absolute = response.data.data.pressure.absolute.value
                var pAbsolute = (pressure_absolute * 33.86389). toFixed(1)
                sessionStorage.setItem("pressure_absolute", pAbsolute)
                const pressure_relative = response.data.data.pressure.relative.value
                var pRelative = (pressure_relative * 33.86389). toFixed(1)
                sessionStorage.setItem("pressure_relative", pRelative)

                //solar_and_uvi
                const sau_solar = response.data.data.solar_and_uvi.solar.value
                sessionStorage.setItem("sau_solar", sau_solar)
                const sau_uvi = response.data.data.solar_and_uvi.uvi.value
                sessionStorage.setItem("sau_uvi", sau_uvi)

                //rainfall
                const rainfall_daily = response.data.data.rainfall.daily.value
                sessionStorage.setItem("rainfall_daily", rainfall_daily)
                const rainfall_event = response.data.data.rainfall.event.value
                sessionStorage.setItem("rainfall_event", rainfall_event)
                const rainfall_hourly = response.data.data.rainfall.hourly.value
                sessionStorage.setItem("rainfall_hourly", rainfall_hourly)
                const rainfall_monthly = response.data.data.rainfall.monthly.value
                sessionStorage.setItem("rainfall_monthly", rainfall_monthly)
                const rainfall_rain_rate = response.data.data.rainfall.rain_rate.value
                sessionStorage.setItem("rainfall_rain_rate", rainfall_rain_rate)
                const rainfall_weekly = response.data.data.rainfall.weekly.value
                sessionStorage.setItem("rainfall_weekly", rainfall_weekly)
                const rainfall_yearly = response.data.data.rainfall.yearly.value
                sessionStorage.setItem("rainfall_yearly", rainfall_yearly)
            })
    } catch (error) {
        throw error;
    }
}
