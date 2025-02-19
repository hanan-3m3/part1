import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    // Fetch data from the server
    axios
      .get('http://localhost:3001/persons') // Or 'http://localhost:3002/persons' if you changed the port
      .then((response) => {
        setPersons(response.data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilterValue(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1, // Generate a new ID (could be handled more elegantly)
    };
    setPersons([...persons, newPerson]);
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterValue={filterValue} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange} 
        newNumber={newNumber} 
        handleNumberChange={handleNumberChange} 
      />

      <h3>Numbers</h3>

      <Persons persons={persons} filterValue={filterValue} />
    </div>
  );
};

export default App;
