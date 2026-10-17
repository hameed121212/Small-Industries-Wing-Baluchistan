// ===================================================================
// OFFICIAL LIST OF CENTERS & TRADES - SMALL INDUSTRIES WING BALOCHISTAN
// Extracted from Directorate of Small Industries Official Registry
// ===================================================================

const CENTERS_DATABASE = [
  // --- QUETTA ---
  { code: 'QA7193', name: 'Handicrafts Dev: Centre Faisal Rahim Zehri', district: 'Quetta', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Handicrafts Dev: Centre Killi Arbab Ali Trasani Zehri', district: 'Quetta', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Handicrafts Dev: Centre Khanoi Zehri', district: 'Quetta', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Handicrafts Dev: Centre Naal-1 Khuzdar', district: 'Quetta', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Handicrafts Dev: Centre Naal-2 Khuzdar', district: 'Quetta', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Handicrafts Dev: Centre Killi Kasi Kateer Kuchlak, Quetta', district: 'Quetta', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Handicrafts Dev: Centre Ghareebabad Dukki', district: 'Quetta', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Tailoring & Cutting Centre Dukki', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Pottery Centre Dukki', district: 'Quetta', trade: 'Pottery Craft', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Establishment of New Tailoring Center Erri Kallag, Kharan', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Establishment of New Tailoring Cum Cutting Center Killi Kullan, Kharan', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Establishment of New Tailoring Cum Cutting Center Killi Shiitak, Kharan', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Establishment of New Tailoring Cum Cutting Center Koh Pushi, Kharan', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Establishment of New Tailoring Cum Cutting Center Rab e Pat Kharan', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Establishment of New Tailoring Cum Cutting Center Naaru, Kharan', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7193', name: 'Establishment of New Tailoring Cum Cutting Center Boperik, Kharan', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7368', name: 'Tailoring Cum Knitting Centre for Women, Quetta', district: 'Quetta', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Govt' },
  { code: 'QA7213', name: 'Tailoring/Knitting Centre Killi Deeba, Quetta', district: 'Quetta', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Govt' },
  { code: 'QA7197', name: 'Cotton Handloom Centre, Quetta', district: 'Quetta', trade: 'Cotton Handloom Weaving', status: 'Functional', type: 'Govt' },
  { code: 'QA7209', name: 'Knitting Centre Marriabad, Quetta', district: 'Quetta', trade: 'Knitting & Stitching', status: 'Functional', type: 'Govt' },
  { code: 'QA7592', name: 'Tailoring Centre Killi Khanan Kotwal, Quetta', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Functional', type: 'Govt' },
  { code: 'QA7593', name: 'Tailoring Centre Killi Saleemabad Kateer Kuchlac, Quetta', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7599', name: 'Tailoring Cutting Centre Killi Ahmed Khan Hanna Urak, Quetta', district: 'Quetta', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QA7648', name: 'Tailoring Cum Knitting Centre at Manojan Road, Quetta', district: 'Quetta', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'QA7649', name: 'Tailoring Cum Knitting Centre at Killi Ismail Samungly Rd, Quetta', district: 'Quetta', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'QA7702', name: 'Tailoring Cum Knitting Centre Kharotabad, Quetta', district: 'Quetta', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'QA7383', name: 'Handicrafts Dev: Centre Quetta (Sirki Road)', district: 'Quetta', trade: 'Handicrafts Development', status: 'Functional', type: 'Govt' },
  { code: 'QA7210', name: 'Handicrafts Dev: Centre Quetta', district: 'Quetta', trade: 'Handicrafts Development', status: 'Functional', type: 'Govt' },
  { code: 'QA7199', name: 'Carpet Training Centre Alamdar Road, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'QA7201', name: 'Carpet Training Centre Brewery Road, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'QA7202', name: 'Carpet Training Centre Killi Kabir, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'QA7203', name: 'Carpet Training Centre Killi Sirki, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'QA7204', name: 'Carpet Training Centre Killi Shaboo, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'QA7205', name: 'Carpet Training Centre Kachi Baig, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'QA7206', name: 'Carpet Training Centre Sariab Road, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'QA7207', name: 'Carpet Training Centre Marriabad, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'QA7208', name: 'Carpet Training Centre Killi Deeba, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'QA7212', name: 'Carpet Training Centre Killi Sheikhan, Quetta', district: 'Quetta', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },

  // --- KILLAH ABDULLAH & CHAMAN ---
  { code: 'QD7018', name: 'Handicrafts Dev: Centre Killa Abdullah', district: 'Killah Abdullah', trade: 'Handicrafts Development', status: 'Functional', type: 'Free of Cost' },
  { code: 'QD7019', name: 'Tailoring Cum Knitting Centre Killa Abdullah', district: 'Killah Abdullah', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Free of Cost' },
  { code: 'QD7007', name: 'Carpet Training Centre Chaman', district: 'Killah Abdullah', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },

  // --- PISHIN ---
  { code: 'PI7028', name: 'Tailoring Cum Knitting Centre Pishin', district: 'Pishin', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Local Govt' },
  { code: 'PI7122', name: 'Tailoring Cutting Centre Umer Gwal Pishin', district: 'Pishin', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'PI7027', name: 'Handicrafts Dev: Centre Mehrullah Gharshinan, Rodh Mulazai Pishin', district: 'Pishin', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'PI7016', name: 'Carpet Training Centre Pishin', district: 'Pishin', trade: 'Carpet Training', status: 'Functional', type: 'Local Govt' },

  // --- MASTUNG ---
  { code: 'MU7048', name: 'Leather Emb: Centre Mastung', district: 'Mastung', trade: 'Leather Embroidery', status: 'Non-functional', type: '..' },
  { code: 'MU7107', name: 'Leather Emb: Centre Asimabad Mastung-1', district: 'Mastung', trade: 'Leather Embroidery', status: 'Non-functional', type: '..' },
  { code: 'MU7133', name: 'Handicrafts Dev Center Near Sadeer Mastung', district: 'Mastung', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'MU7108', name: 'Leather Emb: Centre Asimabad Mastung-2', district: 'Mastung', trade: 'Leather Embroidery', status: 'Non-functional', type: '..' },
  { code: 'MU7024', name: 'Tailoring Cum Knitting Centre Mastung-1', district: 'Mastung', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'MU7046', name: 'Mizri Centre Mastung', district: 'Mastung', trade: 'Mizri Craft', status: 'Non-functional', type: '..' },
  { code: 'MU7025', name: 'Tailoring Cum Knitting Centre Mastung-2', district: 'Mastung', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'MU7026', name: 'Tailoring Cum Knitting Centre Mastung-3', district: 'Mastung', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'MU7027', name: 'Tailoring Cum Cutting Centre Mastung-3', district: 'Mastung', trade: 'Tailoring & Cutting', status: 'Functional', type: 'Rented' },
  { code: 'MU7051', name: 'Tailoring & Cutting Centre Mastung-4', district: 'Mastung', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'MU7047', name: 'Pottery Centre Mastung', district: 'Mastung', trade: 'Pottery Craft', status: 'Functional', type: 'Rented' },
  { code: 'MU7052', name: 'Tailoring & Cutting Centre Mastung-5', district: 'Mastung', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'MU7103', name: 'Tailoring Cum Cutting Cen Mauza Hassani Tera Meel Dasht', district: 'Mastung', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'MU7022', name: 'Handicrafts Dev: Centre Mastung-1', district: 'Mastung', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'MU7023', name: 'Handicrafts Dev: Centre Mastung-2', district: 'Mastung', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'MU7011', name: 'Carpet Training Centre Mastung', district: 'Mastung', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },

  // --- KHUZDAR ---
  { code: 'KR7137', name: 'Tailoring Centre Khuzdar', district: 'Khuzdar', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'KR7155', name: 'Tailoring Cutting Centre Shaheed Sikandar abad Gazzan Khuzdar', district: 'Khuzdar', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'KR7025', name: 'Handicrafts Dev: Centre Khuzdar-1', district: 'Khuzdar', trade: 'Handicrafts Development', status: 'Functional', type: 'Local Govt' },
  { code: 'KR7048', name: 'Handicrafts Dev: Centre Khuzdar-2', district: 'Khuzdar', trade: 'Handicrafts Development', status: 'Functional', type: 'Local Govt' },
  { code: 'KR7141', name: 'Handicrafts Centre Gazzan Khuzdar', district: 'Khuzdar', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'KR7140', name: 'Handicrafts Centre Noor Gama Khuzdar', district: 'Khuzdar', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'KR7223', name: 'Handicrafts/Tailoring Centre Khuzdar', district: 'Khuzdar', trade: 'Handicrafts & Tailoring', status: 'Non-functional', type: '..' },
  { code: 'KR7138', name: 'Carpet Tailoring Centre Noor Gama Dis: Khuzdar', district: 'Khuzdar', trade: 'Carpet & Tailoring', status: 'Non-functional', type: '..' },
  { code: 'KR7139', name: 'Carpet Centre Gazzan District Khuzdar', district: 'Khuzdar', trade: 'Carpet Training', status: 'Non-functional', type: '..' },
  { code: 'KR7231', name: 'Handicraft Dev Centre at Mughal Gharbi Baghbana Zehri House, Khuzdar', district: 'Khuzdar', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'KR7232', name: 'Handicraft Development Centre at Noorgama Khuzdar', district: 'Khuzdar', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'KR7024', name: 'Carpet Training Centre Khuzdar', district: 'Khuzdar', trade: 'Carpet Training', status: 'Functional', type: 'Local Govt' },

  // --- KALAT ---
  { code: 'KL7030', name: 'Tailoring Cum Knitting Centre Kalat', district: 'Kalat', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Govt' },
  { code: 'KL7091', name: 'Tailoring Centre Kalat at Mangochar', district: 'Kalat', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'KL7092', name: 'Handicrafts Centre Kalat at Mangochar', district: 'Kalat', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'KL7013', name: 'Handicrafts Dev: Centre Kalat', district: 'Kalat', trade: 'Handicrafts Development', status: 'Functional', type: 'Govt' },
  { code: 'KL7028', name: 'Handicrafts Dev: Centre Kalat-1', district: 'Kalat', trade: 'Handicrafts Development', status: 'Functional', type: 'Govt' },
  { code: 'KL7029', name: 'Handicrafts Dev: Centre Kalat-2', district: 'Kalat', trade: 'Handicrafts Development', status: 'Functional', type: 'Local Govt' },
  { code: 'KL7126', name: 'Carpet Emb: Centre Killi Zarzai Haji Haider Khan Khaliqabad', district: 'Kalat', trade: 'Carpet Embroidery', status: 'Non-functional', type: '..' },
  { code: 'KL7012', name: 'Carpet Training Centre Kalat', district: 'Kalat', trade: 'Carpet Training', status: 'Functional', type: 'Local Govt' },
  { code: 'KL7156', name: 'Vocational Training Institute Chati District Kalat', district: 'Kalat', trade: 'Vocational Training', status: 'Non-functional', type: '..' },

  // --- AWARAN ---
  { code: 'AW7028', name: 'Leather Emb: Centre Awaran', district: 'Awaran', trade: 'Leather Embroidery', status: 'Non-functional', type: '..' },
  { code: 'AW7034', name: 'Tailoring Cutting & Knitting Centre Awaran', district: 'Awaran', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'AW7094', name: 'Handicrafts Dev: Centre Awaran', district: 'Awaran', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'AW7008', name: 'Training Cum Cutting Center, Jhao Shandi District Awaran', district: 'Awaran', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'AW7033', name: 'Carpet Emb: Centre Awaran', district: 'Awaran', trade: 'Carpet Embroidery', status: 'Non-functional', type: '..' },

  // --- UTHAL / LASBELA ---
  { code: 'UL7028', name: 'Tailoring Cum Knitting Centre for Women Lasbela', district: 'Lasbela / Uthal', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'UL7137', name: 'Tailoring Cum Knitting Centre Lasbela', district: 'Lasbela / Uthal', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'UL7010', name: 'Carpet Training Centre Uthal', district: 'Lasbela / Uthal', trade: 'Carpet Training', status: 'Functional', type: 'Rented' },
  { code: 'UL7148', name: 'Vocational Training Institute Centre at Winder District Lasbela', district: 'Lasbela / Uthal', trade: 'Vocational Training', status: 'Non-functional', type: '..' },

  // --- JAFFARABAD & SOHBATPUR ---
  { code: 'JF7015', name: 'Carpet Training Centre Dera Allah Yar', district: 'Jaffarabad', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'JF7016', name: 'Carpet Training Centre Usta Mohammad', district: 'Jaffarabad', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'JF7048', name: 'Carpet Cum Emb: Centre Goath Manzoor Jaffarabad', district: 'Jaffarabad', trade: 'Carpet & Embroidery', status: 'Non-functional', type: '..' },
  { code: 'SP7087', name: 'Vocational Training Centre at Killi Janda Talab District Sohbatpur', district: 'Jaffarabad', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'JF7049', name: 'Carpet Cum Emb: Centre Goath Jia Khan Jaffarabad', district: 'Jaffarabad', trade: 'Carpet & Embroidery', status: 'Non-functional', type: '..' },

  // --- NASEERABAD ---
  { code: 'NB7036', name: 'Handicrafts Dev: Centre Naseerabad-1', district: 'Naseerabad', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'NB7037', name: 'Handicrafts Dev: Centre Naseerabad-2', district: 'Naseerabad', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },

  // --- JHAL MAGSI ---
  { code: 'JH7029', name: 'Leather Emb: Centre Jhal Magsi', district: 'Jhal Magsi', trade: 'Leather Embroidery', status: 'Non-functional', type: '..' },
  { code: 'JH7024', name: 'Cotton & Silk Handloom Centre Jhal Magsi', district: 'Jhal Magsi', trade: 'Cotton & Silk Handloom', status: 'Non-functional', type: '..' },

  // --- KACCHI (BOLAN) ---
  { code: 'KI7022', name: 'Tailoring Cum Knitting Centre Kachhi-1', district: 'Kacchi', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'KI7023', name: 'Tailoring Cum Knitting Centre Kachhi-2', district: 'Kacchi', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'KI7021', name: 'Handicrafts Dev: Centre Kachhi', district: 'Kacchi', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },

  // --- SIBI ---
  { code: 'SI7066', name: 'Cotton & Silk Handloom Centre Lehri', district: 'Sibi', trade: 'Cotton & Silk Handloom', status: 'Non-functional', type: '..' },
  { code: 'SI7024', name: 'Leather Emb: Centre Lehri-1', district: 'Sibi', trade: 'Leather Embroidery', status: 'Functional', type: 'Rented' },
  { code: 'SI7065', name: 'Leather Emb: Centre Lehri-2', district: 'Sibi', trade: 'Leather Embroidery', status: 'Functional', type: 'Rented' },
  { code: 'SI7025', name: 'Tailoring Cum Cutting Centre Sibi', district: 'Sibi', trade: 'Tailoring & Cutting', status: 'Functional', type: 'Govt' },
  { code: 'SI7027', name: 'Carpet Training Centre Sibi', district: 'Sibi', trade: 'Carpet Training', status: 'Functional', type: 'Rented' },

  // --- KOHLU ---
  { code: 'KU7008', name: 'Carpet Training Centre Kohlu', district: 'Kohlu', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'KU7086', name: 'Vocational Training Centre at Pazza', district: 'Kohlu', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'KU7009', name: 'Carpet Training Centre Mawand', district: 'Kohlu', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },

  // --- DERA BUGTI ---
  { code: 'DB7009', name: 'Carpet Training Centre Dera Bugti', district: 'Dera Bugti', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },

  // --- ZIARAT ---
  { code: 'ZT7006', name: 'Carpet Training Centre Zindra Ziarat', district: 'Ziarat', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },

  // --- HARNAI ---
  { code: 'HI7033', name: 'Tailoring Cutting & Knitting Centre Harnai', district: 'Harnai', trade: 'Tailoring & Knitting', status: 'Non-functional', type: 'Nil' },
  { code: 'HI7034', name: 'Carpet Emb: Centre Harnai', district: 'Harnai', trade: 'Carpet Embroidery', status: 'Non-functional', type: 'Nil' },

  // --- ZHOB ---
  { code: 'ZB7011', name: 'Carpet Training Centre Zhob', district: 'Zhob', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },

  // --- KILLAH SAIFULLAH ---
  { code: 'QS7040', name: 'Leather Emb: Centre Killa Saifullah', district: 'Killah Saifullah', trade: 'Leather Embroidery', status: 'Non-functional', type: '..' },
  { code: 'QS7021', name: 'Tailoring Cum Knitting Centre Killa Saifullah', district: 'Killah Saifullah', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'QS7044', name: 'Tailoring & Cutting Centre Killa Saifullah-2', district: 'Killah Saifullah', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'QS7020', name: 'Handicrafts Dev: Centre Killa Saifullah', district: 'Killah Saifullah', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },

  // --- KHARAN ---
  { code: 'KN7008', name: 'Embroidery Centre Sarawan at Kharan', district: 'Kharan', trade: 'Embroidery & Stitching', status: 'Functional', type: 'Rented' },
  { code: 'KN7010', name: 'Embroidery Centre Tootazai at Kharan', district: 'Kharan', trade: 'Embroidery & Stitching', status: 'Functional', type: 'Rented' },
  { code: 'KN7011', name: 'Embroidery Centre Joda Kalat at Kharan', district: 'Kharan', trade: 'Embroidery & Stitching', status: 'Functional', type: 'Rented' },
  { code: 'KN7068', name: 'Handicrafts Centre Kharan', district: 'Kharan', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'KN7126', name: 'Handicrafts Dev: Centre, Jalalzai Goasash District, Kharan', district: 'Kharan', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'KN7127', name: 'Handicrafts Dev: Centre at Noroz Kalat District, Kharan', district: 'Kharan', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'KN7128', name: 'Handicrafts Dev: Centre at Raskoh District, Kharan', district: 'Kharan', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'KN7038', name: 'Carpet Emb: Centre Kharan', district: 'Kharan', trade: 'Carpet Embroidery', status: 'Non-functional', type: '..' },
  { code: 'KN7189', name: 'Tailoring Cum Cutting Center, Killi bop e rek district Kharan', district: 'Kharan', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'KN7187', name: 'Tailoring Cum Cutting Center, JODA E Kalat District Kharan', district: 'Kharan', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'KN7039', name: 'Tailoring Cutting & Knitting Centre Kharan', district: 'Kharan', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'KN7009', name: 'Carpet Training Centre Kharan', district: 'Kharan', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },

  // --- NUSHKI ---
  { code: 'NI7080', name: 'Tailoring Cum Cutting Center Niam Durgee Noshki', district: 'Nushki', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'NI7080', name: 'Tailoring Cum Cutting Center, Killi Haji Ataa Muhammad, Nushki', district: 'Nushki', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'NI7010', name: 'Carpet Training Centre Nushki', district: 'Nushki', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'NI7106', name: 'Vocational Training Institute Centre Killi Nokjok Dist: Nushki', district: 'Nushki', trade: 'Vocational Training', status: 'Non-functional', type: '..' },

  // --- WASHUK ---
  { code: 'WS7050', name: 'Tailoring Cutting Centre Killi Basant Khan Basima Washuk', district: 'Washuk', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'WS7073', name: 'Vocational Training Institute Centre Naag District Washuk', district: 'Washuk', trade: 'Vocational Training', status: 'Non-functional', type: '..' },

  // --- DALBANDIN / CHAGAI ---
  { code: 'CG7078', name: 'Tailoring Cum Knitting Centre Chaghi', district: 'Chagai / Dalbandin', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'CG7088', name: 'Tailoring Cum Cutting Centre, Nokundi at Chaghi', district: 'Chagai / Dalbandin', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'CG7007', name: 'Carpet Training Centre Dalbandin', district: 'Chagai / Dalbandin', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'CG7090', name: 'Vocational Training Institute Centre Taftan District Chagai', district: 'Chagai / Dalbandin', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'CG7089', name: 'Vocational Training Institute Nokundi District Chagai', district: 'Chagai / Dalbandin', trade: 'Vocational Training', status: 'Non-functional', type: '..' },

  // --- LORALAI ---
  { code: 'LI7087', name: 'Leather Emb: Centre Loralai', district: 'Loralai', trade: 'Leather Embroidery', status: 'Functional', type: 'Govt' },
  { code: 'LI7027', name: 'Tailoring Cum Knitting Centre for Women Loralai', district: 'Loralai', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Govt' },
  { code: 'LI7197', name: 'Tailoring Cum Cutting Center Killi Shah China District Loralai', district: 'Loralai', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'LI7162', name: 'Tailoring Cum Cutting Center Killi Nari Aghberg District Loralai', district: 'Loralai', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'LI7162', name: 'Tailoring cum Cutting Centre Kach Amaqzai Loralai', district: 'Loralai', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'LI7162', name: 'Tailoring cum Cutting Centre Chanali Loralai', district: 'Loralai', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'LI7162', name: 'Tailoring cum Cutting Centre Sirdi Jungle Loralai', district: 'Loralai', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'LI7162', name: 'Tailoring Cum Cutting Centre Loralai', district: 'Loralai', trade: 'Tailoring & Cutting', status: 'Functional', type: 'Govt' },
  { code: 'LI7030', name: 'Handicrafts Dev: Centre Loralai', district: 'Loralai', trade: 'Handicrafts Development', status: 'Functional', type: 'Govt' },
  { code: 'LI7029', name: 'Carpet Training Centre Loralai', district: 'Loralai', trade: 'Carpet Training', status: 'Functional', type: 'Govt' },
  { code: 'LI7180', name: 'Vocational Training Institute Killi Mahol Sheikhan Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'LI7180', name: 'Vocational Training Institute Killi College Mohalla Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'LI7180', name: 'Vocational Training Institute Killi Lahore Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'LI7180', name: 'Vocational Training Institute Killi Murtat Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'LI7180', name: 'Vocational Training Institute Killi Dili Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'LI7180', name: 'Vocational Training Institute Minara Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'LI7181', name: 'Vocational Training Institute Zar Kariz Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Functional', type: 'Govt' },
  { code: 'LI7182', name: 'Vocational Training Institute Shah Kariz Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Functional', type: 'Govt' },
  { code: 'LI7172', name: 'Vocational Training Institute Centre at Killi Asghar Loon Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: 'Govt' },
  { code: 'LI7173', name: 'Vocational Training Institute Centre at Bakhma Muhallaha Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: 'Govt' },
  { code: 'LI7174', name: 'Vocational Training Institute Centre at Pahari Muhallaha Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'LI7175', name: 'Vocational Training Institute Centre at Dobigat Loralai', district: 'Loralai', trade: 'Vocational Training', status: 'Non-functional', type: '..' },

  // --- MUSAKHAIL, BARKHAN, DUKI ---
  { code: 'MK7083', name: 'Vocational Training Centre at Nath Drung District Musa Khail', district: 'Musakhail', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'MK7074', name: 'Vocational Training Institute Basti Noor Hasan Buzdar Ander pur Musakhail', district: 'Musakhail', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'BE7071', name: 'Vocational Training Institute Centre at Rarkan District Barkhan', district: 'Barkhan', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'DK7156', name: 'Handicrafts/ Tailoring Centre Dukki', district: 'Duki', trade: 'Handicrafts & Tailoring', status: 'Non-functional', type: '..' },

  // --- GWADAR ---
  { code: 'GR7068', name: 'Mizri Centre Gwadar', district: 'Gwadar', trade: 'Mizri Craft', status: 'Non-functional', type: '..' },
  { code: 'GR7062', name: 'Leather Emb: Centre Gwadar', district: 'Gwadar', trade: 'Leather Embroidery', status: 'Functional', type: 'Rented' },
  { code: 'GR7033', name: 'Tailoring Cum Knitting Centre Gwadar', district: 'Gwadar', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'GR7066', name: 'Tailoring & Cutting Centre Gwadar-2', district: 'Gwadar', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'GR7067', name: 'Tailoring & Cutting Centre Gwadar-3', district: 'Gwadar', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'GR7034', name: 'Handicrafts Dev: Centre Gwadar-1', district: 'Gwadar', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'GR7035', name: 'Handicrafts Dev: Centre Gwadar-2', district: 'Gwadar', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'GR7036', name: 'Handicrafts Dev: Centre Gwadar-3', district: 'Gwadar', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },

  // --- PANJGUR ---
  { code: 'PJ7029', name: 'Tailoring Cum Knitting Centre Panjgoor-1', district: 'Panjgur', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'PJ7030', name: 'Tailoring Cum Knitting Centre Panjgoor-2', district: 'Panjgur', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'PJ7053', name: 'Tailoring & Cutting Centre Panjgoor-5', district: 'Panjgur', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'PJ7054', name: 'Tailoring & Cutting Centre Panjgoor-6', district: 'Panjgur', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'PJ7048', name: 'Pottery Centre Panjgoor', district: 'Panjgur', trade: 'Pottery Craft', status: 'Functional', type: 'Govt' },
  { code: 'PJ7135', name: 'Tailoring Cum Knitting Centre at Khudabadan, Panjgoor', district: 'Panjgur', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'PJ7025', name: 'Handicrafts Dev: Centre Panjgoor-1', district: 'Panjgur', trade: 'Handicrafts Development', status: 'Functional', type: 'Govt' },
  { code: 'PJ7026', name: 'Handicrafts Dev: Centre Panjgoor-2', district: 'Panjgur', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'PJ7027', name: 'Handicrafts Dev: Centre Panjgoor-3', district: 'Panjgur', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'PJ7028', name: 'Handicrafts Dev: Centre Panjgoor-4', district: 'Panjgur', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'PJ7055', name: 'Handicrafts Dev: Centre Panjgoor-6', district: 'Panjgur', trade: 'Handicrafts Development', status: 'Non-functional', type: '..' },
  { code: 'PJ7150', name: 'Vocational Training Institute Centre Khudabadan East District Panjgoor', district: 'Panjgur', trade: 'Vocational Training', status: 'Non-functional', type: '..' },
  { code: 'PJ7151', name: 'Vocational Training Institute Centre Tasp District Panjgoor', district: 'Panjgur', trade: 'Vocational Training', status: 'Non-functional', type: '..' },

  // --- TURBAT / KECH ---
  { code: 'TB7101', name: 'Mizri Centre Turbat', district: 'Turbat / Kech', trade: 'Mizri Craft', status: 'Functional', type: 'Govt' },
  { code: 'TB7102', name: 'Mizri Centre Turbat-2', district: 'Turbat / Kech', trade: 'Mizri Craft', status: 'Functional', type: 'Rented' },
  { code: 'TB7103', name: 'Mizri Centre Turbat-3', district: 'Turbat / Kech', trade: 'Mizri Craft', status: 'Functional', type: 'Rented' },
  { code: 'TB7104', name: 'Pottery Centre Turbat', district: 'Turbat / Kech', trade: 'Pottery Craft', status: 'Functional', type: 'Govt' },
  { code: 'TB7083', name: 'Cotton & Silk Handloom Centre Kech-1', district: 'Turbat / Kech', trade: 'Cotton & Silk Handloom', status: 'Functional', type: 'Rented' },
  { code: 'TB7084', name: 'Cotton & Silk Handloom Centre Kech-2', district: 'Turbat / Kech', trade: 'Cotton & Silk Handloom', status: 'Functional', type: 'Rented' },
  { code: 'TB7085', name: 'Cotton & Silk Handloom Centre Kech-3', district: 'Turbat / Kech', trade: 'Cotton & Silk Handloom', status: 'Functional', type: 'Rented' },
  { code: 'TB7086', name: 'Cotton & Silk Handloom Centre Kech-4', district: 'Turbat / Kech', trade: 'Cotton & Silk Handloom', status: 'Functional', type: 'Rented' },
  { code: 'TB7022', name: 'Leather Emb: Centre Kech', district: 'Turbat / Kech', trade: 'Leather Embroidery', status: 'Functional', type: 'Govt' },
  { code: 'TB7082', name: 'Leather Emb: Centre Kech-2', district: 'Turbat / Kech', trade: 'Leather Embroidery', status: 'Functional', type: 'Rented' },
  { code: 'TB7112', name: 'Tailoring & Cutting Centre Turbat-9', district: 'Turbat / Kech', trade: 'Tailoring & Cutting', status: 'Non-functional', type: 'Rented' },
  { code: 'TB7113', name: 'Tailoring & Cutting Centre Turbat-10', district: 'Turbat / Kech', trade: 'Tailoring & Cutting', status: 'Non-functional', type: 'Rented' },
  { code: 'TB7255', name: 'Tailoring Cum Knitting Centre Buleda Kech at Turbat', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Non-functional', type: '..' },
  { code: 'TB7056', name: 'Tailoring Cum Knitting Centre Kech-1', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Govt' },
  { code: 'TB7057', name: 'Tailoring Cum Knitting Centre Kech-2', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'TB7058', name: 'Tailoring Cum Knitting Centre Kech-3', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'TB7059', name: 'Tailoring Cum Knitting Centre Kech-4', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'TB7060', name: 'Tailoring Cum Knitting Centre Kech-5', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'TB7061', name: 'Tailoring Cum Knitting Centre Kech-6', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Govt' },
  { code: 'TB7062', name: 'Tailoring Cum Knitting Centre Kech-7', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Govt' },
  { code: 'TB7063', name: 'Tailoring Cum Knitting Centre Kech-8', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Functional', type: 'Rented' },
  { code: 'TB7255', name: 'Tailoring Cum Knitting Centre Buleda Kech at Turbat', district: 'Turbat / Kech', trade: 'Tailoring & Knitting', status: 'Functional', type: '..' },
  { code: 'TB7277', name: 'Tailoring Cum Cutting Centre, Dasht', district: 'Turbat / Kech', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'TB7278', name: 'Tailoring Cum Cutting Centre, Hoshab', district: 'Turbat / Kech', trade: 'Tailoring & Cutting', status: 'Non-functional', type: '..' },
  { code: 'TB7046', name: 'Handicrafts Dev: Centre Kech-1', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7047', name: 'Handicrafts Dev: Centre Kech-2', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7048', name: 'Handicrafts Dev: Centre Kech-3', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7049', name: 'Handicrafts Dev: Centre Kech-4', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7050', name: 'Handicrafts Dev: Centre Kech-5', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7051', name: 'Handicrafts Dev: Centre Kech-6', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7052', name: 'Handicrafts Dev: Centre Kech-7', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7053', name: 'Handicrafts Dev: Centre Kech-8', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7054', name: 'Handicrafts Dev: Centre Kech-9', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7055', name: 'Handicrafts Dev: Centre Kech-10', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Functional', type: 'Rented' },
  { code: 'TB7114', name: 'Handicrafts Dev: Centre Turbat-11', district: 'Turbat / Kech', trade: 'Handicrafts Development', status: 'Non-functional', type: 'Rented' }
];

// Load from localStorage if modified by Admin, otherwise use default
function initCentersDatabase() {
  const saved = localStorage.getItem('siw_centers_db_v2');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Error loading centers from storage', e);
    }
  }
  return [...CENTERS_DATABASE];
}

window.CENTERS_DATABASE = initCentersDatabase();
window.DEFAULT_CENTERS_DATABASE = CENTERS_DATABASE;

window.saveCentersDatabase = function(centersList) {
  window.CENTERS_DATABASE = centersList;
  localStorage.setItem('siw_centers_db_v2', JSON.stringify(centersList));
};
