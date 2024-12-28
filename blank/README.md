# My Universal React Project

<p>
  <!-- iOS -->
  <a href="https://itunes.apple.com/app/apple-store/id982107779">
    <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  </a>
  <!-- Android -->
  <a href="https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample">
    <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  </a>
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>

## 🚀 How was it created?

> `npx create-expo my-app`

## How to run this example?

* `npm install` or `yarn`
  * if you have native iOS code run `npx pod-install`
* `npm run start` or `yarn start`
  * web bundled
    * open http://localhost:8081/ | your browser
  * press some option to open it 
    * `i`
      * | Expo Go, introduce the url, BUT WITH 0.0.0.0 | as your localhost
        * exp://0.0.0.0:8081
    * `a`
      * open quemu-system-aarch64
        * Problems: ALL black
          * Solution: TODO:
  * | physical device
    * [Client iOS](https://itunes.apple.com/app/apple-store/id982107779)
    * [Client Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=blankexample)

## Running/Modifying Native Code

* `npx expo prebuild`
  * 👀generate native iOS and Android projects -- from your -- Expo config file (**app.json**/ **app.config.js**) 👀
    * uses
      * compile them
      * run -- via --
        * XCode
        * Android Studio


## Code added
* [View](https://reactnative.dev/docs/view)
* [Text](https://reactnative.dev/docs/text)