/**********
 * Channel data -
 * name = name of light
 * 16bit = if true then 2 channels needed for value
 * low byte channel = first 8 bits of value
 * high byte channel = second 8 bits of value, set to -1 if 16bit is false
 * slider = true if control slider is needed.
**********/


const channels = [
    {
        "name": "Red",
        "16bit": true,
        "low byte channel": 1,
        "high byte channel": 2,
        "slider": true
    },
    {
        "name": "Green",
        "16bit": true,
        "low byte channel": 3,
        "high byte channel": 4,
        "slider": true
    },
    {
        "name": "Blue",
        "16bit": true,
        "low byte channel": 5,
        "high byte channel": 6,
        "slider": true
    }
];