# Pre-Launch Website

The beta signup website for Freely.

## Developers

This repo has the source code and scripts to build a static site (just HTML, CSS, & JS) suitable for production usage.

### Prequisites

- [Node.js 12](https://nodejs.org/en/download/)

When you are ready to start running scripts you must first install the required dependencies.

This should ideally be done with [Yarn 1](https://classic.yarnpkg.com/lang/en/).
Other package managers like [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.js.org/) may also work, although they will ignore the `yarn.lock` lockfile, which insures that dependencies are installed deterministically.

```s
yarn install
# or npm install
# or pnpm install
```

### Scripts

The following scripts are in the `package.json` `scripts` key.
You can run scripts with Yarn (preferably) or npm.

| Script name | Description                                                                    |
| ----------- | ------------------------------------------------------------------------------ |
| `build`     | Build for production and output static site to `./dist`.                       |
| `lint`      | Use ESLint to look for JavaScript issues.                                      |
| `start`     | Start a development server at `localhost:1234` with hot-reloading.             |
| `prebuild`  | Delete the `./dist` folder. This automatically runs before the `build` script. |

You can run a script using your Node.js package manager.

```sh
# Run the `build` script

yarn run build
# npm run build
# pnpm run build
```

### Using the website

The website has a few notable features for developers.

- Redirect users to `/?verified` and a modal will appear that tells them their account has been verified.
