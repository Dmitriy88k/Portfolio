import Demetrix from "../assets/demetrix.png";
import Luminous from "../assets/luminous.png";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="scroll-mt-24 flex min-h-screen w-full flex-col items-center justify-center gap-13 px-5 md:p-16 md:scroll-mt-0 xl:px-32"
    >
      <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-3xl font-semibold text-transparent h-12 md:text-7xl md:h-20 lg-text-7xl">Projects</h1>

      <div className="flex flex-col items-center gap-10 w-full max-w-6xl">
        
        <div className="w-full rounded-lg border-2 border-teal-500 hover:bg-teal-50 hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden shadow-sm">
          <a href="https://luminousprops.us/" target="_blank">
            <img
            src={Luminous}
            alt="Project Screenshot"
            className="w-full h-auto object-contain p-4"
            />
            <div className="p-6 space-y-2">
              <h1 className="text-2xl font-semibold">IT Solutions Website</h1>
              <div className="text-sm text-gray-500">
                React • CSS • Firebase Hosting
              </div>
              <p className="text-sm text-gray-600">
                A sleek landing page for an IT services company, featuring smooth
                scrolling, animated sections, and responsive design.
              </p>
            </div>
          </a>
          
        </div>

        <div className="w-full rounded-lg border-2 border-teal-500 hover:bg-teal-50 hover:scale-[1.03] transition-all duration-300 cursor-pointer overflow-hidden shadow-sm">
          <a href="https://demetrix.us/" target="_blank">
            <img
            src={Demetrix}
            alt="Project Screenshot"
            className="w-full h-auto object-contain p-4"
            />
            <div className="p-6 space-y-2">
              <h1 className="text-2xl font-semibold">Chemical Products Store</h1>
              <div className="text-sm text-gray-500">
                React • Tailwind • Firebase
              </div>
              <p className="text-sm text-gray-600">
                An online storefront for industrial chemical products with product
                listings, category filters, and inquiry submission.
              </p>
            </div>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
