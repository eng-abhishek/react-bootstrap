# You can install Bootstrap in React in 3 common ways.

## Below are the recommended & most-used methods, step by step.

### Method 1: Install Bootstrap via NPM (Recommended)

Step 1: Go to your React project folder
cd your-react-project

Step 2: Install Bootstrap
npm install bootstrap

Step 3: Import Bootstrap CSS

### Open src/index.js or src/main.jsx and add:

import 'bootstrap/dist/css/bootstrap.min.css';

(Optional) Import Bootstrap JS (for modal, dropdown, tooltip, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

Use Bootstrap in Components
function App() {
return (

<div className="container mt-5">
<button className="btn btn-primary">Bootstrap Button</button>
</div>
);
}

export default App;

### ✅ Method 2: Use Bootstrap CDN (Quick & Simple)

Open public/index.html and add inside <head>:

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>

For JS components (optional):

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

⚠️ Note: CDN is not recommended for large projects.

### ✅ Method 3: Use React-Bootstrap (Best React Integration)

React-Bootstrap provides Bootstrap components as React components.

Step 1: Install
npm install react-bootstrap bootstrap

Step 2: Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

Step 3: Use React-Bootstrap Components
import Button from 'react-bootstrap/Button';

function App() {
return <Button variant="success">React Bootstrap</Button>;
}

🏆 Which One Should You Choose?
Use Case Best Option
Simple styling Bootstrap via NPM
Quick demo CDN
Large React app React-Bootstrap
❓Common Issues

Bootstrap styles not applied → Make sure CSS is imported in index.js

Modal/Dropdown not working → Import bootstrap.bundle.min.js
