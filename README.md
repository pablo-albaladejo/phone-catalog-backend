# Phone Catalog Backend

This is the backend implementation for the Phone Catalog App.

There is a live version at github pages:
* https://pablo-albaladejo.github.io/phone-catalog-frontend

A live backend API hosted at Goolge Cloud is available at:
  * https://us-central1-phone-catalog-backend-abc4a.cloudfunctions.net/phones/

## Installation
It can be easily installed via npm

```bash
npm install
```

## Running
Just run at console

```bash
npm start
```
It will start a local server at http://0.0.0.0:8080/

If hot reloading is required:
```bash
nodemon server.js
```
more info: https://github.com/remy/nodemon


## Endpoints

| Endpoint | Method | Description |
| --- | --- | --- |
| /phones | all | List all the registered devices |
| /phones/:id | all | Get and specific device by id |

## Testing

To run unit test via mocha and chai suite just run at console

```bash
npm test
```

Test specifications are located:
* Integration: `/test/integration/**.test.js`
* Unit: `/test/unit/**.test.js`

## DevOps
If you want to use docker with this project, there is a public repository tagged as
* pabloalbaladejo/phone-catalog-backend

Assuming docker is installed in your machine:

```bash
docker pull pabloalbaladejo/phone-catalog-backend
docker run -p 8080:8080 phone-catalog-backend
```

## Author
Feel free to be in touch at:
* pablo.albaladejo.mestre@gmail.com
* https://www.karmaemprendedor.com
* https://stackoverflow.com/users/3395884/pablo-albaladejo