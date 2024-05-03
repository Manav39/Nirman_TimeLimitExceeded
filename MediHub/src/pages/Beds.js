import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useToast,
} from '@chakra-ui/react'

function BedsPage() {
  const [bedDetails, setBedDetails] = useState({
    operationTheatreBeds: 20,
    generalBeds: 50,
  })

  const [patientDetails, setPatientDetails] = useState({
    name: '',
    bedType: '',
  })

  const toast = useToast()

  const handleBedChange = async (bedType, change) => {
    setBedDetails((prevDetails) => ({
      ...prevDetails,
      [bedType]: prevDetails[bedType] + change,
    }))
    toast({
      title: `Successfully updated ${bedType} count`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setPatientDetails({
      ...patientDetails,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (patientDetails.bedType === '' || patientDetails.name === '') {
      return
    }
    await handleBedChange(patientDetails.bedType, -1)
    setPatientDetails({
      name: '',
      bedType: '',
    })
  }

  return (
    <Box p={8} bg="gray.100" borderRadius="xl">
      <Heading mb={8} textAlign="center">
        Beds & Facilities Availability
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Stat
          p={8}
          borderRadius="xl"
          boxShadow="md"
          bg="white"
          _hover={{ bg: 'gray.50' }}
        >
          <Flex align="center">
            <Box
              as="span"
              fontSize="5xl"
              color="blue.500"
              mr={6}
              flexShrink={0}
            >
              &#x1F468;
            </Box>
            <Box>
              <StatLabel fontSize="xl">Total ICU</StatLabel>
              <StatNumber fontSize="4xl">
                {bedDetails.operationTheatreBeds}
              </StatNumber>
            </Box>
            <Box ml="auto">
              <StatNumber fontSize="3xl" color="green.500">
                Available: {bedDetails.operationTheatreBeds-6}
              </StatNumber>
            </Box>
          </Flex>
        </Stat>
        <Stat
          p={8}
          borderRadius="xl"
          boxShadow="md"
          bg="white"
          _hover={{ bg: 'gray.50' }}
        >
          <Flex align="center">
            <Box
              as="span"
              fontSize="5xl"
              color="green.500"
              mr={6}
              flexShrink={0}
            >
              &#128197;
            </Box>
            <Box>
              <StatLabel fontSize="xl">Total General Beds</StatLabel>
              <StatNumber fontSize="4xl">{bedDetails.generalBeds}</StatNumber>
            </Box>
            <Box ml="auto">
              <StatNumber fontSize="3xl" color="green.500">
                Available: {bedDetails.generalBeds-17}
              </StatNumber>
            </Box>
          </Flex>
        </Stat>
      </SimpleGrid>
      <form onSubmit={handleSubmit}>
        <FormControl mt={8}>
          <FormLabel>Patient Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={patientDetails.name}
            onChange={handleChange}
            placeholder="Enter patient name"
            required
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Bed Type</FormLabel>
          <Select
            name="bedType"
            value={patientDetails.bedType}
            onChange={handleChange}
            placeholder="Select bed type"
            required
          >
            <option value="">Select Bed Type</option>
            <option value="operationTheatreBeds">Operation Theatre Bed</option>
            <option value="generalBeds">General Bed</option>
          </Select>
        </FormControl>
        <Button mt={4} type="submit" colorScheme="blue">
          Add Patient
        </Button>
      </form>
      <Flex mt={4}>
        <Button
          mr={4}
          onClick={() => handleBedChange('operationTheatreBeds', 1)}
          colorScheme="green"
        >
          Add ICU
        </Button>
        <Button
          onClick={() => handleBedChange('generalBeds', 1)}
          colorScheme="green"
        >
          Add General Bed
        </Button>
      </Flex>
    </Box>
  )
}

export default BedsPage
