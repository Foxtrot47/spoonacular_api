'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * spoonacular API
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The spoonacular Nutrition, Recipe, and Food API allows you to access over 380,000 recipes, thousands of ingredients, 800,000 food products, and 100,000 menu items. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The version of the OpenAPI document: 1.0
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Contact: mail@spoonacular.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

var _InlineResponse2003WinePairingProductMatches = require('./InlineResponse2003WinePairingProductMatches');

var _InlineResponse2003WinePairingProductMatches2 = _interopRequireDefault(_InlineResponse2003WinePairingProductMatches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse2003WinePairing model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairing
 * @version 1.0
 */
var InlineResponse2003WinePairing = function () {
  /**
   * Constructs a new <code>InlineResponse2003WinePairing</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairing
   * @param pairedWines {Array.<String>} 
   * @param pairingText {String} 
   * @param productMatches {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairingProductMatches>} 
   */
  function InlineResponse2003WinePairing(pairedWines, pairingText, productMatches) {
    _classCallCheck(this, InlineResponse2003WinePairing);

    InlineResponse2003WinePairing.initialize(this, pairedWines, pairingText, productMatches);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2003WinePairing, null, [{
    key: 'initialize',
    value: function initialize(obj, pairedWines, pairingText, productMatches) {
      obj['pairedWines'] = pairedWines;
      obj['pairingText'] = pairingText;
      obj['productMatches'] = productMatches;
    }

    /**
     * Constructs a <code>InlineResponse2003WinePairing</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairing} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairing} The populated <code>InlineResponse2003WinePairing</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2003WinePairing();

        if (data.hasOwnProperty('pairedWines')) {
          obj['pairedWines'] = _ApiClient2.default.convertToType(data['pairedWines'], ['String']);
        }
        if (data.hasOwnProperty('pairingText')) {
          obj['pairingText'] = _ApiClient2.default.convertToType(data['pairingText'], 'String');
        }
        if (data.hasOwnProperty('productMatches')) {
          obj['productMatches'] = _ApiClient2.default.convertToType(data['productMatches'], [_InlineResponse2003WinePairingProductMatches2.default]);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse2003WinePairing;
}();

/**
 * @member {Array.<String>} pairedWines
 */


InlineResponse2003WinePairing.prototype['pairedWines'] = undefined;

/**
 * @member {String} pairingText
 */
InlineResponse2003WinePairing.prototype['pairingText'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2003WinePairingProductMatches>} productMatches
 */
InlineResponse2003WinePairing.prototype['productMatches'] = undefined;

exports.default = InlineResponse2003WinePairing;