
import Header from '../components/Header'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Home = () => {

    const navigate = useNavigate();

    const heroImg = assets?.homebg; // Background already used in your Header
    const categories = assets?.categories || [
        // Fallback: replace with your icons/images in assets
        { id: "south-indian", title: "South Indian", img: assets.food_24|| "" },
        { id: "biryani", title: "Biryani", img: assets?.catBiryani || "" },
        { id: "chinese", title: "Chinese", img: assets?.catChinese || "" },
        { id: "desserts", title: "Desserts", img: assets?.catDesserts || "" },
    ];

    const featured = assets?.featured || [
        // Fallback featured cards (image + title + price)
        { id: "f1", title: "Paneer Butter Masala", price: 249, img: assets?.f1 || "" },
        { id: "f2", title: "Chicken Biryani", price: 299, img: assets?.f2 || "" },
        { id: "f3", title: "Veg Hakka Noodles", price: 189, img: assets?.f3 || "" },
        { id: "f4", title: "Gulab Jamun", price: 99, img: assets?.f4 || "" },
    ];

    return (
        <>

            <Header />


            

              

                {/* CATEGORIES */}
                <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-8 sm:mt-12">
                    <div className="flex items-end justify-between">
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900">Browse by Category</h2>
                        <Link
                            to="/menu"
                            className="text-sm font-semibold text-amber-700 hover:text-amber-800"
                        >
                            See all →
                        </Link>
                    </div>

                    <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                        {categories.map((c) => (
                            <button
                                key={c.id}
                                onClick={() => navigate(`/menu?category=${encodeURIComponent(c.title)}`)}
                                className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm hover:shadow transition text-left"
                            >
                                <div
                                    style={{
                                        backgroundImage: c.img ? `url(${c.img})` : undefined,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                    className={`h-28 sm:h-32 w-full ${c.img ? "" : "bg-slate-100"}`}
                                />
                                <div className="p-4">
                                    <p className="font-semibold text-slate-900 group-hover:text-amber-700 transition">
                                        {c.title}
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Explore {c.title} dishes
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                </section>

                {/* FEATURED DISHES */}
                <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-10 sm:mt-12">
                    <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-slate-200">
                        <div className="flex items-end justify-between">
                            <h2 className="text-lg sm:text-xl font-bold text-slate-900">Featured Picks</h2>
                            <Link
                                to="/menu"
                                className="text-sm font-semibold text-amber-700 hover:text-amber-800"
                            >
                                Order now →
                            </Link>
                        </div>

                        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {featured.map((item) => (
                                <article
                                    key={item.id}
                                    className="rounded-xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm hover:shadow transition"
                                >
                                    <div
                                        style={{
                                            backgroundImage: item.img ? `url(${item.img})` : undefined,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                        }}
                                        className={`h-36 sm:h-40 w-full ${item.img ? "" : "bg-slate-100"}`}
                                    />
                                    <div className="p-4">
                                        <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                        <div className="mt-1 flex items-center justify-between">
                                            <p className="text-sm font-semibold text-amber-700">
                                                ₹{item.price}
                                            </p>
                                            <button
                                                onClick={() => navigate(`/menu?highlight=${item.id}`)}
                                                className="text-sm font-semibold text-slate-700 hover:text-amber-700"
                                            >
                                                Add →
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* USP STRIP */}
                <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-10 sm:mt-12">
                    <div className="rounded-2xl bg-amber-50 p-6 sm:p-8 ring-1 ring-amber-200">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "Fresh Ingredients", desc: "Locally inspired, made fresh daily." },
                                { title: "Expert Chefs", desc: "Authentic flavors with creative twists." },
                                { title: "On-Time Delivery", desc: "Your food, hot & right on schedule." },
                                { title: "Customer First", desc: "Support that cares, always." },
                            ].map((u) => (
                                <div key={u.title}>
                                    <p className="font-semibold text-amber-900">{u.title}</p>
                                    <p className="text-sm text-amber-900/80 mt-1">{u.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS (optional skeleton) */}
                <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-10 sm:mt-12">
                    <h2 className="text-lg sm:text-xl font-bold text-slate-900">What Customers Say</h2>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "Akhil",
                                text: "Super quick delivery and the food was 🔥. Will order again!",
                            },
                            {
                                name: "Priya",
                                text: "Loved the biryani. Perfect spice level and aroma.",
                            },
                            {
                                name: "Ravi",
                                text: "Great variety and portions. Family combos are value for money.",
                            },
                        ].map((t) => (
                            <figure
                                key={t.name}
                                className="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-sm"
                            >
                                <blockquote className="text-sm text-slate-700">“{t.text}”</blockquote>
                                <figcaption className="mt-3 text-xs font-semibold text-slate-900">
                                    — {t.name}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>

                {/* APP / CONTACT CTA */}
                <section className="mx-auto max-w-6xl px-4 sm:px-6 mt-10 sm:mt-12 pb-14">
                    <div className="rounded-2xl bg-white p-6 sm:p-8 ring-1 ring-slate-200 shadow-sm">
                        <div className="grid gap-6 items-center md:grid-cols-[1.2fr_1fr]">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                                    Dine-in, Take-away, or Order Online
                                </h3>
                                <p className="mt-2 text-slate-600 text-sm">
                                    Your cravings, your way. Explore our full menu and order in a few taps.
                                </p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <Link
                                        to="/menu"
                                        className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-amber-700 shadow-sm"
                                    >
                                        Start Order
                                    </Link>
                                    <Link
                                        to="/contact"
                                        className="rounded-full px-5 py-2.5 text-sm font-semibold ring-1 ring-slate-300 text-slate-700 hover:bg-slate-50"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                            <div className="h-40 rounded-xl bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center text-slate-500 text-sm">
                                {/* Replace with app store badges or a promo image */}
                                Add your app/image here
                            </div>
                        </div>
                    </div>
                </section>

               
            
        









        </>
    )
}

export default Home
