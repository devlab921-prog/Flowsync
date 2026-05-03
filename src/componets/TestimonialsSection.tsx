import { useState } from "react";
import { AiFillStar, AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const testimonials = [
	{
		name: "Juan Pérez",
		image: "https://randomuser.me/api/portraits/men/32.jpg",
		message:
			"FlowSync redefinió nuestra manera de operar. Hoy automatizamos procesos críticos con una eficiencia que antes parecía imposible.",
	},
	{
		name: "María Gómez",
		image: "https://randomuser.me/api/portraits/women/44.jpg",
		message:
			"La implementación fue rápida y el impacto inmediato. Ahora tenemos visibilidad total y decisiones mucho más inteligentes.",
	},
	{
		name: "Carlos Rodríguez",
		image: "https://randomuser.me/api/portraits/men/56.jpg",
		message:
			"Escalamos operaciones sin fricción. FlowSync se convirtió en la base tecnológica de nuestro crecimiento.",
	},
	{
		name: "Ana Torres",
		image: "https://randomuser.me/api/portraits/women/68.jpg",
		message:
			"El nivel de automatización que conseguimos con FlowSync cambió nuestra productividad por completo.",
	},
	{
		name: "Luis Mendoza",
		image: "https://randomuser.me/api/portraits/men/75.jpg",
		message:
			"La plataforma nos permitió integrar equipos y procesos de manera impecable.",
	},
	{
		name: "Sofía Ramírez",
		image: "https://randomuser.me/api/portraits/women/21.jpg",
		message:
			"Una solución robusta, moderna y lista para empresas que quieren escalar rápido.",
	},
];

const TestimonialsSection = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const itemsPerPage = 3;
	const visibleTestimonials = testimonials.slice(
		currentIndex,
		currentIndex + itemsPerPage
	);

	const nextSlide = () => {
		if (currentIndex + itemsPerPage < testimonials.length) {
			setCurrentIndex(currentIndex + itemsPerPage);
		}
	};

	const prevSlide = () => {
		if (currentIndex - itemsPerPage >= 0) {
			setCurrentIndex(currentIndex - itemsPerPage);
		}
	};

	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-6 lg:px-12">
				<div className="max-w-3xl mb-16">
					<h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
						Confianza de líderes
					</h2>
					<p className="text-lg md:text-xl text-gray-600 leading-relaxed">
						Más de 200 empresas globales han transformado su operativa con FlowSync
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{visibleTestimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
						>
							<div className="flex gap-1 mb-6 text-yellow-400">
								{[...Array(5)].map((_, i) => (
									<AiFillStar key={i} size={20} />
								))}
							</div>

							<p className="text-gray-700 text-lg leading-relaxed mb-8">
								“{testimonial.message}”
							</p>

							<div className="flex items-center gap-4">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-14 h-14 rounded-full object-cover"
								/>
								<span className="font-semibold text-gray-900 text-lg">
									{testimonial.name}
								</span>
							</div>
						</div>
					))}
				</div>

				{/* Flechas */}
				<div className="flex justify-end gap-4 mt-10">
					<button
						onClick={prevSlide}
						disabled={currentIndex === 0}
						className="w-12 h-12 rounded-full border flex items-center justify-center disabled:opacity-40"
					>
						<AiOutlineArrowLeft size={20} />
					</button>

					<button
						onClick={nextSlide}
						disabled={currentIndex + itemsPerPage >= testimonials.length}
						className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center disabled:opacity-40"
					>
						<AiOutlineArrowRight size={20} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;