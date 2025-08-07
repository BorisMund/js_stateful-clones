'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  let curentStay = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      curentStay = { ...curentStay, ...action.extraData };
      result.push({ ...curentStay });
    } else if (action.type === 'clear') {
      curentStay = {};
      result.push({ ...curentStay });
    } else if (action.type === 'removeProperties') {
      for (const key of action.keysToRemove) {
        delete curentStay[key];
      }
      result.push({ ...curentStay });
    }
  }

  return result;
}

module.exports = transformStateWithClones;
