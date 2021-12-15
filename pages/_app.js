import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { motion } from "framer-motion";
import { Provider } from "react-redux";
import store from "../redux/store";
import withRedux from "next-redux-wrapper";

function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <motion.div
        key={router.route}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Provider>
  );
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
