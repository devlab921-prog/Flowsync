import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const faqs = [
	{
		question: "¿Qué es FlowSync?",
		answer:
			"FlowSync es una plataforma inteligente que automatiza procesos, integra herramientas y optimiza operaciones empresariales en un solo ecosistema.",
	},
	{
		question: "¿Cómo puedo registrarme?",
		answer:
			"Puedes registrarte directamente desde nuestro sitio web y comenzar con una prueba o solicitar una demostración personalizada.",
	},
	{
		question: "¿FlowSync tiene una versión gratuita?",
		answer:
			"Sí, contamos con una versión inicial para pequeñas empresas y planes escalables según tus necesidades.",
	},
	{
		question: "¿Puedo cancelar mi suscripción en cualquier momento?",
		answer:
			"Sí, puedes cancelar o cambiar tu plan cuando quieras desde tu panel de administración.",
	},
];

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-6 lg:px-12 max-w-4xl">
				<div className="text-center mb-14">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Preguntas Frecuentes
					</h2>
					<p className="text-lg text-gray-600">
						Todo lo que necesitas saber sobre FlowSync.
					</p>
				</div>

				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<div
							key={index}
							className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50"
						>
							<button
								onClick={() => toggleFAQ(index)}
								className="w-full flex items-center justify-between px-6 py-5 text-left"
							>
								<span className="text-lg font-semibold text-gray-900">
									{faq.question}
								</span>

								<div className="text-blue-600">
									{openIndex === index ? (
										<AiOutlineMinus size={22} />
									) : (
										<AiOutlinePlus size={22} />
									)}
								</div>
							</button>

							{openIndex === index && (
								<div className="px-6 pb-5 text-gray-600 leading-relaxed">
									{faq.answer}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FAQSection;