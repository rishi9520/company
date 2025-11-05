// client/src/App.tsx

import { Switch, Route, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { useLenis } from "./hooks/use-lenis";

// Pages
import Home from "@/pages/home";
import About from "@/pages/about";
import Products from "@/pages/products";
import Technology from "@/pages/technology";
import Careers from "@/pages/careers";
import Contact from "@/pages/contact";
import Dashboard from "@/pages/dashboard";
import PrivacyPolicy from "@/pages/privacy-policy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

// Shared Layout Component
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import ScrollProgress from "@/components/scroll-progress";

// Page Transition Animation
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

// Yeh component Navbar aur Footer ko har page par add karega
const PageLayout = ({ children }: { children: React.ReactNode }) => {
  useLenis(); // Smooth scrolling har page par activate
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
};

function App() {
  const [location] = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="dark">
          <Toaster />
          <AnimatePresence mode="wait">
            <motion.div
              key={location} // Jab bhi URL badlega, yeh animation trigger hoga
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Switch location={location}>
                <Route path="/">
                  <PageLayout><Home /></PageLayout>
                </Route>
                <Route path="/about">
                  <PageLayout><About /></PageLayout>
                </Route>
                <Route path="/products">
                  <PageLayout><Products /></PageLayout>
                </Route>
                <Route path="/technology">
                  <PageLayout><Technology /></PageLayout>
                </Route>
                <Route path="/careers">
                  <PageLayout><Careers /></PageLayout>
                </Route>
                <Route path="/contact">
                  <PageLayout><Contact /></PageLayout>
                </Route>
                <Route path="/dashboard">
                  <PageLayout><Dashboard /></PageLayout>
                </Route>
                <Route path="/privacy-policy">
                  <PageLayout><PrivacyPolicy /></PageLayout>
                </Route>
                <Route path="/terms">
                  <PageLayout><Terms /></PageLayout>
                </Route>
                <Route>
                  <NotFound />
                </Route>
              </Switch>
            </motion.div>
          </AnimatePresence>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;