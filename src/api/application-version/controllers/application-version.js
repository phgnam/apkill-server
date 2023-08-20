'use strict';

/**
 * application-version controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::application-version.application-version');
