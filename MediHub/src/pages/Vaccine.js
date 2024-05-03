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
import { Link } from "react-router-dom";

const Vaccine = () => {
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
    hospName,
    setHospName,
    setHospId,
    userType,
    setUserType,
    provider,
    setProvider,
  } = useContract();

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {}, []);

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Hospitals"), {
        name: name,
        id: id,
        pass: pass,
        operationTheatreBeds: 10,
        generalBeds: 10,
      });
    } catch (e) {
      toast({
        position: "top",
        title: "Error while saving details",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
    }
    navigate(`/loginh`);
  };

  return (
    <section className="todo-container">
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <div style={{ display: "flex" }}>
          <img src="/vaccine.png" width={500} height={400} />
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"}>
              <Heading fontSize={"4xl"}>Vaccine</Heading>
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
                  <FormLabel>Parent Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </FormControl>
                <FormControl id="text" isRequired>
                  <FormLabel>Child Name</FormLabel>
                  <Input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </FormControl>
                <FormControl id="text" isRequired>
                  <FormLabel>Gender</FormLabel>
                  <Input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </FormControl>
                <FormControl id="number" isRequired>
                  <FormLabel> Address</FormLabel>
                  <Input
                    type="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
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
                    Submit
                  </Button>
                </Stack>{" "}
              </Stack>
            </Box>
          </Stack>
        </div>
      </Flex>
    </section>
  );
};

export default Vaccine;
