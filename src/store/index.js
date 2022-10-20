import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    airlines: [],
    filters: {
      options: [
        {
          label: 'Только прямые',
          id: 0,
          value: false,
        },
        {
          label: 'Только c багажом',
          id: 1,
          value: false,
        },
        {
          label: 'Только возвратные',
          id: 2,
          value: false,
        },
      ],
      airlines: [],
    },
    flights: [],
  },
  getters: {
    filterOptions(state) {
      return state.filters.options;
    },
    filterAirlines(state, getters) {
      const airlines = [];
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const airline in state.airlines) {
        airlines.push({
          id: airline,
          label: state.airlines[airline],
          value: !!state.filters.airlines[airline],
        });
      }
      // eslint-disable-next-line no-nested-ternary
      airlines.sort((a, b) => (a.label === b.label ? 0 : a.label < b.label ? -1 : 1));
      return [{
        id: 'ALL',
        label: 'Все',
        // eslint-disable-next-line
        value: !(getters.selectAirlines.length),
      }, ...airlines];
    },
    selectAirlines(state) {
      const airlines = [];
      // eslint-disable-next-line guard-for-in,no-restricted-syntax
      for (const airline in state.airlines) {
        if (state.filters.airlines[airline]) {
          airlines.push(airline);
        }
      }
      return airlines;
    },
    filterFlights(state, getters) {
      return state.flights.filter((flight) => {
        if ((getters.selectAirlines.length && !getters.selectAirlines.filter(
          (carrier) => carrier === flight.validating_carrier,
        ).length)) {
          return false;
        }
        if (
          state.filters.options[0].value
          && flight.itineraries[0][0].segments.length > 1) {
          return false;
        }
        if (
          state.filters.options[2].value
          && !flight.itineraries[0][0].refundable) {
          return false;
        }
        const services = Object.keys(flight.services);
        if (
          state.filters.options[1].value
          && services.filter((item) => item === '0PC').length) {
          return false;
        }
        return true;
      });
    },
    getAirlines(state) {
      return state.airlines;
    },
  },
  mutations: {
    setFilterOptions(state, { id, value }) {
      state.filters.options.filter((item) => item.id === id)[0].value = value;
    },
    resetFilterOptions(state) {
      state.filters.options.forEach((item) => {
        // eslint-disable-next-line no-param-reassign
        item.value = false;
      });
    },
    setAirlines(state, airlines) {
      state.airlines = airlines;
    },
    setFlights(state, flights) {
      state.flights = flights;
    },
    setFilterAirlines(state, { id, value }) {
      state.filters.airlines[id] = value;
    },
    resetFilterAirlines(state) {
      state.filters.airlines = [];
    },
  },
  actions: {
    async loadData({ commit }) {
      const result = await axios.get('/results.json');
      commit('setAirlines', result.data.airlines);
      commit('setFlights', result.data.flights);
    },
    setFilterAirlines({ commit }, payload) {
      if (payload.id === 'ALL') {
        commit('resetFilterAirlines');
      } else {
        commit('setFilterAirlines', payload);
      }
    },
  },
  modules: {
  },
});
