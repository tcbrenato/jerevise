const UE6 = {
  id: "ue6",
  code: "LNG 1266",
  titre: "Théorie & Usages des TIC",
  couleur: "#F97316",
  emoji: "💻",
  matieres: [
    {
      id: "ue6-m1",
      titre: "Théorie et Usages des TIC",
      emoji: "📡",
      disponible: false,
      cours: [],
      flashcards: [],
      quiz: []
    },
    {
      id: "ue6-m2",
      titre: "Introduction aux TIC",
      emoji: "🖥️",
      disponible: true,
      cours: [
        {
          id: 1,
          titre: "Définition des TIC",
          contenu: `TIC : Technologie de l'Information et de la Communication.\n\nLes TIC sont un ensemble de technologies utilisées pour traiter, modifier et échanger de l'information, plus spécifiquement les données numériques.\n\nLes TIC désignent aussi tout le secteur d'activité économique lié aux TIC.`
        },
        {
          id: 2,
          titre: "Les 3 facteurs contribuant aux TIC",
          contenu: `Les 3 domaines contribuant aux TIC :\n\n1. Les télécommunications\n2. L'audiovisuel\n3. L'informatique`
        },
        {
          id: 3,
          titre: "L'arrivée des TIC et ses conséquences",
          contenu: `L'arrivée des TIC a bouleversé les modes de tradition de circulation des informations :\n\n• Un partage plus facile des informations.\n• Une diffusion plus rapide de l'information.\n• Une communication quasi instantanée.`
        },
        {
          id: 4,
          titre: "Les secteurs concernés par les TIC",
          contenu: `• Les secteurs des équipements de l'informatique : HARD, câble, ordinateurs.\n• Les secteurs de la télécommunication et réseaux informatiques.\n• Le secteur de la microélectronique et ses composants.\n• Le secteur des services informatiques et des logiciels : SOFT.\n• Le secteur du commerce électronique et des médias électroniques.\n• Le secteur du multimédia.\n\nMULTIMÉDIA : ensemble des contenus numériques (image, son et vidéo).`
        },
        {
          id: 5,
          titre: "Caractéristiques et exemples de services TIC",
          contenu: `Les caractéristiques liées aux TIC :\n\n• Audiovisuel\n• Télécommunication\n• Le commerce électronique\n• Multimédia\n\nExemples de services informatiques :\n• WhatsApp\n• TikTok\n• Facebook`
        },
        {
          id: 6,
          titre: "Avantages des TIC",
          contenu: `• Accès facile à l'information.\n• Faciliter le partage de l'information.\n• Facilite la communication interpersonnelle, de groupe et de masse.\n• Permettent une hausse de la productivité du travail pour la saisie de l'information et donc une baisse des coûts.\n• Délocalisation des produits.\n• Rapidité dans la prise des décisions grâce à la collecte des informations.\n• Grâce aux TIC on peut communiquer autrement en ciblant de façon plus pertinente les clients potentiels.\n• Au niveau commercial : les TIC ont permis la création de nouveaux circuits de production et distribution grâce à l'extension du marché potentiel.`
        },
        {
          id: 7,
          titre: "Inconvénients des TIC",
          contenu: `• Le coût du matériel, des logiciels, de la maintenance et du renouvellement du matériel.\n• Le sur-équipement par rapport aux besoins réels et sous-utilisation des logiciels.\n• Le coût du rythme de renouvellement des conventions (18 mois) alors que la durée minimale d'utilisation (amortissement) est de 5 à 7 ans.\n• La rentabilité est difficilement quantifiable.`
        },
      ],
      flashcards: [
        { id: 1, question: "Que signifie TIC ?", reponse: "Technologie de l'Information et de la Communication." },
        { id: 2, question: "Quels sont les 3 facteurs contribuant aux TIC ?", reponse: "1. Les télécommunications\n2. L'audiovisuel\n3. L'informatique" },
        { id: 3, question: "Qu'est-ce que le multimédia ?", reponse: "L'ensemble des contenus numériques : image, son et vidéo." },
        { id: 4, question: "Citez 3 conséquences de l'arrivée des TIC.", reponse: "1. Partage plus facile des informations\n2. Diffusion plus rapide\n3. Communication quasi instantanée" },
        { id: 5, question: "Citez 3 avantages des TIC.", reponse: "Accès facile à l'information, partage facilité, hausse de la productivité." },
        { id: 6, question: "Citez 2 inconvénients des TIC.", reponse: "Coût élevé du matériel et rentabilité difficilement quantifiable." },
        { id: 7, question: "Qu'est-ce que HARD dans le contexte des TIC ?", reponse: "Le matériel physique de l'ordinateur (hardware)." },
        { id: 8, question: "Qu'est-ce que SOFT dans le contexte des TIC ?", reponse: "Le système d'exploitation et les logiciels (software)." },
        { id: 9, question: "Citez 3 exemples de services informatiques.", reponse: "WhatsApp, TikTok, Facebook." },
        { id: 10, question: "Quelle est la durée minimale d'amortissement du matériel TIC ?", reponse: "5 à 7 ans." },
        { id: 11, question: "Quel est le rythme de renouvellement des conventions TIC ?", reponse: "18 mois." },
        { id: 12, question: "Les TIC facilitent quel type de communication ?", reponse: "Communication interpersonnelle, de groupe et de masse." },
        { id: 13, question: "Citez 4 secteurs concernés par les TIC.", reponse: "Équipements informatiques, télécommunication, microélectronique, services informatiques/logiciels." },
        { id: 14, question: "Comment les TIC impactent-ils le commerce ?", reponse: "Ils permettent la création de nouveaux circuits de production et distribution grâce au commerce électronique." },
        { id: 15, question: "Les TIC désignent aussi quel secteur ?", reponse: "Tout le secteur d'activité économique lié aux TIC." },
      ],
      quiz: [
        { id: 1, question: "TIC signifie :", type: "qcm", options: ["Technologie Informatique et Communication", "Technologie de l'Information et de la Communication", "Traitement de l'Information et Communication", "Technique Informatique et Calcul"], reponse: 1 },
        { id: 2, question: "Combien de facteurs contribuent aux TIC ?", type: "qcm", options: ["2", "3", "4", "5"], reponse: 1 },
        { id: 3, question: "Le multimédia regroupe image, son et vidéo.", type: "vrai_faux", reponse: true },
        { id: 4, question: "La durée minimale d'amortissement du matériel TIC est de 18 mois.", type: "vrai_faux", reponse: false },
        { id: 5, question: "Les TIC facilitent uniquement la communication interpersonnelle.", type: "vrai_faux", reponse: false },
        { id: 6, question: "HARD désigne :", type: "qcm", options: ["Les logiciels", "Le matériel physique", "Le réseau", "Les données"], reponse: 1 },
        { id: 7, question: "Lequel n'est PAS un service informatique cité dans le cours ?", type: "qcm", options: ["WhatsApp", "TikTok", "Facebook", "Twitter"], reponse: 3 },
        { id: 8, question: "L'arrivée des TIC a rendu la communication plus lente.", type: "vrai_faux", reponse: false },
        { id: 9, question: "Les TIC permettent une baisse des coûts grâce à :", type: "qcm", options: ["La délocalisation", "La hausse de productivité", "Le commerce électronique", "Toutes ces réponses"], reponse: 3 },
        { id: 10, question: "Le secteur du multimédia fait partie des secteurs concernés par les TIC.", type: "vrai_faux", reponse: true },
      ]
    }
  ]
}
export default UE6