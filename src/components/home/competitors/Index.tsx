import { DialogContent, Grid, Paper } from "@mui/material";
import PlayerCard from "./PlayerCard";

const competitors = [
  { name: "Sigurd Gundersen", image: "/sigurd_1.png" },
  { name: "Daniel Salamonsen", image: "/daniel_1.png" },
  { name: "Henrik Skansen", image: "/henrik_1.png" },
  { name: "Johannes Pleym", image: "johannes_1.png" },
  { name: "Niklas Jensen", image: "/nik_1.png" },
  { name: "Don Vestersjø", image: "/dag_1.png" },
  { name: "Torro Jensen", image: "/torro_1.png" },
  { name: "Patrick Lønhaug", image: "/patrick_1.png" },
  { name: "Andreas Mathisen", image: "/andreas_1.png" },
];

const Index = () => {
  return (
    <DialogContent style={{ padding: 0 }}>
      <Paper
        sx={{
          backgroundImage: `url("/fifa_bg.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <Grid className="px-4" container>
          <Grid item xs={12}>
            <Grid container xs={8} spacing={2}>
              {competitors.map((competitor) => (
                <Grid item xs={4}>
                  <PlayerCard
                    name={competitor.name}
                    profilePicture={competitor.image}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={3}>
              Content
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </DialogContent>
  );
};

export default Index;
