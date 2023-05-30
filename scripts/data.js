const guitars = {
    fender: [{
        brand: "fender",
        model: "stratocaster",
        color: "black",
        image: "https://images.unsplash.com/photo-1588729827997-c0c0e1837e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
    },
    {
        brand: "fender",
        model: "stratocaster",
        color: "blue",
        image: "https://images.unsplash.com/photo-1465225314224-587cd83d322b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        brand: "fender",
        model: "telecaster",
        color: "white",
        image: "https://images.unsplash.com/photo-1573603088895-d399fbee9653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
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