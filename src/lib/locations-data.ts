export interface LocalFaq {
  q: string;
  a: string;
}

export interface LocalReview {
  name: string;
  area: string;
  review: string;
  rating: number;
  garment: string;
}

export interface LocationDetail {
  slug: string;
  name: string;
  zone: string;
  zoneSlug: 'north-bangalore' | 'east-bangalore' | 'south-bangalore' | 'central-west-bangalore';
  tagline: string;
  pincodes: string[];
  isExpressHub: boolean;
  pickupTime: string;
  deliveryTime: string;
  popularLandmarks: string[];
  serviceSpecialties: {
    title: string;
    desc: string;
    startingPrice: string;
  }[];
  localFaqs: LocalFaq[];
  localReview: LocalReview;
  nearbyAreas: { name: string; slug: string }[];
  metaTitle: string;
  metaDescription: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export const locationDetailsList: LocationDetail[] = [
  // --- NORTH BANGALORE (EXPRESS HUBS) ---
  {
    slug: 'jakkur',
    name: 'Jakkur',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Fastest 60-Minute Doorstep Tailoring & Blouse Stitching in Jakkur',
    pincodes: ['560077'],
    isExpressHub: true,
    pickupTime: 'Within 60 mins',
    deliveryTime: '3-4 Days (Express 24-hr option available)',
    popularLandmarks: [
      'Jakkur Lake',
      'Jakkur Aerodrome',
      'Jakkur Layout',
      'Orchid Meadows',
      'Green City',
      'Aerospace Park',
    ],
    serviceSpecialties: [
      {
        title: 'Designer Blouse Stitching',
        desc: 'Princess cut, boat neck, deep back, and padded designer blouse stitching with doorstep fitting in Jakkur.',
        startingPrice: '₹600',
      },
      {
        title: 'Aari & Maggam Work Embroidery',
        desc: 'Handcrafted zari, zardosi, and beadwork bridal blouse embroidery tailored to your fabric.',
        startingPrice: '₹1,500',
      },
      {
        title: 'Salwar Kameez & Kurti Tailoring',
        desc: 'Custom-fit daily wear, party wear suits, palazzo sets, and Anarkalis.',
        startingPrice: '₹800',
      },
      {
        title: 'Bridal Lehenga & Gowns',
        desc: 'Heavy lehenga choli tailoring with can-can layering and perfect fit trial.',
        startingPrice: '₹3,000',
      },
    ],
    localFaqs: [
      {
        q: 'How fast can a tailor pick up fabric in Jakkur?',
        a: 'Because our primary hub is in North Bangalore, we provide express doorstep pickup in Jakkur within 60 minutes of booking confirmation.',
      },
      {
        q: 'Do you visit gated communities and apartments in Jakkur?',
        a: 'Yes, our tailoring specialists regularly visit all major apartments and gated communities across Jakkur Layout, Orchid Meadows, Green City, and surrounding areas.',
      },
      {
        q: 'Can I provide a sample blouse for measurements in Jakkur?',
        a: 'Yes! You can simply hand over your best-fitting sample blouse during fabric pickup, or our expert can take fresh body measurements.',
      },
      {
        q: 'What is the starting price for blouse stitching in Jakkur?',
        a: 'Simple blouse stitching starts at ₹500/-, and designer blouses start at ₹600/- with doorstep pickup and delivery.',
      },
    ],
    localReview: {
      name: 'Pooja R.',
      area: 'Jakkur Layout',
      review:
        'TailoredIn picked up my silk blouse fabric from my apartment in Jakkur and delivered it stitched within 3 days. The princess cut fitting was flawless!',
      rating: 5,
      garment: 'Silk Designer Blouse',
    },
    nearbyAreas: [
      { name: 'Hebbal', slug: 'hebbal' },
      { name: 'Yelahanka', slug: 'yelahanka' },
      { name: 'Sahakar Nagar', slug: 'sahakar-nagar' },
      { name: 'Thanisandra', slug: 'thanisandra' },
      { name: 'Amruthahalli', slug: 'amruthahalli' },
    ],
    metaTitle: 'Ladies Tailor in Jakkur Bangalore | Doorstep Blouse & Suit Stitching',
    metaDescription:
      'Best ladies tailor in Jakkur Bangalore. Doorstep fabric pickup in 60 mins & 3-day delivery. Designer blouse, Aari work, salwar suits & lehenga stitching. Call +91 95901 87030.',
    coordinates: { latitude: 13.0768, longitude: 77.5975 },
  },
  {
    slug: 'hebbal',
    name: 'Hebbal',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Premier Doorstep Ladies Tailoring & Designer Blouses in Hebbal',
    pincodes: ['560024', '560092'],
    isExpressHub: true,
    pickupTime: 'Within 60–90 mins',
    deliveryTime: '3-5 Days (Express 24-hr available)',
    popularLandmarks: [
      'Hebbal Flyover',
      'Hebbal Kempapura',
      'Godrej Woodsman Estate',
      'Esteem Mall',
      'Bhartiya City link',
    ],
    serviceSpecialties: [
      {
        title: 'Designer Blouses & Saree Fall',
        desc: 'Padded blouse stitching, backless patterns, piping, and saree pico/fall work at your door in Hebbal.',
        startingPrice: '₹600',
      },
      {
        title: 'Bridal Aari & Maggam Work',
        desc: 'Traditional wedding blouses with antique gold zari and bead work designed by master seamstresses.',
        startingPrice: '₹1,500',
      },
      {
        title: 'Suit & Kurti Stitching',
        desc: 'Straight-cut, A-line, and flared salwar suits with custom necklines and sleeve styles.',
        startingPrice: '₹800',
      },
      {
        title: 'Garment Alterations & Restyling',
        desc: 'Upcycle old sarees into gowns or resize expensive ethnic wear with doorstep trial.',
        startingPrice: '₹200',
      },
    ],
    localFaqs: [
      {
        q: 'Do you offer doorstep tailoring in Hebbal Kempapura?',
        a: 'Yes, we provide door-to-door fabric pickup, measurement consultation, and delivery across all areas of Hebbal and Hebbal Kempapura.',
      },
      {
        q: 'What happens if the blouse needs slight alteration in Hebbal?',
        a: 'We offer a 100% Fit Guarantee. If any tweak is needed, our team collects the garment, alters it, and returns it to your doorstep at no additional charge.',
      },
      {
        q: 'Can I get urgent 24-hour blouse stitching in Hebbal?',
        a: 'Yes, express 24-hour and 48-hour delivery options are available for urgent functions and weddings.',
      },
    ],
    localReview: {
      name: 'Ananya S.',
      area: 'Hebbal Kempapura',
      review:
        'Super convenient service for working professionals. They came right to Godrej Woodsman in Hebbal, took measurements, and delivered 2 gorgeous blouses on time.',
      rating: 5,
      garment: 'Boat Neck Designer Blouse',
    },
    nearbyAreas: [
      { name: 'Jakkur', slug: 'jakkur' },
      { name: 'Sahakar Nagar', slug: 'sahakar-nagar' },
      { name: 'Manyata Tech Park', slug: 'manyata-tech-park' },
      { name: 'Nagavara', slug: 'nagavara' },
    ],
    metaTitle: 'Ladies Tailor in Hebbal Bangalore | Doorstep Blouse Stitching & Suits',
    metaDescription:
      'Top-rated ladies tailor in Hebbal Bangalore. Doorstep measurement, fabric pickup & delivery. Custom designer blouses, Aari embroidery, suits & bridal wear. Book now!',
    coordinates: { latitude: 13.0358, longitude: 77.597 },
  },
  {
    slug: 'yelahanka',
    name: 'Yelahanka',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Expert Custom Ladies Tailoring at Your Doorstep in Yelahanka',
    pincodes: ['560064', '560065'],
    isExpressHub: true,
    pickupTime: 'Within 60–90 mins',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Yelahanka New Town',
      'Yelahanka Old Town',
      'RMZ Galleria Mall',
      'NES Office',
      'Judicial Layout',
    ],
    serviceSpecialties: [
      {
        title: 'Wedding & Bridal Blouse Stitching',
        desc: 'Custom bridal blouses with heavy embellishments, cups, and perfect shoulder alignment in Yelahanka.',
        startingPrice: '₹1,500',
      },
      {
        title: 'Everyday & Office Wear Kurtis',
        desc: 'Comfortable, breathable cotton and silk kurti stitching with tailored comfort fit.',
        startingPrice: '₹800',
      },
      {
        title: 'Saree Pre-pleating & Draping Setup',
        desc: 'Ready-to-wear pre-stitched sarees and custom petticoat tailoring.',
        startingPrice: '₹400',
      },
      {
        title: 'Party Wear Lehenga Choli',
        desc: 'Designer flared lehengas with latkans and tailored fit for festive occasions.',
        startingPrice: '₹3,000',
      },
    ],
    localFaqs: [
      {
        q: 'Do you serve both Yelahanka Old Town and Yelahanka New Town?',
        a: 'Yes, TailoredIn covers all sectors of Yelahanka New Town, Old Town, Judicial Layout, and surrounding gated townships.',
      },
      {
        q: 'How do I book a tailor visit in Yelahanka?',
        a: 'Call or WhatsApp us at +91 95901 87030, or click Book Consultation to choose your pickup slot.',
      },
    ],
    localReview: {
      name: 'Divya M.',
      area: 'Yelahanka New Town',
      review:
        'Got 3 Aari work blouses stitched for my cousin’s wedding. The finishing and hand embroidery work were incredible. Very polite and prompt doorstep service!',
      rating: 5,
      garment: 'Bridal Aari Blouses',
    },
    nearbyAreas: [
      { name: 'Jakkur', slug: 'jakkur' },
      { name: 'Sahakar Nagar', slug: 'sahakar-nagar' },
      { name: 'Hebbal', slug: 'hebbal' },
    ],
    metaTitle: 'Ladies Tailor in Yelahanka Bangalore | Doorstep Blouse & Lehenga Tailoring',
    metaDescription:
      'Looking for a ladies tailor in Yelahanka? Doorstep measurement & fabric pickup in Yelahanka New Town & Old Town. Designer blouses, Aari work & salwar suits in 3-5 days.',
    coordinates: { latitude: 13.1007, longitude: 77.5963 },
  },
  {
    slug: 'manyata-tech-park',
    name: 'Manyata Tech Park',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Hassle-Free Doorstep Tailoring for Techies & Residents near Manyata',
    pincodes: ['560045'],
    isExpressHub: true,
    pickupTime: 'Within 60 mins',
    deliveryTime: '3-4 Days',
    popularLandmarks: [
      'Manyata Embassy Business Park',
      'Manyata Residency',
      'Nagavara Junction',
      'Thanisandra Link Road',
      'Elements Mall',
    ],
    serviceSpecialties: [
      {
        title: 'Office-Ready Suits & Kurtis',
        desc: 'Crisp cotton and linen workwear suits, straight pants, and trendy tunics tailored for IT professionals.',
        startingPrice: '₹800',
      },
      {
        title: 'Festival & Party Blouses',
        desc: 'Stylish boat neck, halter neck, and designer blouses with padded cups and comfortable fits.',
        startingPrice: '₹600',
      },
      {
        title: 'Quick Doorstep Alterations',
        desc: 'Fixing waist sizes, sleeves, and hemlines for western and ethnic outfits without visiting a physical shop.',
        startingPrice: '₹200',
      },
    ],
    localFaqs: [
      {
        q: 'Can you pick up fabric from tech park gates or nearby apartments?',
        a: 'Yes, we frequently do pickups from Manyata Residency, Karle Zenith, and all residential apartments around Manyata Tech Park.',
      },
      {
        q: 'Can I schedule evening or weekend pickup slots near Manyata?',
        a: 'Yes, we offer flexible evening and weekend pickup and delivery slots to suit your office schedules.',
      },
    ],
    localReview: {
      name: 'Kavitha K.',
      area: 'Manyata Residency',
      review:
        'As an IT professional with zero time to visit tailors, TailoredIn is a lifesaver. Doorstep pickup in 45 mins and delivered back ironed and fitted perfectly!',
      rating: 5,
      garment: 'Designer Kurtis & Pants',
    },
    nearbyAreas: [
      { name: 'Nagavara', slug: 'nagavara' },
      { name: 'Thanisandra', slug: 'thanisandra' },
      { name: 'Hebbal', slug: 'hebbal' },
      { name: 'Amruthahalli', slug: 'amruthahalli' },
    ],
    metaTitle: 'Ladies Tailor near Manyata Tech Park Bangalore | Doorstep Stitching',
    metaDescription:
      'Doorstep ladies tailoring service near Manyata Tech Park & Nagavara Bangalore. Custom blouses, suits, kurtis & alterations delivered in 3-5 days. Call +91 95901 87030.',
    coordinates: { latitude: 13.0475, longitude: 77.6206 },
  },
  {
    slug: 'sahakar-nagar',
    name: 'Sahakar Nagar',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Custom Ladies Tailoring & Designer Blouse Specialists in Sahakar Nagar',
    pincodes: ['560092'],
    isExpressHub: true,
    pickupTime: 'Within 60 mins',
    deliveryTime: '3-4 Days',
    popularLandmarks: [
      'Sahakar Nagar Main Road',
      'Ganesha Temple',
      'CQAL Layout',
      'Tata Nagar',
      'Kodigehalli link',
    ],
    serviceSpecialties: [
      {
        title: 'Silk Saree Blouses with Aari Work',
        desc: 'Traditional South Indian bridal blouse stitching with custom embroidery designs.',
        startingPrice: '₹1,500',
      },
      {
        title: 'Custom Salwar Suits & Palazzo Sets',
        desc: 'Flawlessly fitted ethnic suits, Patiala salwars, and straight-cut trousers.',
        startingPrice: '₹800',
      },
    ],
    localFaqs: [
      {
        q: 'Do you offer doorstep pickup in Tata Nagar and CQAL Layout near Sahakar Nagar?',
        a: 'Yes, we cover all blocks (A to G) of Sahakar Nagar, CQAL Layout, Tata Nagar, and Kodigehalli.',
      },
    ],
    localReview: {
      name: 'Meera N.',
      area: 'Sahakar Nagar',
      review:
        'Found them online and couldn’t be happier. The blouse neckline and armhole fitting were exact to my sample garment.',
      rating: 5,
      garment: 'Kanjeevaram Blouse with Piping',
    },
    nearbyAreas: [
      { name: 'Hebbal', slug: 'hebbal' },
      { name: 'Jakkur', slug: 'jakkur' },
      { name: 'Yelahanka', slug: 'yelahanka' },
    ],
    metaTitle: 'Ladies Tailor in Sahakar Nagar Bangalore | Doorstep Blouse Stitching',
    metaDescription:
      'Premier ladies tailor in Sahakar Nagar Bangalore. Doorstep measurement, fabric pickup & delivery. Designer blouses, silk saree stitching, suits & bridal wear.',
    coordinates: { latitude: 13.0623, longitude: 77.587 },
  },
  {
    slug: 'thanisandra',
    name: 'Thanisandra',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Reliable Doorstep Blouse, Suit & Lehenga Tailor in Thanisandra',
    pincodes: ['560077', '560045'],
    isExpressHub: true,
    pickupTime: 'Within 60 mins',
    deliveryTime: '3-4 Days',
    popularLandmarks: [
      'Thanisandra Main Road',
      'Bhartiya City Nikoo Homes',
      'Sobha City',
      'Dr. Shivaram Karanth Nagar',
      'Rachenahalli Lake',
    ],
    serviceSpecialties: [
      {
        title: 'Modern Designer Blouse Stitching',
        desc: 'Padded princess cut, back bow, and modern necklines crafted for trendy saree looks.',
        startingPrice: '₹600',
      },
      {
        title: 'Bridal Gowns & Anarkali Dresses',
        desc: 'Custom floor-length Anarkalis, ethnic gowns, and lehengas tailored with perfection.',
        startingPrice: '₹2,500',
      },
    ],
    localFaqs: [
      {
        q: 'Do you provide doorstep tailoring inside Bhartiya City & Sobha City?',
        a: 'Yes, our tailors visit Bhartiya City Nikoo Homes, Sobha City, and all gated communities on Thanisandra Main Road daily.',
      },
    ],
    localReview: {
      name: 'Sneha B.',
      area: 'Bhartiya City, Thanisandra',
      review:
        'Doorstep pickup in Bhartiya City was very smooth. The master tailor took clear notes on how I wanted my sleeves and neckline. Loved the final output!',
      rating: 5,
      garment: 'Princess Cut Blouse & Kurti',
    },
    nearbyAreas: [
      { name: 'Jakkur', slug: 'jakkur' },
      { name: 'Manyata Tech Park', slug: 'manyata-tech-park' },
      { name: 'Nagavara', slug: 'nagavara' },
      { name: 'Hennur', slug: 'hennur' },
    ],
    metaTitle: 'Ladies Tailor in Thanisandra Bangalore | Doorstep Stitching & Fitting',
    metaDescription:
      'Top ladies tailor in Thanisandra Main Road & Bhartiya City Bangalore. Doorstep fabric pickup, designer blouses, suits & bridal wear in 3-5 days. Call +91 95901 87030.',
    coordinates: { latitude: 13.0645, longitude: 77.629 },
  },
  {
    slug: 'amruthahalli',
    name: 'Amruthahalli',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Fast Doorstep Ladies Tailoring & Blouse Fitting in Amruthahalli',
    pincodes: ['560092'],
    isExpressHub: true,
    pickupTime: 'Within 60 mins',
    deliveryTime: '3-4 Days',
    popularLandmarks: [
      'Amruthahalli Main Road',
      'Talacauvery Layout',
      'Dasarahalli Link',
      'Jakkur Cross',
    ],
    serviceSpecialties: [
      {
        title: 'Custom Blouses & Alterations',
        desc: 'Fine blouse tailoring, bra padding, and alterations with doorstep convenience.',
        startingPrice: '₹500',
      },
      {
        title: 'Salwar & Churidar Stitching',
        desc: 'Traditional churidar sets, straight suits, and stylish dupattas.',
        startingPrice: '₹800',
      },
    ],
    localFaqs: [
      {
        q: 'How can I schedule a tailor visit in Amruthahalli?',
        a: 'Simply call/WhatsApp +91 95901 87030 or book a slot online. Our representative will visit your address in Amruthahalli promptly.',
      },
    ],
    localReview: {
      name: 'Geetha P.',
      area: 'Talacauvery Layout, Amruthahalli',
      review:
        'Great craftsmanship and very punctual. Saved me the headache of travelling to commercial street for simple blouse stitching.',
      rating: 5,
      garment: 'Simple Silk Blouse',
    },
    nearbyAreas: [
      { name: 'Jakkur', slug: 'jakkur' },
      { name: 'Hebbal', slug: 'hebbal' },
      { name: 'Sahakar Nagar', slug: 'sahakar-nagar' },
    ],
    metaTitle: 'Ladies Tailor in Amruthahalli Bangalore | Doorstep Stitching Service',
    metaDescription:
      'Doorstep ladies tailor in Amruthahalli Bangalore. Fast pickup, custom blouse stitching, Aari embroidery, salwar suits & alterations. Call +91 95901 87030.',
    coordinates: { latitude: 13.065, longitude: 77.601 },
  },
  {
    slug: 'hennur',
    name: 'Hennur',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Boutique-Quality Doorstep Tailoring on Hennur Main Road & Bagalur Road',
    pincodes: ['560043', '560077'],
    isExpressHub: true,
    pickupTime: 'Within 60–90 mins',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Hennur Main Road',
      'Hennur Cross',
      'Mantri Webcity',
      'Geddalahalli',
      'Kothanur',
    ],
    serviceSpecialties: [
      {
        title: 'Contemporary Blouses & Crop Tops',
        desc: 'Stylish blouse designs, corset backs, and jacket-style ethnic tops tailored with precision.',
        startingPrice: '₹600',
      },
      {
        title: 'Bridal & Festive Outfits',
        desc: 'Intricate Aari work and designer lehengas crafted for festive occasions and weddings.',
        startingPrice: '₹1,500',
      },
    ],
    localFaqs: [
      {
        q: 'Do you deliver to Mantri Webcity and apartments on Hennur Road?',
        a: 'Yes, we provide full doorstep pickup and trial delivery service along Hennur Main Road, Mantri Webcity, Kothanur, and Geddalahalli.',
      },
    ],
    localReview: {
      name: 'Roshni T.',
      area: 'Hennur Main Road',
      review:
        'Exceptional stitching quality! The lining was soft pure cotton, and the boat neck design was exactly what I showed them on Pinterest.',
      rating: 5,
      garment: 'Pinterest Inspired Designer Blouse',
    },
    nearbyAreas: [
      { name: 'Thanisandra', slug: 'thanisandra' },
      { name: 'Nagavara', slug: 'nagavara' },
      { name: 'Manyata Tech Park', slug: 'manyata-tech-park' },
    ],
    metaTitle: 'Ladies Tailor in Hennur Bangalore | Doorstep Blouse & Ethnic Stitching',
    metaDescription:
      'Best ladies tailoring service in Hennur & Kothanur Bangalore. Doorstep fabric pickup, designer blouses, Aari embroidery, salwar suits & alterations delivered in 3-5 days.',
    coordinates: { latitude: 13.036, longitude: 77.643 },
  },
  {
    slug: 'nagavara',
    name: 'Nagavara',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Custom Ladies Tailoring & Designer Blouse Fitting in Nagavara',
    pincodes: ['560045'],
    isExpressHub: true,
    pickupTime: 'Within 60 mins',
    deliveryTime: '3-4 Days',
    popularLandmarks: [
      'Nagavara Junction',
      'Lumbini Gardens',
      'Arabic College Link',
      'Outer Ring Road',
    ],
    serviceSpecialties: [
      {
        title: 'Designer Blouse & Saree Work',
        desc: 'Precision fitting blouses, piping, latkans, and falls tailored to your style.',
        startingPrice: '₹600',
      },
      {
        title: 'Salwar Suits & Daily Kurtis',
        desc: 'Custom-fit daily wear and party wear salwar suits tailored with care.',
        startingPrice: '₹800',
      },
    ],
    localFaqs: [
      {
        q: 'What is the pickup time in Nagavara?',
        a: 'We offer express pickup in Nagavara within 60 minutes of booking confirmation.',
      },
    ],
    localReview: {
      name: 'Farzana A.',
      area: 'Nagavara',
      review:
        'Stitched 4 salwar suits for Eid. Tailoring was very neat and delivered right to my apartment on time.',
      rating: 5,
      garment: 'Salwar Kameez Suits',
    },
    nearbyAreas: [
      { name: 'Manyata Tech Park', slug: 'manyata-tech-park' },
      { name: 'Hebbal', slug: 'hebbal' },
      { name: 'Thanisandra', slug: 'thanisandra' },
    ],
    metaTitle: 'Ladies Tailor in Nagavara Bangalore | Doorstep Stitching & Alterations',
    metaDescription:
      'Ladies tailor in Nagavara Bangalore. Doorstep pickup, designer blouses, salwar suits, kurtis & bridal wear delivered in 3-5 days. Call +91 95901 87030.',
    coordinates: { latitude: 13.042, longitude: 77.62 },
  },
  {
    slug: 'rk-hegde-nagar',
    name: 'RK Hegde Nagar',
    zone: 'North Bangalore (Hub & Express Service)',
    zoneSlug: 'north-bangalore',
    tagline: 'Doorstep Tailoring & Blouse Stitching in RK Hegde Nagar & Dr. SRK Nagar',
    pincodes: ['560077'],
    isExpressHub: true,
    pickupTime: 'Within 60 mins',
    deliveryTime: '3-4 Days',
    popularLandmarks: [
      'RK Hegde Nagar Main Road',
      'Dr. Shivaram Karanth Nagar',
      'Rachenahalli Lake',
      'Mariyannapalya',
    ],
    serviceSpecialties: [
      {
        title: 'Custom Blouses & Aari Work',
        desc: 'Handcrafted zardosi embroidery and padded designer blouse stitching.',
        startingPrice: '₹600',
      },
      {
        title: 'Salwar Suits & Gowns',
        desc: 'Custom ethnic suits, kurtis, and floor-length Anarkali dresses.',
        startingPrice: '₹800',
      },
    ],
    localFaqs: [
      {
        q: 'Do you offer pickup in Dr. Shivaram Karanth Nagar?',
        a: 'Yes, we provide doorstep pickup and delivery across RK Hegde Nagar, SRK Nagar, and Mariyannapalya.',
      },
    ],
    localReview: {
      name: 'Sunitha V.',
      area: 'RK Hegde Nagar',
      review:
        'Great experience. Fast fabric collection and the blouse fitting was spot on.',
      rating: 5,
      garment: 'Padded Princess Cut Blouse',
    },
    nearbyAreas: [
      { name: 'Jakkur', slug: 'jakkur' },
      { name: 'Thanisandra', slug: 'thanisandra' },
      { name: 'Hebbal', slug: 'hebbal' },
    ],
    metaTitle: 'Ladies Tailor in RK Hegde Nagar Bangalore | Doorstep Stitching',
    metaDescription:
      'Best ladies tailoring service in RK Hegde Nagar & SRK Nagar Bangalore. Doorstep fabric pickup, designer blouses, suits & lehengas in 3-5 days.',
    coordinates: { latitude: 13.068, longitude: 77.625 },
  },

  // --- EAST BANGALORE (IT CORRIDORS & TOWNSHIPS) ---
  {
    slug: 'whitefield',
    name: 'Whitefield',
    zone: 'East Bangalore',
    zoneSlug: 'east-bangalore',
    tagline: 'Luxury Doorstep Tailoring & Designer Blouse Boutique in Whitefield',
    pincodes: ['560066', '560087'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'ITPB / International Tech Park',
      'Prestige Shantiniketan',
      'Forum Mall Whitefield',
      'Varthur Road',
      'Kadugodi',
      'Hope Farm Junction',
    ],
    serviceSpecialties: [
      {
        title: 'Boutique Designer Blouse Stitching',
        desc: 'High-neck, corset style, deep V back, and padded designer blouses tailored with precision in Whitefield.',
        startingPrice: '₹600',
      },
      {
        title: 'Bridal Aari & Maggam Embroidery',
        desc: 'Intricate bridal wear and wedding blouse embroidery crafted by master artisans.',
        startingPrice: '₹1,500',
      },
      {
        title: 'Workwear Salwar Suits & Pants',
        desc: 'Comfortable, professional cotton/linen kurtas and pencil pants tailored for corporate wear.',
        startingPrice: '₹800',
      },
      {
        title: 'Lehenga Choli & Gown Stitching',
        desc: 'Heavy festive lehengas, crop tops, and ethnic gowns with custom flare and can-can lining.',
        startingPrice: '₹3,000',
      },
    ],
    localFaqs: [
      {
        q: 'Do you provide doorstep tailoring inside Prestige Shantiniketan & large societies in Whitefield?',
        a: 'Yes, our tailoring specialists regularly collect fabric and deliver across Prestige Shantiniketan, Godrej United, Brigade Cosmopolis, and all major apartments in Whitefield.',
      },
      {
        q: 'How do you take measurements in Whitefield?',
        a: 'You can hand over your best-fitting sample garment during pickup, or our expert consultant will take comprehensive body measurements at your doorstep.',
      },
      {
        q: 'Is there a fit guarantee for Whitefield orders?',
        a: 'Absolutely. We provide a 100% Fit Guarantee with free doorstep alterations if any adjustment is needed.',
      },
    ],
    localReview: {
      name: 'Radhika Iyer',
      area: 'Prestige Shantiniketan, Whitefield',
      review:
        'Living in Whitefield, finding time for tailor visits is impossible. TailoredIn collected my fabric from my doorstep and delivered 3 blouses with boutique-level finishing!',
      rating: 5,
      garment: 'Designer Padded Blouses',
    },
    nearbyAreas: [
      { name: 'Marathahalli', slug: 'marathahalli' },
      { name: 'Bellandur', slug: 'bellandur' },
      { name: 'Indiranagar', slug: 'indiranagar' },
      { name: 'KR Puram', slug: 'kr-puram' },
    ],
    metaTitle: 'Ladies Tailor in Whitefield Bangalore | Doorstep Blouse Stitching & Suits',
    metaDescription:
      'Best ladies tailor in Whitefield Bangalore. Doorstep fabric pickup & measurement across Prestige Shantiniketan, ITPB & Varthur. Designer blouses, Aari work & lehengas.',
    coordinates: { latitude: 12.9698, longitude: 77.7499 },
  },
  {
    slug: 'indiranagar',
    name: 'Indiranagar',
    zone: 'East Bangalore',
    zoneSlug: 'east-bangalore',
    tagline: 'High-Fashion Doorstep Ladies Tailoring & Designer Blouses in Indiranagar',
    pincodes: ['560038', '560008'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      '100 Feet Road',
      '12th Main Indiranagar',
      'Defence Colony',
      'HAL 2nd Stage',
      'CMH Road',
    ],
    serviceSpecialties: [
      {
        title: 'Haute Couture Blouse Tailoring',
        desc: 'Statement back designs, scalloped borders, and padded bridal blouses with high-fashion aesthetics.',
        startingPrice: '₹600',
      },
      {
        title: 'Custom Indo-Western Outfits',
        desc: 'Co-ord sets, tailored blazers for ethnic wear, palazzo suits, and pre-draped sarees.',
        startingPrice: '₹1,200',
      },
      {
        title: 'Handcrafted Aari & Zardosi Work',
        desc: 'Exquisite bridal handwork with pearl beads, cutdana, and golden zari embroidery.',
        startingPrice: '₹1,500',
      },
    ],
    localFaqs: [
      {
        q: 'Can I recreate celebrity or Pinterest designer blouses in Indiranagar?',
        a: 'Yes! Share reference photos on WhatsApp (+91 95901 87030), and our master pattern-makers with 20+ years experience will craft the exact design.',
      },
      {
        q: 'Do you cover Defence Colony and HAL 2nd Stage?',
        a: 'Yes, we provide doorstep pickup and delivery across all stages of Indiranagar, Defence Colony, and surrounding localities.',
      },
    ],
    localReview: {
      name: 'Nandini Sen',
      area: 'Defence Colony, Indiranagar',
      review:
        'The finish and cuts rival high-end boutiques in Indiranagar at half the price. Exceptional attention to detail on the lining and seams.',
      rating: 5,
      garment: 'Organza Saree Blouse & Crop Top',
    },
    nearbyAreas: [
      { name: 'Koramangala', slug: 'koramangala' },
      { name: 'Whitefield', slug: 'whitefield' },
      { name: 'Marathahalli', slug: 'marathahalli' },
      { name: 'CV Raman Nagar', slug: 'cv-raman-nagar' },
    ],
    metaTitle: 'Ladies Tailor in Indiranagar Bangalore | Boutique Blouse & Suit Tailoring',
    metaDescription:
      'Premier ladies tailor in Indiranagar Bangalore. Doorstep pickup, designer blouses, Aari embroidery, custom suits & bridal lehengas delivered in 3-5 days. Call +91 95901 87030.',
    coordinates: { latitude: 12.9784, longitude: 77.6408 },
  },
  {
    slug: 'marathahalli',
    name: 'Marathahalli',
    zone: 'East Bangalore',
    zoneSlug: 'east-bangalore',
    tagline: 'Convenient Doorstep Tailoring for Blouses, Suits & Lehengas in Marathahalli',
    pincodes: ['560037'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Marathahalli Bridge',
      'Outer Ring Road',
      'Spice Garden Layout',
      'Munnekollal',
      'Kalamandir area',
    ],
    serviceSpecialties: [
      {
        title: 'Designer Blouse Stitching',
        desc: 'Custom-fit blouses with pads, piping, and modern cuts delivered to your doorstep.',
        startingPrice: '₹600',
      },
      {
        title: 'Salwar Kameez & Patiala Suits',
        desc: 'Perfect fitting suits and kurtis with matching pants and churidars.',
        startingPrice: '₹800',
      },
    ],
    localFaqs: [
      {
        q: 'Do you visit Spice Garden and Munnekollal in Marathahalli?',
        a: 'Yes, we provide doorstep pickup and delivery across Spice Garden, Munnekollal, Kundalahalli, and Marathahalli ORR.',
      },
    ],
    localReview: {
      name: 'Lavanya G.',
      area: 'Spice Garden, Marathahalli',
      review:
        'No more bargaining or waiting in tailoring shops. TailoredIn picked my silk fabric, gave me a great fit, and delivered on time.',
      rating: 5,
      garment: 'Silk Saree Blouse with Maggam Work',
    },
    nearbyAreas: [
      { name: 'Whitefield', slug: 'whitefield' },
      { name: 'Bellandur', slug: 'bellandur' },
      { name: 'Indiranagar', slug: 'indiranagar' },
    ],
    metaTitle: 'Ladies Tailor in Marathahalli Bangalore | Doorstep Blouse & Suit Tailor',
    metaDescription:
      'Top ladies tailor in Marathahalli Bangalore. Doorstep fabric pickup & delivery. Custom designer blouses, salwar suits, Aari work & lehengas in 3-5 days.',
    coordinates: { latitude: 12.9591, longitude: 77.6974 },
  },
  {
    slug: 'bellandur',
    name: 'Bellandur',
    zone: 'East Bangalore',
    zoneSlug: 'east-bangalore',
    tagline: 'Doorstep Ladies Tailoring & Blouse Fitting for Bellandur Tech Hub',
    pincodes: ['560103'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Outer Ring Road Bellandur',
      'EcoWorld / EcoSpace',
      'Green Glen Layout',
      'Sobha Jasmine',
      'Central Mall Bellandur',
    ],
    serviceSpecialties: [
      {
        title: 'Workwear & Festive Blouses',
        desc: 'Custom designer blouses with comfortable lining and flawless shoulder fitting.',
        startingPrice: '₹600',
      },
      {
        title: 'Salwar Suits & Palazzo Sets',
        desc: 'Modern and traditional ethnic sets tailored to your body proportions.',
        startingPrice: '₹800',
      },
    ],
    localFaqs: [
      {
        q: 'Do you provide pickup in Green Glen Layout Bellandur?',
        a: 'Yes, our team covers Green Glen Layout, EcoWorld tech park area, and all gated residential complexes in Bellandur.',
      },
    ],
    localReview: {
      name: 'Shreya Roy',
      area: 'Green Glen Layout, Bellandur',
      review:
        'Super easy service for busy professionals. WhatsApp booking was instantaneous and the blouse fits like a glove.',
      rating: 5,
      garment: 'Princess Cut Cotton Blouse',
    },
    nearbyAreas: [
      { name: 'Marathahalli', slug: 'marathahalli' },
      { name: 'HSR Layout', slug: 'hsr-layout' },
      { name: 'Koramangala', slug: 'koramangala' },
      { name: 'Whitefield', slug: 'whitefield' },
    ],
    metaTitle: 'Ladies Tailor in Bellandur Bangalore | Doorstep Stitching & Fitting',
    metaDescription:
      'Ladies tailoring service in Bellandur & Green Glen Layout Bangalore. Doorstep measurement, designer blouses, suits, kurtis & lehengas delivered in 3-5 days.',
    coordinates: { latitude: 12.9304, longitude: 77.6784 },
  },
  {
    slug: 'kr-puram',
    name: 'KR Puram',
    zone: 'East Bangalore',
    zoneSlug: 'east-bangalore',
    tagline: 'Reliable Doorstep Ladies Tailoring & Custom Stitching in KR Puram',
    pincodes: ['560036'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'KR Puram Hanging Bridge',
      'Bhattarahalli',
      'Old Madras Road',
      'TC Palya Main Road',
    ],
    serviceSpecialties: [
      {
        title: 'Traditional Blouses & Aari Work',
        desc: 'Expert hand embroidery and custom blouse stitching with double interlocking seams.',
        startingPrice: '₹600',
      },
      {
        title: 'Custom Kurtis & Alterations',
        desc: 'Everyday wear and festive ethnic tailoring delivered to your doorstep.',
        startingPrice: '₹800',
      },
    ],
    localFaqs: [
      {
        q: 'Do you cover TC Palya and Bhattarahalli near KR Puram?',
        a: 'Yes, we provide doorstep pickup and delivery across KR Puram, TC Palya, Bhattarahalli, and surrounding areas.',
      },
    ],
    localReview: {
      name: 'Padma L.',
      area: 'KR Puram',
      review:
        'Great tailoring quality and very affordable starting rates. Very polite pickup executive.',
      rating: 5,
      garment: 'Aari Work Silk Blouse',
    },
    nearbyAreas: [
      { name: 'Whitefield', slug: 'whitefield' },
      { name: 'Mahadevapura', slug: 'mahadevapura' },
      { name: 'CV Raman Nagar', slug: 'cv-raman-nagar' },
    ],
    metaTitle: 'Ladies Tailor in KR Puram Bangalore | Doorstep Blouse Stitching',
    metaDescription:
      'Top ladies tailor in KR Puram Bangalore. Doorstep fabric pickup & delivery. Custom designer blouses, Aari embroidery, salwar suits & lehengas in 3-5 days.',
    coordinates: { latitude: 13.0075, longitude: 77.6959 },
  },
  {
    slug: 'cv-raman-nagar',
    name: 'CV Raman Nagar',
    zone: 'East Bangalore',
    zoneSlug: 'east-bangalore',
    tagline: 'Custom Ladies Tailoring & Designer Blouse Fitting in CV Raman Nagar',
    pincodes: ['560093'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Bagmane Tech Park',
      'DRDO Township',
      'Kaggadasapura Main Road',
      'Bhuvaneshwari Nagar',
    ],
    serviceSpecialties: [
      {
        title: 'Designer Blouses & Workwear Kurtis',
        desc: 'Precision fitting blouses and ethnic workwear delivered to your doorstep.',
        startingPrice: '₹600',
      },
    ],
    localFaqs: [
      {
        q: 'Do you visit DRDO Township and Kaggadasapura?',
        a: 'Yes, we provide doorstep pickup and delivery across CV Raman Nagar, Kaggadasapura, and DRDO residential layouts.',
      },
    ],
    localReview: {
      name: 'Aarti N.',
      area: 'Kaggadasapura, CV Raman Nagar',
      review:
        'Smooth doorstep process from pickup to delivery. The neck piping and lining finish were very neat.',
      rating: 5,
      garment: 'Designer Blouse & Salwar Suit',
    },
    nearbyAreas: [
      { name: 'Indiranagar', slug: 'indiranagar' },
      { name: 'KR Puram', slug: 'kr-puram' },
      { name: 'Mahadevapura', slug: 'mahadevapura' },
    ],
    metaTitle: 'Ladies Tailor in CV Raman Nagar Bangalore | Doorstep Stitching',
    metaDescription:
      'Ladies tailor in CV Raman Nagar & Kaggadasapura Bangalore. Doorstep fabric pickup, designer blouses, suits & alterations delivered in 3-5 days. Call +91 95901 87030.',
    coordinates: { latitude: 12.9855, longitude: 77.6639 },
  },
  {
    slug: 'mahadevapura',
    name: 'Mahadevapura',
    zone: 'East Bangalore',
    zoneSlug: 'east-bangalore',
    tagline: 'Boutique-Grade Doorstep Tailoring in Mahadevapura & Outer Ring Road',
    pincodes: ['560048'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Mahadevapura Ring Road',
      'Garudacharpalya',
      'B Narayanapura',
      'Bagmane World Technology Centre',
    ],
    serviceSpecialties: [
      {
        title: 'Designer Blouse & Ethnic Stitching',
        desc: 'Padded blouses, churidar suits, and party wear dresses tailored to your exact measurements.',
        startingPrice: '₹600',
      },
    ],
    localFaqs: [
      {
        q: 'How do I book a tailor in Mahadevapura?',
        a: 'Simply call or WhatsApp +91 95901 87030 to schedule your doorstep pickup slot.',
      },
    ],
    localReview: {
      name: 'Nisha S.',
      area: 'Mahadevapura',
      review:
        'Great service! The tailor collected the fabric directly from my flat and returned a perfectly fitted lehenga choli.',
      rating: 5,
      garment: 'Lehenga Choli',
    },
    nearbyAreas: [
      { name: 'Whitefield', slug: 'whitefield' },
      { name: 'Marathahalli', slug: 'marathahalli' },
      { name: 'KR Puram', slug: 'kr-puram' },
    ],
    metaTitle: 'Ladies Tailor in Mahadevapura Bangalore | Doorstep Blouse Tailoring',
    metaDescription:
      'Best ladies tailoring service in Mahadevapura Bangalore. Doorstep pickup, designer blouses, salwar suits, kurtis & alterations in 3-5 days.',
    coordinates: { latitude: 12.9922, longitude: 77.6908 },
  },

  // --- SOUTH BANGALORE (FASHION & SILK HUBS) ---
  {
    slug: 'koramangala',
    name: 'Koramangala',
    zone: 'South Bangalore',
    zoneSlug: 'south-bangalore',
    tagline: 'Premium Boutique Doorstep Ladies Tailoring in Koramangala',
    pincodes: ['560034', '560095'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Koramangala 3rd Block',
      'Koramangala 4th Block',
      'Koramangala 5th Block / Jyoti Nivas College',
      'Koramangala 6th Block',
      'Forum Mall Koramangala',
    ],
    serviceSpecialties: [
      {
        title: 'Chic Designer Blouse Tailoring',
        desc: 'Modern backless, corset, high-collar, and padded blouses tailored for trendy saree styling in Koramangala.',
        startingPrice: '₹600',
      },
      {
        title: 'Bridal Aari & Maggam Work',
        desc: 'Heavy bridal embroidery with antique zari, stones, and zardosi craftsmanship.',
        startingPrice: '₹1,500',
      },
      {
        title: 'Custom Indo-Western Gowns & Co-ords',
        desc: 'Tailored ethnic suits, flared Anarkalis, and fusion jumpsuits made to measure.',
        startingPrice: '₹1,200',
      },
      {
        title: 'Doorstep Garment Alterations',
        desc: 'Fine alterations for designer outfits, evening gowns, and trousers with home trial.',
        startingPrice: '₹200',
      },
    ],
    localFaqs: [
      {
        q: 'Do you cover all blocks (1st to 8th) of Koramangala?',
        a: 'Yes, we provide doorstep pickup, measurement consultation, and delivery across all blocks of Koramangala.',
      },
      {
        q: 'Can I choose custom necklines and sleeve lengths in Koramangala?',
        a: 'Yes! Our tailoring consultant takes comprehensive notes on your preferred necklines, cup padding, sleeve style, and latkan attachments.',
      },
    ],
    localReview: {
      name: 'Tara Mukherjee',
      area: 'Koramangala 4th Block',
      review:
        'Koramangala boutiques usually charge exorbitant prices. TailoredIn provided better fitting and finish right at my doorstep for a fraction of the cost!',
      rating: 5,
      garment: 'Bridal Silk Blouse with Aari Work',
    },
    nearbyAreas: [
      { name: 'HSR Layout', slug: 'hsr-layout' },
      { name: 'Indiranagar', slug: 'indiranagar' },
      { name: 'BTM Layout', slug: 'btm-layout' },
      { name: 'Jayanagar', slug: 'jayanagar' },
    ],
    metaTitle: 'Ladies Tailor in Koramangala Bangalore | Boutique Blouse & Suit Tailoring',
    metaDescription:
      'Premier ladies tailor in Koramangala Bangalore. Doorstep fabric pickup & measurement. Designer blouses, Aari embroidery, custom suits & bridal wear in 3-5 days. Call +91 95901 87030.',
    coordinates: { latitude: 12.9352, longitude: 77.6245 },
  },
  {
    slug: 'hsr-layout',
    name: 'HSR Layout',
    zone: 'South Bangalore',
    zoneSlug: 'south-bangalore',
    tagline: 'Modern Doorstep Tailoring for Blouses, Suits & Dresses in HSR Layout',
    pincodes: ['560102'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'HSR Layout Sector 1 to 7',
      '27th Main HSR',
      'Agara Lake Link',
      'BDA Complex HSR',
    ],
    serviceSpecialties: [
      {
        title: 'Modern Saree Blouses & Crop Tops',
        desc: 'Princess cut, sweetheart neckline, and cup-padded blouses tailored for chic ethnic looks.',
        startingPrice: '₹600',
      },
      {
        title: 'Salwar Kameez & Straight Suits',
        desc: 'Custom-tailored daily wear and festive salwar suits with perfect trouser fit.',
        startingPrice: '₹800',
      },
      {
        title: 'Bridal Lehenga Choli Stitching',
        desc: 'Flared bridal lehengas, can-can skirt structuring, and custom choli stitching.',
        startingPrice: '₹3,000',
      },
    ],
    localFaqs: [
      {
        q: 'Do you provide pickup across all sectors (1 to 7) of HSR Layout?',
        a: 'Yes, we provide doorstep fabric collection and delivery across all sectors of HSR Layout daily.',
      },
    ],
    localReview: {
      name: 'Ritu Agarwal',
      area: 'HSR Sector 2',
      review:
        'Super convenient and high quality. They picked up my cotton suits and silk blouse on Tuesday and delivered everything back by Friday. Fits wonderfully!',
      rating: 5,
      garment: 'Salwar Suit & Designer Blouse',
    },
    nearbyAreas: [
      { name: 'Koramangala', slug: 'koramangala' },
      { name: 'BTM Layout', slug: 'btm-layout' },
      { name: 'Bellandur', slug: 'bellandur' },
      { name: 'Electronic City', slug: 'electronic-city' },
    ],
    metaTitle: 'Ladies Tailor in HSR Layout Bangalore | Doorstep Blouse Stitching & Suits',
    metaDescription:
      'Best ladies tailor in HSR Layout Bangalore (Sector 1-7). Doorstep measurement & fabric pickup. Designer blouses, salwar suits, Aari work & alterations in 3-5 days.',
    coordinates: { latitude: 12.9121, longitude: 77.6446 },
  },
  {
    slug: 'jayanagar',
    name: 'Jayanagar',
    zone: 'South Bangalore',
    zoneSlug: 'south-bangalore',
    tagline: 'Master Tailors for Silk Blouses & Traditional Wear in Jayanagar',
    pincodes: ['560011', '560041'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Jayanagar 4th Block Shopping Complex',
      'Jayanagar 3rd & 5th Block',
      'Ashoka Pillar',
      'South End Circle',
    ],
    serviceSpecialties: [
      {
        title: 'Pure Silk & Kanjeevaram Blouses',
        desc: 'Traditional South Indian blouse stitching with gold piping, elbow sleeves, and back tassels.',
        startingPrice: '₹500',
      },
      {
        title: 'Handmade Aari & Maggam Embroidery',
        desc: 'Intricate temple border designs, peacocks, and floral motifs handcrafted by master seamstresses.',
        startingPrice: '₹1,500',
      },
      {
        title: 'Traditional Pattu Pavadai & Half Sarees',
        desc: 'Custom-fit South Indian ethnic wear for kids and young women.',
        startingPrice: '₹1,000',
      },
    ],
    localFaqs: [
      {
        q: 'Do you handle heavy Kanjeevaram and Mysore silk fabrics with care?',
        a: 'Yes, our master tailors have 20+ years of experience working with authentic South Indian silks, ensuring pure cotton lining and zero fabric pull.',
      },
    ],
    localReview: {
      name: 'Vani Srinivas',
      area: 'Jayanagar 4th Block',
      review:
        'Being particular about traditional South Indian blouse cuts, I was hesitant at first. But TailoredIn nailed the armhole and neckline perfectly. Highly recommended!',
      rating: 5,
      garment: 'Kanjeevaram Bridal Blouse',
    },
    nearbyAreas: [
      { name: 'JP Nagar', slug: 'jp-nagar' },
      { name: 'BTM Layout', slug: 'btm-layout' },
      { name: 'Koramangala', slug: 'koramangala' },
      { name: 'Sadashivanagar', slug: 'sadashivanagar' },
    ],
    metaTitle: 'Ladies Tailor in Jayanagar Bangalore | Doorstep Silk Blouse & Bridal Tailoring',
    metaDescription:
      'Top ladies tailor in Jayanagar Bangalore. Doorstep fabric pickup & measurement. Kanjeevaram silk blouses, Aari embroidery, salwar suits & bridal wear in 3-5 days.',
    coordinates: { latitude: 12.9308, longitude: 77.5838 },
  },
  {
    slug: 'jp-nagar',
    name: 'JP Nagar',
    zone: 'South Bangalore',
    zoneSlug: 'south-bangalore',
    tagline: 'Doorstep Tailoring & Designer Blouse Stitching in JP Nagar (Phases 1-8)',
    pincodes: ['560078', '560076'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'JP Nagar 2nd Phase',
      'JP Nagar 5th & 6th Phase',
      'Bangalore Central Mall JP Nagar',
      'Sarakki Signal',
      'Brigade Millennium',
    ],
    serviceSpecialties: [
      {
        title: 'Designer Blouse & Saree Fall',
        desc: 'Custom-fit blouses with pads, piping, and modern necklines delivered to your doorstep.',
        startingPrice: '₹600',
      },
      {
        title: 'Salwar Suits & Daily Kurtis',
        desc: 'Custom tailored ethnic wear and palazzo sets.',
        startingPrice: '₹800',
      },
    ],
    localFaqs: [
      {
        q: 'Do you cover Brigade Millennium and apartments in JP Nagar 7th Phase?',
        a: 'Yes, we provide doorstep pickup and delivery across all phases (1 to 8) of JP Nagar.',
      },
    ],
    localReview: {
      name: 'Archana Hegde',
      area: 'JP Nagar 6th Phase',
      review:
        'The doorstep trial and fit guarantee gave me complete peace of mind. Both blouses fitted like a dream.',
      rating: 5,
      garment: 'Designer Padded Blouse',
    },
    nearbyAreas: [
      { name: 'Jayanagar', slug: 'jayanagar' },
      { name: 'BTM Layout', slug: 'btm-layout' },
    ],
    metaTitle: 'Ladies Tailor in JP Nagar Bangalore | Doorstep Blouse Stitching & Suits',
    metaDescription:
      'Ladies tailor in JP Nagar Bangalore (Phase 1-8). Doorstep measurement & fabric pickup. Designer blouses, Aari embroidery, salwar suits & lehengas delivered in 3-5 days.',
    coordinates: { latitude: 12.9063, longitude: 77.5857 },
  },
  {
    slug: 'btm-layout',
    name: 'BTM Layout',
    zone: 'South Bangalore',
    zoneSlug: 'south-bangalore',
    tagline: 'Affordable, Quality Doorstep Tailoring in BTM Layout (1st & 2nd Stage)',
    pincodes: ['560068', '560076'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'BTM 1st Stage',
      'BTM 2nd Stage / Udupi Garden',
      'Madiwala Lake Road',
      'Tavarekere Link',
    ],
    serviceSpecialties: [
      {
        title: 'Blouse & Suit Stitching',
        desc: 'Fast, budget-friendly and precise tailoring with doorstep pickup in BTM.',
        startingPrice: '₹500',
      },
    ],
    localFaqs: [
      {
        q: 'What is the turnaround time for BTM Layout orders?',
        a: 'Standard delivery is 3-5 days. Express 24-hour turnaround is also available upon request.',
      },
    ],
    localReview: {
      name: 'Deepika S.',
      area: 'BTM 2nd Stage',
      review:
        'Prompt fabric pickup and very professional. Stitching was neat and on time.',
      rating: 5,
      garment: 'Salwar Kameez & Simple Blouse',
    },
    nearbyAreas: [
      { name: 'Koramangala', slug: 'koramangala' },
      { name: 'HSR Layout', slug: 'hsr-layout' },
      { name: 'Jayanagar', slug: 'jayanagar' },
      { name: 'JP Nagar', slug: 'jp-nagar' },
    ],
    metaTitle: 'Ladies Tailor in BTM Layout Bangalore | Doorstep Stitching & Alterations',
    metaDescription:
      'Best ladies tailoring service in BTM Layout Bangalore. Doorstep fabric pickup, designer blouses, salwar suits, kurtis & alterations in 3-5 days. Call +91 95901 87030.',
    coordinates: { latitude: 12.9166, longitude: 77.6101 },
  },
  {
    slug: 'electronic-city',
    name: 'Electronic City',
    zone: 'South Bangalore',
    zoneSlug: 'south-bangalore',
    tagline: 'Hassle-Free Doorstep Ladies Tailoring in Electronic City Phase 1 & 2',
    pincodes: ['560100'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Electronic City Phase 1',
      'Electronic City Phase 2',
      'Neeladri Road',
      'Ajmera Infinity',
      'Concorde Cuppertino',
    ],
    serviceSpecialties: [
      {
        title: 'Office Ethnic Wear & Blouses',
        desc: 'Custom-fit daily kurtas, cotton suits, and padded blouses tailored for techies in E-City.',
        startingPrice: '₹600',
      },
      {
        title: 'Bridal & Festive Outfits',
        desc: 'Heavy Aari work blouses, lehengas, and designer gowns with doorstep fitting.',
        startingPrice: '₹1,500',
      },
    ],
    localFaqs: [
      {
        q: 'Do you visit Neeladri Road and residential townships in Electronic City?',
        a: 'Yes, we provide doorstep pickup and delivery across Electronic City Phase 1, Phase 2, Neeladri Road, and surrounding societies.',
      },
    ],
    localReview: {
      name: 'Swati Verma',
      area: 'Neeladri Road, Electronic City',
      review:
        'It is so hard to find good tailors in E-City. TailoredIn made it completely effortless with home pickup and delivery.',
      rating: 5,
      garment: 'Kurtis & Princess Cut Blouse',
    },
    nearbyAreas: [
      { name: 'HSR Layout', slug: 'hsr-layout' },
      { name: 'BTM Layout', slug: 'btm-layout' },
    ],
    metaTitle: 'Ladies Tailor in Electronic City Bangalore | Doorstep Blouse Stitching',
    metaDescription:
      'Doorstep ladies tailor in Electronic City Phase 1 & 2 Bangalore. Custom designer blouses, Aari work, salwar suits & alterations delivered in 3-5 days.',
    coordinates: { latitude: 12.8399, longitude: 77.677 },
  },

  // --- CENTRAL & WEST BANGALORE (HERITAGE & CULTURAL) ---
  {
    slug: 'malleshwaram',
    name: 'Malleshwaram',
    zone: 'Central & West Bangalore',
    zoneSlug: 'central-west-bangalore',
    tagline: 'Heritage Silk Blouse Stitching & Master Ladies Tailor in Malleshwaram',
    pincodes: ['560003'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      '8th Cross Malleshwaram',
      'Sampige Road',
      'Margosa Road',
      'Mantri Square Mall',
      'Malleshwaram Circle',
    ],
    serviceSpecialties: [
      {
        title: 'Authentic Silk & Kanjeevaram Blouses',
        desc: 'Heritage South Indian blouse tailoring with traditional cuts, golden piping, and elbow sleeve borders in Malleshwaram.',
        startingPrice: '₹500',
      },
      {
        title: 'Intricate Aari & Maggam Bridal Work',
        desc: 'Traditional bridal motifs, temple borders, and peacock zardosi hand embroidery.',
        startingPrice: '₹1,500',
      },
      {
        title: 'Pattu Pavadai & Traditional Half Sarees',
        desc: 'Custom-tailored South Indian ethnic wear for auspicious occasions.',
        startingPrice: '₹1,000',
      },
    ],
    localFaqs: [
      {
        q: 'Do you collect fabric from residential areas around Sampige and Margosa Road in Malleshwaram?',
        a: 'Yes, we provide doorstep pickup and delivery across all cross roads of Malleshwaram, Margosa Road, and Sampige Road.',
      },
      {
        q: 'How experienced are your master tailors with pure silk sarees?',
        a: 'Our craftswomen possess over 20+ years of expertise handling pure silk, tussar, and organza fabrics with double interlock stitching.',
      },
    ],
    localReview: {
      name: 'Suma Krishnamurthy',
      area: 'Malleshwaram 8th Cross',
      review:
        'Excellent traditional cut! The sleeve fitting and back neck depth were exactly according to my sample blouse. Doorstep delivery was right on time.',
      rating: 5,
      garment: 'Traditional Mysore Silk Blouse',
    },
    nearbyAreas: [
      { name: 'Sadashivanagar', slug: 'sadashivanagar' },
      { name: 'Rajajinagar', slug: 'rajajinagar' },
      { name: 'Hebbal', slug: 'hebbal' },
    ],
    metaTitle: 'Ladies Tailor in Malleshwaram Bangalore | Silk Blouse & Aari Work Stitching',
    metaDescription:
      'Premier ladies tailor in Malleshwaram Bangalore. Doorstep fabric pickup across Sampige & Margosa Rd. Kanjeevaram silk blouses, Aari embroidery, suits & bridal wear.',
    coordinates: { latitude: 13.0031, longitude: 77.5643 },
  },
  {
    slug: 'rajajinagar',
    name: 'Rajajinagar',
    zone: 'Central & West Bangalore',
    zoneSlug: 'central-west-bangalore',
    tagline: 'Custom Doorstep Tailoring for Blouses, Suits & Sarees in Rajajinagar',
    pincodes: ['560010'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Rajajinagar 1st to 6th Block',
      'Orion Mall / Brigade Gateway',
      'Dr. Rajkumar Road',
      'Navrang Theatre area',
    ],
    serviceSpecialties: [
      {
        title: 'Designer Blouse Stitching',
        desc: 'Custom-fit blouses with cups, piping, and modern necklines delivered to your doorstep in Rajajinagar.',
        startingPrice: '₹600',
      },
      {
        title: 'Salwar Kameez & Churidar Sets',
        desc: 'Flawlessly tailored suits, Patialas, and palazzos for festive wear.',
        startingPrice: '₹800',
      },
    ],
    localFaqs: [
      {
        q: 'Do you visit Brigade Gateway and Rajajinagar residential blocks?',
        a: 'Yes, we provide doorstep pickup and delivery across Brigade Gateway, World Trade Centre vicinity, and all blocks of Rajajinagar.',
      },
    ],
    localReview: {
      name: 'Bhavana Deshmukh',
      area: 'Rajajinagar 3rd Block',
      review:
        'I gave my designer blouse material and sample garment. Returned with perfect stitching within 4 days. Very convenient service.',
      rating: 5,
      garment: 'Boat Neck Designer Blouse',
    },
    nearbyAreas: [
      { name: 'Malleshwaram', slug: 'malleshwaram' },
      { name: 'Sadashivanagar', slug: 'sadashivanagar' },
    ],
    metaTitle: 'Ladies Tailor in Rajajinagar Bangalore | Doorstep Blouse Stitching & Suits',
    metaDescription:
      'Top ladies tailor in Rajajinagar Bangalore. Doorstep measurement, fabric pickup & delivery. Custom designer blouses, Aari embroidery, suits & bridal wear in 3-5 days.',
    coordinates: { latitude: 12.9982, longitude: 77.553 },
  },
  {
    slug: 'sadashivanagar',
    name: 'Sadashivanagar',
    zone: 'Central & West Bangalore',
    zoneSlug: 'central-west-bangalore',
    tagline: 'High-End Doorstep Ladies Tailoring & Couture Blouses in Sadashivanagar',
    pincodes: ['560080'],
    isExpressHub: false,
    pickupTime: 'Scheduled within 2-3 hours',
    deliveryTime: '3-5 Days',
    popularLandmarks: [
      'Sadashivanagar Club',
      'Sankey Tank area',
      'Bellary Road link',
      'Palace Orchards',
    ],
    serviceSpecialties: [
      {
        title: 'Couture Bridal Blouse Stitching',
        desc: 'Luxury designer blouses with French seams, custom cup padding, and handmade zardosi embellishments.',
        startingPrice: '₹600',
      },
      {
        title: 'Designer Gowns & Anarkalis',
        desc: 'Floor-sweeping ethnic gowns, layered Anarkalis, and pre-pleated designer sarees.',
        startingPrice: '₹2,500',
      },
    ],
    localFaqs: [
      {
        q: 'Do you offer white-glove doorstep tailoring in Sadashivanagar?',
        a: 'Yes, our senior tailoring consultants provide personalized doorstep measurement, fabric styling advice, and fitting trials in Sadashivanagar.',
      },
    ],
    localReview: {
      name: 'Chandana Rao',
      area: 'Palace Orchards, Sadashivanagar',
      review:
        'Impeccable fitting and fine craftsmanship. They handled my bridal silk blouses with the utmost care and delivered on the promised date.',
      rating: 5,
      garment: 'Bridal Zardosi Blouse & Saree Work',
    },
    nearbyAreas: [
      { name: 'Malleshwaram', slug: 'malleshwaram' },
      { name: 'Hebbal', slug: 'hebbal' },
      { name: 'Rajajinagar', slug: 'rajajinagar' },
    ],
    metaTitle: 'Ladies Tailor in Sadashivanagar Bangalore | Luxury Blouse & Bridal Tailoring',
    metaDescription:
      'Premier ladies tailor in Sadashivanagar Bangalore. Doorstep fabric pickup & consultation. Designer blouses, Aari embroidery, custom gowns & bridal wear in 3-5 days.',
    coordinates: { latitude: 13.0068, longitude: 77.5813 },
  },
];

export const locationDetailsMap: Record<string, LocationDetail> = Object.fromEntries(
  locationDetailsList.map((loc) => [loc.slug, loc])
);

export function getLocationBySlug(slug: string): LocationDetail | undefined {
  return locationDetailsMap[slug];
}

export function getAllLocationSlugs(): string[] {
  return locationDetailsList.map((loc) => loc.slug);
}
