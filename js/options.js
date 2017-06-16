'use strict';
const createOptions = (array) => {
  const selected = $("<select></select>");
  const option = $("<option></option>");
  option.text("Selecione uan especie");
  option.attr("hidden","");
  selected.append(option);
  array.forEach((e) => {
    var optionFamily = $("<option></option>");
    optionFamily.text(e.name);
    selected.append(optionFamily);
  });
  return selected;
};
