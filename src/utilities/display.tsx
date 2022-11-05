import { Link, MenuItem } from '@chakra-ui/react';
import HouseCard from '../components/HomeCard';
import RoomButton from '../components/RoomButton';
import { SiteData } from '../data/siteData';
import { House, Room } from '../types/types';


const { menu } = SiteData;

export const display = {
  menu: () => {
    return menu.map((item) => {
      return (
        <Link href={item === 'Your Houses' ? '/' : `/${item.toLowerCase()}`}>
          <MenuItem>
            {item}
          </MenuItem>
        </Link>
      )
    })
  },
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
