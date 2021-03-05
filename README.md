# SentryTest

The main goal of this project is to install and setup sentry for a React-Native bare app.

# Goals

- [x] Create a bare ReactNative app
- [x] Install Sentry
- [x] Ensure SourceMaps works properly
- [ ] Ensure native driver works as well
- [ ] Test git integration

# Errors while setting up project

After running:

`yarn sentry-wizard -i reactNative -p ios android`

The wizard ended with a message `🎉  Successfully set up Sentry for your project 🎉`,
but there were some errors and warnings. Which I completely ignored.

Later on, I wasn't able to run the project with `yarn ios` due to:

`PhaseScriptExecution Upload\ Debug\ Symbols\ to\ Sentry`

Which is resolved with:

```sh
npx react-native unlink react-native-sentry
npx react-native link react-native-sentry
```

> Ensure that this completes successfully, with no warning or errors in the console.

---

Currently I can't install pods. When running: `cd ios && pod install`, the following error is thrown:

```
NoMethodError - undefined method `[]' for nil:NilClass
```

Possible related issues: [https://github.com/CocoaPods/CocoaPods/search?q=undefined+method+%60%5B%5D%27+for+nil%3ANilClass&type=Issues](https://github.com/CocoaPods/CocoaPods/search?q=undefined+method+%60%5B%5D%27+for+nil%3ANilClass&type=Issues)
