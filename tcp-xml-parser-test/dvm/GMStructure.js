module.exports = {
  GMStructor: function (xObj) {
    this.addr = xObj["@_addr"];
    this.power = {
      type: String,
      value: xObj["@_power"],
      change: {
        on: 1,
        off: 0,
      },
    };
    this.setTemp = { type: Number, value: xObj["@_setTemp"] };
    this.roomTemp = { type: Number, value: xObj["@_roomTemp"] };
    this.opMode = {
      type: String,
      value: xObj["@_opMode"],
      change: {
        cool: 0,
        heat: 1,
        fan: 2,
        dry: 3,
        auto: 4,
        erv: 5,
        normal: 6,
        sleep: 7,
      },
    };
    this.remoconEnable = {
      type: String,
      value: xObj["@_remoconEnable"],
      change: {
        true: 1,
        false: 0,
      },
    };
    this.fanSpeed = {
      type: String,
      value: xObj["@_fanSpeed"],
      change: {
        high: 0,
        mid: 1,
        low: 2,
        auto: 4,
      },
    };
    this.error = {
      type: String,
      value: xObj["@_error"],
      change: {
        true: 1,
        false: 0,
      },
    };
    this.useMode = {
      type: String,
      value: xObj["@_useMode"],
      change: { cool: 0, none: 1, heat: 2 },
    };
    this.controlMode = {
      type: String,
      value: xObj["@_controlMode"],
      change: {
        cool: 0,
        fan: 1,
        heat: 2,
        none: -1,
      },
    };
    this.upperTemperatureLimit = {
      type: String,
      value: xObj["@_upperTemperatureLimit"],
      change: {
        true: 1,
        false: 0,
      },
    };
    this.lowerTemperatureLimit = {
      type: String,
      value: xObj["@_lowerTemperatureLimit"],
      change: {
        true: 1,
        false: 0,
      },
    };
    this.upperTemperature = {
      type: Number,
      value: xObj["@_upperTemperature"],
    };
    this.lowerTemperature = {
      type: Number,
      value: xObj["@_lowerTemperature"],
    };
    this.isTempLimited = {
      type: String,
      value: xObj["@_isTempLimited"],
      change: {
        true: 1,
        false: 0,
      },
    };

    this.config = xObj.config;
    this.ObjectName = "";

    this.setObjectName = (indoorName) => {
      this.ObjectName = `${this.addr}_${indoorName}`;
    };
    this.getAddress = () => {
      return this.addr;
    };

    this.getObjectName = () => {
      return this.ObjectName;
    };
  },
};
