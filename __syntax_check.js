
const STORES = [
{id:"AZ103",st:"AZ",r:"US Central",fbc:"Katie Lincon"},
{id:"AZ104",st:"AZ",r:"US Central",fbc:"Katie Lincon"},
{id:"AZ105",st:"AZ",r:"US Central",fbc:"Katie Lincoln"},
{id:"CA106",st:"CA",r:"CA - North",fbc:"Katie Lincon"},
{id:"CA108",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA109",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA110",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA111",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA112",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA115",st:"CA",r:"CA - South",fbc:"Katie Lincon"},
{id:"CA117",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA118",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA119",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA120",st:"CA",r:"CA - OC",fbc:"Mario Marquez"},
{id:"CA123",st:"CA",r:"CA - OC",fbc:"Tim Lyons"},
{id:"CA125",st:"CA",r:"CA - Inland",fbc:"Katie Lincon"},
{id:"CA128",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA129",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA130",st:"CA",r:"CA - OC",fbc:"Mario Marquez"},
{id:"CA131",st:"CA",r:"CA - OC",fbc:"Tim Lyons"},
{id:"CA132",st:"CA",r:"CA - North",fbc:"Mario Marquez"},
{id:"CA133",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA136",st:"CA",r:"CA - North",fbc:"Tim Lyons"},
{id:"CA137",st:"CA",r:"CA - Central",fbc:"Tim Lyons"},
{id:"CA141",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA142",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA145",st:"CA",r:"CA - South",fbc:"Katie Lincon"},
{id:"CA146",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA147",st:"CA",r:"CA - North",fbc:"Katie Lincon"},
{id:"CA148",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA151",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA153",st:"CA",r:"CA - North",fbc:"Mario Marquez"},
{id:"CA157",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA158",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA159",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA161",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA163",st:"CA",r:"CA - North",fbc:"Tim Lyons"},
{id:"CA164",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA165",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA166",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA167",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA168",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA169",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA170",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA172",st:"CA",r:"CA - OC",fbc:"Tim Lyons"},
{id:"CA173",st:"CA",r:"CA - South",fbc:"Katie Lincon"},
{id:"CA175",st:"CA",r:"CA - Central",fbc:"Katie Lincon"},
{id:"CA176",st:"CA",r:"CA - North",fbc:"Mario Marquez"},
{id:"CA177",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA178",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA179",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA181",st:"CA",r:"CA - North",fbc:"Tim Lyons"},
{id:"CA183",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA184",st:"CA",r:"CA - North",fbc:"Katie Lincon"},
{id:"CA185",st:"CA",r:"CA - Central",fbc:"Mario Marquez"},
{id:"CA186",st:"CA",r:"CA - North",fbc:"Tim Lyons"},
{id:"CA187",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA188",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA192",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA193",st:"CA",r:"CA - South",fbc:"Katie Lincon"},
{id:"CA194",st:"CA",r:"CA - LA",fbc:"Katie Lincon"},
{id:"CA195",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA200",st:"CA",r:"CA - OC",fbc:"Mario Marquez"},
{id:"CA201",st:"CA",r:"CA - North",fbc:"Katie Lincon"},
{id:"CA202",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA204",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA205",st:"CA",r:"CA - North",fbc:"Mario Marquez"},
{id:"CA206",st:"CA",r:"CA - Central",fbc:"Tim Lyons"},
{id:"CA208",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA210",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA212",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA215",st:"CA",r:"CA - Central",fbc:"Tim Lyons"},
{id:"CA216",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA217",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA218",st:"CA",r:"CA - Central",fbc:"Katie Lincon"},
{id:"CA220",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA221",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA224",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA226",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA227",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA228",st:"CA",r:"CA - South",fbc:"Katie Lincon"},
{id:"CA230",st:"CA",r:"CA - North",fbc:"Mario Marquez"},
{id:"CA231",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA232",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA233",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA234",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA235",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA237",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA238",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA240",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA242",st:"CA",r:"CA - North",fbc:"Tim Lyons"},
{id:"CA243",st:"CA",r:"CA - OC",fbc:"Mario Marquez"},
{id:"CA244",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA245",st:"CA",r:"CA - South",fbc:"Katie Lincon"},
{id:"CA247",st:"CA",r:"CA - OC",fbc:"Mario Marquez"},
{id:"CA248",st:"CA",r:"CA - North",fbc:"Katie Lincon"},
{id:"CA250",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA251",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA252",st:"CA",r:"CA - OC",fbc:"Tim Lyons"},
{id:"CA253",st:"CA",r:"CA - North",fbc:"Mario Marquez"},
{id:"CA254",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA255",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA257",st:"CA",r:"CA - LA",fbc:"Katie Lincon"},
{id:"CA258",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA260",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA261",st:"CA",r:"CA - Central",fbc:"Tim Lyons"},
{id:"CA268",st:"CA",r:"CA - North",fbc:"Katie Lincon"},
{id:"CA269",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA273",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA277",st:"CA",r:"CA - North",fbc:"Mario Marquez"},
{id:"CA278",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA279",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA280",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA283",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA284",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA285",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA286",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA287",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA288",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA289",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA290",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA291",st:"CA",r:"CA - North",fbc:"Tim Lyons"},
{id:"CA292",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA293",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA294",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA295",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA296",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA297",st:"CA",r:"CA - Inland",fbc:"Katie Lincon"},
{id:"CA298",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA299",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA301",st:"CA",r:"CA - North",fbc:"Katie Lincon"},
{id:"CA302",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA303",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA304",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA305",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA306",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA308",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA309",st:"CA",r:"CA - OC",fbc:"Mario Marquez"},
{id:"CA313",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA314",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA315",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA316",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA317",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA321",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA322",st:"CA",r:"CA - OC",fbc:"Tim Lyons"},
{id:"CA323",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA325",st:"CA",r:"CA - Central",fbc:"Tim Lyons"},
{id:"CA328",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA329",st:"CA",r:"CA - OC",fbc:"Katie Lincoln"},
{id:"CA330",st:"CA",r:"CA - OC",fbc:"Katie Lincon"},
{id:"CA332",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA333",st:"CA",r:"CA - Central",fbc:"Mario Marquez"},
{id:"CA334",st:"CA",r:"CA - LA",fbc:"Mario Marquez"},
{id:"CA340H",st:"CA",r:"CA - Central",fbc:"Mario Marquez"},
{id:"CA341",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA342",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA343",st:"CA",r:"CA - OC",fbc:"Katie Lincoln"},
{id:"CA344",st:"CA",r:"CA - South",fbc:"Tim Lyons"},
{id:"CA346",st:"CA",r:"CA - South",fbc:"Mario Marquez"},
{id:"CA347",st:"CA",r:"CA - LA",fbc:"Tim Lyons"},
{id:"CA348",st:"CA",r:"CA - Inland",fbc:"Mario Marquez"},
{id:"CA349",st:"CA",r:"CA - North",fbc:"Mario Marquez"},
{id:"CO101",st:"CO",r:"US Central",fbc:"Katie Lincon"},
{id:"CO102",st:"CO",r:"US Central",fbc:"Mario Marquez"},
{id:"CO103",st:"CO",r:"US Central",fbc:"Tim Lyons"},
{id:"CO104",st:"CO",r:"US Central",fbc:"Katie Lincon"},
{id:"LA101",st:"LA",r:"US South",fbc:"Tim Lyons"},
{id:"LA102",st:"LA",r:"US South",fbc:"Tim Lyons"},
{id:"LA103",st:"LA",r:"US South",fbc:"Tim Lyons"},
{id:"LA104",st:"LA",r:"US South",fbc:"Tim Lyons"},
{id:"NJ109",st:"NJ",r:"US East",fbc:"Tim Lyons"},
{id:"NJ110",st:"NJ",r:"US East",fbc:"Tim Lyons"},
{id:"NV101",st:"NV",r:"US Central",fbc:"Katie Lincoln"},
{id:"NV102",st:"NV",r:"US Central",fbc:"Katie Lincoln"},
{id:"NV103",st:"NV",r:"US Central",fbc:"Katie Lincoln"},
{id:"NV104",st:"NV",r:"US Central",fbc:"Katie Lincon"},
{id:"NV105",st:"NV",r:"US Central",fbc:"Katie Lincon"},
{id:"NV107",st:"NV",r:"US Central",fbc:"Katie Lincon"},
{id:"NV108",st:"NV",r:"US Central",fbc:"Katie Lincon"},
{id:"NV109",st:"NV",r:"US Central",fbc:"Katie Lincon"},
{id:"NV110",st:"NV",r:"US Central",fbc:"Katie Lincon"},
{id:"NV111",st:"NV",r:"US Central",fbc:"Katie Lincon"},
{id:"NV112",st:"NV",r:"US Central",fbc:"Katie Lincoln"},
{id:"NV113",st:"NV",r:"US Central",fbc:"Katie Lincoln"},
{id:"TX101",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX102",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX103",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX105",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX109",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX111",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX117",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX119",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX120",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX123",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX124",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX126",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"TX128",st:"TX",r:"Texas",fbc:"Tim Lyons"},
{id:"UT101",st:"UT",r:"US Central",fbc:"Mario Marquez"},
{id:"UT102",st:"UT",r:"US Central",fbc:"Tim Lyons"},
{id:"UT103",st:"UT",r:"US Central",fbc:"Katie Lincon"},
{id:"UT107",st:"UT",r:"US Central",fbc:"Mario Marquez"}
];

const COMPLIANCE_FORM = [{"cat": "Exterior", "icon": "🏪", "items": [{"n": "Parking lot free of trash, pavement/signs in good condition", "pts": 5}, {"n": "Exterior building signage clean, works, good condition, timer set", "pts": 5}]}, {"cat": "Patio & Store Front", "icon": "🪑", "items": [{"n": "Store open during posted hours, hours posted & match online (YL/Google/Yelp)", "pts": 6}, {"n": "Correct flavors updated on app/OLO, store on all approved TPD", "pts": 6}, {"n": "Patio/exterior floor clean, landscaping trimmed, trash receptacle good condition", "pts": 1}, {"n": "Windows/ledges/door/frame/kickplate clean, door aligned, weatherstripping good", "pts": 3}, {"n": "Patio tables/chairs clean, sturdy, ADA table w/decal available, umbrellas good", "pts": 3}, {"n": "Window signage in good repair, hours posted correctly, Prop 65 if applicable", "pts": 1}]}, {"cat": "Front of House / Lobby", "icon": "🏠", "items": [{"n": "Interior glass/ledges clean, window treatments clean & functional", "pts": 1}, {"n": "Interior POP current, approved, in good repair, posted properly", "pts": 1}, {"n": "Current promotional items offered (flavors, toppings, packaging)", "pts": 2}, {"n": "Permanent signage clean/current/approved, price/oz posted, no handwritten signs", "pts": 3}, {"n": "All lights clean & working (digital, static, POS, topping bar, crest sign)", "pts": 3}, {"n": "Ceiling and vents clean, good condition, free of dust/rust/stains, no gaps", "pts": 2}, {"n": "All wall surfaces clean & good condition (laminate, mosaic, painted)", "pts": 3}, {"n": "Floors/coving clean, no broken tiles, grout intact, mats in good repair", "pts": 3}, {"n": "Interior tables/chairs clean & sturdy, ADA table available, bench seating good", "pts": 3}, {"n": "Cabinets clean & good condition, dispensers functional, Crathco clean (if applicable)", "pts": 2}, {"n": "FOH trash cans approved, clean, good condition, liner not visible", "pts": 2}, {"n": "BOH door clean, good repair, kept closed/locked during business hours", "pts": 1}, {"n": "Music on, appropriate content, commercial free, volume appropriate", "pts": 1}, {"n": "Temperature comfortable, no unpleasant odors or strong cleaners smell", "pts": 1}, {"n": "Swirl To-Go freezer clean, FIFO followed, cups labeled/prepped per job aid", "pts": 2}]}, {"cat": "Restrooms", "icon": "🚻", "items": [{"n": "Restroom door clean, handle works, signage clean & approved", "pts": 1}, {"n": "Hot & cold water available (100-108°F), soap, towels/dryer, handwash sign posted", "pts": 10}, {"n": "Restroom interior clean & in good repair (9 sub-checks)", "pts": 9}]}, {"cat": "FOH Machines", "icon": "🍦", "items": [{"n": "All machines operating, no empty/dry cylinders, unused machines disassembled", "pts": 10}, {"n": "Flavors match placement guide, required flavors available, cards current & good condition", "pts": 20}, {"n": "Machine fronts clean, no leaks, handles/caps/frames/drip trays clean & good condition", "pts": 20}]}, {"cat": "Product Quality", "icon": "⭐", "items": [{"n": "Product Quality - Tart (Texture, Firmness, Flavor, Draw Speed)", "pts": 14}, {"n": "Product Quality - Sweet (Texture, Firmness, Flavor, Draw Speed)", "pts": 14}, {"n": "Product Quality - Ice Cream (Texture, Firmness, Flavor, Draw Speed)", "pts": 14}, {"n": "Product Quality - Sorbet (Texture, Firmness, Flavor, Draw Speed)", "pts": 14}, {"n": "Product Quality - NSA (Texture, Firmness, Flavor, Draw Speed)", "pts": 14}]}, {"cat": "Toppings Bar", "icon": "🫐", "items": [{"n": "Sneeze guard clean, topping bar area clean, counter/grout in good condition", "pts": 7}, {"n": "Allergens placed properly, shakers stored on counter to prevent cross contamination", "pts": 4}, {"n": "All toppings and menu items approved", "pts": 4}, {"n": "Toppings labeled w/approved labels, calories displayed, label holders clean", "pts": 4}, {"n": "Toppings stocked full appearance, below fill line, shakers filled, FIFO followed, fresh", "pts": 4}, {"n": "Tongs/spoons clean & YL approved, sauce dispensers clean & functional", "pts": 3}, {"n": "Back up containers properly labeled/dated, no utensils inside, allergens stored below", "pts": 4}]}, {"cat": "POS Area", "icon": "💳", "items": [{"n": "Service area clean, spoons stocked, YL bags/lids available, sample cups on tray", "pts": 1}, {"n": "Cabinet/swing gate clean & good condition, back counter organized, no clutter", "pts": 1}, {"n": "Scales clean, good condition, calibrated (Weights & Measures sticker)", "pts": 4}, {"n": "All POS stations, scanners, printers working; accepting GC, cash & credit cards", "pts": 3}, {"n": "Gift cards and sleeves available and displayed for guests", "pts": 1}]}, {"cat": "Guest Service", "icon": "😊", "items": [{"n": "Guests greeted in a timely manner", "pts": 4}, {"n": "TMs engage/interact with guests, suggest flavors/toppings, present in FOH, no phones", "pts": 10}, {"n": "All employees meet YL uniform standards (hat, nametag, pants, shoes, shirt)", "pts": 10}, {"n": "TMs ask about Real Rewards & for here/to go, knowledgeable on GC & rewards", "pts": 2}]}, {"cat": "BOH Handsink", "icon": "🧤", "items": [{"n": "Handwashing policy posted, hand sink clean, only used for handwashing, hot water 100°F+", "pts": 8}, {"n": "Proper glove use observed (per YL handwash policy)", "pts": 8}, {"n": "Sanitizer solutions clean & adequate concentration, 3 red buckets in designated areas", "pts": 4}]}, {"cat": "BOH General", "icon": "🔧", "items": [{"n": "BOH lighting works properly, covers clean & good condition", "pts": 2}, {"n": "BOH ceiling tiles/vents clean, good condition, no gaps", "pts": 2}, {"n": "BOH wall surfaces clean & good condition (no damage or holes)", "pts": 1}, {"n": "BOH floors/coving clean, no broken tiles, floor sinks clean, grates in place", "pts": 2}, {"n": "BOH trash receptacles clean and emptied regularly", "pts": 1}, {"n": "Personal items in lockers/designated area, food/drinks in labeled container on bottom shelf", "pts": 1}, {"n": "Fire extinguisher available and certified (serviced within last year)", "pts": 1}]}, {"cat": "Dry BOH Storage", "icon": "📦", "items": [{"n": "Products in approved NSF sealed containers, labeled, FIFO followed, no expired products", "pts": 11}, {"n": "Dry storage shelves clean, organized, free of dust/rust, no unused/broken equipment", "pts": 5}, {"n": "All products at least 6 inches off the floor", "pts": 2}, {"n": "Allergens stored separate and below all other products (Nuts, Gluten, Coconut)", "pts": 2}]}, {"cat": "Prep Area", "icon": "🔪", "items": [{"n": "Refrigerated/frozen products stored properly and put away within 1 hour of delivery", "pts": 5}, {"n": "Quick thawing done properly (cold running water, caps not submerged)", "pts": 5}, {"n": "Prep table/area cleaned & sanitized, prep sink clean, fruit washed in colander", "pts": 10}]}, {"cat": "BOH Machines", "icon": "⚙️", "items": [{"n": "Machines working, lids clean/crack-free, standpipes in all hoppers, temps below 41°F", "pts": 86}, {"n": "Machines cleaned per YL schedule, re-run not used", "pts": 35}, {"n": "Machines labeled with flavor & cleaning magnets", "pts": 2}, {"n": "Glycol system, hoses and water lines clean & operating properly", "pts": 2}, {"n": "Hose/reel clean & operational, Sterasheen available, brushes/spatulas good condition", "pts": 2}, {"n": "Bottles properly handled before filling (gloves, sanitized, shaken)", "pts": 2}, {"n": "Machine cleaning schedule posted and signed off", "pts": 5}, {"n": "Machine blade/tune up kits changed and logged", "pts": 5}, {"n": "Temperature log completed 2x daily, 30 days of logs available", "pts": 5}, {"n": "Probe thermometer available and calibrated", "pts": 5}, {"n": "Sanitizer test strips available, used and demonstrated properly", "pts": 1}, {"n": "Quality checks logs filled out daily (draw test 1x/day, taste test 2x/day)", "pts": 1}]}, {"cat": "Refrigeration Equipment", "icon": "❄️", "items": [{"n": "Cold topping bar working properly, product held at 41°F max", "pts": 20}, {"n": "All products sealed, labeled, dated, 6in off floor, FIFO followed, no expired", "pts": 9}, {"n": "Walk-in cooler clean, good condition, product temp in range", "pts": 25}, {"n": "Reach-in clean, good condition, product temp in range", "pts": 24}, {"n": "Freezer clean, good condition, product temp in range", "pts": 24}]}, {"cat": "3 Compartment Sink / Mop / Office", "icon": "🧹", "items": [{"n": "3 comp sink & back wall clean, faucets/spray nozzle clean, dispensers functional", "pts": 2}, {"n": "3 comp sink set up properly, soap & sanitizer available, proper temps", "pts": 5}, {"n": "Dishes clean, free of residue, air dried, stored neatly, adequate amount", "pts": 2}, {"n": "Mop stall clean & organized, mop bucket clean, wet floor signs available", "pts": 1}, {"n": "All chemicals labeled properly, stored below/separate from food & packaging", "pts": 1}, {"n": "SDS book present, sign off acknowledgment sheet current", "pts": 1}, {"n": "First aid kit available and stocked (bandages, ointment, finger cots)", "pts": 1}, {"n": "Job aids available, TMs knowledgeable on job duties", "pts": 1}, {"n": "Required postings up & current (health inspection, labor poster, ServSafe, pest control)", "pts": 6}, {"n": "Manager station clean, organized, safe closed when not in use", "pts": 1}]}];

const PROMOS = [{"id": 1, "n": "20th Anniversary Celebrations (All Year)", "m": "Jan-Dec"}, {"id": 2, "n": "NFYD BOGO & RR 2x Points", "m": "Feb 6"}, {"id": 3, "n": "Valentine's Day Celebration", "m": "Feb 14"}, {"id": 4, "n": "St. Patrick's Day + Disney Pixar Hoppers Collab", "m": "Mar"}, {"id": 5, "n": "Free Birthday Cupcake Batter Froyo (8oz)", "m": "Feb 25"}, {"id": 6, "n": "Giant Spoon Promo ($15 min)", "m": "Mar 16"}, {"id": 7, "n": "Earth Day BOGO Dirt Cup (OLO)", "m": "Apr 22"}, {"id": 8, "n": "New Signature Sauces Launch", "m": "Mar 30 / May 11"}, {"id": 9, "n": "Mother's Day Giant Spoon Promo", "m": "May 12"}, {"id": 10, "n": "Disney Pixar Toy Story 5 Collab", "m": "Jun 19"}, {"id": 11, "n": "Toy Story Keychain GWP ($25 min)", "m": "Jun-Jul"}, {"id": 12, "n": "4th of July", "m": "Jul 4"}, {"id": 13, "n": "National Ice Cream Day RR 2x Points", "m": "Jul 19"}, {"id": 14, "n": "Back to School Campaign", "m": "Aug"}, {"id": 15, "n": "Too Faced Sweet Peach Collab", "m": "Sep 7-27"}, {"id": 16, "n": "A Very Laufey Day (Laufberry)", "m": "Sep"}, {"id": 17, "n": "National Spoon Day Giant Spoon", "m": "Oct 7"}, {"id": 18, "n": "Fan Appreciation Day BOGO & 2x pts", "m": "Oct 28"}, {"id": 19, "n": "Veterans Day 15% Off w/Military ID", "m": "Nov 11"}, {"id": 20, "n": "Black Friday / Cyber Monday Bonus Card", "m": "Nov 29 / Dec 2"}, {"id": 21, "n": "Food Network Holiday Baking Collab", "m": "Nov-Dec"}, {"id": 22, "n": "Holiday Giant Spoon Promo", "m": "Dec 9"}];

const CRITICAL_VIOLATIONS = [{"n": "All yogurt is proprietary to Yogurtland", "pts": 85}, {"n": "Hot water available at all sinks (100°F+, or store must close)", "pts": 85}, {"n": "No visible signs of pest infestation, proper pest prevention", "pts": 85}, {"n": "No sewer backup or power outage (requires store closure)", "pts": 65}, {"n": "Proper handwashing observed (per YL job aid)", "pts": 70}];

const TOTAL_COMPLIANCE_PTS = 610;
const TOTAL_COMPLIANCE_ITEMS = 94;


// ═══════════════════════════════════════════════════════════════
// ADMIN MODULES v2 — Full CRUD on all 9 panels
// ═══════════════════════════════════════════════════════════════
const AUDIT_LOG = [];
function logAudit(action, detail) {
  AUDIT_LOG.unshift({ts: new Date().toISOString(), user: S.currentUser || 'admin', action, detail});
  if (AUDIT_LOG.length > 500) AUDIT_LOG.length = 500;
}

const USERS = [
  {id:'u1',name:'Sam Kwon',email:'sam.kwon@yogurtland.com',role:'admin'},
  {id:'u2',name:'Mario Marquez',email:'mario.m@yogurtland.com',role:'viewer'},
  {id:'u3',name:'Tim Lyons',email:'tim.l@yogurtland.com',role:'viewer'},
    {id:'u5',name:'Katie Lincoln',email:'katie.l@yogurtland.com',role:'viewer'},
];

const EVAL_PERIODS = [
  {id:'ep1',name:'Q1 2026',start:'2026-01-01',end:'2026-03-31',status:'completed'},
  {id:'ep2',name:'Q2 2026',start:'2026-04-01',end:'2026-06-30',status:'active'},
  {id:'ep3',name:'Q3 2026',start:'2026-07-01',end:'2026-09-30',status:'upcoming'},
  {id:'ep4',name:'Q4 2026',start:'2026-10-01',end:'2026-12-31',status:'upcoming'},
];

const NOTIFICATIONS = [
  {id:'n1',type:'email',trigger:'Score below B+',recipients:'FBC + Admin',enabled:true,schedule:'Immediately'},
  {id:'n2',type:'email',trigger:'P&L submission overdue',recipients:'Franchisee + FBC',enabled:true,schedule:'Weekly'},
  {id:'n3',type:'sms',trigger:'Critical violation detected',recipients:'Admin + Ops Director',enabled:true,schedule:'Immediately'},
  {id:'n4',type:'email',trigger:'Meeting attendance < 9/12',recipients:'Franchisee',enabled:false,schedule:'Monthly'},
  {id:'n5',type:'email',trigger:'Compliance score < 80%',recipients:'FBC + Admin',enabled:true,schedule:'After evaluation'},
  {id:'n6',type:'sms',trigger:'Promo participation miss',recipients:'Franchisee + MKT',enabled:false,schedule:'Weekly'},
];

let WEIGHTS = {ops:50, mkt:30, att:20};
let GRADE_BOUNDS = [
  {g:'A+',mn:100},{g:'A',mn:95},{g:'A-',mn:90},{g:'B+',mn:85},{g:'B',mn:80},{g:'B-',mn:75},{g:'C+',mn:70},{g:'C',mn:65},{g:'C-',mn:60},{g:'D',mn:0}
];

const REGION_MAP = {AZ:'Southwest',CA:'California',CO:'Mountain',LA:'Gulf',NV:'Southwest',NJ:'Northeast',TX:'Texas',UT:'Mountain'};

// ── Inline Edit Modal helper ──
function showEditModal(title, fields, onSave) {
  const overlay = h('div', {style: {position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.4)',zIndex:999,display:'flex',alignItems:'center',justifyContent:'center'}});
  const modal = h('div', {style: {background:'#fff',borderRadius:'12px',padding:'24px',width:'420px',maxWidth:'90vw',maxHeight:'80vh',overflowY:'auto',boxShadow:'0 20px 60px rgba(0,0,0,0.2)'}});
  modal.appendChild(h('div', {style: {fontSize:'16px',fontWeight:800,marginBottom:'16px',display:'flex',justifyContent:'space-between',alignItems:'center'}},
    h('span', {}, title),
    h('button', {style: {background:'none',border:'none',fontSize:'18px',cursor:'pointer',color:'var(--g500)'}, onClick: () => overlay.remove()}, '✕')
  ));
  const inputs = {};
  fields.forEach(f => {
    const row = h('div', {style: {marginBottom:'12px'}});
    row.appendChild(h('label', {style: {display:'block',fontSize:'10px',fontWeight:600,color:'var(--g500)',textTransform:'uppercase',letterSpacing:'0.5px',marginBottom:'4px'}}, f.label));
    if (f.type === 'select') {
      const sel = h('select', {style: {width:'100%',padding:'8px 10px',border:'1px solid var(--g300)',borderRadius:'6px',fontSize:'12px',fontFamily:'var(--f)',background:'#fff'}});
      f.options.forEach(o => { const opt = h('option', {value: o.value || o}, typeof o === 'string' ? o : o.label); if ((f.value||'') === (o.value||o)) opt.selected = true; sel.appendChild(opt); });
      inputs[f.key] = sel;
      row.appendChild(sel);
    } else if (f.type === 'textarea') {
      const ta = h('textarea', {style: {width:'100%',padding:'8px 10px',border:'1px solid var(--g300)',borderRadius:'6px',fontSize:'12px',fontFamily:'var(--f)',minHeight:'60px',resize:'vertical'}, value: f.value || ''});
      ta.textContent = f.value || '';
      inputs[f.key] = ta;
      row.appendChild(ta);
    } else {
      const inp = h('input', {type: f.type || 'text', value: f.value || '', placeholder: f.placeholder || '', style: {width:'100%',padding:'8px 10px',border:'1px solid var(--g300)',borderRadius:'6px',fontSize:'12px',fontFamily: f.type === 'number' ? 'var(--m)' : 'var(--f)'}});
      inputs[f.key] = inp;
      row.appendChild(inp);
    }
    modal.appendChild(row);
  });
  const btnRow = h('div', {style: {display:'flex',gap:'8px',marginTop:'16px'}});
  btnRow.appendChild(h('button', {style: {flex:1,padding:'10px',border:'none',borderRadius:'8px',background:'var(--pk)',color:'#fff',fontWeight:700,fontSize:'13px',cursor:'pointer',fontFamily:'var(--f)'}, onClick: () => {
    const vals = {};
    Object.entries(inputs).forEach(([k, el]) => { vals[k] = el.tagName === 'SELECT' ? el.value : (el.tagName === 'TEXTAREA' ? el.value : el.value); });
    onSave(vals);
    overlay.remove();
  }}, '💾 Save'));
  btnRow.appendChild(h('button', {style: {flex:1,padding:'10px',border:'1px solid var(--g300)',borderRadius:'8px',background:'#fff',color:'var(--g700)',fontWeight:600,fontSize:'13px',cursor:'pointer',fontFamily:'var(--f)'}, onClick: () => overlay.remove()}, 'Cancel'));
  modal.appendChild(btnRow);
  overlay.appendChild(modal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

function confirmDelete(name, onConfirm) {
  const overlay = h('div', {style: {position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.4)',zIndex:999,display:'flex',alignItems:'center',justifyContent:'center'}});
  const modal = h('div', {style: {background:'#fff',borderRadius:'12px',padding:'24px',width:'380px',maxWidth:'90vw',boxShadow:'0 20px 60px rgba(0,0,0,0.2)',textAlign:'center'}});
  modal.appendChild(h('div', {style: {fontSize:'36px',marginBottom:'8px'}}, '🗑️'));
  modal.appendChild(h('div', {style: {fontSize:'15px',fontWeight:700,marginBottom:'6px'}}, 'Confirm Delete'));
  modal.appendChild(h('div', {style: {fontSize:'12px',color:'var(--g600)',marginBottom:'16px'}}, `Are you sure you want to remove "${name}"? This cannot be undone.`));
  const btnRow = h('div', {style: {display:'flex',gap:'8px'}});
  btnRow.appendChild(h('button', {style: {flex:1,padding:'10px',border:'none',borderRadius:'8px',background:'var(--rd)',color:'#fff',fontWeight:700,fontSize:'13px',cursor:'pointer',fontFamily:'var(--f)'}, onClick: () => { onConfirm(); overlay.remove(); }}, 'Delete'));
  btnRow.appendChild(h('button', {style: {flex:1,padding:'10px',border:'1px solid var(--g300)',borderRadius:'8px',background:'#fff',color:'var(--g700)',fontWeight:600,fontSize:'13px',cursor:'pointer',fontFamily:'var(--f)'}, onClick: () => overlay.remove()}, 'Cancel'));
  modal.appendChild(btnRow);
  overlay.appendChild(modal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

// ═══════════════════════════════════════════════════════════════
function renderAdmin() {
  const wrap = h('div', {className: 'fu'});
  const at = S.adminTab || 'stores';
  const tabs = h('div', {className: 'tabs', style: {marginBottom: '16px'}});
  [{id:'stores',l:'🏪 Stores'},{id:'checklist',l:'📝 Checklist'},{id:'promos',l:'📅 Promos'},{id:'weights',l:'⚖️ Weights'},{id:'grades',l:'🎓 Grades'},{id:'users',l:'👥 Users'},{id:'periods',l:'📊 Periods'},{id:'notif',l:'📧 Notifications'},{id:'audit',l:'📋 Audit Log'}].forEach(t => {
    tabs.appendChild(h('button', {className: `tab ${at === t.id ? 'active' : ''}`, onClick: () => { S.adminTab = t.id; render(); }}, t.l));
  });
  wrap.appendChild(tabs);
  const content = h('div', {});

  // ══════════ 1. STORE MANAGEMENT ══════════
  if (at === 'stores') {
    const card = h('div', {className: 'card'});
    card.appendChild(h('div', {className: 'sh'}, h('h3', {}, '🏪 Store Management'), h('span', {className: 'sub'}, `${STORES.length} locations`)));
    const topRow = h('div', {style: {display:'flex',gap:'8px',marginBottom:'12px',flexWrap:'wrap'}});
    topRow.appendChild(h('button', {className: 'pill active', onClick: () => {
      showEditModal('Add New Store', [
        {key:'id',label:'Store ID',placeholder:'e.g. CA350'},
        {key:'st',label:'State Code',placeholder:'e.g. CA',value:'CA'},
        {key:'r',label:'Region',type:'select',value:'California',options:['California','Southwest','Mountain','Texas','Gulf','Northeast']},
        {key:'fbc',label:'Assigned FBC',type:'select',value:'Mario Marquez',options:['Mario Marquez','Tim Lyons','Mario Marquez','Katie Lincon','Katie Lincoln']},
      ], vals => {
        if (!vals.id) return;
        STORES.push({id:vals.id.trim(),st:vals.st||'CA',r:vals.r||'California',fbc:vals.fbc||'Mario Marquez'});
        const ev = genEval();
        S.data.push({store:STORES[STORES.length-1],ev,scores:calcScores(ev)});
        logAudit('Store Added',`Added store ${vals.id} → FBC: ${vals.fbc}`);
        render();
      });
    }}, '+ Add Store'));
    const searchInp = h('input', {type:'text',placeholder:'Search stores...',style:{padding:'6px 10px',border:'1px solid var(--g300)',borderRadius:'6px',fontSize:'12px',flex:'1',minWidth:'150px'}});
    topRow.appendChild(searchInp);
    card.appendChild(topRow);
    const tw = h('div', {className:'tw'});
    const table = h('table', {});
    table.appendChild((() => { const thead = h('thead',{}); const tr = h('tr',{}); ['Store ID','State','Region','FBC','Actions'].forEach(c => tr.appendChild(h('th',{},c))); thead.appendChild(tr); return thead; })());
    const tbody = h('tbody', {});
    function buildStoreRows() {
      tbody.innerHTML = '';
      const q = (searchInp.value||'').toLowerCase();
      const filtered = S.data.filter(d => !q || d.store.id.toLowerCase().includes(q) || d.store.fbc.toLowerCase().includes(q));
      filtered.slice(0, 50).forEach(sd => {
        const s = sd.store;
        const tr = h('tr', {className: 'sr'});
        tr.appendChild(h('td', {style:{fontWeight:700}}, s.id));
        tr.appendChild(h('td', {}, `${s.st} (${STATE_NAMES[s.st]||s.st})`));
        tr.appendChild(h('td', {style:{fontSize:'11px'}}, s.r));
        tr.appendChild(h('td', {style:{fontSize:'11px'}}, s.fbc));
        const acts = h('td', {style:{whiteSpace:'nowrap'}});
        acts.appendChild(h('button', {className:'pill',style:{marginRight:'4px'},onClick:(e)=>{
          e.stopPropagation();
          showEditModal(`Edit Store ${s.id}`, [
            {key:'id',label:'Store ID',value:s.id},
            {key:'st',label:'State Code',value:s.st},
            {key:'r',label:'Region',type:'select',value:s.r,options:['California','Southwest','Mountain','Texas','Gulf','Northeast']},
            {key:'fbc',label:'Assigned FBC',type:'select',value:s.fbc,options:['Mario Marquez','Tim Lyons','Mario Marquez','Katie Lincon','Katie Lincoln']},
          ], vals => {
            const changes = [];
            if (vals.id && vals.id !== s.id) { changes.push(`ID: ${s.id}→${vals.id}`); s.id = vals.id; }
            if (vals.st && vals.st !== s.st) { changes.push(`State: ${s.st}→${vals.st}`); s.st = vals.st; }
            if (vals.r && vals.r !== s.r) { changes.push(`Region: ${s.r}→${vals.r}`); s.r = vals.r; }
            if (vals.fbc && vals.fbc !== s.fbc) { changes.push(`FBC: ${s.fbc}→${vals.fbc}`); s.fbc = vals.fbc; }
            if (changes.length) { logAudit('Store Edited', `${s.id}: ${changes.join(', ')}`); render(); }
          });
        }}, '✏️ Edit'));
        acts.appendChild(h('button', {className:'pill',onClick:(e)=>{
          e.stopPropagation();
          confirmDelete(s.id, () => {
            const si = STORES.indexOf(s);
            if (si > -1) STORES.splice(si, 1);
            S.data = S.data.filter(d => d.store !== s);
            logAudit('Store Removed', `Removed store ${s.id}`);
            render();
          });
        }}, '🗑️'));
        tr.appendChild(acts);
        tbody.appendChild(tr);
      });
      if (filtered.length > 50) tbody.appendChild(h('tr',{},h('td',{colspan:'5',style:{textAlign:'center',color:'var(--g400)',fontSize:'11px',padding:'8px'}},`Showing 50 of ${filtered.length} — use search to narrow`)));
    }
    searchInp.addEventListener('input', buildStoreRows);
    buildStoreRows();
    table.appendChild(tbody); tw.appendChild(table); card.appendChild(tw); content.appendChild(card);
  }

  // ══════════ 2. CHECKLIST EDITOR ══════════
  if (at === 'checklist') {
    const card = h('div', {className: 'card'});
    card.appendChild(h('div', {className: 'sh'}, h('h3', {}, '📝 Checklist Editor'), h('span', {className: 'sub'}, `${EXPAND.length} expand · ${TOTAL_COMPLIANCE_ITEMS} compliance items (${TOTAL_COMPLIANCE_PTS} pts)`)));
    // Expand Criteria
    const expSec = h('div', {style:{marginBottom:'16px',padding:'14px',background:'var(--bl-l)',borderRadius:'8px'}});
    expSec.appendChild(h('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'10px'}},
      h('span', {style:{fontSize:'13px',fontWeight:700,color:'var(--bl)'}}, `✅ Criteria to Expand (${EXPAND.length})`),
      h('button', {className:'pill active',onClick:()=>{
        showEditModal('Add Expand Criterion', [{key:'name',label:'Criterion Description',placeholder:'Enter new criterion...'}], vals => {
          if (vals.name) { EXPAND.push(vals.name); logAudit('Expand Criteria Added',vals.name); render(); }
        });
      }}, '+ Add')
    ));
    EXPAND.forEach((item, i) => {
      const row = h('div', {style:{display:'flex',alignItems:'center',gap:'6px',padding:'5px 0',borderBottom:'1px solid #1565C011',fontSize:'11px'}});
      row.appendChild(h('span', {style:{color:'var(--bl)',fontWeight:700,minWidth:'20px'}}, `${i+1}.`));
      row.appendChild(h('span', {style:{flex:1,color:'var(--g700)'}}, item));
      row.appendChild(h('button', {className:'pill',style:{fontSize:'9px',padding:'2px 6px'},onClick:()=>{
        showEditModal(`Edit Criterion #${i+1}`, [{key:'name',label:'Criterion',value:item}], vals => {
          if (vals.name && vals.name !== item) { const old = EXPAND[i]; EXPAND[i] = vals.name; logAudit('Expand Criteria Edited',`#${i+1}: "${old}" → "${vals.name}"`); render(); }
        });
      }}, '✏️'));
      row.appendChild(h('button', {className:'pill',style:{fontSize:'9px',padding:'2px 6px'},onClick:()=>{
        confirmDelete(item, () => { EXPAND.splice(i, 1); logAudit('Expand Criteria Removed',`"${item}"`); render(); });
      }}, '🗑️'));
      expSec.appendChild(row);
    });
    card.appendChild(expSec);
    // Compliance Form 8.0
    const compSec = h('div', {style:{padding:'14px',background:'var(--or-l)',borderRadius:'8px'}});
    compSec.appendChild(h('div', {style:{fontSize:'13px',fontWeight:700,color:'var(--or)',marginBottom:'10px'}}, `📋 Compliance Form 8.0 — ${COMPLIANCE_FORM.reduce((s,c)=>s+c.items.length,0)} items`));
    COMPLIANCE_FORM.forEach((cat, ci) => {
      const catPts = cat.items.reduce((s,it) => s + it.pts, 0);
      const catHdr = h('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'8px 0',borderBottom:'2px solid #EF6C0022',marginTop:ci?'10px':'0'}});
      catHdr.appendChild(h('span', {style:{fontSize:'12px',fontWeight:700}}, `${cat.icon} ${cat.cat} (${cat.items.length} items · ${catPts} pts)`));
      const catBtns = h('div', {style:{display:'flex',gap:'4px'}});
      catBtns.appendChild(h('button', {className:'pill',style:{fontSize:'9px'},onClick:()=>{
        showEditModal(`Add Item to ${cat.cat}`, [
          {key:'name',label:'Item Description',placeholder:'Describe the inspection item...'},
          {key:'pts',label:'Point Value',type:'number',value:'5',placeholder:'Points'}
        ], vals => {
          if (vals.name) { cat.items.push({n:vals.name,pts:parseInt(vals.pts)||5}); logAudit('Compliance Item Added',`"${vals.name}" (${vals.pts}pts) → ${cat.cat}`); render(); }
        });
      }}, '+ Item'));
      catHdr.appendChild(catBtns);
      compSec.appendChild(catHdr);
      cat.items.forEach((item, ii) => {
        const row = h('div', {style:{display:'flex',alignItems:'center',gap:'6px',padding:'3px 0 3px 12px',fontSize:'10px',borderBottom:'1px solid #EF6C0008'}});
        row.appendChild(h('span', {style:{flex:1,color:'var(--g700)',lineHeight:'1.3'}}, item.n));
        row.appendChild(h('span', {style:{fontFamily:'var(--m)',fontWeight:700,color:'var(--bl)',minWidth:'40px',textAlign:'right'}}, `${item.pts}pts`));
        row.appendChild(h('button', {className:'pill',style:{fontSize:'8px',padding:'1px 5px'},onClick:()=>{
          showEditModal(`Edit: ${cat.cat}`, [
            {key:'name',label:'Item Description',value:item.n},
            {key:'pts',label:'Point Value',type:'number',value:String(item.pts)}
          ], vals => {
            const changes = [];
            if (vals.name && vals.name !== item.n) { changes.push(`text changed`); item.n = vals.name; }
            if (vals.pts && parseInt(vals.pts) !== item.pts) { changes.push(`pts: ${item.pts}→${vals.pts}`); item.pts = parseInt(vals.pts); }
            if (changes.length) { logAudit('Compliance Item Edited',`${cat.cat}: ${changes.join(', ')}`); render(); }
          });
        }}, '✏️'));
        row.appendChild(h('button', {className:'pill',style:{fontSize:'8px',padding:'1px 5px'},onClick:()=>{
          confirmDelete(item.n.substring(0,40)+'...', () => { cat.items.splice(ii, 1); logAudit('Compliance Item Removed',`${cat.cat}: "${item.n}"`); render(); });
        }}, '🗑️'));
        compSec.appendChild(row);
      });
    });
    card.appendChild(compSec);
    content.appendChild(card);
  }

  // ══════════ 3. PROMO CALENDAR ══════════
  if (at === 'promos') {
    const card = h('div', {className: 'card'});
    card.appendChild(h('div', {className: 'sh'}, h('h3', {}, '📅 2026 Marketing Promo Calendar'), h('span', {className: 'sub'}, `${PROMOS.length} promos`)));
    card.appendChild(h('button', {className:'pill active',style:{marginBottom:'12px'},onClick:()=>{
      showEditModal('Add Promo / Event', [
        {key:'name',label:'Promo Name',placeholder:'e.g. Spring BOGO'},
        {key:'month',label:'Date / Period',placeholder:'e.g. Mar 15 or Jun-Jul'},
      ], vals => {
        if (vals.name) { PROMOS.push({id:Date.now(),n:vals.name,m:vals.month||'TBD'}); logAudit('Promo Added',`"${vals.name}" (${vals.month||'TBD'})`); render(); }
      });
    }}, '+ Add Promo'));
    const tw = h('div',{className:'tw'});const table=h('table',{});
    table.appendChild((() => { const thead=h('thead',{});const tr=h('tr',{});['#','Promo / Event','Date','Actions'].forEach(c=>tr.appendChild(h('th',{},c)));thead.appendChild(tr);return thead; })());
    const tbody = h('tbody',{});
    PROMOS.forEach((p, i) => {
      const tr = h('tr',{className:'sr'});
      tr.appendChild(h('td',{style:{color:'var(--g400)',fontWeight:600}},String(i+1)));
      tr.appendChild(h('td',{style:{fontWeight:600,fontSize:'12px'}},p.n));
      tr.appendChild(h('td',{style:{fontSize:'11px',color:'var(--g600)'}},p.m));
      const acts = h('td',{style:{whiteSpace:'nowrap'}});
      acts.appendChild(h('button',{className:'pill',style:{marginRight:'4px'},onClick:()=>{
        showEditModal(`Edit Promo #${i+1}`, [
          {key:'name',label:'Promo Name',value:p.n},
          {key:'month',label:'Date / Period',value:p.m},
        ], vals => {
          const changes = [];
          if (vals.name && vals.name !== p.n) { changes.push(`name: "${p.n}"→"${vals.name}"`); p.n = vals.name; }
          if (vals.month && vals.month !== p.m) { changes.push(`date: ${p.m}→${vals.month}`); p.m = vals.month; }
          if (changes.length) { logAudit('Promo Edited',changes.join(', ')); render(); }
        });
      }},'✏️ Edit'));
      acts.appendChild(h('button',{className:'pill',onClick:()=>{
        confirmDelete(p.n, () => { PROMOS.splice(i,1); logAudit('Promo Removed',`"${p.n}"`); render(); });
      }},'🗑️'));
      tr.appendChild(acts);
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);tw.appendChild(table);card.appendChild(tw);content.appendChild(card);
  }

  // ══════════ 4. WEIGHT CONFIG ══════════
  if (at === 'weights') {
    const card = h('div', {className: 'card'});
    card.appendChild(h('div', {className: 'sh'}, h('h3', {}, '⚖️ Scoring Weight Configuration'), h('span', {className: 'sub'}, 'Total must equal 100')));
    const totalEl = h('div', {style:{fontSize:'28px',fontWeight:900,fontFamily:'var(--m)',textAlign:'center',margin:'12px 0'}});
    function updTotal() {
      const sum = WEIGHTS.ops + WEIGHTS.mkt + WEIGHTS.att;
      totalEl.textContent = `${sum} / 100`;
      totalEl.style.color = sum === 100 ? 'var(--gn)' : 'var(--rd)';
    }
    updTotal();
    card.appendChild(totalEl);
    [{key:'ops',label:'OPS (Operations)',color:'#1565C0',icon:'🔧'},{key:'mkt',label:'MKT (Marketing)',color:'#E91E63',icon:'📣'},{key:'att',label:'Attendance',color:'#00897B',icon:'📅'}].forEach(w => {
      const row = h('div',{style:{display:'flex',alignItems:'center',gap:'12px',marginBottom:'16px',padding:'14px',background:'var(--g50)',borderRadius:'8px'}});
      row.appendChild(h('span',{style:{fontSize:'13px',fontWeight:700,minWidth:'180px'}},`${w.icon} ${w.label}`));
      const slider = h('input',{type:'range',min:'0',max:'100',value:String(WEIGHTS[w.key]),style:{flex:1,accentColor:w.color}});
      const val = h('span',{style:{fontFamily:'var(--m)',fontSize:'22px',fontWeight:800,color:w.color,minWidth:'40px',textAlign:'center'}},String(WEIGHTS[w.key]));
      const numInp = h('input',{type:'number',min:'0',max:'100',value:String(WEIGHTS[w.key]),style:{width:'60px',padding:'4px 8px',border:'1px solid var(--g300)',borderRadius:'4px',fontFamily:'var(--m)',fontSize:'13px',textAlign:'center'}});
      slider.addEventListener('input',()=>{ WEIGHTS[w.key]=parseInt(slider.value); val.textContent=slider.value; numInp.value=slider.value; updTotal(); });
      numInp.addEventListener('input',()=>{ WEIGHTS[w.key]=parseInt(numInp.value)||0; val.textContent=numInp.value; slider.value=numInp.value; updTotal(); });
      row.appendChild(slider);row.appendChild(val);row.appendChild(numInp);card.appendChild(row);
    });
    card.appendChild(h('button',{className:'pill active',style:{marginTop:'8px',padding:'10px 20px'},onClick:()=>{
      const sum = WEIGHTS.ops + WEIGHTS.mkt + WEIGHTS.att;
      if (sum !== 100) { alert(`Weights must sum to 100! Current: ${sum}`); return; }
      S.data.forEach(sd => recalc(sd));
      logAudit('Weights Updated',`OPS:${WEIGHTS.ops} MKT:${WEIGHTS.mkt} ATT:${WEIGHTS.att}`);
      alert('Weights saved! All scores recalculated.');
      render();
    }},'💾 Save & Recalculate All Scores'));
    content.appendChild(card);
  }

  // ══════════ 5. GRADE THRESHOLDS ══════════
  if (at === 'grades') {
    const card = h('div', {className: 'card'});
    card.appendChild(h('div', {className: 'sh'}, h('h3', {}, '🎓 Grade Threshold Configuration'), h('span', {className: 'sub'}, `${GRADE_BOUNDS.length} levels`)));
    const preview = h('div',{style:{display:'flex',gap:'6px',flexWrap:'wrap',marginBottom:'16px'}});
    GRADE_CFG.forEach(g => preview.appendChild(h('span',{className:'grade',style:{color:g.c,background:g.bg,border:`1px solid ${g.c}22`}},`${g.g}: ${g.mn}+`)));
    card.appendChild(preview);
    GRADE_BOUNDS.forEach((gb2, i) => {
      const gc = GRADE_CFG[i];
      const row = h('div',{style:{display:'flex',alignItems:'center',gap:'12px',marginBottom:'8px',padding:'10px 14px',background:gc?.bg||'var(--g50)',borderRadius:'8px',border:`1px solid ${gc?.c||'#ccc'}22`}});
      row.appendChild(h('span',{style:{fontFamily:'var(--m)',fontWeight:800,fontSize:'18px',color:gc?.c||'#333',minWidth:'40px'}},gb2.g));
      row.appendChild(h('span',{style:{fontSize:'11px',color:'var(--g600)',minWidth:'70px'}},'Min score:'));
      const inp = h('input',{type:'number',step:'0.01',value:String(gb2.mn),style:{width:'80px',padding:'6px 10px',border:'1px solid var(--g300)',borderRadius:'6px',fontFamily:'var(--m)',fontSize:'14px',textAlign:'center',fontWeight:700}});
      inp.addEventListener('change',()=>{
        const oldVal = gb2.mn;
        gb2.mn = parseFloat(inp.value)||0;
        if (gc) gc.mn = gb2.mn;
        if (i > 0 && GRADE_CFG[i-1]) GRADE_CFG[i-1].mx = gb2.mn - 0.01;
        logAudit('Grade Threshold Changed',`${gb2.g}: ${oldVal} → ${gb2.mn}`);
      });
      row.appendChild(inp);
      row.appendChild(h('button',{className:'pill',style:{fontSize:'9px'},onClick:()=>{
        showEditModal(`Edit Grade ${gb2.g}`, [
          {key:'grade',label:'Grade Label',value:gb2.g},
          {key:'min',label:'Minimum Score',type:'number',value:String(gb2.mn)},
        ], vals => {
          if (vals.grade) gb2.g = vals.grade;
          if (vals.min !== undefined) { gb2.mn = parseFloat(vals.min)||0; if(gc) gc.mn = gb2.mn; }
          logAudit('Grade Edited',`${gb2.g}: min=${gb2.mn}`);
          render();
        });
      }},'✏️'));
      card.appendChild(row);
    });
    card.appendChild(h('button',{className:'pill active',style:{marginTop:'12px',padding:'10px 20px'},onClick:()=>{
      S.data.forEach(sd => { sd.scores.grade = getGrade(sd.scores.total); });
      logAudit('Grade Thresholds Saved','All grades recalculated');
      alert('Grade thresholds saved!');
      render();
    }},'💾 Save & Recalculate All Grades'));
    content.appendChild(card);
  }

  // ══════════ 6. USER ROLES ══════════
  if (at === 'users') {
    const card = h('div', {className: 'card'});
    card.appendChild(h('div', {className: 'sh'}, h('h3', {}, '👥 User & Role Management'), h('span', {className: 'sub'}, `${USERS.length} users`)));
    card.appendChild(h('button',{className:'pill active',style:{marginBottom:'12px'},onClick:()=>{
      showEditModal('Add User', [
        {key:'name',label:'Full Name',placeholder:'John Smith'},
        {key:'email',label:'Email',placeholder:'john@yogurtland.com'},
        {key:'role',label:'Role',type:'select',value:'viewer',options:['admin','viewer']},
      ], vals => {
        if (vals.name) { USERS.push({id:'u'+Date.now(),name:vals.name,email:vals.email||'',role:vals.role||'viewer'}); logAudit('User Added',`${vals.name} (${vals.role})`); render(); }
      });
    }},'+ Add User'));
    const tw=h('div',{className:'tw'});const table=h('table',{});
    table.appendChild((() => { const thead=h('thead',{});const tr=h('tr',{});['Name','Email','Role','Permissions','Actions'].forEach(c=>tr.appendChild(h('th',{},c)));thead.appendChild(tr);return thead; })());
    const tbody=h('tbody',{});
    USERS.forEach((u, i) => {
      const tr=h('tr',{className:'sr'});
      tr.appendChild(h('td',{style:{fontWeight:700}},u.name));
      tr.appendChild(h('td',{style:{fontSize:'11px',color:'var(--g600)'}},u.email));
      const roleTd=h('td',{});roleTd.appendChild(h('span',{className:'pill',style:{background:u.role==='admin'?'var(--pk-l)':'var(--bl-l)',color:u.role==='admin'?'var(--pk)':'var(--bl)',borderColor:u.role==='admin'?'var(--pk)':'var(--bl)'}},u.role.toUpperCase()));tr.appendChild(roleTd);
      tr.appendChild(h('td',{style:{fontSize:'10px',color:'var(--g500)'}},u.role==='admin'?'Full access: edit stores, scores, settings':'View only: dashboards & reports'));
      const acts=h('td',{style:{whiteSpace:'nowrap'}});
      acts.appendChild(h('button',{className:'pill',style:{marginRight:'4px'},onClick:()=>{
        showEditModal(`Edit User: ${u.name}`, [
          {key:'name',label:'Full Name',value:u.name},
          {key:'email',label:'Email',value:u.email},
          {key:'role',label:'Role',type:'select',value:u.role,options:['admin','viewer']},
        ], vals => {
          const changes = [];
          if (vals.name && vals.name !== u.name) { changes.push(`name: ${u.name}→${vals.name}`); u.name = vals.name; }
          if (vals.email !== undefined && vals.email !== u.email) { changes.push(`email changed`); u.email = vals.email; }
          if (vals.role && vals.role !== u.role) { changes.push(`role: ${u.role}→${vals.role}`); u.role = vals.role; }
          if (changes.length) { logAudit('User Edited',`${u.name}: ${changes.join(', ')}`); render(); }
        });
      }},'✏️ Edit'));
      if (u.id !== 'u1') {
        acts.appendChild(h('button',{className:'pill',onClick:()=>{
          confirmDelete(u.name, () => { USERS.splice(i,1); logAudit('User Removed',u.name); render(); });
        }},'🗑️'));
      }
      tr.appendChild(acts);tbody.appendChild(tr);
    });
    table.appendChild(tbody);tw.appendChild(table);card.appendChild(tw);content.appendChild(card);
  }

  // ══════════ 7. EVAL PERIODS ══════════
  if (at === 'periods') {
    const card = h('div', {className: 'card'});
    card.appendChild(h('div', {className: 'sh'}, h('h3', {}, '📊 Evaluation Periods'), h('span', {className: 'sub'}, `${EVAL_PERIODS.length} periods`)));
    card.appendChild(h('button',{className:'pill active',style:{marginBottom:'12px'},onClick:()=>{
      showEditModal('Add Evaluation Period', [
        {key:'name',label:'Period Name',placeholder:'e.g. Q1 2027'},
        {key:'start',label:'Start Date',type:'date',value:'2027-01-01'},
        {key:'end',label:'End Date',type:'date',value:'2027-03-31'},
        {key:'status',label:'Status',type:'select',value:'upcoming',options:['upcoming','active','completed']},
      ], vals => {
        if (vals.name) { EVAL_PERIODS.push({id:'ep'+Date.now(),name:vals.name,start:vals.start||'',end:vals.end||'',status:vals.status||'upcoming'}); logAudit('Eval Period Added',vals.name); render(); }
      });
    }},'+ Add Period'));
    const statusColors = {completed:{bg:'var(--gn-l)',c:'var(--gn)'},active:{bg:'var(--bl-l)',c:'var(--bl)'},upcoming:{bg:'var(--g100)',c:'var(--g600)'}};
    EVAL_PERIODS.forEach((ep, i) => {
      const sc = statusColors[ep.status]||statusColors.upcoming;
      const row = h('div',{style:{display:'flex',alignItems:'center',gap:'12px',padding:'12px',marginBottom:'8px',borderRadius:'8px',background:sc.bg,border:`1px solid ${sc.c}22`}});
      row.appendChild(h('div',{style:{flex:1}},
        h('div',{style:{fontSize:'14px',fontWeight:700}},ep.name),
        h('div',{style:{fontSize:'11px',color:'var(--g600)',marginTop:'2px'}},`${ep.start} → ${ep.end}`)
      ));
      row.appendChild(h('span',{className:'pill',style:{background:sc.bg,color:sc.c,borderColor:sc.c}},ep.status.toUpperCase()));
      row.appendChild(h('button',{className:'pill',style:{marginRight:'4px'},onClick:()=>{
        showEditModal(`Edit Period: ${ep.name}`, [
          {key:'name',label:'Period Name',value:ep.name},
          {key:'start',label:'Start Date',type:'date',value:ep.start},
          {key:'end',label:'End Date',type:'date',value:ep.end},
          {key:'status',label:'Status',type:'select',value:ep.status,options:['upcoming','active','completed']},
        ], vals => {
          const changes = [];
          if (vals.name && vals.name !== ep.name) { changes.push(`name: ${ep.name}→${vals.name}`); ep.name = vals.name; }
          if (vals.start && vals.start !== ep.start) { changes.push(`start: ${vals.start}`); ep.start = vals.start; }
          if (vals.end && vals.end !== ep.end) { changes.push(`end: ${vals.end}`); ep.end = vals.end; }
          if (vals.status && vals.status !== ep.status) { changes.push(`status: ${ep.status}→${vals.status}`); ep.status = vals.status; }
          if (changes.length) { logAudit('Eval Period Edited',`${ep.name}: ${changes.join(', ')}`); render(); }
        });
      }},'✏️ Edit'));
      row.appendChild(h('button',{className:'pill',onClick:()=>{
        confirmDelete(ep.name, () => { EVAL_PERIODS.splice(i,1); logAudit('Eval Period Removed',ep.name); render(); });
      }},'🗑️'));
      card.appendChild(row);
    });
    content.appendChild(card);
  }

  // ══════════ 8. NOTIFICATIONS ══════════
  if (at === 'notif') {
    const card = h('div', {className: 'card'});
    card.appendChild(h('div', {className: 'sh'}, h('h3', {}, '📧 Notification Settings'), h('span', {className: 'sub'}, `${NOTIFICATIONS.filter(n=>n.enabled).length}/${NOTIFICATIONS.length} active`)));
    card.appendChild(h('button',{className:'pill active',style:{marginBottom:'12px'},onClick:()=>{
      showEditModal('Add Notification Rule', [
        {key:'trigger',label:'Trigger Condition',placeholder:'e.g. Score drops below C'},
        {key:'type',label:'Type',type:'select',value:'email',options:['email','sms']},
        {key:'recipients',label:'Recipients',placeholder:'e.g. FBC + Admin'},
        {key:'schedule',label:'Schedule',type:'select',value:'Immediately',options:['Immediately','Daily','Weekly','Monthly','After evaluation']},
      ], vals => {
        if (vals.trigger) { NOTIFICATIONS.push({id:'n'+Date.now(),type:vals.type||'email',trigger:vals.trigger,recipients:vals.recipients||'Admin',enabled:true,schedule:vals.schedule||'Immediately'}); logAudit('Notification Added',vals.trigger); render(); }
      });
    }},'+ Add Rule'));
    NOTIFICATIONS.forEach((n, i) => {
      const row = h('div',{style:{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',marginBottom:'6px',borderRadius:'8px',background:n.enabled?'var(--gn-l)':'var(--g50)',border:`1px solid ${n.enabled?'#2E7D3222':'var(--g200)'}`}});
      const toggle = h('input',{type:'checkbox'});toggle.checked=n.enabled;toggle.style.accentColor='var(--gn)';toggle.style.width='16px';toggle.style.height='16px';
      toggle.addEventListener('change',()=>{ n.enabled=toggle.checked; logAudit('Notification Toggled',`${n.trigger}: ${n.enabled?'ON':'OFF'}`); render(); });
      row.appendChild(toggle);
      row.appendChild(h('span',{style:{padding:'2px 8px',borderRadius:'4px',background:n.type==='sms'?'#6A1B9A15':'#1565C015',color:n.type==='sms'?'var(--pu)':'var(--bl)',fontSize:'9px',fontWeight:700,textTransform:'uppercase'}},n.type));
      row.appendChild(h('div',{style:{flex:1}},
        h('div',{style:{fontSize:'12px',fontWeight:600}},n.trigger),
        h('div',{style:{fontSize:'10px',color:'var(--g500)',marginTop:'2px'}},`To: ${n.recipients} · ${n.schedule}`)
      ));
      row.appendChild(h('button',{className:'pill',style:{marginRight:'4px'},onClick:()=>{
        showEditModal(`Edit Notification`, [
          {key:'trigger',label:'Trigger Condition',value:n.trigger},
          {key:'type',label:'Type',type:'select',value:n.type,options:['email','sms']},
          {key:'recipients',label:'Recipients',value:n.recipients},
          {key:'schedule',label:'Schedule',type:'select',value:n.schedule,options:['Immediately','Daily','Weekly','Monthly','After evaluation']},
        ], vals => {
          const changes = [];
          if (vals.trigger && vals.trigger !== n.trigger) { changes.push(`trigger changed`); n.trigger = vals.trigger; }
          if (vals.type && vals.type !== n.type) { changes.push(`type: ${n.type}→${vals.type}`); n.type = vals.type; }
          if (vals.recipients && vals.recipients !== n.recipients) { changes.push(`recipients changed`); n.recipients = vals.recipients; }
          if (vals.schedule && vals.schedule !== n.schedule) { changes.push(`schedule: ${n.schedule}→${vals.schedule}`); n.schedule = vals.schedule; }
          if (changes.length) { logAudit('Notification Edited',`${n.trigger}: ${changes.join(', ')}`); render(); }
        });
      }},'✏️ Edit'));
      row.appendChild(h('button',{className:'pill',onClick:()=>{
        confirmDelete(n.trigger, () => { NOTIFICATIONS.splice(i,1); logAudit('Notification Removed',n.trigger); render(); });
      }},'🗑️'));
      card.appendChild(row);
    });
    content.appendChild(card);
  }

  // ══════════ 9. AUDIT LOG ══════════
  if (at === 'audit') {
    const card = h('div', {className: 'card'});
    card.appendChild(h('div', {className: 'sh'}, h('h3', {}, '📋 Audit Log'), h('span', {className: 'sub'}, `${AUDIT_LOG.length} entries`)));
    if (AUDIT_LOG.length === 0) {
      card.appendChild(h('div',{style:{padding:'32px',textAlign:'center',color:'var(--g400)',fontSize:'13px'}},'No audit entries yet. Changes will be recorded here as you use the admin panel.'));
    } else {
      card.appendChild(h('button',{className:'pill',style:{marginBottom:'10px'},onClick:()=>{
        confirmDelete('all audit log entries', () => { AUDIT_LOG.length = 0; logAudit('Audit Log Cleared','All entries cleared'); render(); });
      }},'🗑️ Clear Log'));
      const tw=h('div',{className:'tw',style:{maxHeight:'500px',overflowY:'auto'}});const table=h('table',{});
      table.appendChild((() => { const thead=h('thead',{});const tr=h('tr',{});['Timestamp','User','Action','Detail'].forEach(c=>tr.appendChild(h('th',{},c)));thead.appendChild(tr);return thead; })());
      const tbody=h('tbody',{});
      AUDIT_LOG.slice(0,100).forEach(entry => {
        const tr=h('tr',{});const d=new Date(entry.ts);
        tr.appendChild(h('td',{style:{fontSize:'10px',fontFamily:'var(--m)',color:'var(--g500)',whiteSpace:'nowrap'}},`${d.toLocaleDateString()} ${d.toLocaleTimeString()}`));
        tr.appendChild(h('td',{style:{fontSize:'11px',fontWeight:600}},entry.user));
        const actionColor = entry.action.includes('Removed')||entry.action.includes('Cleared')?'var(--rd)':entry.action.includes('Added')?'var(--gn)':'var(--bl)';
        const actionBg = entry.action.includes('Removed')||entry.action.includes('Cleared')?'var(--rd-l)':entry.action.includes('Added')?'var(--gn-l)':'var(--bl-l)';
        tr.appendChild(h('td',{},h('span',{className:'pill',style:{background:actionBg,color:actionColor,borderColor:'transparent'}},entry.action)));
        tr.appendChild(h('td',{style:{fontSize:'10px',color:'var(--g600)',maxWidth:'300px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}},entry.detail));
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);tw.appendChild(table);card.appendChild(tw);
    }
    content.appendChild(card);
  }

  wrap.appendChild(content);
  return wrap;
}
const STATE_NAMES={AZ:"Arizona",CA:"California",CO:"Colorado",LA:"Louisiana",NV:"Nevada",NJ:"New Jersey",TX:"Texas",UT:"Utah"};
const MONTHS=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const GRADE_CFG=[{g:"A+",mn:100,mx:999,c:"#1B5E20",bg:"#E8F5E9"},{g:"A",mn:95,mx:99.99,c:"#2E7D32",bg:"#E8F5E9"},{g:"A-",mn:90,mx:94.99,c:"#43A047",bg:"#E8F5E9"},{g:"B+",mn:85,mx:89.99,c:"#F57F17",bg:"#FFF8E1"},{g:"B",mn:80,mx:84.99,c:"#E65100",bg:"#FFF3E0"},{g:"B-",mn:75,mx:79.99,c:"#BF360C",bg:"#FBE9E7"},{g:"C+",mn:70,mx:74.99,c:"#D84315",bg:"#FBE9E7"},{g:"C",mn:65,mx:69.99,c:"#C62828",bg:"#FFEBEE"},{g:"C-",mn:60,mx:64.99,c:"#B71C1C",bg:"#FFEBEE"},{g:"D",mn:0,mx:59.99,c:"#880E4F",bg:"#FCE4EC"}];
const TIERS=[{l:"Negative",mn:-Infinity,mx:-0.001,p:0},{l:"0–4.99%",mn:0,mx:4.99,p:0.167},{l:"5–9.99%",mn:5,mx:9.99,p:0.333},{l:"10–14.99%",mn:10,mx:14.99,p:0.5},{l:"15–19.99%",mn:15,mx:19.99,p:0.667},{l:"20%+",mn:20,mx:Infinity,p:0.833}];
const EXPAND=["Current on all royalty payments","Current on all marketing fund contributions","No outstanding legal disputes","Passed most recent health inspection","Maintained required insurance coverage","Completed all required training programs","Met minimum operating hours","Proper signage & branding compliance","POS system current and operational","Food safety certification current","No outstanding warranty/repair issues","Customer complaints resolved within standards","Employee certifications met","Proper record-keeping & documentation","Territory development obligations met","Community engagement participation","Technology/system upgrade compliance","Financial reporting submitted on time","Brand standards audit passed"];
const PER_PAGE=25;

function getGrade(s){for(const g of GRADE_CFG)if(s>=g.mn&&s<=g.mx)return g;return GRADE_CFG[GRADE_CFG.length-1]}
function getTierPts(p){if(p==null||p==="")return 0;const v=parseFloat(p);if(isNaN(v))return 0;for(const t of TIERS)if(v>=t.mn&&v<=t.mx)return t.p;return 0}

function calcScores(ev){
  const expY=ev.expandChecks.filter(Boolean).length;const expR=(expY/19)*25;
  const compPtsEarned=ev.complianceItems.reduce((s,i)=>s+(i.passed?i.pts:0),0);
  const inspR=(compPtsEarned/TOTAL_COMPLIANCE_PTS)*25;
  const plR=ev.plSub.filter(Boolean).length*5;
  const cA=ev.compSales.reduce((s,v)=>s+getTierPts(v),0)/12;
  const tA=ev.tpdSales.reduce((s,v)=>s+getTierPts(v),0)/12;
  const salR=(cA+tA)*(20/(0.833*2));
  // Guest Reviews & Recoveries (base 5, max 10, min 0)
  let gR=5;
  gR -= (ev.guestOneStar||0)*1;
  gR -= (ev.guestTwoStar||0)*1;
  gR += (ev.guestFiveStar||0)*0.5;
  gR += (ev.guestRecovered||0)*1;
  gR = Math.max(0, Math.min(10, gR));
  const oRaw=expR+inspR+plR+salR+gR;
  const W=(typeof WEIGHTS!=='undefined')?WEIGHTS:{ops:50,mkt:30,att:20};
  const oScl=(oRaw/100)*W.ops;
  // MKT — TPD/OLO with OLO Rails ranking
  let tOlo=0;
  if(ev.oloRails){
    const totalStores=STORES.length||202;
    const rank=ev.oloRank||1;
    tOlo=((totalStores-rank+1)/totalStores)*15;
  }
  const miss=ev.promoP.filter(p=>!p).length;const proR=Math.max(0,35-miss*5);
  // LSM: >=2%=10, 1-2%=5, <1%=0
  const lsmPct=ev.lsmPct||0;
  const lsmR=lsmPct>=2?10:(lsmPct>=1?5:0);
  // Loyalty: >20%=20, 10-20%=10, 0-10%=5, <=0%=0
  const loyaltyPct=ev.loyaltyPct||0;
  const loyaltyR=loyaltyPct>20?20:(loyaltyPct>=10?10:(loyaltyPct>0?5:0));
  // Social: start 10, -5 per issue, min 0
  const socialR=Math.max(0,10-(ev.socialIssues||0)*5);
  // Reviews: start 0, +2 per 5-star, max 10
  const reviewsR=Math.min(10,(ev.reviewFiveStars||0)*2);
  const mRaw=tOlo+proR+lsmR+loyaltyR+socialR+reviewsR;const mScl=(mRaw/100)*W.mkt;
  // Attendance: each month checked = attended, each miss = -5, max 20
  const attended=ev.monthsAttended?ev.monthsAttended.filter(Boolean).length:ev.meetings||12;
  const sk=12-attended;
  const attRaw=Math.max(0,20-sk*5);
  const aS=(attRaw/20)*W.att;
  const tot=Math.max(0,oScl+mScl+aS);
  return{ops:{expR,inspR,compPtsEarned,plR,salR,gR,raw:oRaw,scl:oScl},mkt:{tOlo,proR,lsmR,loyaltyR,socialR,reviewsR,raw:mRaw,scl:mScl},att:{attended,skipped:sk,score:aS,attRaw},total:tot,grade:getGrade(tot)};
}

function genEval(){
  // Gaussian-ish helper: returns 0-1 skewed toward `center` with given spread
  const rnd=()=>(Math.random()+Math.random()+Math.random())/3; // bell curve, mean 0.5
  // Each store gets a base "quality" 0-1 that correlates its metrics (realistic: good stores good across board)
  const q=Math.min(1,Math.max(0,rnd()*0.55+0.42)); // mean ~0.69, most stores decent
  const passRate=0.78+q*0.20; // 78%-98% pass rate scaled by quality
  const expandChecks=EXPAND.map(()=>Math.random()<passRate);
  const complianceItems=[];
  COMPLIANCE_FORM.forEach(cat=>{cat.items.forEach(item=>{complianceItems.push({category:cat.cat,item:item.n,pts:item.pts,passed:Math.random()<passRate});});});
  // Attendance: high performers rarely miss
  const attendRate=0.80+q*0.18;
  const monthsAttended=MONTHS.map(()=>Math.random()<attendRate);
  // Sales: skew positive for good stores (centered ~q*20%)
  const salesGen=()=>(q*22-3+(Math.random()*10-5)).toFixed(1);
  return{expandChecks,complianceItems,
    plSub:[Math.random()<0.85+q*0.1,Math.random()<0.85+q*0.1,Math.random()<0.8+q*0.1,Math.random()<0.8+q*0.1],
    compSales:MONTHS.map(salesGen),tpdSales:MONTHS.map(salesGen),
    guestOneStar:Math.round((1-q)*3),guestTwoStar:Math.round((1-q)*2),guestFiveStar:Math.round(q*8)+1,guestRecovered:Math.round(q*3),
    oloRails:Math.random()<0.6+q*0.35,oloRank:Math.max(1,Math.round((1-q)*STORES.length+(Math.random()*40-20))),
    promoP:PROMOS.map(()=>Math.random()<passRate),
    lsmPct:parseFloat((q*2.5+Math.random()*0.8).toFixed(1)),
    loyaltyPct:parseFloat((q*25-2+(Math.random()*8-4)).toFixed(1)),
    socialIssues:Math.round((1-q)*2.5),
    reviewFiveStars:Math.round(q*6),
    monthsAttended};
}


const S={view:"dashboard",adminTab:"stores",currentUser:"Sam Kwon",sel:null,role:"admin",data:[],charts:{},search:"",filterStore:"all",filterState:"all",filterFbc:"all",filterRegion:"all",page:0,salesStore:"all",salesDate:""};
const SALES=Array.isArray(window.SALES_DATA)?window.SALES_DATA:[];
const SALES_STORES=[...new Set(SALES.map(r=>r[0]))].sort();
const SALES_DATES=[...new Set(SALES.map(r=>r[1]))].sort();
const PRICE_OZ=(window.PRICE_OZ_DATA&&typeof window.PRICE_OZ_DATA==='object')?window.PRICE_OZ_DATA:{};
const TPD=[...(Array.isArray(window.TPD_DATA)?window.TPD_DATA:[]),...(Array.isArray(window.OLO_DATA)?window.OLO_DATA:[])];
const TPD_PLATFORMS=['DoorDash','Uber Eats','Grubhub','ezCater','OLO'];

function initData(){S.data=STORES.map(store=>{const ev=genEval();return{store,ev,scores:calcScores(ev)};});}
function recalc(sd){sd.scores=calcScores(sd.ev);}

// ── DOM helpers ──
function h(t,a,...c){const el=document.createElement(t);if(a)Object.entries(a).forEach(([k,v])=>{if(k==='style'&&typeof v==='object')Object.assign(el.style,v);else if(k.startsWith('on'))el.addEventListener(k.slice(2).toLowerCase(),v);else if(k==='className')el.className=v;else if(k==='innerHTML')el.innerHTML=v;else el.setAttribute(k,v);});c.flat(9).forEach(x=>{if(x!=null)el.appendChild(typeof x==='string'?document.createTextNode(x):x);});return el;}
function gb(g,sz=''){return h('span',{className:`grade ${sz}`,style:{color:g.c,background:g.bg,border:`1.5px solid ${g.c}22`}},g.g)}
function ringSVG(s,m,c,sz=74){const p=Math.min((s/m)*100,100),r=sz*.38,ci=2*Math.PI*r,of=ci-(p/100)*ci;return`<svg width="${sz}" height="${sz}" viewBox="0 0 ${sz} ${sz}"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="#E4E4E7" stroke-width="${sz*.07}"/><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${c}" stroke-width="${sz*.07}" stroke-dasharray="${ci}" stroke-dashoffset="${of}" stroke-linecap="round" transform="rotate(-90 ${sz/2} ${sz/2})" style="transition:stroke-dashoffset .6s ease"/><text x="${sz/2}" y="${sz/2-2}" text-anchor="middle" style="font-size:${sz*.2}px;font-weight:700;fill:#18181B;font-family:var(--m)">${s.toFixed(1)}</text><text x="${sz/2}" y="${sz/2+sz*.13}" text-anchor="middle" style="font-size:${sz*.09}px;fill:#71717A;font-family:var(--f)">/ ${m}</text></svg>`}
function progBar(v,m,c){const p=Math.min((v/m)*100,100),w=h('div',{className:'prog'});w.appendChild(h('div',{className:'prog-f',style:{width:p+'%',background:c}}));return w;}
function destroyCharts(){Object.values(S.charts).forEach(c=>{try{c.destroy()}catch(e){}});S.charts={}}

function getFilteredData(){return S.data.filter(d=>{if(S.search&&!d.store.id.toLowerCase().includes(S.search.toLowerCase())&&!d.store.fbc.toLowerCase().includes(S.search.toLowerCase()))return false;if(S.filterStore!=='all'&&d.store.id!==S.filterStore)return false;if(S.filterState!=='all'&&d.store.st!==S.filterState)return false;if(S.filterFbc!=='all'&&d.store.fbc!==S.filterFbc)return false;if(S.filterRegion!=='all'&&d.store.r!==S.filterRegion)return false;return true;});}

function salesMoney(cents){return(cents/100).toLocaleString('en-US',{style:'currency',currency:'USD'});}
function salesVolume(v){return v==null?'N/A':v.toLocaleString('en-US',{maximumFractionDigits:0})+' oz';}
function salesDateObj(iso){const p=iso.split('-').map(Number);return new Date(p[0],p[1]-1,p[2]);}
function salesIso(d){return`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function salesDateLabel(iso){return salesDateObj(iso).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});}
function salesRangeLabel(start,end){return start===end?salesDateLabel(start):`${salesDateLabel(start)} - ${salesDateLabel(end)}`;}
function salesStoreId(storeName){return String(storeName||'').replace(/^Yogurtland\s+/i,'').trim();}
function salesMonthKey(iso){return iso.slice(0,7);}
function salesPriceOz(r){const store=salesStoreId(r[0]);const ym=salesMonthKey(r[1]);return PRICE_OZ[store]?.[ym]||null;}
function salesRowVolume(r){const p=salesPriceOz(r);return p?(r[3]/100)/p:null;}
function salesRowsInRange(start,end){return SALES.filter(r=>(S.salesStore==='all'||r[0]===S.salesStore)&&r[1]>=start&&r[1]<=end);}
function salesSummary(start,end){return salesRowsInRange(start,end).reduce((a,r)=>{const v=salesRowVolume(r);a.txn+=r[2];a.cents+=r[3];a.rows++;if(v!=null){a.volume+=v;a.volumeRows++;}else a.missingPrice++;return a;},{txn:0,cents:0,rows:0,volume:0,volumeRows:0,missingPrice:0});}
function salesWeekBounds(iso){const d=salesDateObj(iso);const offset=(d.getDay()+6)%7;d.setDate(d.getDate()-offset);const e=new Date(d);e.setDate(d.getDate()+6);return{start:salesIso(d),end:salesIso(e)};}
function salesMonthBounds(iso){const d=salesDateObj(iso);const s=new Date(d.getFullYear(),d.getMonth(),1);return{start:salesIso(s),end:iso};}
function salesYearBounds(iso){const d=salesDateObj(iso);return{start:`${d.getFullYear()}-01-01`,end:iso};}
function salesPriorYear(iso){const d=salesDateObj(iso);d.setDate(d.getDate()-364);return salesIso(d);}
function salesPctBadge(curr,prior,label,baseCol){if(!prior||prior===0)return null;const pct=((curr-prior)/prior)*100;const col=pct>=0?baseCol:'var(--rd)';const arrow=pct>=0?'▲':'▼';return h('div',{className:'sn',style:{fontWeight:700,color:col,marginTop:'4px'}},`${arrow} ${pct>=0?'+':''}${pct.toFixed(1)}% vs LY ${label}`);}
function tpdNormStore(s){return String(s||'').replace(/\s+-\s+/,' ').replace(/\s+/,' ').trim();}
function tpdRowsInRange(platform,start,end){return TPD.filter(r=>r[0]===platform&&(S.salesStore==='all'||tpdNormStore(r[1])===S.salesStore)&&r[2]>=start&&r[2]<=end);}
function tpdSummary(platform,start,end){return tpdRowsInRange(platform,start,end).reduce((a,r)=>{a.orders+=r[3];a.cents+=r[4];a.rows++;return a;},{orders:0,cents:0,rows:0});}
function renderTpdCell(summary){const box=h('div',{});box.appendChild(h('div',{style:{fontFamily:'var(--m)',fontWeight:800,color:'var(--gn)'}},salesMoney(summary.cents)));box.appendChild(h('div',{style:{fontSize:'10px',color:'var(--g500)',marginTop:'2px'}},`${summary.orders.toLocaleString()} orders`));return box;}

function renderSales(){
  const wrap=h('div',{});
  if(!SALES.length){wrap.appendChild(h('div',{className:'card'},'No sales data found. Make sure sales_summary_data.js is in the same folder as this portal.'));return wrap;}
  if(!S.salesDate)S.salesDate=SALES_DATES[SALES_DATES.length-1];
  const minDate=SALES_DATES[0],maxDate=SALES_DATES[SALES_DATES.length-1];
  const filters=h('div',{className:'search-bar'});
  const storeSel=h('select',{});storeSel.appendChild(h('option',{value:'all'},'All Stores'));SALES_STORES.forEach(s=>storeSel.appendChild(h('option',{value:s},s)));storeSel.value=S.salesStore;storeSel.addEventListener('change',()=>{S.salesStore=storeSel.value;render();});filters.appendChild(storeSel);
  const dateInp=h('input',{type:'date',value:S.salesDate,min:minDate,max:maxDate,style:{maxWidth:'180px'}});dateInp.addEventListener('change',()=>{S.salesDate=dateInp.value||maxDate;render();});filters.appendChild(dateInp);
  filters.appendChild(h('button',{className:'pill',onClick:()=>{S.salesStore='all';S.salesDate=maxDate;render();}},'Latest'));
  wrap.appendChild(filters);

  const wk=salesWeekBounds(S.salesDate),mo=salesMonthBounds(S.salesDate),yr=salesYearBounds(S.salesDate);
  const periods=[
    {l:'Daily Sales',b:{start:S.salesDate,end:S.salesDate}},
    {l:'Weekly Sales',b:wk},
    {l:'Monthly Sales',b:mo},
    {l:'Yearly Sales',b:yr}
  ];
  const stats=h('div',{className:'g4 fu'});periods.forEach(p=>{const s=salesSummary(p.b.start,p.b.end);const pyStart=salesPriorYear(p.b.start),pyEnd=salesPriorYear(p.b.end);const py=salesSummary(pyStart,pyEnd);const c=h('div',{className:'card'});c.appendChild(h('div',{className:'sl'},p.l));c.appendChild(h('div',{className:'sv',style:{color:'var(--gn)',fontSize:'24px'}},salesMoney(s.cents)));c.appendChild(h('div',{className:'sn'},`${s.txn.toLocaleString()} transactions`));c.appendChild(h('div',{className:'sn',style:{fontWeight:700,color:'var(--bl)'}},`Volume: ${salesVolume(s.volumeRows?s.volume:null)}`));c.appendChild(h('div',{className:'sn'},salesRangeLabel(p.b.start,p.b.end)));const salesBadge=salesPctBadge(s.cents,py.cents,'Sales','var(--gn)');if(salesBadge)c.appendChild(salesBadge);const volBadge=salesPctBadge(s.volumeRows?s.volume:0,py.volumeRows?py.volume:0,'Volume','var(--bl)');if(volBadge)c.appendChild(volBadge);stats.appendChild(c);});wrap.appendChild(stats);


  const tpdCard=h('div',{className:'card fu',style:{marginTop:'16px'}});
  tpdCard.appendChild(h('div',{className:'sh'},h('h3',{},'TPD Net Sales'),h('span',{className:'sub'},'DoorDash · Uber Eats · Grubhub · ezCater · OLO')));
  const tpdWrap=h('div',{className:'tw'});const tpdTable=h('table',{});const tpdHead=h('thead',{});const tpdHr=h('tr',{});
  ['Platform','Daily','Weekly','Monthly','Yearly'].forEach(c=>tpdHr.appendChild(h('th',{},c)));tpdHead.appendChild(tpdHr);tpdTable.appendChild(tpdHead);
  const tpdBody=h('tbody',{});
  TPD_PLATFORMS.forEach(platform=>{const tr=h('tr',{});tr.appendChild(h('td',{style:{fontWeight:800}},platform));periods.forEach(p=>{const td=h('td',{});td.appendChild(renderTpdCell(tpdSummary(platform,p.b.start,p.b.end)));tr.appendChild(td);});tpdBody.appendChild(tr);});
  tpdTable.appendChild(tpdBody);tpdWrap.appendChild(tpdTable);tpdCard.appendChild(tpdWrap);wrap.appendChild(tpdCard);

  // ── Sales Mix Pie Charts (Monthly + Yearly side by side) ──
  const PIE_COLORS=['#1565C0','#43A047','#E91E63','#EF6C00','#6A1B9A','#00897B'];
  function buildPieSlices(start,end){const s=salesSummary(start,end);const tpd=TPD_PLATFORMS.map((p,i)=>({name:p,cents:tpdSummary(p,start,end).cents,col:PIE_COLORS[(i+1)%PIE_COLORS.length]}));const tot=tpd.reduce((a,p)=>a+p.cents,0);return[{name:'In-Store',cents:Math.max(0,s.cents-tot),col:PIE_COLORS[0]},...tpd].filter(d=>d.cents>0);}
  function buildPiePanel(title,dateLabel,canvasId,slices){const total=slices.reduce((s,d)=>s+d.cents,0);if(!total)return null;const panel=h('div',{style:{flex:'1',minWidth:'0'}});panel.appendChild(h('div',{style:{fontWeight:700,fontSize:'13px',marginBottom:'12px'}},title+' — '+dateLabel));const inner=h('div',{style:{display:'flex',alignItems:'center',gap:'24px'}});const box=h('div',{style:{position:'relative',width:'180px',height:'180px',flexShrink:'0'}});box.appendChild(h('canvas',{id:canvasId}));inner.appendChild(box);const leg=h('div',{style:{display:'flex',flexDirection:'column',gap:'8px'}});slices.forEach(d=>{const pct=(d.cents/total*100).toFixed(1);const row=h('div',{style:{display:'flex',alignItems:'center',gap:'8px'}});row.appendChild(h('div',{style:{width:'12px',height:'12px',borderRadius:'3px',background:d.col,flexShrink:'0'}}));const info=h('div',{});info.appendChild(h('div',{style:{fontWeight:700,fontSize:'12px'}},d.name));info.appendChild(h('div',{style:{fontSize:'11px',color:'var(--g500)'}},salesMoney(d.cents)+' · '+pct+'%'));row.appendChild(info);leg.appendChild(row);});inner.appendChild(leg);panel.appendChild(inner);return{el:panel,slices,total};}
  const moSlices=buildPieSlices(mo.start,mo.end);
  const yrSlices=buildPieSlices(yr.start,yr.end);
  if(moSlices.length>0||yrSlices.length>0){
    const mixCard=h('div',{className:'card fu',style:{marginTop:'16px'}});
    mixCard.appendChild(h('div',{className:'sh'},h('h3',{},'Sales Mix')));
    const row=h('div',{style:{display:'flex',gap:'32px',padding:'8px 16px 16px',flexWrap:'wrap'}});
    const moPanel=buildPiePanel('Monthly',salesRangeLabel(mo.start,mo.end),'cSalesPieMo',moSlices);
    const yrPanel=buildPiePanel('Yearly',salesRangeLabel(yr.start,yr.end),'cSalesPieYr',yrSlices);
    if(moPanel){row.appendChild(moPanel.el);const div=h('div',{style:{width:'1px',background:'var(--g200)',alignSelf:'stretch'}});row.appendChild(div);}
    if(yrPanel)row.appendChild(yrPanel.el);
    mixCard.appendChild(row);wrap.appendChild(mixCard);
    requestAnimationFrame(()=>{
      ['salesPieMo','salesPieYr'].forEach(k=>{if(S.charts[k]){try{S.charts[k].destroy();}catch(e){}}});
      if(moPanel){const ctx=document.getElementById('cSalesPieMo');if(ctx)S.charts.salesPieMo=new Chart(ctx,{type:'doughnut',data:{labels:moPanel.slices.map(d=>d.name),datasets:[{data:moPanel.slices.map(d=>d.cents),backgroundColor:moPanel.slices.map(d=>d.col),borderWidth:2,borderColor:'#fff'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:(c)=>' '+salesMoney(c.raw)+' ('+(c.raw/moPanel.total*100).toFixed(1)+'%)'}}}}});}
      if(yrPanel){const ctx=document.getElementById('cSalesPieYr');if(ctx)S.charts.salesPieYr=new Chart(ctx,{type:'doughnut',data:{labels:yrPanel.slices.map(d=>d.name),datasets:[{data:yrPanel.slices.map(d=>d.cents),backgroundColor:yrPanel.slices.map(d=>d.col),borderWidth:2,borderColor:'#fff'}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false},tooltip:{callbacks:{label:(c)=>' '+salesMoney(c.raw)+' ('+(c.raw/yrPanel.total*100).toFixed(1)+'%)'}}}}});}
    });
  }
  return wrap;
}

// ── DASHBOARD ──
function renderDashboard(){const data=getFilteredData();const all=S.data;const sorted=[...data].sort((a,b)=>b.scores.total-a.scores.total);const avg=data.length?data.reduce((s,d)=>s+d.scores.total,0)/data.length:0;const avgG=getGrade(avg);const belowBP=data.filter(d=>d.scores.total<85).length;
const fbcs=[...new Set(all.map(d=>d.store.fbc))].sort();const regions=[...new Set(all.map(d=>d.store.r))].sort();const states=[...new Set(all.map(d=>d.store.st))].sort();
const wrap=h('div',{});
const fr=h('div',{className:'search-bar'});
const stSel=h('select',{});stSel.appendChild(h('option',{value:'all'},'All Stores'));all.map(d=>d.store.id).sort().forEach(id=>stSel.appendChild(h('option',{value:id},id)));stSel.value=S.filterStore;stSel.addEventListener('change',()=>{S.filterStore=stSel.value;S.page=0;render();});fr.appendChild(stSel);
const fs=h('select',{});fs.appendChild(h('option',{value:'all'},'All FBCs'));fbcs.forEach(f=>fs.appendChild(h('option',{value:f},f)));fs.value=S.filterFbc;fs.addEventListener('change',()=>{S.filterFbc=fs.value;S.page=0;render();});fr.appendChild(fs);
const rs=h('select',{});rs.appendChild(h('option',{value:'all'},'All Regions'));regions.forEach(r=>rs.appendChild(h('option',{value:r},r)));rs.value=S.filterRegion;rs.addEventListener('change',()=>{S.filterRegion=rs.value;S.page=0;render();});fr.appendChild(rs);
const ss=h('select',{});ss.appendChild(h('option',{value:'all'},'All States'));states.forEach(s=>ss.appendChild(h('option',{value:s},`${s} (${STATE_NAMES[s]||s})`)));ss.value=S.filterState;ss.addEventListener('change',()=>{S.filterState=ss.value;S.page=0;render();});fr.appendChild(ss);
wrap.appendChild(fr);
const stats=h('div',{className:'g4 fu',style:{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}});
[{l:'Portfolio Average',v:`${avg.toFixed(1)}`,c:avgG.c,extra:gb(avgG)},{l:'Filtered / Total',v:`${data.length} / ${all.length}`,c:'#18181B'},{l:'Top Store',v:sorted.length?sorted[0].store.id:'—',c:'var(--gn)',s:sorted.length?sorted[0].scores.total.toFixed(1):''},{l:'Below B+',v:String(belowBP),c:'var(--rd)',s:'need improvement'}].forEach(item=>{
  const c=h('div',{className:'card',style:{padding:'22px 24px'}});c.appendChild(h('div',{className:'sl',style:{fontSize:'10px'}},item.l));const r=h('div',{style:{display:'flex',alignItems:'center',gap:'10px'}});r.appendChild(h('span',{className:'sv',style:{color:item.c,fontSize:item.v.length>5?'28px':'36px'}},item.v));if(item.extra)r.appendChild(item.extra);c.appendChild(r);if(item.s)c.appendChild(h('div',{className:'sn',style:{fontSize:'12px'}},item.s));stats.appendChild(c);
});wrap.appendChild(stats);
const charts=h('div',{className:'g2 fu'});const c1=h('div',{className:'card'});c1.appendChild(h('div',{className:'sh'},h('h3',{},'📊 Grade Distribution')));c1.appendChild(h('div',{className:'chart-box'},h('canvas',{id:'cg'})));charts.appendChild(c1);
const c2=h('div',{className:'card'});c2.appendChild(h('div',{className:'sh'},h('h3',{},'👤 FBC Portfolio Scores')));c2.appendChild(h('div',{className:'chart-box'},h('canvas',{id:'cf'})));charts.appendChild(c2);wrap.appendChild(charts);

// ── WHY THIS GRADE WIDGET (shows when a single store is filtered) ──
if(data.length===1){
  const sd=data[0];
  const sc=sd.scores;
  const W=(typeof WEIGHTS!=='undefined')?WEIGHTS:{ops:50,mkt:30,att:20};
  const opsPct=(sc.ops.scl/W.ops*100);
  const mktPct=(sc.mkt.scl/W.mkt*100);
  const attPct=(sc.att.score/W.att*100);
  const gapToNext=85-sc.total;

  const wgCard=h('div',{className:'card fu',style:{marginTop:'16px',border:`2px solid ${sc.grade.bg||'#eee'}`}});
  // header
  const wgHdr=h('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'14px',flexWrap:'wrap',gap:'8px'}});
  const wgTitle=h('div',{});
  wgTitle.appendChild(h('div',{style:{fontSize:'14px',fontWeight:800,display:'flex',alignItems:'center',gap:'8px'}},`❓ Why is ${sd.store.id} a Grade ${sc.grade.g}?`));
  wgTitle.appendChild(h('div',{style:{fontSize:'11px',color:'var(--g500)',marginTop:'2px'}},`${sd.store.fbc} · ${STATE_NAMES[sd.store.st]||sd.store.st} · ${sd.store.r}`));
  wgHdr.appendChild(wgTitle);
  const wgBadge=h('div',{style:{display:'flex',alignItems:'center',gap:'10px'}});
  wgBadge.appendChild(h('span',{style:{fontFamily:'var(--m)',fontSize:'28px',fontWeight:900,color:sc.grade.c}},sc.total.toFixed(1)));
  wgBadge.appendChild(h('span',{style:{fontFamily:'var(--m)',fontWeight:700,padding:'4px 12px',borderRadius:'6px',fontSize:'16px',background:sc.grade.bg||'#eee',color:sc.grade.c}},sc.grade.g));
  wgHdr.appendChild(wgBadge);
  wgCard.appendChild(wgHdr);

  // score bar summary
  const wgBars=h('div',{style:{display:'flex',gap:'10px',marginBottom:'16px',flexWrap:'wrap'}});
  [{l:'OPS',v:sc.ops.scl,m:W.ops,c:'#1565C0',pct:opsPct},{l:'MKT',v:sc.mkt.scl,m:W.mkt,c:'#E91E63',pct:mktPct},{l:'ATT',v:sc.att.score,m:W.att,c:'#00897B',pct:attPct}].forEach(b=>{
    const bw=h('div',{style:{flex:1,minWidth:'100px',padding:'10px',borderRadius:'8px',background:'var(--g50)',border:'1px solid var(--g200)'}});
    bw.appendChild(h('div',{style:{fontSize:'10px',fontWeight:700,color:'var(--g500)',marginBottom:'4px'}},b.l));
    bw.appendChild(h('div',{style:{fontFamily:'var(--m)',fontSize:'18px',fontWeight:800,color:b.c}},`${b.v.toFixed(1)}`));
    bw.appendChild(h('div',{style:{fontSize:'9px',color:'var(--g500)'}},`of ${b.m} pts · ${b.pct.toFixed(0)}%`));
    const bg=h('div',{style:{height:'5px',borderRadius:'3px',background:'var(--g200)',overflow:'hidden',marginTop:'6px'}});
    const fill=h('div',{style:{height:'100%',borderRadius:'3px',background:b.c,width:`${Math.min(100,b.pct).toFixed(1)}%`}});
    bg.appendChild(fill);bw.appendChild(bg);wgBars.appendChild(bw);
  });
  wgCard.appendChild(wgBars);

  // gap alert
  if(gapToNext>0&&gapToNext<=5){
    const alert=h('div',{style:{padding:'10px 14px',borderRadius:'8px',background:'#FFF8E1',border:'1px solid #F57F1733',marginBottom:'14px',fontSize:'12px',fontWeight:600,color:'#E65100'}});
    alert.textContent=`⚡ Only ${gapToNext.toFixed(1)} points away from B+ — small improvements in MKT or OPS can push this store over the threshold.`;
    wgCard.appendChild(alert);
  } else if(gapToNext>5){
    const alert=h('div',{style:{padding:'10px 14px',borderRadius:'8px',background:'#FFEBEE',border:'1px solid #C6282833',marginBottom:'14px',fontSize:'12px',fontWeight:600,color:'#C62828'}});
    alert.textContent=`⚠️ ${gapToNext.toFixed(1)} points needed to reach B+. Focus on MKT improvements for the fastest gains.`;
    wgCard.appendChild(alert);
  }

  // build issue reasons
  const issues=[];
  const wins=[];

  // ATT
  if(attPct===100) wins.push({icon:'📅',txt:'Perfect Attendance (20/20) — franchisee attended every monthly meeting. Full marks, no action needed.'});
  else if(sc.att.skipped>0) issues.push({icon:'📅',txt:`Missed ${sc.att.skipped} monthly meeting${sc.att.skipped>1?'s':''} (ATT: ${sc.att.score}/${W.att}) — each absence costs 5 raw ATT points. Consistent attendance is the easiest score to recover.`,fix:'Ensure franchisee attends all remaining monthly meetings this period.'});

  // OPS issues
  if(opsPct<90){
    if(sc.ops.expR<20) issues.push({icon:'✅',txt:`Expand Criteria not fully met (${sc.ops.expR.toFixed(1)}/25) — ${19-Math.round(sc.ops.expR/25*19)} of 19 criteria still open. Common gaps: outstanding royalty payments, missing certifications, unresolved legal/warranty items.`,fix:'Review expand checklist in the OPS tab and resolve outstanding items before next period.'});
    if(sc.ops.inspR<20) issues.push({icon:'📋',txt:`Compliance 8.0 score below 80% (${sc.ops.inspR.toFixed(1)}/25) — inspection failures likely in BOH machines, product quality, or guest service areas.`,fix:'Conduct a self-audit using the Compliance 8.0 tab. Focus on BOH machine cleaning schedule, product draw quality, and uniform compliance.'});
    if(sc.ops.plR<15) issues.push({icon:'📄',txt:`Missing P&L submissions (${sc.ops.plR}/20) — only ${Math.round(sc.ops.plR/5)} of 4 quarterly reports filed. Each missing quarter = −5 pts.`,fix:'Submit outstanding quarterly P&L reports immediately. Set calendar reminders for Q submissions.'});
    if(sc.ops.salR<12) issues.push({icon:'💰',txt:`Sales growth below target (${sc.ops.salR.toFixed(1)}/20) — comp sales and/or TPD sales averaging below 10% monthly growth. Tiers below 10% score less than half maximum.`,fix:'Review pricing strategy, upsell training, and TPD platform visibility (menu photos, ratings).'});
    if(sc.ops.gR<5) issues.push({icon:'⭐',txt:`Guest review score below baseline (${sc.ops.gR.toFixed(1)}/10) — 1-star or 2-star reviews dragging the base of 5 pts down.`,fix:'Respond to all negative reviews, train team on guest recovery, and incentivize 5-star reviews through loyalty interactions.'});
  } else {
    wins.push({icon:'🔧',txt:`Strong OPS (${sc.ops.scl.toFixed(1)}/${W.ops} · ${opsPct.toFixed(0)}%) — operations are well-managed. Minor gains still possible in compliance or sales tiers.`});
  }

  // MKT issues
  if(mktPct<85){
    if(sc.mkt.tOlo<10) issues.push({icon:'🔗',txt:`OLO Rails weak or not integrated (${sc.mkt.tOlo.toFixed(1)}/15) — if OLO Rails is off, this is an automatic 0. Even with it on, a low fulfillment ranking costs significant points.`,fix:'Verify OLO Rails is active in MKT tab. Improve order fulfillment speed and accuracy to climb the ranking.'});
    if(sc.mkt.proR<25) issues.push({icon:'🎉',txt:`Missed national promos (${sc.mkt.proR}/35) — missing ${Math.round((35-sc.mkt.proR)/5)} promo${Math.round((35-sc.mkt.proR)/5)>1?'s':''} at −5 pts each. Skipped campaigns include seasonal and collab events.`,fix:'Audit the 2026 promo calendar in the MKT tab. Participate in all upcoming campaigns — Toy Story 5, 4th of July, Back to School.'});
    if(sc.mkt.loyaltyR<15) issues.push({icon:'💳',txt:`Low loyalty / Real Rewards enrollment (${sc.mkt.loyaltyR}/20) — enrollment % not reaching the 20%+ tier. Team not consistently promoting RR at POS.`,fix:'Train all team members to ask every guest about Real Rewards. Post RR signage at topping bar and exit. Offer double-points reminders.'});
    if(sc.mkt.lsmR<8) issues.push({icon:'📍',txt:`LSM spend below 2% (${sc.mkt.lsmR}/10) — local store marketing budget is underutilized.`,fix:'Increase LSM investment: community partnerships, school events, neighborhood flyers, local social ads.'});
    if(sc.mkt.socialR<8) issues.push({icon:'📱',txt:`Social media issues detected (${sc.mkt.socialR}/10) — policy violations or low brand compliance costing points.`,fix:'Review brand social guidelines. Ensure all posts are approved content, bio links are current, and comments are responded to within 24h.'});
    if(sc.mkt.reviewsR<6) issues.push({icon:'🌟',txt:`Low 5-star review count (${sc.mkt.reviewsR}/10) — not enough positive online reviews being generated.`,fix:'Ask satisfied guests to leave a Google/Yelp review. Display a QR code linking to your review page at POS and on receipts.'});
  } else {
    wins.push({icon:'📣',txt:`Good MKT (${sc.mkt.scl.toFixed(1)}/${W.mkt} · ${mktPct.toFixed(0)}%) — solid marketing execution. Focus on the lowest-scoring MKT sub-component to push over B+.`});
  }

  // What's working
  if(wins.length>0){
    wgCard.appendChild(h('div',{style:{fontSize:'11px',fontWeight:700,color:'var(--gn)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:'6px'}},'✅ What\'s Working'));
    const winList=h('div',{style:{display:'flex',flexDirection:'column',gap:'5px',marginBottom:'14px'}});
    wins.forEach(w=>{
      const row=h('div',{style:{display:'flex',gap:'8px',alignItems:'flex-start',padding:'7px 10px',borderRadius:'6px',background:'#E8F5E9',fontSize:'11px',lineHeight:'1.5'}});
      row.appendChild(h('span',{style:{fontSize:'13px',flexShrink:0}},w.icon));
      row.appendChild(h('span',{style:{color:'#1B5E20'}},w.txt));
      winList.appendChild(row);
    });
    wgCard.appendChild(winList);
  }

  // Issues & fixes
  if(issues.length>0){
    wgCard.appendChild(h('div',{style:{fontSize:'11px',fontWeight:700,color:'var(--rd)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:'6px'}},'⚠️ Why It\'s Not B+ Yet — Issues & Fixes'));
    const issueList=h('div',{style:{display:'flex',flexDirection:'column',gap:'8px'}});
    issues.forEach(iss=>{
      const row=h('div',{style:{borderRadius:'8px',overflow:'hidden',border:'1px solid var(--g200)'}});
      const top=h('div',{style:{display:'flex',gap:'8px',alignItems:'flex-start',padding:'8px 10px',background:'#FFEBEE',fontSize:'11px',lineHeight:'1.5'}});
      top.appendChild(h('span',{style:{fontSize:'13px',flexShrink:0}},iss.icon));
      top.appendChild(h('span',{style:{color:'#B71C1C'}},iss.txt));
      row.appendChild(top);
      const fix=h('div',{style:{padding:'7px 10px 7px 34px',background:'#F3F4F6',fontSize:'11px',color:'var(--g700)',lineHeight:'1.5'}});
      fix.appendChild(h('span',{style:{fontWeight:700,color:'#1565C0'}},'Fix: '));
      fix.appendChild(document.createTextNode(iss.fix));
      row.appendChild(fix);
      issueList.appendChild(row);
    });
    wgCard.appendChild(issueList);
  }

  wrap.appendChild(wgCard);
}

// ── TOP 5 PERFORMERS WIDGET ──
const top5Data = [...all].sort((a,b)=>b.scores.total-a.scores.total).slice(0,5);
const t5card = h('div',{className:'card fu',style:{marginTop:'20px'}});
const t5hdr = h('div',{className:'sh'});
t5hdr.appendChild(h('h3',{style:{display:'flex',alignItems:'center',gap:'8px'}},'🏆 Top 5 Performing Stores'));
t5hdr.appendChild(h('span',{className:'sub'},'Ranked by total score · click a store to view detail'));
t5card.appendChild(t5hdr);

top5Data.forEach((d,idx)=>{
  const sc = d.scores;
  const W = (typeof WEIGHTS!=='undefined')?WEIGHTS:{ops:50,mkt:30,att:20};
  const opsPct  = (sc.ops.scl / W.ops * 100).toFixed(0);
  const mktPct  = (sc.mkt.scl / W.mkt * 100).toFixed(0);
  const attPct  = (sc.att.score / W.att * 100).toFixed(0);
  const medals  = ['🥇','🥈','🥉','4️⃣','5️⃣'];

  // ── build reasons dynamically ──
  const reasons = [];

  // ATT
  if(sc.att.score >= W.att)        reasons.push({icon:'📅',txt:'Perfect attendance — franchisee attended all 12 monthly meetings, showing full engagement and accountability.',color:'var(--gn)'});
  else if(sc.att.skipped<=1)       reasons.push({icon:'📅',txt:`Near-perfect attendance — only ${sc.att.skipped} meeting missed this period.`,color:'var(--or)'});

  // OPS
  if(opsPct >= 92)                 reasons.push({icon:'🔧',txt:`Exceptional OPS (${sc.ops.scl.toFixed(1)}/${W.ops}) — store passes nearly all expand criteria, compliance checklist, and maintains strong sales growth and guest satisfaction.`,color:'#1565C0'});
  else if(opsPct >= 85)            reasons.push({icon:'🔧',txt:`Strong OPS (${sc.ops.scl.toFixed(1)}/${W.ops}) — high compliance and expand criteria scores; minor gaps in P&L submission or sales growth tiers.`,color:'#1565C0'});

  if(sc.ops.expR >= 23)            reasons.push({icon:'✅',txt:`Expand-ready — ${Math.round(sc.ops.expR/25*19)}/19 expansion criteria met: royalties current, insurance active, certifications up to date, brand standards passed.`,color:'#1565C0'});
  if(sc.ops.inspR >= 22)           reasons.push({icon:'📋',txt:`Compliance 8.0 near-perfect — store scored ${sc.ops.inspR.toFixed(1)}/25 on the operations inspection. Clean BOH machines, product quality, guest service all strong.`,color:'#1565C0'});
  if(sc.ops.plR >= 15)             reasons.push({icon:'📄',txt:`P&L submissions on track — ${Math.round(sc.ops.plR/5)}/4 quarterly reports filed on time.`,color:'#1565C0'});
  if(sc.ops.salR >= 14)            reasons.push({icon:'💰',txt:`Strong sales growth — both comp sales and TPD sales averaging strong % growth month-over-month (scoring in the 15–20%+ tiers).`,color:'#1565C0'});
  if(sc.ops.gR >= 7)               reasons.push({icon:'⭐',txt:`Positive guest reviews — high 5-star review count and recovered complaints boost guest score above baseline.`,color:'#1565C0'});

  // MKT
  if(mktPct >= 95)                 reasons.push({icon:'📣',txt:`Near-perfect MKT (${sc.mkt.scl.toFixed(1)}/${W.mkt}) — exceptional marketing execution across all channels: promos, OLO, loyalty, LSM, and social media.`,color:'#E91E63'});
  else if(mktPct >= 85)            reasons.push({icon:'📣',txt:`Strong MKT (${sc.mkt.scl.toFixed(1)}/${W.mkt}) — very good promo participation and digital presence with minor gaps.`,color:'#E91E63'});

  if(sc.mkt.tOlo >= 12)            reasons.push({icon:'🔗',txt:`OLO Rails fully integrated & top-ranked — store is connected, orders fulfill efficiently, and ranks in the top tier among all locations.`,color:'#E91E63'});
  if(sc.mkt.proR >= 30)            reasons.push({icon:'🎉',txt:`Excellent promo participation — missed ${Math.max(0,Math.round((35-sc.mkt.proR)/5))} or fewer of 22 national promos. Consistent execution of seasonal and collab campaigns.`,color:'#E91E63'});
  if(sc.mkt.loyaltyR >= 15)        reasons.push({icon:'💳',txt:`High loyalty / Real Rewards enrollment — team actively promotes RR at POS, resulting in strong guest retention.`,color:'#E91E63'});
  if(sc.mkt.lsmR >= 8)             reasons.push({icon:'📍',txt:`LSM spend at or above 2% — local store marketing budget is being used effectively for community outreach.`,color:'#E91E63'});
  if(sc.mkt.socialR >= 8)          reasons.push({icon:'📱',txt:`Clean social media presence — no policy violations, brand-compliant content, active engagement.`,color:'#E91E63'});

  // build card
  const storeCard = h('div',{
    style:{border:'1px solid var(--g200)',borderRadius:'10px',padding:'14px 16px',marginBottom:'12px',cursor:'pointer',transition:'box-shadow .15s'},
    onClick:()=>{S.sel=d.store.id;S.view='detail';render();}
  });
  storeCard.addEventListener('mouseenter',()=>storeCard.style.boxShadow='0 2px 12px rgba(0,0,0,.1)');
  storeCard.addEventListener('mouseleave',()=>storeCard.style.boxShadow='none');

  // header row
  const sTop = h('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'10px',flexWrap:'wrap',gap:'8px'}});
  const sLeft = h('div',{style:{display:'flex',alignItems:'center',gap:'10px'}});
  sLeft.appendChild(h('span',{style:{fontSize:'22px'}},medals[idx]));
  const sInfo = h('div',{});
  sInfo.appendChild(h('div',{style:{fontSize:'14px',fontWeight:800}},`${d.store.id}`));
  sInfo.appendChild(h('div',{style:{fontSize:'10px',color:'var(--g500)',marginTop:'1px'}},`${d.store.fbc} · ${STATE_NAMES[d.store.st]||d.store.st} · ${d.store.r}`));
  sLeft.appendChild(sInfo);
  sTop.appendChild(sLeft);

  const sRight = h('div',{style:{display:'flex',alignItems:'center',gap:'10px'}});
  sRight.appendChild(h('span',{style:{fontFamily:'var(--m)',fontSize:'22px',fontWeight:900,color:sc.grade.c}},sc.total.toFixed(1)));
  const gb2 = h('span',{style:{fontFamily:'var(--m)',fontWeight:700,padding:'3px 10px',borderRadius:'5px',fontSize:'12px',background:sc.grade.bg||'#eee',color:sc.grade.c}},sc.grade.g);
  sRight.appendChild(gb2);
  sTop.appendChild(sRight);
  storeCard.appendChild(sTop);

  // score bars
  const bars = h('div',{style:{display:'flex',gap:'8px',marginBottom:'12px',flexWrap:'wrap'}});
  [{l:'OPS',v:sc.ops.scl,m:W.ops,c:'#1565C0'},{l:'MKT',v:sc.mkt.scl,m:W.mkt,c:'#E91E63'},{l:'ATT',v:sc.att.score,m:W.att,c:'#00897B'}].forEach(b=>{
    const bw = h('div',{style:{flex:1,minWidth:'80px'}});
    bw.appendChild(h('div',{style:{display:'flex',justifyContent:'space-between',fontSize:'9px',fontWeight:700,color:'var(--g600)',marginBottom:'3px'}},
      h('span',{},b.l), h('span',{style:{fontFamily:'var(--m)',color:b.c}},`${b.v.toFixed(1)}/${b.m}`)
    ));
    const bg = h('div',{style:{height:'6px',borderRadius:'3px',background:'var(--g200)',overflow:'hidden'}});
    const fill = h('div',{style:{height:'100%',borderRadius:'3px',background:b.c,width:`${Math.min(100,b.v/b.m*100).toFixed(1)}%`}});
    bg.appendChild(fill); bw.appendChild(bg); bars.appendChild(bw);
  });
  storeCard.appendChild(bars);

  // reasons
  const rLabel = h('div',{style:{fontSize:'10px',fontWeight:700,color:'var(--g500)',textTransform:'uppercase',letterSpacing:'0.8px',marginBottom:'6px'}},'Why this store is a top performer');
  storeCard.appendChild(rLabel);
  const rList = h('div',{style:{display:'flex',flexDirection:'column',gap:'5px'}});
  reasons.forEach(r=>{
    const row = h('div',{style:{display:'flex',gap:'8px',alignItems:'flex-start',padding:'6px 8px',borderRadius:'6px',background:'var(--g50)',fontSize:'11px',lineHeight:'1.5'}});
    row.appendChild(h('span',{style:{fontSize:'13px',flexShrink:0}},r.icon));
    row.appendChild(h('span',{style:{color:'var(--g800)'}},r.txt));
    rList.appendChild(row);
  });
  storeCard.appendChild(rList);
  t5card.appendChild(storeCard);
});

wrap.appendChild(t5card);
return wrap;}

function initDashboardCharts(){const data=getFilteredData();const gradeData=GRADE_CFG.map(g=>({g:g.g,count:data.filter(s=>s.scores.grade.g===g.g).length,c:g.c})).filter(g=>g.count>0);
const ctx1=document.getElementById('cg');if(ctx1)S.charts.cg=new Chart(ctx1,{type:'bar',data:{labels:gradeData.map(g=>g.g),datasets:[{data:gradeData.map(g=>g.count),backgroundColor:gradeData.map(g=>g.c),borderRadius:4,barPercentage:.7}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{stepSize:1}},x:{grid:{display:false}}}}});
const fbcs2=[...new Set(data.map(d=>d.store.fbc))].sort();const fbcAvgs=fbcs2.map(f=>{const stores=data.filter(d=>d.store.fbc===f);return{fbc:f,avg:stores.reduce((s,d)=>s+d.scores.total,0)/stores.length,count:stores.length};});
const ctx2=document.getElementById('cf');if(ctx2)S.charts.cf=new Chart(ctx2,{type:'bar',data:{labels:fbcAvgs.map(f=>`${f.fbc.split(' ')[0]} (${f.count})`),datasets:[{label:'Avg',data:fbcAvgs.map(f=>f.avg),backgroundColor:['#1565C0','#E91E63','#00897B','#EF6C00','#6A1B9A'],borderRadius:4,barPercentage:.6}]},options:{responsive:true,maintainAspectRatio:false,indexAxis:'y',plugins:{legend:{display:false}},scales:{x:{beginAtZero:true,max:100}}}});}

// ── STORE DETAIL ──
function renderDetail(){
  const sd=S.data.find(d=>d.store.id===S.sel);if(!sd)return h('div',{},'Not found');
  const{store,ev}=sd;
  const wrap=h('div',{});
  wrap.appendChild(h('button',{className:'back',onClick:()=>{S.view='dashboard';render();}},'← Back to Dashboard'));
  const headerWrap=h('div',{});
  const tabState={active:'overview'};
  const tabWrap=h('div',{});

  function renderTabs(){
    // Always read FRESH scores after any recalc
    const scores=sd.scores;
    const W=(typeof WEIGHTS!=='undefined')?WEIGHTS:{ops:50,mkt:30,att:20};

    // ── Rebuild header with current scores ──
    headerWrap.innerHTML='';
    const hdr=h('div',{className:'card st-hdr'});
    const top=h('div',{style:{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'12px'}});
    const left=h('div',{});left.appendChild(h('div',{className:'st-id'},`Store #${store.id}`));left.appendChild(h('div',{className:'st-name'},`Yogurtland ${store.id}`));left.appendChild(h('div',{className:'st-meta'},`FBC: ${store.fbc} · ${STATE_NAMES[store.st]||store.st} · ${store.r}`));top.appendChild(left);
    const right=h('div',{style:{display:'flex',alignItems:'center',gap:'16px'}});const tw2=h('div',{style:{textAlign:'center'}});tw2.appendChild(h('div',{className:'st-total',style:{color:scores.grade.c}},scores.total.toFixed(1)));tw2.appendChild(h('div',{className:'st-total-s'},'/ 100'));right.appendChild(tw2);right.appendChild(gb(scores.grade,'xl'));top.appendChild(right);hdr.appendChild(top);
    const rings=h('div',{className:'rings'});
    [{s:scores.ops.scl,m:W.ops,l:'OPS',c:'#1565C0'},{s:scores.mkt.scl,m:W.mkt,l:'MKT',c:'#E91E63'},{s:scores.att.score,m:W.att,l:'Attendance',c:'#00897B'}].forEach(r=>{const rw=h('div',{className:'ring'});rw.appendChild(h('div',{innerHTML:ringSVG(r.s,r.m,r.c,76)}));rw.appendChild(h('div',{className:'ring-l'},r.l));rings.appendChild(rw);});
    hdr.appendChild(rings);
    if(scores.total<85)hdr.appendChild(h('div',{className:'warn'},'⚠️ Below B+ — will have difficulty renewing or expanding'));
    headerWrap.appendChild(hdr);

    // ── Rebuild tabs ──
    tabWrap.innerHTML='';
    const tabs=h('div',{className:'tabs'});
    [{id:'overview',l:'📋 Overview'},{id:'ops',l:'🔧 OPS ('+W.ops+')'},{id:'compliance',l:'📝 Compliance 8.0'},{id:'mkt',l:'📣 MKT ('+W.mkt+')'},{id:'att',l:'📅 Attendance'}].forEach(t=>{
      tabs.appendChild(h('button',{className:`tab ${tabState.active===t.id?'active':''}`,onClick:()=>{tabState.active=t.id;renderTabs();}},t.l));
    });
    tabWrap.appendChild(tabs);
    const content=h('div',{className:'fu'});

    // ── OVERVIEW ──
    if(tabState.active==='overview'){
      const g=h('div',{className:'g2'});
      const rc=h('div',{className:'card'});rc.appendChild(h('div',{className:'sh'},h('h3',{},'🎯 Performance Radar')));rc.appendChild(h('div',{className:'chart-box'},h('canvas',{id:'cr'})));g.appendChild(rc);
      const bc=h('div',{className:'card'});bc.appendChild(h('div',{className:'sh'},h('h3',{},'📈 Score Breakdown')));
      [{l:'Expand Criteria',v:scores.ops.expR,m:25,c:'#1565C0'},{l:'Compliance 8.0',v:scores.ops.inspR,m:25,c:'#1565C0'},{l:'P&L Submission',v:scores.ops.plR,m:20,c:'#1565C0'},{l:'Sales Performance',v:scores.ops.salR,m:20,c:'#1565C0'},{l:'Guest Reviews & Recoveries',v:scores.ops.gR,m:10,c:'#1565C0'},{l:'TPD & OLO Rails',v:scores.mkt.tOlo,m:15,c:'#E91E63'},{l:"Nat'l Promos",v:scores.mkt.proR,m:35,c:'#E91E63'},{l:'LSM (2%)',v:scores.mkt.lsmR,m:10,c:'#E91E63'},{l:'Loyalty / RR',v:scores.mkt.loyaltyR,m:20,c:'#E91E63'},{l:'Social Media',v:scores.mkt.socialR,m:10,c:'#E91E63'},{l:'Reviews',v:scores.mkt.reviewsR,m:10,c:'#E91E63'}].forEach(it=>{
        const row=h('div',{style:{marginBottom:'8px'}});const tp=h('div',{style:{display:'flex',justifyContent:'space-between',marginBottom:'2px'}});tp.appendChild(h('span',{style:{fontSize:'10px',color:'var(--g700)'}},it.l));tp.appendChild(h('span',{style:{fontSize:'10px',fontWeight:700,fontFamily:'var(--m)',color:it.c}},`${it.v.toFixed(1)} / ${it.m}`));row.appendChild(tp);row.appendChild(progBar(it.v,it.m,it.c));bc.appendChild(row);
      });g.appendChild(bc);content.appendChild(g);
    }

    // ── OPS TAB ──
    if(tabState.active==='ops'){
      const oc=h('div',{className:'card card-bl',style:{marginBottom:'12px'}});
      oc.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px;font-weight:700;color:var(--bl)">OPS Section Total</span><span style="font-family:var(--m);font-size:16px;font-weight:800;color:var(--bl)">${scores.ops.scl.toFixed(1)} / ${W.ops}</span></div><div style="font-size:10px;color:var(--g500);margin-top:2px">Raw: ${scores.ops.raw.toFixed(1)} / 100 → scaled to ${W.ops}</div>`;
      content.appendChild(oc);
      // Expand
      const ec=h('div',{className:'card',style:{marginBottom:'12px'}});ec.appendChild(h('div',{className:'sh'},h('h3',{},'✅ Criteria to Expand'),h('span',{className:'sub'},`${ev.expandChecks.filter(Boolean).length}/19 · ${scores.ops.expR.toFixed(1)}/25 pts`)));
      const cg=h('div',{className:'chk-g'});EXPAND.forEach((c,i)=>{const lb=h('label',{className:`chk-i ${ev.expandChecks[i]?'on':'off'}`});const cb=h('input',{type:'checkbox'});cb.checked=ev.expandChecks[i];cb.addEventListener('change',()=>{ev.expandChecks[i]=cb.checked;recalc(sd);renderTabs();});lb.appendChild(cb);lb.appendChild(document.createTextNode(c));cg.appendChild(lb);});ec.appendChild(cg);content.appendChild(ec);
      // P&L
      const pc=h('div',{className:'card',style:{marginBottom:'12px'}});pc.appendChild(h('div',{className:'sh'},h('h3',{},'📄 P&L Submission'),h('span',{className:'sub'},`${ev.plSub.filter(Boolean).length}/4 · ${scores.ops.plR}/20 pts`)));
      const pg=h('div',{style:{display:'flex',gap:'8px'}});['Q1','Q2','Q3','Q4'].forEach((q,i)=>{const lb=h('label',{style:{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:'6px',padding:'10px',borderRadius:'8px',background:ev.plSub[i]?'var(--gn-l)':'var(--g50)',cursor:'pointer'}});const cb=h('input',{type:'checkbox'});cb.checked=ev.plSub[i];cb.style.accentColor='var(--gn)';cb.addEventListener('change',()=>{ev.plSub[i]=cb.checked;recalc(sd);renderTabs();});lb.appendChild(cb);lb.appendChild(h('span',{style:{fontSize:'12px',fontWeight:700}},q));pg.appendChild(lb);});pc.appendChild(pg);content.appendChild(pc);
      // Sales
      const sc=h('div',{className:'card',style:{marginBottom:'12px'}});sc.appendChild(h('div',{className:'sh'},h('h3',{},'💰 Sales Performance'),h('span',{className:'sub'},`${scores.ops.salR.toFixed(1)}/20 pts`)));
      const sg=h('div',{className:'g2',style:{marginBottom:0}});['compSales','tpdSales'].forEach((f,fi)=>{const col=h('div',{});col.appendChild(h('div',{style:{fontSize:'10px',fontWeight:600,color:'var(--g600)',marginBottom:'5px'}},fi===0?'Comp Sales %':'TPD Sales %'));const mg=h('div',{className:'mg'});MONTHS.forEach((m,mi)=>{const mw=h('div',{className:'mi'});mw.appendChild(h('label',{},m));const inp=h('input',{type:'number',step:'0.1',value:ev[f][mi]});if(parseFloat(ev[f][mi])<0)inp.className='neg';inp.addEventListener('input',()=>{ev[f][mi]=inp.value;inp.className=parseFloat(inp.value)<0?'neg':'';recalc(sd);renderTabs();});mw.appendChild(inp);mg.appendChild(mw);});col.appendChild(mg);sg.appendChild(col);});sc.appendChild(sg);content.appendChild(sc);
      // Guest Reviews & Recoveries
      const gc=h('div',{className:'card',style:{marginBottom:'12px'}});
      gc.appendChild(h('div',{className:'sh'},h('h3',{},'⭐ Guest Reviews & Recoveries'),h('span',{className:'sub'},`${scores.ops.gR.toFixed(1)}/10 pts (base: 5)`)));
      const grGrid=h('div',{style:{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px'}});
      const grCalcDiv=h('div',{style:{marginTop:'10px',padding:'10px 14px',background:'var(--bl-l)',borderRadius:'8px',fontSize:'11px',fontFamily:'var(--m)'}});
      const grScoreDiv=h('div',{style:{marginTop:'6px',padding:'8px 14px',background:'var(--g50)',borderRadius:'6px',fontSize:'10px',color:'var(--g700)'}});
      const grInputs={};
      function updateGrLive(){
        const v={};
        ['guestOneStar','guestTwoStar','guestFiveStar','guestRecovered'].forEach(k=>{v[k]=parseInt(grInputs[k]?.value)||0;});
        let gr=5-v.guestOneStar-v.guestTwoStar+v.guestFiveStar*0.5+v.guestRecovered;
        gr=Math.max(0,Math.min(10,gr));
        grCalcDiv.textContent=`5 (base) − ${v.guestOneStar}×1 − ${v.guestTwoStar}×1 + ${v.guestFiveStar}×0.5 + ${v.guestRecovered}×1 = ${gr.toFixed(1)} pts`;
        grCalcDiv.style.color=gr>=5?'var(--gn)':'var(--rd)';
      }
      [{label:'⭐ 1-Star Reviews',key:'guestOneStar',effect:'−1 pt each',color:'var(--rd)'},
       {label:'⭐⭐ 2-Star Reviews',key:'guestTwoStar',effect:'−1 pt each',color:'var(--or)'},
       {label:'⭐⭐⭐⭐⭐ 5-Star Reviews',key:'guestFiveStar',effect:'+0.5 pt each',color:'var(--gn)'},
       {label:'🔄 Recovered Complaints',key:'guestRecovered',effect:'+1 pt each',color:'var(--tl)'}
      ].forEach(item=>{
        const box=h('div',{style:{padding:'12px',borderRadius:'8px',background:'var(--g50)',border:'1px solid var(--g200)'}});
        box.appendChild(h('div',{style:{fontSize:'11px',fontWeight:600,marginBottom:'4px'}},item.label));
        box.appendChild(h('div',{style:{fontSize:'9px',color:item.color,fontWeight:700,marginBottom:'8px'}},item.effect));
        const inp=h('input',{type:'number',min:'0',max:'50',value:String(ev[item.key]||0),style:{width:'72px',padding:'8px',border:'2px solid var(--g300)',borderRadius:'8px',fontFamily:'var(--m)',fontSize:'18px',textAlign:'center',fontWeight:800}});
        grInputs[item.key]=inp;
        inp.addEventListener('input',()=>{updateGrLive();});
        inp.addEventListener('change',()=>{ev[item.key]=parseInt(inp.value)||0;recalc(sd);renderTabs();});
        box.appendChild(inp);
        grGrid.appendChild(box);
      });
      gc.appendChild(grGrid);
      updateGrLive();
      gc.appendChild(grCalcDiv);
      grScoreDiv.textContent=`Contributes ${scores.ops.gR.toFixed(1)}/10 to OPS raw (${scores.ops.raw.toFixed(1)}/100) → scaled ${scores.ops.scl.toFixed(1)}/${W.ops} → Total: ${scores.total.toFixed(1)} (${scores.grade.g})`;
      gc.appendChild(grScoreDiv);
      content.appendChild(gc);
    }

    // ── COMPLIANCE 8.0 ──
    if(tabState.active==='compliance'){
      const totalP=ev.complianceItems.filter(i=>i.passed).length;const totalPts=ev.complianceItems.reduce((s,i)=>s+(i.passed?i.pts:0),0);
      const cc=h('div',{className:'card card-bl',style:{marginBottom:'12px'}});
      cc.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px;font-weight:700;color:var(--bl)">Yogurtland Operations Evaluation 8.0</span><span style="font-family:var(--m);font-size:14px;font-weight:800;color:var(--bl)">${totalPts} / ${TOTAL_COMPLIANCE_PTS} pts</span></div><div style="font-size:10px;color:var(--g500);margin-top:4px">${totalP}/${TOTAL_COMPLIANCE_ITEMS} items passed · Score: ${scores.ops.inspR.toFixed(1)}/25 raw pts → contributes to OPS section</div>`;
      cc.appendChild(progBar(totalPts,TOTAL_COMPLIANCE_PTS,'#1565C0'));content.appendChild(cc);
      COMPLIANCE_FORM.forEach(cat=>{
        const catItems=ev.complianceItems.filter(i=>i.category===cat.cat);const catP=catItems.filter(i=>i.passed).length;const catPts=catItems.reduce((s,i)=>s+(i.passed?i.pts:0),0);const catMax=catItems.reduce((s,i)=>s+i.pts,0);
        const section=h('div',{className:'comp-section'});const hdr2=h('div',{className:'comp-hdr'});hdr2.appendChild(h('span',{className:'cat'},`${cat.icon} ${cat.cat}`));
        const rightH=h('div',{style:{display:'flex',alignItems:'center',gap:'10px'}});const miniProg=h('div',{style:{width:'80px'}});miniProg.appendChild(progBar(catPts,catMax,catPts===catMax?'#2E7D32':'#EF6C00'));rightH.appendChild(miniProg);rightH.appendChild(h('span',{style:{fontSize:'11px',fontFamily:'var(--m)',fontWeight:600,color:catPts===catMax?'var(--gn)':'var(--or)'}},`${catPts}/${catMax}`));rightH.appendChild(h('span',{style:{fontSize:'12px',color:'var(--g400)'}},'▼'));hdr2.appendChild(rightH);
        const body=h('div',{className:'comp-body'});hdr2.addEventListener('click',()=>{body.classList.toggle('open');});
        catItems.forEach(item=>{const row=h('div',{className:`comp-item ${item.passed?'pass':'fail'}`});const cb=h('input',{type:'checkbox'});cb.checked=item.passed;cb.addEventListener('change',()=>{item.passed=cb.checked;recalc(sd);renderTabs();});row.appendChild(cb);row.appendChild(h('span',{className:'txt'},item.item));row.appendChild(h('span',{className:'pts'},`${item.pts} pts`));body.appendChild(row);});
        const bulk=h('div',{className:'comp-bulk'});const ma=h('button',{},`✅ Mark All`);ma.addEventListener('click',()=>{catItems.forEach(i=>i.passed=true);recalc(sd);renderTabs();});const clr=h('button',{},'↩ Reset');clr.addEventListener('click',()=>{catItems.forEach(i=>i.passed=false);recalc(sd);renderTabs();});bulk.appendChild(ma);bulk.appendChild(clr);body.appendChild(bulk);
        section.appendChild(hdr2);section.appendChild(body);content.appendChild(section);
      });
    }

    // ── MKT TAB ──
    if(tabState.active==='mkt'){
      const mc=h('div',{className:'card card-pk',style:{marginBottom:'12px'}});mc.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px;font-weight:700;color:var(--pk)">MKT Section Total</span><span style="font-family:var(--m);font-size:16px;font-weight:800;color:var(--pk)">${scores.mkt.scl.toFixed(1)} / ${W.mkt}</span></div><div style="font-size:10px;color:var(--g500);margin-top:2px">Raw: ${scores.mkt.raw.toFixed(1)} / 100 → scaled to ${W.mkt}</div>`;content.appendChild(mc);
      // TPD & OLO Rails
      const tc=h('div',{className:'card',style:{marginBottom:'12px'}});tc.appendChild(h('div',{className:'sh'},h('h3',{},'🔗 TPD & OLO Rails Integration'),h('span',{className:'sub'},`${scores.mkt.tOlo.toFixed(2)}/15 pts`)));
      const oloRow=h('div',{style:{display:'flex',gap:'12px',flexWrap:'wrap'}});
      const oloCheck=h('label',{style:{display:'flex',alignItems:'center',gap:'10px',padding:'12px',borderRadius:'8px',background:ev.oloRails?'var(--gn-l)':'var(--rd-l)',cursor:'pointer',flex:'1'}});
      const oloCb=h('input',{type:'checkbox'});oloCb.checked=ev.oloRails;oloCb.style.accentColor='var(--gn)';oloCb.style.width='18px';oloCb.style.height='18px';
      oloCb.addEventListener('change',()=>{ev.oloRails=oloCb.checked;recalc(sd);renderTabs();});
      oloCheck.appendChild(oloCb);oloCheck.appendChild(h('div',{},h('div',{style:{fontSize:'12px',fontWeight:700}},ev.oloRails?'✅ OLO Rails Integrated':'❌ OLO Rails Not Integrated'),h('div',{style:{fontSize:'10px',color:'var(--g500)'}},'Without OLO Rails = 0/15 pts automatically')));oloRow.appendChild(oloCheck);
      if(ev.oloRails){const rankBox=h('div',{style:{padding:'12px',borderRadius:'8px',background:'var(--bl-l)',flex:'1',minWidth:'180px'}});rankBox.appendChild(h('div',{style:{fontSize:'11px',fontWeight:600,marginBottom:'6px'}},'Order Fulfillment Ranking'));const rankInp=h('input',{type:'number',min:'1',max:String(STORES.length),value:String(ev.oloRank||1),style:{width:'70px',padding:'6px',border:'1px solid var(--g300)',borderRadius:'6px',fontFamily:'var(--m)',fontSize:'14px',textAlign:'center',fontWeight:700}});rankInp.addEventListener('input',()=>{ev.oloRank=Math.max(1,Math.min(STORES.length,parseInt(rankInp.value)||1));recalc(sd);renderTabs();});rankBox.appendChild(rankInp);rankBox.appendChild(h('span',{style:{fontSize:'11px',color:'var(--g600)',marginLeft:'8px'}},` / ${STORES.length} stores`));rankBox.appendChild(h('div',{style:{fontSize:'10px',color:'var(--bl)',marginTop:'6px',fontFamily:'var(--m)'}},`Score: (${STORES.length} − ${ev.oloRank} + 1) / ${STORES.length} × 15 = ${scores.mkt.tOlo.toFixed(2)}`));oloRow.appendChild(rankBox);}
      tc.appendChild(oloRow);content.appendChild(tc);
      // Promos
      const prc=h('div',{className:'card',style:{marginBottom:'12px'}});prc.appendChild(h('div',{className:'sh'},h('h3',{},'🎉 2026 Marketing Calendar Promos'),h('span',{className:'sub'},`${ev.promoP.filter(Boolean).length}/${PROMOS.length} · ${scores.mkt.proR}/35 pts · −5 per miss`)));
      const ppg=h('div',{className:'promo-g'});PROMOS.forEach((p,i)=>{const pl=h('label',{className:`promo-i ${ev.promoP[i]?'on':'off'}`});const pcb=h('input',{type:'checkbox'});pcb.checked=ev.promoP[i];pcb.style.accentColor='var(--gn)';pcb.addEventListener('change',()=>{ev.promoP[i]=pcb.checked;recalc(sd);renderTabs();});pl.appendChild(pcb);pl.appendChild(h('div',{},h('div',{style:{fontSize:'11px',fontWeight:600}},p.n),h('div',{style:{fontSize:'9px',color:'var(--g500)'}},p.m)));ppg.appendChild(pl);});prc.appendChild(ppg);content.appendChild(prc);
      // LSM
      const lsmCard=h('div',{className:'card',style:{marginBottom:'12px'}});lsmCard.appendChild(h('div',{className:'sh'},h('h3',{},'📍 LSM (Local Store Marketing)'),h('span',{className:'sub'},`${scores.mkt.lsmR}/10 pts`)));
      const lsmRow=h('div',{style:{display:'flex',alignItems:'center',gap:'12px'}});lsmRow.appendChild(h('span',{style:{fontSize:'12px',fontWeight:600}},'LSM Spend %:'));
      const lsmInp=h('input',{type:'number',step:'0.1',min:'0',max:'10',value:String(ev.lsmPct||0),style:{width:'80px',padding:'8px',border:'1px solid var(--g300)',borderRadius:'6px',fontFamily:'var(--m)',fontSize:'16px',textAlign:'center',fontWeight:700}});
      lsmInp.addEventListener('input',()=>{ev.lsmPct=parseFloat(lsmInp.value)||0;recalc(sd);renderTabs();});lsmRow.appendChild(lsmInp);lsmRow.appendChild(h('span',{style:{fontSize:'12px'}},'%'));lsmCard.appendChild(lsmRow);
      const lsmTiers=h('div',{style:{display:'flex',gap:'6px',marginTop:'10px'}});[{l:'≥ 2%',p:'10 pts',active:ev.lsmPct>=2},{l:'1–2%',p:'5 pts',active:ev.lsmPct>=1&&ev.lsmPct<2},{l:'< 1%',p:'0 pts',active:ev.lsmPct<1}].forEach(t=>{lsmTiers.appendChild(h('div',{style:{flex:1,padding:'8px',borderRadius:'6px',textAlign:'center',background:t.active?'var(--gn-l)':'var(--g50)',border:`1px solid ${t.active?'#2E7D3233':'var(--g200)'}`,fontWeight:t.active?700:400,fontSize:'11px'}},`${t.l} → ${t.p}`));});lsmCard.appendChild(lsmTiers);content.appendChild(lsmCard);
      // Loyalty
      const loyCard=h('div',{className:'card',style:{marginBottom:'12px'}});loyCard.appendChild(h('div',{className:'sh'},h('h3',{},'💎 Loyalty / Real Rewards'),h('span',{className:'sub'},`${scores.mkt.loyaltyR}/20 pts`)));
      const loyRow=h('div',{style:{display:'flex',alignItems:'center',gap:'12px'}});loyRow.appendChild(h('span',{style:{fontSize:'12px',fontWeight:600}},'New Member Growth %:'));
      const loyInp=h('input',{type:'number',step:'0.1',min:'-50',max:'100',value:String(ev.loyaltyPct||0),style:{width:'80px',padding:'8px',border:'1px solid var(--g300)',borderRadius:'6px',fontFamily:'var(--m)',fontSize:'16px',textAlign:'center',fontWeight:700}});
      loyInp.addEventListener('input',()=>{ev.loyaltyPct=parseFloat(loyInp.value)||0;recalc(sd);renderTabs();});loyRow.appendChild(loyInp);loyRow.appendChild(h('span',{style:{fontSize:'12px'}},'%'));loyCard.appendChild(loyRow);
      const loyTiers=h('div',{style:{display:'flex',gap:'6px',marginTop:'10px'}});[{l:'> 20%',p:'20 pts',active:ev.loyaltyPct>20},{l:'10–20%',p:'10 pts',active:ev.loyaltyPct>=10&&ev.loyaltyPct<=20},{l:'0–10%',p:'5 pts',active:ev.loyaltyPct>0&&ev.loyaltyPct<10},{l:'≤ 0%',p:'0 pts',active:ev.loyaltyPct<=0}].forEach(t=>{loyTiers.appendChild(h('div',{style:{flex:1,padding:'8px',borderRadius:'6px',textAlign:'center',background:t.active?'var(--gn-l)':'var(--g50)',border:`1px solid ${t.active?'#2E7D3233':'var(--g200)'}`,fontWeight:t.active?700:400,fontSize:'11px'}},`${t.l} → ${t.p}`));});loyCard.appendChild(loyTiers);content.appendChild(loyCard);
      // Social & Reviews
      const srGrid=h('div',{className:'g2'});
      const socCard=h('div',{className:'card'});socCard.appendChild(h('div',{className:'sh'},h('h3',{},'📱 Social Media'),h('span',{className:'sub'},`${scores.mkt.socialR}/10 pts`)));
      socCard.appendChild(h('div',{style:{fontSize:'11px',color:'var(--g600)',marginBottom:'8px'}},'Start: 10 pts. Each issue = −5 pts'));
      const socInp=h('input',{type:'number',min:'0',max:'10',value:String(ev.socialIssues||0),style:{width:'60px',padding:'8px',border:'1px solid var(--g300)',borderRadius:'6px',fontFamily:'var(--m)',fontSize:'16px',textAlign:'center',fontWeight:700}});
      socInp.addEventListener('input',()=>{ev.socialIssues=parseInt(socInp.value)||0;recalc(sd);renderTabs();});
      const socRow=h('div',{style:{display:'flex',alignItems:'center',gap:'10px'}});socRow.appendChild(h('span',{style:{fontSize:'12px',fontWeight:600}},'Issues:'));socRow.appendChild(socInp);socCard.appendChild(socRow);srGrid.appendChild(socCard);
      const revCard=h('div',{className:'card'});revCard.appendChild(h('div',{className:'sh'},h('h3',{},'⭐ Reviews'),h('span',{className:'sub'},`${scores.mkt.reviewsR}/10 pts`)));
      revCard.appendChild(h('div',{style:{fontSize:'11px',color:'var(--g600)',marginBottom:'8px'}},'Start: 0 pts. Each 5★ review = +2 pts (max 10)'));
      const revInp=h('input',{type:'number',min:'0',max:'20',value:String(ev.reviewFiveStars||0),style:{width:'60px',padding:'8px',border:'1px solid var(--g300)',borderRadius:'6px',fontFamily:'var(--m)',fontSize:'16px',textAlign:'center',fontWeight:700}});
      revInp.addEventListener('input',()=>{ev.reviewFiveStars=parseInt(revInp.value)||0;recalc(sd);renderTabs();});
      const revRow=h('div',{style:{display:'flex',alignItems:'center',gap:'10px'}});revRow.appendChild(h('span',{style:{fontSize:'12px',fontWeight:600}},'5★ Reviews:'));revRow.appendChild(revInp);revCard.appendChild(revRow);srGrid.appendChild(revCard);
      content.appendChild(srGrid);
    }

    // ── ATTENDANCE TAB ──
    if(tabState.active==='att'){
      if(!ev.monthsAttended) ev.monthsAttended=MONTHS.map(()=>true);
      const attended=ev.monthsAttended.filter(Boolean).length;const sk=12-attended;
      const ac=h('div',{className:'card card-tl',style:{marginBottom:'12px'}});
      ac.innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center"><span style="font-size:13px;font-weight:700;color:var(--tl)">Attendance Score</span><span style="font-family:var(--m);font-size:16px;font-weight:800;color:var(--tl)">${scores.att.score.toFixed(1)} / ${W.att}</span></div><div style="font-size:10px;color:var(--g500);margin-top:2px">${attended}/12 meetings attended · ${sk} missed · Each miss = −5 pts (scaled to weight)</div>`;
      content.appendChild(ac);
      const mc2=h('div',{className:'card'});mc2.appendChild(h('div',{className:'sh'},h('h3',{},'📅 Monthly Meeting Attendance'),h('span',{className:'sub'},'Click each month to toggle')));
      const mg2=h('div',{className:'mtg'});
      MONTHS.forEach((m,i)=>{
        const on=ev.monthsAttended[i];const cell=h('div',{className:`mtg-c ${on?'on':'off'}`,style:{cursor:'pointer'}});cell.appendChild(h('div',{className:'mo'},m));
        const cb=h('input',{type:'checkbox',style:{accentColor:'var(--gn)',width:'16px',height:'16px',cursor:'pointer',marginTop:'4px'}});cb.checked=on;
        cb.addEventListener('change',()=>{ev.monthsAttended[i]=cb.checked;recalc(sd);renderTabs();});
        cell.appendChild(cb);cell.appendChild(h('div',{style:{fontSize:'9px',marginTop:'2px',color:on?'var(--gn)':'var(--rd)',fontWeight:600}},on?'Attended':'Missed'));
        cell.addEventListener('click',(e)=>{if(e.target!==cb){cb.checked=!cb.checked;cb.dispatchEvent(new Event('change'));}});
        mg2.appendChild(cell);
      });mc2.appendChild(mg2);
      const dr=h('div',{className:'ded-r',style:{marginTop:'14px'}});
      [{s:0,p:20},{s:1,p:15},{s:2,p:10},{s:3,p:5},{s:4,p:0}].forEach(d=>{
        const c2=h('div',{className:`ded-c ${(d.s<4&&sk===d.s)||(d.s===4&&sk>=4)?'active':''}`});
        c2.appendChild(h('div',{className:'sk'},d.s===4?'4+ miss':`${d.s} miss`));c2.appendChild(h('div',{className:'pt'},`${d.p} pts`));dr.appendChild(c2);
      });mc2.appendChild(dr);content.appendChild(mc2);
    }

    tabWrap.appendChild(content);
    requestAnimationFrame(()=>{
      if(tabState.active==='overview'){
        const ctx=document.getElementById('cr');if(ctx){
          if(S.charts.cr)S.charts.cr.destroy();
          const labels=['Expansion','Compliance','P&L','Sales','Guest Rcv','Promos','Loyalty','Attendance'];
          const vals=[(scores.ops.expR/25)*100,(scores.ops.inspR/25)*100,(scores.ops.plR/20)*100,(scores.ops.salR/20)*100,(scores.ops.gR/10)*100,(scores.mkt.proR/35)*100,(scores.mkt.loyaltyR/20)*100,(scores.att.score/W.att)*100];
          S.charts.cr=new Chart(ctx,{type:'radar',data:{labels,datasets:[{data:vals,borderColor:'#E91E63',backgroundColor:'#E91E6320',pointBackgroundColor:'#E91E63',pointRadius:3,borderWidth:2}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{r:{beginAtZero:true,max:100,ticks:{display:false},pointLabels:{font:{size:9}}}}}});
        }
      }
    });
  }
  wrap.appendChild(headerWrap);
  wrap.appendChild(tabWrap);
  requestAnimationFrame(renderTabs);
  return wrap;
}

// ── MAIN RENDER ──
function render(){destroyCharts();const app=document.getElementById('app');app.innerHTML='';
const hdr=h('header',{className:'hdr'});const left=h('div',{className:'hdr-left'});left.appendChild(h('div',{className:'hdr-brand'},h('div',{className:'hdr-logo'},'Y'),h('div',{},h('div',{className:'hdr-t'},'Yogurtland'),h('div',{className:'hdr-s'},'Franchisee Scorecard')))); 
const nav=h('nav',{style:{display:'flex',gap:'2px',marginLeft:'14px'}});[{id:'dashboard',l:'📊 Dashboard'},{id:'sales',l:'Sales'},{id:'admin',l:'⚙️ Admin'}].forEach(n=>{nav.appendChild(h('button',{className:`nav-btn ${S.view===n.id||(S.view==='detail'&&n.id==='dashboard')?'active':''}`,onClick:()=>{S.view=n.id;S.sel=null;render();}},n.l));});left.appendChild(nav);hdr.appendChild(left);
const right=h('div',{className:'hdr-right'});right.appendChild(h('div',{style:{fontSize:'10px',color:'var(--g500)'}},'v8.0 · 2026'));right.appendChild(h('div',{className:'avatar'},'SK'));hdr.appendChild(right);app.appendChild(hdr);
const main=h('main',{className:'main'});
if(S.view==='dashboard'){main.appendChild(renderDashboard());app.appendChild(main);requestAnimationFrame(initDashboardCharts);}
else if(S.view==='detail'){main.appendChild(renderDetail());app.appendChild(main);}
else if(S.view==='sales'){main.appendChild(renderSales());app.appendChild(main);}
else if(S.view==='admin'){main.appendChild(renderAdmin());app.appendChild(main);}
}
initData();render();
