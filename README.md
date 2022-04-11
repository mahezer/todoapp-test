# TODO APP Test

This is a TODO List app

## Installing

Clone this repository by running the following command on your terminal
```sh
git clone https://github.com/mahezer/todoapp-test.git
```

The repository contains both the backend and the front end, here's how you run each part

### Back end

Fist, rename the `.env.example` file to `.env`, and configure your MongoDB URL and secret for the JWT token

Then run `cd backend` and `npm install` on your terminal

Finally, run `npm start` to run Gulp to compile the TS files into JS and then start the compiled version off of the `dist` folder

You can find a Postman collection with the available requests under `backend/docs/BackEnd.postman_collection.json`

### Front end

First off, you need to adjust your backend URL on the `frontend/src/utils/constants.ts` file.

Then, since the front end was created using Create React App, running it is simply a matter of running `cd frontend`, `npm install` and then `npm start` on your terminal

## Stack

For this app, I used:

- NodeJS
- Typescript
- MongoDB
- React

## Considerations

I hosted both projects in the same repository for the practicality of the test. I don't usually do that.

