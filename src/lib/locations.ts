export interface LocationZone {
  zone: string;
  description: string;
  pincodes: string[];
  areas: string[];
}

export const bangaloreZones: LocationZone[] = [
  {
    zone: "North Bangalore (Hub & Express Service)",
    description: "Same-day doorstep consultation & fast pickup within 1-2 hours",
    pincodes: ["560077", "560064", "560092", "560024", "560045", "560032"],
    areas: [
      "Jakkur",
      "Jakkur Layout",
      "Jakkur Green City",
      "Jakkur Orchid Meadows",
      "Jakkur Aerospace Park",
      "Hebbal",
      "Hebbal Kempapura",
      "Yelahanka",
      "Yelahanka New Town",
      "Manyata Tech Park",
      "Manyata Residency",
      "Sahakar Nagar",
      "Thanisandra Main Road",
      "Amruthahalli",
      "Nagavara",
      "RK Hegde Nagar",
      "Rachenahalli",
      "Dr. Shivaram Karanth Nagar",
      "Fortune Valley",
      "Arkavathy Layout",
      "Amarjyothi Extension",
      "Mariyannapalya",
      "Srirampura Jakkur",
      "Geddalahalli",
      "Kothnur Narayanapura",
      "Sinthan Nagar",
    ]
  },
  {
    zone: "East Bangalore",
    description: "Scheduled doorstep pickup & delivery for IT corridors & residential townships",
    pincodes: ["560038", "560066", "560037", "560103", "560036"],
    areas: [
      "Indiranagar",
      "Whitefield",
      "Marathahalli",
      "Bellandur",
      "KR Puram",
      "CV Raman Nagar",
      "Mahadevapura",
      "Kadugodi",
      "Hoodi",
      "Brookefield",
      "Varthur Road"
    ]
  },
  {
    zone: "South Bangalore",
    description: "Doorstep tailoring for designer blouses, bridal wear & ethnic outfits",
    pincodes: ["560034", "560102", "560011", "560078", "560076", "560100"],
    areas: [
      "Koramangala",
      "HSR Layout",
      "Jayanagar",
      "JP Nagar",
      "BTM Layout",
      "Bannerghatta Road",
      "Electronic City Phase 1 & 2",
      "Arekere",
      "Hulimavu",
      "Bilekahalli"
    ]
  },
  {
    zone: "Central & West Bangalore",
    description: "Heritage silk blouse tailoring, custom gowns & alterations",
    pincodes: ["560003", "560010", "560022", "560080", "560052"],
    areas: [
      "Malleshwaram",
      "Rajajinagar",
      "Sadashivanagar",
      "Vasanth Nagar",
      "Yeshwanthpur",
      "Frazer Town",
      "Cooke Town",
      "Cunningham Road",
      "Basavanagudi"
    ]
  }
];

// Flat list of all served locations for schema and search
export const serviceLocations: string[] = Array.from(
  new Set(bangaloreZones.flatMap(z => z.areas))
);
