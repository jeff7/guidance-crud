import { Refine } from "@refinedev/core";
import { RefineThemes, notificationProvider } from "@refinedev/chakra-ui";
import { ChakraProvider } from "@chakra-ui/react";
import routerProvider from "@refinedev/react-router-v6";
import { BrowserRouter } from "react-router-dom";

import { dataProviderApi } from "./services";
import { ProductPageAnimation } from "./components/animation/ProductPageAnimation";

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
          <ProductPageAnimation />
        </Refine>
      </ChakraProvider>
    </BrowserRouter>
  );
};

export default App;
