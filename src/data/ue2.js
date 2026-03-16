const UE2 = {
  id: "ue2",
  code: "LNG 1262",
  titre: "SIC & Communication",
  couleur: "#06B6D4",
  emoji: "📡",
  matieres: [
    {
      id: "ue2-m1",
      titre: "Introduction aux SIC",
      emoji: "📻",
      cours: [
        {
          id: 1,
          titre: "Les 5 questions de Lasswell",
          contenu: `Le modèle de Lasswell se résume en 5 questions :\n\n1. WHO (Qui) → le destinateur\n2. Says What (Dit quoi) → le message\n3. In which Channel (À travers quel canal) → le canal/code\n4. To Whom (À qui) → le destinataire\n5. With What Effect (Avec quel effet) → l'effet`
        },
        {
          id: 2,
          titre: "Redondance et entropie",
          contenu: `La redondance : c'est ce qui est prédictible ou conventionnel dans un message.\nL'entropie : c'est l'opposé de la redondance.\n\n• La redondance est le résultat d'une grande prédictibilité.\n• L'entropie est le résultat d'une faible prédictibilité.\n\nUn message entropique = faible prédictibilité = grande quantité d'informations.\nUn message redondant = grande prédictibilité = quantité réduite d'informations.\n\nLa redondance n'est pas simplement utile en communication, elle est absolument vitale.\n\nLes 2 fonctions de la redondance : Utilité et Vitalité.\n\nEx : Le bonjour de X est redondant (prévisible). Le silence de Y est entropique (imprévisible).\n\nEx : Dans un jet de dé, on peut avoir 6 incertitudes.\nSi le numéro 5 n'est pas pris en compte → 5 possibilités.`
        },
        {
          id: 3,
          titre: "Différence entre communication et information",
          contenu: `La différence entre le processus de communication et celui de l'information est la rétroaction ou le feedback.\n\n• Processus d'information : transfert d'informations d'un point A à un point B. Pas de feedback.\n• Processus de communication : échange avec rétroaction (feedback).`
        },
        {
          id: 4,
          titre: "Les facteurs et fonctions du langage (Jakobson)",
          contenu: `Chaque facteur de la communication correspond à une fonction :\n\n• Destinateur → Fonction Émotive\n• Contexte → Fonction Référentielle\n• Destinataire → Fonction Conative\n• Message → Fonction Poétique\n• Contact → Fonction Phatique\n• Canal/Code → Fonction Métalinguistique`
        },
        {
          id: 5,
          titre: "Types de communication",
          contenu: `Communication verticale : reçoit l'information sans réaction. Absence de feedback.\nUtilisée par les autorités de haut niveau et les médias.\n\nCommunication horizontale : reçoit l'information suivie d'une réaction. Présence de feedback.\nC'est l'échange, le partage de sens entre interlocuteurs.`
        },
      ],
      flashcards: [
        { id: 1, question: "Quelles sont les 5 questions de Lasswell ?", reponse: "Who / Says What / In which Channel / To Whom / With What Effect" },
        { id: 2, question: "Qu'est-ce que la redondance ?", reponse: "Ce qui est prédictible ou conventionnel dans un message. Résultat d'une grande prédictibilité." },
        { id: 3, question: "Qu'est-ce que l'entropie ?", reponse: "L'opposé de la redondance. Résultat d'une faible prédictibilité." },
        { id: 4, question: "Quelles sont les 2 fonctions de la redondance ?", reponse: "Utilité et Vitalité." },
        { id: 5, question: "Quelle est la différence entre communication et information ?", reponse: "La communication inclut une rétroaction (feedback), l'information non." },
        { id: 6, question: "Quelle fonction Jakobson associe-t-il au destinateur ?", reponse: "La fonction émotive." },
        { id: 7, question: "Quelle fonction Jakobson associe-t-il au message ?", reponse: "La fonction poétique." },
        { id: 8, question: "Quelle fonction Jakobson associe-t-il au contact ?", reponse: "La fonction phatique." },
        { id: 9, question: "Quelle fonction Jakobson associe-t-il au contexte ?", reponse: "La fonction référentielle." },
        { id: 10, question: "Qu'est-ce que la communication verticale ?", reponse: "Communication sans feedback. L'information va dans un seul sens." },
        { id: 11, question: "Qu'est-ce que la communication horizontale ?", reponse: "Communication avec feedback. Échange entre interlocuteurs." },
        { id: 12, question: "Combien d'incertitudes dans un jet de dé ?", reponse: "6 incertitudes." },
        { id: 13, question: "Le bonjour de X est-il redondant ou entropique ?", reponse: "Redondant (prévisible)." },
        { id: 14, question: "Le silence de Y est-il redondant ou entropique ?", reponse: "Entropique (imprévisible)." },
      ],
      quiz: [
        { id: 1, question: "La redondance est le résultat d'une grande prédictibilité.", type: "vrai_faux", reponse: true },
        { id: 2, question: "Quelle est la différence entre communication et information ?", type: "qcm", options: ["Le canal utilisé", "La rétroaction (feedback)", "Le nombre d'interlocuteurs", "La langue utilisée"], reponse: 1 },
        { id: 3, question: "Quelle fonction Jakobson associe-t-il au destinataire ?", type: "qcm", options: ["Émotive", "Poétique", "Conative", "Phatique"], reponse: 2 },
        { id: 4, question: "La communication verticale inclut un feedback.", type: "vrai_faux", reponse: false },
        { id: 5, question: "Combien d'incertitudes dans un jet de dé ?", type: "qcm", options: ["4", "5", "6", "7"], reponse: 2 },
        { id: 6, question: "Le bonjour de X dans un contexte habituel est entropique.", type: "vrai_faux", reponse: false },
        { id: 7, question: "La fonction référentielle est liée au :", type: "qcm", options: ["Message", "Contexte", "Destinateur", "Contact"], reponse: 1 },
        { id: 8, question: "L'entropie est le résultat d'une grande prédictibilité.", type: "vrai_faux", reponse: false },
      ]
    },
    {
      id: "ue2-m2",
      titre: "Introduction à la communication pour le Développement",
      emoji: "🌍",
      cours: [
        {
          id: 1,
          titre: "Clarification des concepts clés",
          contenu: `Communication (approche transmissive) : transfert d'informations d'un point A à un point B. Approche verticale utilisée par les autorités et les médias.\n\nCommunication (approche interactionniste) : échange et partage de sens entre interlocuteurs. Communication horizontale avec feedback.\n\nDéveloppement : long processus de changement d'ordre quantitatif et qualitatif intervenant dans la société au plan politique, économique, social, culturel et scientifique menant vers le bien-être individuel et collectif.\n\nDéveloppement humain : type de développement qui permet de vivre longtemps et en bonne santé, d'acquérir du savoir et d'avoir accès aux ressources nécessaires pour jouir d'un niveau de vie convenable.\n\nDéveloppement humain durable : satisfaire les besoins des générations actuelles sans compromettre ceux des générations futures. Il est centré sur l'homme (développement de l'homme par l'homme et pour les hommes).`
        },
        {
          id: 2,
          titre: "Piliers et conditions du développement humain durable",
          contenu: `Les 3 piliers du développement humain durable :\n1. Domaine économique\n2. Domaine écologique\n3. Domaine social\n\nLes 3 conditions fondamentales :\n1. Vivre longtemps\n2. Atteindre un bon niveau d'éducation\n3. Disposer d'un niveau de vie décent`
        },
        {
          id: 3,
          titre: "Liens entre communication et développement",
          contenu: `1. Lien communication et développement :\nUtilisation de façon planifiée et organisée des techniques et moyens de communication (médiatiques et non médiatiques) pour promouvoir le développement à travers un changement d'attitude et/ou de comportement en diffusant l'information nécessaire et en suscitant la participation active et consciente de tous les acteurs.\n\n2. Lien communication et développement humain durable :\nVecteur des techniques managériales qui s'assignent pour objectif de faire respecter, protéger, sauvegarder, améliorer et léguer en bon état le monde vivant et sa diversité aux générations futures.`
        },
        {
          id: 4,
          titre: "Les sigles importants",
          contenu: `• C4D = Communication pour le développement\n• C4DH = Communication pour le développement humain\n• C4DHD = Communication pour le développement humain durable\n• CDSDHD = Communication pour le développement du sous-développement humain durable\n• CDHD = Communication pour le développement humain durable`
        },
      ],
      flashcards: [
        { id: 1, question: "Définir le développement", reponse: "Long processus de changement quantitatif et qualitatif dans la société au plan politique, économique, social, culturel et scientifique vers le bien-être individuel et collectif." },
        { id: 2, question: "Définir le développement humain", reponse: "Type de développement qui permet de vivre longtemps, en bonne santé, d'acquérir du savoir et d'avoir accès aux ressources nécessaires." },
        { id: 3, question: "Définir le développement humain durable", reponse: "Satisfaire les besoins des générations actuelles sans compromettre ceux des générations futures." },
        { id: 4, question: "Quels sont les 3 piliers du développement humain durable ?", reponse: "Domaine économique, écologique et social." },
        { id: 5, question: "Quelles sont les 3 conditions fondamentales du développement humain durable ?", reponse: "1. Vivre longtemps\n2. Bon niveau d'éducation\n3. Niveau de vie décent" },
        { id: 6, question: "Que signifie C4D ?", reponse: "Communication pour le développement." },
        { id: 7, question: "Que signifie C4DHD ?", reponse: "Communication pour le développement humain durable." },
        { id: 8, question: "Quelle est l'approche transmissive de la communication ?", reponse: "Transfert d'informations d'un point A à un point B. Approche verticale sans feedback." },
        { id: 9, question: "Quelle est l'approche interactionniste de la communication ?", reponse: "Échange et partage de sens entre interlocuteurs. Communication horizontale avec feedback." },
        { id: 10, question: "Quels sont les 2 types de développement ?", reponse: "Développement humain et développement humain durable." },
      ],
      quiz: [
        { id: 1, question: "Le développement humain durable satisfait les besoins des générations actuelles sans compromettre ceux des générations futures.", type: "vrai_faux", reponse: true },
        { id: 2, question: "Quels sont les 3 piliers du développement humain durable ?", type: "qcm", options: ["Économique, Social, Culturel", "Économique, Écologique, Social", "Politique, Économique, Social", "Éducatif, Économique, Écologique"], reponse: 1 },
        { id: 3, question: "C4D signifie :", type: "qcm", options: ["Communication 4 Dimensions", "Communication pour le Développement", "Canal pour le Développement", "Communication Durable"], reponse: 1 },
        { id: 4, question: "L'approche transmissive de la communication inclut un feedback.", type: "vrai_faux", reponse: false },
        { id: 5, question: "Combien de conditions fondamentales pour le développement humain durable ?", type: "qcm", options: ["2", "3", "4", "5"], reponse: 1 },
        { id: 6, question: "Le développement humain durable est centré sur :", type: "qcm", options: ["L'économie", "L'écologie", "L'homme", "La technologie"], reponse: 2 },
        { id: 7, question: "CDHD signifie Communication pour le Développement Humain Durable.", type: "vrai_faux", reponse: true },
        { id: 8, question: "Le développement est un processus uniquement économique.", type: "vrai_faux", reponse: false },
      ]
    }
  ]
}

export default UE2