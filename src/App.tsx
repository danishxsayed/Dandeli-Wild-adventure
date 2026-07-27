import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Activities from "./pages/Activities.tsx";
import Rooms from "./pages/Rooms.tsx";
import Booking from "./pages/Booking.tsx";
import Contact from "./pages/Contact.tsx";
import Admin from "./pages/Admin.tsx";
import Resorts from "./pages/Resorts.tsx";
import ResortDetail from "./pages/ResortDetail.tsx";
import Lodges from "./pages/Lodges.tsx";
import LodgeDetail from "./pages/LodgeDetail.tsx";
import Homestays from "./pages/Homestays.tsx";
import HomestayDetail from "./pages/HomestayDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/resorts/:slug" element={<ResortDetail />} />
          <Route path="/lodges" element={<Lodges />} />
          <Route path="/lodges/:slug" element={<LodgeDetail />} />
          <Route path="/homestays" element={<Homestays />} />
          <Route path="/homestays/:slug" element={<HomestayDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
