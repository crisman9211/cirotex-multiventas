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
