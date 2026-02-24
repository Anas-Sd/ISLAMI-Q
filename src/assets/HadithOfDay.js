const HadeethOfDay = [
  {
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    english: "Actions are judged according to intentions, and every person will have what they intended.  "
  },
  {
    arabic: "الدِّينُ النَّصِيحَةُ",
    english: "The religion is sincerity/true advice.  "
  },
  {
    arabic: "لاَ يَرْحَمُ مَنْ لاَ يَرْحَمُ",
    english: "He who does not show mercy will not be shown mercy.  "
  },
  {
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    english: "Whoever believes in Allah and the Last Day should speak good or remain silent.  "
  },
  {
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِن لِّسَانِهِ وَيَدِهِ",
    english: "A Muslim is one from whose tongue and hand the other Muslims are safe.  "
  },
  {
    arabic: "لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    english: "None of you truly believes until he loves for his brother what he loves for himself.  "
  },
  {
    arabic: "طُوبَى لِلْمُطَوَّعِينَ",
    english: "Glad tidings to those who offer more than what is obligatory.  "
  },
  {
    arabic: "الْجِهَادُ فَرِيضَةٌ بَعْدَ الْوَاسِعَةِ",
    english: "Jihad is prescribed after capacity is known.  "
  },
  {
    arabic: "الصَّلَاةُ نُورٌ",
    english: "Prayer is light.  "
  },
  {
    arabic: "إِيَّاكُمْ وَالْحَسَدَ",
    english: "Beware of envy, for envy devours good deeds.  "
  },
  {
    arabic: "الْكَلاَمُ بَيْنَ السَّلاَمِ وَالْحَرْبِ",
    english: "Between peace and war is just talk—so speak gently.  "
  },
  {
    arabic: "الْمَرْءُ عَلَى دِينِ خَلِيلِهِ",
    english: "A person is upon the religion of his close friend.  "
  },
  {
    arabic: "أَفْشُوا السَّلَامَ",
    english: "Spread the greeting of peace.  "
  },
  {
    arabic: "ضَرَبَنِي رَسُولُ اللَّهِ ﷺ بِهَذَا فَقَالَ مَهْلًا",
    english: "The Prophet ﷺ taught me patience at the time of difficulty by saying ‘Be patient’.  "
  },
  {
    arabic: "إِنَّ اللَّهَ جَمِيلٌ وَيُحِبُّ الْجَمَالَ",
    english: "Allah is beautiful and loves beauty.  "
  },
  {
    arabic: "الرَّحْمَنُ يَرْحَمُ مَنْ يَرْحَمُهُ الْمَرْءُ",
    english: "The Most Merciful shows mercy to those who show mercy.  "
  },
  {
    arabic: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ",
    english: "This world is the believer’s prison and the disbeliever’s Paradise.  "
  },
  {
    arabic: "أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا",
    english: "The most complete believers in faith are those with the best character.  "
  },
  {
    arabic: "مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ",
    english: "Whoever guides to good has a reward like the one who acted.  "
  },
  {
    arabic: "إِذَا حَسُنَ الظَّنُّ بِاللَّهِ عَزَّ وَجَلَّ",
    english: "If a person thinks well of Allah, He will deal well with him.  "
  },
  {
    arabic: "الْوَرَعُ حَفْظُ الْفَرْجِ وَالْكَفُّ عَنِ الشَّبَهَاتِ",
    english: "Piety is guarding one’s chastity and avoiding suspicious matters.  "
  },
  {
    arabic: "الطُّمَأْنِينَةُ فِي الصَّلَاةِ",
    english: "Calmness and composure in prayer are essential.  "
  },
  {
    arabic: "إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ",
    english: "Allah has prescribed excellence (Ihsan) in all actions.  "
  },
  {
    arabic: "الْمُسْلِمُ شَبِيعٌ فِي الْحَيَاءِ",
    english: "A Muslim is full of modesty and shyness.  "
  },
  {
    arabic: "الْمَرْءُ يُحْصَبُ فِي أَنَّ لَيْسَ لَهُ أَخٌ",
    english: "A man will be tied to what he has no brother in — so avoid harm.  "
  },
  {
    arabic: "أَكْثَرُ مَا يُدْخِلُ النَّاسَ الْجَنَّةَ التَّقْوَى",
    english: "The most that leads people to Paradise is piety (Taqwa).  "
  },
  {
    arabic: "الْعِلْمُ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    english: "Seeking knowledge is an obligation on every Muslim.  "
  },
  {
    arabic: "إِذَا صَلَّى أَحَدُكُمْ فَلْيُسَلِّمْ",
    english: "When one prays, let him conclude with the greeting of peace.  "
  },
  {
    arabic: "حُسْنُ الْخُلُقِ يُدْخِلُ الْجَنَّةَ",
    english: "Good character leads to Paradise.  "
  },
  {
    arabic: "أَفْضَلُ أَعْمَالِكُمْ أَدْوَمُهَا وَإِنْ قَلَّ",
    english: "The best deeds are those done consistently, even if few.  "
  },
  {
    arabic: "لَا تَحْقِرَنَّ مِنَ الْمَعْرُوفِ شَيْئًا",
    english: "Do not disdain any good deed, even meeting your brother with a cheerful face.  "
  }
];
export default HadeethOfDay;