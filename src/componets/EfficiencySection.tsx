import { AiOutlineClockCircle } from "react-icons/ai";
import { FiLink } from "react-icons/fi";
import { HiOutlineChartBar } from "react-icons/hi";
import { RiRocketLine } from "react-icons/ri";

const features = [
    {
        title: "Ahorro de tiempo",
        description:
            "Automatiza procesos repetitivos y libera horas valiosas para enfocarte en decisiones estratégicas.",
        icon: <AiOutlineClockCircle size={34} />,
    },
    {
        title: "Integración fácil",
        description:
            "Conecta tus herramientas y sistemas en una sola plataforma sin complicaciones técnicas.",
        icon: <FiLink size={34} />,
    },
    {
        title: "Análisis inteligente",
        description:
            "Obtén métricas en tiempo real y decisiones respaldadas por datos procesados con IA.",
        icon: <HiOutlineChartBar size={34} />,
    },
    {
        title: "Escalabilidad",
        description:
            "Crece sin límites con una infraestructura flexible preparada para la evolución de tu negocio.",
        icon: <RiRocketLine size={34} />,
    },
];

const EfficiencySection = () => {
    return (
        <section id="caracteristicas" className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Potencia tu Eficiencia
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        Soluciones diseñadas para empresas que no se conforman
                        con lo convencional.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EfficiencySection;