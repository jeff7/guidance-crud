import { Refine } from "@refinedev/core";
import {
  ErrorComponent,
  RefineThemes,
  notificationProvider,
} from "@refinedev/chakra-ui";
import { ChakraProvider } from "@chakra-ui/react";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import {
  ProductList,
  ProductCreate,
  ProductEdit,
  ProductShow,
} from "./pages/products";
import { dataProviderApi } from "./services";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ChakraProvider theme={RefineThemes.Blue}>
        <Refine
          notificationProvider={notificationProvider}
          routerProvider={routerProvider}
          dataProvider={dataProviderApi}
          resources={[
            {
              name: "products",
              list: "/products",
              show: "/products/:id",
              edit: "/products/:id/edit",
              create: "/products/create",
              meta: {
                canDelete: true,
              },
            },
          ]}
        >
          <Routes>
            <Route index element={<NavigateToResource resource="products" />} />
            <Route path="/products" element={<Outlet />}>
              <Route index element={<ProductList />} />
              <Route path="create" element={<ProductCreate />} />
              <Route path=":id" element={<ProductShow />} />
              <Route path=":id/edit" element={<ProductEdit />} />
            </Route>
            <Route path="*" element={<ErrorComponent />} />
          </Routes>
        </Refine>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
