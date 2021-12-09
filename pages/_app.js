import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.route}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
