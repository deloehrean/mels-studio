import { Suspense } from "react";

import { Footer, Header, LayoutStyles as s } from "src/components";
import { routes } from "src/lib/routes/routes";
import { RoutesRenderer } from "src/lib/routes/RoutesRenderer";

function Loader() {
  return <div>Loading...</div>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Layout = ({ children }) => {
  return (
    <div className={s.root}>
      <div className={s.pageWrap}>
        <Header />
        <main>
          <Suspense fallback={<Loader />}>
            <RoutesRenderer routes={routes} />
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
