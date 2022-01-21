
Substitute the following environment variables:

| Name | Example |
| --- | --- |
| `IOS_APP_URL` | `$CI_PROJECT_URL/-/jobs/$CI_JOB_ID/artifacts/file/build.ipa` |
| `IOS_APP_BUNDLE_IDENTIFIER` | `com.company.product` |
| `IOS_APP_VERSION` | *see code below* |
| `IOS_APP_TITLE` | `$CI_PROJECT_TITLE` |
| `IOS_MANIFEST_URL` | `$CI_PROJECT_URL/-/jobs/$CI_JOB_ID/artifacts/file/manifest.plist` |

```
version=$(git tag -l --sort=-v:refname | head -n 1)
version=${version/v/}
```
