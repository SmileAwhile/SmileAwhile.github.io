import React from 'react';
import { Panel, Accordion, Modal, Button, form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

import Recipe from './Recipe';

export default class RecipeBook extends React.Component {
  constructor() {
    super();
    self = this;
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
            <Recipe recipeTitle={window.recipes[i].title} ingredients={window.recipes[i].ingredients} index={i} />
          </Panel>
        )
      }
      self.forceUpdate();
    }

    window.remove = function(index) {
      console.log('remove');
      recipes.splice(index, 1);

      //localStorage.setItem("recipes", JSON.stringify(recipes));
      localStorage.recipes = JSON.stringify(window.recipes);
      update();
    }



    this.state = { showModal: false };

    update();
  }

  save() {
    var rec = document.getElementById('Recipe').value;
    var ing = document.getElementById('Ingredients').value;

    window.recipes.push({title: rec, ingredients: ing.split(',')});

    this.setState({ showModal: false});
    update();
  }



  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }




  render() {
    return (
      <div>
        <h2 class="recipeBookHead">Recipe Book</h2>
        <Accordion>
            {data}
        </Accordion>
        <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)}>Add Recipe</Button>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="Recipe">
                <ControlLabel>Recipe</ControlLabel>
                <FormControl type="text" placeholder="Enter Recipe Name" />
              </FormGroup>
              <hr />
              <FormGroup controlId="Ingredients">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl type="textarea" placeholder="Enter Ingredients,Separated,By Commas" />
              </FormGroup>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.save.bind(this)} bsStyle="primary" bsSize="large">Save Recipe</Button>
            <Button onClick={this.close.bind(this)} bsSize="large">Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}
