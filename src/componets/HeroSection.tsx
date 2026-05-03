import { motion } from "framer-motion";

const HeroSection = () => {
	return (
		<section className="min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-white pt-20 overflow-hidden">
			<div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
				
				{/* Left Content */}
				<motion.div
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="text-center lg:text-left"
				>
					<p className="text-sm md:text-base font-semibold tracking-widest text-blue-600 uppercase mb-4">
						Nueva era de automatización
					</p>

					<h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 mb-6">
						Sincroniza tu Negocio con la{" "}
						<span className="text-blue-600">
							Inteligencia
						</span>{" "}
						del Mañana
					</h1>

					<p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
						FlowSync orquesta tus procesos complejos en una
						plataforma unificada impulsada por IA. Elimina
						silos de datos y escala sin fricción.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<a
							href="#demo"
							className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-7 rounded-xl shadow-lg hover:bg-blue-700 transition-all"
						>
							Solicita demo →
						</a>

						<a
							href="#funcionalidades"
							className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold py-3 px-7 rounded-xl border border-gray-300 hover:shadow-md transition-all"
						>
							Ver Funcionalidades
						</a>
					</div>
				</motion.div>

				{/* Right Image */}
				<motion.div
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
					className="flex justify-center"
				>
					<img
						src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
						alt="Dashboard FlowSync"
						className="rounded-3xl shadow-2xl w-full max-w-2xl object-cover"
					/>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;