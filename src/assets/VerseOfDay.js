const VerseOfDay = [
  {
    arabic: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ",
    english: "Indeed, Allah commands justice, good conduct, and giving to relatives.",
    reference: "(Surah An-Nahl 16:90)"
  },
  {
    arabic: "وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ",
    english: "And We are closer to him than [his] jugular vein.",
    reference: "(Surah Qaf 50:16)"
  },
  {
    arabic: "اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ",
    english: "Allah is the Light of the heavens and the earth.",
    reference: "(Surah An-Nur 24:35)"
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    english: "Indeed, with hardship comes ease.",
    reference: "(Surah Ash-Sharh 94:6)"
  },
  {
    arabic: "مَن عَمِلَ صَالِحًا مِن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
    english: "Whoever does righteousness, while being a believer, We will surely give them a good life.",
    reference: "(Surah An-Nahl 16:97)"
  },
  {
    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    english: "And whoever relies upon Allah – He is sufficient for him.",
    reference: "(Surah At-Talaq 65:3)"
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    english: "So remember Me; I will remember you.",
    reference: "(Surah Al-Baqarah 2:152)"
  },
  {
    arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    english: "And seek help through patience and prayer.",
    reference: "(Surah Al-Baqarah 2:45)"
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
    english: "Indeed, Allah does not change the condition of a people until they change what is within themselves.",
    reference: "(Surah Ar-Ra’d 13:11)"
  },
  {
    arabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ",
    english: "And We have not sent you except as a mercy to the worlds.",
    reference: "(Surah Al-Anbiya 21:107)"
  },
  {
    arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ سَيَجْعَلُ لَهُمُ الرَّحْمَنُ وُدًّا",
    english: "Indeed, those who believe and do righteous deeds – the Most Merciful will appoint for them affection.",
    reference: "(Surah Maryam 19:96)"
  },
  {
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
    english: "Say, 'He is Allah, the One.'",
    reference: "(Surah Al-Ikhlas 112:1)"
  },
  {
    arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
    english: "Say, 'I seek refuge in the Lord of daybreak.'",
    reference: "(Surah Al-Falaq 113:1)"
  },
  {
    arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    english: "Say, 'I seek refuge in the Lord of mankind.'",
    reference: "(Surah An-Nas 114:1)"
  },
  {
    arabic: "إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ",
    english: "Indeed, prayer prohibits immorality and wrongdoing.",
    reference: "(Surah Al-Ankabut 29:45)"
  },
  {
    arabic: "وَلَنَبْلُوَنَّكُمْ بِشَيْءٍ مِنَ الْخَوْفِ وَالْجُوعِ",
    english: "And We will surely test you with something of fear, hunger, loss of wealth, lives, and fruits.",
    reference: "(Surah Al-Baqarah 2:155)"
  },
  {
    arabic: "إِنَّ اللَّهَ يُحِبُّ الَّذِينَ يَتَوَكَّلُونَ عَلَيْهِ",
    english: "Indeed, Allah loves those who rely upon Him.",
    reference: "(Surah Al-Imran 3:159)"
  },
  {
    arabic: "وَمَنْ يَعْمَلْ صَالِحًا نُزِدْ لَهُ خَيْرًا",
    english: "And whoever does a good deed – We will increase for him good therein.",
    reference: "(Surah Muhammad 47:38)"
  },
  {
    arabic: "قُلْ أَمَرَ رَبِّي بِالْعَدْلِ",
    english: "Say, 'My Lord has commanded justice.'",
    reference: "(Surah Al-A’raf 7:29)"
  },
  {
    arabic: "وَمَنْ أَعْرَضَ عَنْ ذِكْرِي فَإِنَّ لَهُ مَعِيشَةً ضَنْكًا",
    english: "And whoever turns away from My remembrance – indeed, he will have a depressed life.",
    reference: "(Surah Taha 20:124)"
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    english: "Indeed, Allah is with those who are patient.",
    reference: "(Surah Al-Anfal 8:46)"
  },
  {
    arabic: "وَاذْكُرُوا نِعْمَةَ اللَّهِ عَلَيْكُمْ",
    english: "And remember the favor of Allah upon you.",
    reference: "(Surah Al-Baqarah 2:231)"
  },
  {
    arabic: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
    english: "Indeed, Allah forgives all sins.",
    reference: "(Surah An-Nisa 4:48)"
  },
  {
    arabic: "وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ",
    english: "And cooperate in righteousness and piety, but do not cooperate in sin.",
    reference: "(Surah Al-Ma’idah 5:2)"
  },
  {
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    english: "Indeed, Allah does not burden a soul beyond that it can bear.",
    reference: "(Surah Al-Baqarah 2:286)"
  },
  {
    arabic: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ",
    english: "And He found you lost and guided [you].",
    reference: "(Surah Ad-Duha 93:7)"
  },
  {
    arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ",
    english: "And We have certainly made the Quran easy to remember.",
    reference: "(Surah Al-Qamar 54:17)"
  },
  {
    arabic: "إِنَّ اللَّهَ يُحِبُّ الْمُطَهَّرِينَ",
    english: "Indeed, Allah loves those who purify themselves.",
    reference: "(Surah At-Tawbah 9:108)"
  },
  {
    arabic: "وَاللَّهُ خَيْرُ الْمَاكِرِينَ",
    english: "And Allah is the best of planners.",
    reference: "(Surah Al-Imran 3:54)"
  },
  {
    arabic: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا",
    english: "And hold firmly to the rope of Allah all together.",
    reference: "(Surah Al-Imran 3:103)"
  },
  {
    arabic: "إِنَّ اللَّهَ خَيْرٌ حَافِظًا وَهُوَ أَرْحَمُ الرَّاحِمِينَ",
    english: "Indeed, Allah is the best guardian, and He is the Most Merciful of the merciful.",
    reference: "(Surah Yusuf 12:64)"
  },
  {
    arabic: "وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ",
    english: "And fear a Day when you will be returned to Allah.",
    reference: "(Surah Al-Baqarah 2:281)"
  },
  {
    arabic: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ لَآيَاتٍ لِأُوْلِي الْأَلْبَابِ",
    english: "Indeed, in the creation of the heavens and the earth are signs for those who reflect.",
    reference: "(Surah Al-Imran 3:190)"
  },
  {
    arabic: "فَإِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    english: "Indeed, Allah is with the patient.",
    reference: "(Surah Al-Baqarah 2:153)"
  },
  {
    arabic: "فَمَنْ يُرِدِ اللَّهُ أَنْ يَهْدِيَهُ يَشْرَحْ صَدْرَهُ لِلْإِسْلَامِ",
    english: "So whoever Allah wants to guide – He expands his breast to Islam.",
    reference: "(Surah Al-An’am 6:125)"
  },
  {
    arabic: "إِنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
    english: "Indeed, Allah is over all things competent.",
    reference: "(Surah Al-Baqarah 2:20)"
  },
  {
    arabic: "إِنَّ الصَّابِرِينَ يُؤْتَوْنَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ",
    english: "Indeed, the patient will be given their reward without account.",
    reference: "(Surah Az-Zumar 39:10)"
  },
  {
    arabic: "إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
    english: "Indeed, Allah is Forgiving and Merciful.",
    reference: "(Surah Al-Baqarah 2:199)"
  },
  {
    arabic: "وَوَصَّيْنَا الْإِنْسَانَ بِوَالِدَيْهِ",
    english: "And We have enjoined upon man [care] for his parents.",
    reference: "(Surah Al-Ankabut 29:8)"
  },
  {
    arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ لَهُم جَنَّاتٌ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
    english: "Indeed, those who have believed and done righteous deeds – for them will be gardens beneath which rivers flow.",
    reference: "(Surah Al-Baqarah 2:82)"
  },
  {
    arabic: "إِنَّ الَّذِينَ كَفَرُوا لَهُمْ نَارُ جَهَنَّمَ",
    english: "Indeed, those who disbelieve – for them is the Fire.",
    reference: "(Surah Al-Baqarah 2:39)"
  },
  {
    arabic: "إِنَّ الصَّلَاةَ نُورٌ",
    english: "Indeed, the prayer is a light.",
    reference: "(Surah Al-Ankabut 29:45)"
  },
  {
    arabic: "وَقَالَ رَبُّكُمْ ادْعُونِي أَسْتَجِبْ لَكُمْ",
    english: "And your Lord says, 'Call upon Me; I will respond to you.'",
    reference: "(Surah Ghafir 40:60)"
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يَظْلِمُ النَّاسَ شَيْئًا وَلَكِنَّ النَّاسَ أَنْفُسَهُمْ يَظْلِمُونَ",
    english: "Indeed, Allah does not wrong the people at all, but it is the people who wrong themselves.",
    reference: "(Surah Yunus 10:44)"
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الْمُحْسِنِينَ",
    english: "Indeed, Allah is with the doers of good.",
    reference: "(Surah An-Nahl 16:128)"
  },
  {
    arabic: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنْفُسِهِمْ",
    english: "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
    reference: "(Surah Ar-Ra’d 13:11)"
  },
  {
    arabic: "إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أَدْخَلَهُمُ اللَّهُ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
    english: "Indeed, those who have believed and done righteous deeds – Allah will admit them into gardens beneath which rivers flow.",
    reference: "(Surah Al-Imran 3:195)"
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    english: "So remember Me; I will remember you.",
    reference: "(Surah Al-Baqarah 2:152)"
  }
];

export default VerseOfDay;