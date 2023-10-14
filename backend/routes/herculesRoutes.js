const express = require("express");
const fs = require("fs");
const router = express.Router();
//const DMX = require('dmx');
//const universeInfo = require('../config/universe');
const dmxChannels = require('../config/channels');


//const dmx = new DMX();
//const universe = dmx.addUniverse(universeInfo.universeName, universeInfo.driver, universeInfo.serialPort);

// Read channel data from file.
const getChannelData = () => {
    try {
        const data = JSON.parse(fs.readFileSync('./config/channels.json', "utf8"));

        return data;
    } catch (error) {
        console.error(error);
        return;
    }
};

// Read Preset Button data from file.
const getPresetsFromFile = () => {
    try {
        const data = JSON.parse(fs.readFileSync('./config/presets.json', "utf8"));
        //console.log(`preset data: ${JSON.stringify(data)}`);

        return data;
    } catch (error) {
        console.error(error);
        return;
    }
};

// Determine actual color level based on master value.
// For 16bit values requiring 2 channels per color/ light. 
const getLevel16Bit = (rawLevel, master) => {
    let lsb = 0;
    let msb = 0;

    if (rawLevel < 0) {
        lsb = -1;
        msb = -1;
    }
    let level = (65535 * parseFloat(rawLevel)) * parseFloat(master);

    lsb = Math.round(level / 256);
    if (lsb === 256) lsb = 255;
    msb = Math.round(level % 256);
    if (msb === 256) msb = 255;

    return [lsb, msb];
};

// For 8bit values requiring 1 channel per color/ light. 
const getLevel8Bit = (rawLevel, master) => {
    let lsb = 0;

    if (rawLevel < 0) {
        lsb = -1;
    }

    lsb = Math.round(256 * parseFloat(rawLevel) * parseFloat(master));
    if (lsb === 256) lsb = 255;

    return [lsb];
};

const sendDMX = (data) => {
    // Extract Master level and duration used for color change.
    const master = data.find(channel => channel.name === 'master');
    const masterValue = master.value;
    const duration = master.duration;
    const timer = parseInt(duration) * 1000;

    // Get individual channel info and place in object to send to DMX.
    let allChannels = {};

    data.forEach(channel => {
        if (channel.name !== "master") {
            if (channel.bitResolution === 16) {
                let level = getLevel16Bit(parseFloat(channel.value), masterValue);
                allChannels[channel.lowByteChannel] = level[0];
                allChannels[channel.highByteChannel] = level[1];
            } else if (channel.bitResolution === 8) {
                let level = getLevel8Bit(parseFloat(channel.value), masterValue);
                allChannels[channel.lowByteChannel] = level[0];
            };
        };
    });

    //if (duration) {
        new DMX.Animation().add(allChannels, timer).run(universe);
    //} else {
    //    universe.update(allChannels);
    //}
};


/***************
* Routes.
***************/

// Send all channelData to Frontend.
router.get('/channelData', (req, res) => {
    const channelData = getChannelData();

    try {
        return res
            .status(200)
            .send(channelData);
    } catch (error) {
        return res
            .status(500)
            .send(`Internal Server Error: ${error}`);
    }
});

// Send Preset buttons data to Frontend.
router.get('/presets', (req, res) => {
    const presets = getPresetsFromFile();

    try {
        return res
            .status(200)
            .send(presets);
    } catch (error) {
        return res
            .status(500)
            .send(`Internal Server Error: ${error}`);
    }
});

// Update Preset button data.
// Needs to be udpated to deal with more than just RGBW values.
router.post('/presets', (req, res) => {

    try {
        let presetUpdate = req.body;
        console.log(`From Preset Edit: ${JSON.stringify(presetUpdate)}`);

        if (!presetUpdate)
            return res
                .status(400)
                .send('No Data received.');

        const existingPresets = getPresetsFromFile();

        const updatePresets = existingPresets.map(presets => {
            if (presets.preset === presetUpdate.preset) {
                return {
                    ...presets,
                    label: presetUpdate.label,
                    master: presetUpdate.master,
                    duration: presetUpdate.duration,
                    channels: presetUpdate.channels
                };
            }

            return presets;
        });

        try {
            fs.writeFileSync('./config/presets.json', JSON.stringify(updatePresets, null, 4));
        } catch (error) {
            console.error(error);
        }

        return res
            .status(200)
            .send(updatePresets);
    } catch (error) {
        return res
            .status(500)
            .send(`Internal Server Error: ${error}`);
    }
});

// Handles both single color slider and associated toggle button.
router.post('/colorChange', (req, res) => {
    try {
        const data = req.body;
        //sendDMX(data);
		console.log(data);

        if (!data)
            return res
                .status(400)
                .send('No channelData received.');

        return res
            .status(200)
            .send('Status: 200 - single color');
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .send(`Internal Server Error: ${error}`);
    }
});

// Handles Master color slider and associated toggle button.
router.post('/masterChange', (req, res) => {
    try {
        const data = req.body;
        //sendDMX(data);
		console.log(data);

        if (!data)
            return res
                .status(400)
                .send('No channelData received.');

        return res
            .status(200)
            .send('Status: 200 - master change');
    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .send(`Internal Server Error: ${error}`);
    }
});

// Handles data sent from Preset Buttons.
router.post('/presetButton', (req, res) => {
    try {
        const data = req.body;
        //sendDMX(data);
		console.log(data);

        if (!data)
            return res
                .status(400)
                .send('No channelData received.');

        return res
            .status(200)
            .send('Status: 200 - Preset');

    } catch (error) {
        console.log(error);
        return res
            .status(500)
            .send(`Internal Server Error: ${error}`);
    }
});


module.exports = router;
