import React from "react";
import css from "./App.module.css";

import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactList";
import Container from "./components/Container";

function App(){
    
    return (
      <div className={css.App}>
      <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      </Container>
      </div>
    );
}

export default App;