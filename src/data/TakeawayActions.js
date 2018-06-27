import TakeawayActionTypes from './TakeawayActionTypes';
import Dispatcher from './../Dispatcher';

const TakeawayActions = {
  getDailyMenus() {
    Dispatcher.dispatch({
      type: TakeawayActionTypes.GET_DAILY_MENUS
    });
  },
};

export default TakeawayActions;