const plans = [
    {
        name: "Basic",
        price: "$ 49",
        period: "/ mes",
        features: [
            "Hasta 5 automatizaciones",
            "100 tareas mensuales",
            "Soporte por email",
        ],
        highlight: false,
    },
    {
        name: "Pro",
        price: "$ 99",
        period: "/ mes",
        features: [
            "Automatizaciones ilimitadas",
            "5,000 tareas mensuales",
            "Soporte prioritario",
        ],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "Personalizado",
        period: "",
        features: [
            "Infraestructura dedicada",
            "Escalabilidad total",
            "Soporte exclusivo 24/7",
        ],
        highlight: false,
    },
];

const PricingSection = () => {
    return (
        <section id="precios" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
                        Planes diseñados para crecer
                    </h2>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Escoge el nivel de sincronización que tu negocio necesita hoy
                        y evoluciona con una solución preparada para el futuro.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-8 shadow-lg border transition-all duration-300 hover:-translate-y-2 ${plan.highlight
                                    ? "bg-blue-600 text-white border-blue-600 scale-105"
                                    : "bg-white text-gray-900 border-gray-100"
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-4">
                                {plan.name}
                            </h3>

                            <div className="mb-8">
                                <span className="text-4xl font-extrabold">
                                    {plan.price}
                                </span>
                                <span
                                    className={`ml-2 text-lg ${plan.highlight
                                            ? "text-blue-100"
                                            : "text-gray-500"
                                        }`}
                                >
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li
                                        key={i}
                                        className={`${plan.highlight
                                                ? "text-blue-50"
                                                : "text-gray-600"
                                            }`}
                                    >
                                        • {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-xl font-semibold transition-all ${plan.highlight
                                        ? "bg-white text-blue-600 hover:bg-gray-100"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                    }`}
                            >
                                Empezar ahora
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;