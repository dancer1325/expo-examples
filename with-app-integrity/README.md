# App Integrity Example

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

Verify that requests come from a genuine, untampered app on a real device using [Expo App Integrity](https://docs.expo.dev/versions/latest/sdk/app-integrity/) — [App Attest](https://developer.apple.com/documentation/devicecheck) on iOS and [Play Integrity](https://developer.android.com/google/play/integrity) on Android — with server-side verification via Expo Router API routes.

## Launch your own

[![Launch with Expo](https://github.com/expo/examples/blob/master/.gh-assets/launch.svg?raw=true)](https://launch.expo.dev/?github=https://github.com/expo/examples/tree/master/with-app-integrity)

## 🚀 How to use

- Install packages with `yarn` or `npm install`.
  - If you have native iOS code run `npx pod-install`
- Copy `.env.example` to `.env` and add your Apple and Google credentials.
- Run `yarn start` or `npm run start` to start the bundler (it also serves the API routes on Node).
- Open the project in a development build on a real device to try it. App Attest and Play Integrity don't work in Expo Go or on simulators/emulators.
- Set `EXPO_PUBLIC_API_URL` to a URL the device can reach (your machine's LAN URL, or a deployed server).

### 📁 File Structure

```
with-app-integrity
├── app
│   ├── _layout.tsx ➡️ Expo Router root stack
│   ├── index.tsx ➡️ Client UI + attestation/assertion flow
│   └── api
│       ├── challenge+api.ts ➡️ Issues one-time challenges
│       └── verify+api.ts ➡️ Verifies attestations, assertions, and tokens
├── helpers
│   ├── store.ts ➡️ In-memory challenge & attested-key store
│   ├── verify-ios.ts ➡️ App Attest verification (node-app-attest)
│   ├── verify-android.ts ➡️ Play Integrity verification (@googleapis/playintegrity)
│   └── is-valid-android-request.ts ➡️ Play Integrity verdict checks
├── app.config.js ➡️ Expo config file
└── .env.example ➡️ Apple & Google credentials template
```

## 📝 Notes

- Learn more about [Expo App Integrity](https://docs.expo.dev/versions/latest/sdk/app-integrity/).
- Learn more about [Development Builds](https://docs.expo.dev/develop/development-builds/create-a-build/)
- Server verification uses [node-app-attest](https://github.com/uebelack/node-app-attest) (iOS) and [@googleapis/playintegrity](https://www.npmjs.com/package/@googleapis/playintegrity) (Android).
