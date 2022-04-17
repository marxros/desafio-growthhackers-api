import { Connection, createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'database_growth';
  createConnection({
    ...options,
  });
});

// export default async (): Promise<Connection> => {
//   const defaultOptions = await getConnectionOptions();
//   return createConnection(
//     Object.assign(defaultOptions, {
//       //host: process.env.NODE_ENV === "test" ? "localhost" : host,
//       database:
//         process.env.NODE_ENV === "test"
//           ? "rentx_test"
//           : "database_growth",
//     })
//   );
// }