// steg 2 - skapa en type för varje objekt och använd rätt type på rätt objekt

type Trip = {
  destination: string;
  departureDate: string;
  returnDate: string;
};
type House = {
  address: string;
  rooms: number;
  price: number;
};
type Game = {
  title: string;
  platform: string;
  genre: string;
};
type Album = {
  title: string;
  artist: string;
  numberOfTracks: number;
};
type Restaurant = {
  name: string;
  address: string;
  menu: Array<string>;
};
type Character = {
  name: string;
  actor: string;
  movie: string;
};
type Teacher = {
  name: string;
  subject: string;
  classroom: string;
};
type Library = {
  name: string;
  location: string;
  numberOfBooks: number;
};
type Conference = {
  name: string;
  date: string;
  participants: Array<string>;
};
type Forecast = {
  date: string;
  temperature: number;
  precipitation: string;
};
export {
  Trip,
  House,
  Game,
  Album,
  Restaurant,
  Character,
  Teacher,
  Library,
  Conference,
  Forecast,
};
