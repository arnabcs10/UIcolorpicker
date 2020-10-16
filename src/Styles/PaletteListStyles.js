export default {
    root:{
        backgroundColor:"blue",
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"flex-start"
    },
    container:{
        width:"75%",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        flexWrap:"wrap",

    },
    nav:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        color:"white",
        "& a":{
            textDecoration:"none",
            color:"white"
        }
    },
    palettes:{
       boxSizing:"border-box",
       width:"100%",
       display:"grid",
       gridTemplateColumns:"repeat(3,30%)",
       gridGap:"5%"
    }
}