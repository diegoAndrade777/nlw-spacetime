<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek - Spacetime" src="web/src/assets/wallpaper.png" width="800px" />
</h1>
<h1 align="center">Next Level Week - Spacetime</h1>
<p align="center">Project <strong>Spacetime</strong> developed during the Rocketseat Next Level Week.
    With this project, you will be able to can post memories from your time capsule and share them.
</p>

## Technologies
- [NodeJS](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://www.fastify.io/)
- [Prisma](https://www.prisma.io/)
- [NextsJs](https://www.nextjs.org/) (v13 - App Router)
- [react-toastify](https://www.npmjs.com/package/react-toastify)
- [TailwindCSS](https://tailwindcss.com/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [react-native-toast-message](https://www.npmjs.com/package/react-native-toast-message)

## Instalation
To install the dependencies and to execute the **Backend**, clone the project on your computer an execute:
```bash
# Enter on backend directory
$ cd server

# Install dependencies
$ yarn

# Enter the environment variables in .env file
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""

# Run Migrates
$ npx prisma migrate dev

# Start server
$ yarn run dev

# running on port 3333
```

## Backend

<img align="center" src="web/src/assets/nlw01-backend.gif" width="600px"></img>

## Frontend

To run the React's Frontend use:
```bash
# Enter on frontend directory
$ cd web

# Install dependencies
$ yarn

# You must get your clientid from your github profile and put it in the ".env.local" file like this:
NEXT_PUBLIC_GITHUB_CLIENT_ID=

# Run
$ yarn run dev
```
<img align="center" src="web/src/assets/frontend.gif" width="1024px"></img>

## Mobile

To run the Mobile app, use:
```bash
# Enter on mobile directory
$ cd mobile

# Install dependencies
$ yarn

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page
```
<img align="center" src="web/src/assets/mobile.gif" width="300px"></img>

## Licence

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)

Made with ♥ by Diego Andrade :wave: [Get in touch!](https://www.linkedin.com/in/diego-r-andrade/)

