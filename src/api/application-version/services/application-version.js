'use strict';

/**
 * application-version service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::application-version.application-version');
