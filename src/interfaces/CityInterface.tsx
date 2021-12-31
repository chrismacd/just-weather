export default interface CityInterface {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    long: string;
    lat: string;
  };
}
