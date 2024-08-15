import {
  ErrorComponent,
  ThemedLayoutV2,
} from "@refinedev/chakra-ui";
import { NavigateToResource } from "@refinedev/react-router-v6";
import {
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";


import { AnimatePresence, motion } from "framer-motion";
import { ProductCreate, ProductEdit, ProductList, ProductShow } from "../../pages/products";

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.2,
};

export const ProductPageAnimation: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <NavigateToResource resource="products" />
            </motion.div>
          }
        />
        <Route
          path="/products"
          element={
            <ThemedLayoutV2>
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Outlet />
              </motion.div>
            </ThemedLayoutV2>
          }
        >
          <Route index element={<ProductList />} />
          <Route path="create" element={<ProductCreate />} />
          <Route path=":id" element={<ProductShow />} />
          <Route path=":id/edit" element={<ProductEdit />} />
        </Route>
        <Route
          path="*"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
              transition={pageTransition}
            >
              <ErrorComponent />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
