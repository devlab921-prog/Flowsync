import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white pt-16 pb-6">
			<div className="container mx-auto px-6 lg:px-12">
				{/* Top Section */}
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 pb-10 border-b border-gray-700">
					
					{/* Left */}
					<div>
						<h2 className="text-3xl font-bold mb-3">FlowSync</h2>
						<p className="text-gray-400 max-w-md leading-relaxed">
							Liderando la revolución de la automatización empresarial 
							con inteligencia, integración y escalabilidad.
						</p>
					</div>

					{/* Right - Socials */}
					<div className="flex gap-4">
						<a
							href="#"
							className="w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all"
						>
							<FaFacebookF size={18} />
						</a>

						<a
							href="#"
							className="w-12 h-12 rounded-full bg-gray-800 hover:bg-pink-500 flex items-center justify-center transition-all"
						>
							<FaInstagram size={18} />
						</a>

						<a
							href="#"
							className="w-12 h-12 rounded-full bg-gray-800 hover:bg-sky-500 flex items-center justify-center transition-all"
						>
							<FaLinkedinIn size={18} />
						</a>

						<a
							href="#"
							className="w-12 h-12 rounded-full bg-gray-800 hover:bg-white hover:text-black flex items-center justify-center transition-all"
						>
							<FaXTwitter size={18} />
						</a>
					</div>
				</div>

				{/* Bottom */}
				<div className="text-center mt-6">
					<p className="text-sm text-gray-500">
						&copy; {new Date().getFullYear()} FlowSync. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;