sequenceDiagram
    participant User
    participant UI
    participant Server

    User->>UI: Opens the page (https://studies.cs.helsinki.fi/exampleapp/notes)
    UI->>User: Displays text field for note input
    User->>UI: Types note into the text field
    User->>UI: Clicks "Save" button
    UI->>Server: Sends data (POST request with note content)
    Server->>Server: Processes and saves the note in the backend
    Server->>UI: Responds with success message
    UI->>User: Displays the new note on the page
