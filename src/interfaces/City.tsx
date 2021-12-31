export default interface City {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    long: string;
    lat: string;
  };
}
