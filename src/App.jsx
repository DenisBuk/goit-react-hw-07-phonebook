import React from "react";
import css from "./App.module.css";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactList";
import Container from "./components/Container";
import { ChakraProvider, Heading } from "@chakra-ui/react";

function App(){
  return (
      <ChakraProvider>
      <div className={css.App}>
      <Container>
          <Heading mb={5}>Phonebook</Heading>
          <ContactForm />
           <Heading mb={5}>Contacts</Heading>
      <Filter />
      <ContactsList />
        </Container>
        <ToastContainer
          autoClose={2000}
          position="top-right"
          hideProgressBar={true}
        />
      </div>
      </ChakraProvider>
    );
}

export default App;