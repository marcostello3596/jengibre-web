/* Selección de la carta de Jengibre. Precios en pesos argentinos.
   grupo: a qué filtro pertenece cada sección. precio: null si la sección tiene precio único. */
window.CARTA = [
  {
    id: 'cafeteria', grupo: 'cafeteria', titulo: 'Cafetería', nota: 'De 9 a 23 h.',
    items: [
      { n: 'Café pocillo', p: 2800 },
      { n: 'Café doble', p: 3700 },
      { n: 'Café latte', p: 4000 },
      { n: 'Cappuccino', p: 4500 },
      { n: 'Mocaccino', p: 6000 },
      { n: 'Submarino', p: 6000 },
      { n: 'Té clásico', p: 3000 },
      { n: 'Medialuna', p: 1500 },
      { n: 'Tortita', p: 1200 },
      { n: 'Medialuna con jamón y queso', p: 3000 }
    ]
  },
  {
    id: 'desayunos', grupo: 'desayunos', titulo: 'Desayunos y meriendas', nota: 'Las promos van con café, té o jugo de naranja.',
    items: [
      { n: 'Promo medialunas', d: 'Con dos medialunas.', p: 4000 },
      { n: 'Promo tostadas', d: 'Pan de campo con manteca y mermelada.', p: 7400 },
      { n: 'Promo tostado', d: 'Tostado de jamón y queso en pan árabe.', p: 8000 },
      { n: 'Promo huevos revueltos', d: 'Tostadas de pan de campo, huevo revuelto y jamón cocido.', p: 9000 },
      { n: 'Promo con postre', d: 'Con el postre del día.', p: 12000 },
      { n: 'Promo con bruschetta', d: 'Pan de campo, jamón cocido, rúcula, guacamole, tomate y pesto de albahaca.', p: 15000 },
      { n: 'Tostada de la casa', d: 'Pan de campo con palta, queso crema y huevos revueltos.', p: 12000 }
    ]
  },
  {
    id: 'menu-del-dia', grupo: 'menu', titulo: 'Menú del día', nota: 'Cada plato, $22.000.', precioUnico: 22000,
    items: [
      { n: 'Milanesa de pollo', d: 'Casera, con papas fritas o ensalada.' },
      { n: 'Ñoquis con albóndigas', d: 'Ñoquis de papa con albóndigas y salsa mixta, filetto o bechamel.' },
      { n: 'Ensalada caesar', d: 'Verdes, pollo grillado en tiras, parmesano, crutones y aderezo caesar.' },
      { n: 'Burger', d: 'Medallón casero, pan de papa, jamón cocido, muzzarella, lechuga y tomate, con papas fritas.' },
      { n: 'Suprema con calabazas', d: 'A la plancha, con calabazas al horno y ensalada mixta. Sin TACC.' },
      { n: 'Lasagna de verduras', d: 'Acelga, cebolla, morrón y bechamel en masa de panqueque, con muzzarella y filetto.' },
      { n: 'Burger veggie', d: 'Medallón de zanahoria y queso en pan de papa, con rúcula y tomate, con papas.' }
    ]
  },
  {
    id: 'entradas', grupo: 'cocina', titulo: 'Entradas',
    items: [
      { n: 'Albóndigas de ternera', d: 'Cinco albóndigas con salsa filetto y queso rallado.', p: 15000 },
      { n: 'Bastones de muzza', d: 'Cinco bastones de muzzarella con salsa filetto.', p: 17000 },
      { n: 'Papas de la casa', d: 'Con huevo a romper, salchicha parrillera y cebolla caramelizada.', p: 32000 },
      { n: 'Rabas apanadas', d: 'Con alioli.', p: 40000 }
    ]
  },
  {
    id: 'ensaladas', grupo: 'cocina', titulo: 'Ensaladas',
    items: [
      { n: 'Caesar', d: 'Mix de verdes, pollo grillado, parmesano, crutones y aderezo caesar.', p: 21000 },
      { n: 'Tibia veggie', d: 'Verdes, rúcula, zanahoria, palta, calabaza, berenjena, zucchini, cebolla, crutones y parmesano.', p: 22000 },
      { n: 'De temporada', d: 'Mix de verdes, pollo grillado, parmesano, jamón cocido, guacamole, choclo, tomate, zanahoria, huevo duro y semillas.', p: 29000 },
      { n: 'De mar', d: 'Mix de verdes, tomate, zanahoria, guacamole, mejillones y langostinos salteados.', p: 31000 }
    ]
  },
  {
    id: 'pastas', grupo: 'cocina', titulo: 'Pastas',
    items: [
      { n: 'Lasagna de verduras', d: 'Acelga y cebolla en masa de panqueque, con muzzarella y filetto.', p: 26000 },
      { n: 'Volcán de ñoquis', d: 'Ñoquis caseros con salsa mixta, servidos dentro de un pan hecho en casa.', p: 27000 },
      { n: 'Sorrentinos de jamón y queso', d: 'Con salsa rosa de vodka, filetto, bechamel o mixta.', p: 28000 },
      { n: 'Sorrentinos de osobuco', d: 'Con salsa mixta.', p: 32000 }
    ]
  },
  {
    id: 'principales', grupo: 'cocina', titulo: 'Principales',
    items: [
      { n: 'Suprema completa', d: 'A la plancha con jamón, queso y tomate, con gratén de papas.', p: 25000 },
      { n: 'Milanesa napolitana o a caballo', d: 'De carne, casera, con papas fritas o ensalada.', p: 33500 },
      { n: 'Entraña regional', d: '200 g a la plancha, con papas fritas o ensalada.', p: 35000 },
      { n: 'Ojo de bife', d: '300 g, con salsa criolla, papas españolas y ensalada mixta.', p: 35000 },
      { n: 'Milanesa de la casa', d: 'De peceto, con roquefort y cebollas caramelizadas.', p: 35000 },
      { n: 'Vacío al roquefort', d: 'Tiernizado, con roquefort y papas fritas.', p: 37000 }
    ]
  },
  {
    id: 'sandwiches', grupo: 'cocina', titulo: 'Sándwiches y burgers',
    items: [
      { n: 'Burger vegetariana', d: 'Medallón de zanahoria y muzzarella, con rúcula, tomate y guacamole, con papas fritas.', p: 18000 },
      { n: 'American burger', d: 'Medallón casero, pan de papa, cebolla caramelizada, cheddar y panceta, con papas fritas.', p: 24000 },
      { n: 'Sándwich crispy', d: 'Pollo crispy, guacamole, tomate, rúcula y muzzarella, con papas fritas.', p: 26000 },
      { n: 'Lomo de la casa', d: 'Lomo a la plancha, jamón, muzzarella, huevo, tomate, lechuga y salsa criolla, con papas fritas.', p: 32000 }
    ]
  },
  {
    id: 'postres', grupo: 'postres', titulo: 'Postres',
    items: [
      { n: 'Panqueque con dulce de leche', p: 4500 },
      { n: 'Brownie de chocolate negro', d: 'Con helado de crema americana.', p: 9500 },
      { n: 'Brownie de chocolate blanco', d: 'Con arándanos y helado de crema americana.', p: 9500 },
      { n: 'Crumble de manzana', d: 'Con helado de crema americana.', p: 12000 }
    ]
  }
];
window.CARTA_FILTROS = [
  { id: 'todo', t: 'Todo' },
  { id: 'cafeteria', t: 'Cafetería' },
  { id: 'desayunos', t: 'Desayunos y meriendas' },
  { id: 'menu', t: 'Menú del día' },
  { id: 'cocina', t: 'Cocina' },
  { id: 'postres', t: 'Postres' }
];
