const express = require("express");
const fs = require("fs");
const router = express.Router();


/***************
* Routes.
***************/

// Send all channelData to Frontend.
router.get('/channelData', (req, res) => {
	console.lon(req)
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

router.post('/colorChangeSlider', (req, res) => {
    try {
        const data = req.body;
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
