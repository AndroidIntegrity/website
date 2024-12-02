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