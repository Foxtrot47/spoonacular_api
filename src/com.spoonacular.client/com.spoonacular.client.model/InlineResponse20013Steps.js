/**
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

import ApiClient from '../ApiClient';
import InlineResponse20013Ingredients from './InlineResponse20013Ingredients';

/**
 * The InlineResponse20013Steps model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Steps
 * @version 1.0
 */
class InlineResponse20013Steps {
    /**
     * Constructs a new <code>InlineResponse20013Steps</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Steps
     * @param _number {Number} 
     * @param step {String} 
     */
    constructor(_number, step) { 
        
        InlineResponse20013Steps.initialize(this, _number, step);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _number, step) { 
        obj['number'] = _number;
        obj['step'] = step;
    }

    /**
     * Constructs a <code>InlineResponse20013Steps</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Steps} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Steps} The populated <code>InlineResponse20013Steps</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse20013Steps();

            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('step')) {
                obj['step'] = ApiClient.convertToType(data['step'], 'String');
            }
            if (data.hasOwnProperty('ingredients')) {
                obj['ingredients'] = ApiClient.convertToType(data['ingredients'], [InlineResponse20013Ingredients]);
            }
            if (data.hasOwnProperty('equipment')) {
                obj['equipment'] = ApiClient.convertToType(data['equipment'], [InlineResponse20013Ingredients]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} number
 */
InlineResponse20013Steps.prototype['number'] = undefined;

/**
 * @member {String} step
 */
InlineResponse20013Steps.prototype['step'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Ingredients>} ingredients
 */
InlineResponse20013Steps.prototype['ingredients'] = undefined;

/**
 * @member {Array.<module:com.spoonacular.client/com.spoonacular.client.model/InlineResponse20013Ingredients>} equipment
 */
InlineResponse20013Steps.prototype['equipment'] = undefined;






export default InlineResponse20013Steps;

