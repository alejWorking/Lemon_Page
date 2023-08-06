import React, {useState} from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Radio, RadioGroup,
    HStack, Button,
    Box, Heading,Text
  } from '@chakra-ui/react'
  import useSubmit from '../hooks/useSubmit';
  import Header from './Header.js';

const BookingForm = () => {
    const handleSubmitForm = async(data) => {
        console.log("Handle submit form");
    }
    const {submit,response, isLoading,handleChange} = useSubmit(handleSubmitForm);
    const [data,setData] = useState(null);
    const handleSubmit = () => {
        submit("https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js",data);
    }
    return(
        <>
        <Header/>
        <Box 
                backgroundColor="#143AF4"
                top={0}
                minHeight="102vh"
                width="100%"
                position="relative"
            >
                <Box margin="0 auto" border="1px solid #000000" position="relative" top={5} backgroundColor="white" width="40%"minHeight="600px">
                    {response != null ? (<Text>{response.message}</Text>): null }
                    <Heading display="flex" alignItems="center"justifyContent="center" marginTop={4} fontFamily="Markazi Text">Reserva de mesa</Heading>
                    <FormControl width="70%" margin="0 auto">
                        <FormLabel>Nombre</FormLabel>
                        <Input isRequired={true} errorBorderColor='red' onChange={handleChange} marginBottom={4}focusBorderColor="black" type='text'/>
                        {/* <FormHelperText>Introduce el nombre.</FormHelperText> */}
                        <FormLabel>Apellidos</FormLabel>
                        <Input isRequired={true} errorBorderColor='red' onChange={handleChange} marginBottom={4}focusBorderColor="black"type='text'/>
                        {/* <FormHelperText>Introduce tus apellidos.</FormHelperText> */}
                        <FormLabel>Elegir Dia</FormLabel>
                        <Input isRequired={true} errorBorderColor='red' onChange={handleChange} marginBottom={4} focusBorderColor="black" type='date' id="res-date" />
                        <FormLabel>Numero de comensales</FormLabel>
                        <Input isRequired={true} errorBorderColor='red' onChange={handleChange} marginBottom={4} focusBorderColor="black"type='number' defaultValue={1}min={1} max={10}/>
                        {/* <FormHelperText>Elegir dia.</FormHelperText> */}
                        <FormLabel>Elegir Hora</FormLabel>
                        <RadioGroup defaultValue='17:00'>
                            <HStack spacing='24px' onChange={handleChange}  marginBottom={5} >
                            <Radio value='17:00'>17:00</Radio>
                            <Radio value='18:00'>18:00</Radio>
                            <Radio value='19:00'>19:00</Radio>
                            <Radio value='20:00'>20:00</Radio>
                            </HStack>
                        </RadioGroup>
                        {/* <FormHelperText>Elegir Hora.</FormHelperText> */}
                        <FormLabel>Fecha especial?</FormLabel>
                        <RadioGroup defaultValue='Nothing'>
                            <HStack spacing='24px' onChange={handleChange}  marginBottom={8} >
                            <Radio value='Cumpleaños'>Cumpleaños</Radio>
                            <Radio value='Aniversario'>Aniversario</Radio>
                            </HStack>
                        </RadioGroup>
                        {/* <FormHelperText>Fecha especial.</FormHelperText> */}
                        <Input marginBottom={5}bgColor="green" color="white"type="submit" value="Reservar" onClick={(e) => submit(e)}></Input>
                    </FormControl>
                </Box>
            </Box>
    </>
    )

}
export default BookingForm;