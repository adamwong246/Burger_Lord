./components holds all the React classes, broken into 2 folders by route. These components are meant to be so simple that testing of React components is not necessary.

./state holds the redux store and selectors. `selectors.js` and `store.js` comprise the (near) totality of test-worthy logic. 

The architecture aims to focus on state testing, rather than unit testing, component testing or integration testing. All testing is done by making a store, dispatching actions to that store and verifying the ouput of the 2 selectors `NewOrderSelector` and `OrdersSelector`