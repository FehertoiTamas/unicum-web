import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  es: {
    translation: {
      nav: {
        products: "Productos",
        cocktails: "Cócteles",
        story: "Historia",
        why: "¿Por qué Unicum?",
        contact: "Contacto",
      },
      hero: {
        eyebrow: "El licor herbal premium de Hungría",
        title: "Descubra",
        titleBrand: "UNICUM",
        subtitle:
          "Más de 230 años de tradición europea, elaborado con más de 40 hierbas y especias seleccionadas. Una experiencia única, pronto disponible en el Perú.",
        cta: "Ver productos",
        ctaContact: "Más información",
        since: "Desde 1790 · Budapest, Hungría",
      },
      stats: {
        year: "Año de fundación",
        herbs: "Hierbas & especias",
        tradition: "Años de tradición",
        variants: "Expresiones únicas",
      },
      story: {
        label: "Historia & Herencia",
        title: "Un legado europeo de más de dos siglos",
        p1: "Unicum nació en 1790 en Budapest, cuando el Dr. József Zwack creó la receta secreta por encargo del emperador austriaco José II. Desde entonces, la fórmula original ha permanecido intacta, guardada celosamente por la familia Zwack.",
        p2: "Elaborado con más de 40 hierbas y especias cuidadosamente seleccionadas de todo el mundo, Unicum se distingue por su sabor intenso, complejo y perfectamente equilibrado entre amargor herbal y notas especiadas.",
        p3: "Tradicionalmente disfrutado frío como digestivo de lujo, hoy también es protagonista de la coctelería moderna de autor.",
        quote: '"Ezt kell inni" — Esta es la bebida',
        quoteAuthor: "José II, Emperador de Austria, 1790",
      },
      products: {
        label: "La Colección",
        title: "Cinco expresiones, un solo legado",
        abv: "% vol.",
        perfect: "Ideal para",
        items: {
          original: {
            name: "Unicum Original",
            tagline: "El clásico húngaro",
            desc: "La receta original sin cambios desde 1790. Un licor herbal de profundidad excepcional con notas amargas, especiadas y un final largo y cálido.",
            traits: [
              "Sabor herbal intenso con notas amargas y especiadas",
              "Receta secreta de más de 200 años con 40+ hierbas",
              "Digestivo premium o base para cócteles sofisticados",
            ],
            perfect: "Restaurantes de alta cocina, bares de autor y hoteles",
          },
          szilva: {
            name: "Unicum Szilva",
            tagline: "La elegancia de la ciruela húngara",
            desc: "Enriquecido con ciruelas secas seleccionadas y madurado sobre una cama de ciruelas. Sabor más suave y aterciopelado, con el alma herbal intacta.",
            traits: [
              "Notas dulces y afrutadas de ciruela con carácter herbal",
              "Más suave y accesible para nuevos consumidores",
              "Excelente para maridajes y digestivo premium",
            ],
            perfect:
              "Restaurantes gourmet, hoteles de lujo y consumidores sofisticados",
          },
          barista: {
            name: "Unicum Barista",
            tagline: "Café y tradición en perfecta armonía",
            desc: "Las notas herbales tradicionales encuentran un elegante carácter de café arábica tostado. La versión moderna y cosmopolita de un clásico.",
            traits: [
              "Aroma intenso de café tostado con final herbal suave",
              "Perfecto para Espresso Martini y creaciones originales",
              "Ideal para bares especializados en coctelería de autor",
            ],
            perfect:
              "Bares de coctelería, restaurantes modernos y hoteles boutique",
          },
          orange: {
            name: "Unicum Orange Bitter",
            tagline: "Un toque cítrico y refrescante",
            desc: "Las notas herbales se fusionan con la frescura natural de la naranja. Contemporáneo, versátil y perfecto para la nueva generación de amantes del licor.",
            traits: [
              "Perfil equilibrado entre amargor herbal y aromas cítricos",
              "Excelente solo con hielo, con tónica o en cócteles innovadores",
            ],
            perfect:
              "Bares, terrazas, hoteles y consumidores que buscan nuevas experiencias",
          },
          riserva: {
            name: "Unicum Riserva",
            tagline: "La máxima expresión — Super Premium",
            desc: "Doble envejecimiento: primero en la barrica más antigua de la destilería, luego en barricas Tokaj. Profundidad y complejidad excepcionales para los más exigentes.",
            traits: [
              "Notas de madera, especias y matices herbales elegantes",
              "Super premium — para los consumidores más refinados",
              "Para disfrutar lentamente como digestivo de lujo",
            ],
            perfect:
              "Restaurantes de alta gastronomía, hoteles cinco estrellas y bares de prestigio",
          },
        },
      },
      why: {
        label: "Propuesta de valor",
        title: "¿Por qué Unicum en su establecimiento?",
        items: [
          {
            icon: "🏆",
            title: "Autenticidad europea",
            desc: "Más de 230 años de historia ininterrumpida. Una marca que ningún otro licor en el mercado peruano puede igualar.",
          },
          {
            icon: "🍸",
            title: "Potencial en coctelería",
            desc: "Cinco expresiones que abren un universo de posibilidades creativas para bartenders y chefs de autor.",
          },
          {
            icon: "🌎",
            title: "Exclusividad en Perú",
            desc: "Unicum aún no está disponible en el mercado peruano. Sea de los primeros en ofrecerlo.",
          },
          {
            icon: "✨",
            title: "Marca de prestigio",
            desc: "Reconocida internacionalmente como símbolo de la destilería húngara y la tradición centroeuropea.",
          },
          {
            icon: "🍽️",
            title: "Experiencia memorable",
            desc: "Proponga a sus clientes un viaje sensorial único con raíces históricas genuinas de más de dos siglos.",
          },
          {
            icon: "💼",
            title: "Distribuidor exclusivo",
            desc: "IN-A Solutions S.A.C. introducirá Unicum en el Perú. Únase a los establecimientos pioneros.",
          },
        ],
      },
      contact: {
        label: "Contacto",
        title: "Únase a los primeros",
        subtitle:
          "Déjenos su email y le informaremos sobre la disponibilidad de Unicum en el Perú.",
        placeholder: "su@email.com",
        cta: "Quiero ser informado",
        success: "¡Gracias! Le contactaremos pronto.",
        disclaimer:
          "Sin spam. Solo información relevante sobre Unicum en Perú.",
        company: "Distribuidor exclusivo en Perú",
      },
      cocktails: {
        label: "Recetario",
        title: "Coctelería Unicum",
        subtitle:
          "Once recetas para descubrir el carácter herbal de Unicum y sus variantes Ciruela, Barista y Naranja.",
        filters: {
          all: "Todos",
          clasico: "Clásico",
          ciruela: "Ciruela",
          barista: "Barista",
          naranja: "Naranja",
        },
        variants: {
          clasico: "Unicum Clásico",
          ciruela: "Unicum Ciruela",
          barista: "Unicum Barista",
          naranja: "Unicum Naranja",
        },
        labels: {
          cup: "Copa",
          ingredients: "Ingredientes",
          preparation: "Preparación",
          disclaimer:
            "Disfruta con moderación. Unicum es un licor de hierbas de origen húngaro.",
        },
        recipes: {
          sour: {
            name: "Unicum Sour",
            tagline: "Cítrico, sedoso y con la amargura clásica al frente.",
            cup: "Vaso corto (tumbler)",
            ingredients: [
              "5 cl de Unicum",
              "2 cl de jugo de limón fresco",
              "1,5 cl de jarabe de goma",
              "1 clara de huevo (opcional, para espuma sedosa)",
            ],
            steps: [
              "Coloca todos los ingredientes en la coctelera sin hielo y agita en seco (dry shake) 10 segundos.",
              "Añade hielo y agita con fuerza otros 15 segundos.",
              "Cuela sobre un vaso con hielo nuevo.",
            ],
          },
          tonic: {
            name: "Unicum & Tonic",
            tagline: "El trago más simple para una primera impresión perfecta.",
            cup: "Vaso alto",
            ingredients: [
              "4 cl de Unicum",
              "Agua tónica, cantidad necesaria",
              "Hielo",
              "1 rodaja de naranja o limón",
            ],
            steps: [
              "Llena el vaso con hielo.",
              "Vierte el Unicum y completa con agua tónica.",
              "Remueve suavemente y decora con la rodaja de cítrico.",
            ],
          },
          mule: {
            name: "Unicum Mule",
            tagline: "El picante del jengibre equilibra el amargor herbal.",
            cup: "Taza de cobre o vaso alto",
            ingredients: [
              "4,5 cl de Unicum",
              "1,5 cl de jugo de lima",
              "Cerveza de jengibre (ginger beer), cantidad necesaria",
              "1 rodaja de lima",
            ],
            steps: [
              "Llena la taza o vaso con hielo.",
              "Agrega el Unicum y el jugo de lima.",
              "Completa con cerveza de jengibre y decora con la rodaja de lima.",
            ],
          },
          unicroni: {
            name: "Unicroni",
            tagline: "Una variación del Negroni con carácter húngaro.",
            cup: "Vaso corto (old fashioned)",
            ingredients: [
              "3 cl de Unicum",
              "3 cl de gin",
              "3 cl de vermut rojo",
              "1 tira de cáscara de naranja",
            ],
            steps: [
              "Llena un vaso mezclador con hielo.",
              "Agrega el Unicum, el gin y el vermut. Remueve 20 segundos.",
              "Cuela sobre un vaso con hielo nuevo y decora con la cáscara de naranja.",
            ],
          },
          espresso: {
            name: "Unicum Espresso",
            tagline:
              "Digestivo y café en una sola copa, ideal para el cierre de cena.",
            cup: "Copa de martini",
            ingredients: [
              "4 cl de Unicum",
              "3 cl de café espresso recién hecho, frío",
              "1 cl de jarabe de goma",
              "3 granos de café, para decorar",
            ],
            steps: [
              "Agrega todos los ingredientes a la coctelera con abundante hielo.",
              "Agita con fuerza 15 segundos hasta que se forme espuma.",
              "Cuela sobre una copa de martini y decora con los granos de café.",
            ],
          },
          ciruelaSour: {
            name: "Unicum Ciruela Sour",
            tagline: "La fruta de la ciruela suaviza el sour clásico.",
            cup: "Vaso corto (tumbler)",
            ingredients: [
              "5 cl de Unicum Ciruela",
              "2 cl de jugo de limón fresco",
              "1 cl de jarabe de goma",
              "1 rodaja de ciruela",
            ],
            steps: [
              "Agita todos los ingredientes con hielo durante 15 segundos.",
              "Cuela sobre un vaso con hielo nuevo.",
              "Decora con la rodaja de ciruela.",
            ],
          },
          ciruelaSpritz: {
            name: "Unicum Ciruela Spritz",
            tagline: "Ligero, frutal y perfecto para el aperitivo.",
            cup: "Copa de vino",
            ingredients: [
              "4 cl de Unicum Ciruela",
              "6 cl de espumante o prosecco",
              "Agua con gas, cantidad necesaria",
              "Menta fresca y 1 rodaja de ciruela",
            ],
            steps: [
              "Llena una copa de vino con hielo.",
              "Vierte el Unicum Ciruela y el espumante.",
              "Completa con agua con gas y decora con menta y ciruela.",
            ],
          },
          baristaMartini: {
            name: "Unicum Barista Espresso Martini",
            tagline: "La variante con café ya lleva el espresso incorporado.",
            cup: "Copa de martini",
            ingredients: [
              "5 cl de Unicum Barista",
              "2 cl de vodka (opcional, para más intensidad)",
              "1 cl de jarabe de goma",
              "3 granos de café, para decorar",
            ],
            steps: [
              "Agrega los ingredientes a la coctelera con hielo abundante.",
              "Agita con fuerza hasta formar espuma, unos 15 segundos.",
              "Cuela sobre una copa de martini y decora con los granos de café.",
            ],
          },
          baristaWhiteRussian: {
            name: "Unicum Barista al estilo White Russian",
            tagline: "Cremoso, intenso y de sobremesa.",
            cup: "Vaso corto (old fashioned)",
            ingredients: [
              "4 cl de Unicum Barista",
              "2 cl de crema de leche",
              "Hielo",
            ],
            steps: [
              "Llena el vaso con hielo.",
              "Vierte el Unicum Barista.",
              "Agrega la crema de leche despacio, por encima, y remueve suavemente.",
            ],
          },
          naranjaSpritz: {
            name: "Unicum Naranja Spritz",
            tagline: "La versión cítrica y ligera, ideal como aperitivo.",
            cup: "Vaso alto",
            ingredients: [
              "4 cl de Unicum Naranja",
              "Agua tónica o soda, cantidad necesaria",
              "Hielo",
              "1 rodaja de naranja y 1 ramita de romero",
            ],
            steps: [
              "Llena el vaso con hielo.",
              "Vierte el Unicum Naranja y completa con tónica o soda.",
              "Decora con la rodaja de naranja y el romero.",
            ],
          },
          naranjaMojito: {
            name: "Unicum Naranja al estilo Mojito",
            tagline: "Fresco, herbal y con un toque cítrico distinto.",
            cup: "Vaso alto",
            ingredients: [
              "5 cl de Unicum Naranja",
              "Media lima, en cuartos",
              "8 hojas de menta fresca",
              "1 cl de jarabe de goma",
              "Agua con gas, cantidad necesaria",
            ],
            steps: [
              "Machaca la lima y la menta en el fondo del vaso junto con el jarabe.",
              "Llena el vaso con hielo picado.",
              "Completa con agua con gas y remueve suavemente.",
            ],
          },
        },
      },
      footer: {
        tagline: "El auténtico sabor de Hungría, pronto en el Perú.",
        rights: "Todos los derechos reservados.",
        distributed: "Distribuido en Perú por",
      },
    },
  },
  en: {
    translation: {
      nav: {
        products: "Products",
        cocktails: "Cocktails",
        story: "Story",
        why: "Why Unicum?",
        contact: "Contact",
      },
      hero: {
        eyebrow: "Hungary's premium herbal liqueur",
        title: "Discover",
        titleBrand: "UNICUM",
        subtitle:
          "Over 230 years of European tradition, crafted with more than 40 carefully selected herbs and spices. A unique experience, coming soon to Peru.",
        cta: "View products",
        ctaContact: "Learn more",
        since: "Since 1790 · Budapest, Hungary",
      },
      stats: {
        year: "Year founded",
        herbs: "Herbs & spices",
        tradition: "Years of tradition",
        variants: "Unique expressions",
      },
      story: {
        label: "History & Heritage",
        title: "A European legacy spanning two centuries",
        p1: "Unicum was born in 1790 in Budapest, when Dr. József Zwack created the secret recipe at the request of Austrian Emperor Joseph II. Since then, the original formula has remained unchanged, carefully guarded by the Zwack family.",
        p2: "Crafted from over 40 herbs and spices carefully sourced from around the world, Unicum is distinguished by its intense, complex, and perfectly balanced flavor — herbal bitterness meets warm spice.",
        p3: "Traditionally enjoyed chilled as a luxury digestif, today it also stars in contemporary craft cocktail culture.",
        quote: '"Ezt kell inni" — This is the drink',
        quoteAuthor: "Joseph II, Emperor of Austria, 1790",
      },
      products: {
        label: "The Collection",
        title: "Five expressions, one legacy",
        abv: "% vol.",
        perfect: "Perfect for",
        items: {
          original: {
            name: "Unicum Original",
            tagline: "The Hungarian classic",
            desc: "The original recipe unchanged since 1790. An herbal liqueur of exceptional depth with bitter, spiced notes and a long, warm finish.",
            traits: [
              "Intense herbal flavor with bitter and spiced notes",
              "Secret recipe of 200+ years with 40+ herbs",
              "Premium digestif or base for sophisticated cocktails",
            ],
            perfect: "Fine dining restaurants, craft bars, and hotels",
          },
          szilva: {
            name: "Unicum Szilva",
            tagline: "The elegance of Hungarian plum",
            desc: "Enriched with selected dried plums and matured on a bed of plums. Smoother and more velvety, with the herbal soul intact.",
            traits: [
              "Sweet, fruity plum notes with herbal character",
              "Smoother and more accessible for new consumers",
              "Excellent for food pairing and as a premium digestif",
            ],
            perfect:
              "Gourmet restaurants, luxury hotels, and sophisticated consumers",
          },
          barista: {
            name: "Unicum Barista",
            tagline: "Coffee and tradition in perfect harmony",
            desc: "Traditional herbal notes meet elegant roasted arabica coffee character. The modern, cosmopolitan version of a classic.",
            traits: [
              "Intense roasted coffee aroma with soft herbal finish",
              "Perfect for Espresso Martini and original creations",
              "Ideal for craft cocktail bars",
            ],
            perfect: "Cocktail bars, modern restaurants, and boutique hotels",
          },
          orange: {
            name: "Unicum Orange Bitter",
            tagline: "A citrusy, refreshing twist",
            desc: "Herbal notes fuse with the natural freshness of orange. Contemporary, versatile, and perfect for the new generation of spirits lovers.",
            traits: [
              "Balanced profile of herbal bitterness and citrus aromas",
              "Great neat on ice, with tonic, or in innovative cocktails",
            ],
            perfect:
              "Bars, terraces, hotels, and consumers seeking new experiences",
          },
          riserva: {
            name: "Unicum Riserva",
            tagline: "The ultimate expression — Super Premium",
            desc: "Double aging: first in the distillery's oldest barrel, then in Tokaj casks. Exceptional depth and complexity for the most discerning palates.",
            traits: [
              "Notes of wood, spice, and elegant herbal nuances",
              "Super premium — for the most refined consumers",
              "Best savored slowly as a luxury digestif",
            ],
            perfect:
              "Fine dining restaurants, five-star hotels, and prestigious bars",
          },
        },
      },
      why: {
        label: "Value proposition",
        title: "Why bring Unicum to your venue?",
        items: [
          {
            icon: "🏆",
            title: "European authenticity",
            desc: "Over 230 years of unbroken history. A brand no other liqueur on the Peruvian market can match.",
          },
          {
            icon: "🍸",
            title: "Cocktail potential",
            desc: "Five expressions that open a universe of creative possibilities for bartenders and chefs.",
          },
          {
            icon: "🌎",
            title: "Exclusivity in Peru",
            desc: "Unicum is not yet available in the Peruvian market. Be among the first to offer it.",
          },
          {
            icon: "✨",
            title: "Prestigious brand",
            desc: "Internationally recognized as a symbol of Hungarian distilling and Central European tradition.",
          },
          {
            icon: "🍽️",
            title: "Memorable experience",
            desc: "Offer your guests a unique sensory journey rooted in over two centuries of genuine history.",
          },
          {
            icon: "💼",
            title: "Exclusive distributor",
            desc: "IN-A Solutions S.A.C. is introducing Unicum to Peru. Join the pioneering establishments.",
          },
        ],
      },
      contact: {
        label: "Contact",
        title: "Join the first ones",
        subtitle:
          "Leave us your email and we will keep you informed about Unicum's availability in Peru.",
        placeholder: "your@email.com",
        cta: "Keep me informed",
        success: "Thank you! We will be in touch soon.",
        disclaimer: "No spam. Only relevant information about Unicum in Peru.",
        company: "Exclusive distributor in Peru",
      },
      cocktails: {
        label: "Recipes",
        title: "Unicum Cocktail Bar",
        subtitle:
          "Eleven recipes to discover Unicum’s herbal character and its Ciruela, Barista, and Orange variations.",
        filters: {
          all: "All",
          clasico: "Classic",
          ciruela: "Plum",
          barista: "Barista",
          naranja: "Orange",
        },
        variants: {
          clasico: "Unicum Classic",
          ciruela: "Unicum Plum",
          barista: "Unicum Barista",
          naranja: "Unicum Orange",
        },
        labels: {
          cup: "Glass",
          ingredients: "Ingredients",
          preparation: "Preparation",
          disclaimer:
            "Enjoy responsibly. Unicum is a herbal liqueur of Hungarian origin.",
        },
        recipes: {
          sour: {
            name: "Unicum Sour",
            tagline:
              "Citrus, silky, and front-loaded with classic bittersweet character.",
            cup: "Short glass (tumbler)",
            ingredients: [
              "5 cl Unicum",
              "2 cl fresh lemon juice",
              "1.5 cl gomme syrup",
              "1 egg white (optional, for a silky foam)",
            ],
            steps: [
              "Add all ingredients to the shaker without ice and dry shake for 10 seconds.",
              "Add ice and shake hard for another 15 seconds.",
              "Strain over fresh ice in a glass.",
            ],
          },
          tonic: {
            name: "Unicum & Tonic",
            tagline: "The simplest serve for a perfect first impression.",
            cup: "Highball glass",
            ingredients: [
              "4 cl Unicum",
              "Tonic water, as needed",
              "Ice",
              "1 orange or lemon slice",
            ],
            steps: [
              "Fill the glass with ice.",
              "Pour in the Unicum and top with tonic water.",
              "Stir gently and garnish with the citrus slice.",
            ],
          },
          mule: {
            name: "Unicum Mule",
            tagline: "Ginger spice balances the herbal bitterness.",
            cup: "Copper mug or highball glass",
            ingredients: [
              "4.5 cl Unicum",
              "1.5 cl lime juice",
              "Ginger beer, as needed",
              "1 lime wheel",
            ],
            steps: [
              "Fill the mug or glass with ice.",
              "Add the Unicum and lime juice.",
              "Top with ginger beer and garnish with the lime wheel.",
            ],
          },
          unicroni: {
            name: "Unicroni",
            tagline:
              "A Negroni variation with a distinctly Hungarian character.",
            cup: "Short glass (old fashioned)",
            ingredients: [
              "3 cl Unicum",
              "3 cl gin",
              "3 cl red vermouth",
              "1 strip of orange peel",
            ],
            steps: [
              "Fill a mixing glass with ice.",
              "Add the Unicum, gin, and vermouth. Stir for 20 seconds.",
              "Strain over fresh ice and garnish with the orange peel.",
            ],
          },
          espresso: {
            name: "Unicum Espresso",
            tagline:
              "Digestive and coffee in one glass, ideal to close a dinner.",
            cup: "Martini glass",
            ingredients: [
              "4 cl Unicum",
              "3 cl freshly made espresso, chilled",
              "1 cl gomme syrup",
              "3 coffee beans, for garnish",
            ],
            steps: [
              "Add all ingredients to the shaker with plenty of ice.",
              "Shake hard for 15 seconds until foamy.",
              "Strain into a martini glass and garnish with coffee beans.",
            ],
          },
          ciruelaSour: {
            name: "Unicum Plum Sour",
            tagline: "Plum fruit softens the classic sour.",
            cup: "Short glass (tumbler)",
            ingredients: [
              "5 cl Unicum Plum",
              "2 cl fresh lemon juice",
              "1 cl gomme syrup",
              "1 plum slice",
            ],
            steps: [
              "Shake all ingredients with ice for 15 seconds.",
              "Strain over fresh ice.",
              "Garnish with the plum slice.",
            ],
          },
          ciruelaSpritz: {
            name: "Unicum Plum Spritz",
            tagline: "Light, fruity, and perfect for an aperitivo.",
            cup: "Wine glass",
            ingredients: [
              "4 cl Unicum Plum",
              "6 cl sparkling wine or prosecco",
              "Sparkling water, as needed",
              "Fresh mint and 1 plum slice",
            ],
            steps: [
              "Fill a wine glass with ice.",
              "Pour in the Unicum Plum and sparkling wine.",
              "Top with sparkling water and garnish with mint and plum.",
            ],
          },
          baristaMartini: {
            name: "Unicum Barista Espresso Martini",
            tagline:
              "The coffee version already carries espresso in the blend.",
            cup: "Martini glass",
            ingredients: [
              "5 cl Unicum Barista",
              "2 cl vodka (optional, for more intensity)",
              "1 cl gomme syrup",
              "3 coffee beans, for garnish",
            ],
            steps: [
              "Add the ingredients to a shaker with plenty of ice.",
              "Shake hard until foamy, about 15 seconds.",
              "Strain into a martini glass and garnish with coffee beans.",
            ],
          },
          baristaWhiteRussian: {
            name: "Unicum Barista White Russian Style",
            tagline: "Creamy, intense, and suited to after-dinner sipping.",
            cup: "Short glass (old fashioned)",
            ingredients: ["4 cl Unicum Barista", "2 cl cream", "Ice"],
            steps: [
              "Fill the glass with ice.",
              "Pour in the Unicum Barista.",
              "Add the cream slowly from above and stir gently.",
            ],
          },
          naranjaSpritz: {
            name: "Unicum Orange Spritz",
            tagline: "A bright, light citrus version, ideal as an aperitivo.",
            cup: "Highball glass",
            ingredients: [
              "4 cl Unicum Orange",
              "Tonic or soda water, as needed",
              "Ice",
              "1 orange slice and 1 rosemary sprig",
            ],
            steps: [
              "Fill the glass with ice.",
              "Pour in the Unicum Orange and top with tonic or soda.",
              "Garnish with the orange slice and rosemary.",
            ],
          },
          naranjaMojito: {
            name: "Unicum Orange Mojito Style",
            tagline: "Fresh, herbal, and with a distinct citrus twist.",
            cup: "Highball glass",
            ingredients: [
              "5 cl Unicum Orange",
              "1/2 lime, cut into quarters",
              "8 fresh mint leaves",
              "1 cl gomme syrup",
              "Sparkling water, as needed",
            ],
            steps: [
              "Muddle the lime and mint with the syrup at the bottom of the glass.",
              "Fill the glass with crushed ice.",
              "Top with sparkling water and stir gently.",
            ],
          },
        },
      },
      footer: {
        tagline: "The authentic taste of Hungary, coming soon to Peru.",
        rights: "All rights reserved.",
        distributed: "Distributed in Peru by",
      },
    },
  },
  hu: {
    translation: {
      nav: {
        products: "Termékek",
        cocktails: "Koktélok",
        story: "Történet",
        why: "Miért Unicum?",
        contact: "Kapcsolat",
      },
      hero: {
        eyebrow: "Magyarország prémium gyógynövény likőrje",
        title: "Fedezze fel az",
        titleBrand: "UNICUM",
        subtitle:
          "Több mint 230 éves európai hagyomány, gondosan válogatott 40+ gyógynövényből és fűszerből készítve. Egyedi élmény, hamarosan elérhető Peruban.",
        cta: "Termékek megtekintése",
        ctaContact: "További információ",
        since: "1790 óta · Budapest, Magyarország",
      },
      stats: {
        year: "Alapítás éve",
        herbs: "Gyógynövény & fűszer",
        tradition: "Év hagyomány",
        variants: "Egyedi kifejezés",
      },
      story: {
        label: "Történelem & Örökség",
        title: "Több mint két évszázados európai örökség",
        p1: "Az Unicum 1790-ben született Budapesten, amikor Dr. Zwack József megalkotta a titkos receptet II. József osztrák császár megbízásából. Azóta az eredeti receptet változatlan formában őrzi a Zwack család.",
        p2: "A világ minden tájáról gondosan válogatott 40+ gyógynövényből és fűszerből készül, amelyek intenzív, összetett és tökéletesen kiegyensúlyozott ízvilágot hoznak létre — kesernyés gyógynövényes jegyek találkoznak meleg fűszerességgel.",
        p3: "Hagyományosan hidegen, prémium digestivként fogyasztják, de ma már a modern koktélkultúra egyik főszereplője is.",
        quote: '"Ezt kell inni"',
        quoteAuthor: "II. József, Osztrák Császár, 1790",
      },
      products: {
        label: "A Kollekcio",
        title: "Öt kifejezés, egy örökség",
        abv: "% vol.",
        perfect: "Ideális",
        items: {
          original: {
            name: "Unicum Original",
            tagline: "A magyar klasszikus",
            desc: "1790 óta változatlan eredeti recept. Kivételes mélységű gyógynövény likőr kesernyés, fűszeres jegyekkel és hosszú, meleg utóízzel.",
            traits: [
              "Intenzív gyógynövényes íz kesernyés és fűszeres jegyekkel",
              "200+ éves titkos recept 40+ gyógynövénnyel",
              "Prémium digestiv vagy kifinomult koktélok alapja",
            ],
            perfect: "Fine dining éttermek, bárák és hotelek",
          },
          szilva: {
            name: "Unicum Szilva",
            tagline: "A magyar szilva eleganciája",
            desc: "Válogatott aszalt szilvával gazdagítva, szilvacipón érlelve. Lágyabb, bársonyosabb ízvilág, megőrzött gyógynövényes lélekkel.",
            traits: [
              "Édes, gyümölcsös szilvás jegyek gyógynövényes karakterrel",
              "Lágyabb és hozzáférhetőbb az új fogyasztóknak",
              "Kiváló ételkísérőként és prémium digestivként",
            ],
            perfect: "Gourmet éttermek, luxusszállodák és igényes fogyasztók",
          },
          barista: {
            name: "Unicum Barista",
            tagline: "Kávé és hagyomány tökéletes harmóniában",
            desc: "A hagyományos gyógynövényes jegyek elegáns, pörkölt arabica kávé karakterrel találkoznak. A klasszikus modern, kozmopolita verziója.",
            traits: [
              "Intenzív pörkölt kávé aroma lágy gyógynövényes utóízzel",
              "Tökéletes Espresso Martinihez és eredeti alkotásokhoz",
              "Ideális koktélbároknak",
            ],
            perfect: "Koktélbárok, modern éttermek és boutique hotelek",
          },
          orange: {
            name: "Unicum Orange Bitter",
            tagline: "Egy frissítő citrusos fordulat",
            desc: "A gyógynövényes jegyek a narancs természetes frissességével olvadnak össze. Kortárs, sokoldalú és tökéletes az új generációs szeszkedvelőknek.",
            traits: [
              "Kiegyensúlyozott gyógynövényes keserűség és citrusos aromák",
              "Kiváló jéggel, tonikkal vagy innovatív koktélokban",
            ],
            perfect:
              "Bárok, teraszok, hotelek és új élményeket kereső fogyasztók",
          },
          riserva: {
            name: "Unicum Riserva",
            tagline: "A végső kifejezés — Super Premium",
            desc: "Kettős érlelés: először a pálinkafőzde legrégebbi hordójában, majd Tokaji hordókban. Kivételes mélység és komplexitás a legjobb ízlésűeknek.",
            traits: [
              "Fa, fűszer és elegáns gyógynövényes árnyalatok",
              "Super prémium — a leigényesebb fogyasztóknak",
              "Lassan élvezhető, luxus digestivként",
            ],
            perfect:
              "Fine dining éttermek, ötcsillagos hotelek és presztízsbárok",
          },
        },
      },
      why: {
        label: "Értékajánlat",
        title: "Miért hozza be az Unicumot vendéglátóhelyére?",
        items: [
          {
            icon: "🏆",
            title: "Európai hitelesség",
            desc: "Több mint 230 év megszakítatlan történelem. Egy márka, amelyet egyetlen másik peruani piacon lévő likőr sem tud felülmúlni.",
          },
          {
            icon: "🍸",
            title: "Koktél potenciál",
            desc: "Öt kifejezés, amely a bartenderek és séfek számára végtelen kreatív lehetőségeket nyit meg.",
          },
          {
            icon: "🌎",
            title: "Kizárólagosság Peruban",
            desc: "Az Unicum még nem elérhető a peruai piacon. Legyen az elsők között, aki kínálja.",
          },
          {
            icon: "✨",
            title: "Presztízsmárka",
            desc: "Nemzetközileg elismert a magyar pálinkafőzés és a közép-európai hagyomány szimbólumaként.",
          },
          {
            icon: "🍽️",
            title: "Emlékezetes élmény",
            desc: "Kínáljon vendégeinek egyedi érzéki utazást, amelynek gyökerei több mint két évszázados hiteles történelembe nyúlnak.",
          },
          {
            icon: "💼",
            title: "Kizárólagos forgalmazó",
            desc: "Az IN-A Solutions S.A.C. bevezeti az Unicumot Peruban. Csatlakozzon az úttörő vendéglátóhelyekhez.",
          },
        ],
      },
      contact: {
        label: "Kapcsolat",
        title: "Legyen az elsők között",
        subtitle:
          "Adja meg email-címét, és értesítjük az Unicum peruai elérhetőségéről.",
        placeholder: "email@cime.com",
        cta: "Értesítést kérek",
        success: "Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.",
        disclaimer:
          "Spam nélkül. Csak releváns információ az Unicum Peru bevezetéséről.",
        company: "Kizárólagos forgalmazó Peruban",
      },
      cocktails: {
        label: "Receptkönyv",
        title: "Unicum koktélkészítés",
        subtitle:
          "Tizenegy recept, amivel felfedezheti az Unicum gyógynövényes karakterét, valamint a szilva, barista és narancs variációkat.",
        filters: {
          all: "Összes",
          clasico: "Klasszikus",
          ciruela: "Szilva",
          barista: "Barista",
          naranja: "Narancs",
        },
        variants: {
          clasico: "Unicum Klasszikus",
          ciruela: "Unicum Szilva",
          barista: "Unicum Barista",
          naranja: "Unicum Narancs",
        },
        labels: {
          cup: "Pohár",
          ingredients: "Hozzávalók",
          preparation: "Elkészítés",
          disclaimer:
            "Mértékkel élvezd. Az Unicum egy magyar eredetű gyógynövényes likőr.",
        },
        recipes: {
          sour: {
            name: "Unicum Sour",
            tagline: "Citrusos, selymes és klasszikus keserű karakterrel.",
            cup: "Rövid pohár (tumbler)",
            ingredients: [
              "5 cl Unicum",
              "2 cl friss citromlé",
              "1,5 cl gumi szirup",
              "1 tojásfehérje (opcionális, selymes habhoz)",
            ],
            steps: [
              "Az összes hozzávalót a shakerbe tedd anélkül, hogy jég lenne, és 10 másodpercig szárazon rázz.",
              "Adj hozzá jeget, majd 15 másodpercig erősen rázz.",
              "Szűrd át friss jégre egy pohárba.",
            ],
          },
          tonic: {
            name: "Unicum & Tonic",
            tagline: "A legegyszerűbb változat a tökéletes első benyomáshoz.",
            cup: "Magas pohár",
            ingredients: [
              "4 cl Unicum",
              "Tonic víz, amennyit szükséges",
              "Jég",
              "1 narancs vagy citrom szelet",
            ],
            steps: [
              "Töltsd meg a poharat jéggel.",
              "Öntsd bele az Unicumot, majd töltsd fel tonic vízzel.",
              "Finoman keverd össze, és díszítsd a citrus szelettel.",
            ],
          },
          mule: {
            name: "Unicum Mule",
            tagline:
              "A gyömbér fűszeres karaktere kiegyensúlyozza a gyógynövényes keserűséget.",
            cup: "Réz mug vagy magas pohár",
            ingredients: [
              "4,5 cl Unicum",
              "1,5 cl lime lé",
              "Gyömbérsör, amennyit szükséges",
              "1 lime karika",
            ],
            steps: [
              "Töltsd meg a mugot vagy poharat jéggel.",
              "Adj hozzá Unicumot és lime levet.",
              "Töltsd fel gyömbérsörrel, és díszítsd lime karikával.",
            ],
          },
          unicroni: {
            name: "Unicroni",
            tagline: "Egy Negroni-variáció egyértelműen magyar karakterrel.",
            cup: "Rövid pohár (old fashioned)",
            ingredients: [
              "3 cl Unicum",
              "3 cl gin",
              "3 cl vörös vermut",
              "1 narancshéj csík",
            ],
            steps: [
              "Tölts egy keverőpoharat jéggel.",
              "Adj hozzá Unicumot, gint és vermutot. 20 másodpercig keverd.",
              "Szűrd át friss jégre, és díszítsd a narancshéjjal.",
            ],
          },
          espresso: {
            name: "Unicum Espresso",
            tagline:
              "Digestív és kávé egy pohárban, ideális egy vacsora lezárására.",
            cup: "Martini pohár",
            ingredients: [
              "4 cl Unicum",
              "3 cl frissen készült, hideg espresso",
              "1 cl gumi szirup",
              "3 kávészem, díszítéshez",
            ],
            steps: [
              "Az összes hozzávalót a shakerbe tedd sok jéggel.",
              "15 másodpercig erősen rázz, amíg habos lesz.",
              "Szűrd martini pohárba, és díszítsd kávészemekkel.",
            ],
          },
          ciruelaSour: {
            name: "Unicum Szilva Sour",
            tagline: "A szilva gyümölcs lágyítja a klasszikus sourt.",
            cup: "Rövid pohár (tumbler)",
            ingredients: [
              "5 cl Unicum Szilva",
              "2 cl friss citromlé",
              "1 cl gumi szirup",
              "1 szilva szelet",
            ],
            steps: [
              "15 másodpercig rázz minden hozzávalót jéggel.",
              "Szűrd át friss jégre.",
              "Díszítsd szilva szelettel.",
            ],
          },
          ciruelaSpritz: {
            name: "Unicum Szilva Spritz",
            tagline: "Könnyű, gyümölcsös és tökéletes aperitivként.",
            cup: "Boros pohár",
            ingredients: [
              "4 cl Unicum Szilva",
              "6 cl pezsgőbor vagy prosecco",
              "Szódavíz, amennyit szükséges",
              "Friss menta és 1 szilva szelet",
            ],
            steps: [
              "Tölts egy borospoharat jéggel.",
              "Öntsd bele az Unicum Szilvát és a pezsgőbort.",
              "Töltsd fel szódavízzel, és díszítsd mentával és szilvával.",
            ],
          },
          baristaMartini: {
            name: "Unicum Barista Espresso Martini",
            tagline: "A kávés változat már magában hordozza az espresszót.",
            cup: "Martini pohár",
            ingredients: [
              "5 cl Unicum Barista",
              "2 cl vodka (opcionális, több intenzitásért)",
              "1 cl gumi szirup",
              "3 kávészem, díszítéshez",
            ],
            steps: [
              "Az összes hozzávalót a shakerbe tedd sok jéggel.",
              "15 másodpercig erősen rázz, amíg habos lesz.",
              "Szűrd martini pohárba, és díszítsd kávészemekkel.",
            ],
          },
          baristaWhiteRussian: {
            name: "Unicum Barista White Russian stílusban",
            tagline: "Krémes, intenzív, és a vacsora utáni élvezéshez ideális.",
            cup: "Rövid pohár (old fashioned)",
            ingredients: ["4 cl Unicum Barista", "2 cl tejszín", "Jég"],
            steps: [
              "Töltsd meg a poharat jéggel.",
              "Öntsd bele az Unicum Barista.",
              "Adj hozzá tejszínt lassan felülről, és finoman keverd össze.",
            ],
          },
          naranjaSpritz: {
            name: "Unicum Narancs Spritz",
            tagline:
              "Egy fényes, könnyű citrusos változat, ideális aperitivként.",
            cup: "Magas pohár",
            ingredients: [
              "4 cl Unicum Narancs",
              "Tonic vagy szódavíz, amennyit szükséges",
              "Jég",
              "1 narancs szelet és 1 rozmaring ág",
            ],
            steps: [
              "Töltsd meg a poharat jéggel.",
              "Öntsd bele az Unicum Narancsot, majd töltsd fel tonic vagy szódavízzel.",
              "Díszítsd narancs szelettel és rozmaringgal.",
            ],
          },
          naranjaMojito: {
            name: "Unicum Narancs Mojito stílusban",
            tagline: "Friss, gyógynövényes és különös citrusos karakterrel.",
            cup: "Magas pohár",
            ingredients: [
              "5 cl Unicum Narancs",
              "1/2 lime, negyedekre vágva",
              "8 friss menta levél",
              "1 cl gumi szirup",
              "Szódavíz, amennyit szükséges",
            ],
            steps: [
              "A pohár aljába törd össze a lime-ot és a mentát a sziruppal.",
              "Töltsd meg a poharat tört jeget tartalmazó jéggel.",
              "Töltsd fel szódavízzel, és finoman keverd össze.",
            ],
          },
        },
      },
      footer: {
        tagline: "Magyarország autentikus ízvilága, hamarosan Peruban.",
        rights: "Minden jog fenntartva.",
        distributed: "Peru-i forgalmazó:",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

export default i18n;
