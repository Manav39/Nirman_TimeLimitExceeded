import React, { useEffect, useState } from "react";
import { useContract } from "../../context/context";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useToast,
  Text,
  Divider,
  VStack,
  Badge,
  Button,
} from "@chakra-ui/react";
import MeddyJSON from "../../constants/Meddy.json";
import { ethers } from "ethers";

const Dashboard_patient = () => {
  const toast = useToast();
  const { contract, setContract } = useContract();
  const [medicalRecords, setMedicalRecords] = useState({});
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [healthTips, setHealthTips] = useState([]);

  useEffect(() => {}, []);

  return (
    <Box p={8}>
      <Heading as="h1" mb={8} textAlign="center">
        Patient Dashboard
      </Heading>

      {/* Medical Records Summary */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Medical Records Summary
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing={4}>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Allergies:
            </Text>
            <Text fontSize="lg">{medicalRecords.allergies || "N/A"}</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              Medications:
            </Text>
            <Text fontSize="lg">{medicalRecords.medications || "N/A"}</Text>
          </Box>
          {/* Add more medical record fields as needed */}
        </SimpleGrid>
      </Box>

      <Divider mb={8} />

      {/* Upcoming Appointments */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Upcoming Appointments
        </Heading>
        {upcomingAppointments.length > 0 ? (
          upcomingAppointments.map((appointment, index) => (
            <Box key={index} mb={4}>
              <Text fontSize="lg" fontWeight="bold">
                Date: {appointment.date}
              </Text>
              <Text fontSize="lg" fontWeight="bold">
                Time: {appointment.time}
              </Text>
              {/* Add more appointment details as needed */}
            </Box>
          ))
        ) : (
          <Text fontSize="lg">No upcoming appointments</Text>
        )}
        <Button colorScheme="blue" size="sm">
          Schedule Appointment
        </Button>
      </Box>

      <Divider mb={8} />

      {/* Health Tips */}
      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4}>
          Health Tips
        </Heading>
        {healthTips.length > 0 ? (
          healthTips.map((tip, index) => (
            <Box key={index} mb={2}>
              <Text fontSize="lg">{tip}</Text>
            </Box>
          ))
        ) : (
          <Text fontSize="lg">No health tips available</Text>
        )}
        <Button colorScheme="green" size="sm">
          Request More Tips
        </Button>
      </Box>

      {/* Additional Information
      <Box>
        <Heading as="h2" size="lg" mb={4}>
          Additional Information
        </Heading>
        <VStack spacing={4}>
          <Box>
            <Badge colorScheme="blue">Insurance</Badge>
            <Text fontSize="lg">You are covered under XYZ Insurance</Text>
          </Box>
          <Box>
            <Badge colorScheme="yellow">Emergency Contact</Badge>
            <Text fontSize="lg">Emergency Contact: John Doe - 123-456-7890</Text>
          </Box> */}
      {/* </VStack> */}
      {/* </Box> */}
    </Box>
  );
};

export default Dashboard_patient;
