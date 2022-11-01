import { Flex, Spacer, LinkOverlay, Image, Heading, Box, LinkBox } from '@chakra-ui/react'
import { Room } from '../types/types'
import { ChevronRightIcon } from '@chakra-ui/icons'


type Props = {
  room: Room,
  idx: number,
  houseId: string | undefined
}

const RoomButton = ({ room, idx, houseId }: Props) => {
  return (
    <LinkBox marginBottom="5" borderWidth='1px' borderRadius='lg'>
      <LinkOverlay href={`/house/${houseId}/room/${room.id}`}>
        <Flex alignItems="center">
          <Box w="100" h="100">
            <Image w="100%" h="100%" src={room.imgUrl ? room.imgUrl : ''} alt={room.nickname} />
          </Box>
          <Box p="5">
            <Box
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              noOfLines={1}
            >
              {room.nickname ? room.nickname : `Room #${idx + 1}`}
            </Box>
          </Box>
          <Spacer />
          <ChevronRightIcon marginRight="10" />
        </Flex>
      </LinkOverlay>
    </LinkBox>
  )
}

export default RoomButton;
