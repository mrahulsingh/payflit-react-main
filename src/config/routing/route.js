import HomePage from "../../components/views/HomePage";

const AboutComponent = () => <h2>About Component</h2>

const routes = [
    {
        path: '/about',
        component: AboutComponent,
        exact: true,
    },
    { path: '/', component: HomePage, exact: true },
];
  
export default routes;