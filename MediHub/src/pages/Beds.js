// import React, { useEffect, useState } from "react";
// import { useContract } from "../context/context";
// import {
//   Box,
//   Flex,
//   Heading,
//   SimpleGrid,
//   Stat,
//   StatLabel,
//   StatNumber,
//   useToast,
// } from "@chakra-ui/react";
// import MeddyJSON from "../constants/Meddy.json";
// import { ethers } from "ethers";
// import { useParams } from "react-router-dom";
// import { db, FirebaseAuth } from "../firebase/firebase-config";
// import {
//   collection,
//   doc,
//   getDocs,
//   updateDoc,
//   query,
//   where,
// } from "firebase/firestore";

// function BedsPage({ hospitalId }) {
//   const [bedDetails, setBedDetails] = useState(null);

//   useEffect(() => {
//     const fetchBedDetails = async () => {
//       try {
//         const q = query(collection(db, "Hospitals"), where("id", "==", "h1"));
//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//           console.log(doc.data());
//           setBedDetails(doc.data());
//         });
//       } catch (error) {
//         console.error("Error getting documents: ", error);
//       }
//     };

//     fetchBedDetails();
//   }, [hospitalId]);

//   const handleBedChange = async (bedType, change) => {
//     try {
//       const docRef = doc(db, "Hospitals");
//       await updateDoc(docRef, {
//         [bedType]: bedDetails[bedType] + change,
//       });
//       setBedDetails({
//         ...bedDetails,
//         [bedType]: bedDetails[bedType] + change,
//       });
//     } catch (error) {
//       console.error("Error updating document:", error);
//     }
//   };

//   return (
//     <div>
//       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
//         <Stat
//           p={8}
//           borderRadius="xl"
//           boxShadow="md"
//           bg="white"
//           _hover={{ bg: "gray.50" }}
//         >
//           <Flex align="center">
//             <Box
//               as="span"
//               fontSize="5xl"
//               color="blue.500"
//               mr={6}
//               flexShrink={0}
//             >
//               &#x1F468;
//             </Box>
//             <Box>
//               <StatLabel fontSize="xl">Total Operation Theatre Beds</StatLabel>
//               <StatNumber fontSize="4xl">
//                 {bedDetails?.operationTheatreBeds}
//               </StatNumber>
//             </Box>
//           </Flex>
//         </Stat>
//         <Stat
//           p={8}
//           borderRadius="xl"
//           boxShadow="md"
//           bg="white"
//           _hover={{ bg: "gray.50" }}
//         >
//           <Flex align="center">
//             <Box
//               as="span"
//               fontSize="5xl"
//               color="green.500"
//               mr={6}
//               flexShrink={0}
//             >
//               &#128197;
//             </Box>
//             <Box>
//               <StatLabel fontSize="xl">Total Generals Beds</StatLabel>
//               <StatNumber fontSize="4xl">{bedDetails?.generalBeds}</StatNumber>
//             </Box>
//           </Flex>
//         </Stat>
//       </SimpleGrid>
//     </div>
//   );
// }

// export default BedsPage;

import React, { useEffect, useState } from "react";
import { useContract } from "../context/context";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useToast,
} from "@chakra-ui/react";
import MeddyJSON from "../constants/Meddy.json";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import { db, FirebaseAuth } from "../firebase/firebase-config";
import {
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  getDoc,
} from "firebase/firestore";

function BedsPage({ hospitalId }) {
  const [bedDetails, setBedDetails] = useState(null);
  const [patientDetails, setPatientDetails] = useState({
    name: "",
    bedType: "",
  });

  useEffect(() => {
    const fetchBedDetails = async () => {
      try {
        const q = query(collection(db, "Hospitals"), where("id", "==", "h1"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          //console.log(doc.data());
          setBedDetails(doc.data());
        });
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    fetchBedDetails();
  }, [hospitalId]);

  const handleBedChange = async (bedType, change) => {
    try {
      console.log(bedDetails);
      const q = query(collection(db, "Hospitals"), where("id", "==", "h1"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async (docc) => {
        console.log(docc.id);
        const beds = parseInt(docc.data()[bedType]) + parseInt(change);
        console.log(beds);

        const ref = await doc(db, "Hospitals", docc.id);
        await updateDoc(ref, {
          [bedType]: beds, // Assuming you want to increment the general beds by 1
        });
        // setBedDetails({
        //   ...bedDetails,
        //   generalBeds: bedDetails.generalBeds + 1, // Update local state with the new value
        // });
      });
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientDetails({
      ...patientDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (patientDetails.bedType === "" || patientDetails.name === "") {
      return;
    }
    // Decrement bed count
    await handleBedChange(patientDetails.bedType, -1);
    // Additional logic to save patient details can be added here
    setPatientDetails({
      name: "",
      bedType: "",
    });
  };

  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Stat
          p={8}
          borderRadius="xl"
          boxShadow="md"
          bg="white"
          _hover={{ bg: "gray.50" }}
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
                {bedDetails?.operationTheatreBeds}
              </StatNumber>
            </Box>
          </Flex>
        </Stat>
        <Stat
          p={8}
          borderRadius="xl"
          boxShadow="md"
          bg="white"
          _hover={{ bg: "gray.50" }}
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
              <StatLabel fontSize="xl">Total Generals Beds</StatLabel>
              <StatNumber fontSize="4xl">{bedDetails?.generalBeds}</StatNumber>
            </Box>
          </Flex>
        </Stat>
      </SimpleGrid>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            name="name"
            value={patientDetails.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Bed Type:
          <select
            name="bedType"
            value={patientDetails.bedType}
            onChange={handleChange}
          >
            <option value="">Select Bed Type</option>
            <option value="operationTheatreBeds">Operation Theatre Bed</option>
            <option value="generalBeds">General Bed</option>
          </select>
        </label>
        <button type="submit">Add Patient</button>
      </form>
      <Button onClick={() => handleBedChange("operationTheatreBeds", 1)}>
        Add ICU
      </Button>
      <Button onClick={() => handleBedChange("generalBeds", 1)}>
        Add General Bed
      </Button>
    </div>
  );
}

export default BedsPage;
