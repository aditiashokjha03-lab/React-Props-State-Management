import React from "react";
import MessageCard from "./MessageCard"; // Import the reusable component

function App() {
  return (
    <div>
      <h1>Message Cards Example</h1>

      {/* Render multiple MessageCard components with different props */}
      <MessageCard title="Welcome" message="Hello! This is the first card." />
      <MessageCard title="Reminder" message="Don’t forget to complete your project." />
      <MessageCard title="Update" message="React makes UI development fun and modular." />
      <MessageCard title="Note" message="Props help make components reusable." />
    </div>
  );
}

export default App;