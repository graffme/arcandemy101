# Arcandemy 101 🧙
This is the repository for my personal project - React Native app for witches. I create it for those who want to
learn the basics of witchcraft. ✨🔮 Go and checkout my [witchy instagram](https://www.instagram.com/arcandemy/).

## Technical information
Basic tools:
* React Native
* React Navigation
* Redux
* Firebase

## Progress
### Done
✔️ Created basic components (Button, TextInput, Link) and modules (auth, home). <br />
✔️ Added Login and Signup scenes for auth module. <br />
✔️ Added react-navigation (navigator module). <br />
✔️ Added Chapter and Page scenes in chapters module. <br />
✔️ Style App Drawer. <br />
✔️ Add Firebase login, registration and add Redux actions (login, logout, register). <br />
✔️ Add AsyncStorage. <br />
✔️ Add List of Pages for Chapters and pass info from JSON file <br />

### TODO
* Add field validation in auth module.
* Add Facebook login and signup.
* Create Navigator dynamically for Chapters.
* Add Chapters logic (block next Chapter unless current is finished and change Main Altar image with every new Chapter).
* Add Forgot Password scene in auth module.
* Add username in Firebase.
* Add user's Chapter progress in Firebase.

## Current views
![Login and registration](./assets/1.png) <br /><br />

The picture on the main screen changes with user's progress (new items are added to the cauldron).
To access the next Chapter user has to finish reading the current Chapter (blocked Chapters have a locker in the Drawer Menu while unlocked ones are marked with a key).
![Main screen and drawer menu](./assets/2.png) <br />
![Chapter and page screens](./assets/3.png) <br />
![Settings](./assets/4.png) <br />
