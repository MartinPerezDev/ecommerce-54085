const products = [
  {
    id: "ASxasd1231241",
    name: "MX MASTER 3S",
    description: "Mouse inalámbrico de alto desempeño.",
    stock: 2,
    category: "mouse",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s/gallery/mx-master-3s-mouse-top-view-graphite.png?v=1"
  },
  {
    id: "HGfxc1234345",
    name: "M187 INALÁMBRICO ULTRAPORTÁTIL",
    description: "Diseño portátil superpequeño.",
    stock: 10,
    category: "mouse",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/m187/gallery/m187-gallery-teal-1-new.png?v=1"
  },
  {
    id: "Gcs2122",
    name: "PEBBLE MOUSE 2 M350S",
    description: "Mouse Bluetooth® delgado y compacto con un botón personalizable.",
    stock: 6,
    category: "mouse",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/pebble-mouse-2-m350s/gallery/pebble-mouse-2-m350s-top-tonal-rose-gallery.png?v=1"
  },
  {
    id: "Hcvty1212",
    name: "TECLADO BLUETOOTH MULTIDISPOSITIVO K480",
    description: "Alterna la escritura en la computadora, el celular o la tablet.",
    stock: 14,
    category: "teclado",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k480/gallery/k480-gallery-black-1-new.png?v=1"
  },
  {
    id: "Ytre12312",
    name: "TECLADO INALÁMBRICO K400 PLUS CON TOUCHPAD",
    description: "Control inalámbrico del televisor conectado a la PC.",
    stock: 10,
    category: "teclado",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k400-plus/gallery/k400-plus-gallery-1-new.png?v=1"
  },
  {
    id: "Klom1222",
    name: "PEBBLE KEYS 2 K380S",
    description: "Teclado Bluetooth® estilizado y minimalista con teclas personalizables.",
    stock: 4,
    category: "teclado",
    image: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/pebble-keys-2-k380s/gallery/pebble-keys-2-k380s-top-tonal-rose-gallery-esp.png?v=1"
  },
  {
    id: "Vfrt1222",
    name: "PRO X 2 LIGHTSPEED",
    description: "Audífonos inalámbricos con micrófono LIGHTSPEED para juegos.",
    stock: 1,
    category: "audio",
    image: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x-2-lightspeed/gallery/gallery-1-pro-x-2-lightspeed-gaming-headset-black.png?v=1"
  },
  {
    id: "Qwx12333",
    name: "AUDÍFONOS CON MICRÓFONO PRO X223",
    description: "Una edición exclusiva de nuestros audífonos con micrófono PRO X.",
    stock: 1,
    category: "audio",
    image: "https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/lol-pro-x-headset/gallery/league-of-legends-pro-x-gaming-headset-gallery-1.png?v=1"
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