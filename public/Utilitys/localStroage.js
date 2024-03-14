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

const removeFromLS = (id) => {
  const strodDesign = getDesignFromLS();
  const remaining = strodDesign.filter((idx) => idx != id);
  localStorage.setItem("desing", JSON.stringify(remaining));
};

export { getDesignFromLS, saveDesingToLC, removeFromLS };
