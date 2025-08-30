
import Footer from "./Footer";
import Header from "./header";
import styles from "@/layout/layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      
        <Header />
        <div>{children}</div>
        <Footer />
    </div>
  );
}

export default Layout;
