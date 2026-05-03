const steps = [
	{
		number: "01",
		title: "Conecta",
		description:
			"Vincula tus fuentes de datos y aplicaciones de forma segura.",
		image:
			"https://images.unsplash.com/photo-1551434678-e076c223a692",
	},
	{
		number: "02",
		title: "Define",
		description:
			"Usa nuestro editor visual para diseñar tus flujos de trabajo inteligentes.",
		image:
			"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
	},
	{
		number: "03",
		title: "Optimiza",
		description:
			"La IA ajusta y mejora tus procesos automaticamente cada día.",
		image:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f",
	},
];

const HowItWorksSection = () => {
	return (
		<section id="soluciones" className="py-24 bg-gray-50">
			<div className="container mx-auto px-6 lg:px-12">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						¿Cómo funciona FlowSync?
					</h2>
					<p className="text-lg text-gray-600">
						Un proceso simple y poderoso para transformar la gestión de tu negocio.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<div
							key={index}
							className="bg-white rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition-all duration-300"
						>
							{/* Número en círculo azul */}
							<div className="flex justify-center mb-6">
								<div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-md">
									{step.number}
								</div>
							</div>

							{/* Título */}
							<h3 className="text-2xl font-semibold text-gray-900 mb-4">
								{step.title}
							</h3>

							{/* Texto */}
							<p className="text-gray-600 leading-relaxed mb-6">
								{step.description}
							</p>

							{/* Imagen abajo */}
							<img
								src={step.image}
								alt={step.title}
								className="w-full h-52 object-cover rounded-2xl"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorksSection;