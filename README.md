# nuxt-ssr-firebase

> A example repo for using nuxt with firebase hosting and cloud functions
> Base on https://github.com/davideast/nuxt-firebase

## Deployment flow

- Change firebase project to yours in `.firbaserc`
```
{
  "projects": {
    "default": "(your firebase project)"
  }
}
```

- Install npm dependencies
```bash
$ npm --prefix src install
$ npm --prefix functions install
```

- Deploy everything
```bash
$ firebase deploy
```
