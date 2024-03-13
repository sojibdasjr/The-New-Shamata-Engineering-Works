const getDesignFromLS = () => {
  const strodDesign = localStorage.getItem("desing");
  if (strodDesign) {
    return JSON.parse(strodDesign);
  }
  return [];
};

const saveDesingToLC = (id) => {
  const strodAllDesign = getDesignFromLS();
  const exist = strodAllDesign.find((desingId) => desingId === id);
  if (!exist) {
    strodAllDesign.push(id);
    localStorage.setItem("desing", JSON.stringify(strodAllDesign));
  }
};

export { getDesignFromLS, saveDesingToLC };
