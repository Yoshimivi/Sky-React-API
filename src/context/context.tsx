export type TDataAPOD = {
  title: string;
  date: string;
  hdurl?: string; //image url
  url?: string; //video url
  media_type: string;
  copyright: string;
  explanation: string;
  msg?: string; //error message
}

export type TDateAPOD = {
  year: number;
  month: number;
  day: number;
}

export type TDataStars = {
  name: string;
  constellation: string;
  right_ascension: string;
  declination: string;
  apparent_magnitude: number;
  absolute_magnitude: number;
  distance_light_year: number;
  spectral_class: string;
}