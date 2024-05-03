import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, FirebaseAuth } from "../firebase/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
  RadioGroup,
  Radio,
} from "@chakra-ui/react";

const AddDoctors = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const { authData } = useContract();
  // console.log(authData);
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [License, setLicense] = useState("");
  const [special, setSpecial] = useState("");
  const [usertype, setUsertype] = useState("");

  useEffect(() => {}, []);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "doctors"), {
        name: name,
        email: email,
        age: age,
        specialism: special,
        license: License,
        userType: "Doctor",
      });
      console.log(account);
      const response = await contract?.addDoctor(
        name,
        parseInt(License),
        "0xdaDD30aAEe8E15F925b3b0F0e18f84E6FE62C6f9"
      );
      console.log(response);
      console.log("Document written with ID: ", docRef.id);
      toast({
        position: "top",
        title: "Details saved successfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setUserType("Hospital");
    } catch (e) {
      console.log(e);
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
            <Heading fontSize={"4xl"}>Doctor Registration</Heading>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl id="number" isRequired>
                <FormLabel>License</FormLabel>
                <Input
                  type="text"
                  value={License}
                  onChange={(e) => setLicense(e.target.value)}
                />
              </FormControl>
              <FormControl id="number" isRequired>
                <FormLabel>Age</FormLabel>
                <Input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>
              <FormControl id="number" isRequired>
                <FormLabel>Specialism</FormLabel>
                <Input
                  type="text"
                  value={special}
                  onChange={(e) => setSpecial(e.target.value)}
                />
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
                  Register
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </section>
  );
};

export default AddDoctors;
