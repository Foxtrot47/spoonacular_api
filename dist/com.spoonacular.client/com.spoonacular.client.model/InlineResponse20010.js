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

var _InlineResponse20010Ingredients = require('./InlineResponse20010Ingredients');

var _InlineResponse20010Ingredients2 = _interopRequireDefault(_InlineResponse20010Ingredients);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20010 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010
 * @version 1.0
 */
var InlineResponse20010 = function () {
  /**
   * Constructs a new <code>InlineResponse20010</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010
   * @param ingredients {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010Ingredients>} 
   * @param totalCost {Number} 
   * @param totalCostPerServing {Number} 
   */
  function InlineResponse20010(ingredients, totalCost, totalCostPerServing) {
    _classCallCheck(this, InlineResponse20010);

    InlineResponse20010.initialize(this, ingredients, totalCost, totalCostPerServing);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20010, null, [{
    key: 'initialize',
    value: function initialize(obj, ingredients, totalCost, totalCostPerServing) {
      obj['ingredients'] = ingredients;
      obj['totalCost'] = totalCost;
      obj['totalCostPerServing'] = totalCostPerServing;
    }

    /**
     * Constructs a <code>InlineResponse20010</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010} The populated <code>InlineResponse20010</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20010();

        if (data.hasOwnProperty('ingredients')) {
          obj['ingredients'] = _ApiClient2.default.convertToType(data['ingredients'], [_InlineResponse20010Ingredients2.default]);
        }
        if (data.hasOwnProperty('totalCost')) {
          obj['totalCost'] = _ApiClient2.default.convertToType(data['totalCost'], 'Number');
        }
        if (data.hasOwnProperty('totalCostPerServing')) {
          obj['totalCostPerServing'] = _ApiClient2.default.convertToType(data['totalCostPerServing'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20010;
}();

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20010Ingredients>} ingredients
 */


InlineResponse20010.prototype['ingredients'] = undefined;

/**
 * @member {Number} totalCost
 */
InlineResponse20010.prototype['totalCost'] = undefined;

/**
 * @member {Number} totalCostPerServing
 */
InlineResponse20010.prototype['totalCostPerServing'] = undefined;

exports.default = InlineResponse20010;