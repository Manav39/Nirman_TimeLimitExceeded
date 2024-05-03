import React, { useEffect } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Textarea,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useContract } from "../context/context";
import { ethers } from "ethers";

const Consult = ({ onSuccess }) => {
  const toast = useToast();

  const { account, contract } = useContract();
  const [address, setAddress] = useState("");
  const [caseNo, setCaseNo] = useState("");
  const [charges, setCharges] = useState("");
  const [Cause, setCause] = useState("");
  const [pre, setPre] = useState("");

  const add_client = async () => {
    try {
      const addDoc = await contract.diagnosePatient(
        address,
        parseInt(caseNo),
        ethers.utils.parseEther("0.01"),
        Cause,
        pre,
        { value: ethers.utils.parseEther("0.0001"), gasLimit: 1000000 }
      );
      console.log(addDoc);
      toast({
        position: "top",
        title: "New Client Added Successfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } catch (err) {
      toast({
        position: "top",
        title: "Error While Adding Client",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      console.log(err);
    }
  };
  const remove_doc = async () => {
    try {
      const rmDoc = await contract.removeAccess(account, address, caseNo);

      toast({
        position: "top",
        title: "Doctor removed Successfully",
        status: "success",
        duration: 1500,
        isClosable: true,
      });
    } catch (err) {
      toast({
        position: "top",
        title: "Error While removing Client",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
      console.log(err);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            {" "}
            PATIENT REPORT
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <FormControl id="title" isRequired>
                <FormLabel>Case Number</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setCaseNo(e.target.value)}
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl id="title" isRequired>
                <FormLabel>Doctor Address</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
            </HStack>

            <HStack>
              <FormControl id="title" isRequired>
                <FormLabel>Consultancy Fees</FormLabel>
                <Input
                  type="text"
                  onChange={(e) => setCharges(e.target.value)}
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl id="desc" isRequired>
                <FormLabel>Disease</FormLabel>
                <Input type="text" onChange={(e) => setCause(e.target.value)} />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl id="desc" isRequired>
                <FormLabel>Drugs</FormLabel>
                <Input type="text" onChange={(e) => setPre(e.target.value)} />
              </FormControl>
            </HStack>

            <Stack spacing={10} pt={2}>
              <Button
                onClick={add_client}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Add
              </Button>
            </Stack>
            <Stack pt={6}></Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Consult;
