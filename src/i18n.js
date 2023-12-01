import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    debug: true,
    fallbackLng: "es",
    interpolation: { escapeValue: false },
    resources: {
      en: {
        translation: {
          header: {
            a: "Home",
            b: "Who are we?",
            c: "Our coffee",
            d: "Our seals",
            e: "Our brands",
          },
          footer: {
            contactUs: "Contact us",
            followUs: "Follow us:",
            phone: "+[53] **** ****-**",
            email: "clientes@cubacafe.cu",
            copyright: {
              a: "Roasting and Marketing Company CUBACAFÉ 2023 ©️",
              b: "All rights reserved."
            } ,
          },
          pages: {
            home: {
              carousel: {
                header: {
                  a: "Café",
                  b: "Cohíba",
                  c: "Atmosphere"
                },
                content: "For lovers of the coffee with style!",
              },
              knowUs: {
                header: {
                  a: "From tradition and experience.",
                  b: "Cuban coffee... All class and taste!"
                },
                content: "Who doesn't enjoy a cup of foaming and aromatic coffee, while sharing with family and friends, chatting, working or simply drinking it at the end of a meal? Coffee is friend and company, it is an excuse and reason, and pleasantly addictive. Coffee is coffee! There are some very delicious ones… But have you tried Cuban coffee? Have you tasted a hot and fragrant \"buchito\"? Many countries could consider coffee their national drink. Cuba is one of them, thanks to the coffee tradition of our Master Roasters and the fertile land of this Island bathed by the Caribbean.",
              },
              ourCoffee: {
                header: "Our coffee",
                content: "Heir to a rich tradition that began in the 18th century, when the first plantations of the fruit arose and thousands of French settlers displaced from Haiti arrived on the Island...",
              },
              brands: {
                header: "Cubacafé and its brands",
              }
            },
            whoAreWe: {
              header: "Who are we?",
              content: "The Coffee Roasting and Marketing Company, CUBACAFÉ, created in 2011, is a 100% state capital entity, belonging to the Ministry of the Food Industry (MINAL), with 14 roasting plants throughout the country that produce for the market. domestic and export, which makes us a leader in the production and marketing of roasted coffee beans and ground in Cuba, both of national origin and of other origins.",
            },
            ourCoffee: {
              header: "Our coffee",
              content: {
                a: "Heir to a rich tradition that began in the 18th century, when the first plantations of the fruit arose and thousands of French settlers displaced from Haiti arrived on the Island, CUBACAFÉ has ​​today become an example of a Cuban state entity, through a production process with advanced technologies, motivated workers and capable managers.",
                b: "To give visibility to Cuban coffee, CUBACAFÉ began a strategy of differentiation of its brands - based on the quality/price relationship -, whose identifier has supported national productions, especially those destined for export and international tourism, with its recognized coffees. prestige—in the roasted, ground and grain variants—, under the Café Cubano and Toeste Cubano seals of origin.",
                c: "Our products are supported by the correct application of the technological and food safety principles established in international legal regulations. CUBACAFÉ has ​​a management system based on the prerequisites and Hazard Analysis and Critical Control Points (HACCP) program, recognized by the National State Inspection Office.",
              },
            },
            scc: {
              header: "Seal Café Cubano",
              content: "This seal corresponds to an identity mark of origin, exclusive for gourmet coffees produced by Cuban Master Roasters, and that meet the requirements of the origin of the product and agricultural processes under the concepts of ecological sustainability and respect for the characteristics in the benefit and industrial processes.",
            },
            stc: {
              header: "Seal Tueste Cubano",
              content: "This seal identifies the way in which the beans are processed and groups the coffees that are associated with the Cuban style: full-bodied cup, deep aroma and intense flavor that lasts, which can come from Cuba and other origins, in addition to being made with mixtures of Arabica or Arabica and Robusta. The seal defines a guaranteed quality, which evokes in its aspects the organoleptic characteristics of Cuban-style coffee: a full-bodied cup, deep aroma and intense flavor that lasts.",
            },
            cohiba: {
              category: "Premium Gourmet Coffee",
              header: "For stylish coffee lovers!",
              content: "Licensed by Habanos, S.A., it is part of the diversification of the Cohíba brand of Premium cigars, as an ideal complement to the luxury that both evoke. As a unique coffee in its class, with beans from screen 18, it presides over the pyramid of gourmet coffees due to its very high quality. It is an elegant and sober coffee par excellence, ideal for people of both sexes and high purchasing power, who identify with the brand profile: success. It is made with select grains that come only from the Escambray mountains, in the center of the Island. It has a very good aroma, completely clean, soft... Its characteristic fragrance is appreciated and recognized. The Cohíba Atmosphere is, simply, unmistakable and delicious.",
              format: "Format: 250 g",
            },
            montecristo: {
              category: "Premium Gourmet Coffee",
              header: "All class and taste!",
              content: "Licensed by Habanos, S.A., it is part of the diversification of the Premium cigar brand, Montecristo. It is a coffee of very high quality and low production volume. Its excellent aroma and exquisite flavor, together with careful and artisanal preparation, make it a true legend, which like the Count that gives it its name and the Word Deleggend, emphasize the concept of adventure, energy, vitality and adventure that it evokes. This is how this coffee was born, which offers the taste experiences of a one-of-a-kind gourmet, thanks to its cultivation in the shade, the ideal height, the composition of the soil, the climate, temperature and rainfall regime of the mountains of the Sierra Maestra, in eastern Cuba, along with the wisdom that the farmers of the area have received from generation to generation. Without a doubt, a delicious drink worthy of the most demanding and refined tastes.",
              format: "Format: 250 g",
            },
            guantanamera: {
              category: "Premium Coffee",
              header: "Something different!",
              content: "Inspired by the women of Guantánamo, in eastern Cuba, its unique flavor evokes a harmonious and exquisite combination of aroma, body and acidity in the cup. Their beans, unlike our gourmets, come from Arabica coffee selections of various origins and their Cubanness stands out for the choice of raw materials and the excellent roasting. Its typically Cuban flavor is given by the traditional roasting and grinding method, which convinces the most refined palate. The name of this signature coffee is associated with the famous Guajira Guantanamera tune, which has gone around the world.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
            serrano: {
              category: "Premium Economic Coffee",
              header: "Genuine from the montain!",
              content: "It emerged in 1994 and quickly became a strong brand, conceived for the taste preferences of traditional Cubans. It is a tribute to Cuban mountain coffees, with its density, great body, fragrance, medium to good, clean aroma, and a long-lasting, astringent, sometimes more intense flavor. Although Serrano Selecto uses coffees from other origins in its production, its organoleptic qualities have not been affected and it continues to be preferred thanks to the blends and roasting style of our Master Roasters. It is currently made up of Arabica blends and in addition to being grown in the mountains, it has a sieve rating greater than 16.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
            turquino: {
              category: "Premium Economic Coffee",
              header: "Famous since 1789!",
              content: "Emerged in 1995, its name is inspired by the quality of the beans coming from the best coffee plantations in the Sierra Maestra, in the east of the Island, from which it originated. Of medium strength, elegant, refined, with a delicate aroma and subtle flavor, it can be compared to the best coffees in the world. Today it is a tribute to the immense Cuban coffee tradition. Its good body and acidity (although the latter can sometimes be below body), its correct balance and consistency, and its good fragrance define it as an economical, high-class coffee.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
            arriero: {
              category: "Economic Coffee",
              header: "A good creole coffee!",
              content: "This medium-bodied coffee, low acidity, astringent flavor and medium fragrance, was created in 2009, based on blends of natural Arabicas and the unique touch of our Master Roasters, to offer in a cup the closest flavor to the coffee that is prepared in the eastern part of Cuba: a dense infusion, with a strong and bitter flavor, intense due to its high concentration of caffeine, but with little acidity. It represents a recognition to those who, on their mule trail, descend from the mountains to take the coffee to the treatment and processing areas, where the long path from the bean to the cup begins. Special for coffee makers.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
            prodigio: {
              category: "Economic Coffee",
              header: "For combining flavor and salud!",
              content: "This brand is ideal for people who seek the consumption of natural and healthy products, and identify with this unique mixture, enriched with herbal notes of moringa, a plant that has great nutritional potential of vitamins and minerals, with multiple benefits for human health. This herbal coffee is special for coffee makers, made from Arabica beans, with a medium, clean aroma, with a good body and low acidity, an astringent flavor that is sometimes very intense, bitter, with a medium fragrance and free of mineral or vegetable impurities.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
          },
          seals: {
            cafeCubano: "Seal Café Cubano",
            tuesteCubano: "Seal Tueste Cubano",
          },
          brands: {
            cohiba: "Cohíba Atmosphere",
            montecristo: "Montecristo Delegend",
            guantanamera: "Guantánamera", 
            serrano: "Café Serrano", 
            turquino: "Café Turquino",
            arriero: "Café El Arriero",
            prodigio: "Prodigio",
          },
          buttons: {
            seeMore: "View more",
            readMore: "Read more",
            knowWhoWeAre: "Know who we are",
          },
        }
      },
      es: {
        translation: {
          header: {
            a: "Inicio",
            b: "¿Quiénes somos?",
            c: "Nuestro café",
            d: "Nuestros sellos",
            e: "Nuestras marcas",
          },
          footer: {
            contactUs: "Contáctenos",
            followUs: "Síguenos en:",
            phone: "+[53] **** ****-**",
            email: "clientes@cubacafe.cu",
            copyright: {
              a: "Empresa de Torrefacción y Comercialización CUBACAFÉ 2023 ©️",
              b: "Todos los derechos reservados."
            } ,
          },
          pages: {
            home: {
              carousel: {
                header: {
                  a: "Café",
                  b: "Cohiba",
                  c: "Atmosphere"
                },
                content: "¡Para amantes del café con estilo!",
              },
              knowUs: {
                header: {
                  a: "Desde la tradición y la experiencia.",
                  b: "Café cubano... ¡Todo clase y sabor!"
                },
                content: "¿Quién no disfruta una taza de espumeante y aromático café, mientras comparte con familiares y amigos, conversa, trabaja o simplemente lo bebe al finalizar una comida? El café es amigo y compañía, es pretexto y razón, y agradablemente adictivo. ¡El café es el café! Hay algunos muy ricos… ¿Pero usted ha probado el café cubano? ¿Ha saboreado un \"buchito\", caliente y oloroso? Muchos países podrían considerar al café como su bebida nacional. Cuba es uno de ellos, gracias a la tradición cafetalera de nuestros Maestros tostadores y a la fértil tierra de esta Isla bañada por el Caribe.",
              },
              ourCoffee: {
                header: "Nuestro Café",
                content: "Heredera de una rica tradición que comenzó en el siglo xviii, cuando surgieron las primeras plantaciones del fruto y arribaron a la Isla miles de colonos franceses desplazados de Haití...",
              },
              brands: {
                header: "Cubacafé y sus marcas",
              }
            },
            whoAreWe: {
              header: "¿Quiénes somos?",
              content: "La Empresa de Torrefacción y Comercialización de Café, CUBACAFÉ, creada en 2011, es una entidad de capital 100 % estatal, perteneciente al Ministerio de la Industria Alimentaría (MINAL), con 14 torrefactoras a lo largo de todo el país que producen para el mercado interno y la exportación, lo que nos convierte en líder de producción y comercialización de café tostado en grano y molido en Cuba, tanto de procedencia nacional como de otros orígenes.",
            },
            ourCoffee: {
              header: "Nuestro café",
              content: {
                a: "Heredera de una rica tradición que comenzó en el siglo xviii, cuando surgieron las primeras plantaciones del fruto y arribaron a la Isla miles de colonos franceses desplazados de Haití, CUBACAFÉ se ha convertido hoy en ejemplo de entidad estatal cubana, mediante un proceso de producción con tecnologías de avanzada, trabajadores motivados y directivos capaces.",
                b: "Para dar visibilidad al café cubano, CUBACAFÉ comenzó una estrategia de diferenciación de sus marcas —basada en la relación calidad/precio—, cuyo identificador ha respaldado las producciones nacionales, especialmente las destinadas a la exportación y el turismo internacional, con sus cafés de reconocido prestigio —en las variantes tostado, molido y en grano—, bajo los sellos de origen Café Cubano y Tueste Cubano.",
                c: "Nuestros productos están avalados por la correcta aplicación de los principios tecnológicos y de inocuidad alimentaria establecidos en las normativas legales a nivel internacional. CUBACAFÉ dispone de un sistema de gestión basado en el programa de prerrequisitos y Análisis de Peligros y Puntos Críticos de Control (HACCP), reconocido por la Oficina Nacional de Inspección Estatal.",
              },
            },
            scc: {
              header: "Sello Café Cubano",
              content: "Este sello corresponde a una marca de identidad de origen, exclusiva para los cafés gourmet que producen los Maestros tostadores cubanos, y que cumplen con los requisitos de origen del producto y los procesos agrícolas bajo los conceptos de sostenibilidad ecológica y respeto a las características en los procesos de beneficio e industrial.",
            },
            stc: {
              header: "Sello Tueste Cubano",
              content: "Este sello identifica el modo en que se procesan los granos y agrupa a los cafés que se asocian al estilo cubano: taza de gran cuerpo, profundo aroma e intenso sabor que perdura, los cuales pueden proceder de Cuba y otros orígenes, además de ser elaborados con mezclas de Arábica o de Arábica y Robusta. El sello define una calidad garantizada, que evoca en sus vertientes las características organolépticas del café estilo cubano: taza de gran cuerpo, profundo aroma e intenso sabor que perdura.",
            },
            cohiba: {
              category: "Café Premium Gourmet",
              header: "¡Para amantes del café con estilo!",
              content: "Con licencia de Habanos, S.A., forma parte de la diversificación de la marca Cohíba de tabacos Premium, como un complemento ideal del lujo que ambos evocan. Como café único en su clase, con granos provenientes de la criba 18, preside la pirámide de los cafés gourmet por su muy alta calidad. Resulta un café elegante y sobrio por excelencia, ideal para personas de ambos sexos y elevado poder adquisitivo, que se identifican con el perfil de la marca: el éxito. Es elaborado con granos selectos que proceden únicamente de las montañas del Escambray, al centro de la Isla. Posee muy buen aroma, completamente limpio, suave… Su fragancia característica es apreciada y reconocida. El Cohíba Atmosphere es, sencillamente, inconfundible y delicioso.",
              format: "Format: 250 g",
            },
            montecristo: {
              category: "Café Premium Gourmet",
              header: "¡Todo clase y sabor!",
              content: "Con licencia de Habanos, S.A., forma parte de la diversificación de la marca Premium de puros, Montecristo. Es una café de muy alta calidad y poco volumen de producción. Su excelente aroma y exquisito sabor, unidos a una esmerada y artesanal elaboración, lo convierten en una verdadera leyenda, que como el Conde que le da nombre y la Palabra Deleggend, enfatizan el concepto de aventura, energía, vitalidad y aventura que evoca. Así nace este café, que ofrece las experiencias gustativas de un gourmet único en su clase, gracias a su cultivo en la sombra, la altura ideal, la composición del suelo, el clima, la temperatura y el régimen de lluvias de las montañas de la Sierra Maestra, en el oriente cubano, junto a la sabiduría que los campesinos de la zona han recibido de generación en generación. Sin dudas, una deliciosa bebida digna de los gustos más exigentes y refinados.",
              format: "Format: 250 g",
            },
            guantanamera: {
              category: "Café Premium",
              header: "¡Algo diferente!",
              content: "Inspirado en las mujeres de Guantánamo, al oriente de Cuba, su sabor único evoca una armoniosa y exquisita combinación de aroma, cuerpo y acidez en la taza. Sus granos, a diferencia de nuestros gourmets, proceden de selecciones de café Arábica de diversos orígenes y su cubanía destaca por la elección de las materias primas y el excelente tueste. Su sabor, típicamente cubano está dado por el método tradicional de tostado y molido, que convence al más refinado paladar. El nombre de este café de autor se asocia con la famosa tonada Guajira Guantanamera, que ha dado la vuelta al mundo.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
            serrano: {
              category: "Café Premium Económica",
              header: "¡Genuino de montaña!",
              content: "Surgió en 1994 y rápidamente se convirtió en una fuerte marca, concebida para la preferencia gustativa del cubano tradicional. Resulta un homenaje a los cafés cubanos de montaña, con su densidad, gran cuerpo, fragancia, aroma mediano a bueno, limpio, y de un sabor duradero, astringente, a veces más intenso. Aunque el Serrano Selecto usa en su elaboración cafés de otras procedencias, sus cualidades organolépticas no han sido afectadas y continúa en la preferencia gracias a las mezclas y el estilo del tueste de nuestros Maestros tostadores. Actualmente está formado por mezclas de Arábica y además de ser cultivado en la montaña, posee una criba superior a 16.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
            turquino: {
              category: "Café Premium Económica",
              header: "¡Famoso desde 1789!",
              content: "Surgido en 1995, su nombre está inspirado en la calidad de los granos provenientes de las mejores plantaciones cafetaleras de la Sierra Maestra, al oriente de la Isla, que le dieron origen. De fortaleza media, elegante, refinado, con delicado aroma y sutil sabor, puede compararse a los mejores cafés del mundo.  Hoy resulta un homenaje a la inmensa tradición cafetalera cubana. Su buen cuerpo y acidez —aunque esta última, a veces, puede estar por debajo del cuerpo—, su correcto balance y consistencia, y su buena fragancia lo definen como un café económico de clase superior.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
            arriero: {
              category: "Café Económica",
              header: "¡Un buen café criollo!",
              content: "Este café de cuerpo medio, acidez baja, sabor astringente y mediana fragancia, fue creado en 2009, basado en mezclas de Arábicas naturales y el toque único de nuestros Maestros Tostadores, para ofrecer en taza el sabor más cercano al café que se prepara en la zona oriental de Cuba: una infusión densa, de sabor fuerte y amargo, intensa por su concentración alta de cafeína, pero con poca acidez. Representa un reconocimiento a quienes en su arria de mulos descienden desde las montañas para llevar el café a las zonas de tratamiento y beneficio, donde se inicia el largo camino del grano a la taza. Especial para cafeteras.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
            prodigio: {
              category: "Café Económica",
              header: "¡Para combinar salud y sabor!",
              content: "Esta marca es ideal para personas que buscan el consumo de productos naturales y sanos, y se identifiquen con esta mezcla única, enriquecida con notas herbales de moringa, planta que posee gran potencial nutritivo de vitaminas y minerales, de múltiples beneficios para la salud humana. Este café herbal resulta especial para cafeteras, elaborado a partir de granos de Arábica, de aroma mediano, limpio, con cuerpo bueno y acidez baja, sabor astringente a veces muy intenso, amargo, de fragancia mediana y libre de impurezas minerales o vegetales.",
              format: "Format 125 g/ 250 g/ 500 g/ 1000 g",
            },
          },
          seals: {
            cafeCubano: "Sello Café Cubano",
            tuesteCubano: "Sello Tueste Cubano",
          },
          brands: {
            cohiba: "Cohíba Atmosphere",
            montecristo: "Montecristo Delegend",
            guantanamera: "Guantánamera", 
            serrano: "Café Serrano", 
            turquino: "Café Turquino",
            arriero: "Café El Arriero",
            prodigio: "Prodigio",
          },
          buttons: {
            seeMore: "Ver más",
            readMore: "Leer más",
            knowWhoWeAre: "Conoce quiénes somos",
          },
        }
      }
    },
  });

export default i18n;
