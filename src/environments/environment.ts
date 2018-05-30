// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCb2ZEUgGuz1dvamA7D3jQstpMQPtv4QTU",
    authDomain: "todolist-17f0d.firebaseapp.com",
    databaseURL: "https://todolist-17f0d.firebaseio.com",
    projectId: "todolist-17f0d",
    storageBucket: "todolist-17f0d.appspot.com",
    messagingSenderId: "222498956215"
  }
};
