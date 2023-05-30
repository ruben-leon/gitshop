const guitars = {
    acoustic: [{
        type: "acoustic",
        model: "stratocaster",
        color: "black",
        image: "https://images.unsplash.com/photo-1588729827997-c0c0e1837e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
    },
    {
        type: "acoustic",
        model: "stratocaster",
        color: "blue",
        image: "https://images.unsplash.com/photo-1465225314224-587cd83d322b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
        type: "acoustic",
        model: "telecaster",
        color: "white",
        image: "https://images.unsplash.com/photo-1573603088895-d399fbee9653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
    ],
    electric: [{
        type: "electric",
        model: "les-paul",
        color: "blue",
        image: "https://images.unsplash.com/photo-1561758423-4a993d30afea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1166&q=80"
    },
    {
        type: "electric",
        model: "sg",
        color: "white",
        image: "https://images.unsplash.com/photo-1548426590-4459d4dd2a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
    },
    {
        type: "electric",
        model: "sg",
        color: "white",
        image: "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
    ],
};

const stringifyGuitars = JSON.stringify(guitars);
export { stringifyGuitars };