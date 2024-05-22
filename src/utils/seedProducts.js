import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAAPSDtVlQxfPcvSPGLJOUDbvssN8gZPgU",
  authDomain: "ecommerce-54085.firebaseapp.com",
  projectId: "ecommerce-54085",
  storageBucket: "ecommerce-54085.appspot.com",
  messagingSenderId: "934209356089",
  appId: "1:934209356089:web:44fc016c6db451054628e8"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()

// Los 'id' los borramos, ya que Firebase los crea
const products = 
[
    {
        name: "CAMISA SLIM FIT CON RAYAS",
        price: 34159,
        category: "hombre",
        stock: 4,
        img: "CAMISA SLIM FIT CON RAYAS",
        description: "Camisa Slim Fit con rayas muy finas, cuello solapa, manga larga y cierre frontal con botones."
    },
    {
        name: "CAMISA DE CUELLO SOLAPA",
        price: 45999,
        stock: 3,
        category: "hombre",
        img: "Camisa de cuello solapa",
        description: "Camisa de cuello solapa, manga larga y cierre frontal con botones."
    },
    {
        name: "REMERA OWEN NEIL BIEST SKATEPARK",
        price: 19799,
        stock: 5,
        category: "hombre",
   
        description: "Remera caja grande, estampada, cuello redondo y manga corta."
    },
    {
        name: "REMERA OVERAN BASIC",
        price: 19499,
        stock: 6,
        category: "hombre",
        img: "REMERA OVERAN BASIC",
        description: "Remera unisex oversize de jersey de algodón, escote redondo, cuello alto de ribb y etiqueta de tela en pecho."
    },
    {
        name: "REMERA RESKI PETER GIRLS",
        price: 12199,
        stock: 3,
        category: "mujer",
        img: "REMERA RESKI PETER GIRLS",
        description: "Remera manga corta y cuello redondo."
    },
    {
        name: "REMERA BLOCK LIN",
        price: 18199,
        stock: 5,
        category: "mujer",
        img: "REMERA BLOCK LIN",
        description: "Remera manga corta, cuello en V."
    },
    {
        name: "CAMISA ARABELLA VIYELA",
        price: 37799,
        stock: 4,
        category: "mujer",
        img: "CAMISA ARABELLA VIYELA",
        description: "Camisa de viyela cuadrillé, con bolsillo frontal."
    },
    {
        name: "MUSCULOSA CASUAL BASIC",
        price: 11549,
        stock: 6,
        category: "mujer",
        img: "MUSCULOSA CASUAL BASIC",
        description: "Musculosa básica de morley con cuello redondo."
    },
    {
        name: "MUSCULOSA ESTRELLA FRUNCES",
        price: 12949,
        stock: 10,
        category: "mujer",
        img: "MUSCULOSA ESTRELLA FRUNCES",
        description: "Musculosa de morley con lurex y frunces en los laterales."
    }
];



export const seedProducts = () => {

    products.forEach(product => {
        // Agregamos el producto a nuestra base de datos
        addDoc(collection(db, "productos"), product)
    })
  console.log("productos añadidos")
}

seedProducts()