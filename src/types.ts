export type ContinentProps = {  
  id: number;
  continent: string;
  banner: string;  
  cta: string;
  description: string;
  countries: number;
  languagues: number;
  top100cities:number;
  slug: string;
}

export type CityProps = {
  id: number;
  city: string;
  continent: number;
  description: string;
  banner: string;
  flag: string;
  slug: string;
}
