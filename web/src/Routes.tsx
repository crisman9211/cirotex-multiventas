// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="ShoppingCarts" titleTo="shoppingCarts" buttonLabel="New ShoppingCart" buttonTo="newShoppingCart">
        <Route path="/shopping-carts/new" page={ShoppingCartNewShoppingCartPage} name="newShoppingCart" />
        <Route path="/shopping-carts/{id}/edit" page={ShoppingCartEditShoppingCartPage} name="editShoppingCart" />
        <Route path="/shopping-carts/{id}" page={ShoppingCartShoppingCartPage} name="shoppingCart" />
        <Route path="/shopping-carts" page={ShoppingCartShoppingCartsPage} name="shoppingCarts" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ProductItems" titleTo="productItems" buttonLabel="New ProductItem" buttonTo="newProductItem">
        <Route path="/product-items/new" page={ProductItemNewProductItemPage} name="newProductItem" />
        <Route path="/product-items/{id}/edit" page={ProductItemEditProductItemPage} name="editProductItem" />
        <Route path="/product-items/{id}" page={ProductItemProductItemPage} name="productItem" />
        <Route path="/product-items" page={ProductItemProductItemsPage} name="productItems" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Products" titleTo="products" buttonLabel="New Product" buttonTo="newProduct">
        <Route path="/products/new" page={ProductNewProductPage} name="newProduct" />
        <Route path="/products/{id}/edit" page={ProductEditProductPage} name="editProduct" />
        <Route path="/products/{id}" page={ProductProductPage} name="product" />
        <Route path="/products" page={ProductProductsPage} name="products" />
      </Set>
      <Set wrap={ScaffoldLayout} title="UserClients" titleTo="userClients" buttonLabel="New UserClient" buttonTo="newUserClient">
        <Route path="/user-clients/new" page={UserClientNewUserClientPage} name="newUserClient" />
        <Route path="/user-clients/{id}/edit" page={UserClientEditUserClientPage} name="editUserClient" />
        <Route path="/user-clients/{id}" page={UserClientUserClientPage} name="userClient" />
        <Route path="/user-clients" page={UserClientUserClientsPage} name="userClients" />
      </Set>
      <Set wrap={ScaffoldLayout} title="UserAdmins" titleTo="userAdmins" buttonLabel="New UserAdmin" buttonTo="newUserAdmin">
        <Route path="/user-admins/new" page={UserAdminNewUserAdminPage} name="newUserAdmin" />
        <Route path="/user-admins/{id}/edit" page={UserAdminEditUserAdminPage} name="editUserAdmin" />
        <Route path="/user-admins/{id}" page={UserAdminUserAdminPage} name="userAdmin" />
        <Route path="/user-admins" page={UserAdminUserAdminsPage} name="userAdmins" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
