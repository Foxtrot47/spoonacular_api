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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The RecipesParseIngredientsNutritionNutrients model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients
 * @version 1.0
 */
var RecipesParseIngredientsNutritionNutrients = function () {
  /**
   * Constructs a new <code>RecipesParseIngredientsNutritionNutrients</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients
   * @param name {String} 
   * @param amount {Number} 
   * @param unit {String} 
   * @param percentOfDailyNeeds {Number} 
   */
  function RecipesParseIngredientsNutritionNutrients(name, amount, unit, percentOfDailyNeeds) {
    _classCallCheck(this, RecipesParseIngredientsNutritionNutrients);

    RecipesParseIngredientsNutritionNutrients.initialize(this, name, amount, unit, percentOfDailyNeeds);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RecipesParseIngredientsNutritionNutrients, null, [{
    key: 'initialize',
    value: function initialize(obj, name, amount, unit, percentOfDailyNeeds) {
      obj['name'] = name;
      obj['amount'] = amount;
      obj['unit'] = unit;
      obj['percentOfDailyNeeds'] = percentOfDailyNeeds;
    }

    /**
     * Constructs a <code>RecipesParseIngredientsNutritionNutrients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/RecipesParseIngredientsNutritionNutrients} The populated <code>RecipesParseIngredientsNutritionNutrients</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RecipesParseIngredientsNutritionNutrients();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient2.default.convertToType(data['name'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient2.default.convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient2.default.convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('percentOfDailyNeeds')) {
          obj['percentOfDailyNeeds'] = _ApiClient2.default.convertToType(data['percentOfDailyNeeds'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return RecipesParseIngredientsNutritionNutrients;
}();

/**
 * @member {String} name
 */


RecipesParseIngredientsNutritionNutrients.prototype['name'] = undefined;

/**
 * @member {Number} amount
 */
RecipesParseIngredientsNutritionNutrients.prototype['amount'] = undefined;

/**
 * @member {String} unit
 */
RecipesParseIngredientsNutritionNutrients.prototype['unit'] = undefined;

/**
 * @member {Number} percentOfDailyNeeds
 */
RecipesParseIngredientsNutritionNutrients.prototype['percentOfDailyNeeds'] = undefined;

exports.default = RecipesParseIngredientsNutritionNutrients;