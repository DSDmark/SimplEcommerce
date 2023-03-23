'use strict';

/**
 * website-logo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::website-logo.website-logo');
