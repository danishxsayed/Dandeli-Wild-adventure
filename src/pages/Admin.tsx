import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Phone, User, MessageSquare, Users, Search, RefreshCw } from "lucide-react";

const ADMIN_PASSWORD = "dandeli2024";

interface Booking {
  id: string;
  name: string;
  mobile: string;
  check_in: string;
  message: string;
  guests: number;
  created_at: string;
}

const Admin = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const navigate = useNavigate();

  const fetchBookings = async () => {
    setRefreshing(true);
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setBookings(data);
    if (error) console.error("Error fetching bookings:", error);
    setRefreshing(false);
  };

  useEffect(() => {
    if (authenticated) {
      fetchBookings();
    }
  }, [authenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  const filtered = bookings.filter(
    (b) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.mobile.includes(search) ||
      b.message.toLowerCase().includes(search.toLowerCase())
  );

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="bg-card rounded-2xl p-8 shadow-luxury max-w-md w-full">
          <h1 className="font-heading text-2xl font-bold text-foreground text-center mb-6">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-luxury transition-all">
              Login
            </button>
          </form>
          <button onClick={() => navigate("/")} className="w-full mt-4 text-muted-foreground text-sm hover:text-foreground transition-colors flex items-center justify-center gap-1">
            <ArrowLeft size={14} /> Back to Website
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-forest text-cream py-6">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Admin Dashboard</h1>
            <p className="text-cream/70 text-sm">Manage booking enquiries</p>
          </div>
          <div className="flex gap-3">
            <button onClick={fetchBookings} disabled={refreshing} className="px-4 py-2 bg-cream/10 text-cream rounded-lg text-sm hover:bg-cream/20 transition-colors flex items-center gap-2">
              <RefreshCw size={14} className={refreshing ? "animate-spin" : ""} /> Refresh
            </button>
            <button onClick={() => navigate("/")} className="px-4 py-2 bg-cream/10 text-cream rounded-lg text-sm hover:bg-cream/20 transition-colors">
              View Website
            </button>
            <button onClick={() => setAuthenticated(false)} className="px-4 py-2 bg-destructive/80 text-cream rounded-lg text-sm hover:bg-destructive transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 shadow-luxury">
            <p className="text-muted-foreground text-sm">Total Enquiries</p>
            <p className="font-heading text-3xl font-bold text-foreground">{bookings.length}</p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-luxury">
            <p className="text-muted-foreground text-sm">Today's Enquiries</p>
            <p className="font-heading text-3xl font-bold text-foreground">
              {bookings.filter((b) => new Date(b.created_at).toDateString() === new Date().toDateString()).length}
            </p>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-luxury">
            <p className="text-muted-foreground text-sm">Total Guests Expected</p>
            <p className="font-heading text-3xl font-bold text-foreground">
              {bookings.reduce((sum, b) => sum + b.guests, 0)}
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, mobile, or message..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Table */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl shadow-luxury">
            <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No enquiries found</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-card rounded-2xl shadow-luxury overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Name</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Mobile</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Check-in</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Guests</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Message</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((b) => (
                    <tr key={b.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4 text-sm text-foreground font-medium">{b.name}</td>
                      <td className="px-6 py-4 text-sm">
                        <a href={`tel:+91${b.mobile}`} className="text-primary hover:text-accent transition-colors">{b.mobile}</a>
                      </td>
                      <td className="px-6 py-4 text-sm text-foreground">{new Date(b.check_in).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{b.guests}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground max-w-xs truncate">{b.message}</td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{new Date(b.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {filtered.map((b) => (
                <div key={b.id} className="bg-card rounded-xl p-5 shadow-luxury space-y-3">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-primary" />
                    <span className="font-semibold text-foreground">{b.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-primary" />
                    <a href={`tel:+91${b.mobile}`} className="text-primary text-sm">{b.mobile}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-sm text-foreground">{new Date(b.check_in).toLocaleDateString("en-IN")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    <span className="text-sm text-foreground">{b.guests} guests</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageSquare size={16} className="text-primary mt-0.5" />
                    <span className="text-sm text-muted-foreground">{b.message}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Submitted: {new Date(b.created_at).toLocaleDateString("en-IN", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
