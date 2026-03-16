const UE7 = {
  id: "ue7",
  code: "LNG 1267",
  titre: "Informatique",
  couleur: "#14B8A6",
  emoji: "🖥️",
  matieres: [
    {
      id: "ue7-m1",
      titre: "Informatique",
      emoji: "💾",
      cours: [
        {
          id: 1,
          titre: "Définitions fondamentales",
          contenu: `• Composant : matériel solide avec lequel est fabriqué l'ordinateur. Il comprend plusieurs composants.\n\n• Mémoire : composant de l'ordinateur qui sert à stocker les informations.\n\n• Temps de traitement : temps mis par l'ordinateur pour traiter une information.\n\n• Système d'exploitation : programme essentiel sans lequel un ordinateur ne peut pas fonctionner.\n\n• Rendement : volume du travail effectué en une seconde, ou exprimé en pourcentage du travail espéré dès le départ.\n\n• Information : en informatique, tout texte, image et son destiné à être traité par l'ordinateur.\n\n• AMD (Advanced Micro Devices) : entreprise multinationale spécialisée dans la conception et la fabrication de microprocesseurs, de cartes graphiques et de solutions informatiques. Fondée en 1969, concurrent principal d'Intel.`
        },
        {
          id: 2,
          titre: "Le processeur — moteur de l'ordinateur",
          contenu: `Le moteur de l'ordinateur s'appelle le processeur. Il a été miniaturisé pour obtenir ce qu'on appelle "le circuit imprimé".\n\nÀ partir de 1974, le circuit imprimé a été encore révolutionné pour devenir plus miniature : on obtient le "circuit intégré".\n\nLe processeur est composé de :\n1. L'unité de traitement\n2. L'unité de commande (ou contrôle)\n\nL'unité de traitement comprend :\n• RD (Registre des données) : reçoit les inputs.\n• UAL (Unité Arithmétique et Logique) : traite les données.\n• ACC (Accumulateur) : stocke le résultat après traitement.\n• Les opérations sont de type numérique binaire.\n\nL'unité de contrôle comprend :\n• RI (Registre des instructions)\n• Décodeur de fonction\n• Un compteur ordinal\n• Le registre des adresses\n• Une horloge`
        },
        {
          id: 3,
          titre: "Composition de l'ordinateur",
          contenu: `L'ordinateur est composé de :\n• L'unité centrale (UC)\n• La mémoire centrale (MC)\n\nPour qu'un ordinateur démarre il faut : UC + PROCESSEUR + MC + SE\n\nHARD = ordinateur physique (matériel)\nSOFT = système d'exploitation (logiciel)\nHARD + SOFT = Ordinateur complet\n\nL'unité d'échange : permet de gérer les entrées et sorties. Elle est placée entre la mémoire centrale et les périphériques.`
        },
        {
          id: 4,
          titre: "Les mémoires de l'ordinateur",
          contenu: `Mémoire centrale : stocke les informations en cours de traitement.\n\nMémoire de masse (périphérique d'entrée) :\nBande magnétique, disque magnétique, disque dur, disquette, écran, clavier, souris, crayons optiques, scanner, caméra.\n\nMémoire de masse (périphérique de sortie) :\nCD (compact disk), écran, imprimante, photocopieuse, modem (wifi boss).\n\nMémoire de masse (entrée ET sortie) :\nDisque dur, bande magnétique, CDRom.\n\nUnités de mesure :\n• Kilo byte (Kb) = Kilo octet (Ko)\n• Méga byte (Mb) = Méga octet (Mo)\n\nLa fréquence d'un ordinateur désigne le nombre d'images, de sons et de textes pouvant s'afficher sur l'écran par seconde (Hertz).`
        },
        {
          id: 5,
          titre: "Les types d'ordinateurs",
          contenu: `• DESKTOP : ordinateur de bureau ou de table (Windows, MacOS)\n• LAPTOP : ordinateur de genoux ou portatif (Windows, MacOS)\n• TABLETTES : ordinateur intermédiaire entre le LAPTOP et le Smartphone (Windows, MacOS)\n• SMARTPHONE : téléphone intelligent ou android\n• Les assistants personnels : essentiellement pour prendre des notes (blocs-notes, agenda)`
        },
        {
          id: 6,
          titre: "Les générations de l'ordinateur et conséquences sociales",
          contenu: `Les conséquences sociales de l'ordinateur depuis 1945 :\n\n• 1ère génération : connue seulement des grandes nations (USA, France, Angleterre)\n• 2ème génération : nations riches (USA, France, Angleterre)\n• 3ème génération : grandes nations + Singapour, Taïwan, Corée du Sud, Afrique du Sud\n• 4ème génération : composée de toutes les nations\n\nEffets positifs :\n• La hausse des rendements\n• La qualité du travail\n• L'automatisation des tâches\n\nPoints négatifs :\n• Le chômage\n• L'anarchie\n• La distension humaine\n• Danger démocratique`
        },
        {
          id: 7,
          titre: "La liaison des ordinateurs — WIFI et réseaux",
          contenu: `La liaison des ordinateurs peut se faire par câble ou sans fil (Wireless = WIFI).\n\nWIFI : Wireless Fidelity — technologie basée sur les ondes électromagnétiques.\n\nDifférentes parties du WIFI :\n• Satellite\n• Info\n• Onde électromagnétique\n• Relais MTN ou MOOV\n• Modem info\n\nTypes de réseaux :\n• LAN = Local Area Network (ex: village ou quartier)\n• WAN = Wide Area Network (ex: réseau international)\n• INTRANet : à l'intérieur de l'entreprise, relie les dirigeants\n• EXTRANet : à l'extérieur, réseau sous-traité\n\nPour trouver le nombre de liaisons : l = n(n-1)/2\nOù n = nombre de systèmes.\n\nChaque ordinateur est identifié par un numéro unique = IP.`
        },
        {
          id: 8,
          titre: "Le World Wide Web et les protocoles",
          contenu: `Le Web est organisé comme un grand livre rassemblant des chapitres. Le protocole TCP/IP joue le rôle de chef d'orchestre.\n\n• TCP : Transfert Control Protocol — s'occupe du transport\n• IP : Internet Protocol — s'occupe de la sécurité\n\nSous-protocoles :\n• DNS : Domain Name Service\n• HTTP(S) : Hyper Text Transfer Protocol (S = sécurité)\n• SMTP : Simple Mail Transfer Protocol — envoyer des messages\n• POP : Post Office Protocol — recevoir les messages\n• FTP : Files Transfer Protocol — envoyer/recevoir des fichiers binaires\n\nNavigateurs web :\n• Internet Explorer\n• Mozilla Firefox\n• Google Chrome\n• Netscape\n• Safari\n\nProgrammes utilitaires :\n• WORD : traitement du texte\n• EXCEL : calcul\n• POWERPOINT : communication\n\nEn informatique :\n• Byte ≈ Octet\n• Kilo byte (Kb) = Kilo octet (Ko)\n• Méga byte (Mb) = Méga octet (Mo)`
        },
      ],
      flashcards: [
        { id: 1, question: "Qu'est-ce qu'un composant informatique ?", reponse: "Le matériel solide avec lequel est fabriqué l'ordinateur." },
        { id: 2, question: "Qu'est-ce que la mémoire d'un ordinateur ?", reponse: "Composant qui sert à stocker les informations de l'ordinateur." },
        { id: 3, question: "Qu'est-ce que le système d'exploitation ?", reponse: "Programme essentiel sans lequel un ordinateur ne peut pas fonctionner." },
        { id: 4, question: "Qu'est-ce que le rendement en informatique ?", reponse: "Volume du travail effectué en une seconde, ou en pourcentage du travail espéré." },
        { id: 5, question: "De quoi est composé le processeur ?", reponse: "De l'unité de traitement et de l'unité de commande." },
        { id: 6, question: "Que signifie UAL ?", reponse: "Unité Arithmétique et Logique — traite les données." },
        { id: 7, question: "Que signifie ACC ?", reponse: "Accumulateur — stocke le résultat après traitement par l'UAL." },
        { id: 8, question: "Que faut-il pour qu'un ordinateur démarre ?", reponse: "UC + PROCESSEUR + MC + SE" },
        { id: 9, question: "Différence entre HARD et SOFT ?", reponse: "HARD = matériel physique. SOFT = système d'exploitation/logiciel." },
        { id: 10, question: "Qu'est-ce que WIFI ?", reponse: "Wireless Fidelity — technologie basée sur les ondes électromagnétiques." },
        { id: 11, question: "Qu'est-ce qu'un LAPTOP ?", reponse: "Un ordinateur de genoux ou portatif." },
        { id: 12, question: "Qu'est-ce qu'un DESKTOP ?", reponse: "Un ordinateur de bureau ou de table." },
        { id: 13, question: "Citez 3 effets positifs de l'ordinateur sur la société.", reponse: "Hausse des rendements, qualité du travail, automatisation des tâches." },
        { id: 14, question: "Citez 3 effets négatifs de l'ordinateur sur la société.", reponse: "Chômage, anarchie, distension humaine." },
        { id: 15, question: "Qu'est-ce que AMD ?", reponse: "Advanced Micro Devices — entreprise de microprocesseurs et cartes graphiques, fondée en 1969." },
        { id: 16, question: "Qu'est-ce que le circuit intégré ?", reponse: "Version miniaturisée du circuit imprimé, obtenue à partir de 1974." },
        { id: 17, question: "Qu'est-ce que l'unité d'échange ?", reponse: "Elle gère les entrées et sorties. Placée entre la mémoire centrale et les périphériques." },
        { id: 18, question: "Citez 3 périphériques d'entrée.", reponse: "Clavier, souris, scanner." },
        { id: 19, question: "Citez 3 périphériques de sortie.", reponse: "Imprimante, écran, photocopieuse." },
        { id: 20, question: "Que signifie la fréquence d'un ordinateur ?", reponse: "Le nombre d'images, sons et textes pouvant s'afficher par seconde (Hertz)." },
        { id: 21, question: "Citez les différentes parties du WIFI.", reponse: "Satellite, Info, Onde électromagnétique, Relais MTN ou MOOV, Modem info." },
        { id: 22, question: "Quelle est la formule pour le nombre de liaisons dans un réseau ?", reponse: "l = n(n-1)/2 où n = nombre de systèmes." },
      ],
      quiz: [
        { id: 1, question: "Le système d'exploitation est indispensable au fonctionnement de l'ordinateur.", type: "vrai_faux", reponse: true },
        { id: 2, question: "Que signifie UAL ?", type: "qcm", options: ["Unité d'Accès Local", "Unité Arithmétique et Logique", "Unité d'Application Logicielle", "Unité d'Analyse Linguistique"], reponse: 1 },
        { id: 3, question: "HARD + SOFT =", type: "qcm", options: ["Un processeur", "Un ordinateur complet", "Un réseau", "Une mémoire"], reponse: 1 },
        { id: 4, question: "Le circuit intégré est apparu à partir de :", type: "qcm", options: ["1969", "1974", "1983", "1990"], reponse: 1 },
        { id: 5, question: "WIFI signifie Wireless Fidelity.", type: "vrai_faux", reponse: true },
        { id: 6, question: "Lequel est un périphérique de sortie ?", type: "qcm", options: ["Clavier", "Scanner", "Imprimante", "Souris"], reponse: 2 },
        { id: 7, question: "AMD est une entreprise fondée en :", type: "qcm", options: ["1959", "1969", "1974", "1983"], reponse: 1 },
        { id: 8, question: "L'ACC stocke le résultat après traitement par l'UAL.", type: "vrai_faux", reponse: true },
        { id: 9, question: "Un LAPTOP est un ordinateur de bureau.", type: "vrai_faux", reponse: false },
        { id: 10, question: "La fréquence d'un ordinateur se mesure en :", type: "qcm", options: ["Octets", "Mégabytes", "Hertz", "Pixels"], reponse: 2 },
        { id: 11, question: "Pour qu'un ordinateur démarre, il faut :", type: "qcm", options: ["UC + MC", "UC + PROCESSEUR + MC + SE", "HARD + SOFT", "CPU + RAM"], reponse: 1 },
        { id: 12, question: "L'unité d'échange est placée entre :", type: "qcm", options: ["Le processeur et l'écran", "La mémoire centrale et les périphériques", "Le clavier et la souris", "Le HARD et le SOFT"], reponse: 1 },
      ]
    }
  ]
}

export default UE7