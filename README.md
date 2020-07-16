# Bob's Restaurant App

For this assessment you will create a small App that will help Bob manage his restaurant. No need for a login system. The App features need to include:

* A list/calendar of who is working each day of the week
* A display of who's working on the current day (when I view in my browser)
* A way to edit employee schedules
* A way to create, update, and delete users
* The ability to view, edit, create and delete burgers-of-the-day
* Display the burger-of-the-day for each day of the week
* In a larger font somewhere, the current day's burger-of-the-day
* A way for Bob to set the burger of the day for each day of the week
* A creative and engaging UI/UX

## Requirements

The only hard requirement is that you must use a modern version of React. The patterns you use is totally up to you. This App was bootstrapped with CRA (Create React App). Try to keep the user experience in mind.

Feel free to use any additional frameworks or libraries you'd like.

**Bonus Points For:**

* Unit tests
* Use of TypeScript
* React Hooks

## Getting Started

To get started, just run the following commands:

```
npm install
npm start
```

Starting the App will kick off two processes: the React App and a simple API. The API is powered by [json-server](https://github.com/typicode/json-server). Refer to `json-server`'s documentation for how to query, edit, delete and create new records. The API intentionally has a small delay in response time, be sure to account for that in your code and the UX.

The webserver can be accessed at:

- [http://localhost:3000](http://localhost:3000)

The API is proxied and can be found at:

- [http://localhost:3001/burgers](http://localhost:3001/burgers)
- [http://localhost:3001/schedule](http://localhost:3001/schedule)
- [http://localhost:3001/users](http://localhost:3001/users)

