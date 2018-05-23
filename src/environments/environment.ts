// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebaseConnectionConfig: {
        apiKey: 'AIzaSyBOSrnVM4MjhLRA50Yf2r8NXvICNZJ9TlU',
        authDomain: 'fptest-c8fc1.firebaseapp.com',
        databaseURL: 'https://fptest-c8fc1.firebaseio.com',
        projectId: 'fptest-c8fc1',
        storageBucket: 'fptest-c8fc1.appspot.com',
        messagingSenderId: '1026834291798'
    }
};
