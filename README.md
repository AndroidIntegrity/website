<<<<<<< HEAD
# AndroidIntegiry/website
AIA website source code

# Self-host
If you are using this in a production environment, you should create a NGINX reverse proxy.

1. Clone the repo
2. Install deps with NPM:
    ```bash
    $ npm install
    ```
3. Build CSS with Tailwind and start the server:
    
    **3a.** Build the CSS
    ```bash
    $ npm run build
    ```
    **3b.** Start the server
    ```bash
    $ npm run start
    ```
4. Your server will be accessable on port 3000.

You must run `npm run build` each time you make changes to the classes in the HTML.

The server does not need to be restarted again if you run `npm run start` in another terminal.
=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> ba801c8 (Initial commit from Create Next App)
