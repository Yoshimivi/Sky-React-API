export type TDataAsteroids = {
  estimated_diameter: TMeasureUnit;
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