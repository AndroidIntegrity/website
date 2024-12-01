# website
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

    We highly suggest doing this command in another terminal, which will auto-update the CSS. If you do this, use the below command:
    ```bash
    $ npm run tbuild
    ```
    If you choose not to use another terminal, run this:
    ```bash
    $ npm run build
    ```
    **3b.** Start the server

    **↳**If you used a seperate terminal for the CSS, open a new terminal and type the command below.
    
    **↳** If you didn't use a seperate terminal, type the command below.
    ```bash
    $ npm run start
    ```
4. Your server will be accessable on port 3000.