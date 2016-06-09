import React from 'react';
import { ListGroup, ListGroupItem, Button, ButtonToolbar, Modal, form, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

import IngredientsList from './IngredientsList';

export default class Recipe extends React.Component {
  constructor() {
    super();
    this.state = { showModal: false };



  }
  rem() {
    remove(this.props.index);
    this.forceUpdate();
  }

  save() {
    var rec = document.getElementById('Recipe').value;
    var ing = document.getElementById('Ingredients').value;

    window.recipes.splice(this.props.index, 1);

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
        <h3 class="ingredientHead">Ingredients</h3>
        <IngredientsList ingredients={this.props.ingredients} />

        <ButtonToolbar>
          <Button bsStyle="danger" bsSize="large" onClick={this.rem.bind(this)}>Delete</Button>
          <Button bsStyle="default" bsSize="large" onClick={this.open.bind(this)}>Edit Recipe</Button>
        </ButtonToolbar>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup controlId="Recipe">
                <ControlLabel>Recipe</ControlLabel>
                <FormControl type="text" placeholder="Enter Recipe" defaultValue={this.props.recipeTitle} />
              </FormGroup>
              <hr />
              <FormGroup controlId="Ingredients">
                <ControlLabel>Ingredients</ControlLabel>
                <FormControl type="textarea" placeholder="Enter Ingredients" defaultValue={this.props.ingredients} />
              </FormGroup>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <ButtonToolbar>
              <Button onClick={this.save.bind(this)} bsStyle="primary" bsSize="large">Save Recipe</Button>
              <Button onClick={this.close.bind(this)} bsSize="large">Close</Button>
            </ButtonToolbar>
          </Modal.Footer>
        </Modal>

      </div>
    );
  }
}
