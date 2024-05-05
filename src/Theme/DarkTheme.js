import { createTheme } from "@mui/material/styles"; // Correction de l'importation de createTheme

export const darkTheme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main : "#e91e63"
        },
        secondary:{
            main:"#5A20CB"
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
