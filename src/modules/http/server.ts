type ServerConnectionOptions = {
  ADDRESS: string;
  PORT: number;
  BASE: string;
};

const SERVER_CONNECTION: ServerConnectionOptions = {
  ADDRESS: "localhost",
  PORT: 5026,
  BASE: "api",
};

const getApiPath = (option: ServerConnectionOptions): string => {
  return `http://${option.ADDRESS}:${option.PORT}/${option.BASE}/`;
};

export { getApiPath, SERVER_CONNECTION };
