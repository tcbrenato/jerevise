const UE4 = {
  id: "ue4",
  code: "LNG 1264",
  titre: "Grammaire",
  couleur: "#10B981",
  emoji: "✍️",
  matieres: [
    {
      id: "ue4-m1",
      titre: "Grammaire des langues",
      emoji: "🗺️",
      cours: [
        {
          id: 1,
          titre: "Les concepts linguistiques — outils langagiers",
          contenu: `Les concepts linguistiques représentant un outil langagier :\n\n• La langue : système de signes permettant la communication.\n• Le dialecte : variété régionale d'une langue.\n• Le patois : parler local très limité géographiquement.\n• L'argot : langage particulier à un groupe social.\n• Le jargon : langage technique propre à une profession.`
        },
        {
          id: 2,
          titre: "Notions fondamentales de la grammaire",
          contenu: `• La diachronie : étude sur l'évolution de la langue au cours de son histoire.\n• La synchronie : étude de la langue à l'état actuel ou présent.\n\n• Le paradigme : lien qu'une unité entretient hors contexte avec d'autres unités du même type.\n• Le syntagme : lien qu'une unité entretient en contexte avec d'autres unités différentes.\n\n• L'oral et l'écrit\n• La nature et la fonction`
        },
        {
          id: 3,
          titre: "La Protolangue",
          contenu: `On parle de Protolangue (ou mère de toutes langues) lorsque toute langue a une histoire et appartient à une famille d'autres langues, toutes issues d'une même langue originelle.\n\nEx : Le latin est la protolangue des langues romanes (français, espagnol, italien, portugais...).`
        },
        {
          id: 4,
          titre: "Diachronie et synchronie",
          contenu: `Les concepts de diachronie et synchronie relèvent les processus ayant caractérisé le développement et les différentes modifications subies par les langues.\n\n• Diachronie : évolution de la langue dans le temps (histoire).\n• Synchronie : état actuel de la langue (présent).\n\nEx : Étudier comment le mot "maison" a évolué depuis le latin = diachronie.\nÉtudier la langue française telle qu'elle est aujourd'hui = synchronie.`
        },
      ],
      flashcards: [
        { id: 1, question: "Qu'est-ce que la diachronie ?", reponse: "L'étude sur l'évolution de la langue au cours de son histoire." },
        { id: 2, question: "Qu'est-ce que la synchronie ?", reponse: "L'étude de la langue à l'état actuel ou présent." },
        { id: 3, question: "Qu'est-ce que le paradigme ?", reponse: "Le lien qu'une unité entretient hors contexte avec d'autres unités du même type." },
        { id: 4, question: "Qu'est-ce que le syntagme ?", reponse: "Le lien qu'une unité entretient en contexte avec d'autres unités différentes." },
        { id: 5, question: "Qu'est-ce qu'une Protolangue ?", reponse: "La mère de toutes langues — langue originelle dont sont issues toutes les langues d'une même famille." },
        { id: 6, question: "Qu'est-ce que l'argot ?", reponse: "Langage particulier à un groupe social." },
        { id: 7, question: "Qu'est-ce que le jargon ?", reponse: "Langage technique propre à une profession." },
        { id: 8, question: "Qu'est-ce que le dialecte ?", reponse: "Variété régionale d'une langue." },
        { id: 9, question: "Qu'est-ce que le patois ?", reponse: "Parler local très limité géographiquement." },
        { id: 10, question: "Citez 5 concepts linguistiques outils langagiers.", reponse: "La langue, le dialecte, le patois, l'argot, le jargon." },
      ],
      quiz: [
        { id: 1, question: "La diachronie est l'étude de la langue à son état actuel.", type: "vrai_faux", reponse: false },
        { id: 2, question: "Le syntagme est le lien hors contexte entre unités du même type.", type: "vrai_faux", reponse: false },
        { id: 3, question: "La Protolangue est :", type: "qcm", options: ["Une langue morte", "La mère de toutes les langues d'une famille", "Un dialecte régional", "Une langue artificielle"], reponse: 1 },
        { id: 4, question: "L'argot est un langage propre à :", type: "qcm", options: ["Une région", "Une profession", "Un groupe social", "Une époque"], reponse: 2 },
        { id: 5, question: "Le jargon est un langage propre à une profession.", type: "vrai_faux", reponse: true },
      ]
    },
    {
      id: "ue4-m2",
      titre: "Grammaire du Français",
      emoji: "📝",
      cours: [
        {
          id: 1,
          titre: "La langue française — origines et preuves",
          contenu: `La langue française est une langue romane, née aux VIIIe et IXe siècles.\n\nLes faits qui le prouvent :\n• La rédaction des Serments de Strasbourg en 842.\n• La Séquence de Sainte Eulalie vers 882.`
        },
        {
          id: 2,
          titre: "Les grandes périodes du français",
          contenu: `• Le français médiéval : IX-XIIIe siècles\n• Le moyen français : XIV-XVIe siècles\n• Le français classique : XVII-XVIIIe siècles\n• Le français moderne et contemporain : XIX-XXIe siècles`
        },
        {
          id: 3,
          titre: "Les repères historiques de la langue française",
          contenu: `• Au Moyen-Âge\n• À la Renaissance\n• Au XVIe siècle\n• À l'époque classique\n• Au XIXe siècle\n• Au XXe siècle`
        },
        {
          id: 4,
          titre: "Les types de grammaire",
          contenu: `• La grammaire prescriptive ou normative : impose des règles immuables pour un bon usage de la langue française. Elle dicte les règles à suivre pour bien écrire.\n\n• La grammaire descriptive : décrit comment est la langue sans y porter un jugement de valeur.\n\nDifférence : la normative impose des règles, la descriptive observe sans juger.`
        },
        {
          id: 5,
          titre: "Définition de l'orthographe",
          contenu: `Une orthographe : ensemble des règles et usages définis comme normes pour écrire les mots d'une langue donnée.\n\nPour bien comprendre l'orthographe française, il faut maîtriser :\n\n• Le phonème : plus petite unité qui permet de distinguer les mots d'une langue.\n• Le son : permet de distinguer les mots à l'oral.\nEx : bien/lien (différence au niveau des sons b et l = phonèmes)\n\n• Le graphème : plus petite unité graphique ayant une valeur distinctive.\n• Digramme : combinaison de deux graphèmes pour avoir un son. Ex : "au"\n• Trigramme : combinaison de trois graphèmes pour avoir un son. Ex : "eau"\n\nEx : le phonème [o] peut être représenté par :\n- Une simple lettre (O)\n- Un digramme (au)\n- Un trigramme (eau)`
        },
        {
          id: 6,
          titre: "Les deux principes de l'orthographe française",
          contenu: `Le système orthographique français comporte deux principes :\n\n1. Le principe phonographique : signe écrit représentant un son du langage.\n2. Le principe idéographique (ou morphogramme) : la graphie porte une information grammaticale ou lexicale.\n\nLa syllabe :\n• Syllabe ouverte : se termine par une voyelle.\n• Syllabe fermée : se termine par une consonne.\n• À l'oral = syllabe phonique\n• À l'écrit = syllabe graphique`
        },
        {
          id: 7,
          titre: "Les outils pour maîtriser la langue française",
          contenu: `Pour bien utiliser et correctement la langue française, il faut maîtriser :\n\n• Orthographiques\n• Phonétique\n• Phonologique\n• Morphologique\n• Lexicologique\n• Syntaxique\n• Syntagmatiques\n• Sémantique`
        },
      ],
      flashcards: [
        { id: 1, question: "Quand la langue française est-elle née ?", reponse: "Aux VIIIe et IXe siècles. C'est une langue romane." },
        { id: 2, question: "Quels sont les faits qui prouvent l'existence du français ?", reponse: "Les Serments de Strasbourg (842) et la Séquence de Sainte Eulalie (882)." },
        { id: 3, question: "Quelles sont les 4 grandes périodes du français ?", reponse: "Médiéval (IX-XIII), Moyen (XIV-XVI), Classique (XVII-XVIII), Moderne/contemporain (XIX-XXI)." },
        { id: 4, question: "Différence entre grammaire normative et descriptive ?", reponse: "Normative : impose des règles. Descriptive : observe la langue sans juger." },
        { id: 5, question: "Qu'est-ce qu'un phonème ?", reponse: "La plus petite unité qui permet de distinguer les mots d'une langue." },
        { id: 6, question: "Qu'est-ce qu'un graphème ?", reponse: "La plus petite unité graphique ayant une valeur distinctive." },
        { id: 7, question: "Qu'est-ce qu'un digramme ?", reponse: "La combinaison de deux graphèmes pour avoir un son. Ex : 'au'." },
        { id: 8, question: "Qu'est-ce qu'un trigramme ?", reponse: "La combinaison de trois graphèmes pour avoir un son. Ex : 'eau'." },
        { id: 9, question: "Différence entre syllabe ouverte et fermée ?", reponse: "Ouverte : se termine par une voyelle. Fermée : se termine par une consonne." },
        { id: 10, question: "Qu'est-ce que le principe phonographique ?", reponse: "Un signe écrit représentant un son du langage." },
        { id: 11, question: "Citez 3 outils pour maîtriser la langue française.", reponse: "Orthographique, phonétique, morphologique (parmi d'autres)." },
        { id: 12, question: "La langue française est une langue romane née quand ?", reponse: "Aux VIIIe et IXe siècles." },
      ],
      quiz: [
        { id: 1, question: "En quelle année ont été rédigés les Serments de Strasbourg ?", type: "qcm", options: ["742", "842", "882", "942"], reponse: 1 },
        { id: 2, question: "Le phonème [o] peut être représenté par :", type: "qcm", options: ["O seulement", "O, au, eau", "au, eau seulement", "Aucune de ces réponses"], reponse: 1 },
        { id: 3, question: "La grammaire descriptive impose des règles à suivre.", type: "vrai_faux", reponse: false },
        { id: 4, question: "Une syllabe ouverte se termine par :", type: "qcm", options: ["Une consonne", "Une voyelle", "Un digramme", "Un trigramme"], reponse: 1 },
        { id: 5, question: "La langue française est une langue germanique.", type: "vrai_faux", reponse: false },
        { id: 6, question: "Un digramme est la combinaison de combien de graphèmes ?", type: "qcm", options: ["1", "2", "3", "4"], reponse: 1 },
        { id: 7, question: "Le principe phonographique est un signe écrit représentant un son.", type: "vrai_faux", reponse: true },
        { id: 8, question: "La Séquence de Sainte Eulalie date de :", type: "qcm", options: ["842", "872", "882", "892"], reponse: 2 },
      ]
    }
  ]
}

export default UE4