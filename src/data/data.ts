import { Room, House, User, Admin, Contractor, Appliance, Person } from '../types/types'


const testRooms: Room[] = [
  {
    id: '7D9B75B3-4384-47DB-8E81-B9D6AE0C5676',
    whoLivesInHere: ['Stephen', 'Sarah'],
    isOffice: false,
    isGuestRoom: false,
    nickname: 'Master bedroom',
    type: 'Bedroom',
    imgUrl: "https://images.pexels.com/photos/90317/pexels-photo-90317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: '5F63795D-6E45-475E-BA00-19D1B9168EA2',
    isOffice: false,
    isGuestRoom: false,
    nickname: 'Kitchen',
    type: 'Kitchen',
    imgUrl: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '417F9DE0-7EA6-4A3D-B4EA-10C52023AD47',
    whoLivesInHere: ['Trevor'],
    isOffice: false,
    isGuestRoom: false,
    imgUrl: 'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'Bedroom',
    nickname: 'Attic Bedroom'
  },
  {
    id: 'C51C41C7-EF3F-4FC4-B62B-3AD12E6F6560',
    whoLivesInHere: ['Trevor'],
    isOffice: false,
    isGuestRoom: false,
    imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'Bedr0om',
    nickname: 'Other bedroom'
  },
  {
    id: '05AF3D3E-AA31-4CD0-B397-F8D40CE01F71',
    whoLivesInHere: [''],
    isOffice: true,
    nickname: 'Home Office',
    type: 'Office',
    imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isGuestRoom: true,
  }]

const testAirbnbRooms: Room[] = [{
  id: '7D9B75B3-4384-47DB-8E81-B9D6AE0C5676',
  nickname: 'Room 1',
  whoLivesInHere: ['NA'],
  isOffice: false,
  imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  type: 'Office',
  isGuestRoom: false,
},
{
  id: '417F9DE0-7EA6-4A3D-B4EA-10C52023AD47',
  nickname: 'Master Bedroom',
  whoLivesInHere: [''],
  isOffice: false,
  isGuestRoom: false,
  type: 'Office',
  imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
},
{
  id: 'C51C41C7-EF3F-4FC4-B62B-3AD12E6F6560',
  whoLivesInHere: [''],
  isOffice: true,
  type: 'Guy Office',
  imgUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  isGuestRoom: true,
}]

const testAdmin: Admin = {
  utilities: [{
    companyName: 'Portland General Electric',
    companyPhone: '503-123-1234',
    type: 'Electricity',
    dueDate: '1st',
    avgPrice: 150
  }],
  expenses: {
    taxes: 5000,
    mortgage: 2000,
    mortgageTerm: 30,
    mortgageHolder: 'Wells Fargo',
    mortgageInsurance: true,
    mortgageInsurancePrice: 120
  }
}

const testAirbnbAdmin: Admin = {
  utilities: [{
    companyName: 'EWEB',
    companyPhone: '541-345-1234',
    type: 'Electricity',
    dueDate: '1st',
    avgPrice: 150
  }],
  expenses: {
    taxes: 5000,
    mortgage: 2000,
    mortgageTerm: 30,
    mortgageHolder: 'State Farm',
    mortgageInsurance: true,
    mortgageInsurancePrice: 75
  }
}

const testHousehold: Person[] = [
  { name: 'Stephen' },
  { name: 'Sarah' }
]

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
  },
  admin: testAdmin,
  household: testHousehold
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
  },
  admin: testAirbnbAdmin
}

const contractors: Contractor[] = [
  {
    name: 'John Smith',
    specialty: 'Plumbing',
    costPerHour: 150,
    phoneNumber: '(503) 555-1234',
    emailAddress: 'john@plumbing.com'
  },
  {
    name: 'Dan Something',
    specialty: 'Electric',
    costPerHour: 250,
    phoneNumber: '(503) 555-9999',
    emailAddress: 'dan@electricty.com'
  },
]

const testAppliances: Appliance[] = [
  {
    name: 'Refrigerator',
    make: 'Samsung',
    model: '443GFE',
    imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.us.news.samsung.com%2Fus%2Fwp-content%2Fuploads%2F2016%2F05%2F14184916%2FSilo-25_RF22K9570SG_1.jpg&f=1&nofb=1&ipt=7dd32a24c3d110f5c32196b6e0b09fa268eeac6441aef7788f3cc79faaaf7042&ipo=images',
    rooms: ['19AF1EA4-4535-4E71-B4F1-2C44331426BA', '417F9DE0-7EA6-4A3D-B4EA-10C52023AD47']
  },
  {
    name: 'TV',
    make: 'Samsung',
    imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.samsung.com%2Fis%2Fimage%2Fsamsung%2Fae_UA46EH6030RXZN_005_Front_black%3F%24L2-Thumbnail%24&f=1&nofb=1&ipt=b322329830c5a77ad92ec5d7072dd57b6f5f9b680932cc65fbdca70c1c0e6e94&ipo=images",
    model: '123sdf',
    rooms: ['19AF1EA4-4535-4E71-B4F1-2C44331426BA', '417F9DE0-7EA6-4A3D-B4EA-10C52023AD47']
  }
]

const testUser: User = {
  id: '10EF343B-F305-44FA-9E41-6179D017284F',
  name: 'Stephen',
  houses: [testHouse, testAirbnb],
  contractors: contractors,
  appliances: testAppliances,
}

export default testUser
