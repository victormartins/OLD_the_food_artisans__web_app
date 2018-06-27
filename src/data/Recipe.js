import Immutable from 'immutable';

const Recipe = Immutable.Record({
  id: '',
  name: '',
  short_description: '',
  cover: '',
  description: '',
  more_details: '',
  ingredients: []
});

export default Recipe;