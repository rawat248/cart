const data = [
  {
    id: 1,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/899437/indu_pharma_ef_top_syrup_100_ml_0_0.jpg",
    title: "Indu Pharma EF-Top Syrup 100 ml",
    price: 162.0,
    category: "kid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 2,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/899433/inducare_ayurpen_syrup_200_ml_0_0.jpg",
    title: "Inducare Ayurpen Syrup 200 ml",
    price: 135.0,
    category: "kid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 3,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/951894/aimil_k_g_tone_forte_syrup_pack_of_4_x_100_ml_0_0.jpg",
    title: "Aimil K.G. Tone Forte Syrup",
    price: 497.64,
    category: "kid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 4,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/1064787/bibo_family_kit_%7C_cough_cold_sinus_relief_%7C_kids_safe_%7C_first_aid_for_clear_breathing_%7C5_products_486726_0_0.jpg",
    title: "Bibo Family Kit - Cough, Cold, Sinus Relief - Kids Safe - First",
    price: 1017.9,
    category: "kid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 5,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/341494/liv_52_tablet_100_s_0.jpg",
    title: "Himalaya Confido Tablet ",
    price: 151.3,
    category: "ayurveda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 6,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/104243/himalaya_liv_52_hb_capsule_10s_119367_0_1.jpg",
    title: "Himalaya Liv.52 HB Capsule ",
    price: 144.0,
    category: "ayurveda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 7,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/923527/axiom_ashwagandha_churna_100_gm_0_0.jpg",
    title: "Axiom Ashwagandha Churna ",
    price: 140.0,
    category: "ayurveda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 8,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/920374/bhumija_lifesciences_ashwagandha_250_mg_capsule_60s_0_0.jpg",
    title: "Bhumija Lifesciences Ashvagandha 250 mg Capsule ",
    price: 299.25,
    category: "ayurveda",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 9,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/842857/healthvit_cenvitan_women_multivitamin_multimineral_tablet_60s_0_2.jpg ",
    title: "HealthVit Cenvitan Women (Multivitamin & Multimineral)",
    price: 357.5,
    category: "covid essentials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 10,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/113742/revital_h_capsule_10s_37290_0_1.jpg ",
    title: "Revital H Capsule 10",
    price: 93.5,
    category: "covid essentials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 11,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/886988/dettol_antiseptic_liquid_disinfectant_250_ml_0_2.jpg ",
    title: "Dettol Antiseptic Liquid Disinfectant 250 ml",
    price: 127.77,
    category: "covid essentials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 12,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/959012/detelpro_juren_oxygen_concentrator_1_7_lpm_1s_0_0.jpg ",
    title: "DetelPro Juren Oxygen Concentrator (1-7 LPM)",
    price: 39000.0,
    category: "covid essentials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 13,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/821958/sbl_clearstone_drops_30ml_0.jpg ",
    title: "SBL CLEARSTONE DROPS 30ML",
    price: 128.65,
    category: "homeopathy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 14,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/830988/allen_a84_lipoma_drops_30_ml_0.jpg ",
    title: "Allen A84 Lipoma Drops 30 ml",
    price: 153.0,
    category: "homeopathy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 15,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/935722/aimil_bgr_34_tablet_pack_of_6_x_100s_0_1.jpg ",
    title: "Aimil BGR-34 Tablet (Pack of 6 x 100)",
    price: 2988.0,
    category: "homeopathy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
  {
    id: 16,
    image:
      "https://www.netmeds.com/images/product-v1/150x150/901995/lords_trituration_arsenic_iod_3x_tablet_450_gm_0_1.jpg",
    title: "Lord Trituration Aurum Mur Nat 3X Tablet 450 gm",
    price: 1946.5,
    category: "homeopathy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae cum et, vel temporibus debitis, dolorum illum rem sed.",
  },
];
export default data;
