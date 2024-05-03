import React, { useEffect, useState } from "react";
import {
  Box,
  Divider,
  Heading,
  SimpleGrid,
  Text,
  Button,
  Center,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";

const Dashboard_patient = () => {
  // Dummy data for medical records
  const dummyMedicalRecords = {
    allergies: "Peanuts, Pollen",
    medications: "Aspirin, Ibuprofen",
  };

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
          {/* Allergies Card */}
          <Center>
            <Card width="100%">
              <CardHeader>Allergies</CardHeader>
              <CardBody>
                <Text fontSize="lg">
                  {dummyMedicalRecords.allergies || "N/A"}
                </Text>
              </CardBody>
            </Card>
          </Center>
          {/* Medications Card */}
          <Center>
            <Card width="100%">
              <CardHeader>Medications</CardHeader>
              <CardBody>
                <Text fontSize="lg">
                  {dummyMedicalRecords.medications || "N/A"}
                </Text>
              </CardBody>
            </Card>
          </Center>
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
    </Box>
  );
};

export default Dashboard_patient;
