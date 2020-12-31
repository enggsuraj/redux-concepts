# redux-concepts
Redux state management practice and documentation

![redux](https://user-images.githubusercontent.com/6918020/103403296-a23b8a80-4b75-11eb-8ab6-a01d648f7715.png)

## 1. What is a State

🎲 The state of our app is all the data in our application that we have to keep track of for it to work. For example Whether a user is signed in or a guest. And based off of that data, the user message shows the authenticated message "Welcome back!" or the unauthenticated message "You must sign in!". So the authentication status is one piece of state.

🗂 Application state is: it’s like a global object which holds information that you use for various purposes later in the app (e.g. making decisions on which components to render and when, rendering the stored data etc).

🤔 You might be asking why we need this word state. If state is nothing more than data in our application, why don't developers refer to it as app data?

👍 One reason we have a specific term 'state' is to describe how our application change with the data over time. State is important because it tells us the status of our application at any moment. Think of it like an individual frame of a movie.

## 2. State Management

One popular way to manage state across many JavaScript libraries (such as React and Redux) is using objects. 

## 3. Redux

⚛️ Redux is a popular JavaScript library for managing the state of your application. 

## 4. When not to use Redux?
* Tight Budget
* Small and medium size apps
* Simple UI.data flow
* Static data

## History

Some years ago, FLUX had become the standard to manage the states with Reactjs. This way of working combined with its structure of Actions, Dispatchers, Reducers and so on, created a standard which would be applied to the subsequent libraries for lots of applications.

From the bases of this library, we would obtain Redux, which is probably the most well-known library. However, nowadays, and depending on the type of project we are creating and the framework/library we are using, we will find different options.

The different alternatives we would have for our generic project, would be:
* Redux
* Mobx for Vuejs
* COntext API for React











