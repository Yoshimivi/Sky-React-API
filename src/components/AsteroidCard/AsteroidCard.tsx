import { TDataAsteroids } from "../../types";
import { ContainerCards } from "./styles"

export function AsteroidCard(props: {item: TDataAsteroids}) {
  const {item}=props

  return (
    
    <ContainerCards>
        <summary>{item.name}</summary>
        <div className="infosContainer">
          <h3>Absolute Magnitude: {item.absolute_magnitude_h} H</h3>
          <h3>Estimated Diameter:</h3>
          <div className="subInfosContainer">
            <p>
              <span>Kilometers:</span>
              {`${item.estimated_diameter.kilometers.estimated_diameter_min} - 
              ${item.estimated_diameter.kilometers.estimated_diameter_max}`}
            </p>
            <p>
              <span>Meters:</span> 
              {`${item.estimated_diameter.meters.estimated_diameter_min} - 
              ${item.estimated_diameter.meters.estimated_diameter_max}`}
            </p>
            <p>
              <span>Miles:</span>
              {`${item.estimated_diameter.miles.estimated_diameter_min} - 
              ${item.estimated_diameter.miles.estimated_diameter_max}`}
            </p>
            <p>
              <span>Feets:</span>
              {`${item.estimated_diameter.feet.estimated_diameter_min} - 
              ${item.estimated_diameter.feet.estimated_diameter_max}`}
            </p>
          </div>
          <h3>Relative Velocity:</h3>
          <div className="subInfosContainer">
            <p>
              <span>KPH:</span>
              {item.close_approach_data[0].relative_velocity.kilometers_per_hour}
            </p>
            <p>
              <span>MPH:</span>
              {item.close_approach_data[0].relative_velocity.miles_per_hour}
            </p> 
          </div>
          <h3>Miss Distance:</h3>
            <div className="subInfosContainer">
              <p>
                <span>Astronomical:</span> 
                {item.close_approach_data[0].miss_distance.astronomical}
              </p>
              <p>
                <span>Lunar:</span> 
                {item.close_approach_data[0].miss_distance.lunar}
              </p>
              <p>
                <span>Kilometers:</span> 
                {item.close_approach_data[0].miss_distance.kilometers}
              </p>
              <p>
                <span>Miles:</span> 
                {item.close_approach_data[0].miss_distance.miles}
              </p>
            </div>
          <div className="hazard">
            <p><span>Potentially Hazardous:</span> {item.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
          </div>
        </div>
    </ContainerCards>
  )
}