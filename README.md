# Express.js

Answer the next questions.

## Part I

**1. What is `Express.js`?**

It is a framework and is the primary library for other node frameworks which provide robust set of features for web and mobile applications.


**2. How do you call the function responsibly for processing browser requests?**

Request handlers.

**3. Name two core components from `Express.js`**

middleware, routing

**4. Write a _Hello World_ in Express**

`const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))`


** Who wrote Express.js

Ryan Dahl in 2009.

## Part II

**5. Refactor code from last assignment and implement Express.js**

## Part III

**6. Implement an environment variable to take the PORT number, if it exists.**

1. What is an environment variable

Las variables de entorno sirven para definir parámetros sencillos de configuración de los programas, de modo que éstos puedan ejecutarse en diferentes ambientes sin necesidad de modificar el código fuente de un script.

2. How do you access an environment variable using NODE

## Part IV

**7. Take advantage of `npm scripts` and write a shortcut to run the Node app.**

## Part V

**8. Use `morgan` (npm package) to log every request in the console.**


## Part VI

**9. Implement `nodemon` (npm package) to watch our file. Put it inside another `npm script`**

## Part VII

**10. Implement 404 and 500 handlers.**

## Part VIII

**11. Implement a `/api` route**

When I visit `http://localhost:3000/api` I should see `LinkedIn REST API`.

**12. Static Resources**

+ Create a folder called `public` and inside create two directories (styles, views).
+ Read on the Express documentation how you can set a static content to render styles inside the views.

_HINT: It’s called an assets folder, static folder, “host images, styles...”_

+ Inside the html file that we actually have, add a reference to styles.

_HINT: You probably will need to create (or move) the html file inside `views` folder and read through the documentation how you can link a file that is set inside `static content` using Express._

When I visit http://localhost:3000/ I should see the same index file, but in the code the difference will be where is hosted the CSS.
