# iOTA
*Over-the-Air dashboard for iOS developers*

## Usage
1. Substitute the following environment variables. You will need to modify:
  * `index.html`
  * `manifest.list`

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
version=$(git tag -l --sort=-v:refname | head -n 1)
version=${version/v/}
```

2. Add your iOS app (`.ipa`).
3. Publish this website to a publicly accessible location (i.e. GitHub Pages).
4. From the iPhone/iPad you want to install the app onto, visit the web page. Follow the instructions to download the app to your device.

# Links
* [iOTA container image](https://github.com/andtechstudios/iota/pkgs/container/iota)
* [Moment.js](https://momentjs.com/)
