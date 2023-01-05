import { createRouter, createWebHashHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
import HomePage from "../views/HomePage.vue";
import CategoryPage from "../views/CategoryPage.vue";
import SubCategory from "../views/SubCategory.vue";
import ContactPage from "../views/ContactPage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import EditProfile from "../views/EditProfile.vue";
import LastOrders from "../views/LastOrders.vue";
import ProductsPage from "../views/ProductsPage.vue";
import ProducPage from "../views/ProducPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import OrderDetails from "../views/OrderDetails.vue";
import LastOrder from "../views/LastOrder.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import ChangePassword from "../views/ChangePassword.vue";
import SearchPage from "../views/SearchPage.vue";
import BookingCheckout from "../views/BookingCheckout.vue";

const routes = [
  {
    path: "/",
    redirect: "/tabs/HomePage",
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        redirect: "/tabs/HomePage",
      },
      {
        path: "HomePage",
        component: HomePage,
      },
      {
        path: "CategoryPage",
        component: CategoryPage,
      },
      {
        path: "SubCategory/:id",
        component: SubCategory,
        meta: { transition: 'slide-left' },

      },
      {
        path: "ProductsPage/:id",
        component: ProductsPage,
      },
      {
        path: "ProducPage/:id",
        component: ProducPage,
      },

      {
        path: "ContactPage",
        component: ContactPage,
        meta: { transition: 'slide-left' },

      },
      {
        path: "LastOrders",
        component: LastOrders,
        meta: { transition: 'slide-left' },

      },
      {
        path: "CheckoutPage",
        component: CheckoutPage,
      },
 
      {
        path: "OrderDetails",
        component: OrderDetails,
      },
      {
        path: "LastOrder",
        component: LastOrder,
      },
      {
        path: "ProfilePage",
        component: ProfilePage,
      },
      {
        path: "ChangePassword",
        component: ChangePassword,
      },
      {
        path: "EditProfile",
        component: EditProfile,
        meta: { transition: 'slide-left' },
      },
      { path: "LoginPage", component: LoginPage },
      { path: "SearchPage", component: SearchPage },
      { path: "BookingCheckout", component: BookingCheckout },
    ],
  },
  { path: "/LoginPage", component: LoginPage },
  { path: "/RegisterPage", component: RegisterPage },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
