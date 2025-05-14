import { Link } from "react-router-dom";

export default function HomePage() {
    const features = [
        {
            title: "Fast Delivery",
            desc: "Lightning fast delivery to your doorstep.",
        },
        {
            title: "Secure Payments",
            desc: "100% secure and trusted payment gateways.",
        },
        {
            title: "24/7 Support",
            desc: "We're here to help anytime, any day.",
        },
    ];

    const products = [1, 2, 3];

    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to ShopNow
                </h1>
                <p className="text-lg md:text-xl mb-6">
                    Discover the best deals on your favorite products.
                </p>
                <Link to="/shop">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                        Shop Now
                    </button>
                </Link>

            </section>

            {/* Features */}
            <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
                {features.map((f, i) => (
                    <div key={i} className="text-center">
                        <div className="text-4xl mb-3">🚀</div>
                        <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                        <p className="text-gray-600">{f.desc}</p>
                    </div>
                ))}
            </section>

            {/* Product Preview */}
            <section className="py-10 px-6 max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Trending Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((i) => (
                        <div
                            key={i}
                            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <img
                                src="https://unsplash.com/photos/a-brown-leather-purse-with-a-long-strap-BXWGZgFhBuU"
                                alt={`Product ${i}`}
                                width={400}
                                height={300}
                                className="object-cover w-full"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">Product Name {i}</h3>
                                <p className="text-sm text-gray-500">₹999</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 px-6 bg-gray-100 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Shop?</h3>
                <p className="text-gray-700 mb-6">
                    Sign up now and get exclusive offers!
                </p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    Create Account
                </button>
            </section>
        </div>
    );
}
