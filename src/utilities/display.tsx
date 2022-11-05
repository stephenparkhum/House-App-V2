import HouseCard from '../components/HomeCard';
import RoomButton from '../components/RoomButton';
import { House, Room } from '../types/types';


export const display = {
  homesList: (houses: House[]) => {
    return houses.map((house: House) => {
      return (
        <HouseCard house={house} />
      )
    })
  },
  roomsList: (rooms: Room[], houseId?: string) => {
    return rooms.map((room: Room, idx: number) => {
      return (<RoomButton houseId={houseId ? houseId : ''} idx={idx} room={room} />)
    })
  }
}
