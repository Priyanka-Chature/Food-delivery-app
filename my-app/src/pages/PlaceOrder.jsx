import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  // Controlled form state
  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Optional: strip spaces for mobile & pin, or keep it simple.
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Basic validation rules
  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required.";

    // Basic India-focused check: 10 digits
    if (!/^\d{10}$/.test(form.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (!form.address1.trim()) newErrors.address1 = "Address line 1 is required.";

    if (!form.city.trim()) newErrors.city = "City is required.";
    if (!form.state.trim()) newErrors.state = "State is required.";

    // Basic PIN (6 digits)
    if (!/^\d{6}$/.test(form.pin.trim())) {
      newErrors.pin = "Enter a valid 6-digit PIN code.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Option A: Pass to payment via router state
    // navigate("/payment", {
    //   state: {
    //     delivery: { ...form },
    //     totals: {
    //       subtotal: getTotalCartAmount(),
    //       deliveryFee: 4,
    //       total: getTotalCartAmount() + 4,
    //     },
    //   },
    // });

    // Option B (alternative): Save into context for wider usage
    // setDeliveryDetails({ ...form });
    // navigate("/payment");
  };

  // const subtotal = getTotalCartAmount();
  // const deliveryFee = 4;
  // const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-slate-50 via-white to-slate-100">
      <header className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Place Order
        </h1>
        <p className="mt-1 text-slate-600">
          Review your details and confirm the order.
        </p>
      </header>

      <main className="mx-auto mt-6 max-w-6xl grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-6 px-4 pb-20 sm:px-6">
        {/* LEFT: Delivery Details */}
        <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 space-y-5">
          <h2 className="text-lg font-semibold text-slate-900">Delivery Details</h2>

          {/* Wrap the inputs in a form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm"
                  placeholder="Full name"
                  autoComplete="name"
                  required
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm"
                  placeholder="Mobile number"
                  inputMode="numeric"
                  pattern="\d{10}"
                  autoComplete="tel"
                  required
                />
                {errors.mobile && (
                  <p className="mt-1 text-xs text-red-600">{errors.mobile}</p>
                )}
              </div>
            </div>

            <div>
              <input
                name="address1"
                value={form.address1}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm"
                placeholder="Address line 1"
                autoComplete="address-line1"
                required
              />
              {errors.address1 && (
                <p className="mt-1 text-xs text-red-600">{errors.address1}</p>
              )}
            </div>

            <div>
              <input
                name="address2"
                value={form.address2}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm"
                placeholder="Address line 2 (optional)"
                autoComplete="address-line2"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm"
                  placeholder="City"
                  autoComplete="address-level2"
                  required
                />
                {errors.city && (
                  <p className="mt-1 text-xs text-red-600">{errors.city}</p>
                )}
              </div>

              <div>
                <input
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm"
                  placeholder="State"
                  autoComplete="address-level1"
                  required
                />
                {errors.state && (
                  <p className="mt-1 text-xs text-red-600">{errors.state}</p>
                )}
              </div>

              <div>
                <input
                  name="pin"
                  value={form.pin}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm"
                  placeholder="PIN code"
                  inputMode="numeric"
                  pattern="\d{6}"
                  autoComplete="postal-code"
                  required
                />
                {errors.pin && (
                  <p className="mt-1 text-xs text-red-600">{errors.pin}</p>
                )}
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Link
                to="/cart"
                className="rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-slate-300 text-slate-700 hover:bg-slate-50"
              >
                ← Back to Cart
              </Link>

              {/* Submit triggers handleSubmit */}
              <button  onClick={() => navigate('/payment')}
                type="submit"
                className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700"
              >
                Add Address
              </button>
            </div>
          </form>
        </section>

        {/* RIGHT: Order Summary */}
        <aside className="md:sticky md:top-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-lg font-semibold">Order Summary</h2>

            <div className="text-sm space-y-2 mt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${getTotalCartAmount()}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span className="font-semibold">$4</span>
              </div>

              <div className="border-t my-3"></div>

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${getTotalCartAmount()+4}</span>
              </div>
            </div>

            {/* Promo (UI only) */}
            <div className="mt-4">
              <label className="text-sm font-medium">Have a Promo Code?</label>
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="flex-1 border border-slate-300 rounded-full px-4 py-2 text-sm"
                />
                <button className="bg-slate-800 text-white px-4 py-2 rounded-full text-sm">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default PlaceOrder;
