# iOTA
*Template frontend for over-the-air distribution*

## Usage
1. Copy the `exampleSite` folder from this repository.
2. Add your iOS app (`.ipa`).
3. Replace the [iOTA environment variables](#iota-variable-reference) in the following files:
    * `index.html`
    * `manifest.list`

> You can use `envsubst` to assist with this step.

4. Optional: replace `static/icon.png` without *your* app's icon.
5. Publish the website to a **publicly accessible** location (i.e. GitHub Pages).
6. From the iPhone/iPad you want to install the app onto, visit the web page. Follow the instructions to download the app to your device.

> Reminder: make sure the iPhone/iPad is included in the provisioning profile used to build the iOS app. (Refer to [Apple Developer docs](https://developer.apple.com/library/archive/documentation/ToolsLanguages/Conceptual/DevPortalGuide/DistributinganApp/DistributinganApp.html) for more details)

## iOTA Variable Reference
| Name | Example (GitLab CI/CD) |
| --- | --- |
| `IOTA_DOWNLOAD_URL` | `itms-services://?action=download-manifest&url=$CI_PAGES_URL/manifest.plist` |
| `IOTA_APP_URL` | `$CI_PAGES_URL/build.ipa` |
| `IOTA_APP_TITLE` | `$CI_PROJECT_TITLE` |
| `IOTA_APP_BUNDLE_IDENTIFIER` | `com.company.product` |
| `IOTA_APP_VERSION` | *see code below* |
| `IOTA_APP_SIZE` | `sizeof build.ipa` |
| `IOTA_TIMESTAMP` | `$CI_JOB_STARTED_AT` |

```
$ version=$(git tag -l --sort=-v:refname | head -n 1)
$ version=${version/v/}
```

# Links
* [iOTA container image](https://github.com/andtechstudios/iota/pkgs/container/iota)
* [Moment.js](https://momentjs.com/)
* [darken](https://github.com/ColinEspinas/darken)
