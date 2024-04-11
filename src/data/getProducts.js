const products = [
  {
    id: "ASxasd1231241",
    name: "MX MASTER 3S",
    description: "Mouse inalámbrico de alto desempeño.",
    fullDescription: "Experimenta la libertad de movimiento con nuestro mouse inalámbrico de alto desempeño, diseñado para ofrecer precisión excepcional y un control fluido en tus tareas diarias. Disfruta de una experiencia sin cables sin comprometer la calidad ni la eficiencia.",
    stock: 2,
    category: "mouse",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png?v=1",
    price: 150
  },
  {
    id: "HGfxc1234345",
    name: "M187 INALÁMBRICO ULTRAPORTÁTIL",
    description: "Diseño portátil superpequeño.",
    fullDescription: "Con un diseño superpequeño y ultra portable, nuestro mouse ofrece la máxima comodidad en movimiento. Nunca sacrifiques la productividad por la portabilidad; este mouse te acompaña donde vayas, sin comprometer el rendimiento.",
    stock: 10,
    category: "mouse",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m187/gallery/m187-gallery-teal-1-new.png?v=1",
    price: 100
  },
  {
    id: "Gcs2122",
    name: "PEBBLE MOUSE 2 M350S",
    description: "Mouse Bluetooth® delgado y compacto con un botón personalizable.",
    fullDescription: "Nuestro mouse Bluetooth® combina delgadez y portabilidad con un botón personalizable para adaptarse a tus necesidades. Diseñado para acompañarte en cualquier lugar, ofrece comodidad y control precisos en un tamaño compacto.",
    stock: 6,
    category: "mouse",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/pebble-mouse-2-m350s/gallery/pebble-mouse-2-m350s-top-tonal-rose-gallery.png?v=1",
    price: 170
  },
  {
    id: "Hcvty1212",
    name: "TECLADO BLUETOOTH MULTIDISPOSITIVO K480",
    description: "Alterna la escritura en la computadora, el celular o la tablet.",
    fullDescription: "Nuestro teclado ofrece la flexibilidad de alternar entre la computadora, el celular o la tablet, brindando comodidad y eficiencia en cualquier dispositivo. Simplifica tu vida digital con un solo teclado versátil para todas tus necesidades.",
    stock: 14,
    category: "teclado",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k480/gallery/k480-gallery-black-1-new.png?v=1",
    price: 250
  },
  {
    id: "Ytre12312",
    name: "TECLADO INALÁMBRICO K400 PLUS CON TOUCHPAD",
    description: "Control inalámbrico del televisor conectado a la PC.",
    fullDescription: "Nuestro teclado ofrece control inalámbrico para tu televisor conectado a la PC, brindando conveniencia y facilidad de uso. Con este teclado, disfruta de una experiencia fluida y sin complicaciones al interactuar con tu contenido desde la comodidad de tu sofá.",
    stock: 10,
    category: "teclado",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k400-plus/gallery/k400-plus-gallery-1-new.png?v=1",
    price: 500
  },
  {
    id: "Klom1222",
    name: "PEBBLE KEYS 2 K380S",
    description: "Teclado Bluetooth® estilizado y minimalista con teclas personalizables.",
    fullDescription: "Nuestro elegante teclado Bluetooth® combina estilo minimalista con funcionalidad personalizable. Con teclas adaptables a tus necesidades, ofrece una experiencia de escritura única. Simplifica tu flujo de trabajo con este teclado versátil y estilizado, ideal para cualquier entorno.",
    stock: 4,
    category: "teclado",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/pebble-keys-2-k380s/gallery/pebble-keys-2-k380s-top-tonal-rose-gallery-esp.png?v=1",
    price: 450
  },
  {
    id: "Vfrt1222",
    name: "PRO X 2 LIGHTSPEED",
    description: "Audífonos inalámbricos con micrófono LIGHTSPEED para juegos.",
    fullDescription: "Sumérgete en la experiencia de juego definitiva con nuestros audífonos inalámbricos LIGHTSPEED. Equipados con micrófono de alta calidad, ofrecen comunicación nítida y libertad de movimiento. Disfruta de una ventaja competitiva con el sonido inmersivo y la comodidad de estos audífonos diseñados para gamers exigentes.",
    stock: 1,
    category: "audio",
    image: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-black.png?v=1",
    price: 75
  },
  {
    id: "Qwx12333",
    name: "AUDÍFONOS CON MICRÓFONO PRO X223",
    description: "Una edición exclusiva de nuestros audífonos con micrófono PRO X.",
    fullDescription: "Descubre la edición exclusiva de nuestros audífonos con micrófono PRO X, diseñados para ofrecer la máxima calidad de audio y comunicación. Sumérgete en un sonido envolvente mientras disfrutas de la comodidad y el rendimiento incomparables de estos audífonos premium, ideales para gamers y usuarios exigentes.",
    stock: 1,
    category: "audio",
    image: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/lol-pro-x-headset/gallery/league-of-legends-pro-x-gaming-headset-gallery-1.png?v=1",
    price: 310
  }
]
//obtener productos
const getProducts = new Promise((resolve, reject) => {
  //simulamos un retraso de red con setTimeout
  setTimeout(() => {
    resolve(products);
  }, 3000);
});

export default getProducts