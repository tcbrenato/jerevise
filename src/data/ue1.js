const UE1 = {
  id: "ue1",
  code: "LNG 1261",
  titre: "Phonétique & Pathologie",
  couleur: "#6C63FF",
  emoji: "🗣️",
  matieres: [
    {
      id: "ue1-m1",
      titre: "Phonétique corrective",
      emoji: "🔤",
      cours: [
        {
          id: 1,
          titre: "Les types de contact entre langues",
          contenu: `Quand une langue première rencontre une langue seconde, il existe 3 types de contact :\n\n1. Contact informel ou spontané : l'apprentissage se fait dans le milieu, sous le bain linguistique.\n2. Contact formel ou imposé : la langue seconde est apprise dans une situation d'enseignement.\n3. Contact mixte : enseignement en classe ET bain linguistique en dehors. C'est le meilleur moyen pour apprendre une langue.`
        },
        {
          id: 2,
          titre: "Problèmes de prononciation des locuteurs béninois",
          contenu: `Les principaux problèmes rencontrés :\n\n• Réinterprétation des voyelles orales dans le contexte des consonnes nasales.\n  Ex : pour [mamã] on prononce [māmā]\n\n• Réinterprétation des consonnes de la L2 inconnues dans la L1.\n  Ex : [Riz] se prononce [hli]\n\n• Interprétation des groupes de consonnes.\n  Ex : [kt] dans docteur, [ksp] dans express\n\n• Interprétation du "h" français : "hache", "haut" se prononcent [a] et [o]\n\n• Interprétation des syllabes fermées : les locuteurs béninois insèrent une voyelle.\n  Ex : "sac" se prononce [saki]`
        },
        {
          id: 3,
          titre: "Langue écrite vs langue parlée",
          contenu: `3 points résument cette différence :\n\n1. Difficultés dans l'écriture : le principe 1son = 1lettre n'est presque jamais respecté.\n2. La langue orale peut diverger selon les individus et les groupes sociaux.\n3. La langue orale évolue très vite alors que l'écriture évolue très peu.`
        },
        {
          id: 4,
          titre: "Origines des difficultés orthographiques du français",
          contenu: `• Le calque sur l'orthographe latine.\n  Ex : audition = [odisjõ] ; eau = [o]\n\n• La non adaptation de l'orthographe à l'évolution de la langue parlée.\n  Ex : lundi = [lœdi] ou [lidi]\n\n• Absence de logique dans la graphie des mots.\n  Ex : mourir (un seul r) et nourrir (deux r)\n\n• Les règles d'accord (ent, e muet, s).`
        },
        {
          id: 5,
          titre: "Le ton et l'intonation",
          contenu: `Le ton : hauteur musicale qui porte en général sur une syllabe.\n\n• Ton modulé : réalisé avec la combinaison d'au moins deux registres.\n• Ton ponctuel : réalisé par un seul registre.\n• Le niveau de hauteur du ton s'appelle le Registre.\n\nL'intonation : variation de hauteur musicale qui ne porte pas sur une syllabe mais sur un énoncé.\n\nFonctions de l'intonation : syntaxique et expressive.`
        },
      ],
      flashcards: [
        { id: 1, question: "Quels sont les 3 types de contact entre une L1 et une L2 ?", reponse: "1. Contact informel/spontané\n2. Contact formel/imposé\n3. Contact mixte (le meilleur)" },
        { id: 2, question: "Qu'est-ce qu'une syllabe fermée ?", reponse: "Une syllabe qui se termine par une consonne (C-V-C)." },
        { id: 3, question: "Qu'est-ce qu'une syllabe ouverte ?", reponse: "Une syllabe qui se termine par une voyelle (C-V)." },
        { id: 4, question: "Définir le ton", reponse: "Hauteur musicale qui porte en général sur une syllabe." },
        { id: 5, question: "Définir l'intonation", reponse: "Variation de hauteur musicale qui porte sur un énoncé, pas sur une syllabe." },
        { id: 6, question: "Différence entre ton et intonation ?", reponse: "Le ton porte sur une syllabe. L'intonation porte sur un énoncé." },
        { id: 7, question: "Quelles sont les origines des difficultés orthographiques du français ?", reponse: "1. Calque sur l'orthographe latine\n2. Non adaptation à l'évolution orale\n3. Absence de logique dans la graphie\n4. Règles d'accord" },
        { id: 8, question: "Qu'est-ce qu'un ton modulé ?", reponse: "Un ton réalisé avec la combinaison d'au moins deux registres." },
        { id: 9, question: "Qu'est-ce qu'un ton ponctuel ?", reponse: "Un ton réalisé par un seul registre." },
        { id: 10, question: "Quelles sont les fonctions de l'intonation ?", reponse: "Fonction syntaxique et fonction expressive." },
      ],
      quiz: [
        { id: 1, question: "Quel est le meilleur type de contact pour apprendre une langue ?", type: "qcm", options: ["Contact informel", "Contact formel", "Contact mixte", "Aucun contact"], reponse: 2 },
        { id: 2, question: "Une syllabe est fermée lorsqu'elle se termine par une consonne.", type: "vrai_faux", reponse: true },
        { id: 3, question: "Le niveau de hauteur du ton s'appelle :", type: "qcm", options: ["L'intonation", "Le registre", "La mélodie", "Le timbre"], reponse: 1 },
        { id: 4, question: "Un ton est dit modulé quand il est réalisé par un seul registre.", type: "vrai_faux", reponse: false },
        { id: 5, question: "Les fonctions de l'intonation sont :", type: "qcm", options: ["Syntaxique et expressive", "Phonétique et grammaticale", "Orale et écrite", "Tonale et mélodique"], reponse: 0 },
      ]
    },
    {
      id: "ue1-m2",
      titre: "Pathologie du langage",
      emoji: "🧠",
      cours: [
        {
          id: 1,
          titre: "Catégories de pathologie (Ducrot & Todorov)",
          contenu: `3 grandes catégories :\n\n1. Troubles d'énonciation\n2. Troubles de la parole\n3. Troubles du langage\n\nDisciplines impliquées : linguistique, neurolinguistique, neurologie, neuroanatomie, neurophysiologie, neurobiologie, neuroimagerie, informatique, anthropologie, psycholinguistique, psychologie, psychiatrie, chimie, science cognitive, intelligence artificielle.`
        },
        {
          id: 2,
          titre: "Troubles spécifiques du langage",
          contenu: `• Logorrhée : "diarrhée verbale" — le malade parle beaucoup de façon incontrôlée.\n• Verbigération : logorrhée incohérente.\n• Graphorrhée : "diarrhée de l'écriture".\n• Dysarthries : troubles du contrôle musculaire de la parole.\n• Dysphonies : troubles de la voix.\n• Nasonnement : altération de la voix dans les fausses nasales.\n• Bégaiement idiopathique : cause inconnue.\n\nLe bégaiement disparaît lors de : la lecture à haute voix et le chant.`
        },
        {
          id: 3,
          titre: "Aphasies et cerveau",
          contenu: `Aphasie de Wernicke : fautes d'ordre sémantique.\nAphasie de Broca : fautes d'ordre grammatical.\n\nPoints de vue sur cerveau/langage :\n- Le localisme\n- L'associationnisme\n- La localisation dynamique de la fonction\n- Les théories holistiques\n- Les théories évolutionnistes\n\n5 thèmes majeurs en neurolinguistique :\n1. La latéralisation\n2. L'autre hémisphère\n3. Autres lieux du langage\n4. L'inné & l'acquis\n5. Compétence & performance`
        },
        {
          id: 4,
          titre: "Types d'erreurs et paraphasies",
          contenu: `4 types d'erreurs :\nA. Erreur d'omission\nB. Erreur de substitution\nC. Erreur d'adjonction\nD. Erreur de transposition\n\nEx : au lieu de dire /bot/, un malade dit /bolt/ → Erreur d'adjonction (C)\n\nParaphasies :\n• Paraphasie verbale : concerne les mots.\n• Paraphasie phonémique : concerne les sons.`
        },
      ],
      flashcards: [
        { id: 1, question: "Quelles sont les 3 catégories de pathologie selon Ducrot & Todorov ?", reponse: "1. Troubles d'énonciation\n2. Troubles de la parole\n3. Troubles du langage" },
        { id: 2, question: "Qu'est-ce que la logorrhée ?", reponse: "Une 'diarrhée verbale' : le patient parle beaucoup de façon incontrôlée." },
        { id: 3, question: "Différence entre logorrhée et verbigération ?", reponse: "La verbigération est une logorrhée incohérente." },
        { id: 4, question: "Qu'est-ce que la graphorrhée ?", reponse: "La 'diarrhée de l'écriture'." },
        { id: 5, question: "Différence entre aphasie de Wernicke et de Broca ?", reponse: "Wernicke → fautes sémantiques. Broca → fautes grammaticales." },
        { id: 6, question: "Qu'est-ce qu'un bégaiement idiopathique ?", reponse: "Un bégaiement dont la cause est encore inconnue." },
        { id: 7, question: "Dans quelles situations le bégaiement disparaît-il ?", reponse: "Lors de la lecture à haute voix et du chant." },
        { id: 8, question: "Qu'est-ce que le nasonnement ?", reponse: "L'altération de la voix lorsqu'elle retentit dans les fausses nasales." },
        { id: 9, question: "Qu'est-ce que les dysarthries ?", reponse: "Troubles causés par l'altération du contrôle musculaire des mécanismes de la parole." },
        { id: 10, question: "Différence entre paraphasie verbale et phonémique ?", reponse: "Verbale → concerne les mots. Phonémique → concerne les sons." },
      ],
      quiz: [
        { id: 1, question: "L'aphasie de Broca est caractérisée par des fautes d'ordre sémantique.", type: "vrai_faux", reponse: false },
        { id: 2, question: "Au lieu de dire /bot/, un malade dit /bolt/. Quel type d'erreur ?", type: "qcm", options: ["Erreur d'omission", "Erreur de substitution", "Erreur d'adjonction", "Erreur de transposition"], reponse: 2 },
        { id: 3, question: "Combien de catégories de pathologie Ducrot et Todorov distinguent-ils ?", type: "qcm", options: ["2", "3", "4", "5"], reponse: 1 },
        { id: 4, question: "Un bégaiement idiopathique est un bégaiement dont la cause est inconnue.", type: "vrai_faux", reponse: true },
        { id: 5, question: "Quelle pathologie désigne-t-on par 'diarrhée de l'écriture' ?", type: "qcm", options: ["Logorrhée", "Verbigération", "Graphorrhée", "Dysarthrie"], reponse: 2 },
      ]
    }
  ]
}

export default UE1