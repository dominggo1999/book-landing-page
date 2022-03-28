export const svgModulesToComponents = (modules) => {
  const components = [];

  Object.values(modules).forEach((v) => {
    components.push(v.ReactComponent);
  });

  return components;
};
