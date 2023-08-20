'use strict';

/**
 * application-version router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::application-version.application-version');
