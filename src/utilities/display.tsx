import HouseCard from '../components/HomeCard';
import { House } from '../types/types';


export const display = {
  homesList: (houses: House[]) => {
    return houses.map((house: House) => {
      return (
        <HouseCard house={house} />
      )
    })
  }
}

