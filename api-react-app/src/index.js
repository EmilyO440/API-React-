import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './index.css';
import App from './App';

const users = [
  {
    "createdAt": "2024-02-11T18:42:00.252Z",
    "name": "Jenna Maggio",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/207.jpg",
    "id": "1"
  },
  {
    "createdAt": "2024-02-11T11:21:03.259Z",
    "name": "Florence Hilpert",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg",
    "id": "2"
  },
  {
    "createdAt": "2024-02-11T02:24:52.090Z",
    "name": "Jana Leannon",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1114.jpg",
    "id": "3"
  },
  {
    "createdAt": "2024-02-12T00:40:59.301Z",
    "name": "Matt Towne",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/945.jpg",
    "id": "4"
  },
  {
    "createdAt": "2024-02-12T01:39:20.880Z",
    "name": "Andres DuBuque",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/96.jpg",
    "id": "5"
  },
  {
    "createdAt": "2024-02-11T08:46:34.349Z",
    "name": "Ebony Beahan",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/714.jpg",
    "id": "6"
  },
  {
    "createdAt": "2024-02-11T07:40:59.874Z",
    "name": "Andres Greenfelder MD",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/327.jpg",
    "id": "7"
  },
  {
    "createdAt": "2024-02-11T03:24:35.160Z",
    "name": "Jacob Brown",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/238.jpg",
    "id": "8"
  },
  {
    "createdAt": "2024-02-11T17:27:08.199Z",
    "name": "Jeffery Lueilwitz",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/806.jpg",
    "id": "9"
  },
  {
    "createdAt": "2024-02-11T04:51:42.100Z",
    "name": "Jean Blanda",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/81.jpg",
    "id": "10"
  },
  {
    "createdAt": "2024-02-11T06:27:42.439Z",
    "name": "Bridget Runte",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/488.jpg",
    "id": "11"
  },
  {
    "createdAt": "2024-02-11T12:08:51.483Z",
    "name": "Mike Jacobi",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/687.jpg",
    "id": "12"
  },
  {
    "createdAt": "2024-02-11T21:55:21.669Z",
    "name": "Virginia Stiedemann DDS",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/209.jpg",
    "id": "13"
  },
  {
    "createdAt": "2024-02-12T01:14:15.609Z",
    "name": "Miss Roberto Wisoky",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/205.jpg",
    "id": "14"
  },
  {
    "createdAt": "2024-02-11T20:33:07.321Z",
    "name": "Johanna Shanahan",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/408.jpg",
    "id": "15"
  },
  {
    "createdAt": "2024-02-11T18:26:05.495Z",
    "name": "Emilio Beatty I",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1226.jpg",
    "id": "16"
  },
  {
    "createdAt": "2024-02-11T19:09:55.143Z",
    "name": "Shawna Hodkiewicz",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/528.jpg",
    "id": "17"
  },
  {
    "createdAt": "2024-02-11T11:45:36.875Z",
    "name": "Jimmie Kassulke",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/154.jpg",
    "id": "18"
  },
  {
    "createdAt": "2024-02-11T10:29:37.530Z",
    "name": "Kurt Moore",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/592.jpg",
    "id": "19"
  },
  {
    "createdAt": "2024-02-11T06:02:48.941Z",
    "name": "Bertha Weimann",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/21.jpg",
    "id": "20"
  },
  {
    "createdAt": "2024-02-11T19:47:07.249Z",
    "name": "Emmett Tromp",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/433.jpg",
    "id": "21"
  },
  {
    "createdAt": "2024-02-11T06:06:36.943Z",
    "name": "Clayton Anderson",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/8.jpg",
    "id": "22"
  },
  {
    "createdAt": "2024-02-11T08:40:27.394Z",
    "name": "Debra Blick",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/766.jpg",
    "id": "23"
  },
  {
    "createdAt": "2024-02-12T00:30:22.722Z",
    "name": "Mrs. Nina Wuckert",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/662.jpg",
    "id": "24"
  },
  {
    "createdAt": "2024-02-11T21:43:09.816Z",
    "name": "Edmund Oberbrunner",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/123.jpg",
    "id": "25"
  },
  {
    "createdAt": "2024-02-11T12:22:35.053Z",
    "name": "Dewey Dach",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1094.jpg",
    "id": "26"
  },
  {
    "createdAt": "2024-02-11T04:52:50.745Z",
    "name": "Kenny Gutkowski",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/173.jpg",
    "id": "27"
  }
];

const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  <React.StrictMode>
    <App users={users} />
  </React.StrictMode>
);