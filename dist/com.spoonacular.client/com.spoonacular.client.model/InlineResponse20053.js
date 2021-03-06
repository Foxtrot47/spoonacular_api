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

var _InlineResponse20053SearchResults = require('./InlineResponse20053SearchResults');

var _InlineResponse20053SearchResults2 = _interopRequireDefault(_InlineResponse20053SearchResults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The InlineResponse20053 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053
 * @version 1.0
 */
var InlineResponse20053 = function () {
  /**
   * Constructs a new <code>InlineResponse20053</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053
   * @param query {String} 
   * @param totalResults {Number} 
   * @param limit {Number} 
   * @param offset {Number} 
   * @param searchResults {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053SearchResults>} 
   */
  function InlineResponse20053(query, totalResults, limit, offset, searchResults) {
    _classCallCheck(this, InlineResponse20053);

    InlineResponse20053.initialize(this, query, totalResults, limit, offset, searchResults);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20053, null, [{
    key: 'initialize',
    value: function initialize(obj, query, totalResults, limit, offset, searchResults) {
      obj['query'] = query;
      obj['totalResults'] = totalResults;
      obj['limit'] = limit;
      obj['offset'] = offset;
      obj['searchResults'] = searchResults;
    }

    /**
     * Constructs a <code>InlineResponse20053</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053} The populated <code>InlineResponse20053</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20053();

        if (data.hasOwnProperty('query')) {
          obj['query'] = _ApiClient2.default.convertToType(data['query'], 'String');
        }
        if (data.hasOwnProperty('totalResults')) {
          obj['totalResults'] = _ApiClient2.default.convertToType(data['totalResults'], 'Number');
        }
        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient2.default.convertToType(data['limit'], 'Number');
        }
        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient2.default.convertToType(data['offset'], 'Number');
        }
        if (data.hasOwnProperty('searchResults')) {
          obj['searchResults'] = _ApiClient2.default.convertToType(data['searchResults'], [_InlineResponse20053SearchResults2.default]);
        }
      }
      return obj;
    }
  }]);

  return InlineResponse20053;
}();

/**
 * @member {String} query
 */


InlineResponse20053.prototype['query'] = undefined;

/**
 * @member {Number} totalResults
 */
InlineResponse20053.prototype['totalResults'] = undefined;

/**
 * @member {Number} limit
 */
InlineResponse20053.prototype['limit'] = undefined;

/**
 * @member {Number} offset
 */
InlineResponse20053.prototype['offset'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20053SearchResults>} searchResults
 */
InlineResponse20053.prototype['searchResults'] = undefined;

exports.default = InlineResponse20053;