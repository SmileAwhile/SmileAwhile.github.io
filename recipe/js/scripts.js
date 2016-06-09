import React from 'react';
import { Panel, Accordion, Modal, Button } from 'react-bootstrap';

import Recipe from './Recipe';

window.recipes;

if (localStorage.recipes != "[]" && localStorage.recipes != undefined) {
  window.recipes = JSON.parse(localStorage.recipes);
}
else {
  console.log("recipes");
  window.recipes = [ {title: "Jalepeno Popper Chicken Chili", ingredients: ["Jalepenos", "Chicken", "Cannelini Beans", "Bell Peppers", "Cream Cheese", "Pepper Jack", "Cheddar", "Bacon", "Diced Tomatos", "Chicken Broth", "Onions", "Garlic"]},
          {title: "Best BP & J", ingredients: ["Toasted Bread", "Peanut Butter", "Jelly", "Butter"]},
          {title: "Fried Ramen", ingredients: ["Boiled Ramen (drained)", "Butter", "Seasoning Packet", "Sriracha"]}];
}

window.data;

window.update = function() {
  window.data = []
  console.log("update");
  localStorage.setItem("recipes", JSON.stringify(window.recipes));
  //localStorage.recipes = JSON.stringify(recipes);
  for (var i=0; i<window.recipes.length; i++) {
    data.push(
      <Panel header={window.recipes[i].title} eventKey={i} bsStyle="info">
        <Recipe ingredients={window.recipes[i].ingredients} index={i} />
      </Panel>
    )
  }
  Recipe.forceUpdate();
}

window.remove = function(index) {
  console.log('remove');
  recipes.splice(index, 1);

  //localStorage.setItem("recipes", JSON.stringify(recipes));
  localStorage.recipes = JSON.stringify(window.recipes);
  update();
}
