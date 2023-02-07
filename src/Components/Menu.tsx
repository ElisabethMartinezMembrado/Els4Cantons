import React from 'react'
import './Menu.css'
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "../fonts/AmericanCaptain.ttf";
import "../fonts/Contre-poincon.ttf";
import "../fonts/SUBSCRIBER-Regular.otf";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ListItemIcon from '@mui/material/ListItemIcon';
import Grid from '@mui/material/Unstable_Grid2';



function Menu (){

    const Picar = [
        {
            "titulo": 'Patates braves',
            "precio": '5.20€',
            "delivery": true
        },
        {
            "titulo": 'Fingers de pollastre',
            "precio": '5.40€',
            "delivery": true
        },
        {
            "titulo": 'Provolone amb tomàquet',
            "precio": '6.00€',
            "delivery": false
        },
        {
            "titulo": 'Croquetes casolanes de pollastre 4u',
            "precio": '5.30€',
            "delivery": true
        }
        ]

    const PastaFarcida = [
        {
            "titulo": 'Raviolo farcit de ricotta de búfala espinacs, amb pesto fresc i grana padano DOP',
            "precio": '15.00€',
            "delivery": false
        },
        {
            "titulo": 'Tortelloni farcit de carn estofada de vedella, amb beixamel de foie i una reducció de carn',
            "precio": '15.00€',
            "delivery": false
        },
    ]
    const Primer = [
        {
            "titulo": 'Amanida caprese amb mozzarella de búfala de campana DOP',
            "precio": '10.20€',
            "delivery": false
        },
        {
            "titulo": 'Amanida de formatge de cabra i pollastre arrebossat',
            "precio": '11.50€',
            "delivery": false
        },
        {
            "titulo": "Caneló de verdures amb beixamel d'espinacs",
            "precio": '10.00€',
            "delivery": false
        },
        {
            "titulo": "Caneló de carn de vedella estofada amb beixamel i la salsa del seu suc ",
            "precio": '12.50€',
            "delivery": false
        },
        {
            "titulo": "Lasagna a la bolognesa (Ragú), gratinat amb mozzarella i grana padano DOP",
            "precio": '11.50€',
            "delivery": false
        },
    ]
    const Pasta = [
        {
            "titulo": "Escull entre macarrons, spaghetti o spaghetti sense gluten.",
            "precio": '',
            "delivery": false
        },
        {
            "titulo": "Bolognesa (Ragú): Ceba, pastanaga, api, tomàquet, carn picada de vedella i caldo de pollastre per cuinar-ho lentament durant 3h",
            "precio": '8.50€',
            "delivery": true
        },
        {
            "titulo": "Carbonara: Nata, ou, guanciale i el seu toc de pebre negre i sal",
            "precio": '9.20€',
            "delivery": true
        },
        {
            "titulo": "Funghi porcini: Ceba, ceps, nata pebre negre",
            "precio": '9.50€',
            "delivery": true
        },
        {
            "titulo": "Arrabiata: Tomaquet, all quand la picant ",
            "precio": '7.90€',
            "delivery": true
        },
        {
            "titulo": "Pesto: Alfàbrega fresca, pinyons, grana padano DOP pecorino romano DOP i oli d’oliva verge extra ",
            "precio": '9.50€',
            "delivery": false
        },
    ]

    const Segons = [
        {
            "titulo": "Xai lletó",
            "precio": '13.50€',
            "delivery": false
        },
        {
            "titulo": "Secret de porc selecte criat amb castanyes, amb llit de parmentier una reducció de carn",
            "precio": '15.50€',
            "delivery": false
        },
        {
            "titulo": "Llom amb salsa de pebre verd",
            "precio": '9.20€',
            "delivery": false
        },
        {
            "titulo": "Fricandó de vedella amb bolets",
            "precio": '12.00€',
            "delivery": false
        },
        {
            "titulo": "Sipia a la planxa amb all julivert",
            "precio": '12.00€',
            "delivery": false
        },
    ]
    const PizzesEspeciales = [
        {
            "titulo": "Boscaiola",
            "ingredientes":"Salsa de ceps, mozzarella de búfala campana DOP, bacó, olives negres, ceba caramelitzada i xampinyons",
            "precio": '9.50€ 13.50€',
            "delivery": true
        },
        {
            "titulo": "4 Cantons",
            "ingredientes":"Tomàquet, mozzarella de búfala campana DOP xampinyons, ceba, llesques de parmigiano reggiano DOP i encenalls de pernil ibèric.",
            "precio": '9.50€ 13.50€',
            "delivery": true
        },
        {
            "titulo": "Carbalone",
            "ingredientes":"Crema de carbassa, provolone, grana padano DOP encenalls de pernil ibèric.",
            "precio": '9.50€ 13.00€',
            "delivery": true
        },
        {
            "titulo": "Caprina",
            "ingredientes":"Mozzarella fior di late, provolone, formatge de cabra, mel de mil flors, anous i ruca.",
            "precio": '9.50€ 12.80€',
            "delivery": true
        },
         ]
    
    const Pizzes = [ 
        {
            "titulo": "Margherita",
            "ingredientes":"Tomàquet, mozzarella fior di late alfàbrega.",
            "precio": '7.50€ 9.50€',
            "delivery": true
        },
        {
            "titulo": "Prosciutto",
            "ingredientes":"Tomàquet, mozzarella fior di late pernil dolç.",
            "precio": '8.50€ 10.50€',
            "delivery": true
        },
        {
            "titulo": "Prosciutto funghi",
            "ingredientes":"Tomàquet, mozzarella flor di late pernil dolç i xampinyons.",
            "precio": '9.00€ 11.00€',
            "delivery": true
        },
        {
            "titulo": "4 Stagioni",
            "ingredientes":"Tomàquet mozzarella fior fate, pernil dolç olives negres, xampinyons, carxofa  i orenga.",
            "precio": '9.50€ 12.50€',
            "delivery": true
        },
        {
            "titulo": "Capricciosa",
            "ingredientes":"Tomàquet, mozzarella fior di late, olives negres, xampinyons, ou dur i pernil ibèric.",
            "precio": '9.80€ 12.80€',
            "delivery": true
        },
        {
            "titulo": "Diabola",
            "ingredientes":"Tomàquet, mozzarella flor di late i xoriç picant.",
            "precio": '9.00€ 11.00€',
            "delivery": true
        },
        {
            "titulo": "Vegetariana",
            "ingredientes":"Tomaquet mozzarella for di late, pebrot verd i vermell, carbasso albergínia xampinyons.",
            "precio": '9.20€ 12.20€',
            "delivery": true
        },
        {
            "titulo": "Gambereti",
            "ingredientes":"Tomàquet, mozzarella fior di late, gambes i salmó fumat.",
            "precio": '9.50€ 13.00€',
            "delivery": true
        },
        {
            "titulo": "Barbacoa",
            "ingredientes":"Tomàquet, mozzarella fior di late, bacó, ceba caramel·litzada, carn picada de vedella i salsa barbacoa",
            "precio": '9.50€ 12.50€',
            "delivery": true
        },
        {
            "titulo": "Tonno",
            "ingredientes":"Tomàquet, mozzarella fior di late, tonyina ceba.",
            "precio": '8.50€ 10.80€',
            "delivery": true
        },
        {
            "titulo": "Parmigiana",
            "ingredientes":"Tomàquet, mozzarella fior di late, tonyina ceba.",
            "precio": '9.50€ 12.20€',
            "delivery": true
        },
        {
            "titulo": "4 Formatges",
            "ingredientes":"Mozzarella fior di late. pecorino, gorgonzola grana padano DOP.",
            "precio": '9.50€ 12.50€',
            "delivery": true
        },
        {
            "titulo": "Carbonara:",
            "ingredientes":"Nata, rovell d'ou, mozzarella fior di late bacó, ceba i grana padano DOP.",
            "precio": '9.30€ 12.50€',
            "delivery": true
        },
        {
            "titulo": "Calzone prosciuto:",
            "ingredientes":"Tomaquet mozzarella fior di late, pernil dolç i orenga.",
            "precio": '12.20€',
            "delivery": true
        },        
        ]
        const PostresCasolans = [
            {
                "titulo": "Pastís de formatge",
                "precio": '6.00€',
                "delivery": true
            },    
            {
                "titulo": "Brownie de xocolata",
                "precio": '5.50€',
                "delivery": true
            },    
            {
                "titulo": "Carrot cake amb crema de formatge",
                "precio": '6.00€',
                "delivery": true
            }, 
            {
                "titulo":'Trufes de xocolata negra i "licor cardona" amb nata',
                "precio": '5.00€',
                "delivery": true
            },
            {
                "titulo":'Xurros al nostre estil amb nutella',
                "precio": '5.50€',
                "delivery": false
            },
            {
                "titulo":'Pizza de nutela amb crumble de galeta',
                "precio": '5.50€',
                "delivery": true
            },
        ]
        const Postres = [
            {
                "titulo":'logurt amb fruits vermells',
                "precio": '4.50€',
                "delivery": false
            },
            {
                "titulo":'Gelat: Xocolata, vainilla  o llimona',
                "precio": '3.00€',
                "delivery": false
            },
        
        ]
    return(
        <>
        
        
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', }}>
                <nav  aria-label="main mailbox folders" >
                <List  id="MenuRout">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Typography variant='h1'
                            sx={{
                                marginTop:2,
                                fontSize: "4rem",
                                fontFamily:'Prueba',
                                marginLeft: 3,
                                color:"#FFC31F",
                            
                
                            }}> Els 4 Cantons</Typography>
                        
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            sx={{backgroundColor: "#FFC31F",
                            width:"100vw"
                                }}
                            >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Typography variant='h2' sx={{
                                        marginTop:2,
                                        fontSize: "3rem",
                                        fontFamily:'MayusAccentos',
                                        
                                        
                                        
                                    }}>PER PICAR</Typography>
                                
                                </ListItemButton>
                            </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>
                        
                            {Picar.map((CadaxPicar) => 
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <Typography variant='h4' sx={{
                                            marginTop:2,
                                            fontSize: "2rem",
                                            fontFamily:'MayusAccentos'
                                            
                                        }}>
                                            {CadaxPicar.titulo}
                                        </Typography>
                                        <Typography variant='h4' sx={{
                                            marginTop:2,
                                            fontSize: "2rem",
                                            fontFamily:'MayusAccentos',
                                            color: "#D62828",
                                            marginLeft:1,
                                        }}>
                                            {CadaxPicar.precio}
                                        </Typography>

                                        {CadaxPicar.delivery === true ? (<ListItemIcon>
                                                <DeliveryDiningIcon sx={{fontSize:"2rem",
                                                                        color:"#FB8500",
                                                                        marginLeft:1,
                                                                        marginTop:1.5,
                                                                        }} />
                                            </ListItemIcon>) : ('')
                                        }
                                    </ListItemButton>
                                </ListItem>
                            )
                            }
                        </AccordionDetails>
                    </Accordion>
                    <Divider />

                    <Accordion>
                        <AccordionSummary
                        
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        sx={{backgroundColor: "#FFB703",
                        width:"100vw",}}
                        >
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <Typography variant='h2' sx={{
                                        marginTop:1,
                                        fontSize: "3rem",
                                        fontFamily:'MayusAccentos'
                        
                                    }}>PASTA FARCIDA</Typography>
                                
                                </ListItemButton>
                            </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>

                            {PastaFarcida.map((CadaxPastaFarcida) => 
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <Typography variant='h4' sx={{
                                            marginTop:2,
                                            fontSize: "2rem",
                                            fontFamily:'MayusAccentos'
                            
                                        }}>
                                            {CadaxPastaFarcida.titulo}
                                        </Typography>
                                        <Typography variant='h4' sx={{
                                            marginTop:2,
                                            fontSize: "2rem",
                                            fontFamily:'MayusAccentos',
                                            color: "#D62828",
                                        }}>
                                            {CadaxPastaFarcida.precio}
                                        </Typography>
                                        {CadaxPastaFarcida.delivery === true ? (<ListItemIcon>
                                            <DeliveryDiningIcon />
                                            </ListItemIcon>) : ('')
                                        }
                                    </ListItemButton>
                                    
                                </ListItem>)
                            }
                        </AccordionDetails>
                    </Accordion>
                    <Divider />
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            sx={{backgroundColor: "#FEAB03",
                            width:"100vw",}}
                            >

                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <Typography variant='h2' sx={{
                                            marginTop:1,
                                            fontSize: "3rem",
                                            fontFamily:'MayusAccentos'
                            
                                        }}>PRIMERS</Typography>
                                    
                                    </ListItemButton>
                                </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>
                            {Primer.map((CadaxPrimer) => 
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <Typography variant='h4' sx={{
                                            marginTop:2,
                                            fontSize: "2rem",
                                            fontFamily:'MayusAccentos'
                                
                                        }}>
                                            {CadaxPrimer.titulo}
                                        </Typography>
                                        <Typography variant='h4' sx={{
                                            marginTop:2,
                                            fontSize: "2rem",
                                            fontFamily:'MayusAccentos',
                                            color: "#D62828",
                                        }}>
                                            {CadaxPrimer.precio}
                                        </Typography>
                                            {CadaxPrimer.delivery === true ? (<ListItemIcon>
                                                    <DeliveryDiningIcon />
                                                </ListItemIcon>) : ('')
                                            }
                                    </ListItemButton>
                                </ListItem>)
                            }
                        </AccordionDetails>
                    </Accordion>
                 <Divider />
                 <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    sx={{backgroundColor: "#FD9E02",
                    width:"100vw"}}
                    >
                 <ListItem disablePadding>
                    <ListItemButton>
                        <Typography variant='h2' sx={{
                            marginTop:1,
                            fontSize: "3rem",
                            fontFamily:'MayusAccentos'
            
                        }}>PASTA</Typography>
                    
                    </ListItemButton>
                </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                {
                    Pasta.map((CadaxPasta) => 
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Typography variant='h4' sx={{
                                    marginTop:2,
                                    fontSize: "2rem",
                                    fontFamily:'MayusAccentos'
                    
                                }}>
                                    {CadaxPasta.titulo}
                                </Typography>
                                <Typography variant='h4' sx={{
                                    marginTop:2,
                                    fontSize: "2rem",
                                    fontFamily:'MayusAccentos',
                                    color: "#D62828",
                                }}>
                                    {CadaxPasta.precio}
                                </Typography>
                                {
                                    CadaxPasta.delivery === true ? (<ListItemIcon>
                                    <DeliveryDiningIcon sx={{fontSize:"2rem",
                                                            color:"#FB8500",
                                                            marginLeft:1,
                                                            marginTop:1.5,
                                                            }} />
                                    </ListItemIcon>) : ('')
                                        }
                            </ListItemButton>
                        </ListItem>)
                }
                </AccordionDetails>
                </Accordion>
                 <Divider />
                 <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    sx={{backgroundColor: "#FC9201",
                    width:"100vw",}}

                    >
                 <ListItem disablePadding>
                    <ListItemButton>
                        <Typography variant='h2' sx={{
                            marginTop:1,
                            fontSize: "3rem",
                            fontFamily:'MayusAccentos'
            
                        }}>SEGONS</Typography>
                    
                    </ListItemButton>
                </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                {
                    Segons.map((CadaSegon) => 
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Typography variant='h4' sx={{
                                    marginTop:2,
                                    fontSize: "2rem",
                                    fontFamily:'MayusAccentos'
                    
                                }}>
                                    {CadaSegon.titulo}
                                </Typography>
                                <Typography variant='h4' sx={{
                                    marginTop:2,
                                    fontSize: "2rem",
                                    fontFamily:'MayusAccentos',
                                    color: "#D62828",
                                    marginLeft:1,
                                    textAlign:"center"
                                }}>
                                    {CadaSegon.precio}
                                </Typography>
                                {
                                    CadaSegon.delivery === true ? (<ListItemIcon>
                                        <DeliveryDiningIcon sx={{fontSize:"2rem",
                                                            color:"#FB8500",
                                                            marginRight:1,
                                                            paddingTop:1,
                                                            }} />
                                    </ListItemIcon>) : ('')
                                }
                                
                            </ListItemButton>
                        </ListItem>)
                }
                </AccordionDetails>
                </Accordion>
                 <Divider />
                 
                 <ListItem disablePadding>
                    <ListItemButton>
                        <Typography variant='h2' sx={{
                            marginTop:1,
                            fontSize: "3rem",
                            fontFamily:'MayusAccentos'
            
                        }}>EL SECRET DE LA MASSA</Typography>
                    
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                            <ListItemButton>
                                <Typography variant='h4' sx={{
                                    marginTop:2,
                                    fontSize: "2rem",
                                    fontFamily:'MayusAccentos'
                    
                                }}>
                                    EL SECRET DE LA MASSA

                                        La nostra massa, amb un preferent anomenat "biga". Fermenta a temperatura ambient durant 48h. Després l'amassem de nou, afegim la resta d'ingredients i formem les boles individuals que formarán la pizza. És llavors quan ta deixem fermentar lentament a una temperatura inferior, com a mínim 24h mes

                                </Typography>
                                
                            </ListItemButton>
                </ListItem>
                <Divider />
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    sx={{backgroundColor: "#FB8500",
                    width:"100vw"}}

                    >

                        <ListItem disablePadding>
                            <ListItemButton>
                                <Typography variant='h2' sx={{
                                    marginTop:1,
                                    fontSize: "3rem",
                                    fontFamily:'MayusAccentos'
                    
                                }}>PIZZES  ESPECIALS </Typography>
                            
                            
                            
                            </ListItemButton>
                        </ListItem>
                        </AccordionSummary>
                        <AccordionDetails>
                        <ListItem disablePadding>
                                    <ListItemButton>
                                        <Typography variant='h5' sx={{
                                           marginTop:2,
                                           fontSize: "1.5rem",
                                           fontFamily:'MayusAccentos',
                                           marginLeft:13,
                            
                                        }}>  Petita (20cm)     Normal (30cm)
                                            </Typography>
                                        
                                    </ListItemButton>
                                </ListItem>
                    
                        {
                    PizzesEspeciales.map((CadaPizzaEspecial) => 
                       
                        <ListItem disablePadding>
                            <ListItemButton>

                            <Grid container spacing={2}>
                                <Grid xs={7}>
                                    <Typography variant='h4' sx={{
                                    
                                    fontSize: "2.5rem",
                                    fontFamily:'MayusAccentos',
                                    textAlign: "center"
                    
                                    }}>
                                        {CadaPizzaEspecial.titulo}
                                    </Typography>
                                </Grid>

                                <Grid xs={5}>
                                    <Typography variant='h4' sx={{
                                        marginTop:1,
                                        fontSize: "2rem",
                                        fontFamily:'MayusAccentos',
                                        textAlign: 'center',
                                        color: "#D62828",
                                    }}>
                                        {CadaPizzaEspecial.precio}
                                    </Typography>       
                                </Grid>

                                <Grid xs={10}>
                                    <Typography variant='h4' sx={{
                                        marginBottom:1,
                                        fontSize: "2rem",
                                        fontFamily:'MayusAccentos',
                                        textAlign: 'center',
                                        color: "#003049",
                        
                                    }}>
                                        {CadaPizzaEspecial.ingredientes}
                                    </Typography>   
                                </Grid>

                                <Grid xs={2}>
                                    {
                                        CadaPizzaEspecial.delivery === true ? (<ListItemIcon>
                                        <DeliveryDiningIcon sx={{fontSize:"2rem",
                                                                color:"#FB8500",
                                                                marginLeft:1,
                                                                marginTop:6,
                                                                }}/>
                                        </ListItemIcon>) : ('')
                                    }   
                                </Grid>
                            </Grid>       
                            </ListItemButton>
                        </ListItem>
                       
                       
                        )

                }
                </AccordionDetails>
                </Accordion>
                 <Divider />
                 <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    sx={{backgroundColor: "#EF7F01",
                    width:"100vw",}}

                    >
                 <ListItem disablePadding>
                    <ListItemButton>
                        <Typography variant='h2' sx={{
                            marginTop:1,
                            fontSize: "3rem",
                            fontFamily:'MayusAccentos'
            
                        }}>PIZZES</Typography>
                       
                       
                    
                    </ListItemButton>
                </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                <ListItem disablePadding>
                            <ListItemButton>
                                <Typography variant='h5' sx={{
                                    marginTop:2,
                                    fontSize: "1.5rem",
                                    fontFamily:'MayusAccentos',
                                    marginLeft:13,
                    
                                }}>  Petita (20cm)     Normal (30cm)
                                    </Typography>
                                
                            </ListItemButton>
                        </ListItem>
                        {
                    Pizzes.map((CadaPizza) => 
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Grid container spacing={2}>
                                    <Grid xs={7}>
                                        <Typography variant='h4' sx={{
                                            marginTop:2,
                                            fontFamily:'MayusAccentos',
                                            textAlign: 'center',
                                            fontSize: "2.5rem",
                                    
                            
                                        }}>
                                            {CadaPizza.titulo}
                                        </Typography>
                                    </Grid>
                                    <Grid xs={5}>
                                        <Typography variant='h4' sx={{
                                            marginTop:3,
                                            fontSize: "2rem",
                                            fontFamily:'MayusAccentos',
                                            textAlign: 'center',
                                            color: "#D62828",
                                        }}>
                                            {CadaPizza.precio}
                                        </Typography>
                                    </Grid>
                                    <Grid xs={10}>
                                        <Typography variant='h4' sx={{
                                           marginBottom:1,
                                           fontSize: "2rem",
                                           fontFamily:'MayusAccentos',
                                           textAlign: 'center',
                                           color: "#003049",
                           
                                        }}>
                                            {CadaPizza.ingredientes}
                                        </Typography>
                                    </Grid>
                                    <Grid xs={2}>
                                        {
                                            CadaPizza.delivery === true ? (<ListItemIcon>
                                            <DeliveryDiningIcon sx={{fontSize:"2rem",
                                                                    color:"#FB8500",
                                                                    marginLeft:1,
                                                                    marginTop:5,
                                                                    }}/>
                                            </ListItemIcon>) : ('')
                                        }
                                    </Grid>
                                </Grid>
                            </ListItemButton>
                        </ListItem>)
                }
                </AccordionDetails>
                </Accordion>
                  <Divider />
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    sx={{backgroundColor: "#E27902",
                    width:"100vw"}}

                    >
                 <ListItem disablePadding>
                    <ListItemButton>
                        <Typography variant='h2' sx={{
                            marginTop:1,
                            fontSize: "3rem",
                            fontFamily:'MayusAccentos'
            
                        }}>POSTRES CASOLANS</Typography>
                       
                    </ListItemButton>
                </ListItem>
                </AccordionSummary>
                <AccordionDetails>
                {
                    PostresCasolans.map((CadaPostreCasola) => 
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Typography variant='h4' sx={{
                                    marginTop:2,
                                    fontSize: "2rem",
                                    fontFamily:'MayusAccentos'
                    
                                }}>
                                    {CadaPostreCasola.titulo}
                                </Typography>
                                <Typography variant='h4' sx={{
                                    marginTop:2,
                                    fontSize: "2rem",
                                    fontFamily:'MayusAccentos',
                                    color: "#D62828",
                                    marginLeft:2,
                                    marginRight:1,
                                }}>
                                    {CadaPostreCasola.precio}
                                </Typography>
                                {
                                            CadaPostreCasola.delivery === true ? (<ListItemIcon>
                                            <DeliveryDiningIcon sx={{fontSize:"2rem",
                                                                    color:"#FB8500",
                                                                    marginLeft:1,
                                                                    marginTop:3,
                                                                    }}/>
                                            </ListItemIcon>) : ('')
                                        }
                            </ListItemButton>
                        </ListItem>)
                }
                </AccordionDetails>
                </Accordion>
                 <Divider />
                 <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    sx={{backgroundColor: "#D67303",
                    width:"100vw",}}
                    >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Typography variant='h2' sx={{
                                marginTop:1,
                                fontSize: "3rem",
                                fontFamily:'MayusAccentos'
                
                            }}>POSTRES</Typography>
                        
                        </ListItemButton>
                    </ListItem>
                    </AccordionSummary>
                    <AccordionDetails>
                {
                    Postres.map((CadaPostre) => 
                        <ListItem disablePadding>
                            <ListItemButton>
                                <Typography variant='h4' sx={{
                                    marginTop:2,
                                    fontSize: "2rem",
                                    fontFamily:'MayusAccentos'
                    
                                }}>
                                    {CadaPostre.titulo}
                                </Typography>
                                <Typography variant='h4' sx={{
                                    marginTop:2,
                                    fontSize: "2rem",
                                    fontFamily:'MayusAccentos',
                                    color: "#D62828",
                                    marginLeft:2,
                                    marginRight:1,
                                }}>
                                    {CadaPostre.precio}
                                </Typography>
                            </ListItemButton>
                        </ListItem>)
                }
                </AccordionDetails>
                </Accordion>

                
                </List>
            </nav>
            <Divider />
            
    </Box>

               
        </>
    )

}

export default Menu;