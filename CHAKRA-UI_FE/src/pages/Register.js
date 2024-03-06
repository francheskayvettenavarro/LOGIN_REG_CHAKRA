import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormErrorMessage,
  Link
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEnvelope = chakra(FaEnvelope);

const Register = ({ onFormSwitch }) => {
  const [username, setUsername] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfirmPassword] = useState(''); 
  const [passwordsMatch, setPasswordsMatch] = useState(true); 
  const navigate = useNavigate();

  const handleRegisterFunction = async (e) => {
    e.preventDefault();
    if (password !== confPassword) {
      setPasswordsMatch(false); 
      return; 
    }
    try {
      console.log("Form data:", { username, firstname, lastname, email, password, confPassword });
  
      const response = await axios.post('http://localhost:5003/users', {
        username: username,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        confPassword: confPassword
      });
  
      console.log("Response:", response);
  
      console.log("Response Data:", response.data);
  
      if (response.data.msg === "Registration Successful"){
        alert("Registration Successful");
        navigate("/");
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Registration Failed");
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.500" />
        <Heading color="blue.400">Register</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleRegisterFunction}> 
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl isInvalid={!passwordsMatch}>
                <Flex flexDirection="row"> 
                  <FormControl flex="1"> 
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input 
                        type="text" 
                        placeholder="Username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl flex="1" marginLeft="1rem"> 
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt color="gray.300" />}
                      />
                      <Input 
                        type="text" 
                        placeholder="First Name" 
                        value={firstname} 
                        onChange={(e) => setFirstName(e.target.value)} 
                      />
                    </InputGroup>
                  </FormControl>
                </Flex>
              </FormControl>

              <FormControl isInvalid={!passwordsMatch}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input 
                    type="text" 
                    placeholder="Username" 
                    value={lastname} 
                    onChange={(e) => setLastName(e.target.value)} 
                  />
                </InputGroup>
              </FormControl>

              <FormControl isInvalid={!passwordsMatch}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaEnvelope color="gray.300" />}
                  />
                  <Input 
                    type="email" 
                    placeholder="Email address" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </InputGroup>
              </FormControl>

              <FormControl isInvalid={!passwordsMatch}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </InputGroup>
              </FormControl>

              <FormControl isInvalid={!passwordsMatch}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={confPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                  />
                </InputGroup>
                <FormErrorMessage>Passwords do not match</FormErrorMessage> {/* Display error message */}
              </FormControl>

              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="blue"
                width="full"
              >
                Register
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
         Already have an account?{" "}
      <Link as={RouterLink} to="/" color="blue.500">
         Sign In
      </Link>
      </Box>

    </Flex>
  );
};

export default Register;
