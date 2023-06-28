import { Dialog, DialogContent, Grid, Paper } from "@mui/material";
import PlayerCard from "./PlayerCard";
import MainCard from "./MainCard";
import { useState } from "react";
import { competitors } from "../../../const";

const Index = () => {
  const [selected, setSelected] = useState({
    name: "",
    image: "placeholder-male.png",
    intro: "",
  });
  const [open, setOpen] = useState(false);

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
        <div className="hidden sm:flex">
          <div className="w-8/12">
            <Grid container>
              {competitors.map((competitor) => (
                <Grid key={competitor.name} item xs={4}>
                  <div onClick={() => setSelected(competitor)}>
                    <PlayerCard
                      name={competitor.name}
                      profilePicture={competitor.image}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div>
            <MainCard player={selected} />
          </div>
        </div>
        <div className="sm:hidden">
          <Grid container spacing={2}>
            {competitors.map((competitor) => (
              <Grid key={competitor.name} item xs={5}>
                <div
                  onClick={() => {
                    setSelected(competitor);
                    setOpen(true);
                  }}
                >
                  <PlayerCard
                    name={competitor.name}
                    profilePicture={competitor.image}
                  />
                </div>
              </Grid>
            ))}
          </Grid>
          <Dialog open={open} maxWidth={"lg"} onClose={() => setOpen(false)}>
            <MainCard player={selected} />
          </Dialog>
        </div>
      </Paper>
    </DialogContent>
  );
};

export default Index;
