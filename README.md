This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# cowsay WebDev

# glitch

### `package.json`

```json
{
  "//1": "describes your app and its dependencies",
  "//2": "https://docs.npmjs.com/files/package.json",
  "//3": "updating this file will download and update your packages",
  "name": "hello-sqlite",
  "version": "0.0.1",
  "description": "A simple Node app with SQLite as a database management system, instantly up and running.",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.16.4",
    "sqlite3": "^4.1.0",
    "cors": "^2.8.5"
  },
  "engines": {
    "node": "8.x"
  },
  "repository": {
    "url": "https://glitch.com/edit/#!/hello-sqlite"
  },
  "license": "MIT",
  "keywords": [
    "node",
    "glitch",
    "express"
  ]
}
```

###`index.html`

```html
<!-- This is a static file -->
<!-- served from your routes in server.js -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Welcome to Glitch!</title>
    <meta name="description" content="A cool thing made with Glitch">
    <link id="favicon" rel="icon" href="https://glitch.com/edit/favicon-app.ico" type="image/x-icon">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- import the webpage's stylesheet -->
    <link rel="stylesheet" href="/style.css">
    
    <!-- import the webpage's client-side javascript file -->
    <script src="/client.js" defer></script>
  </head>
  <body>
    <header>
      <h1>
        A Dream of the Future
      </h1>
    </header>

    <main>
      <p class="bold">Oh hi,</p>
      
      <p>Tell me your hopes and dreams:</p>
      
      <form>
        <input name="dream" aria-label="a new dream" type="text" maxlength="100" placeholder="Dreams!">
        <button type="submit" id="submit-dream">Submit Dream</button>
      </form>
      
      <section class="dreams">
        <ul id="dreams"></ul>
        <button id="clear-dreams">
          Clear Dreams
        </button>
      </section>
      
    </main>

    <footer>
      Made with <a href="https://glitch.com">Glitch</a>!
    </footer>

    <!-- include the Glitch button to show what the webpage is about and
          to make it easier for folks to view source and remix -->
    <div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div>
    <script src="https://button.glitch.me/button.js"></script>

  </body>
</html>

```

https://glitch.com/


## Após Baixar e Descompactar o Projeto

Entre no diretório do projeto e rode:

```bash
C:\react-produtos> pwd

Path
----
C:\react-produtos

C:\react-produtos npm install

# .... uma porrada de coisa

C:\react-produtos npm start
```

Agora, Executa o aplicativo no modo de desenvolvimento.
Abra [http: // localhost: 3000] (http: // localhost: 3000) para visualizá-lo no navegador.


