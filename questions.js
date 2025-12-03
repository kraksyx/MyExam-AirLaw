const questions = [
  {
    "question": "1. What is the main purpose of the Technical Log?",
    "options": ["To schedule pilot training activities", "To record aircraft defects, maintenance, and operating information", "To log fuel prices at different airports"],
    "correct": 1
  },
  {
    "question": "2. Who is responsible for checking the Technical Log before engine start?",
    "options": ["Only the instructor", "Ground maintenance crew", "All flight crew members, including students on solo flights"],
    "correct": 2
  },
  {
    "question": "3. What does the PIC certify when signing the 'Aircraft Technical Log Sector Record'?",
    "options": ["That the aircraft has been washed and cleaned", "That the crew is well-rested", "Satisfaction with the Pre-Flight Inspection and Fuel/Oil status"],
    "correct": 2
  },
  {
    "question": "4. Who can certify that a defect has been rectified and release the aircraft back to service?",
    "options": ["A senior student pilot", "A certified engineer", "The PIC"],
    "correct": 1
  },
  {
    "question": "5. What happens if a flight crew enters a defect in the log?",
    "options": ["The log is reviewed after the flight ends", "The aircraft can continue operating without checks", "The Certificate of Airworthiness is invalid until it is cleared or deferred"],
    "correct": 2
  },
  {
    "question": "6. Why must PICs check the hours remaining before every flight?",
    "options": ["To check fuel consumption", "To avoid exceeding the hours available before the next inspection", "To schedule rest periods for the crew"],
    "correct": 1
  },
  {
    "question": "7. What should be done if the total flight time plus current hours are within one hour of a scheduled maintenance?",
    "options": ["Add a note in the log and proceed", "Complete the flight and report it later", "Contact maintenance and do not accept the airplane"],
    "correct": 2
  },
  {
    "question": "8. Who is responsible for ensuring previous defects have been cleared or deferred before accepting the aircraft?",
    "options": ["The engineer", "The PIC", "Air Traffic Control"],
    "correct": 1
  },
  {
    "question": "9. What should be written in the Tech Log if there are no defects after a flight sector?",
    "options": ["CLEARED", "NIL DEFECTS", "OK TO FLY"],
    "correct": 1
  },
  {
    "question": "10. If a defect is found after the acceptance has been signed, where should it be recorded?",
    "options": ["In the previous Techlog entry", "Only in the pilot's personal logbook", "On a new Techlog page"],
    "correct": 2
  },
  {
    "question": "11. When is it acceptable for some aircraft equipment to be inoperative?",
    "options": ["When the crew agrees", "When it's not required for airplane safety and allowed under MEL", "During night flights only"],
    "correct": 1
  },
  {
    "question": "12. Who makes defect entries in the Tech Log for student pilots?",
    "options": ["The air traffic controller", "The student in consultation with their FI or DFI", "Only the maintenance staff"],
    "correct": 1
  },
  {
    "question": "13. What are Deferred Defects?",
    "options": ["Defects that are ignored until they become serious", "Defects that don’t affect operational capability and can be fixed later", "Temporary notes in the flight plan"],
    "correct": 1
  },
  {
    "question": "14. Who is responsible for completing post-flight documentation?",
    "options": ["The co-pilot only", "The ground staff", "The PIC"],
    "correct": 2
  },
  {
    "question": "15. What times must the PIC record after every flight?",
    "options": ["Off-Blocks, Takeoff, Landing, and On-Blocks times", "Off-block to on-block only", "Meal breaks and fuel stops"],
    "correct": 0
  },
  {
    "question": "16. What should be done if defects are recorded post-flight?",
    "options": ["Enter them in the defect column and remove the Techlog to the stores counter", "Note them verbally to maintenance", "Skip entry if they’re minor issues"],
    "correct": 0
  },
  {
    "question": "17. How should the Technical Log be filled out?",
    "options": ["Only in shorthand", "As quickly as possible", "Accurately, legibly, and in full"],
    "correct": 2
  },
  {
    "question": "18. What time format is used for takeoff and landing times?",
    "options": ["UTC (Coordinated Universal Time)", "Local Time", "Pilot's watch time"],
    "correct": 0
  },
  {
    "question": "19. What defines 'Flight Time'?",
    "options": ["Time from first engine start to shut down", "Time the crew is onboard", "Time from takeoff to landing"],
    "correct": 2
  },
  {
    "question": "20. What defines 'Block Time'?",
    "options": ["The time the aircraft is in the hangar", "Time from OFF blocks to ON blocks", "Time from parking brake to engine off"],
    "correct": 1
  },
  {
    "question": "21. What must all crew check in the Technical Log before each flight?",
    "options": ["The maintenance statement page for pending tasks", "The destination fuel policy", "The weather radar status"],
    "correct": 0
  },
  {
    "question": "22. When the PIC enters a defect, what else must be included in the entry?",
    "options": ["Flight number and airport code", "Initials, full printed name, and staff number in capital letters", "Phone number for contact"],
    "correct": 1
  },
  {
    "question": "23. How should the times recorded in the logbook, tech log, and flight plan compare?",
    "options": ["Only the logbook needs accurate times", "They may differ slightly", "They must all match exactly"],
    "correct": 2
  },
  {
    "question": "24. After recording flight times, where must they also be entered?",
    "options": ["In the engine log only", "Into TALON ETA system", "In the pilot’s notebook"],
    "correct": 1
  },
  {
    "question": "25. What must be used for each flight sector?",
    "options": ["A new aircraft registration", "A pilot report", "At least one sector page"],
    "correct": 2
  },
  {
    "question": "26. Who is responsible for completing the Data blocks for an inbound flight?",
    "options": ["Ground engineer", "Captain of the inbound flight", "First Officer"],
    "correct": 1
  },
  {
    "question": "27. Which information must be completed in the Data blocks?",
    "options": ["Fuel consumption rate", "Weather details", "Aircraft type, registration, flight number, and IATA station codes"],
    "correct": 2
  },
  {
    "question": "28. What should be done for Flight type on the log?",
    "options": ["Write \"Yes\" or \"No\"", "Leave it blank", "Circle Y or N"],
    "correct": 2
  },
  {
    "question": "29. Which times must be entered in UTC format?",
    "options": ["Departure date and arrival time", "Cruise speed", "Off blocks, takeoff, land, and on blocks"],
    "correct": 2
  },
  {
    "question": "30. What are extra landings?",
    "options": ["Landings more than one in a flight, mainly for training", "Emergency landings", "Landings with passengers only"],
    "correct": 0
  },
  {
    "question": "31. How is sector time calculated?",
    "options": ["Land time minus takeoff time", "Total flying hours minus rest period", "On blocks minus off blocks"],
    "correct": 0
  },
  {
    "question": "32. What must be transferred from the previous log page?",
    "options": ["Departure date", "Current total hours", "Weather report"],
    "correct": 1
  },
  {
    "question": "33. How is the current total hours for the flight calculated?",
    "options": ["Fuel used multiplied by hours flown", "SECTOR TIME + PREVIOUS LOG HOURS BROUGHT FORWARD", "Flight duration minus taxi time"],
    "correct": 1
  }
];
