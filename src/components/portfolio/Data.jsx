import Website from "../../assest/portfolio/website.jpg";
import Portfolio from "../../assest/portfolio/portfolio.jpg";
import Crypto from "../../assest/portfolio/crypto.jpg";
import infinity from "../../assest/portfolio/infinity.jpg";
import Shrimant from "../../assest/portfolio/shrimant.png";
import Uniconrn from "../../assest/portfolio/unicorn.jpg";
import Collage from "../../assest/portfolio/collage-app.jpg";
import TicTacToe from "../../assest/portfolio/tic-tac-toe.jpg";


export const projectsData = [
    {
        id: 1 ,
        image : Website,
        title: 'website',
        category : 'web',
        link: "https://flare-global-soft.vercel.app/",
    },
    {
        id: 2 ,
        image : Portfolio,
        title: 'Personal Portfolio website',
        category : 'web',
        link: "https://prajwalmandlik.github.io/Portfolio-website/",
    },
    {
        id: 3 ,
        image : Crypto,
        title: 'Crypto website',
        category : 'web',
        link: "https://crypto-scout.vercel.app/",
    },
    {
        id: 4 ,
        image : Collage,
        title: 'Collage App',
        category : 'app',
        link: "https://drive.google.com/file/d/1x4fqa56TU4-tMKqwn_tS1g2VC6ZKllGy/view?usp=sharing",
    },
    {
        id: 5 ,
        image : TicTacToe,
        title: 'Tic Tac Toe game',
        category : 'app',
        link: "https://drive.google.com/file/d/1HQ0pguOBHDcvFts-z7EXLIdFL6ySlQ2a/view?usp=sharing",
    },
    {
        id: 6 ,
        image : infinity,
        title: 'Nashik based salon',
        category : 'graphic',
        link: "https://drive.google.com/file/d/1zFM9EoGvDiwcIjMfFZy-Zaqun-BB-pVT/view?usp=sharing",
    },
    {
        id: 7 ,
        image : Shrimant,
        title: 'photo studio',
        category : 'graphic',
        link: "https://drive.google.com/file/d/1WiUuQCF4CDY311hAHWO9T8djUBWsF4uZ/view?usp=sharing",
    },
    {
        id: 8 ,
        image : Uniconrn,
        title: 'Uniconrn',
        category : 'graphic',
        link: "https://drive.google.com/file/d/1FU-fjd_YH44NJFc8hYJ0odJyA_vQgO9M/view?usp=sharing",
    },
];

export const projectsNav = [
    {
        name: 'all' ,
    },
    {
        name: 'web' ,
    },
    {
        name: 'app' ,
    },
    {
        name: 'graphic' ,
    },
]