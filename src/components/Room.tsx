import { Box, Divider, Flex, Heading, Image, Spacer } from '@chakra-ui/react'
import { useParams } from 'react-router';
import { MARGIN } from '../globals/styling';
import { House } from '../types/types';

type Props = {
  houses: House[],
}

const Room = ({ houses }: Props) => {
  const { houseId, roomId } = useParams();
  const house = houses.filter(house => house.id == houseId);

  const room = house[0].rooms.filter(room => room.id === roomId)[0];
  const { nickname, imgUrl, type } = room

  return (
    <Box>
      <Box>
        <Image src={imgUrl} />
      </Box>
      <Box>
        <Heading>{nickname ? nickname : `Room ${roomId}`}</Heading>
      </Box>
      <Box>
        <Flex mt={MARGIN} mb={MARGIN}>
          <Box fontWeight="bold">
            Type
          </Box>
          <Spacer />
          <Box>
            {type}
          </Box>
        </Flex>
        <Divider />
      </Box>
    </Box>
  )
}

export default Room;
