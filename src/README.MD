./view holds all the React classes, broken into 2 folders by route, with a few extras. These components are meant to be so simple that testing of React components is not necessary.

./state holds the redux store and selectors. `selectors.js` and `store.js` comprise the totality of test-worthy logic. 

The architecture aims to focus on state testing, rather than unit testing, component testing or integration testing. All testing is done by making a store, dispatching actions to that store and verifying the ouput of the 2 selectors `NewOrderSelector` and `OrdersSelector`. I have found that state-tests give the best return on developer effort, being easy to develop and fast to execute, while recording the most important "paths" of user interaction.