export type TDataAsteroids = {
  near_earth_objects: TDate;
}

type TDate = {
  [key: string]: TAsteroidInfo;
}

type TAsteroidInfo = {
  name: string;
	absolute_magnitude_h: number;
  estimated_diameter: TMeasureUnit;
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: TCloseApproachData;
  is_sentry_object: boolean; // ?????
}

type TMeasureUnit = {
  kilometers: TEstimatedDiameter;
  meters: TEstimatedDiameter;
  miles: TEstimatedDiameter;
  feet: TEstimatedDiameter;
}

type TEstimatedDiameter = {
  estimated_diameter_min: number;
  estimated_diameter_max: number;
}

type TCloseApproachData = {
  close_approach_date: number;
  relative_velocity: TRelativeVelocity;
  miss_distance: TMissDistance;
}

type TRelativeVelocity = {
  kilometers_per_hour: number;
  miles_per_hour: number;
}

type TMissDistance = {
  astronomical: number;
  lunar: number;
  kilometers: number;
  miles: number;
}