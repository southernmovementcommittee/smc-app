const mockData = [
    {
        "id": 1,
        "image": "http://dummyimage.com/233x100.png/dddddd/000000",
        "event_title": "Braden",
        "event_location": "4th Floor",
        "event_description": "Unspecified injury of pleura, sequela",
        "time": "4:17 PM",
        "date_time": "4/26/2023",
        "time_zone": "Asia/Harbin"
    },
    {
        "id": 2,
        "image": "http://dummyimage.com/207x100.png/cc0000/ffffff",
        "event_title": "Vittorio",
        "event_location": "Room 1563",
        "event_description": "Rheumatic mitral valve diseases",
        "time": "10:53 AM",
        "date_time": "1/28/2023",
        "time_zone": "America/Sao_Paulo"
    },
    {
        "id": 3,
        "image": "http://dummyimage.com/233x100.png/dddddd/000000",
        "event_title": "Porter",
        "event_location": "10th Floor",
        "event_description": "Acc pnctr & lac of skin, subcu during a dermatologic proc",
        "time": "11:08 AM",
        "date_time": "4/29/2023", "time_zone": "Europe/Madrid"
    },
    {
        "id": 4,
        "image": "http://dummyimage.com/126x100.png/5fa2dd/ffffff",
        "event_title": "Tracy",
        "event_location": "7th Floor",
        "event_description": "Displaced transverse fracture of shaft of right ulna, init",
        "time": "12:16 AM",
        "date_time": "2/22/2023", "time_zone": "Asia/Bangkok"
    },
    {
        "id": 5,
        "image": "http://dummyimage.com/250x100.png/cc0000/ffffff",
        "event_title": "Tracie",
        "event_location": "PO Box 27688",
        "event_description": "Anaplstc lg cell lymph, ALK-pos, nodes of head, face, and nk",
        "time": "1:22 AM",
        "date_time": "1/25/2023", "time_zone": "Asia/Chongqing"
    },
    {
        "id": 6,
        "image": "http://dummyimage.com/169x100.png/cc0000/ffffff",
        "event_title": "Ilyse",
        "event_location": "Apt 1637",
        "event_description": "Nondisp oblique fx shaft of l rad, 7thD",
        "time": "6:44 AM",
        "date_time": "12/15/2022",
        "time_zone": "Europe/Stockholm"
    },
    {
        "id": 7,
        "image": "http://dummyimage.com/123x100.png/5fa2dd/ffffff",
        "event_title": "Mack",
        "event_location": "PO Box 93904",
        "event_description": "Disp fx of med condyle of r tibia, 7thP",
        "time": "1:02 PM",
        "date_time": "2/15/2023",
        "time_zone": "America/Argentina/Cordoba"
    },
    {
        "id": 8,
        "image": "http://dummyimage.com/127x100.png/ff4444/ffffff",
        "event_title": "Kordula",
        "event_location": "5th Floor",
        "event_description": "Mech compl of internal orth devices, implnt and grafts, subs",
        "time": "3:32 PM",
        "date_time": "3/1/2023",
        "time_zone": "Pacific/Auckland"
    },
    {
        "id": 9,
        "image": "http://dummyimage.com/113x100.png/dddddd/000000",
        "event_title": "Worden",
        "event_location": "Apt 391",
        "event_description": "Laceration of musc/fasc/tend at forarm lv, right arm, subs",
        "time": "12:54 PM",
        "date_time": "8/29/2023",
        "time_zone": "America/Bogota"
    },
    {
        "id": 10,
        "image": "http://dummyimage.com/237x100.png/5fa2dd/ffffff",
        "event_title": "Margalo",
        "event_location": "Suite 64",
        "event_description": "Unspecified injury of unspecified middle and inner ear",
        "time": "3:58 PM",
        "date_time": "2/9/2023",
        "time_zone": "Asia/Omsk"
    },
    {
        "id": 11,
        "image": "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
        "event_title": "Babette",
        "event_location": "Room 1885",
        "event_description": "Personal history of non-Hodgkin lymphomas",
        "time": "8:07 AM",
        "date_time": "7/10/2023",
        "time_zone": "Europe/Paris"
    },
    {
        "id": 12,
        "image": "http://dummyimage.com/203x100.png/5fa2dd/ffffff",
        "event_title": "Sayres",
        "event_location": "PO Box 93487",
        "event_description": "Traumatic rupture of right ear drum",
        "time": "5:20 AM",
        "date_time": "10/22/2023",
        "time_zone": "Asia/Krasnoyarsk"
    },
    {
        "id": 13,
        "image": "http://dummyimage.com/173x100.png/ff4444/ffffff",
        "event_title": "Edie",
        "event_location": "Apt 797",
        "event_description": "Other specified crystal arthropathies, unspecified shoulder",
        "time": "5:41 PM",
        "date_time": "10/23/2023",
        "time_zone": "Asia/Chongqing"
    },
    {
        "id": 14,
        "image": "http://dummyimage.com/120x100.png/5fa2dd/ffffff",
        "event_title": "Jerome",
        "event_location": "1st Floor",
        "event_description": "Oth contact with oth nonvenomous marine animals, init encntr",
        "time": "9:50 AM",
        "date_time": "2/2/2023",
        "time_zone": "Asia/Chongqing"
    },
    {
        "id": 15,
        "image": "http://dummyimage.com/108x100.png/5fa2dd/ffffff",
        "event_title": "Leonid",
        "event_location": "PO Box 17202",
        "event_description": "Drown due to being washed ovrbrd from pasngr ship, sequela",
        "time": "10:18 PM",
        "date_time": "10/4/2023",
        "time_zone": "Asia/Qatar"
    },
    {
        "id": 16,
        "image": "http://dummyimage.com/192x100.png/dddddd/000000",
        "event_title": "Liana",
        "event_location": "Suite 46",
        "event_description": "Encounter for examination of blood pressure",
        "time": "8:25 AM",
        "date_time": "6/25/2023",
        "time_zone": "Asia/Jakarta"
    },
    {
        "id": 17
        , "image": "http://dummyimage.com/245x100.png/dddddd/000000"
        , "event_title": "Nancy",
        "event_location": "PO Box 45799",
        "event_description": "Rheumatoid vasculitis with rheumatoid arthritis of unsp site",
        "time": "10:13 AM",
        "date_time": "11/22/2023",
        "time_zone": "Africa/Kampala"
    },
    {
        "id": 18,
        "image": "http://dummyimage.com/217x100.png/dddddd/000000",
        "event_title": "Saunders",
        "event_location": "PO Box 66412",
        "event_description": "Convergence insufficiency",
        "time": "10:53 PM",
        "date_time": "6/30/2023",
        "time_zone": "Asia/Makassar"
    },
    {
        "id": 19,
        "image": "http://dummyimage.com/206x100.png/ff4444/ffffff",
        "event_title": "Joan",
        "event_location": "Suite 89",
        "event_description": "Oth physl fx upr end humer, left arm, subs for fx w malunion",
        "time": "3:38 PM",
        "date_time": "7/1/2023",
        "time_zone": "Asia/Shanghai"
    },
    {
        "id": 20,
        "image": "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
        "event_title": "Zedekiah",
        "event_location": "8th Floor",
        "event_description": "Nondisp unsp fx left lesser toe(s), subs for fx w malunion",
        "time": "11:46 AM",
        "date_time": "4/28/2023",
        "time_zone": "Europe/Dublin"
    }
]

export default mockData;

