import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main : "#FF7F00"
        },
        secondary:{
            main:"#00FF00"
        },
        black:{
            main:"#0D0D0D"
        },
        background:{
            main:"#0000000",
            default:"#0D0D0D",
            paper:"#0D0D0D"
        },
        textColor:{
            main:"#111111"
        }
    }
});

