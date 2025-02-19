import express from 'express';
const app = express();

const persons = [
  { id: "1", name: "Arto Hellas", number: "040-123456" },
  { id: "2", name: "Ada Lovelace", number: "39-44-5323523" },
  { id: "3", name: "Dan Abramov", number: "12-43-234345" },
  { id: "4", name: "Mary Poppendieck", number: "39-23-6423122" }
];

app.get('/persons', (req, res) => {
    res.json(persons);
  });
  

// New /info route
app.get('/info', (req, res) => {
    const numPersons = persons.length;
    const currentTime = new Date();
  
    res.send(`
      <p>Phonebook has info for ${numPersons} people</p>
      <p>${currentTime}</p>
    `);
  });
  
  app.get('/api/persons/:id', (req, res) => {
    const id = req.params.id; // Get the ID from the URL
    const person = persons.find(p => p.id === id); // Find the person
  
    if (person) {
      res.json(person); // Return the person if found
    } else {
      res.status(404).json({ error: 'Person not found' }); // Return 404 if not found
    }
  });
  
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
