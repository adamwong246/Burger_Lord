./components holds the important React classes which connect to 1) the store dispatcher and 2) a selector. These files comprise the majority of the testing concerns. 

./view holds the simple React classes, broken into 2 folders by route, with a few extras. These components are meant to be so simple that testing of React components is not really necessary. They should have very little state and even less logic. These components should have react storybooks associated with them.

./state holds the redux store and testing defintions. 

The architecture aims to focus on state testing, rather than unit testing, component testing or integration testing. All testing is done by making a store, dispatching actions to that store and verifying the ouput of the 2 selectors `NewOrderSelector` and `OrdersSelector`. I have found that state-tests give the best return on developer effort, being easy to develop and fast to execute, while recording the most important "paths" of user interaction.