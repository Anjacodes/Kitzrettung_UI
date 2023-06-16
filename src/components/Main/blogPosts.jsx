import artikel from '/src/assets/Wochenspiegel.png';
import artikel2 from '/src/assets/Rehkitzrettung_artikel2.jpg';

const posts = [
  {
    id: 1,
    title: 'BEITRAG IM KÖLNER WOCHENSPIEGEL',
    imageURL: `${artikel}`,
    info: {
      dateCreated: '19. April 2023',
    },
    shortText: 'Rehkitzrettung: Eine Herausforderung für Landwirte und Jäger gleichermaßen. Ein neuer Verein unterstützt ehrenamtlich.',
    fullText: '',
  },
  {
    id: 2,
    title: 'BEITRAG IM EUSKIRCHENER WOCHENBLATT',
    imageURL: `${artikel2}`,
    info: {
      dateCreated: '7. Juni 2023',
    },
    shortText: 'Gemeinsam zum Ziel. Landwirt, Jagdausübungsberechtigter und Rehkitzrettungsverein arbeiten effektiv zusammen.',
    fullText: '',
  }
];

export default posts;
