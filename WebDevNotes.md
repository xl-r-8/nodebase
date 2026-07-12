# 🌐 Web Development - Big Picture Notes (Interview Revision)

> **Goal:** Short, interview-focused notes with quick syntax.

------------------------------------------------------------------------

# 📝 General Notes

### Debugging Rule

If your output differs from a tutorial, it's usually one of these:

- 🐞 Bug
- ⚙️ Configuration Difference
- 📦 Version Difference

**Check versions before assuming your code is wrong.**
------------------------------------------------------------------------

# 🌍 Big Picture

### Q1. What is HTML?
Ans: Defines the structure/content of a webpage.
Example
<h1>Hello</h1>

### Q2. What is CSS?
Ans: Styles the webpage (colors, layout, fonts, spacing).
Example
h1 {
  color: red;
}

### Q3. What is JavaScript?
Ans: Adds logic and interactivity to webpages.
Example
button.onclick = () => {
  alert("Hello");
};

### Q4. What are Frontend and Backend? Why do we need a Backend?
Ans: Frontend is the part users interact with. 
Backend processes requests, applies business logic, authenticates users, and communicates with the database.
User ⇄ Frontend ⇄ Backend ⇄ Database

### Q5. What is Node.js?
Ans: A JavaScript runtime that lets JavaScript run outside the browser.
Example
console.log("Server Started");

### Q6. What is a database?
Ans: Permanent storage for application data.
Example
Users
1  Abhi
2  John

### Q7. SQL vs NoSQL?
Ans: SQL = structured tables. NoSQL = flexible documents.
Example
SQL
id | name
NoSQL
{
  "name": "Abhi"
}

### Q8. What is CRUD?
Ans: Create, Read, Update, Delete.
Example
Create User
Read User
Update User
Delete User

### Q9. What is an API?
Ans: A way for the frontend and backend to communicate.
Flow
Frontend ⇄ API ⇄ Backend

### Q10. What is npm?
Ans: Package manager for JavaScript libraries.
npm install react

### Q11. What is npx?
Ans: Runs a package without installing it globally.
npx create-next-app

### Q12. What is React?
Ans: A library for building UI using reusable components.
Example
<Button />
<Card />

### Q13. What is Next.js?
Ans: A React framework with routing, server rendering, APIs, and more built in.
Example
React + Routing + Backend + SSR(server sider rendering) 

### but what is ssr? seo? how do they work ? ====================================================================================================

### Q14. What is Tailwind CSS?
Ans: A utility-first CSS framework where styling is done using predefined classes instead of writing separate CSS.
<div className="text-red-500 p-4 rounded-lg" />

### Q15. What is Node.js?
Ans: A JavaScript runtime that lets JavaScript run outside the browser.
console.log("Server Started");

### Q16. What are Context API and TypeScript?
Ans: Context API shares data across components without prop drilling. 
<UserContext.Provider value={user}>
TypeScript adds static type checking to JavaScript.
let age: number = 20;

### Q17. What are Authentication and Deployment?
Ans: Authentication verifies a user's identity. Deployment hosts an application on a server so others can access it.
Login → Verify → Create Session
Laptop → Server → Users

### Q15. What is className?
Ans: React's attribute for applying CSS classes. It replaces HTML's class because class is a JavaScript keyword.
<div className="text-red-500" />

### Q17. Why do we use async/await?
Ans: To handle slow tasks (network, database, files) without blocking execution.
const data = await fetch("/api/users");

------------------------------------------------------------------------

# 🟨 JavaScript

### Q1. Why does updating Node sometimes change the npm version?

**Ans:** npm is bundled with Node.js. Installing a new Node version
usually installs the bundled npm version.

------------------------------------------------------------------------

### Q2. What is `const`?

**Ans:** Declares a variable whose reference cannot be reassigned.

``` js
const age = 20;
```

------------------------------------------------------------------------

### Q3. Can a function be stored in a variable?

**Ans:** Yes. Functions are first-class objects.

``` js
const greet = () => {};
```

------------------------------------------------------------------------

### Q4. What is an arrow function?

**Ans:** A shorter syntax for writing functions using `=>`. Commonly
used in React.

``` js
const greet = () => {};
```

------------------------------------------------------------------------

### Q5. What are the common ways to write a function?

``` js
// Function Declaration
function greet() {}

// Function Expression
const greet = function () {};

// Arrow Function ⭐
const greet = () => {};
```

------------------------------------------------------------------------

### Q6. What does `return` do in a React component?

**Ans:** Returns the JSX that React renders.

``` jsx
return <h1>Hello</h1>;
```

------------------------------------------------------------------------

# ⚛️ React

### Q1. What is JSX?

**Ans:** HTML-like syntax used to describe UI inside
JavaScript/TypeScript. JavaScript expressions are written inside `{}`,
but statements like `if`, `for`, and `const` are not allowed.

``` jsx
<h1>{name}</h1>
```

------------------------------------------------------------------------

### Q2. What is a React component?

**Ans:** A JavaScript/TypeScript function that returns JSX.

``` jsx
const Page = () => {
  return <h1>Hello</h1>;
};
```

