import React from "react";
import Search from "./components/Search";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;