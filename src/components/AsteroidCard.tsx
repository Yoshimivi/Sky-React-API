import { TDataAsteroids } from "../types";
import './AsteroidCard.css'

export function AsteroidCard(props: {item: TDataAsteroids}) {
  const {item}=props
  const Robson = Object.keys(item.near_earth_objects)

 

  return (
    <div className="card">
      <h1>{Robson[0]}</h1>
      {/* <div className="cardInfos">
        <p>Absolute Magnitude: {Object.values(Robson.absolute_magnitude_h)}</p>
        <p>Estimated Diameter: 
          <p>
            Kilometers: 
              ({props.near_earth_objects["2022-08-24"].estimated_diameter.kilometers.estimated_diameter_min} - 
              {props.near_earth_objects["2022-08-24"].estimated_diameter.kilometers.estimated_diameter_max}) 
            Meters: 
              ({props.near_earth_objects["2022-08-24"].estimated_diameter.meters.estimated_diameter_min} - 
              {props.near_earth_objects["2022-08-24"].estimated_diameter.meters.estimated_diameter_max}) 
            Miles: 
              ({props.near_earth_objects["2022-08-24"].estimated_diameter.miles.estimated_diameter_min} - 
              {props.near_earth_objects["2022-08-24"].estimated_diameter.miles.estimated_diameter_max}) 
            Feets: 
              ({props.near_earth_objects["2022-08-24"].estimated_diameter.feet.estimated_diameter_min} - 
              {props.near_earth_objects["2022-08-24"].estimated_diameter.feet.estimated_diameter_max})
          </p>
        </p>
        <p>Potentially Hazardous: {props.near_earth_objects["2022-08-24"].is_potentially_hazardous_asteroid}</p>
        <p>Relative Velocity: 
          <p>
            KPH: {props.near_earth_objects["2022-08-24"].close_approach_data.relative_velocity.kilometers_per_hour}
            MPH: {props.near_earth_objects["2022-08-24"].close_approach_data.relative_velocity.miles_per_hour}
          </p>
        </p>
        <p>Miss Distance:
          <p>
            Astronomical: {props.near_earth_objects["2022-08-24"].close_approach_data.miss_distance.astronomical}
            Lunar: {props.near_earth_objects["2022-08-24"].close_approach_data.miss_distance.lunar}
            Kilometers: {props.near_earth_objects["2022-08-24"].close_approach_data.miss_distance.kilometers}
            Miles: {props.near_earth_objects["2022-08-24"].close_approach_data.miss_distance.miles}
          </p>
        </p>
      </div> */}
    </div>
  )
}