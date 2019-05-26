const { Device } = require("../lib/device");

describe("the Device class", () => {

    const RawDevice = {
        DeviceID: 123456,
        DeviceName: "cooler",
        BuildingID: 9999,
        Device: {
            Power: true,
            OperationMode: 7,
            RoomTemperature: 19,
            SetTemperature: 24
        }
    };
    Object.freeze(RawDevice);

    let device;

    beforeAll(() => {
        device = deviceFromRaw(RawDevice);
    });

    it("reads device ID", () => expect(device.id).toBe(123456));
    it("reads device name", () => expect(device.name).toBe("cooler"));
    it("reads building ID", () => expect(device.building_id).toBe(9999));

    it("reads device power", () => expect(device.power).toBe(true));

    it("reads current operation mode", () => expect(device.mode.value).toBe(7));
    it("describes current operation mode", () => expect(device.mode.description).toBe("fan"));

    it("reads current room temperature", () => expect(device.temperature.current).toBe(19));
    it("reads target temperature", () => expect(device.temperature.setting).toBe(24));

    function deviceFromRaw() {
        return new Device(RawDevice);
    }
});

describe("Device.describeMode", () => {
    const DATA = [
        [1, "heating"],
        [2, "drying"],
        [3, "cooling"],
        [7, "fan"],
        [8, "auto"]
    ];
    for (const row of DATA) {
        const [id, desc] = row;
        it(`with ${id} as '${desc}`, () => expect(describe(id)).toBe(desc));
    }

    it("with unknown as the mode number itself", () => {
        expect(describe(99)).toBe("99")
    });

    function describe(mode) {
        return Device.describeMode(mode);
    }
})