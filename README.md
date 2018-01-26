# myValencer
[![GitHub release][release-image]][release-url]
[![Build][travis-image]][travis-url]
[![Dependencies][david-image]][david-url]
[![DevDependencies][david-dev-dep-image]][david-dev-url]
[![MIT License][license-image]][license-url]

Welcome to **myValencer**, the valence pattern search engine for FrameNet!

**myValencer** is a web application powered by the [Valencer API](https://github.com/akb89/valencer)

#### Are you using us in your work? Please cite us!
```latex
@InProceedings{kabbach-ribeyre:2017:ELEX,
  author    = {Kabbach, Alexandre  and  Ribeyre, Corentin},
  title     = {myValencer: a Valence Patterns Search Engine for FrameNet},
  booktitle = {eLex 2017 conference},
  month     = {September},
  year      = {2017},
  address   = {Leiden, Netherlands},
  url       = {https://elex.link/elex2017/}
}
```

## Documentation
Check out [myValencer's manual]()

## HowTo &ndash; Start myValencer

### Install the required dependencies
Run the following command in your terminal, under myValencer directory:
```
npm install
```

### Set-up the configuration
Modify the `app/config/production.js` file according to your desired settings:
```
const production = {
    port: 5555,
    api_host: 'https://api.valencer.io',
};
```
With `port` the port of myValencer and `api_host` the URL of the Valencer API

### Build the distribution
Run the following command in your terminal, under myValencer directory:
```
npm run build
```

### Start the server
Run the following command in your terminal, under myValencer directory:
```
npm run start
```

### Stop the server
To stop the server, run:
```
npm run stop
```

### Monitoring
To monitor myValencer once started, run:
```
pm2 monit myValencer
```
If pm2 is not installed globally in your environment, you can also do:
```
./node_modules/.bin/pm2 monit myValencer
```

To access myValencer logs, run:
```
pm2 logs myValencer
```

[release-image]:https://img.shields.io/github/release/akb89/myvalencer.svg?style=flat-square
[release-url]:https://github.com/akb89/myvalencer/releases/latest
[travis-image]:https://img.shields.io/travis/akb89/myvalencer.svg?style=flat-square
[travis-url]:https://travis-ci.org/akb89/myvalencer
[coverage-image]:https://img.shields.io/coveralls/akb89/myvalencer/master.svg?style=flat-square
[coverage-url]:https://coveralls.io/github/akb89/myvalencer?branch=master
[license-image]:http://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE.txt
[david-url]: https://david-dm.org/akb89/myvalencer
[david-image]: https://david-dm.org/akb89/myvalencer.svg?style=flat-square
[david-dev-dep-image]: https://img.shields.io/david/dev/akb89/myvalencer.svg?style=flat-square
[david-dev-url]: https://david-dm.org/akb89/myvalencer?type=dev
