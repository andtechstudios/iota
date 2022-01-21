
Substitute the following environment variables:

| Name | Example |
| --- | --- |
| `IOS_APP_URL` | `https://$CI_PROJECT_ROOT_NAMESPACE.$CI_PAGES_DOMAIN/-/$CI_PROJECT_NAME/-/jobs/$CI_JOB_ID/artifacts/public/build.ipa` |
| `IOS_MANIFEST_URL` | `https://$CI_PROJECT_ROOT_NAMESPACE.$CI_PAGES_DOMAIN/-/$CI_PROJECT_NAME/-/jobs/$CI_JOB_ID/artifacts/public/manifest.plist` |
| `IOS_APP_TITLE` | `$CI_PROJECT_TITLE` |
| `IOS_APP_BUNDLE_IDENTIFIER` | `com.company.product` |
| `IOS_APP_VERSION` | *see code below* |

```
version=$(git tag -l --sort=-v:refname | head -n 1)
version=${version/v/}
```
