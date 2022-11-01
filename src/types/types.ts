export interface Room {
  id: string,
  nickname?: string,
  // Add 'household' type declaration here
  whoLivesInHere?: string[],
  isOffice: boolean,
  imgUrl?: string,
  isGuestRoom: boolean,
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
  address?: Address
}

export interface User {
  id: string,
  name: string,
  houses: House[],
}
