/* Carta de Jengibre (carta final del restaurante). Precios en pesos argentinos.
   grupo: a qué filtro pertenece cada sección. precioUnico: secciones con un solo precio. */
window.CARTA = [
  {
    id: 'cafeteria', grupo: 'cafeteria', titulo: 'Cafetería',
    nota: 'De 9 a 00 h.',
    items: [
      { n: 'Café con leche', p: 4000 },
      { n: 'Café doble o cortado', p: 4000 },
      { n: 'Café frío', p: 6000 },
      { n: 'Café de la casa', d: 'Shot de café, espuma de leche, shot de Baileys y Tía María.', p: 15000 },
      { n: 'Café irlandés', d: 'Shot de café, Jameson y crema.', p: 7500 },
      { n: 'Café jarrito', p: 3000 },
      { n: 'Café pocillo', p: 2800 },
      { n: 'Cappuccino', d: 'Shot de café con base de chocolate derretido con leche y espuma de leche.', p: 6000 },
      { n: 'Cold coffee', d: 'Espresso frío, leche, canela, dulce de leche y almíbar simple.', p: 8000 },
      { n: 'Mokaccino', d: 'Shot de café con base de chocolate derretido con leche y espuma de leche.', p: 8000 },
      { n: 'Submarino', p: 8000 },
      { n: 'Té clásico / variedades', p: 3000 }
    ]
  },
  {
    id: 'desayunos', grupo: 'desayunos', titulo: 'Promos de cafetería',
    items: [
      { n: 'Promo con bruschetta', d: 'Infusión (café, té o jugo de naranja) con bruschetta fresca (pan de campo, aceite de oliva, jamón cocido, rúcula, guacamole, tomates frescos y pesto de albahaca).', p: 15000 },
      { n: 'Promo con huevos revueltos', d: 'Infusión (café, té o jugo de naranja) con tostadas en pan de campo, huevo revuelto y jamón cocido.', p: 10000 },
      { n: 'Promo con tostadas', d: 'Infusión (café, té o jugo de naranja) con tostadas en pan de campo, manteca y mermelada.', p: 7400 },
      { n: 'Promo con tostado', d: 'Infusión (café, té o jugo de naranja) con tostado de jamón y queso en pan baguette.', p: 8000 },
      { n: 'Promo medialunas o tortitas', d: 'Infusión (café, té o jugo de naranja) con 2 tortitas o 2 medialunas.', p: 6000 },
      { n: 'Promo con postre', d: 'Infusión (café, té o jugo de naranja) con postre del día.', p: 10000 }
    ]
  },
  {
    id: 'saladitos', grupo: 'desayunos', titulo: 'Saladitos',
    items: [
      { n: 'Tortita', d: 'Tortitas tradicionales (raspada o de hoja).', p: 1200 },
      { n: 'Medialuna', d: 'Medialuna clásica de manteca o grasa.', p: 1500 },
      { n: 'Medialuna con jamón y queso', d: 'Medialuna rellena de jamón y queso muzzarella.', p: 3000 },
      { n: 'Tortita con jamón y queso', d: 'Tortita rellena de jamón y queso muzzarella.', p: 2000 },
      { n: 'Tostada de la casa', d: 'Tostadas en pan de campo con queso crema, palta y huevos revueltos.', p: 12000 },
      { n: 'Tostado clásico', d: 'Pan casero con jamón cocido y queso muzzarella.', p: 17000 },
      { n: 'Tostado primavera', d: 'Pan casero con jamón cocido, queso muzzarella, tomates frescos y lechuga.', p: 18000 }
    ]
  },
  {
    id: 'menu-del-dia', grupo: 'menu', titulo: 'Menú del día', precioUnico: 22000,
    nota: 'Cada plato, $22.000.',
    items: [
      { n: 'Milanesa de pollo', d: 'Casera, con papas fritas o ensalada.' },
      { n: 'Ñoquis con albóndigas', d: 'Ñoquis de papa con albóndigas y salsa mixta, filetto o bechamel.' },
      { n: 'Ensalada Caesar', d: 'Verdes, pollo grillado en tiras, parmesano, crutones y aderezo caesar.' },
      { n: 'Burger', d: 'Medallón casero, pan de papa, jamón cocido, muzzarella, lechuga y tomate, con papas fritas.' },
      { n: 'Suprema con calabazas', d: 'A la plancha, con calabazas al horno y ensalada mixta. Sin TACC.' },
      { n: 'Lasagna de verduras', d: 'Acelga, cebolla, morrón y bechamel en masa de panqueque, con muzzarella y filetto.' },
      { n: 'Burger veggie', d: 'Medallón de zanahoria y queso en pan de papa, con rúcula y tomate, con papas.' },
      { n: 'Hamburguesa clásica' },
      { n: 'Sorrentinos de calabaza y muzzarella', d: 'Con salsa bechamel, champiñones y verdeo.' }
    ]
  },
  {
    id: 'menu-ninos', grupo: 'menu', titulo: 'Menú de niños',
    items: [
      { n: 'Spaghetti', p: 6000 },
      { n: 'Sorrentinos de jamón y queso', p: 14000 },
      { n: 'Sorrentinos de calabaza y muzzarella', p: 13000 },
      { n: 'Sorrentinos de osobuco', p: 16000 },
      { n: 'Milanesa de pollo', p: 13000 },
      { n: 'Milanesa de carne', p: 15000 },
      { n: 'Crispy chicken', p: 10000 }
    ]
  },
  {
    id: 'entradas', grupo: 'cocina', titulo: 'Entradas y picoteo',
    items: [
      { n: 'Albóndigas de ternera', d: '4 albóndigas de ternera con salsa filetto y queso.', p: 15000 },
      { n: 'Bastones de muzzarella', d: '5 bastones rellenos de queso, acompañados de salsa filetto.', p: 17000 },
      { n: 'Crispy chicken', d: 'Bastones de pollo crocante, acompañados de salsa barbacoa.', p: 19000 },
      { n: 'Papas clásicas', d: 'Papas fritas clásicas.', p: 20000 },
      { n: 'Papas cheddar', d: 'Papas fritas con queso cheddar y cebolla de verdeo.', p: 23000 },
      { n: 'Papas de la casa', d: 'Papas fritas con cebolla caramelizada, salchicha parrillera y huevos fritos a romper.', p: 32000 },
      { n: 'Rabas apanadas', d: 'Aros de tubo de calamar apanados, acompañados con salsa alioli.', p: 40000 }
    ]
  },
  {
    id: 'principales', grupo: 'cocina', titulo: 'Principales',
    items: [
      { n: 'Vacío de la casa', d: 'Carne de vacío tiernizado a la pizza o al roquefort con papas fritas.', p: 37000 },
      { n: 'Entraña regional', d: 'Porción de entraña (200 gr) a la plancha acompañada de papas fritas y ensalada.', p: 35000 },
      { n: 'Milanesa de carne', d: 'Milanesa de peceto casera acompañada con papas fritas o ensalada.', p: 30000 },
      { n: 'Milanesa de carne napolitana o a caballo', d: 'Milanesa de peceto casera a la napolitana o a caballo, acompañada con papas fritas o ensalada.', p: 33500 },
      { n: 'Milanesa de merluza', d: 'Merluza apanada con ensalada mixta o papas fritas.', p: 22000 },
      { n: 'Milanesa de pollo', d: 'Milanesa casera de pollo, acompañada con papas fritas o ensalada.', p: 25000 },
      { n: 'Milanesa de pollo napolitana o a caballo', d: 'Milanesa casera de pollo napolitana o a caballo, acompañada de papas fritas o ensalada.', p: 29500 },
      { n: 'Milanesa de la casa', d: 'Milanesa de peceto con roquefort y cebollas caramelizadas con guarnición.', p: 35000 },
      { n: 'Suprema completa', d: 'Suprema de pollo con jamón, queso y tomates frescos, acompañada con un gratén de papas.', p: 25000 },
      { n: 'Wrap de pollo', d: 'Roll de vegetales, tiritas de pollo, queso parmesano, guacamole, papas fritas y salsa criolla.', p: 29000 },
      { n: 'American burger', d: 'Medallón de carne casera, cebolla caramelizada, cheddar y panceta ahumada.', p: 24000 },
      { n: 'Burger vegetariana', d: 'Medallón elaborado con zanahoria, ajo y queso muzzarella, en pan de papa con rúcula, tomates frescos, guacamole y queso muzzarella, acompañada con papas fritas.', p: 18000 },
      { n: 'Burger de la casa', d: 'Medallón de carne casero, rúcula, tomates frescos, guacamole, jamón, queso muzzarella y huevo frito, acompañada con papas fritas.', p: 24000 }
    ]
  },
  {
    id: 'sandwiches', grupo: 'cocina', titulo: 'Sándwiches',
    items: [
      { n: 'Lomo de la casa', d: 'Sándwich de carne de lomo a la plancha, jamón cocido, queso muzzarella, huevo frito, tomates frescos, lechuga y salsa criolla, acompañado con papas fritas.', p: 32000 },
      { n: 'Sándwich de mila de carne', d: 'Sándwich de milanesa de carne, con tomates frescos, lechuga, huevo frito, jamón, queso muzzarella y salsa criolla, acompañado con papas fritas.', p: 32000 },
      { n: 'Sándwich de mila de pollo', d: 'Sándwich de milanesa de pollo, con tomates frescos, lechuga, huevo frito, jamón, queso muzzarella y salsa criolla, acompañado con papas fritas.', p: 29000 },
      { n: 'Sándwich de pollo', d: 'Suprema de pollo a la plancha, guacamole, tomates frescos, rúcula y queso muzzarella.', p: 24000 },
      { n: 'Sándwich de vacío', d: 'Vacío braseado en pan baguette, salsa criolla, jamón, queso muzzarella, rúcula y tomates frescos, acompañado con papas fritas.', p: 37000 }
    ]
  },
  {
    id: 'empanadas', grupo: 'cocina', titulo: 'Empanadas y bruschettas',
    items: [
      { n: 'Empanada caprese', d: 'Empanada con relleno de tomates frescos, albahaca y queso.', p: 3500 },
      { n: 'Empanada criolla', d: 'Empanada rellena con carne y condimentada con especias tradicionales.', p: 4500 },
      { n: 'Empanada cortada a cuchillo', d: 'Empanada rellena con carne de lomo.', p: 4500 },
      { n: 'Empanada de jamón y queso', d: 'Empanada rellena de jamón y queso muzzarella.', p: 4500 },
      { n: 'Empanada de mariscos y queso', d: 'Empanada rellena con mejillones, langostinos, queso muzzarella y verdeo.', p: 7000 },
      { n: 'Bruschetta fresca', d: 'Pan de campo, aceite de oliva, jamón cocido, rúcula, guacamole, tomates frescos y pesto de albahaca.', p: 21000 },
      { n: 'Bruschetta serrana', d: 'Pan de campo, crema ácida, jamón crudo, rúcula, queso parmesano y tomates frescos.', p: 24000 }
    ]
  },
  {
    id: 'pastas', grupo: 'cocina', titulo: 'Pastas',
    items: [
      { n: 'Lasagna de verduras', d: 'Lasagna de acelga y cebolla, con queso muzzarella y queso sardo, acompañada con salsa mixta.', p: 26000 },
      { n: 'Ñoquis con albóndigas', d: 'Ñoquis acompañados con albóndigas de ternera y salsa filetto.', p: 25000 },
      { n: 'Sorrentinos de calabaza', d: 'Sorrentinos rellenos de calabaza y queso muzzarella, acompañados con salsa bechamel, champiñones y verdeo.', p: 25000 },
      { n: 'Sorrentinos de jamón y muzzarella', d: 'Sorrentinos de jamón y queso muzzarella, acompañados con salsa a elección (rosa de vodka, filetto, bechamel o mixta).', p: 28000 },
      { n: 'Sorrentinos de osobuco', d: 'Sorrentinos de osobuco acompañados con salsa mixta.', p: 32000 },
      { n: 'Volcán de ñoquis', d: 'Pan casero relleno con ñoquis de papa, acompañados con salsa mixta y queso parmesano.', p: 27000 }
    ]
  },
  {
    id: 'ensaladas', grupo: 'cocina', titulo: 'Ensaladas',
    items: [
      { n: 'Ensalada Caesar', d: 'Mix de verdes, pollo grillado, queso parmesano, croutons y aderezo caesar clásico.', p: 21000 },
      { n: 'Ensalada crispy', d: 'Mix de verdes, zanahoria en escamas, tomates frescos, guacamole y bastones de pollo crispy.', p: 27000 },
      { n: 'Ensalada de mar', d: 'Mix de verdes, guacamole, langostinos, mejillones, tomates frescos, zanahoria rallada y aderezo cítrico.', p: 31000 },
      { n: 'Ensalada de temporada', d: 'Mix de verdes, jamón cocido, queso parmesano, tomates frescos, guacamole, choclo en granos, huevo, tiritas de pollo a la plancha y mix de semillas.', p: 29000 },
      { n: 'Ensalada veggie', d: 'Mix de verdes, vegetales salteados, calabaza al horno en cubos, queso parmesano, semillas y croutons.', p: 22000 }
    ]
  },
  {
    id: 'pizzas', grupo: 'cocina', titulo: 'Pizzas',
    nota: 'De 8 porciones.',
    items: [
      { n: 'Especial de jamón', d: 'Salsa de tomate, queso muzzarella, jamón cocido, aceitunas y morrón.', p: 29000 },
      { n: 'Fugazzeta', d: 'Salsa de tomate, queso muzzarella, cebolla caramelizada y aceitunas.', p: 27000 },
      { n: 'Muzzarella', d: 'Salsa de tomate, queso muzzarella, orégano y aceitunas.', p: 26000 },
      { n: 'Napolitana', d: 'Salsa de tomate, queso muzzarella, rodajas de tomates frescos, pesto de albahaca y aceitunas.', p: 27000 },
      { n: 'Rúcula y jamón crudo', d: 'Salsa de tomate, queso muzzarella, jamón crudo, rúcula, aceitunas y queso parmesano.', p: 37000 }
    ]
  },
  {
    id: 'compartir', grupo: 'cocina', titulo: 'Para compartir',
    items: [
      { n: 'Fajitas mixtas (6 tacos)', d: 'Carne y pollo en tiritas, mix de vegetales salteados, guacamole, queso parmesano y salsa criolla.', p: 40000 },
      { n: 'Picada tradicional', d: 'Queso sardo, queso azul, jamón cocido, salame, 2 bastones de muzzarella, 2 empanadas de jamón y queso, aceitunas y porción de papas fritas.', p: 39000 },
      { n: 'Tabla criolla', d: 'Cazuela de papas con cheddar, 2 bastones de muzzarella, 2 empanadas criollas, albóndigas de ternera y mini sándwich de lomo.', p: 42000 },
      { n: 'Tabla de mar', d: 'Dos empanadas de mariscos y queso, montadito de langostinos, mejillones al ajillo, media porción de rabas, papas fritas y milanesa de merluza.', p: 68000 },
      { n: 'Tabla veggie', d: 'Cazuela de papas fritas con cheddar, 2 empanadas caprese, bastones de muzzarella y un mini sándwich veggie (medallón de zanahoria con queso, lechuga, tomates frescos y queso muzzarella).', p: 29000 }
    ]
  },
  {
    id: 'postres', grupo: 'postres', titulo: 'Postres',
    items: [
      { n: 'Brownie de chocolate negro', d: 'Acompañado con helado de crema americana.', p: 9500 },
      { n: 'Brownie de chocolate blanco', d: 'Acompañado con arándanos y helado de crema americana.', p: 9500 },
      { n: 'Crumble de manzana', d: 'Acompañado con helado de crema americana.', p: 12000 },
      { n: 'Flan casero', d: 'Flan casero con dulce de leche.', p: 4500 }
    ]
  },
  {
    id: 'bendita-gula', grupo: 'postres', titulo: 'Postres de Bendita\u00a0Gula', logo: 'assets/img/bendita-gula-oliva.png',
    nota: 'La pastelería de Bendita Gula, en nuestra mesa.',
    items: [
      { n: 'Tiramisú', p: 6000 },
      { n: 'Tarta de ricota', p: 6000 },
      { n: 'Cheesecake NY', d: 'De frutos rojos.', p: 6000 },
      { n: 'Brownie Nutella', p: 7500 },
      { n: 'Brownie Gitano', d: 'Con frutillas frescas, cortadas en el momento.', p: 6000 },
      { n: 'Chocotorta', p: 7000 },
      { n: 'Cookies and Cream', d: 'De Oreo.', p: 6000 },
      { n: 'Carrot cake', p: 6000 },
      { n: 'Lemon pie', p: 5000 },
      { n: 'Tarta Cabsha', p: 4000 },
      { n: 'Torta Matilda', p: 8000 },
      { n: 'Red velvet', p: 7000 },
      { n: 'Lemon Gula', p: 6000 }
    ]
  },
  {
    id: 'sintacc-cocina', grupo: 'sintacc', titulo: 'Cocina sin TACC',
    nota: 'Para celíacos.',
    items: [
      { n: 'Bife de lomo al plato', d: 'Bife de lomo acompañado de ensalada mixta o calabazas al horno en cubos.', p: 28000 },
      { n: 'Ensalada de temporada', d: 'Mix de verdes, huevo, choclo en granos, tiritas de pollo a la plancha, guacamole, zanahoria y tomates frescos.', p: 27000 },
      { n: 'Ensalada de mar', d: 'Mix de verdes, guacamole, mejillones y langostinos, tomates cherry confitados y zanahoria rallada.', p: 27000 },
      { n: 'Suprema a la plancha', d: 'Pechuga de pollo acompañada con ensalada mixta o calabazas al horno en cubos.', p: 25000 },
      { n: 'Wrap de pollo', d: 'Roll de omelette relleno con mix de vegetales, tiritas de pollo a la plancha, acompañado con dips de guacamole y salsa criolla.', p: 27000 },
      { n: 'Vacío al roquefort', d: 'Vacío tiernizado al roquefort con guarnición de ensalada mixta o calabazas al horno en cubos.', p: 35000 },
      { n: 'Suprema con calabaza', p: 22000 },
      { n: 'Lomo clásico', p: 30000 }
    ]
  },
  {
    id: 'sintacc-pastas', grupo: 'sintacc', titulo: 'Pastas sin TACC',
    nota: 'Para celíacos.',
    items: [
      { n: 'Raviolón de jamón y queso', p: 30000 },
      { n: 'Raviolón de ricota y verdura', p: 35000 },
      { n: 'Ñoquis', p: 35000 }
    ]
  },
  {
    id: 'sintacc-cafeteria', grupo: 'sintacc', titulo: 'Cafetería sin TACC',
    nota: 'Para celíacos.',
    items: [
      { n: 'Huevos revueltos', p: 8500 },
      { n: 'Tortita', d: 'Por unidad.', p: 1500 },
      { n: 'Medialuna', d: 'Por unidad.', p: 1700 }
    ]
  },
  {
    id: 'sin-alcohol', grupo: 'bebidas', titulo: 'Limonadas, jugos y aguas',
    items: [
      { n: 'Limonada clásica', p: 7000 },
      { n: 'Limonada menta y jengibre', p: 8000 },
      { n: 'Limonada pura vida', p: 8500 },
      { n: 'Jarra de limonada', p: 15000 },
      { n: 'Jugo de naranja', p: 8500 },
      { n: 'Agua con o sin gas', p: 5000 },
      { n: 'Agua saborizada', p: 5500 },
      { n: 'Agua saborizada', d: '1,5 litros.', p: 8000 },
      { n: 'Gaseosa línea Pepsi', p: 5500 },
      { n: 'Coca-Cola', d: '1,5 litros.', p: 8000 }
    ]
  },
  {
    id: 'cervezas', grupo: 'bebidas', titulo: 'Cervezas',
    items: [
      { n: 'Andes Origen', d: 'Latón de 710 cc.', p: 10000 },
      { n: 'Andes Origen', d: 'Litro.', p: 13000 },
      { n: 'Stella Artois', d: 'Lata de 473 cc.', p: 9500 },
      { n: 'Stella Artois', d: 'Litro.', p: 15000 },
      { n: 'Michelob Ultra', d: '275 cc.', p: 7500 },
      { n: 'Patagonia', d: '730 cc.', p: 14500 },
      { n: 'Stella Artois sin alcohol', d: 'Lata.', p: 6500 }
    ]
  },
  {
    id: 'cocktails', grupo: 'bebidas', titulo: 'Cocktails',
    nota: 'Happy hour: 2 × $15.000.',
    items: [
      { n: 'Gin tonic Heredero' },
      { n: 'Fernet Branca' },
      { n: 'Caipiroska de maracuyá o frutos rojos' },
      { n: 'Fratella' },
      { n: 'Mojito tradicional' },
      { n: 'Hibiscus tonic' },
      { n: 'Gingger julep' },
      { n: 'Amargo julep' },
      { n: 'Cuba libre' }
    ]
  },
  {
    id: 'vinos', grupo: 'bebidas', titulo: 'Vinos y espumantes',
    items: [
      { n: 'Las Perdices', d: 'Por copa.', p: 8500 },
      { n: 'Las Perdices Brut Rosé', d: 'Espumante.', p: 22000 },
      { n: 'Chandon Extra Brut', d: 'Espumante.', p: 60000 },
      { n: 'Azul Malbec', p: 19000 },
      { n: 'Azul Sauvignon Blanc', p: 21000 },
      { n: 'Azul Reserva Malbec', p: 75000 },
      { n: 'Emilia Malbec', p: 25000 },
      { n: 'Emilia Dulce Natural', p: 25000 },
      { n: 'Benjamín Malbec', p: 22000 },
      { n: 'Nieto Senetiner Malbec', p: 27000 }
    ]
  }
];
window.CARTA_FILTROS = [
  { id: 'todo', t: 'Todo' },
  { id: 'cafeteria', t: 'Cafetería' },
  { id: 'desayunos', t: 'Desayunos y meriendas' },
  { id: 'menu', t: 'Menús' },
  { id: 'cocina', t: 'Cocina' },
  { id: 'postres', t: 'Postres' },
  { id: 'sintacc', t: 'Sin TACC' },
  { id: 'bebidas', t: 'Bebidas' }
];
