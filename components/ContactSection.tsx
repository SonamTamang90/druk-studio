"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

const ContactSection = () => {
  // State to control when animation starts
  const [isVisible, setIsVisible] = useState(false);
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Start animation after component mounts
  useEffect(() => {
    setIsVisible(true);

    // Optional: Trigger animation on scroll visibility
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("contact-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Swing animation configuration
  const swingVariants = {
    initial: {
      rotate: 0,
      transformOrigin: "center top",
    },
    animate: {
      rotate: [0, 1.2, 0, -1.2, 0],
      transition: {
        duration: 3.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0.2,
      },
    },
  };

  return (
    <>
      <section
        id="contact-section"
        className="relative pt-16 md:pt-20 lg:pt-24 pb-32 md:pb-36 lg:pb-44 border-t border-[#D9D9D9]/10 overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />

        {/* Main content */}
        <div className="relative mx-auto px-4 sm:px-6 md:px-24 flex flex-col items-center">
          <h2 className="max-w-xs sm:max-w-sm md:max-w-xl mx-auto text-white text-lg sm:text-xl md:text-2xl uppercase font-semibold tracking-wide text-center mb-8 md:mb-11">
            Have a website vision? Let's collaborate to bring your concept to
            life.
          </h2>
        </div>
        {/* Swinging button with attachment points */}
        <motion.div
          className="absolute -top-4 left-2/4 -translate-x-2/4 w-full flex justify-center"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={swingVariants}
        >
          {/* Static strings for visual reference */}
          <div className="absolute h-[210px] sm:h-[230px] md:h-[260px] left-2/4 -translate-x-2/4 w-px bg-gradient-to-t from-[#f6ff7f] via-[rgba(51,55,5,1)] to-[rgba(51,55,5,1)] z-10" />

          {/* The actual button */}
          <div className="relative mt-[200px] sm:mt-[220px] md:mt-[250px]">
            <div className="absolute top-2 left-[45%] w-[4px] h-[4px] bg-black transform -rotate-45 rounded-full ml-3" />
            <button
              onClick={openModal}
              className="cursor-pointer px-6 sm:px-10 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 border border-[#070707] bg-gradient-to-b from-[#D7D794] to-[#F6FF7F] transition-all duration-300 rounded-md text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </section>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default ContactSection;

// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import ContactModal from "./ContactModal";

// const ContactSection = () => {
//   // State to control when animation starts
//   const [isVisible, setIsVisible] = useState(false);
//   // State to control modal visibility
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Start animation after component mounts
//   useEffect(() => {
//     setIsVisible(true);

//     // Optional: Trigger animation on scroll visibility
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     const section = document.getElementById("contact-section");
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   // Function to open modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Swing animation configuration
//   const swingVariants = {
//     initial: {
//       rotate: 0,
//       transformOrigin: "center top",
//     },
//     animate: {
//       rotate: [0, 1.2, 0, -1.2, 0],
//       transition: {
//         duration: 3.5,
//         ease: "easeInOut",
//         repeat: Infinity,
//         repeatType: "mirror",
//         delay: 0.2,
//       },
//     },
//   };

//   return (
//     <>
//       <section
//         id="contact-section"
//         className="relative lg:pt-24 lg:pb-44 border-t border-[#D9D9D9]/10 overflow-hidden"
//       >
//         <div
//           className="absolute inset-0 z-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//             backgroundRepeat: "repeat",
//           }}
//         />

//         {/* Decorative grid lines */}
//         <div className="absolute inset-0 z-0">
//           <div className="absolute left-8 md:left-20 w-px h-full bg-[#D9D9D9]/10" />
//           <div className="absolute right-8 md:right-20 w-px h-full bg-[#D9D9D9]/10" />
//         </div>

//         {/* Main content */}
//         <div className="relative mx-auto px-6 md:px-24 flex flex-col items-center">
//           <h2 className="max-w-xl mx-auto text-white text-xl md:text-2xl uppercase font-semibold tracking-wide text-center mb-11">
//             Have a website vision? Let's collaborate to bring your concept to
//             life.
//           </h2>
//         </div>
//         {/* Swinging button with attachment points */}
//         <motion.div
//           className="absolute -top-4 left-2/4 -translate-x-2/4"
//           initial="initial"
//           animate={isVisible ? "animate" : "initial"}
//           variants={swingVariants}
//         >
//           {/* Static strings for visual reference */}
//           <div className="absolute h-[260px] left-2/4 -translate-x-2/4 w-px bg-gradient-to-t from-[#f6ff7f] via-[rgba(51,55,5,1)] to-[rgba(51,55,5,1)] z-10" />

//           {/* The actual button */}
//           <div className="relative mt-[250px]">
//             <div className="absolute top-2 left-[45%] w-[4px] h-[4px] bg-black transform -rotate-45 rounded-full ml-3" />
//             <button
//               onClick={openModal}
//               className="cursor-pointer px-20 py-6 border border-[#070707] bg-gradient-to-b from-[#D7D794] to-[#F6FF7F] transition-all duration-300 rounded-md font-medium tracking-wide uppercase"
//             >
//               Get in Touch
//             </button>
//           </div>
//         </motion.div>
//       </section>

//       {/* Contact Modal */}
//       <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
//     </>
//   );
// };

// export default ContactSection;
