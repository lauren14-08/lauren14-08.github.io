const config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2025ilpe",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field_img.png",
      "clickRestriction": "one",
      "dimensions": "6 6",
      "allowableResponses": "2 8 14 20 26 32 5 11 17 23 29 35",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Fuel Scored",
      "code": "ac1",
      "type": "counter"
    },
    { "name": "Passes",
      "code": "ac2",
      "type": "counter"
    },
    { "name": "Pushing",
      "code": "ac3",
      "type": "counter"
    },
    { "name": "Pick-up Location: Middle",
      "code": "ac4",
      "type": "bool"
    },
    { "name": "Pick-up Location: Human Player Station",
      "code": "aps",
      "type": "bool"
    },
    { "name": "Pick-up Location: Depot",
      "code": "ans",
      "type": "bool"
    },
    { "name": "Climb (Write Lvl 1, 2, 3 / failed climb)",
      "code": "afl",
      "type": "text",
      "size": 10,
      "maxSize": 100
    }
  ],
  "teleop": [
    { "name": "Fuel Scored",
      "code": "tc1",
      "type": "counter"
    },
    { "name": "Passes",
      "code": "tc2",
      "type": "counter"
    },
    { "name": "Pushing",
      "code": "tc3",
      "type": "counter"
    },
    { "name": "Human Player",
      "code": "tc4",
      "type": "counter"
    }
  ],
  "endgame": [
    { "name": "Barge Timer",
      "code": "ebt",
      "type": "timer"
    },
    { "name": "Final Robot Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "bp": "Parked<br>",
        "bf": "Failed Climb<br>",
        "one": "Lvl 1<br>",
        "two": "Lvl 2<br>",
        "thr": "Lvl 3<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Attained Energized RP (>=100 fuel)",
       "code": "cop",
       "type": "bool"
    },
    { "name": "Attained Supercharged RP (>=360 fuel)",
      "code": "alr",
      "type": "bool"
    },
    { "name": "Attained Transversal RP (>=50 climb points)",
      "code": "afc",
      "type": "bool"
    },
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Dropped Fuel (>2)",
      "code": "dc",
      "type": "bool"
    },
    { "name": "Missed Fuel a Lot",
      "code": "da",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 500
    }
  ]
}`;