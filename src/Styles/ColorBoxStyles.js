import chroma from 'chroma-js';
export default {
    ColorBox:{
        width: "20%",
        height: (props) => props.showMore ? "25%":"50%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover button":{
            opacity: 1,
            transition: "0.5s"
        }
       
    },
    copyStyles:{
        color: (props) => chroma(props.background).luminance() >= 0.7 ? "black":"white"
    },
    colorName:{
        color: (props) => chroma(props.background).luminance() <= 0.08 ? "white":"black"
    },
    seeMore:{
        color:(props) => chroma(props.background).luminance() >= 0.7 ? "black":"white",
        background:"rgba(255,255,255,0.3)", 
        border:"none",
        textTransform: "uppercase",
        position: "absolute",
        right: "0",
        bottom: "0",
        width: "60px",
        height: "30px",
        textAlign: "center",
        lineHeight: "30px"
    },
    copyButton:{
        color: (props) => chroma(props.background).luminance() >= 0.7 ? "black":"white",
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left:"50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        outline: "none",
        textAlign: "center",
        backgroundColor: "rgba(255,255,255,0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        textTransform: "uppercase",
        border:"none",
        opacity:"0",
        cursor: "pointer"
        
    },
    boxContent:{
        position: "absolute",
        width:"100%",
        left:"0",
        bottom: "0",
        padding: "10px",
        color:"black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay:{
        opacity:"0",
        zIndex:"1",
        height: "100%",
        width: "100%",
        transition:"transform 0.6s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverlay:{
        opacity:"1",
        zIndex:"10",
        transform: "scale(50)",
        position: "absolute",
    },
    copyMssg:{
        position:"fixed",
        left: "0",
        right:"0",
        top:"0",
        bottom: "0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        transform: "scale(0.1)",
        opacity: "0",
        font: "4rem",
        color: "white",
        "& h1":{
            fontSize: "4rem",
            textShadow: "1px 2px black",
            background: "rgba(255,255,255,0.2)",
            width: "100%",
            marginBottom: 0,
            padding: "1rem",
        },
        "& p":{
            fontSize: "2rem",
            fontWeight: 100
        }
    },
    showCopyMssg:{
        opacity: 1,
        transform: "scale(1)",
        zIndex: 25,
        transition: "all 0.4s ease-in-out",
        transitionDelay : "0.3s"
    }
}