import React, { useEffect, useState } from 'react'
import { useContract } from '../context/context'

import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useToast,
} from '@chakra-ui/react'
import MeddyJSON from '../constants/Meddy.json'
import { ethers } from 'ethers'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  const toast = useToast()
  const { contract, setContract, userType, hospName, hospId } = useContract()
  const [numberOfPatients, setNumberOfPatients] = useState(0)
  const [numberOfAppointments, setNumberOfAppointments] = useState(0)
  useEffect(() => {}, [contract, toast])

  return (
    <Box p={8}>
      <Heading as="h1" mb={8} textAlign="center">
        {userType === 'Hospital' ? `${hospName}` : ''}
      </Heading>
      <Heading as="h1" mb={8} textAlign="center">
        Dashboard
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
              <StatLabel fontSize="xl">Total Patients</StatLabel>
              <StatNumber fontSize="4xl">{59}</StatNumber>
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
              &#x1F468;&#x200D;&#x2695;&#xFE0F;
            </Box>
            <Box>
              <StatLabel fontSize="xl">Total Doctors</StatLabel>
              <StatNumber fontSize="4xl">{27}</StatNumber>
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
              color="yellow.500"
              mr={6}
              flexShrink={0}
            >
              &#x1F469;&#x200D;&#x2695;&#xFE0F;
            </Box>
            <Box>
              <StatLabel fontSize="xl">Total Nurses</StatLabel>
              <StatNumber fontSize="4xl">{38}</StatNumber>
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
              color="purple.500"
              mr={6}
              flexShrink={0}
            >
              &#128657;
            </Box>
            <Box>
              <StatLabel fontSize="xl">Total Ambulances</StatLabel>
              <StatNumber fontSize="4xl">{6}</StatNumber>
            </Box>
          </Flex>
        </Stat>
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard
