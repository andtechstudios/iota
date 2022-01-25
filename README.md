## Usage
1. Substitute the following environment variables. You will need to modify:
  * `index.html`
  * `manifest.list`

| Name | Example |
| --- | --- |
| `IOS_APP_URL` | `https://$CI_PROJECT_ROOT_NAMESPACE.$CI_PAGES_DOMAIN/-/$CI_PROJECT_NAME/-/jobs/$CI_JOB_ID/artifacts/public/build.ipa` |
| `IOS_MANIFEST_URL` | `https://$CI_PROJECT_ROOT_NAMESPACE.$CI_PAGES_DOMAIN/-/$CI_PROJECT_NAME/-/jobs/$CI_JOB_ID/artifacts/public/manifest.plist` |
| `IOS_APP_TITLE` | `$CI_PROJECT_TITLE` |
| `IOS_APP_BUNDLE_IDENTIFIER` | `com.company.product` |
| `IOS_APP_VERSION` | *see code below* |
| `IOS_APP_SIZE` | *sizeof build.ipa* |
| `TIMESTAMP` | *$CI_JOB_STARTED_AT* |

```
version=$(git tag -l --sort=-v:refname | head -n 1)
version=${version/v/}
```

2. Add your iOS app (`.ipa`).
3. Publish this website to a publicly accessible location (i.e. GitHub Pages).
4. From the iPhone/iPad you want to install the app onto, visit the web page. Follow the instructions to download the app to your device.
