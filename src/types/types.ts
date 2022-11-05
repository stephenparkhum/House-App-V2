export interface Room {
  id: string,
  nickname?: string,
  whoLivesInHere?: string[],
  type: string,
  isOffice: boolean,
  imgUrl?: string,
  isGuestRoom: boolean,
}

export interface Person {
  name: string
}

export interface Contractor {
  name: string,
  specialty: string,
  costPerHour: number,
  phoneNumber: string,
  emailAddress: string
}

export interface Utility {
  companyName: string,
  companyPhone: string,
  type: string,
  dueDate: string,
  avgPrice: number
}

type Mortgage = {
  mortgage: number,
  mortgageTerm: number,
  mortgageHolder: string,
  mortgageInsurance?: boolean,
  mortgageInsurancePrice: number,
}

export interface HouseCosts extends Mortgage {
  taxes: number,
}

export interface Admin {
  utilities: Utility[],
  expenses: HouseCosts,
}

export interface Appliance {
  name: string,
  rooms: string[],
  make: string,
  model?: string,
  imgUrl?: string,
  url?: string,
  manual?: boolean
}

export interface Address {
  street1: string,
  street2?: string,
  city: string,
  state?: string,
  country: string,
  zipcode: string
}

export interface House {
  id: string,
  name: string,
  floors: number,
  basement: boolean,
  attic: boolean,
  isAtticFurnished?: boolean,
  rooms: Room[],
  imgUrl?: string,
  baths: number,
  isMainResidence: boolean,
  isAirbnb?: boolean,
  airbnbPrice?: number,
  airbnbRating?: number,
  address?: Address,
  admin: Admin,
  household?: Person[]
}

export interface User {
  id: string,
  name: string,
  houses: House[],
  contractors: Contractor[],
  appliances: Appliance[]
}
