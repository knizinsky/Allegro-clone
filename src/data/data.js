//section1
import legoCar from "../Img/Products/LEGO-City-Elektryczny-samochod-sportowy.webp";
import legoDinosaur from "../Img/Products/LEGO-Creator-3-w-1-Potezne-dinozaury.webp";
import hourseToy from "../Img/Products/SCHLEICH-Boks-Stajenny-Zagroda-Tori-i-Princess.webp";
import fisherToy from "../Img/Products/FISHER-PRICE-PRZYTULANKA-WYDRA-SZUMIACY-USPOKAJACZ.webp";
import chessBoard from "../Img/Products/Szachy-DREWNIANE-TURNIEJOWE-PRODUCENT-DUZE-senator.webp";

//section2
import keyboard from "../Img/Products/Section2/Klawiatura-Sharkoon-PureWriter-TKL-RGB-Kailh-Blue.webp";
import mouse from '../Img/Products/Section2/Mysz-GENESIS-Krypton-220.jpg'
import lamp from '../Img/Products/Section2/Lampa-solarna-POCHODNIA-efekt-plomien-12-LED-P-200.webp'
import owl from '../Img/Products/Section2/LAMPA-SOLARNA-OGRODOWA-SOWA-WBIJANA-WODOODPORNA.jpg'
import brush from '../Img/Products/Section2/SZCZOTKA-GUMOWA-DO-CZYSZCZENIA-ZAMSZU-I-NUBUKU.jpg'
import blender from '../Img/Products/Section2/BLENDER-KIELICHOWY-KUCHENNY-MIKSER-KOKTAJLE-1-5L.jpg'

//inspiration section
import bikes from '../Img/InspirationSection/bikes.png'
import running from '../Img/InspirationSection/running.png'
import skating from '../Img/InspirationSection/skating.png'
import sports from '../Img/InspirationSection/sports.png'
import teamSports from '../Img/InspirationSection/team-sports.png'
import travels from '../Img/InspirationSection/travels.png'
import waterSports from '../Img/InspirationSection/water-sports.png'

const PRODUCTS_SECTION1 = [
	{
		id: "s1_1",
		img: legoCar,
		price: "39,99",
		title: "LEGO City Elektryczny samochód sportowy 60383",
		bought: "180",
	},
	{
		id: "s1_2",
		img: legoDinosaur,
		price: "68,99",
		title: "LEGO Creator 3 w 1 - Potężne dinozaury (31058)",
		bought: "161",
	},
	{
		id: "s1_3",
		img: hourseToy,
		price: "134,90",
		title: "SCHLEICH Boks Stajenny Zagroda Tori i Princess",
		bought: "5",
	},
	{
		id: "s1_4",
		img: fisherToy,
		price: "98,99",
		title: "FISHER PRICE PRZYTULANKA WYDRA SZUMIĄCY USPOKAJACZ",
		bought: "96",
	},
	{
		id: "s1_5",
		img: chessBoard,
		price: "237,07",
		title: "Szachy DREWNIANE TURNIEJOWE PRODUCENT DUŻE",
		bought: "80",
	},
	{
		id: "s1_6",
		img: fisherToy,
		price: "98,99",
		title: "FISHER PRICE PRZYTULANKA WYDRA SZUMIĄCY USPOKAJACZ",
		bought: "96",
	},
	{
		id: "s1_7",
		img: chessBoard,
		price: "237,07",
		title: "Szachy DREWNIANE TURNIEJOWE PRODUCENT DUŻE",
		bought: "80",
	},
];

const PRODUCTS_SECTION2 = [
	{
		id: "s2_1",
		img: keyboard,
		price: "339,00",
		title: "Klawiatura Sharkoon PureWriter TKL RGB Kailh Blue",
		bought: "21",
	},
	{
		id: "s2_2",
		img: mouse,
		price: "59,99",
		title: "Mysz GENESIS Krypton 220",
		bought: "8",
	},
	{
		id: "s2_3",
		img: lamp,
		price: "12,90",
		title: "Lampa solarna POCHODNIA efekt płomień 12 LED P-200",
		bought: "132",
	},
	{
		id: "s2_4",
		img: owl,
		price: "34,99",
		title: "LAMPA SOLARNA OGRODOWA SOWA WBIJANA WODOODPORNA",
		bought: "68",
	},
	{
		id: "s2_5",
		img: brush,
		price: "14,99",
		title: "SZCZOTKA GUMOWA DO CZYSZCZENIA ZAMSZU I NUBUKU",
		bought: "20",
	},
	{
		id: "s2_6",
		img: blender,
		price: "71,99",
		title: "BLENDER KIELICHOWY KUCHENNY MIKSER KOKTAJLE 1,5L",
		bought: "219",
	},
	{
		id: "s2_7",
		img: keyboard,
		price: "339,00",
		title: "Klawiatura Sharkoon PureWriter TKL RGB Kailh Blue",
		bought: "21",
	},
	{
		id: "s2_8",
		img: mouse,
		price: "59,99",
		title: "Mysz GENESIS Krypton 220",
		bought: "8",
	},
];

const INSPIRATION_SECTION = [
	{
		id: "s3_1",
		img:travels,
		title:"Turystyka",
	},
	{
		id: "s3_2",
		img:sports,
		title:"Sporty towarzyskie",
	},
	{
		id: "s3_3",
		img: running,
		title:"Bieganie",
	},
	{
		id: "s3_4",
		img:waterSports,
		title:"Sporty wodne",
	},
	{
		id: "s3_5",
		img: bikes,
		title:"Rowery",
	},
	{
		id: "s3_6",
		img:teamSports,
		title:"Sporty drużynowe",
	},
	{
		id: "s3_7",
		img:skating,
		title:"Skating i slackline",
	},
]

export { PRODUCTS_SECTION1, PRODUCTS_SECTION2, INSPIRATION_SECTION };
