import { useState } from "react";
import { MdKeyboardAlt } from "react-icons/md";
import { GiShirtButton } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { BsList } from "react-icons/bs";
import { motion } from "framer-motion";
import { Grid, Card, CardContent, Typography, Box, Modal, IconButton, AppBar, Toolbar } from "@mui/material";
import ButtonModule from "./bouton";
import Keyboard from "./clavier";
import Wires from "./fils";

const modules = [
    {
        title: "Button",
        icon: <GiShirtButton size={32} />,
        description: "Practice defusing bombs alone to perfect your skills.",
        component: <ButtonModule />,
    },
    {
        title: "Keyboard",
        icon: <MdKeyboardAlt size={32} />,
        description: "Choose from Easy to Expert challenges.",
        component: <Keyboard />,
    },
    {
        title: "Wires",
        icon: <BsList size={32} />,
        description: "Real-world scenarios to test your expertise.",
        component: <Wires />,
    }
];

const Practice = () => {
    const [selectedModule, setSelectedModule] = useState<{
        title: string;
        icon: JSX.Element;
        description: string;
        component?: JSX.Element;
        content?: JSX.Element;
    } | null>(null);


    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "black", color: "white", py: 8 }}>
            <AppBar position="fixed" sx={{ backgroundColor: "black", backdropFilter: "blur(10px)" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Bomb Defusal</Typography>
                    <a color="inherit" href="/" style={{margin:"0 10px"}}>Home</a>
                    <a color="inherit" href="/practice" style={{margin:"0 10px"}}>Practice</a>
                    <a color="inherit" style={{margin:"0 10px"}}>About</a>
                    <a color="inherit" style={{margin:"0 10px"}}>Contact</a>
                </Toolbar>
            </AppBar>
            <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography variant="h4" fontWeight="bold">
                    Game Modules
                </Typography>
            </Box>

            <Grid container spacing={3} justifyContent="center">
                {modules.map((module, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <motion.div whileHover={{ scale: 1.05 }}>
                            <Card
                                sx={{
                                    bgcolor: "gray.900",
                                    color: "black",
                                    p: 2,
                                    textAlign: "center",
                                    cursor: "pointer",
                                    "&:hover": { bgcolor: "gray.800" },
                                }}
                                onClick={() => setSelectedModule(module)}
                            >
                                <Box sx={{ color: "red", mb: 2 }}>{module.icon}</Box>
                                <CardContent>
                                    <Typography variant="h6" fontWeight="bold">
                                        {module.title}
                                    </Typography>
                                    <Typography variant="body2" color="gray.400">
                                        {module.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>

            <Modal open={selectedModule !== null} onClose={() => setSelectedModule(null)}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "90%",
                        maxWidth: 600,
                        bgcolor: "black",
                        color: "white",
                        p: 4,
                        borderRadius: "10px",
                        boxShadow: 24,
                    }}
                >
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h6">{selectedModule?.title}</Typography>
                        <IconButton onClick={() => setSelectedModule(null)} sx={{ color: "white" }}>
                            <FaTimes />
                        </IconButton>
                    </Box>
                    {selectedModule?.component ? selectedModule.component : <Typography>{selectedModule?.content}</Typography>}
                </Box>
            </Modal>
        </Box>
    );
};

export default Practice;
