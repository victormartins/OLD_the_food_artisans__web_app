import Immutable from 'immutable';
import { ReduceStore } from 'flux/utils';
import TakeawayActionTypes from './TakeawayActionTypes';
import Dispatcher from './../Dispatcher';

class TakeawayStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap().set(
      "daily_menus", [
        {
          day: '18 Jan',
          recipes: [
            {
              key: 'a',
              name: 'Paellita do Risitas',
              short_description: 'A Summer Hit',
              cover: 'https://material-ui.com//static/images/cards/paella.jpg',
              description: 'Description... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              more_details: 'More Details... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              ingredients: [
                { name: 'Aubergine' },
                { name: 'Red Peppers' },
                { name: 'Peas' }
              ]
            },
            {
              key: 'b',
              name: 'Feijocas Brazileira',
              short_description: 'Feijao preto maravilha',
              cover: 'https://i1.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/04/colombian-black-bean-stew.jpg',
              description: 'Description... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              more_details: 'More Details... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              ingredients: []
            },
            {
              key: 'c',
              name: 'Calhos',
              short_description: 'Spanish Style',
              cover: 'https://previews.123rf.com/images/nito500/nito5001704/nito500170400185/76893697-closeup-of-an-earthenware-bowl-with-spanish-callos-a-typical-stew-with-beef-tripe-and-chickpeas-on-a.jpg',
              description: 'Description... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              more_details: 'More Details... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              ingredients: []
            }
          ]
        },
        {
          day: '24 Jan',
          recipes: [
            {
              key: 'a',
              name: 'Paellita do Risitas',
              short_description: 'A Summer Hit',
              cover: 'https://material-ui.com//static/images/cards/paella.jpg',
              description: 'Description... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              more_details: 'More Details... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              ingredients: [
                { name: 'Aubergine' },
                { name: 'Red Peppers' },
                { name: 'Peas' }
              ]
            },
            {
              key: 'b',
              name: 'Feijocas Brazileira',
              short_description: 'Feijao preto maravilha',
              cover: 'https://i1.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/04/colombian-black-bean-stew.jpg',
              description: 'Description... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              more_details: 'More Details... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              ingredients: []
            },
            {
              key: 'c',
              name: 'Calhos',
              short_description: 'Spanish Style',
              cover: 'https://previews.123rf.com/images/nito500/nito5001704/nito500170400185/76893697-closeup-of-an-earthenware-bowl-with-spanish-callos-a-typical-stew-with-beef-tripe-and-chickpeas-on-a.jpg',
              description: 'Description... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              more_details: 'More Details... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              ingredients: []
            }
          ]
        },
        {
          day: '31 Jan',
          recipes: [
            {
              key: 'a',
              name: 'Paellita do Risitas',
              short_description: 'A Summer Hit',
              cover: 'https://material-ui.com//static/images/cards/paella.jpg',
              description: 'Description... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              more_details: 'More Details... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              ingredients: [
                { name: 'Aubergine' },
                { name: 'Red Peppers' },
                { name: 'Peas' }
              ]
            },
            {
              key: 'b',
              name: 'Feijocas Brazileira',
              short_description: 'Feijao preto maravilha',
              cover: 'https://i1.wp.com/www.onegreenplanet.org/wp-content/uploads/2016/04/colombian-black-bean-stew.jpg',
              description: 'Description... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              more_details: 'More Details... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              ingredients: []
            },
            {
              key: 'c',
              name: 'Calhos',
              short_description: 'Spanish Style',
              cover: 'https://previews.123rf.com/images/nito500/nito5001704/nito500170400185/76893697-closeup-of-an-earthenware-bowl-with-spanish-callos-a-typical-stew-with-beef-tripe-and-chickpeas-on-a.jpg',
              description: 'Description... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              more_details: 'More Details... Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima veritatis, quo non, rerum voluptas nobis labore facilis saepe, sunt perferendis mollitia? Maxime tempore quasi magni libero ad hic, nesciunt explicabo!',
              ingredients: []
            }
          ]
        }
      ]
    );
  }

  reduce(state, action) {
    console.log("Action Type ", action.type)
    switch (action.type) {
      case TakeawayActionTypes.GET_DAILY_MENUS:
        return state;

      default:
        return state;
    }
  }
}

export default new TakeawayStore()
