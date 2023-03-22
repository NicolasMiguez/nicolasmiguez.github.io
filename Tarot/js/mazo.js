let cartas = [
  {
    id: "1",
    nombre: "El Mago",
    descripcion:
      "Es sinónimo del viejo sabio, que se remonta en línea directa a la figura del hechicero de la sociedad primitiva.",
    imagen: "img/cartas/01.jpg",
    valor: 1,
  },
  {
    id: "2",
    nombre: "La Sacerdotisa",
    descripcion:
      "Expresa la sabiduría, la meditación y la reflexión interior, es una mujer sabia y práctica que domina a la perfección las leyes por las cuales se rige el universo.",
    imagen: "img/cartas/02.jpg",
    valor: -1,
  },
  {
    id: "3",
    nombre: "La Emperatriz",
    descripcion:
      "Representante de la fortaleza femenina, sexualmente atractiva al tiempo que poderosa, la Emperatriz es usualmente asociada con el arquetipo de la Reina en las diferentes culturas.",
    imagen: "img/cartas/03.jpg",
    valor: 1,
  },
  {
    id: "4",
    nombre: "El Emperador",
    descripcion:
      "Representa el control autoritario mediante la inteligencia. Poder mundano, capacidad, confianza, riqueza, estabilidad, autoridad, espirita indomable, padre, hermano, esposo, convicción.",
    imagen: "img/cartas/04.jpg",
    valor: -1,
  },
  {
    id: "5",
    nombre: "El Hierofante",
    descripcion:
      "Es el mediador entre lo mundano y lo divino. Es un puente entre la iluminación interna y la vida externa. Representa todas las estructuras que defienden sistemas de creencias.",
    imagen: "img/cartas/05.jpg",
    valor: 1,
  },
  {
    id: "6",
    nombre: "Los Enamorados",
    descripcion:
      "Generalmente representa la elección de un camino en lugar de otro, la encrucijada que requiere una decisión radical ya que cualquier rumbo tomado implicará dejar otra oportunidad atrás.",
    imagen: "img/cartas/06.jpg",
    valor: -1,
  },
  {
    id: "7",
    nombre: "El Carro",
    descripcion:
      "Representa el control de la mente humana sobre las pasiones animales y el instinto, o más esotéricamente, el Yo Superior sobre los bajos egos y agregados psicológicos.",
    imagen: "img/cartas/07.jpg",
    valor: 1,
  },
  {
    id: "8",
    nombre: "La Justicia",
    descripcion:
      "Significa el sostén de la fuerza moral e integridad: equidad, sensatez, moderación, virtud virginidad, satisfacción por los éxitos alcanzados.",
    imagen: "img/cartas/08.jpg",
    valor: -1,
  },
  {
    id: "9",
    nombre: "El Ermitaño",
    descripcion:
      "Representa la introspección, la meditación en solitario, la necesidad de autoconocimiento, de retiro del mundo para entender mejor lo aprendido y asimilarlo.",
    imagen: "img/cartas/09.jpg",
    valor: 1,
  },
  {
    id: "10",
    nombre: "La Rueda de la Fortuna",
    descripcion:
      "Representa la Buena suerte, el karma, los ciclos de vida, el destino, un punto de inflexión, cambios venideros significativos.",
    imagen: "img/cartas/10.jpg",
    valor: -1,
  },
  {
    id: "11",
    nombre: "La Fuerza",
    descripcion:
      "Simboliza que la voluntad que se antepone a cualquier problema, para encauzarlo y solucionarlo.",
    imagen: "img/cartas/11.jpg",
    valor: 1,
  },
  {
    id: "12",
    nombre: "El Colgado",
    descripcion:
      "Se asocia con el autosacrificio y la paciencia ante las adversidades. Con el esfuerzo tesonero que requiere cualquier empresa difícil de llevar a cabo y cualquier causa noble.",
    imagen: "img/cartas/12.jpg",
    valor: -1,
  },
  {
    id: "13",
    nombre: "La Muerte",
    descripcion:
      "no representa literalmente la muerte física y no necesariamente es un vaticinio negativo. La Muerte presenta el cambio, el fin de un ciclo y el resurgimiento de otro.",
    imagen: "img/cartas/13.jpg",
    valor: 1,
  },
  {
    id: "14",
    nombre: "La Templanza",
    descripcion:
      "Invita a tomar aire y pausar antes de actuar, a buscar el punto intermedio en el que los opuestos desaparecen para ser solo uno.",
    imagen: "img/cartas/14.jpg",
    valor: -1,
  },
  {
    id: "15",
    nombre: "El Diablo",
    descripcion:
      "Representa al ser humano que está atado a los deseos materiales, los vicios y la materia. Suele representar el materialismo, la lujuria, la degradación y los excesos.",
    imagen: "img/cartas/15.jpg",
    valor: 1,
  },
  {
    id: "16",
    nombre: "La Torre",
    descripcion:
      "Se asocia con el caos, la catástrofe y la ruina. La Torre de Babel que es destruida por tener cimientos débiles (la arrogancia).",
    imagen: "img/cartas/16.jpg",
    valor: -1,
  },
  {
    id: "17",
    nombre: "La Estrella",
    descripcion:
      "Significa un periodo de descanso y renovación para ti. Esta renovación puede ser spiritual, física o ambas.",
    imagen: "img/cartas/17.jpg",
    valor: 1,
  },
  {
    id: "18",
    nombre: "La Luna",
    descripcion:
      "Se asocia con la entidad atómica desconocida, la seguridad en la oscuridad y con el asiento del alma y con la eternidad. Lo que ocultas o te ocultan, pero siguen ahí.",
    imagen: "img/cartas/18.jpg",
    valor: -1,
  },
  {
    id: "19",
    nombre: "El Sol",
    descripcion:
      "Se considera positiva. Se dice que refleja felicidad, satisfacción, vitalidad, confianza en uno mismo y éxito",
    imagen: "img/cartas/19.jpg",
    valor: 1,
  },
  {
    id: "20",
    nombre: "El Juicio",
    descripcion:
      "Simboliza la autoevaluación, el despertar, la renovación, el propósito, la reflexión y la perdición.",
    imagen: "img/cartas/20.jpg",
    valor: -1,
  },
  {
    id: "21",
    nombre: "El Mundo",
    descripcion:
      "Representa el final de un ciclo de vida, una pausa en la vida antes del próximo gran ciclo que comienza con el loco. La figura es masculina y femenina, arriba y abajo.",
    imagen: "img/cartas/21.jpg",
    valor: 1,
  },
  {
    id: "22",
    nombre: "El Loco",
    descripcion:
      "Es quien va perdido y sin rumbo; se trata de una criatura que parece no vivir en la realidad; una criatura a quien nadie toma en serio y que vaga de un lado a otro.",
    imagen: "img/cartas/22.jpg",
    valor: -1,
  },
];
