import react from "react";

function Frame(prop){
    return(
    <iframe
        width="919"
        height="525"
        src={prop.src}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    )
};

export default Frame;