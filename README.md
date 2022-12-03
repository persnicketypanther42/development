# Development

### Link to Deployed Website
`https://persnicketypanther42.github.io/development/`

### Goal and Value of the Application
The goal of this application is to provide users with a simple, easy-to-use interface for purchasing skincare products. 

### Usability Principles Considered
The interface provides users with the ability to filter based on their skin type and the type of product they would like to purchase, allowing for an efficient shopping experience. The interface also provide a means to sort the items by price and customers' ratings. Keeping in mind the typical mental model for these sorting methods, price is sorted from lowest to highest, and rating is sorted from highest to lowest. There is minimal text throughout the site, making it easy to find the important things: filtering/sorting criteria, essential product information, and the cart. Moreover, in order to prevent a need for excessive scrolling back and forth, products can be removed from the cart in the same location they are added. To that same end, the sorting/filtering capabilities were made to be always accessible by providing them in a fixed left sidebar. In that same sidebar, I provided a button that allows for all sorting/filtering criteria to be completely reset back to default. Finally, important accessbility considerations were made, such as providing alternative text and using high-contrast text/background colors in order to aid in readability.

### Organization of Components
My main component is the Index component, which simply renders the App component in the window root. The App component represents the interaction of the different components: the FilteringOpts components, the SortOpts component, the ListItem components, and the CartItems components. 

### How Data is Passed Down Through Components

The App component performs high-level functions such as sorting, filtering, and addingto/removing from the cart. The App component has states that represent the list of visible items, the list of items in the cart, the total cost of items in the cart, the sorting parameter, and the list of filters applied. Somewhat more unique is resetKey state of the App component. The keys of the SortOpts and FilterOpts components in the App are dependent on the resetKey state of the App, which allowed me to quite easily reset the filters and sorting criteria of the App. The App component gathers all of the product and filter data from exports of data.js.

The FilterOpts component has props for the filterTitle (either skin type or product type, for this app), the list of possible values for that filterTitle (called selectFrom), and a method updateFilters. filterTitle and selectFrom allow for the formatting of the filtering checkboxes, and updateFilters gives the FilterOpts component a reference back to the App component. When one of the checkboxes is clicked, FilterOpts is able to use updateFilters to pass information back to the App component about what filter was clicked. The App class can use this to update the information visible on the screen by changing its filters state

The SortOpts component only has a propr for a method updateSort, which works similarly to how updateFilters works in the FilterOpts component, allowing the SortOpts component to communicate back to the App component about what parameter the products should be sorted according to.

The ListItem components represent the products. Each has a dictionary about product information (price, path to an image, ratings, categories it falls under for each filter), as well as a boolean representing if the product is in the cart, and a method from the App that communicates that is called when the button on that particular ListItem component has been pressed. The product information props are used for constructing the card that visually represents the product, and the inCart prop is used to determine what the button on the card should say (add to/remove from cart).

The CartItem components represent th products in the cart. This is essentially the same as the ListItem component, except only some of the product information (from the product dictionary) is displayed, since the CartItems have less space on the screen and don't include images, drawing shoppers' eyes to the items they haven't already planned to purchase.

### How the User Triggers State Changes

Some of this was necessary to explain in order to clarify how the data is passed between components, but briefly, I will cover it again.

The App component gets product and filter information from data.js.
It uses this information to create a SortOpts component, two FilterOpts components, ListItem components, and CartItem components. The SortOpts, FilterOpts, and ListItem/CartItem components use RadioGroups, Checkbox-based Forms, and Buttons, respectively, in tandem with prop methods from the App component to allow user input with these Buttons to change the states of the App components (and these Components own states'). Finall, there is also the Button that is a child of the App component, under its Sidebar div, that allows users to reset all sorting/filtering riteria with just a single click of a button.
