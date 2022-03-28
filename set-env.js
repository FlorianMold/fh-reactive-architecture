/**
 * This script should only be called by the ci/cd pipeline.
 */

const fs = require('fs');
const colors = require('colors');
require('dotenv').config();

// Set the path to our environment variable
const targetPath = './apps/reactive-architecture/src/environments/environment.prod.ts';

/**
 * Generates the environment.
 *
 * @param isProduction Whether the application is in production mode
 * @param hasuraSchemaUrl The graphql endpoint of the application.
 * @param graphqlWSEndpoint The graphql endpoint of the application.
 * @param graphqlHTTPEndpoint The graphql endpoint of the application.
 * @returns string
 */
const generateEnvironment = (isProduction, hasuraSchemaUrl, graphqlWSEndpoint, graphqlHTTPEndpoint) => {
  return `export const environment = {
  production: ${isProduction},
  hasuraSecret: '${hasuraSchemaUrl}',
  graphqlWSEndpoint: '${graphqlWSEndpoint}',
  graphqlHTTPEndpoint: '${graphqlHTTPEndpoint}',
};
`;
};

const envFile = generateEnvironment(
  true,
  process.env.HASURA_ADMIN_SECRET,
  process.env.HASURA_SCHEMA_URL,
  process.env.HASURA_SCHEMA_URL_HTTP,
);

console.log(colors.magenta('The file environment.prod.ts will be written with the following content'));
console.log(colors.grey(envFile));

/**
 * Writes the generated environment file the file-system.
 */
fs.writeFile(targetPath, envFile, (err) => {
  if (err) {
    throw err;
  } else {
    console.log(colors.magenta(`Angular environment.prod.ts generated file generated correctly at ${targetPath}`));
  }
});
