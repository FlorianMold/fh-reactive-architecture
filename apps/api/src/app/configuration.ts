export default () => ({
  HASURA_GRAPHQL_ADMIN_SECRET: process.env.HASURA_ADMIN_SECRET,
  HASURA_GRAPHQL_API_ENDPOINT_HTTP: process.env.HASURA_SCHEMA_URL_HTTP,
  HASURA_GRAPHQL_API_ENDPOINT_WS: process.env.HASURA_SCHEMA_URL,
});