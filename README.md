
![Logo](https://kitchendryapp.com/icon-wide.png)


# Kitchendry

A web recipe app



## Deploy Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/9bd2754a-b4bd-4421-bba9-f802bdfc3d20/deploy-status)](https://app.netlify.com/sites/shimmering-gnome-a509d4/deploys)


## Tech Stack

**Client:** Typescript, NextJS, Zustand, TailwindCSS, ArcUI, NextAuth

**Server:** Typescript, NextJS, Graphql, NextAuth, Mongoose


## Run Locally

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`NEXT_PUBLIC_URL_SERVER_GRAPHQL=http://localhost:3000/api/graphql`

`DATABASE_URL`

`AUTH_SECRET=abc`

`NEXTAUTH_SECRET=abc`

`NEXT_PUBLIC_STRIPE_KEY`

`NEXT_PUBLIC_STRIPE_SECRET`