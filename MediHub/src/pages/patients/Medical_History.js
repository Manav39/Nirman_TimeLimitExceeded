import React, { useState } from "react";
// import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from "@chakra-ui/react";
import styles from "../HomePage.module.css"
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
  Divider,
  Link,
} from "@chakra-ui/react";

// Dummy medical records data
const dummyMedicalRecords = [
    {
      disease: "Hypertension",
      drug: "Lisinopril",
      address: "123 Main St, Cityville",
      reportUrl: "/sample_report_1.pdf",
      prescriptionUrl: "/sample_prescription_1.pdf",
      image: "/medical_record_1.jpg",
    },
    {
      disease: "Diabetes",
      drug: "Metformin",
      address: "456 Elm St, Townsville",
      reportUrl: "/sample_report_2.pdf",
      prescriptionUrl: "/sample_prescription_2.pdf",
      image: "/medical_record_2.jpg",
    },
    {
      disease: "Asthma",
      drug: "Albuterol",
      address: "789 Oak St, Villageton",
      reportUrl: "/sample_report_3.pdf",
      prescriptionUrl: "/sample_prescription_3.pdf",
      image: "/medical_record_3.jpg",
    },
    {
      disease: "Arthritis",
      drug: "Ibuprofen",
      address: "321 Pine St, Hamletville",
      reportUrl: "/sample_report_4.pdf",
      prescriptionUrl: "/sample_prescription_4.pdf",
      image: "/medical_record_4.jpg",
    },
    {
      disease: "Migraine",
      drug: "Sumatriptan",
      address: "654 Cedar St, Woodtown",
      reportUrl: "/sample_report_5.pdf",
      prescriptionUrl: "/sample_prescription_5.pdf",
      image: "/medical_record_5.jpg",
    },
    {
      disease: "Depression",
      drug: "Sertraline",
      address: "987 Walnut St, Groveton",
      reportUrl: "/sample_report_6.pdf",
      prescriptionUrl: "/sample_prescription_6.pdf",
      image: "/medical_record_6.jpg",
    },
  ];
  

const Medical_History = () => {
  const [medicalRecords, setMedicalRecords] = useState(dummyMedicalRecords);

  return (
    <>
      <div>
        <div className={styles.loremIpsumDolor} style={{ fontWeight: "bolder", fontSize: "50px", marginBottom: "50px" }}>
          Medical History:
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {dummyMedicalRecords.map((record, index) => (
            <div key={index} style={{ flex: "0 0 calc(25% - 1rem)", marginBottom: "2rem" }}>
              <Card maxW="sm" style={{ height: "100%" }}>
                <CardBody>
                  <Image
                    style={{ height: "200px", width: "80%" }}
                    src={record.image}
                    alt="Medical Record"
                    borderRadius="lg"
                  />
                  <Stack mt="3" spacing="3">
                    <Heading size="md" style={{ fontSize: "20px" }}>
                      Disease: {record.disease}
                    </Heading>
                    <Text style={{ fontSize: "25px" }}>
                      Drug: {record.drug}
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                      Address: {record.address}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <ButtonGroup variant="outline" spacing="6">
                    <Button colorScheme="blue" onClick={() => window.open(record.reportUrl, "_blank")}>View Report</Button>
                    <Button colorScheme="green" onClick={() => window.open(record.prescriptionUrl, "_blank")}>View Prescription</Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Medical_History;