import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, IconButton } from "@mui/material";
import { FaBomb, FaBookOpen, FaGamepad, FaGraduationCap, FaShare } from "react-icons/fa";
import { motion } from "framer-motion";

const GameLandingPage = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const modules = [
        { title: "Solo Training", icon: <FaGamepad size={40} />, description: "Practice defusing bombs alone to perfect your skills" },
        { title: "Difficulty Levels", icon: <FaBomb size={40} />, description: "Choose from Easy to Expert challenges" },
        { title: "Practice Scenarios", icon: <FaBookOpen size={40} />, description: "Real-world scenarios to test your expertise" },
        { title: "Tutorial", icon: <FaGraduationCap size={40} />, description: "Learn the basics of bomb defusal" }
    ];

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#121212", color: "white"}}>
            <AppBar position="fixed" sx={{ backgroundColor: "black", backdropFilter: "blur(10px)" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>Bomb Defusal</Typography>
                    <a color="inherit" href="/" style={{margin:"0 10px"}}>Home</a>
                    <a color="inherit" href="/practice" style={{margin:"0 10px"}}>Practice</a>
                    <a color="inherit" style={{margin:"0 10px"}}>About</a>
                    <a color="inherit" style={{margin:"0 10px"}}>Contact</a>
                </Toolbar>
            </AppBar>

            <Container sx={{
                textAlign: "center",
                paddingTop: "100px",
                backgroundImage: "url('https://keeptalkinggame.com/wp-content/uploads/2019/12/4_bomb_600x338.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "500px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                position: "relative",
            }}
            >
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <Typography variant="h2" fontWeight="bold" gutterBottom>
                        Keep Talking and Nobody Explodes
                    </Typography>
                    <Typography variant="h5" paragraph>
                        Work together to defuse bombs in this intense multiplayer experience.
                    </Typography>
                    <Button variant="contained" color="error" sx={{ mt: 2 }} onClick={() => setIsPlaying(!isPlaying)}>
                        Play Now
                    </Button>
                </motion.div>
            </Container>

            <Container sx={{ py: 8 }}>
                <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>
                    Game Modules
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {modules.map((module, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Card sx={{ backgroundColor: "#1e1e1e", color: "white", textAlign: "center", padding: "20px" }}>
                                    <CardContent>
                                        <IconButton sx={{ color: "red" }}>{module.icon}</IconButton>
                                        <Typography variant="h6" fontWeight="bold">{module.title}</Typography>
                                        <Typography variant="body2" color="gray">{module.description}</Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container sx={{ py: 8 }}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    How to Play
                </Typography>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1">
                            1. One player takes the role of the Bomb Defuser.<br />
                            2. Other players are Experts with the manual.<br />
                            3. Communicate effectively to defuse the bomb.<br />
                            4. Beat the clock before detonation.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src="https://images.unsplash.com/photo-1621478374422-35206faeddfb" alt="Game Screenshot" style={{ width: "100%", borderRadius: "8px" }} />
                    </Grid>
                </Grid>
            </Container>

            <footer style={{ backgroundColor: "black", padding: "20px", textAlign: "center" }}>
                <Typography variant="body2" color="gray">© 2023 Keep Talking and Nobody Explodes. All rights reserved.</Typography>
                <IconButton sx={{ color: "red" }}><FaShare size={20} /></IconButton>
            </footer>
        </div>
    );
};

export default GameLandingPage;
