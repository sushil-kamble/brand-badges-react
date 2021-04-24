import "./App.css";
import icon from "./data.json";
import Icons from "./components/Icons";
import { Skeleton } from "@material-ui/lab";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField
} from "@material-ui/core";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [input, setInput] = useState("");
  const [limit, setLimit] = useState(100);
  const options = ["plastic", "flat", "flat-square", "for-the-badge", "social"];
  const [badgeType, setBadgeType] = useState("flat-square");

  useEffect(() => {
    const loadData = async () => {
      return JSON.parse(JSON.stringify(icon));
    };
    loadData().then(iconData => {
      setData(iconData);
      setFilter(iconData);
    });
  }, []);
  const filteredData = input => {
    setInput(input);
    if (input.length > 0) {
      const filtered = data.filter(tile =>
        tile.title.toLowerCase().includes(input.toLowerCase())
      );
      setFilter(filtered);
    } else {
      setFilter(data);
    }
  };
  const increaseLimit = () => {
    setLimit(limit + 100);
  };
  const changedType = type => {
    setLimit(100);
    setBadgeType(type);
  };
  return (
    <div>
      <Container maxWidth="lg">
        <Box
          display={{ xs: "block", md: "flex" }}
          justifyContent={"space-between"}
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          <div style={{ marginBottom: "10px" }}>
            <h2>Brand Badges</h2>
          </div>
          <form
            noValidate
            autoComplete="off"
            onSubmit={e => e.preventDefault()}
          >
            <TextField
              label="Search Badge"
              variant="outlined"
              size="small"
              value={input}
              style={{ marginRight: "50px" }}
              onChange={e => filteredData(e.target.value)}
            />
            <TextField
              select
              size="small"
              label="Select Type"
              SelectProps={{
                native: true
              }}
              onChange={e => changedType(e.target.value)}
              variant="outlined"
            >
              {options.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </TextField>
          </form>
        </Box>
        <Divider style={{ margin: "10px 0px 10px 0px" }} />
        <h4>Click on the tile to copy the markdown/html src tag of the icon</h4>
        <h5>{filter.length} search results</h5>
        {filter.length > 0 ? (
          <Grid
            container
            spacing={1}
            style={{ marginTop: "10px", minHeight: "60vh" }}
          >
            {filter.slice(0, limit).map((tile, i) => (
              <Grid item xs={6} sm={3} md={2} key={i}>
                <Icons title={tile.title} color={tile.color} type={badgeType} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Skeleton variant="rect" width={"84vw"} height={"80vh"} />
        )}

        {filter.length > limit && (
          <Button
            variant="outlined"
            style={{ margin: "20px 5px 20px 5px" }}
            onClick={increaseLimit}
            fullWidth
          >
            More
          </Button>
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
