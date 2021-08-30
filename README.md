# app

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

````
For every tick
    if any angent next destination is another building
        if building is close
            stay at current building
        else
            move to next destination
    if any agent arrive at new building
        if new building contain infection agent
            calculate is infection or not
        if new building not sterilized
            calculate is infection or not
    if calculate agent is infection or not
        if agent is wear any type of mask
            reduce the infection ratio
    if an infection agent in the building 
        save a unsterilized ticket equal now tick add 2000 tick
    if building sterilized is required
        every 2000 tick set building sterilized status is true
        
````