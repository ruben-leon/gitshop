const guitars = {
    fender: [{
        brand: "fender",
        model: "stratocaster",
        color: "black"
    },
    {
        brand: "fender",
        model: "stratocaster",
        color: "blue"
    },
    {
        brand: "fender",
        model: "telecaster",
        color: "white"
    }
    ],
    gibson: [{
        brand: "gibson",
        model: "les-paul",
        color: "black"
    },
    {
        brand: "gibson",
        model: "les-paul",
        color: "blue"
    },
    {
        brand: "gibson",
        model: "sg",
        color: "white"
    }
    ],
};

const stringifyGuitars = JSON.stringify(guitars);
export { stringifyGuitars };