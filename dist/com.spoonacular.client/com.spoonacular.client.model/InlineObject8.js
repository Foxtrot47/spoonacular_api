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
 * The InlineObject8 model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineObject8
 * @version 1.0
 */
var InlineObject8 = function () {
  /**
   * Constructs a new <code>InlineObject8</code>.
   * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineObject8
   * @param username {String} The username.
   * @param startDate {String} The start date in the format yyyy-mm-dd.
   * @param endDate {String} The end date in the format yyyy-mm-dd.
   * @param hash {String} The private hash for the username.
   */
  function InlineObject8(username, startDate, endDate, hash) {
    _classCallCheck(this, InlineObject8);

    InlineObject8.initialize(this, username, startDate, endDate, hash);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject8, null, [{
    key: 'initialize',
    value: function initialize(obj, username, startDate, endDate, hash) {
      obj['username'] = username;
      obj['start-date'] = startDate;
      obj['end-date'] = endDate;
      obj['hash'] = hash;
    }

    /**
     * Constructs a <code>InlineObject8</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject8} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineObject8} The populated <code>InlineObject8</code> instance.
     */

  }, {
    key: 'constructFromObject',
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject8();

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient2.default.convertToType(data['username'], 'String');
        }
        if (data.hasOwnProperty('start-date')) {
          obj['start-date'] = _ApiClient2.default.convertToType(data['start-date'], 'String');
        }
        if (data.hasOwnProperty('end-date')) {
          obj['end-date'] = _ApiClient2.default.convertToType(data['end-date'], 'String');
        }
        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient2.default.convertToType(data['hash'], 'String');
        }
      }
      return obj;
    }
  }]);

  return InlineObject8;
}();

/**
 * The username.
 * @member {String} username
 */


InlineObject8.prototype['username'] = undefined;

/**
 * The start date in the format yyyy-mm-dd.
 * @member {String} start-date
 */
InlineObject8.prototype['start-date'] = undefined;

/**
 * The end date in the format yyyy-mm-dd.
 * @member {String} end-date
 */
InlineObject8.prototype['end-date'] = undefined;

/**
 * The private hash for the username.
 * @member {String} hash
 */
InlineObject8.prototype['hash'] = undefined;

exports.default = InlineObject8;