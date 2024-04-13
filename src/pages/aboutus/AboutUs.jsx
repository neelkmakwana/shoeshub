import Layout from "../../components/layout/Layout";
import { useContext } from "react";
import myContext from "../../context/myContext";

const AboutUs = () => {
  const context = useContext(myContext);
  const { loading } = context;

  return (
    <Layout>
      <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto">
          <div className="flex flex-wrap items-center mb-24 -mx-4">
            <div className="w-full md:w-1/2 px-4">
              <div className="lg:pr-20">
                <div className="mb-6">
                  <h2 className="mb-6 text-2xl font-semibold leading-loose tracking-wide text-gray-700 md:text-3xl dark:text-gray-300" style={{ color: 'black' }}>
                    About Our Shop
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400" style={{ color: 'black' }}>
                    Welcome to NK-SHOES HUB! Explore our diverse range of
                    quality footwear online, tailored to suit every style and
                    occasion. Our user-friendly interface allows you to
                    effortlessly navigate through our extensive collection with
                    convenient category sections. Whether you're in search of
                    sneakers, boots, heels, or sandals, we've got you covered.
                    With just a few clicks, step out in style with the perfect
                    pair of shoes tailored to your preferences. Experience the
                    ease and convenience of online shoe shopping with NK-SHOES
                    HUB today!
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400" style={{ color: 'black' }}>
                    Our Mission
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400" style={{ color: 'black' }}>
                    At NK-SHOES HUB, our mission is simple: to provide you with
                    a seamless online shopping experience where you can easily
                    find the perfect pair of shoes to suit your style and needs.
                    With our diverse selection and user-friendly interface, we
                    aim to make shoe shopping enjoyable and convenient, ensuring
                    that every step you take is a confident and stylish one
                  </p>
                </div>
                <div className="mb-6">
                  <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400" style={{ color: 'black' }}>
                    Our Vision
                  </h2>
                  <p className="text-gray-700 dark:text-gray-400" style={{ color: 'black' }}>
                    Our vision at NK-SHOES HUB is to be the top choice for
                    online shoe shopping worldwide. We're committed to offering
                    a curated selection of quality footwear, catering to diverse
                    styles. By prioritizing customer satisfaction and providing
                    seamless experiences, we aim to inspire confidence and
                    elevate personal style globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-1">
              <div className="">
                <div className="">
                  <img
                    className="w-full rounded-lg"
                    src="https://firebasestorage.googleapis.com/v0/b/myecom-be317.appspot.com/o/NK-SHOES%20HUB%20SHOP%20IMAGE.jpeg?alt=media&token=9039ddf8-5811-4db4-83e3-ef552d97a480"
                    alt="About Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutUs;
