This module focused on creating dropdown menus.
It doesn't do any styling, all stylings are up to the user.
The modules only creates dropdowns for user for 2 events:
- Click
- Hover

The module doesnt create any Elements, it requires them.
The recommended structure for the dropdown menu is as follows:
- Outermost div container which will contain everything
- Button and Nav (or a container for the nav)
- Inside the Nav your menu items (Ul/Ol with Li items)

To hide the menu items, the module sets its maxHeight to 0px
and to show it sets the maxHeight to scrollHeight + px

Basic styling:
.menu-container {
  position: relative;
  padding-bottom: 20px;
  width: fit-content;
}

.menu-nav {
  position: absolute;
  background-color: grey;
}

ul {
  padding: 100px;
}