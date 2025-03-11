## Denty: 
### Smart Storage System

In this project, I utilized the Next.js App Router to build a modern, efficient, and scalable web application. The App Router provides enhanced routing capabilities,
For example in this project I have dynamic routes like;
To list a product 
/products/[id]/
To perform withdrawals 
/products/[id]/productWithdrawn

Additionally, the API routes were implemented using Next.js API, allowing seamless integration between the frontend and backend within the same framework.
The api routes can be found in 
src/api/

To ensure the reliability and functionality of the application, I implemented end-to-end (e2e) testing using Playwright. This allowed me to simulate user interactions, including the withdrawal functionality.

## Note: When running the app make sure it is running on port 3000, If not the API calls will failed. 

## Getting Started

First install dependencies:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run unit test follow
```bash
npm run test
```
To run E2E tests follow
```bash
npm run dev
npm run e2e
```
