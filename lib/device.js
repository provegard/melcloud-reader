class Device {
    constructor(rawDevice) {
        this.id = rawDevice.DeviceID;
        this.building_id = rawDevice.BuildingID;
        this.name = rawDevice.DeviceName;

        const deviceData = rawDevice.Device;

        this.power = deviceData.Power;

        this.temperature = {
            current: deviceData.RoomTemperature,
            setting: deviceData.SetTemperature
        };

        this.mode = {
            value: deviceData.OperationMode,
            description: Device.describeMode(deviceData.OperationMode)
        };

        this.fan_speed = {
            current: deviceData.ActualFanSpeed,
            setting: deviceData.FanSpeed,
            auto: deviceData.AutomaticFanSpeed
        };
    }

    toString() {
        const state = this.power ? "ON" : "OFF";
        return `[${this.id}] ${this.name} is ${state} and reading ${this.temperature} deg`;
    }

    static describeMode(mode) {
        switch (mode) {
            case 1: return "heating";
            case 2: return "drying";
            case 3: return "cooling";
            case 7: return "fan";
            case 8: return "auto";
            default: return "" + mode;
        }
    }
}

exports.Device = Device;


/*

{
  DeviceID: 111111,
  DeviceName: 'Qwerty',
  BuildingID: 22222,
  BuildingName: null,
  FloorID: null,
  FloorName: null,
  AreaID: null,
  AreaName: null,
  ImageID: 50141,
  InstallationDate: '2019-04-30T00:00:00',
  LastServiceDate: '2019-04-30T00:00:00',
  Presets: [],
  OwnerID: null,
  OwnerName: null,
  OwnerEmail: null,
  AccessLevel: 4,
  DirectAccess: false,
  EndDate: '2500-01-01T00:00:00',
  Zone1Name: null,
  Zone2Name: null,
  MinTemperature: 0,
  MaxTemperature: 40,
  HideVaneControls: false,
  HideDryModeControl: false,
  HideRoomTemperature: false,
  HideSupplyTemperature: false,
  HideOutdoorTemperature: false,
  BuildingCountry: null,
  OwnerCountry: null,
  AdaptorType: -1,
  Type: 0,
  MacAddress: 'ff:ff:ff:ff:ff:aa',
  SerialNumber: '1111111111',
  Device: {
    ListHistory24Formatters: [
          null,     null,
      [Object], [Object],
      [Object], [Object],
      [Object],     null,
          null,     null,
          null, [Object],
      [Object], [Object],
      [Object], [Object],
          null,     null,
          null
    ],
    DeviceType: 0,
    CanCool: true,
    CanHeat: true,
    CanDry: true,
    HasAutomaticFanSpeed: true,
    AirDirectionFunction: true,
    SwingFunction: true,
    NumberOfFanSpeeds: 5,
    UseTemperatureA: true,
    TemperatureIncrementOverride: 0,
    TemperatureIncrement: 0.5,
    MinTempCoolDry: 16,
    MaxTempCoolDry: 31,
    MinTempHeat: 10,
    MaxTempHeat: 31,
    MinTempAutomatic: 16,
    MaxTempAutomatic: 31,
    LegacyDevice: false,
    UnitSupportsStandbyMode: true,
    ModelIsAirCurtain: false,
    ModelSupportsFanSpeed: true,
    ModelSupportsAuto: true,
    ModelSupportsHeat: true,
    ModelSupportsDry: true,
    ModelSupportsVaneVertical: true,
    ModelSupportsVaneHorizontal: true,
    ModelSupportsStandbyMode: true,
    ModelSupportsEnergyReporting: false,
    Power: false,
    RoomTemperature: 21,
    SetTemperature: 24,
    ActualFanSpeed: 0,
    FanSpeed: 0,
    AutomaticFanSpeed: true,
    VaneVerticalDirection: 4,
    VaneVerticalSwing: false,
    VaneHorizontalDirection: 3,
    VaneHorizontalSwing: false,
    OperationMode: 7,
    EffectiveFlags: 0,
    LastEffectiveFlags: 0,
    InStandbyMode: false,
    DefaultCoolingSetTemperature: 21,
    DefaultHeatingSetTemperature: 23,
    RoomTemperatureLabel: 0,
    HasEnergyConsumedMeter: false,
    CurrentEnergyConsumed: 0,
    CurrentEnergyMode: 7,
    CoolingDisabled: false,
    MinPcycle: 1,
    MaxPcycle: 1,
    EffectivePCycle: 1,
    MaxOutdoorUnits: 255,
    MaxIndoorUnits: 255,
    MaxTemperatureControlUnits: 0,
    DeviceID: 111111,
    MacAddress: 'ff:ff:ff:ff:ff:aa',
    SerialNumber: '1111111111',
    TimeZoneID: 119,
    DiagnosticMode: 0,
    DiagnosticEndDate: null,
    ExpectedCommand: 1,
    Owner: null,
    DetectedCountry: null,
    AdaptorType: -1,
    FirmwareDeployment: null,
    FirmwareUpdateAborted: false,
    WifiSignalStrength: -66,
    WifiAdapterStatus: 'NORMAL',
    Position: 'Unknown',
    PCycle: 1,
    RecordNumMax: 0,
    LastTimeStamp: '2019-05-26T21:15:00',
    ErrorCode: 8000,
    HasError: false,
    LastReset: '2019-05-20T15:08:39.353',
    FlashWrites: 0,
    Scene: null,
    SSLExpirationDate: '2037-12-31T00:00:00',
    SPTimeout: 1,
    Passcode: null,
    ServerCommunicationDisabled: false,
    ConsecutiveUploadErrors: 0,
    DoNotRespondAfter: null,
    OwnerRoleAccessLevel: 1,
    OwnerCountry: 217,
    Rate1StartTime: null,
    Rate2StartTime: null,
    ProtocolVersion: 0,
    UnitVersion: 0,
    FirmwareAppVersion: 14000,
    FirmwareWebVersion: 0,
    FirmwareWlanVersion: 0,
    HasErrorMessages: false,
    HasZone2: false,
    Offline: false,
    Units: []
  },
  DiagnosticMode: 0,
  DiagnosticEndDate: null,
  Location: 88888,
  DetectedCountry: null,
  Registrations: 1,
  LocalIPAddress: null,
  TimeZone: 119,
  RegistReason: 'STARTUP',
  ExpectedCommand: 1,
  RegistRetry: 0,
  DateCreated: '2019-05-20T15:08:39.36',
  FirmwareDeployment: null,
  FirmwareUpdateAborted: false,
  Permissions: {
    CanSetOperationMode: true,
    CanSetFanSpeed: true,
    CanSetVaneDirection: true,
    CanSetPower: true,
    CanSetTemperatureIncrementOverride: true
  }
}


*/