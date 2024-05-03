# React Mini-Learnings Repository

## Overview

Welcome to my React mini-learnings repository! This repository is dedicated to storing mini exercises and fundamental concepts in React. I use this repository to reinforce my understanding of important concepts and to quickly refer back to them whenever needed.

## Purpose

The purpose of this repository is to serve as a personal learning resource where I can document and practice fundamental concepts in React. By working on mini exercises and documenting my learnings, I aim to solidify my understanding and become more proficient in React development.

- Controlled Elements with form
- State Uplifting
  (declaring the state in parent component and then pass it to the child components or siblings components)
- Component Composition (sending props to nested components via {children})
- Accessing Movie Database via useEffect Hook (implementing cleanup function via AbortController API)
- Updating select onChange and also using useState with an object and destructuring it

```jsx
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    selectValue: "",
    textValue: "hi",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "selectValue" || id === "textValue") {
      setFormData({ ...formData, [id]: value });
    }
  };

  return (
    <>
      <form>
        <select
          id="selectValue"
          value={formData.selectValue}
          onChange={handleChange}
        >
          <option value="">Select Option</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <input
          id="textValue"
          type="text"
          value={formData.textValue}
          onChange={handleChange}
        />
      </form>
      <h1>
        {formData.selectValue} and {formData.textValue}
      </h1>
    </>
  );
}

export default App;
```

---

Happy learning, and enjoy exploring the world of React!
