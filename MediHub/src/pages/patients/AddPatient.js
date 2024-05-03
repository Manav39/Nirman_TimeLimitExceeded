import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase-config'
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'

const AddPatients = () => {
  const toast = useToast()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, 'patients'), {
        name: name,
        age: age,
        gender: gender,
        contact: contact,
        address: address,
      })
      console.log('Document written with ID: ', docRef.id)
      toast({
        position: 'top',
        title: 'Patient details saved successfully',
        status: 'success',
        duration: 1500,
        isClosable: true,
      })
      // Clear the form after successful submission
      setName('')
      setAge('')
      setGender('')
      setContact('')
      setAddress('')
    } catch (e) {
      console.error('Error adding patient: ', e)
      toast({
        position: 'top',
        title: 'Error while saving patient details',
        status: 'error',
        duration: 1500,
        isClosable: true,
      })
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Patient Registration</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          style={{ width: '460px' }}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="age" isRequired>
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>
              <FormControl id="gender" isRequired>
                <FormLabel>Gender</FormLabel>
                <Input
                  type="text"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </FormControl>
              <FormControl id="contact" isRequired>
                <FormLabel>Contact</FormLabel>
                <Input
                  type="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </FormControl>
              <FormControl id="address" isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit"
                >
                  Register
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  )
}

export default AddPatients
