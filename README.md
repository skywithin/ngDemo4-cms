# NgDemo4-Cms
1. Install jQuery & bootstrap
npm install --save jquery bootstrap@3

2. Create nav bar component
ng g c components/navbar

3. Add navbar sample html from http://getbootstrap.com/docs/3.3/examples/starter-template/

4. Create Page service
ng generate service services/page -m=app.module
ng g s services/page

5. Create Pages component
ng g c components/pages

6. Create routing for Pages component

7. Update navbar navigation

8. Admin pages
ng g c components/adminPages

9. Admin add-page
ng g c components/adminAddPage

10. Create addPage() method

11. Admin edit-page
ng g c components/adminEditPage

12. Create Admin sidebar component & service
ng g c components/adminSidebar
ng g s services/sidebar -m=app.module

13. Create login, logout and register components + user service
ng g c components/login
ng g c components/logout
ng g c components/register
ng g s services/user -m=app.module

14. Add user links to navbar
