"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

const ContactModal = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    services: {
      webDesign: false,
      productDesign: false,
      noCodeDevelopment: false,
      branding: false,
    },
    budget: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleServiceToggle = (service) => {
    setFormData({
      ...formData,
      services: {
        ...formData.services,
        [service]: !formData.services[service],
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-full max-w-xl ml-auto h-full transform overflow-y-auto bg-white p-6 shadow-xl transition-all">
                  <div className="absolute right-4 top-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={20} />
                      <span className="sr-only">Close</span>
                    </button>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium text-black mb-2"
                  >
                    Request a quote
                  </Dialog.Title>
                  <p className="text-sm text-gray-600 mb-6">
                    or send an email at{" "}
                    <a href="mailto:design@heykuba.com" className="text-black">
                      drukstudio@webdesign.com
                    </a>
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="project"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Tell me about your project
                      </label>
                      <textarea
                        id="project"
                        name="project"
                        rows={4}
                        placeholder="Tell me about your project..."
                        value={formData.project}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        How can I help u?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => handleServiceToggle("webDesign")}
                          className={`px-3 py-1 rounded-full text-xs ${
                            formData.services.webDesign
                              ? "bg-black text-white"
                              : "bg-white text-black border border-gray-300"
                          }`}
                        >
                          WEB DESIGN
                        </button>
                        <button
                          type="button"
                          onClick={() => handleServiceToggle("productDesign")}
                          className={`px-3 py-1 rounded-full text-xs ${
                            formData.services.productDesign
                              ? "bg-black text-white"
                              : "bg-white text-black border border-gray-300"
                          }`}
                        >
                          PRODUCT DESIGN
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            handleServiceToggle("noCodeDevelopment")
                          }
                          className={`px-3 py-1 rounded-full text-xs ${
                            formData.services.noCodeDevelopment
                              ? "bg-black text-white"
                              : "bg-white text-black border border-gray-300"
                          }`}
                        >
                          NO-CODE DEVELOPMENT
                        </button>
                        <button
                          type="button"
                          onClick={() => handleServiceToggle("branding")}
                          className={`px-3 py-1 rounded-full text-xs ${
                            formData.services.branding
                              ? "bg-black text-white"
                              : "bg-white text-black border border-gray-300"
                          }`}
                        >
                          BRANDING
                        </button>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label
                        htmlFor="budget"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Your budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md text-sm"
                      >
                        <option value="" disabled>
                          Select...
                        </option>
                        <option value="less5k">Less than $5,000</option>
                        <option value="5to10k">$5,000 - $10,000</option>
                        <option value="10to25k">$10,000 - $25,000</option>
                        <option value="25to50k">$25,000 - $50,000</option>
                        <option value="more50k">More than $50,000</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-4 bg-black text-white text-sm font-medium rounded-md uppercase"
                    >
                      SEND MESSAGE
                    </button>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                      By clicking the "Send message", you agree to our{" "}
                      <a href="#" className="text-black underline">
                        Privacy Policy
                      </a>
                    </p>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal;
