module.exports = {
  RealTimeStructor: function (row) {
    this.id = row["id"];
    this.ObjectName = row["object_name"];
    this.logValue = row["log_value"];
    this.ctrlValue = row["ctrl_value"];
    this.logTime = row["log_time"];
    this.objectType = row["object_type"];
    this.networkType = row["network_type"];
    this.networkId = row["network_id"];

    this.getIndoor = () => {
      const tmp = this.ObjectName.split("_");
      return tmp[0];
    };
    this.getObject = () => {
      const tmp = this.ObjectName.split("_");
      return tmp[2];
    };
    this.getId = () => {
      return this.id;
    };
  },
};
