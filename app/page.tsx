import { Box } from "@mui/material";
import Appbar from "./ui/appbar";
import Sidenav from "./ui/sidenav";

export default function Home() {
  return (
    <div>
      <Box width={700}>
        <Appbar />
      </Box>

      <Sidenav />
    </div>
  );
}
