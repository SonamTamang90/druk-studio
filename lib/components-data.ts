// lib/components-data.js
export const componentsData = {
  marketing: {
    sections: {
      heroes: {
        id: "heroes",
        name: "Hero Sections",
        description: "Attention-grabbing hero sections for landing pages",
        components: [
          {
            id: "hero-1",
            name: "Hero with Image",
            code: "// Hero code here",
          },
          {
            id: "hero-2",
            name: "Hero with Background",
            code: "// Hero code here",
          },
          // More hero components
        ],
      },
      testimonials: {
        id: "testimonials",
        name: "Testimonial Sections",
        description: "Build trust with customer testimonials",
        components: [
          {
            id: "testimonial-1",
            name: "Simple Testimonial",
            code: "// Testimonial code here",
          },
          // More testimonial components
        ],
      },
      // More section types
    },
    grids: {
      // Grid components
    },
  },
  application: {
    tables: {
      // Table components
    },
    forms: {
      // Form components
    },
  },
  ecommerce: {
    product: {
      // Product components
    },
    checkout: {
      // Checkout components
    },
  },
};

// Helper functions
export function getAllCategories() {
  return Object.keys(componentsData).map((category) => ({
    id: category,
    name: capitalizeFirstLetter(category),
    path: `/components/${category}`,
  }));
}

export function getTypesForCategory(category) {
  if (!componentsData[category]) return [];

  return Object.keys(componentsData[category]).map((type) => ({
    id: type,
    name: capitalizeFirstLetter(type),
    path: `/components/${category}/${type}`,
  }));
}

export function getComponentsForType(category, type) {
  if (!componentsData[category] || !componentsData[category][type]) return [];

  return Object.values(componentsData[category][type]).map((component) => ({
    ...component,
    path: `/components/${category}/${type}/${component.id}`,
  }));
}

export function getComponentData(category, type, componentId) {
  if (
    !componentsData[category] ||
    !componentsData[category][type] ||
    !componentsData[category][type][componentId]
  ) {
    return null;
  }

  return componentsData[category][type][componentId];
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
