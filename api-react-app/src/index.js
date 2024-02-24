import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './index.css';
import App from './App';

const users = [
  {
    "createdAt": "2024-02-11T14:49:45.649Z",
    "name": "Renee Lowe",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1084.jpg",
    "id": "2"
},
{
    "createdAt": "2024-02-11T19:55:11.543Z",
    "name": "Phillip Pfannerstill",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/183.jpg",
    "id": "3"
},
{
    "createdAt": "2024-02-11T23:59:36.481Z",
    "name": "Pat Pacocha",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/756.jpg",
    "id": "4"
},
{
    "createdAt": "2024-02-11T17:14:05.518Z",
    "name": "Miss Lawrence Hickle Sr.",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/295.jpg",
    "id": "5"
},
{
    "createdAt": "2024-02-11T16:15:05.743Z",
    "name": "Bob Rodriguez",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/235.jpg",
    "id": "6"
},
{
    "createdAt": "2024-02-12T00:55:17.889Z",
    "name": "Sonja Metz Jr.",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/470.jpg",
    "id": "7"
},
{
    "createdAt": "2024-02-12T03:46:24.676Z",
    "name": "Mrs. Velma Greenholt",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/369.jpg",
    "id": "8"
},
{
    "createdAt": "2024-02-11T20:18:04.441Z",
    "name": "Andres Dach",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg",
    "id": "9"
},
{
    "createdAt": "2024-02-12T00:34:02.390Z",
    "name": "Mr. Edmund Brekke",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/627.jpg",
    "id": "10"
},
{
    "createdAt": "2024-02-11T17:19:41.079Z",
    "name": "Erik Turcotte",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1056.jpg",
    "id": "11"
},
{
    "createdAt": "2024-02-12T02:09:28.745Z",
    "name": "Paulette Hills PhD",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/997.jpg",
    "id": "12"
},
{
    "createdAt": "2024-02-12T01:54:09.962Z",
    "name": "Dr. Luke Johnson",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/115.jpg",
    "id": "13"
},
{
    "createdAt": "2024-02-11T08:51:02.890Z",
    "name": "Randolph Kilback",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/524.jpg",
    "id": "14"
},
{
    "createdAt": "2024-02-11T16:02:54.762Z",
    "name": "Bobby Hayes",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/551.jpg",
    "id": "15"
},
{
    "createdAt": "2024-02-11T14:38:51.049Z",
    "name": "Dawn Harvey",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/37.jpg",
    "id": "16"
},
{
    "createdAt": "2024-02-23T18:41:22.816Z",
    "name": "Miss Miriam Schinner",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/857.jpg",
    "id": "17"
},
{
    "createdAt": "2024-02-24T06:12:00.427Z",
    "name": "Bill Yundt",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/250.jpg",
    "id": "18"
},
{
    "createdAt": "2024-02-24T09:45:37.369Z",
    "name": "Gwen Cormier",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/162.jpg",
    "id": "19"
},
{
    "createdAt": "2024-02-23T20:23:59.178Z",
    "name": "Dr. Derrick VonRueden",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/770.jpg",
    "id": "20"
},
{
    "createdAt": "2024-02-24T08:35:34.767Z",
    "name": "Dwayne Purdy",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/931.jpg",
    "id": "21"
},
{
    "createdAt": "2024-02-24T08:02:51.309Z",
    "name": "Johnnie Ankunding",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/311.jpg",
    "id": "22"
},
{
    "createdAt": "2024-02-23T16:16:34.553Z",
    "name": "Mr. Walter Johns",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/393.jpg",
    "id": "23"
},
{
    "createdAt": "2024-02-24T11:05:52.141Z",
    "name": "Edmund Carter",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/94.jpg",
    "id": "24"
},
{
    "createdAt": "2024-02-23T18:16:16.044Z",
    "name": "Ms. Guillermo Reichert",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1182.jpg",
    "id": "25"
},
{
    "createdAt": "2024-02-24T04:09:43.033Z",
    "name": "Dr. Melanie Beatty",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/899.jpg",
    "id": "26"
},
{
    "createdAt": "2024-02-23T17:44:15.429Z",
    "name": "Johnny Barrows",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/500.jpg",
    "id": "27"
},
{
    "createdAt": "2024-02-23T15:45:14.218Z",
    "name": "Theodore Cummings",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/83.jpg",
    "id": "28"
},
{
    "createdAt": "2024-02-24T00:10:33.367Z",
    "name": "Erma Okuneva",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/408.jpg",
    "id": "29"
}
];

const root = createRoot(document.getElementById('root')); // Use createRoot directly
root.render(
  <React.StrictMode>
    <App users={users} />
  </React.StrictMode>
);