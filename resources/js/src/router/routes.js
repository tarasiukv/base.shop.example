import HomeComponent from "@component/pages/HomeComponent.vue";
import ShopComponent from "@component/pages/ShopComponent.vue";
import ContactComponent from "@component/pages/ContactComponent.vue";
import CartComponent from "@component/pages/CartComponent.vue";
import AdminComponent from "@component/admin/AdminComponent.vue";
import AddProductComponent from "@component/admin/products/AddProductComponent.vue";
import EditProductComponent from "@component/admin/products/EditProductComponent.vue";
import ProductDetailComponent from "@component/pages/ProductDetailComponent.vue";
import LogInComponent from "@component/users/LogInComponent.vue";
import RegistrationComponent from "@component/users/RegistrationComponent.vue";
import AboutComponent from "@component/pages/AboutComponent.vue";
import CategoriesAdminComponent from "@component/admin/categories/CategoriesAdminComponent.vue";
import ProductsAdminComponent from "@component/admin/products/ProductsAdminComponent.vue";
import UsersAdminComponent from "@component/admin/users/UsersAdminComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/shop',
        component: ShopComponent
    },
    {
        path: '/contact',
        component: ContactComponent
    },
    {
        path: '/cart',
        component: CartComponent
    },
    {
        path: '/about',
        component: AboutComponent
    },
    {
        path: '/shop/:id',
        component: ProductDetailComponent
    },
    {
        path: '/login',
        component: LogInComponent
    },
    {
        path: '/registration',
        component: RegistrationComponent
    },
    // ADMIN
    {
        path: '/admin',
        component: AdminComponent

    },
    {
        path: '/admin/categories',
        component: CategoriesAdminComponent
    },
    {
        path: '/admin/products',
        component: ProductsAdminComponent
    },
    {
        path: '/admin/add-product',
        component: AddProductComponent
    },
    {
        path: '/admin/edit-product/:id',
        component: EditProductComponent
    },
    {
        path: '/admin/users',
        component: UsersAdminComponent
    },

];

export default routes;
