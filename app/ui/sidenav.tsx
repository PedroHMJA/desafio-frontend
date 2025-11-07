"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SvgIcon from "@mui/material/SvgIcon";
import ListItemButton from "@mui/material/ListItemButton";
import Image from "next/image";
import Box from "@mui/material/Box";
import { publicSans } from "./font";

export default function Sidenav() {
  return (
    <Box width={300}>
      <Image src="/flugo-logo.png" alt="logo da flugo" width={75} height={28} />
      <List>
        <ListItem>
          <ListItemButton
            sx={{
              justifyContent: "space-between",
            }}
          >

              <SvgIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="icon">
                    <path
                      id="secondary-shape"
                      opacity="0.32"
                      d="M2.28099 19.6575C2.36966 20.5161 2.93261 21.1957 3.77688 21.3755C5.1095 21.6592 7.6216 22 12 22C16.3784 22 18.8905 21.6592 20.2232 21.3755C21.0674 21.1957 21.6304 20.5161 21.719 19.6575C21.8505 18.3844 22 16.0469 22 12C22 7.95305 21.8505 5.6156 21.719 4.34251C21.6304 3.48389 21.0674 2.80424 20.2231 2.62451C18.8905 2.34081 16.3784 2 12 2C7.6216 2 5.1095 2.34081 3.77688 2.62451C2.93261 2.80424 2.36966 3.48389 2.28099 4.34251C2.14952 5.6156 2 7.95305 2 12C2 16.0469 2.14952 18.3844 2.28099 19.6575Z"
                      fill="#637381"
                    />
                    <path
                      id="primary-shape"
                      d="M13.9382 13.8559C15.263 13.1583 16.1663 11.768 16.1663 10.1666C16.1663 7.8655 14.3008 6 11.9996 6C9.69841 6 7.83291 7.8655 7.83291 10.1666C7.83291 11.768 8.73626 13.1584 10.0612 13.856C8.28691 14.5319 6.93216 16.1092 6.51251 18.0529C6.45446 18.3219 6.60246 18.5981 6.87341 18.6471C7.84581 18.8231 9.45616 19 12.0006 19C14.545 19 16.1554 18.8231 17.1278 18.6471C17.3977 18.5983 17.5454 18.3231 17.4876 18.0551C17.0685 16.1103 15.7133 14.5321 13.9382 13.8559Z"
                      fill="#637381"
                    />
                  </g>
                </svg>
              </SvgIcon>

            <p>Colaboradores</p>
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6.66662 12.6667C6.51085 12.667 6.3599 12.6127 6.23995 12.5133C6.10362 12.4003 6.01786 12.2377 6.0016 12.0613C5.98534 11.885 6.03992 11.7094 6.15329 11.5733L9.13995 8L6.25995 4.42C6.14811 4.28227 6.09578 4.10564 6.11454 3.92922C6.13331 3.75279 6.22163 3.59112 6.35995 3.48C6.4994 3.35731 6.68371 3.29835 6.86847 3.31734C7.05324 3.33632 7.2217 3.43152 7.33329 3.58L10.5533 7.58C10.7555 7.826 10.7555 8.18067 10.5533 8.42667L7.21995 12.4267C7.08431 12.5903 6.87878 12.6794 6.66662 12.6667Z"
                  fill="#637381"
                />
              </svg>
            </SvgIcon>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
