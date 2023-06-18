import { DialogContent, Grid, Paper } from "@mui/material";
import PlayerCard from "./PlayerCard";
import MainCard from "./MainCard";
import { useState } from "react";

const competitors = [
  {
    name: "Sigurd Jonassen Gundersen",
    image: "/sigurd_1.png",
    intro:
      "Sigurd, bedre kjent som 'Sean Dyche', er kjent for sin strategiske tilnærming til konkurranser. Han analyserer hver eneste detalj og finner det optimale tidspunktet for å ta en slurk øl. Dette gjør at han kan opprettholde en jevn fart gjennom hele løpet. Det er som om han har tatt med seg fotballtaktikken sin og overført den til beermile. Vil hans taktiske geni være nok til å komme først i mål?",
  },
  {
    name: "Daniel Salamonsen",
    image: "/daniel_1.png",
    intro:
      "Daniel er den uforutsigbare deltakeren som ingen egentlig vet hva de kan forvente fra. Han er kjent for å være energisk og ekstremt spontan. Noen ganger kan han være lynrask, mens andre ganger kan han miste fokus og stoppe opp for å ta en selfie midt i konkurransen. Hvordan han vil prestere i dag er en total overraskelse, men én ting er sikkert - han vil definitivt underholde oss.",
  },
  {
    name: "Henrik Jakola Skansen",
    image: "/henrik_1.png",
    intro:
      "Skansen er den mystiske deltakeren som alltid ser ut til å være full av overraskelser. Han er ekstremt stille og rask, noe som gjør at han kan snike seg forbi konkurrentene uten å bli lagt merke til. Det er rykter om at han har trent på å nyte en øl uten at det vises, noe som kan gjøre ham til en farlig motstander. Hold øynene åpne, for du vet aldri når Skansen vil dukke opp!",
  },
  {
    name: "Johannes Jonassen Pleym",
    image: "johannes_1.png",
    intro:
      "Johannes er den fryktløse nykommeren som har kastet seg inn i Beermile-verdenen med full kraft. Til tross for å være ny i gamet, har han allerede imponert med sin iver og entusiasme. Han er ikke redd for å ta på seg utfordringer og er klar til å overraske alle med sin utholdenhet og stahet. Johannes kan være et ubeskrevet blad for mange, men han vil definitivt sette sitt preg på arrangementet.",
  },
  {
    name: "Niklas Busk-Jensen",
    image: "/nik_1.png",
    intro:
      "Niklas er en deltaker med utrolig utholdenhet. Han kan holde et jevnt tempo gjennom",
  },
  {
    name: "Dag Olav Vestersjø",
    image: "/dag_1.png",
    intro:
      "Daggis er kjent for sin utrolige evne til å helle ned øl som om det var vann. Han kan tømme en hel boks på få sekunder og går sjelden tom for pust. Selv om han kanskje ikke er den raskeste løperen, kan hans imponerende evne til å chugge øl gi ham en fordel i konkurransen. Kanskje det er noe med den drikkestilen som fungerer!",
  },
  {
    name: "Torro Jensen",
    image: "/torro_1.png",
    intro:
      "Torro er en deltaker som er bygget som en okse og kan konsumere øl som om det var en lett bris. Han er kanskje ikke den raskeste løperen, men når det kommer til å nyte en kald pint, er han en ekte mester. Torro vil sannsynligvis ta seg tid til å virkelig sette pris på hver slurk, noe som kan koste ham noen sekunder, men han vil definitivt være den mest fornøyde deltakeren på banen.",
  },
  {
    name: "Patrick Lønhaug",
    image: "/patrick_1.png",
    intro:
      "Pat er kjent for sin sprudlende energi og entusiasme. Han er alltid den som heier høyest på sidelinjen og motiverer de andre deltakerne. Pat er ikke den raskeste løperen, men han kompenserer for det med sitt utrolige pågangsmot og evne til å oppmuntre andre. Han vil være en positiv kraft i arrangementet og bidra til en livlig atmosfære.",
  },
  {
    name: "Andreas Mathisen",
    image: "/andreas_1.png",
    intro:
      "Andreas er selve kongen av dette arrangementet og den soleklare favoritten. Han har trent i månedsvis på å kombinere sprintfart og effektiv ølsluking. Ryktene sier at han har en nærmest overnaturlig evne til å løpe raskt og fortsatt nyte sin pint. Det blir spennende å se om han kan leve opp til forventningene og opprettholde sin trone som ølkonge.",
  },
];

const Index = () => {
  const [selected, setSelected] = useState({
    name: "",
    image: "placeholder-male.png",
    intro: "",
  });

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
          <Grid container>
            <Grid container xs={9}>
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
            <Grid container className="relative text-white" xs={3}>
              <MainCard player={selected} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </DialogContent>
  );
};

export default Index;
