import { Room, House, User } from '../types/types'

const testRooms: Room[] = [{
  id: '7D9B75B3-4384-47DB-8E81-B9D6AE0C5676',
  whoLivesInHere: ['Stephen', 'Sarah'],
  isOffice: false,
  isGuestRoom: false,
  nickname: 'Master bedroom',
  imgUrl: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
},
{
  id: '417F9DE0-7EA6-4A3D-B4EA-10C52023AD47',
  whoLivesInHere: ['Trevor'],
  isOffice: false,
  isGuestRoom: false,
  imgUrl: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  nickname: 'Attic Bedroom'
},
{
  id: 'C51C41C7-EF3F-4FC4-B62B-3AD12E6F6560',
  whoLivesInHere: ['Trevor'],
  isOffice: false,
  isGuestRoom: false,
  imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  nickname: 'Other bedroom'
},
{
  id: '05AF3D3E-AA31-4CD0-B397-F8D40CE01F71',
  whoLivesInHere: [''],
  isOffice: true,
  nickname: 'Office',
  imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  isGuestRoom: true,
}]

const testAirbnbRooms: Room[] = [{
  id: '7D9B75B3-4384-47DB-8E81-B9D6AE0C5676',
  nickname: 'Room 1',
  whoLivesInHere: ['NA'],
  isOffice: false,
  imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  isGuestRoom: false,
},
{
  id: '417F9DE0-7EA6-4A3D-B4EA-10C52023AD47',
  nickname: 'Master Bedroom',
  whoLivesInHere: [''],
  isOffice: false,
  isGuestRoom: false,
  imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
},
{
  id: 'C51C41C7-EF3F-4FC4-B62B-3AD12E6F6560',
  whoLivesInHere: [''],
  isOffice: true,
  imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  isGuestRoom: true,
}]

const testHouse: House = {
  id: 'FD5918BE-FA28-4FCE-ACFA-C8DB07180FC9',
  name: 'Le Chateau Hante',
  floors: 2,
  imgUrl: "https://images.pexels.com/photos/3935320/pexels-photo-3935320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  basement: true,
  attic: true,
  isAtticFurnished: true,
  rooms: testRooms,
  isAirbnb: false,
  baths: 2,
  isMainResidence: true,
  address: {
    street1: '123 Main St',
    state: 'Oregon',
    city: 'Portland',
    zipcode: '97222',
    country: 'USA'
  }
}

const testAirbnb: House = {
  id: '19AF1EA4-4535-4E71-B4F1-2C44331426BA',
  name: 'Eugene House',
  imgUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  floors: 3,
  basement: false,
  attic: false,
  rooms: testAirbnbRooms,
  isAirbnb: true,
  isMainResidence: false,
  airbnbRating: 4,
  baths: 3,
  airbnbPrice: 155,
  address: {
    street1: '666 Eugene Street',
    state: 'Oregon',
    city: 'Eugene',
    zipcode: '97402',
    country: 'USA'
  }
}

const testUser: User = {
  id: '10EF343B-F305-44FA-9E41-6179D017284F',
  name: 'Stephen',
  houses: [testHouse, testAirbnb]
}

export default testUser



