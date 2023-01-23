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

import AdminLayout from './layouts/AdminLayout/AdminLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AdminLayout}>
        <Set wrap={ScaffoldLayout} title="StockProducts" titleTo="stockProducts" buttonLabel="New StockProduct" buttonTo="newStockProduct">
          <Route path="/admin/stock-products/new" page={StockProductNewStockProductPage} name="newStockProduct" />
          <Route path="/admin/stock-products/{id}/edit" page={StockProductEditStockProductPage} name="editStockProduct" />
          <Route path="/admin/stock-products/{id}" page={StockProductStockProductPage} name="stockProduct" />
          <Route path="/admin/stock-products" page={StockProductStockProductsPage} name="stockProducts" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Stocks" titleTo="stocks" buttonLabel="New Stock" buttonTo="newStock">
          <Route path="/admin/stocks/new" page={StockNewStockPage} name="newStock" />
          <Route path="/admin/stocks/{id}/edit" page={StockEditStockPage} name="editStock" />
          <Route path="/admin/stocks/{id}" page={StockStockPage} name="stock" />
          <Route path="/admin/stocks" page={StockStocksPage} name="stocks" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Orders" titleTo="orders" buttonLabel="New Order" buttonTo="newOrder">
          <Route path="/admin/orders/new" page={OrderNewOrderPage} name="newOrder" />
          <Route path="/admin/orders/{id}/edit" page={OrderEditOrderPage} name="editOrder" />
          <Route path="/admin/orders/{id}" page={OrderOrderPage} name="order" />
          <Route path="/admin/orders" page={OrderOrdersPage} name="orders" />
        </Set>
        <Set wrap={ScaffoldLayout} title="ShoppingCarts" titleTo="shoppingCarts" buttonLabel="New ShoppingCart" buttonTo="newShoppingCart">
          <Route path="/admin/shopping-carts/new" page={ShoppingCartNewShoppingCartPage} name="newShoppingCart" />
          <Route path="/admin/shopping-carts/{id}/edit" page={ShoppingCartEditShoppingCartPage} name="editShoppingCart" />
          <Route path="/admin/shopping-carts/{id}" page={ShoppingCartShoppingCartPage} name="shoppingCart" />
          <Route path="/admin/shopping-carts" page={ShoppingCartShoppingCartsPage} name="shoppingCarts" />
        </Set>
        <Set wrap={ScaffoldLayout} title="ProductItems" titleTo="productItems" buttonLabel="New ProductItem" buttonTo="newProductItem">
          <Route path="/admin/product-items/new" page={ProductItemNewProductItemPage} name="newProductItem" />
          <Route path="/admin/product-items/{id}/edit" page={ProductItemEditProductItemPage} name="editProductItem" />
          <Route path="/admin/product-items/{id}" page={ProductItemProductItemPage} name="productItem" />
          <Route path="/admin/product-items" page={ProductItemProductItemsPage} name="productItems" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Products" titleTo="products" buttonLabel="New Product" buttonTo="newProduct">
          <Route path="/admin/products/new" page={ProductNewProductPage} name="newProduct" />
          <Route path="/admin/products/{id}/edit" page={ProductEditProductPage} name="editProduct" />
          <Route path="/admin/products/{id}" page={ProductProductPage} name="product" />
          <Route path="/admin/products" page={ProductProductsPage} name="products" />
        </Set>
        <Set wrap={ScaffoldLayout} title="UserClients" titleTo="userClients" buttonLabel="New UserClient" buttonTo="newUserClient">
          <Route path="/admin/user-clients/new" page={UserClientNewUserClientPage} name="newUserClient" />
          <Route path="/admin/user-clients/{id}/edit" page={UserClientEditUserClientPage} name="editUserClient" />
          <Route path="/admin/user-clients/{id}" page={UserClientUserClientPage} name="userClient" />
          <Route path="/admin/user-clients" page={UserClientUserClientsPage} name="userClients" />
        </Set>
        <Set wrap={ScaffoldLayout} title="UserAdmins" titleTo="userAdmins" buttonLabel="New UserAdmin" buttonTo="newUserAdmin">
          <Route path="/admin/user-admins/new" page={UserAdminNewUserAdminPage} name="newUserAdmin" />
          <Route path="/admin/user-admins/{id}/edit" page={UserAdminEditUserAdminPage} name="editUserAdmin" />
          <Route path="/admin/user-admins/{id}" page={UserAdminUserAdminPage} name="userAdmin" />
          <Route path="/admin/user-admins" page={UserAdminUserAdminsPage} name="userAdmins" />
        </Set>
        <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
          <Route path="/admin" page={UserUsersPage} name="admin" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
