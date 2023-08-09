import { useAppContext } from "@/context/AppProvider"

import {
  Container,
  Box,
  Text,
  Input,
  Button,
  Center,
  Image,
  Flex,
  Avatar,
  Stack,
  Heading
} from '@chakra-ui/react'

const UserInfo = () => {

    const {name, nickname, setNickName, addNickName, setAddNickName} = useAppContext()

    const handleOnClick = () => {
        setNickName(addNickName)
        setAddNickName("")
    }

    return (
        <Container maxW="md" h={'100vh'}>
            <Center w={'full'} h={'100%'}>
                <Box maxW={'300px'} w={'full'} bg={'white'} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} >
                    <Image h={'120px'} w={'full'} src={'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'} objectFit="cover" alt="#" />
                    <Flex justify={'center'} mt={-12}>
                        <Avatar size={'xl'} css={{border: '2px solid white',}} src={'https://icons8.com/icon/23264/user'}  />
                    </Flex>
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} >
                                {name}
                            </Heading>
                            {nickname ? <Text color={'gray.500'}>nick: {nickname}</Text> : <Text color={'gray.500'}>no nickname</Text>}
                        </Stack> 
                    </Box>
                    <Box w={'200px'} mx={'auto'} py={'10px'}>
                        <Input type="text" placeholder="enter nickname..." w={'full'} mb={'10px'} value={addNickName} onChange={(e) => setAddNickName(e.target.value)} />
                        <Button w={'70%'} display={'block'} mx={'auto'} onClick={handleOnClick} rounded={'md'} _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg', }} bg={'gray.900'} color={'white'}>set nickname</Button>
                    </Box>
                </Box>
            </Center>
        </Container>
    )

}

export default UserInfo