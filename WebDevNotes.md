# 🌐 Web Development - Big Picture Notes (Interview Revision) to shift projects into webD folder

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
```jsx
<Button />
<Card />
```

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

# 🚀 Project Progress — What We Have Done & Where We Are

## Step 1 — Refreshed Web Development Fundamentals

We first rebuilt the basic mental model of modern web development:

```text
HTML → CSS → JavaScript → Backend → Database → API
                         ↓
              React → TypeScript → Next.js
```

We revised:
- JavaScript functions and arrow functions
- `const`
- `return`
- JSX
- React components
- `export` / `default export`
- `className`
- `async/await`
- npm / npx
- React and Next.js basics

**Status:** ✅ Done / refreshed

------------------------------------------------------------------------

## Step 2 — Set Up Next.js

We created the project using:

```text
Next.js 15.5.4
```

We worked with the App Router structure:

```text
src/
└── app/
    └── page.tsx
```

We also understood:
- `page.tsx`
- React components
- JSX
- client/server concepts at a basic level
- hot reload during development

**Status:** ✅ Done

------------------------------------------------------------------------

## Step 3 — Set Up Tailwind CSS

We added Tailwind CSS and learned the basic idea of utility-first CSS.

Example:

```tsx
<div className="p-4 text-center">
```

We also understood why `className` is used in React instead of HTML's `class`.

**Status:** ✅ Done

------------------------------------------------------------------------

## Step 4 — Set Up shadcn/ui

We added shadcn/ui and learned how its components work.

Important concept:

```text
shadcn component
      ↓
Copied into OUR project
      ↓
We own the source code
      ↓
We can modify it
```

We also learned:
- `Button`
- component props
- `variant`
- `cn()`
- conditional class names

**Status:** ✅ Done

------------------------------------------------------------------------

## Step 5 — Set Up PostgreSQL Database

We chose:

```text
Neon → Hosted PostgreSQL
```

The database connection URL was stored in:

```text
.env
```

Example:

```env
DATABASE_URL="postgresql://..."
```

We understood:

```text
PostgreSQL = Database
Neon       = Hosted PostgreSQL
```

**Status:** ✅ Done

------------------------------------------------------------------------

## Step 6 — Started Prisma

We installed Prisma and initialized it.

Prisma gives us an ORM layer between our application and PostgreSQL.

```text
Next.js
   ↓
Prisma
   ↓
PostgreSQL
```

We created:

```text
prisma/
└── schema.prisma
```

**Status:** ✅ Done

------------------------------------------------------------------------

## Step 7 — Created Database Models

We created `User` and `Post` models in `schema.prisma`.

The models included:
- IDs
- strings
- optional fields
- default values
- unique constraints
- relationships

Example relationship:

```text
User
 ↓
has many
 ↓
Post
```

**Status:** ✅ Done

------------------------------------------------------------------------

## Step 8 — Created the Database Migration

We ran:

```bash
npx prisma migrate dev
```

This created a migration such as:

```text
prisma/
└── migrations/
    └── ..._init/
        └── migration.sql
```

The migration contained SQL that created our database tables and relationships.

So we understood:

```text
schema.prisma
      ↓
migration
      ↓
SQL
      ↓
PostgreSQL
```

**Status:** ✅ Done

------------------------------------------------------------------------

## Step 9 — Generated Prisma Client

We generated the Prisma Client using:

```bash
npx prisma generate
```

This created generated Prisma code under:

```text
src/generated/prisma/
```

The generated client allows application code to do things like:

```ts
const users = await prisma.user.findMany();
```

instead of manually writing SQL.

**Status:** ✅ Done

------------------------------------------------------------------------

## Step 10 — Encountered a Prisma Version Difference

Initially, we were using:

```text
Prisma 7.8.0
```

But the tutorial/instructor was using:

```text
Prisma 6.16.3
```

Prisma 7 had changed some configuration and client-generation behavior, which caused differences such as the new adapter-based setup.

Instead of constantly translating the instructor's code, we decided to match the tutorial version.

We switched to:

```text
Prisma         → 6.16.3
@prisma/client → 6.16.3
```

**Status:** ✅ Resolved

------------------------------------------------------------------------

## Step 11 — Restored Prisma 6 Configuration

For Prisma 6, our schema uses:

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "../src/generated/prisma"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

The old Prisma 7-specific `prisma.config.ts` is not part of our intended Prisma 6 setup.

**Status:** ✅ Resolved

------------------------------------------------------------------------

## Step 12 — Understood the Important Prisma Concepts

We now understand the roles of:

```text
schema.prisma
    ↓
Defines database structure

Migration
    ↓
Records database structure changes

Prisma Client
    ↓
Lets application code query database

PostgreSQL
    ↓
Actually stores the data
```

We also understood the important commands:

```bash
npx prisma generate
npx prisma migrate dev
npx prisma migrate deploy
npx prisma migrate reset
npx prisma migrate status
npx prisma studio
npx prisma -v
```

We don't need to memorize every command perfectly; we need to know what each one does.

**Status:** ✅ Conceptually done

------------------------------------------------------------------------

# 📍 WHERE WE ARE RIGHT NOW

Everything up to the database foundation is essentially complete:

```text
Web fundamentals        ✅
        ↓
Next.js                  ✅
        ↓
Tailwind                 ✅
        ↓
shadcn/ui                ✅
        ↓
Neon PostgreSQL          ✅
        ↓
Prisma                   ✅
        ↓
Schema + Models          ✅
        ↓
Migrations               ✅
        ↓
Prisma Client            ✅
```

## 🔴 CURRENT STEP

We are now moving from:

```text
DATABASE SETUP
```

to:

```text
ACTUAL BACKEND DEVELOPMENT
```

### Immediate next step:

```text
lib/db.ts
   ↓
Create/reuse Prisma Client
   ↓
Backend/API
   ↓
Authentication
   ↓
N8N/Zapier clone functionality
```

The next concept to understand is the **Prisma Client singleton in `lib/db.ts`**, especially:

```text
Why do we create a global Prisma instance?
        ↓
How does Next.js hot reload affect it?
        ↓
Why is this mainly important in development?
        ↓
How does the application actually use Prisma?
```

------------------------------------------------------------------------

# 🧠 Our Learning Approach Going Forward

We are **not trying to memorize the tutorial**.

We are focusing on:

```text
Understand the concept
        ↓
Understand why it exists
        ↓
Understand the architecture
        ↓
Understand the file/folder purpose
        ↓
Recognize the syntax/command
        ↓
Look up exact syntax when needed
```

The goal is to finish the project while actually understanding how the pieces fit together.


