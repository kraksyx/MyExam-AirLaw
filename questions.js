const questions = [
  {
    "question": "1. Where in the AIP can you find information about Ras Al Khaimah (OMRK)?",
    "options": ["AD - Aerodromes", "ENR - Enroute", "GEN - General"],
    "correct": 0
  },
  {
    "question": "2. What squawk code indicates loss of communication?",
    "options": ["7600", "7700", "7500"],
    "correct": 0
  },
  {
    "question": "3. When do you mention the ATIS letter to ATC?",
    "options": ["After takeoff", "On initial call", "During taxi"],
    "correct": 1
  },
  {
    "question": "4. When should IDENT mode be used?",
    "options": ["Only when requested by ATC", "On departure", "Anytime you start taxiing"],
    "correct": 0
  },
  {
    "question": "5. What kind of communication is used with ATC?",
    "options": ["One-way", "Two-way", "Non-verbal"],
    "correct": 1
  },
  {
    "question": "6. What do you say to Tower when ready for takeoff?",
    "options": ["Ready for rotation", "Ready for departure", "Cleared for flight"],
    "correct": 1
  },
  {
    "question": "7. What class of airspace is Al Maktoum Airport (OMDW) in?",
    "options": ["Class D", "Class G", "Class C"],
    "correct": 0
  },
  {
    "question": "8. What is the maximum VFR altitude allowed?",
    "options": ["12,500 ft", "13,000 ft", "FL145"],
    "correct": 0
  },
  {
    "question": "9. What should a pilot do during unlawful interference and no communication?",
    "options": ["Change altitude by 500ft below or 1,000ft above depending on FL290", "Maintain current altitude", "Descend to FL150"],
    "correct": 0
  },
  {
    "question": "10. When intercepted, who should you follow?",
    "options": ["The aircraft with guns (interceptor)", "Radar controller", "ATC instructions only"],
    "correct": 0
  },
  {
    "question": "11. What is the validity period of a CPL license?",
    "options": ["8 years", "10 years", "5 years"],
    "correct": 0
  },
  {
    "question": "12. What is the requirement to fly at night?",
    "options": ["5-night flights, 5 take-offs and 5 landings as PIC", "5 takeoffs and landings as co-pilot", "5-night flights only"],
    "correct": 0
  },
  {
    "question": "13. What does 'clearance' mean in ATC terminology?",
    "options": ["Permission to land only", "Instruction", "Authorization"],
    "correct": 2
  },
  {
    "question": "14. When do you switch to local QNH?",
    "options": ["At cruise level", "On transition level (descending)", "After takeoff"],
    "correct": 1
  },
  {
    "question": "15. Where does a Control Zone (CTR) start from?",
    "options": ["Surface", "Transition altitude", "1000 ft AGL"],
    "correct": 0
  },
  {
    "question": "16. What squawk code is used for unlawful interference?",
    "options": ["7500", "7700", "7600"],
    "correct": 0
  },
  {
    "question": "17. What phrase indicates a conditional clearance?",
    "options": ["Line up and wait", "Standby for departure", "Behind the landing aircraft"],
    "correct": 2
  },
  {
    "question": "18. What do you say when you can't comply with ATC?",
    "options": ["Unable", "Hold position", "Repeat please"],
    "correct": 0
  },
  {
    "question": "19. What unit gives instructions in degrees magnetic?",
    "options": ["TWR", "FIS", "RADAR"],
    "correct": 2
  },
  {
    "question": "20. Which ATSU unit uses 'RADIO' in its call sign?",
    "options": ["ATC", "AFIS", "Tower"],
    "correct": 1
  },
  {
    "question": "21. What service does AFIS provide?",
    "options": ["Air traffic control service", "Radar vectoring", "Flight information service"],
    "correct": 2
  },
  {
    "question": "22. What service is provided in Class G airspace?",
    "options": ["Radar control", "Flight Information Service if required", "Separation between IFR and VFR"],
    "correct": 1
  },
  {
    "question": "23. Which airspaces are used in the UAE?",
    "options": ["B, C, E, G", "A, C, D, G", "A, B, D, G"],
    "correct": 1
  },
  {
    "question": "24. Which class of airspace allows most freedom for pilots?",
    "options": ["Class C", "Class G", "Class D"],
    "correct": 1
  },
  {
    "question": "25. Is clearance required in airspaces C and D?",
    "options": ["No", "Only in Class C", "Yes"],
    "correct": 2
  },
  {
    "question": "26. What is the typical VFR visibility and distance from cloud below 10,000 ft?",
    "options": ["10 km visibility, no cloud restriction", "8 km visibility, 1500 m horizontal, 300 m vertical", "5 km visibility, 1500 m horizontal, 300 m vertical"],
    "correct": 2
  },
  {
    "question": "27. What is the surface and strength code of RWY 13/31?",
    "options": ["Concrete with 4/E/C/X/T", "Gravel with 5/F/D/Y/T", "Asphalt with 6/F/B/Y/T"],
    "correct": 2
  },
  {
    "question": "28. How many stripes are used for a runway that is 30m wide?",
    "options": ["8", "6", "12"],
    "correct": 0
  },
  {
    "question": "29. What braking action code corresponds to medium surface friction?",
    "options": ["3", "5", "2"],
    "correct": 0
  },
  {
    "question": "30. What friction coefficient range indicates medium to poor surface condition?",
    "options": ["0.39 - 0.36", "0.25 and below", "0.29 - 0.26"],
    "correct": 2
  },
  {
    "question": "31. What is the operating altitude for GFA 1?",
    "options": ["SFC to 5,000 ft", "SFC to 9,000 ft", "500 ft to 9,000 ft"],
    "correct": 1
  },
  {
    "question": "32. What is the average elevation for GFA 3?",
    "options": ["500 ft", "1,200 ft", "900 ft"],
    "correct": 1
  },
  {
    "question": "33. What is the elevation of EFTA runway?",
    "options": ["155.4 ft", "130 ft", "200 ft"],
    "correct": 0
  },
  {
    "question": "34. What is the speed limit for VM4?",
    "options": ["120 knots", "130 knots", "125 knots"],
    "correct": 2
  },
  {
    "question": "35. What is the altitude for both inbound and outbound VM22/33?",
    "options": ["1500 ft", "2500 ft", "2000 ft"],
    "correct": 2
  },
  {
    "question": "36. What altitude is used for VM7 inbound and outbound?",
    "options": ["2500 inbound, 2000 outbound", "2500 inbound, 2500 outbound", "2000 inbound, 1500 outbound"],
    "correct": 0
  },
  {
    "question": "37. What lights mark the edge of taxiways?",
    "options": ["Red", "Green", "Blue"],
    "correct": 2
  },
  {
    "question": "38. What is the frequency for EFTA APRON?",
    "options": ["119.175 MHz", "118.775 MHz", "118.700 MHz"],
    "correct": 2
  },
  {
    "question": "39. What is the first call made before taxi at EFTA?",
    "options": ["Academy operations", "Academy tower", "Academy apron"],
    "correct": 1
  },
  {
    "question": "40. What is the validity of a Class 1 Medical Certificate?",
    "options": ["6 months", "1 year", "2 years"],
    "correct": 1
  },
  {
    "question": "41. What does RESA stand for?",
    "options": ["Radar Emergency Signal Alert", "Runway Edge Safety Alert", "Runway End Safety Area"],
    "correct": 2
  },
  {
    "question": "42. What is the frequency for DUBAI SOUTH RADAR?",
    "options": ["120.400 MHz", "126.475 MHz", "119.175 MHz"],
    "correct": 0
  },
  {
    "question": "43. What type of clearance is required in Class F airspace?",
    "options": ["Radar clearance", "No clearance required", "ATC clearance mandatory"],
    "correct": 1
  },
  {
    "question": "44. What service is provided in Class F airspace?",
    "options": ["Radar vectoring", "Traffic advisory service", "Separation for all flights"],
    "correct": 1
  },
  {
    "question": "45. Which of the following is correct regarding emergency codes?",
    "options": ["7500 – Emergency, 7600 – Weather, 7700 – Hijack", "7500 – Lost comm, 7600 – Hijack, 7700 – Normal", "7500 – Hijack, 7600 – Lost comm, 7700 – Emergency"],
    "correct": 2
  }
];
