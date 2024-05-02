import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { db, FirebaseAuth } from "../firebase/firebase-config";
import { useContract } from "../context/context";
import { useNavigate } from "react-router";
import { ethers } from "ethers";
import MeddyJSON from "../constants/Meddy.json";
import { getDocs, query, where } from "firebase/firestore";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Select,
  useToast,
} from "@chakra-ui/react";

const Login = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const { authData } = useContract();
  const [todo, setTodo] = useState("");

  const {
    account,
    setAccount,
    contract,
    setContract,
    userType,
    setUserType,
    provider,
    setProvider,
  } = useContract();

  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [metamaskAddress, setMetamaskAddress] = useState("");

  useEffect(() => {}, []);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const collectionName = selectedOption === 'Doctor' ? 'doctors' : 'patients'; // Determine the collection name based on selectedOption
      const docRef = await addDoc(collection(db, collectionName), { // Use the determined collection name
        name: authData?.displayName,
        email: authData?.email,
        age: age,
        weight: weight,
        height: height,
        metamaskAddress: metamaskAddress,
        userType: selectedOption,
      });
      setAccount(metamaskAddress);
      console.log("Document written with ID: ", docRef.id);
      toast({
        position: "top",
        title: "Details saved successfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setUserType(selectedOption);
      navigate("/Dashboard");
    } catch (e) {
      toast({
        position: "top",
        title: "Error while saving details",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    }
  };

  return (
    <section className="todo-container">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign Up</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              <Text color={"blue.400"}>Only for the 1st time</Text>
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            style={{ width: "460px" }}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="text" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  isDisabled
                  value={authData?.displayName}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  isDisabled
                  value={authData?.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="number" isRequired>
                <FormLabel>Age</FormLabel>
                <Input type="number" onChange={(e) => setAge(e.target.value)} />
              </FormControl>
              <FormControl id="number" isRequired>
                <FormLabel>Height(in Cm.)</FormLabel>
                <Input
                  type="number"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </FormControl>
              <FormControl id="number" isRequired>
                <FormLabel>Weight(in Kgs.)</FormLabel>
                <Input
                  type="number"
                  onChange={(e) => setWeight(e.target.value)}
                />
              </FormControl>
              <FormControl id="text" isRequired>
                <FormLabel>Metamask Address</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setMetamaskAddress(e.target.value)}
                />
              </FormControl>
              <FormControl id="text" isRequired>
                <FormLabel>User Type</FormLabel>
                <Select
                  placeholder="Select user type"
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </Select>
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={signIn}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </section>
  );
};

export default Login;
