# This is a modern esm template for react to use instead of create-[react|snowpack|vite]-app

* I opted out of the jest to use @web/test-runner like templates from snowpack do, but in the future I'll probably switch it for uvu/jest when ESM is officially supported
* I like Vite better than Snowpack but for now I couldn't find easy way of integrating it with testing without disgusting Babel setups and such
* This uses npm instead of my usual yarn, just to switch things up
* Heavily opinionated setup