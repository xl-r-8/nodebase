# 🌐 Web Development - Big Picture Notes (Interview Revision)

> **Goal:** Short, interview-focused notes with quick syntax.

------------------------------------------------------------------------

# 🌍 Big Picture

### Q. How did modern web development evolve?

**Ans:** HTML → CSS → JavaScript → Backend (Node.js) → Database → APIs →
React → TypeScript → Next.js → Authentication → Deployment. Each solved
a limitation of the previous step.

### Q. What is HTML?

**Ans:** Defines the structure/content of a webpage.

### Q. What is CSS?

**Ans:** Styles the webpage (colors, layout, fonts, spacing).

### Q. What is JavaScript?

**Ans:** Adds logic and interactivity to webpages.

### Q. Why do we need a backend?

**Ans:** To process requests, apply business logic, and store/retrieve
data securely.

### Q. What is Node.js?

**Ans:** A JavaScript runtime that lets JavaScript run outside the
browser.

### Q. What is a database?

**Ans:** Permanent storage for application data.

### Q. SQL vs NoSQL?

**Ans:** SQL = structured tables. NoSQL = flexible documents.

### Q. What is CRUD?

**Ans:** Create, Read, Update, Delete.

### Q. What is an API?

**Ans:** A way for the frontend and backend to communicate.

### Q. Why do we use async/await?

**Ans:** To handle slow tasks without blocking execution.

### Q. What is npm?

**Ans:** Package manager for JavaScript libraries.

### Q. What is npx?

**Ans:** Runs a package without installing it globally.

### Q. What is React?

**Ans:** A library for building UI using reusable components.

### Q. Why React?

**Ans:** It updates the UI efficiently based on state changes.

### Q. What is Context API?

**Ans:** Shares data across components without prop drilling.

### Q. What is TypeScript?

**Ans:** JavaScript with static type checking.

### Q. Why TypeScript?

**Ans:** Catches many errors before the code runs.

### Q. What is Next.js?

**Ans:** A React framework with routing, server rendering, APIs, and
more built in.

### Q. What is Authentication?

**Ans:** Verifying who the user is.

### Q. What is Deployment?

**Ans:** Hosting an application so others can access it over the
internet.

------------------------------------------------------------------------

# 🟨 JavaScript

### Q. Why does updating Node sometimes change the npm version?

**Ans:** npm is bundled with Node.js. Installing a new Node version
usually installs the bundled npm version.

------------------------------------------------------------------------

### Q. What is `const`?

**Ans:** Declares a variable whose reference cannot be reassigned.

``` js
const age = 20;
```

------------------------------------------------------------------------

### Q. Can a function be stored in a variable?

**Ans:** Yes. Functions are first-class objects.

``` js
const greet = () => {};
```

------------------------------------------------------------------------

### Q. What is an arrow function?

**Ans:** A shorter syntax for writing functions using `=>`. Commonly
used in React.

``` js
const greet = () => {};
```

------------------------------------------------------------------------

### Q. What are the common ways to write a function?

``` js
// Function Declaration
function greet() {}

// Function Expression
const greet = function () {};

// Arrow Function ⭐
const greet = () => {};
```

------------------------------------------------------------------------

### Q. What does `return` do in a React component?

**Ans:** Returns the JSX that React renders.

``` jsx
return <h1>Hello</h1>;
```

------------------------------------------------------------------------

# ⚛️ React

### Q. What is JSX?

**Ans:** HTML-like syntax used to describe UI inside
JavaScript/TypeScript. JavaScript expressions are written inside `{}`,
but statements like `if`, `for`, and `const` are not allowed.

``` jsx
<h1>{name}</h1>
```

------------------------------------------------------------------------

### Q. What is a React component?

**Ans:** A JavaScript/TypeScript function that returns JSX.

``` jsx
const Page = () => {
  return <h1>Hello</h1>;
};
```

------------------------------------------------------------------------

### Q. What is `cn()`?

**Ans:** A utility function that conditionally combines CSS class names,
commonly used with Tailwind CSS.

``` jsx
className={cn(
  "p-4",
  isError && "text-red-500"
)}
```

------------------------------------------------------------------------

# ▲ Next.js

### Q. What does `export` do?

**Ans:** Makes variables/functions available to other files.

``` ts
export const a = 10;
```

------------------------------------------------------------------------

### Q. What is a default export?

**Ans:** The main export of a file. A file can have only one.

``` ts
export default Page;
```

------------------------------------------------------------------------

### Q. Named export vs default export?

``` ts
// Named
export const a = 10;
import { a } from "./file";

// Default
export default Page;
import Page from "./file";
```

------------------------------------------------------------------------

### Q. Why does Next.js use `export default` in `page.tsx`?

**Ans:** Next.js renders the component exported as the default from
`page.tsx`.
