import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
			<div className="h-16 flex items-center justify-between px-6 md:px-8 relative">
				{/* Logo */}
				<div className="font-bold text-2xl text-gray-800 select-none">
					FlowSync
				</div>

				{/* Desktop Links */}
				<div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10">
					<a
						href="#caracteristicas"
						className="text-gray-800 font-medium text-base hover:text-blue-600 transition-colors"
					>
						Características
					</a>
					<a
						href="#soluciones"
						className="text-gray-800 font-medium text-base hover:text-blue-600 transition-colors"
					>
						Soluciones
					</a>
					<a
						href="#precios"
						className="text-gray-800 font-medium text-base hover:text-blue-600 transition-colors"
					>
						Precios
					</a>
				</div>

				{/* Mobile Menu Button */}
				<button
					className="md:hidden text-gray-800"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					{menuOpen ? (
						<HiOutlineX size={28} />
					) : (
						<HiOutlineMenuAlt3 size={28} />
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div className="md:hidden bg-white shadow-lg border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
					<a
						href="#caracteristicas"
						className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
						onClick={() => setMenuOpen(false)}
					>
						Características
					</a>
					<a
						href="#soluciones"
						className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
						onClick={() => setMenuOpen(false)}
					>
						Soluciones
					</a>
					<a
						href="#precios"
						className="text-gray-800 font-medium hover:text-blue-600 transition-colors"
						onClick={() => setMenuOpen(false)}
					>
						Precios
					</a>
				</div>
			)}
		</nav>
	);
};

export default Navbar;