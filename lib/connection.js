const request = require("request");

const { Urls, Headers } = require("./constants");
const { flatMap } = require("./utils");
const { Device } = require("./device");

class Connection {

    constructor(contextKey) {
        this.contextKey = contextKey;
    }

    // returns Promise<Array<Device>>
    listDevices() {
        const options = {
            url: Urls.ListDevices,
            headers: {}
        };
        options.headers[Headers.ContextKey] = this.contextKey;
        
        return new Promise((resolve, reject) => {
            request.get(options, function (err, httpResponse, body) {
                if (err) {
                    return reject(err);
                }
                const buildings = JSON.parse(body);

                const rawDevices = flatMap(buildings, b => b.Structure.Devices);
                const devices = rawDevices.map(raw => new Device(raw));
                resolve(devices);
            });
        });
    }


    // returns Promise<Connection>
    static create(email, password, language) {

        const formData = {
            "AppVersion": "1.9.3.0",
            "CaptchaChallenge": "",
            "CaptchaResponse": "",
            "Email": email,
            "Password": password,
            "Language": language,
            "Persist": "true"
        };

        return new Promise((resolve, reject) => {

            request.post({url: Urls.Login, formData}, (err, httpResponse, body) => {
                if (err) {
                    return reject(err);
                }
                const loginObject = JSON.parse(body);
                if (loginObject.ErrorId || loginObject.ErrorMessage) {
                    return reject(`Login error: ${loginObject.ErrorMessage} [${loginObject.ErrorId}]`);
                }
                if (!loginObject.LoginData) {
                    return reject(`Missing LoginData: ${body}`);
                }
                const contextKey = loginObject.LoginData.ContextKey;
                resolve(new Connection(contextKey));
            });
        });
    }
}

exports.Connection = Connection;