------------------------------------------------------------------------

### Q3. What is `cn()`?

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

### Q1. What does `export` do?

**Ans:** Makes variables/functions available to other files.

``` ts
export const a = 10;
```

------------------------------------------------------------------------

### Q2. What is a default export?

**Ans:** The main export of a file. A file can have only one.

``` ts
export default Page;
```

------------------------------------------------------------------------

### Q3. Named export vs default export?

``` ts
// Named
export const a = 10;
import { a } from "./file";

// Default
export default Page;
import Page from "./file";
```

------------------------------------------------------------------------

### Q4. Why does Next.js use `export default` in `page.tsx`?

**Ans:** Next.js renders the component exported as the default from
`page.tsx`.
------------------------------------------------------------------------

# 📦 UI Libraries

### Q1. Why is shadcn/ui different from most UI libraries?
**Ans:** Most UI libraries keep components inside `node_modules`,
while shadcn copies the component into your project, allowing full 
customization.
**Quick Comparison**
Traditional UI Library
node_modules/
    Button.tsx
❌ Don't modify
shadcn 
components/
  ui/
    button.tsx
✅ Fully editable
------------------------------------------------------------------------

# 🗄️ Prisma

### Q1. What is Prisma? Why are there two Prisma packages: 
`prisma` and `@prisma/client`?
**Ans:** Prisma is an ORM for JavaScript/TypeScript. An ORM 
(Object Relational Mapper) lets you interact with a relational database 
using programming language objects/functions instead of writing raw SQL 
queries. 
`prisma` is the CLI used during development (schema, migrations, 
code generation), while `@prisma/client` is the generated library your 
application uses to query the database.

**Quick Example**

Without Prisma (SQL)
```sql
SELECT * FROM User;
```

With Prisma
```ts
const users = await prisma.user.findMany();
```

**Quick Flow**
```text
Your Code
     │
@prisma/client
     │
Prisma CLI (generated)
     │
SQL
     │
PostgreSQL
```
<!-- [alt text](image.png) ![alt text](image-1.png) -->
------------------------------------------------------------------------

### Q2. What is a `.env` file? Why do we use it?
**Ans:** A `.env` file stores configuration (API keys, database URLs, 
secrets) separately from the source code. This keeps sensitive data out
of GitHub and allows different configurations for development and production.
**Example**
```env
DATABASE_URL="postgresql://..."
```
------------------------------------------------------------------------

### Q3. How does Prisma work?

**Ans:** Install Prisma, initialize it, define your database models in `schema.prisma`, configure the database in `.env`, run migrations to update the database, generate the Prisma Client, then use it in your code.

**Quick Flow**
```text
npm install prisma --save-dev
npm install @prisma/client
        │
npx prisma init
        │
Creates:
├── prisma/schema.prisma
└── .env
        │
Add DATABASE_URL
        │
Define Models
        │
npx prisma migrate dev
        │
Database Updated
        │
npx prisma generate
        │
@prisma/client
        │
Your Code
```
 
------------------------------------------------------------------------
### Q4. What are the important Prisma files?
**Ans:** `schema.prisma` defines the database schema, `.env` stores 
the database URL, `migration.sql` stores SQL generated by migrations, 
`prisma.config.ts` configures Prisma, and `src/generated/prisma` 
contains the generated Prisma Client.

**Quick Structure**
```text
prisma/
│
├── schema.prisma
├── migrations/
│      └── migration.sql
│
.env
prisma.config.ts
src/generated/prisma
```

migration files? what are these? how imp are they in case of development and production? in development we can remove it and start over but not in production? npx prisma studio

npx prisma migrate dev, what does it do? creates migration and also prisma client(for older versions or for newer prisma too?). what is generated folder? it contains types but for what?

lib->db.ts, something about prisma client imp for development or something. these methods and tech stack keep on changing a lot with time, you cant learn a method and then expect yourself to do everything by yourself. times have changed, dont focus on methods, focus on concepts like hot reload, db, prisma, prisma client, development only issue and why they dont happen in production, production related issues that dont show up in development, what are all the types of issue that usually happen, typescript, js, react, client and server components, async, sync, etc concepts. and about those methods? whenever stuck try to read the documentation and ask ai. so we are not learning syntaxes and methods, we are learning concepts: what are we doing? what is a schema, migration? what is prisma and how does it work, for eg: some words related to prisma are schema, migrations, client, database, postgresql, prisma client,... etc. we can learn about some methods and syntaxes, but just what they do and not remembering the exact syntax word to word. ig i am confused in these things, what i feel is i should def know about terminal commands like npx prisma migrate dev coz they can be asked in interviews(but i think its rare, idk), and i should know the file and folder structure and what type of code is there and what is the purpose of blocks or sections of codes and the file in particular, but i should definitely not try to memorize the code and syntax.

db.ts: hot reload, global, db, no new instsnces of prismaclient on hot reload, development only issue(wwhat are other types of issues?): no need to do it in case of productions, antonio reads documentations,

page.tsx: learn typescript js and react, client and server components(things like useEffect and async sync),async sync (which components can do and cant do?), 