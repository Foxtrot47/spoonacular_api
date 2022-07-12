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
 * The InlineResponse2008 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008
 * @version 1.0
 */
var InlineResponse2008 = function () {
  /**
   * Constructs a new <code>InlineResponse2008</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008
   * @param sweetness {Number} 
   * @param saltiness {Number} 
   * @param sourness {Number} 
   * @param bitterness {Number} 
   * @param savoriness {Number} 
   * @param fattiness {Number} 
   * @param spiciness {Number} 
   */
  function InlineResponse2008(sweetness, saltiness, sourness, bitterness, savoriness, fattiness, spiciness) {
    _classCallCheck(this, InlineResponse2008);

    InlineResponse2008.initialize(this, sweetness, saltiness, sourness, bitterness, savoriness, fattiness, spiciness);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2008, null, [{
    key: 'initialize',
    value: function initialize(obj, sweetness, saltiness, sourness, bitterness, savoriness, fattiness, spiciness) {
      obj['sweetness'] = sweetness;
      obj['saltiness'] = saltiness;
      obj['sourness'] = sourness;
      obj['bitterness'] = bitterness;
      obj['savoriness'] = savoriness;
      obj['fattiness'] = fattiness;
      obj['spiciness'] = spiciness;
    }

    /**
     * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2008();

        if (data.hasOwnProperty('sweetness')) {
          obj['sweetness'] = _ApiClient2.default.convertToType(data['sweetness'], 'Number');
        }
        if (data.hasOwnProperty('saltiness')) {
          obj['saltiness'] = _ApiClient2.default.convertToType(data['saltiness'], 'Number');
        }
        if (data.hasOwnProperty('sourness')) {
          obj['sourness'] = _ApiClient2.default.convertToType(data['sourness'], 'Number');
        }
        if (data.hasOwnProperty('bitterness')) {
          obj['bitterness'] = _ApiClient2.default.convertToType(data['bitterness'], 'Number');
        }
        if (data.hasOwnProperty('savoriness')) {
          obj['savoriness'] = _ApiClient2.default.convertToType(data['savoriness'], 'Number');
        }
        if (data.hasOwnProperty('fattiness')) {
          obj['fattiness'] = _ApiClient2.default.convertToType(data['fattiness'], 'Number');
        }
        if (data.hasOwnProperty('spiciness')) {
          obj['spiciness'] = _ApiClient2.default.convertToType(data['spiciness'], 'Number');
        }
      }
      return obj;
    }
  }]);

  return InlineResponse2008;
}();

/**
 * @member {Number} sweetness
 */


InlineResponse2008.prototype['sweetness'] = undefined;

/**
 * @member {Number} saltiness
 */
InlineResponse2008.prototype['saltiness'] = undefined;

/**
 * @member {Number} sourness
 */
InlineResponse2008.prototype['sourness'] = undefined;

/**
 * @member {Number} bitterness
 */
InlineResponse2008.prototype['bitterness'] = undefined;

/**
 * @member {Number} savoriness
 */
InlineResponse2008.prototype['savoriness'] = undefined;

/**
 * @member {Number} fattiness
 */
InlineResponse2008.prototype['fattiness'] = undefined;

/**
 * @member {Number} spiciness
 */
InlineResponse2008.prototype['spiciness'] = undefined;

exports.default = InlineResponse2008;