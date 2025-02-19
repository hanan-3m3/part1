const Persons = ({ persons, filter }) => {
    return (
      <ul>
        {persons
          .filter(person => 
            person.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(person => (
            <li key={person.id}>{person.name} {person.number}</li>
          ))
        }
      </ul>
    );
  };
  
  export default Persons;
  
