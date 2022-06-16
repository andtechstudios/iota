# iOTA
*Frontend template for over-the-air app distribution*

[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/andtechstudios/iota?logo=docker)](https://hub.docker.com/r/andtechstudios/iota)

# Usage
## Docker (Recommended)
1. Clone [this repository](https://github.com/andtechstudios/iota).
2. Create an environment file (or use [this](https://github.com/andtechstudios/iota/blob/master/.env.sample)). The file should be name `.env` and placed in the same folder as the `docker-compose.yml`.
3. Run `docker-compose up`.
4. Update the variables in `data/metadata.json` when necessary. Make sure to reload the container.

The iOTA site will be served at `localhost:8080`.

## Static Site
You can deploy *iOTA* as part of your CI/CD workflow.

### iOS
1. Copy the `exampleSite` folder from this repository.
2. Add your iOS app (`.ipa`).
3. Replace the [iOTA environment variables](https://github.com/andtechstudios/iota/wiki/Environment-Variable-Reference) in the following files:
    * `index.html`
    * `manifest.list`

> You can use `envsubst` to assist with this step.

4. Optional: replace `static/icon.png` with *your* app's icon.
5. Publish the website to a **publicly accessible** location (i.e. GitHub Pages).
6. From the iPhone/iPad you want to install the app onto, visit the web page. Follow the instructions to download the app to your device.

> Reminder: make sure the iPhone/iPad is included in the provisioning profile used to build the iOS app. (Refer to [Apple Developer docs](https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/DevPortalGuide/DistributinganApp/DistributinganApp.html) for more details)

### Android
1. Copy the `exampleSite` folder from this repository.
2. Add your Android app (`.apk`).
3. Replace the [iOTA environment variables](https://github.com/andtechstudios/iota/wiki/Environment-Variable-Reference) in the following files:
    * `index.html`

> You can use `envsubst` to assist with this step.

4. Optional: replace `static/icon.png` with *your* app's icon.
5. Publish the website (i.e. GitHub Pages).

> Unlike with iOS, Android does not require the download URL to be publicly accessible.

6. From the Android device you want to install the app onto, visit the web page. Follow the instructions to download the app to your device.

# FAQ
### Where does the name iOTA come from?
* If you abbreviate "**i**OS **O**ver **T**he **A**ir", you get "iOTA".

# Links
* [Moment.js](https://momentjs.com/)
* [darken](https://github.com/ColinEspinas/darken)
