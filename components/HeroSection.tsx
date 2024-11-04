import Image from "next/image";
import { products } from "@/lib/products";
import { ImagesSlider } from "./ui/images-slider";

const HeroSection = () => {
  return (
    <>
      <div className="pt-10">
        <Image
          src={'/products-banners/banner.png'}
          alt="banner"
          width={900}
          height={900}
          layout="responsive"
        />
        {/* Feature Section */}
        <section>
          <h1 className="text-5xl font-bold text-start text-black p-10">
            <span className="text-[#689b26]">Feature</span> Products
          </h1>
          
          {/* Product Cards Section */}
          <div className="flex flex-wrap justify-start">
            {products.map((product, index) => (
              <div key={index} className="w-1/3 px-3 mb-5">
                <div className="bg-gray-200 rounded-md p-5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={250}
                    height={250}
                    layout="responsive"
                  />
                  <h2 className="text-2xl font-bold text-start text-black p-2">
                    <span className="text-[#689b26]">{product.name}</span> Product
                  </h2>
                  <p className="text-xs font-bold text-start text-gray-600 p-2">
                    {product.price}
                  </p>  
                  <button className="bg-[#57831d] text-white px-4 py-2 rounded-md hover:bg-red-400">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action Section */}
          <div className="text-center mt-10">
            <button className="bg-[#689b26] text-white px-4 py-2 rounded-md">Discover More</button>
          </div>
        </section>
      </div>
      
      {/* Image Slider Section */}
      <div className="pt-10">
        <ImagesSlider images={['/products-images/Apple-3.png', '/products-images/banana-1.png']} />
      </div>
    </>
  );
};

export default HeroSection;
