let config = {
  dbConfig: {
    host: "localhost",
    user: "root",
    password: "4msys!", //db 패스워드
    database: "bems",
  },
  deviceConfigs: [
    {
      host: "192.168.7.100",
      port: 11000,
    },
  ],
};

module.exports = config;
