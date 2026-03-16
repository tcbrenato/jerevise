const UE5 = {
  id: "ue5",
  code: "LNG 1265",
  titre: "Épistémologie & Internet",
  couleur: "#EC4899",
  emoji: "🌐",
  matieres: [
    {
      id: "ue5-m1",
      titre: "Logique épistémologie et système des connaissances",
      emoji: "🧩",
      disponible: false,
      cours: [],
      flashcards: [],
      quiz: []
    },
    {
      id: "ue5-m2",
      titre: "Histoire d'Internet",
      emoji: "🌍",
      disponible: true,
      cours: [
        {
          id: 1,
          titre: "Qu'est-ce qu'Internet ?",
          contenu: `Internet est un ensemble de réseaux interconnectés utilisant une suite de protocoles appelée TCP/IP (Transmission Control Protocol / Internet Protocol) pour échanger des données à travers le monde.\n\nInternet signifie "réseau connecté". Il vient de deux mots :\n• Interconnected\n• Network`
        },
        {
          id: 2,
          titre: "ARPANET — origine d'Internet",
          contenu: `ARPANET est le premier réseau mondial de communication, créé dans les années 60 (1969) dans un réseau de militaires et patronné par le ministère de la défense des États-Unis. Le but était d'avoir un réseau décentralisé.\n\n• En 1983 : ARPANET quitte le camp militaire pour devenir INTERNET.\n• À partir de 1990 : Internet est devenu un réseau public. C'est l'origine de l'internet tel qu'on le connaît.\n• En décembre 1995 : Le Bénin accède à Internet à l'occasion d'un OIT.`
        },
        {
          id: 3,
          titre: "Les grands services offerts par Internet",
          contenu: `Les services Internet sont réalisables à travers différents protocoles :\n\n• FTP (File Transfer Protocol) : transfert électronique de fichiers de machines distantes.\n• SMTP : Simple Mail Transfer Protocol.\n• HTTP : Hyper Text Transfer Protocol.\n• POP : Post Office Protocol.\n• IMAP : Internet Mail Access Protocol.\n• IRC (Internet Relay Chat) : communiquer en direct avec des gens du monde entier.\n• WWW (World Wide Web) : pour accéder à des pages web.\n\nNB : Le Web est l'application Internet la plus populaire.`
        },
        {
          id: 4,
          titre: "Avantages d'Internet",
          contenu: `Internet permet de :\n\n• Avoir accès à l'information de manière continue depuis toutes les zones du monde.\n• Communiquer partout à partir d'un même outil.\n• Échanger tout type de données numériques.\n• Permettre le commerce électronique.\n• Favoriser l'enseignement et l'apprentissage à distance.`
        },
        {
          id: 5,
          titre: "Normes et standards — TCP, GAFA, navigateurs",
          contenu: `Différence entre normes et standards :\n\n• La norme : spécification technique rendue obligatoire par l'État ou une communauté d'états.\n  Ex : TCP/IP\n\n• Le standard : protocole à suivre non obligatoire mais suivi par tout le monde.\n  Ex : WIFI\n\nGAFA : Google, Amazon, Facebook, Apple.\n\nGoogle Chrome est un navigateur comme Internet Explorer, Firefox, Opéra, Safari, Netscape.\n\nTypes de messagerie :\n• Adresse mail générique (yahoo, gmail...)\n• Adresse mail professionnelle`
        },
        {
          id: 6,
          titre: "Le World Wide Web",
          contenu: `WWW signifie :\n• World = Monde\n• Wide = Large\n• Web = Toile\nSens complet : Large toile mondiale.\n\nC'est l'ensemble de millions ou milliards de sites internet.\n\nLe Web est organisé comme un grand livre rassemblant des chapitres. Le protocole TCP/IP joue le rôle de chef d'orchestre :\n• TCP : Transfert Control Protocol — s'occupe du transport.\n• IP : Internet Protocol — s'occupe de la sécurité.\n\nInterprétation d'une URL : http(s)www.medeiteparfums.bj\n• medeiteparfums = nom du site (domaine généré par DNS)\n• .bj = extension du pays (Bénin)\n• http(s) = protocole d'accès (le s = sécurité)\n• DNS = Domain Name Service`
        },
        {
          id: 7,
          titre: "Les sous-protocoles et types de réseaux",
          contenu: `3 autres sous-protocoles outre DNS et HTTP :\n• SMTP : Simple Mail Transfer Protocol — envoyer des messages.\n• POP : Post Office Protocol — recevoir et récupérer les messages.\n• FTP : Files Transfer Protocol — envoyer et recevoir des fichiers binaires.\n\nTypes de réseaux :\n• LAN = Local Area Network (ex : village ou quartier)\n• WAN = Wide Area Network (ex : réseau international)\n• INTRANet : à l'intérieur de l'entreprise, relie les dirigeants\n• EXTRANet : à l'extérieur, réseau sous-traité\n\nChaque ordinateur est identifié par un numéro unique = IP.\nFormule pour trouver le nombre de liaisons : l = n(n-1)/2\nOù n = nombre de systèmes.`
        },
        {
          id: 8,
          titre: "Les navigateurs et l'organisation des messages",
          contenu: `Les navigateurs sont des programmes qui permettent d'accéder aux portails web :\n\n• Internet Explorer\n• Mozilla Firefox\n• Google Chrome\n• Netscape\n• Safari\n\nComment arrivent les messages sur le réseau international ?\nLes messages ne voyagent pas en bloc. Le message est découpé en paquets qui voyagent séparément avec leurs adresses sur des réseaux différents. Enfin, le paquet entier est reconstitué et vous avez le message.`
        },
      ],
      flashcards: [
        { id: 1, question: "Qu'est-ce qu'Internet ?", reponse: "Ensemble de réseaux interconnectés utilisant TCP/IP pour échanger des données à travers le monde." },
        { id: 2, question: "Que signifie Internet ?", reponse: "Réseau connecté. De Interconnected + Network." },
        { id: 3, question: "Qu'est-ce qu'ARPANET ?", reponse: "Premier réseau mondial de communication, créé en 1969 par le ministère de la défense américain." },
        { id: 4, question: "En quelle année ARPANET est devenu Internet ?", reponse: "En 1983." },
        { id: 5, question: "Depuis quand Internet est un réseau public ?", reponse: "À partir de 1990." },
        { id: 6, question: "Quand le Bénin a-t-il accédé à Internet ?", reponse: "En décembre 1995." },
        { id: 7, question: "Que signifie FTP ?", reponse: "File Transfer Protocol — transfert électronique de fichiers." },
        { id: 8, question: "Que signifie HTTP ?", reponse: "Hyper Text Transfer Protocol." },
        { id: 9, question: "Que signifie SMTP ?", reponse: "Simple Mail Transfer Protocol." },
        { id: 10, question: "Que signifie POP ?", reponse: "Post Office Protocol — recevoir et récupérer les messages." },
        { id: 11, question: "Que signifie WWW ?", reponse: "World Wide Web = Large Toile Mondiale." },
        { id: 12, question: "Différence entre norme et standard ?", reponse: "La norme est obligatoire (ex: TCP/IP). Le standard est suivi volontairement (ex: WIFI)." },
        { id: 13, question: "Que signifie GAFA ?", reponse: "Google, Amazon, Facebook, Apple." },
        { id: 14, question: "Que signifie DNS ?", reponse: "Domain Name Service." },
        { id: 15, question: "Que signifie LAN ?", reponse: "Local Area Network." },
        { id: 16, question: "Que signifie WAN ?", reponse: "Wide Area Network." },
        { id: 17, question: "Quelle est la formule pour le nombre de liaisons dans un réseau ?", reponse: "l = n(n-1)/2 où n = nombre de systèmes." },
        { id: 18, question: "Comment voyagent les messages sur Internet ?", reponse: "Découpés en paquets qui voyagent séparément, puis reconstitués à destination." },
        { id: 19, question: "Quel est le rôle de TCP dans TCP/IP ?", reponse: "TCP s'occupe du transport des données." },
        { id: 20, question: "Quel est le rôle de IP dans TCP/IP ?", reponse: "IP s'occupe de la sécurité." },
      ],
      quiz: [
        { id: 1, question: "En quelle année ARPANET est-il devenu Internet ?", type: "qcm", options: ["1969", "1983", "1990", "1995"], reponse: 1 },
        { id: 2, question: "Internet est un réseau public depuis 1990.", type: "vrai_faux", reponse: true },
        { id: 3, question: "Que signifie FTP ?", type: "qcm", options: ["Fast Transfer Protocol", "File Transfer Protocol", "French Transfer Protocol", "File Text Protocol"], reponse: 1 },
        { id: 4, question: "Le Bénin a accédé à Internet en 1990.", type: "vrai_faux", reponse: false },
        { id: 5, question: "La norme est obligatoire tandis que le standard ne l'est pas.", type: "vrai_faux", reponse: true },
        { id: 6, question: "GAFA signifie :", type: "qcm", options: ["Google Amazon Firefox Apple", "Google Amazon Facebook Apple", "Google Android Facebook Apple", "Gmail Amazon Facebook Apple"], reponse: 1 },
        { id: 7, question: "WWW signifie :", type: "qcm", options: ["World Wide Web", "World Web Wide", "Wide World Web", "Web World Wide"], reponse: 0 },
        { id: 8, question: "Les messages sur Internet voyagent en un seul bloc.", type: "vrai_faux", reponse: false },
        { id: 9, question: "DNS signifie :", type: "qcm", options: ["Domain Name Service", "Dynamic Network System", "Data Name Server", "Digital Network Service"], reponse: 0 },
        { id: 10, question: "ARPANET a été créé en :", type: "qcm", options: ["1945", "1959", "1969", "1979"], reponse: 2 },
      ]
    }
  ]
}
export default UE5