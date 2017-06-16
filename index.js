'use strict';
const render = (root) => {
  root.empty();
  root.append(createOptions(state.families));
};

const state = {
  families: null
};

$(_=>{
  $.getJSON('https://swapi.co/api/species/',(json,error)=>{
    console.log(json);
    if(error !== 'success'){
      return alert("error al obtener datos");
    }
    state.families = json.results;
    const root = $('#root');
    render(root);
  });
});
