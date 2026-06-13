/* ===================================================
   SIBLING CHALLENGE — Complete Game Logic
   =================================================== */

// ─── QUESTION BANK ───────────────────────────────────
const GAME_DATA = {

  'guess-what': {
    id:'guess-what', name:'Guess What I Am',
    category:'Think', color:'#1565C0',
    description:'Solve riddles and uncover mysterious things!',
    hasAnswer:true,
    questions:[
      {q:"I am something you sleep on every night. I am soft and flat and live on your bed. What am I?", hint:"You rest your head on me when you close your eyes.", d:"e", a:"Pillow"},
      {q:"I have four legs but I cannot walk. You sit on me every day. What am I?", hint:"You find me at the dinner table.", d:"e", a:"Chair"},
      {q:"I am an animal with a very long neck. I eat leaves from the tops of trees. What am I?", hint:"I am the tallest animal on land.", d:"e", a:"Giraffe"},
      {q:"I am yellow and you peel me before eating me. Monkeys love me. What am I?", hint:"I am a curved fruit.", d:"e", a:"Banana"},
      {q:"I fall from the sky when it is cold and each one of me is unique. What am I?", hint:"I am white and cold and you can make a snowman from me.", d:"e", a:"Snowflake"},
      {q:"I am round and you kick me to score a goal. What am I?", hint:"You play with me on a grass field.", d:"e", a:"Football"},
      {q:"I live in the ocean, I have eight arms, and I can squirt ink. What am I?", hint:"My name starts with the letter O.", d:"e", a:"Octopus"},
      {q:"I am something you write with at school. I have a pointy tip and an eraser on the other end. What am I?", hint:"You sharpen me when I get dull.", d:"e", a:"Pencil"},
      {q:"I am always hot and I live in your kitchen. You use me to cook dinner. What am I?", hint:"I have four burners on top.", d:"e", a:"Stove"},
      {q:"I am a small animal that says meow and loves to chase mice. What am I?", hint:"Many people keep me as a pet at home.", d:"e", a:"Cat"},
      {q:"I am something you feel when you get a big hug or hear great news. What am I?", hint:"I make you smile and sometimes laugh.", d:"e", a:"Happiness"},
      {q:"I am red and heart-shaped and I grow on a vine close to the ground. What am I?", hint:"People eat me in summer with cream.", d:"e", a:"Strawberry"},
      {q:"I travel on rails and have many carriages. I carry lots of people from city to city. What am I?", hint:"I make a clickety-clack sound on the tracks.", d:"e", a:"Train"},
      {q:"I shine brightly in the sky during the day and give the Earth warmth and light. What am I?", hint:"You should never look directly at me.", d:"e", a:"Sun"},
      {q:"I am a tool you use to move through pages of a book and mark your place. What am I?", hint:"I am flat and thin and live inside books.", d:"e", a:"Bookmark"},
      {q:"I am an animal with black and white stripes that looks like a horse. What am I?", hint:"I live on the African savanna.", d:"e", a:"Zebra"},
      {q:"I am a round fruit that can be red, green, or yellow. A doctor stays away if you eat one a day. What am I?", hint:"I grow on trees in orchards.", d:"e", a:"Apple"},
      {q:"I have wings and feathers but I am not a bird. I fly at night and sleep upside down. What am I?", hint:"I live in caves and use sound to find my way.", d:"m", a:"Bat"},
      {q:"I am in every room of your house but you cannot see me. You breathe me all day long. What am I?", hint:"Without me all living things would die.", d:"m", a:"Air"},
      {q:"I am a school item used to cut paper. I have two sharp blades joined in the middle. What am I?", hint:"Be careful — I am very sharp.", d:"m", a:"Scissors"},
      {q:"I carry passengers through the sky and have two wings. I take off from a runway. What am I?", hint:"You go through security before boarding me.", d:"m", a:"Airplane"},
      {q:"I am a feeling that comes when something scares you. Your heart beats fast and your hands might shake. What am I?", hint:"Darkness and loud noises can cause me.", d:"m", a:"Fear"},
      {q:"I am the largest mammal on Earth and I live in the ocean. I am not a fish. What am I?", hint:"I breathe air and my babies drink milk.", d:"m", a:"Blue whale"},
      {q:"I am a transparent liquid that fills oceans, rivers, and rain clouds. What am I?", hint:"Every living thing on Earth needs me to survive.", d:"m", a:"Water"},
      {q:"I am a kitchen tool used to mix and stir. I am long with a flat head and I live in the drawer. What am I?", hint:"Bakers use me to fold cake batter.", d:"m", a:"Spatula"},
      {q:"I am a system of marks used in maths. I have a numerator on top and a denominator on the bottom. What am I?", hint:"Half of something is written as one of me.", d:"m", a:"Fraction"},
      {q:"I am an insect that makes honey. I live in a hive with thousands of others. What am I?", hint:"I have a stinger and make a buzzing sound.", d:"m", a:"Bee"},
      {q:"I am a natural light show in the night sky near the poles. I come in green, pink, and purple. What am I?", hint:"Scientists call me the aurora borealis.", d:"m", a:"Northern lights"},
      {q:"I am a vehicle with two wheels that you balance on and pedal. I have no engine. What am I?", hint:"You wear a helmet when you ride me.", d:"m", a:"Bicycle"},
      {q:"I am found in schools and used to draw straight lines and measure length. What am I?", hint:"I am usually 30 centimetres long.", d:"m", a:"Ruler"},
      {q:"I am a type of food made from fermented milk. I can be hard or soft and I come in hundreds of varieties. What am I?", hint:"Mice are famous for loving me.", d:"m", a:"Cheese"},
      {q:"I am a reptile that has lived on Earth for millions of years. I have a hard shell I can hide inside. What am I?", hint:"I am known for being very slow.", d:"m", a:"Tortoise"},
      {q:"I am a natural process where liquid water turns into vapour and rises into the sky. What am I?", hint:"Heat from the sun causes me to happen over oceans.", d:"m", a:"Evaporation"},
      {q:"I am the force that pulls objects toward the centre of the Earth. Without me you would float away. What am I?", hint:"An apple falling from a tree helped a famous scientist discover me.", d:"h", a:"Gravity"},
      {q:"I am a structure inside your cells that contains your genetic instructions. I look like a twisted ladder. What am I?", hint:"My full name has three letters and they stand for deoxyribonucleic acid.", d:"h", a:"DNA"},
      {q:"I am a word that means the number of times something happens in a given period. In science I describe sound and light waves. What am I?", hint:"High-pitched sounds have a high version of me.", d:"h", a:"Frequency"},
      {q:"I am an abstract concept. I cannot be touched but I can be felt. I drive all human action. What am I?", hint:"Without me no one would get out of bed in the morning.", d:"h", a:"Motivation"},
      {q:"I am a small sea creature with no brain or heart. My body is 95 percent water and I can sting you. What am I?", hint:"I drift through the ocean on currents.", d:"h", a:"Jellyfish"},
      {q:"I am a process plants use to turn sunlight, water, and carbon dioxide into food and oxygen. What am I?", hint:"I happen in the green parts of plants.", d:"h", a:"Photosynthesis"},
      {q:"I am a tool used in geometry to draw perfect circles. What am I?", hint:"You put a pencil in one of my two arms.", d:"h", a:"Compass"},
      {q:"I am the name for the layer of gases that surrounds a planet and protects it. What am I?", hint:"Earth has me, and I contain the air you breathe.", d:"h", a:"Atmosphere"},
      {q:"I am an emotion that arises when someone has something you want. What am I?", hint:"The colour green is often used to represent me.", d:"h", a:"Envy"},
      {q:"I am a device inside a computer that stores data permanently even when the power is off. What am I?", hint:"My older versions used spinning magnetic discs.", d:"h", a:"Hard drive"},
      {q:"I am the fastest land animal with a spotted coat. What am I?", hint:"I can reach speeds of over 100 kilometres per hour.", d:"h", a:"Cheetah"},
      {q:"I am a type of rock formed when molten magma cools and solidifies. What am I?", hint:"Basalt and granite are examples of me.", d:"h", a:"Igneous rock"},
      {q:"I am the scientific study of living organisms. Without me there would be no medicine. What am I?", hint:"You study cells, plants, and animals in my classes.", d:"h", a:"Biology"},
      {q:"I equal mass multiplied by the speed of light squared. What am I?", hint:"Albert Einstein described me in his famous equation.", d:"h", a:"Energy"},
      {q:"I am a small furry animal with large ears. I hop and love to munch on carrots. What am I?", hint:"People often keep me as a pet in a hutch.", d:"e", a:"Rabbit"},
      {q:"I am long and thin and made of pasta. You twirl me around a fork. What am I?", hint:"I am often served with tomato sauce and meatballs.", d:"e", a:"Spaghetti"},
      {q:"I am a bag you carry on your back to school. I hold books, lunch, and supplies. What am I?", hint:"You sling me over both shoulders.", d:"e", a:"Backpack"},
      {q:"I am a large body of salt water that covers most of the Earth. What am I?", hint:"There are five of me on the planet.", d:"m", a:"Ocean"},
      {q:"I am a cycle where water moves from the sky to the ground and back again. What am I?", hint:"Evaporation, condensation, and precipitation are my stages.", d:"h", a:"Water cycle"},
      {q:"I am the emotion you feel when you have done something wrong. I weigh on your conscience. What am I?", hint:"Saying sorry can sometimes ease me.", d:"h", a:"Guilt"}
    ]
  },

  'act-it-out': {
    id:'act-it-out', name:'Act It Out',
    category:'Act', color:'#E65100',
    description:'No words! Act it out and make your team guess!',
    hasAnswer:false,
    questions:[
      {q:"Act like a dog who just found its favorite toy", hint:"Think wagging tail, jumping, maybe chewing", d:"e"},
      {q:"Show everyone how a penguin walks across slippery ice", hint:"Small waddling steps, arms held tight at your sides", d:"e"},
      {q:"Pretend you are a robot waking up for the first time", hint:"Stiff movements, no sounds — just actions", d:"e"},
      {q:"Act out brushing your teeth in the morning", hint:"Do not forget to rinse and spit", d:"e"},
      {q:"Show how a cat stretches after a very long nap", hint:"Big yawn, arch your back, stretch those paws", d:"e"},
      {q:"Pretend to bake and decorate a birthday cake", hint:"Mixing, pouring, putting on candles", d:"e"},
      {q:"Act like a frog jumping from lily pad to lily pad", hint:"Crouch low, leap forward, land and pause", d:"e"},
      {q:"Show what it looks like to eat a very messy ice cream cone on a hot day", hint:"Licking fast before it melts everywhere", d:"e"},
      {q:"Pretend you are a baby elephant learning to use its trunk", hint:"Swinging your arm like a trunk, maybe sniffing around", d:"e"},
      {q:"Act out flying a kite on a very windy day", hint:"Hold the string, look up, fight the wind", d:"e"},
      {q:"Show everyone how a bunny hops around looking for carrots", hint:"Quick hops, nose twitching, ears perked up", d:"e"},
      {q:"Pretend to blow up a balloon and let it go by accident", hint:"Puff it up, lose your grip, watch it zoom away", d:"e"},
      {q:"Act like a flower slowly opening in the sunshine", hint:"Start curled up small, then gradually rise and open wide", d:"e"},
      {q:"Show what it feels like to walk through very deep, sticky mud", hint:"Each step takes lots of effort to pull your foot free", d:"e"},
      {q:"Pretend to catch a very slippery fish with your bare hands", hint:"Reach in, almost got it, it keeps sliding away", d:"e"},
      {q:"Act out getting surprised by a huge sneeze you cannot stop", hint:"Build up slowly, then explode — no sound allowed", d:"e"},
      {q:"Show how a monkey swings through trees in the jungle", hint:"Grab a branch, swing, grab the next one", d:"e"},
      {q:"Act like a firefighter rushing to put out a fire", hint:"Run, grab the hose, aim it at the flames", d:"m"},
      {q:"Pretend you are a chef tossing pizza dough in the air", hint:"Spin the dough, catch it, stretch it out", d:"m"},
      {q:"Show what a surfer looks like riding a giant wave", hint:"Balance on the board, arms out, lean into the turn", d:"m"},
      {q:"Act out a tennis player winning the final point of a big match", hint:"The serve, the rally, then the winning shot and celebration", d:"m"},
      {q:"Pretend to be a weather forecaster pointing at a map showing a big storm coming", hint:"Point to different places, show rain and wind with your body", d:"m"},
      {q:"Show how an astronaut moves around in zero gravity", hint:"Float slowly, push off walls, everything feels weightless", d:"m"},
      {q:"Act like a gardener discovering their plants have been eaten by snails", hint:"Inspect the plants, look shocked, search for the culprits", d:"m"},
      {q:"Pretend to be a knight putting on heavy armor before a battle", hint:"Strapping on each heavy piece takes time and effort", d:"m"},
      {q:"Show what it is like to ride a horse for the very first time", hint:"Nervous climbing up, bouncing around, holding on tight", d:"m"},
      {q:"Act out a dentist examining a patient who is very scared", hint:"Lean over, use tools carefully, try to calm the patient down", d:"m"},
      {q:"Pretend to be a zookeeper feeding a very tall giraffe", hint:"Reach up high, the giraffe is much taller than you", d:"m"},
      {q:"Show the moment a superhero realizes they have lost their powers", hint:"Try to fly, nothing happens, look at your hands in shock", d:"m"},
      {q:"Act like a musician playing a huge drum kit in a rock concert", hint:"Hit different drums, cymbals, keep the beat going", d:"m"},
      {q:"Pretend you stepped outside and it is freezing cold and starting to snow", hint:"Shiver, pull coat tight, hold out your hand to catch snowflakes", d:"m"},
      {q:"Show how a basketball player reacts after missing the winning shot at the buzzer", hint:"The throw, the wait, the heartbreaking miss", d:"m"},
      {q:"Act out a photographer trying to get a wild parrot to hold still for a photo", hint:"Set up the camera, the bird keeps moving, try again and again", d:"m"},
      {q:"Pretend to be a pirate spotting treasure through a telescope, then digging it up", hint:"Look through the scope, row to the island, dig with a shovel", d:"m"},
      {q:"Show what it is like to conduct an orchestra through a dramatic piece of music", hint:"Use your hands to bring instruments in and out, build to a big finish", d:"m"},
      {q:"Act like a scientist whose experiment has just bubbled over and is making a mess", hint:"Watch the beaker, try to stop it, too late — it is everywhere", d:"h"},
      {q:"Pretend to be an Olympic gymnast performing a floor routine", hint:"Cartwheels, jumps, balances, and a dramatic finish", d:"h"},
      {q:"Show the entire process of a butterfly going from caterpillar to emerging from a cocoon", hint:"Crawl slowly, curl into a ball, wait, then unfold and fly", d:"h"},
      {q:"Act like a surgeon performing a very delicate operation while an earthquake starts", hint:"Steady hands, total focus, then the shaking begins", d:"h"},
      {q:"Pretend to be a deep-sea diver discovering a sunken ship full of eerie surprises", hint:"Swim slowly, shine your light, react to each creepy thing you find", d:"h"},
      {q:"Show what it looks like to be a mime stuck inside an invisible box", hint:"Feel the walls, try every side, no way out", d:"h"},
      {q:"Act out a news reporter trying to broadcast live during a surprise rainstorm", hint:"Speak to camera, rain starts, hold papers down, carry on", d:"h"},
      {q:"Pretend to be a tightrope walker crossing between two very tall buildings", hint:"Arms out for balance, tiny careful steps, do not look down", d:"h"},
      {q:"Show a chess grandmaster thinking deeply, then making a devastating move", hint:"Long intense stare at the board, then one confident move and lean back", d:"h"},
      {q:"Act like a ninja trying to sneak through a laser security system", hint:"Move slowly, bend under beams, step over others, freeze if spotted", d:"h"},
      {q:"Pretend to be an archaeologist carefully brushing away sand to uncover an ancient statue", hint:"Kneel down, use a tiny brush, reveal the shape bit by bit", d:"h"},
      {q:"Show what it is like to be a puppet master controlling three puppets at once while one goes rogue", hint:"Both hands working different strings, one puppet starts doing its own thing", d:"h"},
      {q:"Act out a marathon runner hitting the wall with five miles left but pushing through to the finish", hint:"Strong start, slowdown, agony, digging deep, crossing the line", d:"h"},
      {q:"Pretend to be an air traffic controller guiding two planes to land at the same time", hint:"Two hands directing different planes, watching screens, staying calm", d:"h"},
      {q:"Show a dragon hunter tracking, finding, and narrowly escaping a sleeping dragon", hint:"Follow clues, creep up, freeze when it stirs, then run", d:"h"},
      {q:"Act like a potion maker following a tricky recipe where everything keeps going wrong", hint:"Read instructions, add ingredients, watch it change color — that was not supposed to happen", d:"h"},
      {q:"Pretend to be a penguin chick hatching from an egg for the very first time and seeing the world", hint:"Crack the shell from inside, emerge slowly, look around in wonder", d:"h"},
      {q:"Show what it looks like to be a professional juggler who gets hiccups mid-performance", hint:"Juggling smoothly, then hiccups throw off your timing again and again", d:"h"}
    ]
  },

  'draw-guess': {
    id:'draw-guess', name:'Draw & Guess',
    category:'Create', color:'#6A1B9A',
    description:'Draw it in 60 seconds — can your team guess it?',
    hasAnswer:false,
    questions:[
      {q:"Draw a cat wearing a birthday hat and blowing out candles on a cake", hint:"Think party time — pointy hat, cake with candles, happy cat", d:"e"},
      {q:"Draw a dog riding a skateboard down a hill", hint:"Four paws on a board, tongue out, going fast downhill", d:"e"},
      {q:"Draw a frog sitting on a lily pad holding an umbrella in the rain", hint:"Pond, round pad, little frog, drops falling from the sky", d:"e"},
      {q:"Draw a rainbow over a grassy hill with a big smiling sun", hint:"Colorful arch, green hill, bright sun with a face", d:"e"},
      {q:"Draw a duck wearing sunglasses at the beach", hint:"Feathery friend, cool shades, sand and waves behind it", d:"e"},
      {q:"Draw a bear eating a giant ice cream cone", hint:"Big furry animal, tall stacked scoops, maybe a few drips", d:"e"},
      {q:"Draw a bunny bouncing on a trampoline", hint:"Long ears, springy mat, bunny in mid-air", d:"e"},
      {q:"Draw a penguin building a sandcastle at the beach", hint:"Black and white bird, towers of sand, buckets and spades", d:"e"},
      {q:"Draw a monkey swinging from a banana tree", hint:"Long arms, hanging from a branch, yellow bananas all around", d:"e"},
      {q:"Draw a snail wearing tiny rain boots", hint:"Slow creature with a shell, little boots on its foot", d:"e"},
      {q:"Draw an elephant splashing in a puddle", hint:"Big grey animal, big ears, water flying everywhere", d:"e"},
      {q:"Draw a cow jumping over the moon", hint:"Classic nursery rhyme — spotted cow, big glowing moon", d:"e"},
      {q:"Draw a fish blowing bubbles shaped like hearts", hint:"Underwater, scales and fins, heart-shaped bubbles floating up", d:"e"},
      {q:"Draw a turtle wearing a backpack going to school", hint:"Slow and steady, shell on back, bag on top of the shell", d:"e"},
      {q:"Draw a giraffe trying to fit through a tiny door", hint:"Very tall neck, very short doorway — not going well", d:"e"},
      {q:"Draw a cloud that looks like a fluffy sheep", hint:"Sky, soft curly cloud shape that resembles a woolly lamb", d:"e"},
      {q:"Draw a panda eating a slice of pizza", hint:"Black and white bear, triangle slice, maybe some cheese strings", d:"e"},
      {q:"Draw a lion with a curly hairstyle and a big smile", hint:"King of the jungle with a wild, fancy mane hairdo", d:"m"},
      {q:"Draw a shark wearing a chef hat and cooking spaghetti", hint:"Big teeth, white hat, pot of pasta on a stove underwater", d:"m"},
      {q:"Draw a robot watering flowers in a garden", hint:"Metal body, hinged arms, watering can, colorful blooms", d:"m"},
      {q:"Draw an octopus playing eight different musical instruments at once", hint:"Eight arms, each holding something different — guitar, drum, trumpet...", d:"m"},
      {q:"Draw a dragon sitting at a desk doing homework", hint:"Scales, wings folded, pencil in claw, papers on the desk", d:"m"},
      {q:"Draw a volcano that is erupting glitter instead of lava", hint:"Mountain shape, explosion at the top, sparkles spraying out", d:"m"},
      {q:"Draw a wizard casting a spell that turns a sock into a giant donut", hint:"Pointy hat, magic wand, one sock transforming into a ring pastry", d:"m"},
      {q:"Draw two dinosaurs playing tennis on a court", hint:"T-rex arms might be a challenge — net in the middle, rackets", d:"m"},
      {q:"Draw a submarine made entirely out of watermelons", hint:"Underwater vessel shape, all covered in green and red stripes", d:"m"},
      {q:"Draw a house balanced on top of a very tall stack of pancakes", hint:"Layers of flat round cakes piled high, little house on top", d:"m"},
      {q:"Draw a squirrel in a superhero cape flying over a city", hint:"Bushy tail, cape streaming behind, skyscrapers far below", d:"m"},
      {q:"Draw a hot dog running away from a bottle of ketchup", hint:"Hot dog on legs, scared face, ketchup bottle chasing it", d:"m"},
      {q:"Draw a snowy mountain with a ski slope and a yeti skiing down it", hint:"Big hairy creature on skis, poles, snow flying, tall peak", d:"m"},
      {q:"Draw a library inside a giant treehouse", hint:"Tree with a room built in it, shelves of books, ladder going up", d:"m"},
      {q:"Draw a pirate ship sailing on a sea of chocolate milk", hint:"Skull and crossbones flag, brown waves, maybe a straw as a mast", d:"m"},
      {q:"Draw a chicken piloting a small airplane through clouds", hint:"Feathery pilot, cockpit, wings on the plane, puffy clouds", d:"m"},
      {q:"Draw a snowman at a summer beach melting but still wearing sunglasses", hint:"Carrot nose, coal eyes, drooping and dripping in the hot sun", d:"m"},
      {q:"Draw the Eiffel Tower wrapped up as a giant birthday present with a bow on top", hint:"Tall iron lattice tower, big ribbon, gift wrapping paper around it", d:"h"},
      {q:"Draw a city skyline reflected upside down in a giant swimming pool", hint:"Buildings above, same buildings mirrored below in the water", d:"h"},
      {q:"Draw an astronaut floating in space trying to catch a runaway pizza", hint:"Spacesuit, helmet, zero gravity, spinning pizza slice drifting away", d:"h"},
      {q:"Draw a medieval knight stuck in a revolving door", hint:"Full armour, visor down, spinning glass door, confused expression", d:"h"},
      {q:"Draw a giant cactus wearing a tuxedo at a fancy dinner party", hint:"Spiky desert plant in a bow tie, seated at a table with candles", d:"h"},
      {q:"Draw a time machine that looks like an old-fashioned bathtub with dials and clocks on it", hint:"Claw-foot tub, lots of gauges and buttons, maybe sparks flying", d:"h"},
      {q:"Draw a mermaid stuck in a traffic jam underwater", hint:"Fish tail, cars replaced by submarines, traffic light, frustrated face", d:"h"},
      {q:"Draw the moment a magician pulls an elephant out of a top hat", hint:"Tiny hat on a table, giant elephant emerging, shocked audience", d:"h"},
      {q:"Draw a library where all the books are flying off the shelves at once", hint:"Shelves, open books with wings, one surprised librarian ducking", d:"h"},
      {q:"Draw a chess game being played between a robot and a cat, with the cat knocking all the pieces off", hint:"Board, two players, robot focused, cat mid-swipe with paw", d:"h"},
      {q:"Draw a lighthouse in the middle of a desert surrounded by sand dunes instead of water", hint:"Tall striped tower with a beacon light, dry sandy landscape all around", d:"h"},
      {q:"Draw an underground city where moles drive tiny cars and shop at tiny malls", hint:"Cross-section of earth, tunnels, little mole people, shops and roads", d:"h"},
      {q:"Draw a scientist discovering that her lab has been turned into a giant breakfast bowl of cereal", hint:"Lab coat, goggles, microscopes replaced by spoons, milk rising around her", d:"h"},
      {q:"Draw the solar system but every planet is a different flavor of giant lollipop", hint:"Eight round swirly candy pops orbiting a bright candy sun", d:"h"},
      {q:"Draw a firefighter putting out a fire made entirely of ice cream scoops", hint:"Helmet, hose, but the flames are scoops of ice cream melting", d:"h"},
      {q:"Draw an ancient Egyptian pyramid with a neon sign on it saying open for tours", hint:"Classic triangle pyramid, glowing modern sign, desert backdrop", d:"h"},
      {q:"Draw a grandfather clock that has grown legs and is trying to walk out of a house", hint:"Tall wooden clock, little legs at the bottom, front door open", d:"h"},
      {q:"Draw a scene from a T-rex chasing a Jeep through the jungle rain", hint:"Huge dino, headlights of a car, dark jungle, heavy rain", d:"h"}
    ]
  },

  'minute-challenge': {
    id:'minute-challenge', name:'Minute Challenges',
    category:'Move', color:'#B71C1C',
    description:'Race the clock! Can you do it in 60 seconds?',
    hasAnswer:false,
    questions:[
      {q:"Name 5 animals that live in the ocean before the timer runs out!", hint:"Think about what swims in the sea.", d:"e"},
      {q:"Do 10 jumping jacks as fast as you can!", hint:"Jump your feet out and clap your hands above your head.", d:"e"},
      {q:"Name 5 colours of the rainbow in order!", hint:"Start with red and work your way through.", d:"e"},
      {q:"Hop on one foot 15 times without stopping!", hint:"Keep your balance and count out loud.", d:"e"},
      {q:"Name 5 fruits you can find at a grocery store!", hint:"Think of sweet things that grow on trees or vines.", d:"e"},
      {q:"Spell the word CAT out loud, one letter at a time!", hint:"Three letters — say each one clearly.", d:"e", a:"C-A-T"},
      {q:"Name 5 things you might find in a kitchen!", hint:"Look around — what do you cook with or eat from?", d:"e"},
      {q:"Count backwards from 10 to 1 as fast as you can!", hint:"Start at ten and go down one number at a time.", d:"e"},
      {q:"Name 5 animals that have four legs!", hint:"Think of pets or farm animals.", d:"e"},
      {q:"Touch 5 different things in the room that are blue!", hint:"Look around quickly — clothes, furniture, anything blue!", d:"e"},
      {q:"Spell the word DOG out loud, one letter at a time!", hint:"Three letters — think of a furry pet.", d:"e", a:"D-O-G"},
      {q:"Name 5 vegetables you might eat for dinner!", hint:"Think of things that grow in a garden.", d:"e"},
      {q:"Clap your hands 20 times as fast as you can!", hint:"Count every clap out loud.", d:"e"},
      {q:"Name 5 things that are the colour red!", hint:"Think of foods, objects, or animals.", d:"e"},
      {q:"Do 5 star jumps and count them as you go!", hint:"Spread your arms and legs wide each time you jump.", d:"e"},
      {q:"Name 5 animals you might see at a farm!", hint:"Think of animals that farmers look after.", d:"e"},
      {q:"Spell the word SUN out loud, one letter at a time!", hint:"Three letters — think of what shines in the sky.", d:"e", a:"S-U-N"},
      {q:"Name 10 different animals before time runs out!", hint:"Mix it up — land, sea, and sky animals all count.", d:"m"},
      {q:"Name 8 countries in Europe as fast as you can!", hint:"Think of places like France, Spain, Italy...", d:"m"},
      {q:"Do 15 hops on alternating feet — left, right, left, right!", hint:"Switch feet every hop and keep a steady rhythm.", d:"m"},
      {q:"Name 8 types of sport as fast as you can!", hint:"Think of ball sports, water sports, and track events.", d:"m"},
      {q:"Spell the word ELEPHANT out loud, one letter at a time!", hint:"Eight letters — a big grey animal with a trunk.", d:"m", a:"E-L-E-P-H-A-N-T"},
      {q:"Name 8 things you would pack in a suitcase for a beach holiday!", hint:"Think about sun, swimming, and staying comfortable.", d:"m"},
      {q:"Count by fives from 5 to 60 as fast as you can!", hint:"5, 10, 15... keep going all the way to 60.", d:"m"},
      {q:"Name 8 different foods that are yellow!", hint:"Think of fruits, vegetables, and snack foods.", d:"m"},
      {q:"Do 10 squats as fast as you can while counting out loud!", hint:"Bend your knees and lower down, then stand back up.", d:"m"},
      {q:"Name 8 animals that can fly!", hint:"Birds count, but so do insects and other creatures.", d:"m"},
      {q:"Spell the word BUTTERFLY out loud, one letter at a time!", hint:"Nine letters — a pretty insect that starts as a caterpillar.", d:"m", a:"B-U-T-T-E-R-F-L-Y"},
      {q:"Name 8 things you would find in a classroom!", hint:"Think of what teachers and students use every day.", d:"m"},
      {q:"Count backwards from 20 to 1 as fast as you can!", hint:"Start at twenty and go down without making a mistake.", d:"m"},
      {q:"Name 8 different types of transport before time runs out!", hint:"Think of ways to travel by land, sea, and air.", d:"m"},
      {q:"Touch something in the room for every colour of the rainbow!", hint:"Red, orange, yellow, green, blue, indigo, violet.", d:"m"},
      {q:"Name 8 countries in Asia as fast as you can!", hint:"Think of China, Japan, India... keep going!", d:"m"},
      {q:"Spell the word DINOSAUR out loud, one letter at a time!", hint:"Eight letters — a giant creature from millions of years ago.", d:"m", a:"D-I-N-O-S-A-U-R"},
      {q:"Name 15 animals from any continent before the timer ends!", hint:"Go as fast as you can — no repeats allowed!", d:"h"},
      {q:"Name 10 capital cities of countries around the world!", hint:"Think of Paris, Tokyo, London... what else do you know?", d:"h"},
      {q:"Do 20 jumping jacks and count every single one out loud!", hint:"Keep a fast, steady pace — do not lose count.", d:"h"},
      {q:"Spell the word MISSISSIPPI out loud, one letter at a time!", hint:"Eleven letters — a famous river in the United States.", d:"h", a:"M-I-S-S-I-S-S-I-P-P-I"},
      {q:"Name 10 different breeds of dog as fast as you can!", hint:"Think of big dogs, small dogs, fluffy dogs and short-haired ones.", d:"h"},
      {q:"Count by sevens from 7 to 84 as fast as you can!", hint:"7, 14, 21... keep going all the way to 84.", d:"h"},
      {q:"Name 10 different languages spoken around the world!", hint:"Think of languages from different continents.", d:"h"},
      {q:"Spell the word ENCYCLOPEDIA out loud, one letter at a time!", hint:"Twelve letters — a book that contains information on everything.", d:"h", a:"E-N-C-Y-C-L-O-P-E-D-I-A"},
      {q:"Name 10 things found in outer space before time runs out!", hint:"Think of planets, stars, spacecraft, and other cosmic objects.", d:"h"},
      {q:"Do 15 push-ups as fast as you can while counting out loud!", hint:"Keep your back straight and touch your chest to the floor.", d:"h"},
      {q:"Name 10 different instruments in an orchestra!", hint:"Think of strings, brass, woodwind, and percussion sections.", d:"h"},
      {q:"Count backwards by threes from 30 to zero as fast as you can!", hint:"30, 27, 24... keep going until you reach zero.", d:"h"},
      {q:"Name 10 different types of fish before the timer runs out!", hint:"Think of fish from oceans, rivers, and aquariums.", d:"h"},
      {q:"Spell the word MEDITERRANEAN out loud, one letter at a time!", hint:"Thirteen letters — a famous sea between Europe and Africa.", d:"h", a:"M-E-D-I-T-E-R-R-A-N-E-A-N"},
      {q:"Name 10 countries in Africa as fast as you can!", hint:"Africa has 54 countries — how many can you name?", d:"h"},
      {q:"Do 25 hops on one foot without stopping or switching feet!", hint:"Pick your strongest foot and keep your balance the whole way.", d:"h"},
      {q:"Name 10 different scientific words or terms before time is up!", hint:"Think of words from biology, chemistry, physics, or space science.", d:"h"},
      {q:"Spell the word PNEUMONIA out loud, one letter at a time!", hint:"Nine letters — a tricky word where the P is silent.", d:"h", a:"P-N-E-U-M-O-N-I-A"}
    ]
  },

  'would-you-rather': {
    id:'would-you-rather', name:'Would You Rather',
    category:'Think', color:'#1B5E20',
    description:'Choose and defend your answer — creativity wins!',
    hasAnswer:false,
    questions:[
      {q:"Would you rather have a pet dragon that sneezes fire or a pet unicorn that only runs backwards?", hint:"Think about what each pet would be like at home and outside.", d:"e"},
      {q:"Would you rather eat only pizza for a whole year or eat only ice cream for a whole year?", hint:"Think about breakfast, lunch, and dinner every single day.", d:"e"},
      {q:"Would you rather be able to fly like a bird or breathe underwater like a fish?", hint:"Where would each power take you on an adventure?", d:"e"},
      {q:"Would you rather have spaghetti for hair or maple syrup for blood?", hint:"Think about washing your hair or getting a cut.", d:"e"},
      {q:"Would you rather talk to animals or speak every human language in the world?", hint:"Who would you most want to have a conversation with?", d:"e"},
      {q:"Would you rather live inside a bouncy castle or live inside a giant treehouse?", hint:"Picture your bedroom, kitchen, and living room in each place.", d:"e"},
      {q:"Would you rather be tiny like an ant or giant like a skyscraper?", hint:"Think about what everyday life would look like at each size.", d:"e"},
      {q:"Would you rather always have to hop everywhere or always have to spin in circles when you walk?", hint:"Imagine going to school or the grocery store this way.", d:"e"},
      {q:"Would you rather have a tail like a dog that wags when you are happy or ears like a rabbit that stand up when you are scared?", hint:"Think about keeping your feelings secret from everyone around you.", d:"e"},
      {q:"Would you rather it rained chocolate milk or snowed cotton candy?", hint:"Picture playing outside in each kind of weather.", d:"e"},
      {q:"Would you rather always wear a superhero cape everywhere or always wear a party hat on your head?", hint:"Imagine going to school, the store, and a fancy dinner this way.", d:"e"},
      {q:"Would you rather have a robot best friend or a dinosaur best friend?", hint:"Think about what you would do together on weekends.", d:"e"},
      {q:"Would you rather only be able to whisper or only be able to shout?", hint:"Think about trying to tell a secret or a joke.", d:"e"},
      {q:"Would you rather have shoes that are always too big or a hat that is always too small?", hint:"Picture wearing each one for a whole day of activities.", d:"e"},
      {q:"Would you rather sleep in a nest like a bird or in a burrow underground like a rabbit?", hint:"Think about how cozy or comfortable each would really be.", d:"e"},
      {q:"Would you rather eat a spoonful of peanut butter with every meal or drink a glass of pickle juice every morning?", hint:"Imagine eating your favourite food paired with each of these.", d:"e"},
      {q:"Would you rather have a head that glows in the dark or have feet that make squeaky toy sounds with every step?", hint:"Think about sneaking around at night or sitting in a quiet classroom.", d:"e"},
      {q:"Would you rather be able to pause time for one minute each day or rewind time by ten seconds whenever you want?", hint:"Think about which power would help you more in tricky situations.", d:"m"},
      {q:"Would you rather know every joke ever told but never be able to laugh or laugh at absolutely everything but never find anything funny again?", hint:"Which matters more to you — knowing jokes or feeling real laughter?", d:"m"},
      {q:"Would you rather live without music or live without the internet?", hint:"Think about your daily routine and what would change the most.", d:"m"},
      {q:"Would you rather have to read every book you ever see or never be allowed to read anything at all?", hint:"Think about cereal boxes, street signs, and your favourite stories.", d:"m"},
      {q:"Would you rather be the best player on a losing team or the worst player on a winning team?", hint:"Think about whether personal skill or shared success matters more to you.", d:"m"},
      {q:"Would you rather have an extra hour of free time every day or an extra hour of sleep every night?", hint:"Think about how you feel on school mornings and after school.", d:"m"},
      {q:"Would you rather be able to remember every single dream or never have any dreams at all?", hint:"Consider both the amazing dreams and the nightmares you might keep forever.", d:"m"},
      {q:"Would you rather live on a spaceship for a year or live at the bottom of the ocean for a year?", hint:"Think about food, friends, sunlight, and what you would miss most.", d:"m"},
      {q:"Would you rather only be able to eat foods that are blue or only eat foods that are orange?", hint:"Make a list in your head of all the blue foods you know versus orange foods.", d:"m"},
      {q:"Would you rather swap lives with your pet for one week or swap lives with your favourite book character for one week?", hint:"Think about what a day in each life would actually look and feel like.", d:"m"},
      {q:"Would you rather have a magic pencil that draws anything you imagine or a magic backpack that always has whatever you need inside?", hint:"Think about the most useful moments each magical item could help with.", d:"m"},
      {q:"Would you rather be famous for something embarrassing or unknown for something amazing?", hint:"Think about how each choice would feel ten years from now.", d:"m"},
      {q:"Would you rather spend a week in the past visiting ancient history or a week in the future seeing what Earth looks like?", hint:"Consider the dangers and discoveries waiting in each direction of time.", d:"m"},
      {q:"Would you rather always feel slightly itchy everywhere or always hear a faint buzzing sound that nobody else can hear?", hint:"Think about trying to sleep, concentrate in school, or relax.", d:"m"},
      {q:"Would you rather have to say everything you think out loud or never be able to speak at all?", hint:"Imagine sitting with your family, friends, or strangers in each situation.", d:"m"},
      {q:"Would you rather lose your sense of taste forever or lose your sense of smell forever?", hint:"Think carefully about what each sense adds to your everyday experience.", d:"m"},
      {q:"Would you rather run as fast as a cheetah but only in a straight line or teleport anywhere but only to places you have never been before?", hint:"Think about how useful each power is when you already know where you are going.", d:"m"},
      {q:"Would you rather only ever be able to read physical books with no screens or only use screens with no physical books ever again?", hint:"Think about school, bedtime stories, travel, and the texture of pages.", d:"h"},
      {q:"Would you rather have the ability to feel no physical pain at all or have a perfect memory that never forgets anything?", hint:"Pain can warn you of danger — think about the hidden costs of each superpower.", d:"h"},
      {q:"Would you rather always know when someone is lying to you but never be believed yourself or always be believed but never know when others are lying?", hint:"Think about trust, friendships, and which direction of honesty matters more.", d:"h"},
      {q:"Would you rather give up all social media for five years or give up eating at restaurants for five years?", hint:"Think about birthdays, celebrations, friendships, and what you would genuinely miss.", d:"h"},
      {q:"Would you rather have the power to read minds but you cannot turn it off or be invisible but only when nobody is looking for you?", hint:"Think about the practical limits and emotional costs of each power.", d:"h"},
      {q:"Would you rather live in a world with no rules or a world where every rule is strictly enforced all the time?", hint:"Think about safety, fairness, freedom, and what could go wrong in each world.", d:"h"},
      {q:"Would you rather be extremely talented at something you hate doing or be completely average at everything you love?", hint:"Think about motivation, identity, and how you spend your time each day.", d:"h"},
      {q:"Would you rather know the exact date of your own death but live a very long life or not know but risk it being very soon?", hint:"Would knowing that date help you live better or make life harder to enjoy?", d:"h"},
      {q:"Would you rather be the smartest person in every room but always feel lonely or have tons of close friends but always struggle with hard subjects?", hint:"Think about what truly makes you happy over a whole lifetime.", d:"h"},
      {q:"Would you rather explore an unknown planet alone for two years or stay on Earth but never be allowed to leave your own city again?", hint:"Weigh adventure, isolation, discovery, and comfort against each other.", d:"h"},
      {q:"Would you rather have unlimited money but no free time or unlimited free time but no money at all?", hint:"Think about what money actually buys and what you do with your best free hours.", d:"h"},
      {q:"Would you rather always say exactly what you mean even if it hurts people or always say what people want to hear even if it is untrue?", hint:"Think about kindness, honesty, and what good communication really looks like.", d:"h"},
      {q:"Would you rather be the last human on Earth but surrounded by friendly animals or be surrounded by millions of people but completely unable to communicate with any of them?", hint:"Think about loneliness, belonging, and what human connection really means.", d:"h"},
      {q:"Would you rather have a photographic memory for everything you read but forget all faces or remember every face perfectly but forget everything you have ever read?", hint:"Consider school, relationships, and which loss would hurt your daily life more.", d:"h"},
      {q:"Would you rather be able to fix any broken object just by touching it or heal any sick person just by looking at them?", hint:"Think about the scale of good you could do and what each power costs you.", d:"h"},
      {q:"Would you rather discover a cure for a disease that saves millions of lives but nobody ever knows it was you or be famous worldwide for something that helps nobody at all?", hint:"Think about whether the impact of your actions matters more than being recognised.", d:"h"},
      {q:"Would you rather grow up too fast and skip being a kid or stay a child forever and never grow up?", hint:"Think about freedom, responsibility, play, and what each stage of life is worth.", d:"h"},
      {q:"Would you rather only be able to wear one colour of clothing for the rest of your life or change your appearance completely every single morning without any control over it?", hint:"Think about identity, comfort, and how others see you each day.", d:"h"}
    ]
  },

  'brain-teasers': {
    id:'brain-teasers', name:'Brain Teasers',
    category:'Think', color:'#0D47A1',
    description:'Twist your brain with these sneaky puzzles!',
    hasAnswer:true,
    questions:[
      {q:"I have hands but cannot clap. What am I?", hint:"You check me when you need to know the time.", d:"e", a:"A clock"},
      {q:"What has teeth but cannot bite?", hint:"You might use it every morning on your hair.", d:"e", a:"A comb"},
      {q:"I go up but never come down. What am I?", hint:"Think about what happens every year on your birthday.", d:"e", a:"Your age"},
      {q:"What gets wetter the more it dries?", hint:"You grab one after a bath or shower.", d:"e", a:"A towel"},
      {q:"I have a tail and a head, but no body. What am I?", hint:"You might flip me to make a decision.", d:"e", a:"A coin"},
      {q:"What can you catch but not throw?", hint:"It spreads from person to person, especially in winter.", d:"e", a:"A cold"},
      {q:"What has one eye but cannot see?", hint:"Thread goes through it when you sew.", d:"e", a:"A needle"},
      {q:"What has four legs in the morning, two at noon, and three at night?", hint:"Think about a person going through the stages of life.", d:"e", a:"A human being"},
      {q:"I am always in front of you but cannot be seen. What am I?", hint:"It has not happened yet.", d:"e", a:"The future"},
      {q:"What starts with E, ends with E, and has only one letter inside?", hint:"You use one to mail a letter.", d:"e", a:"An envelope"},
      {q:"What has a neck but no head?", hint:"You pour drinks from it.", d:"e", a:"A bottle"},
      {q:"What can run but never walks, has a mouth but never talks, has a head but never weeps?", hint:"It flows through nature and fish live in it.", d:"e", a:"A river"},
      {q:"I am light as a feather, but even the strongest person cannot hold me for more than a few minutes. What am I?", hint:"You do it automatically without thinking.", d:"e", a:"Breath"},
      {q:"What has a bottom at the top?", hint:"You wear it on your leg.", d:"e", a:"A leg"},
      {q:"What has keys but no locks, space but no room, and you can enter but cannot go inside?", hint:"You type on it.", d:"e", a:"A keyboard"},
      {q:"What comes once in a minute, twice in a moment, but never in a thousand years?", hint:"Look carefully at the words in the question.", d:"e", a:"The letter M"},
      {q:"I have a face but no eyes, nose, or mouth. What am I?", hint:"Mountains have one too.", d:"e", a:"A cliff face or the face of a clock"},
      {q:"A rooster is standing on a roof. It lays an egg. Which way does the egg roll?", hint:"Think carefully about whether roosters can lay eggs.", d:"m", a:"Roosters do not lay eggs, so there is no egg."},
      {q:"If there are 3 apples and you take away 2, how many apples do YOU have?", hint:"The question is asking about YOU, not what is left behind.", d:"m", a:"2 apples"},
      {q:"A man walks into a bar and asks for a glass of water. The bartender pulls out a gun and points it at him. The man says thank you and leaves. Why?", hint:"The man had a problem that the gun somehow solved.", d:"m", a:"The man had hiccups. The gun scared him and cured them."},
      {q:"How far can a dog run into the woods?", hint:"At some point, the dog is no longer running into the woods.", d:"m", a:"Halfway — after that it is running out of the woods."},
      {q:"What is always coming but never arrives?", hint:"By definition, it can never be now.", d:"m", a:"Tomorrow"},
      {q:"A woman shoots her husband, then holds him underwater for five minutes. Later they go to dinner together. How?", hint:"She did not hurt him — both actions were harmless.", d:"m", a:"She took a photo of him, then developed it in a darkroom."},
      {q:"Which weighs more: a pound of feathers or a pound of bricks?", hint:"Read the question very carefully before you answer.", d:"m", a:"They weigh the same — both are one pound."},
      {q:"What can you break without touching it, seeing it, or even being near it?", hint:"It happens when you do not keep a promise.", d:"m", a:"A promise"},
      {q:"The more you take, the more you leave behind. What am I?", hint:"You make them every time you walk.", d:"m", a:"Footsteps"},
      {q:"I speak without a mouth and hear without ears. I have no body but come alive with wind. What am I?", hint:"You hear me bounce off mountains.", d:"m", a:"An echo"},
      {q:"What word is spelled wrong in every dictionary?", hint:"Read the question again very carefully.", d:"m", a:"The word wrong"},
      {q:"A man lives on the 30th floor of a building. Every day he takes the elevator down to work. When he returns, he takes the elevator to the 15th floor and walks up. Why?", hint:"There is something he cannot reach.", d:"m", a:"He is too short to reach the button for the 30th floor."},
      {q:"You see a boat filled with people. It has not sunk, but you cannot see a single person on the boat. Why?", hint:"Everyone is still on the boat.", d:"m", a:"All the people are married — there are no single people."},
      {q:"What has many words but never speaks?", hint:"You find it in a library.", d:"m", a:"A book"},
      {q:"What question can you never answer yes to?", hint:"If you could answer it yes, you would not be able to speak at all.", d:"m", a:"Are you asleep?"},
      {q:"I have cities but no houses, forests but no trees, and water but no fish. What am I?", hint:"You unfold me to find your way.", d:"m", a:"A map"},
      {q:"What can you put in a barrel to make it lighter?", hint:"It is not a physical object.", d:"m", a:"A hole"},
      {q:"If you drop me I will crack, but if you smile at me I will smile back. What am I?", hint:"You check your reflection in me.", d:"m", a:"A mirror"},
      {q:"Two fathers and two sons sat down to eat eggs. They ate exactly three eggs and each had one egg. How?", hint:"How many people are actually sitting at the table?", d:"h", a:"There were only three people: a grandfather, his son, and his grandson."},
      {q:"A man is found dead in a field clutching a stick. There is nothing else around him for miles. What happened?", hint:"He was very high up before he died.", d:"h", a:"He was parachuting and the parachute did not open. The stick was the broken handle of the failed cord."},
      {q:"A girl is at her mother's funeral. She meets a man she has never seen before and falls in love. She never gets his contact details. Later she kills her sister. Why?", hint:"She hoped to see the man again at a similar event.", d:"h", a:"She hoped to meet the man again at her sister's funeral."},
      {q:"How many months have 28 days?", hint:"The answer is not one.", d:"h", a:"All 12 months have at least 28 days."},
      {q:"A man pushes his car to a hotel and tells the owner he is bankrupt. Why?", hint:"He is playing a very well-known board game.", d:"h", a:"He is playing Monopoly."},
      {q:"In a one-story pink house, everything is pink. What color are the stairs?", hint:"Think about what type of house it is.", d:"h", a:"There are no stairs — it is a one-story house."},
      {q:"I have 6 faces and 21 eyes, but I cannot see. What am I?", hint:"You shake me before you use me in a game.", d:"h", a:"A standard die"},
      {q:"A man is looking at a photo and says: brothers and sisters I have none, but this man's father is my father's son. Who is in the photo?", hint:"Work backward from the phrase my father's son.", d:"h", a:"His own son"},
      {q:"What comes next in this sequence: 1, 11, 21, 1211, 111221?", hint:"Read each number out loud and describe what you see.", d:"h", a:"312211 — each number describes the digits of the previous one."},
      {q:"A snail is at the bottom of a 10-meter well. Each day it climbs 3 meters but slides back 2 at night. How many days to escape?", hint:"On the final day, the snail reaches the top and does not slide back.", d:"h", a:"8 days"},
      {q:"You are in a dark room with a candle, a wood stove, and a gas lamp. You have one match. What do you light first?", hint:"Before you light anything else, you need to do something first.", d:"h", a:"The match"},
      {q:"What is the next letter in this sequence: O, T, T, F, F, S, S, E, N?", hint:"Say the counting numbers out loud and listen to their first letters.", d:"h", a:"T — the sequence spells the first letters of One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten."},
      {q:"A farmer has 17 sheep. All but 9 run away. How many does he have left?", hint:"All but 9 means everything except 9.", d:"h", a:"9 sheep"},
      {q:"What is full of holes but still holds water?", hint:"You use it in the kitchen or the garden.", d:"h", a:"A sponge"},
      {q:"Three playing cards are in a row. A diamond is to the left of a spade. A diamond is to the right of a diamond. What are the three cards?", hint:"Figure out which card must be in the middle.", d:"h", a:"Diamond, Diamond, Spade"},
      {q:"I am not alive, but I can grow. I do not have lungs, but I need air. I do not have a mouth, but water kills me. What am I?", hint:"You see me flicker in the dark on birthday cakes.", d:"h", a:"Fire"},
      {q:"A man leaves home, turns left three times, and returns home to find two masked men waiting. What is happening?", hint:"It is a sport played on a diamond-shaped field.", d:"h", a:"He is playing baseball. He ran the bases and came home. The two masked men are the catcher and the umpire."}
    ]
  },

  'memory-challenge': {
    id:'memory-challenge', name:'Memory Challenge',
    category:'Think', color:'#004D40',
    description:'How sharp is your memory? Find out now!',
    hasAnswer:false,
    questions:[
      {q:"Listen carefully: Apple, Ball, Cat. Now close your eyes and say all three words back in order.", hint:"Picture each thing as you hear it.", d:"e"},
      {q:"Look around the room for 10 seconds. Then close your eyes. Can you name 3 things you saw that are red or orange?", hint:"Think about walls, objects, and furniture.", d:"e"},
      {q:"Tap the table in this pattern: tap, tap, pause, tap. Now do it again from memory.", hint:"Count the taps and remember the pause.", d:"e"},
      {q:"Here are 3 numbers: 2, 7, 4. Cover them up and say them back in the same order.", hint:"Say them quietly to yourself a few times.", d:"e"},
      {q:"The colours are: Red, Blue, Yellow. Close your eyes and say them back in order.", hint:"Think of something red, something blue, and something yellow.", d:"e"},
      {q:"Do this sequence: clap your hands, stomp your feet, pat your knees. Now repeat it from memory.", hint:"Hands first, then feet, then knees.", d:"e"},
      {q:"Listen to these animal names: Dog, Fish, Bear. Repeat them back in the same order.", hint:"Make a funny picture with all three animals together.", d:"e"},
      {q:"Look at the room for 15 seconds. Close your eyes. How many chairs can you remember seeing?", hint:"Scan the room slowly from left to right.", d:"e"},
      {q:"Here is a colour pattern: Green, Green, Red. Say it back from memory.", hint:"Two of the same colour, then a different one.", d:"e"},
      {q:"Remember these 3 words: Sun, Moon, Star. Now say them backwards: Star, Moon, Sun.", hint:"Start with the last word you heard.", d:"e"},
      {q:"Clap once, then twice, then once. Repeat that clapping pattern from memory.", hint:"Think: one, two-two, one.", d:"e"},
      {q:"These are your 3 words: Hat, Frog, Cup. Say them back in order after counting to 5.", hint:"Make a silly picture to help you remember.", d:"e"},
      {q:"Look around the room. Close your eyes. Try to name one thing that is on the floor.", hint:"Think low — what did you see near the ground?", d:"e"},
      {q:"The number sequence is: 1, 3, 5. Say it back in order.", hint:"These are odd numbers going up.", d:"e"},
      {q:"Do this action sequence: wave hello, point up, nod your head. Repeat it in order.", hint:"Wave, point, nod — say the words as you do them.", d:"e"},
      {q:"Remember: Pink, Orange, Purple. Close your eyes and say those 3 colours in order.", hint:"Think of a pink flamingo, an orange, and a purple grape.", d:"e"},
      {q:"Here are 3 things to remember: Table, Window, Door. Say them back after looking away.", hint:"These are all things you might find in a room.", d:"e"},
      {q:"Listen: Cat, Dog, Bird, Fish. Wait 5 seconds, then say all four animals back in order.", hint:"Picture each animal in a line.", d:"m"},
      {q:"Look around the room for 20 seconds. Close your eyes. Name 5 different objects you can remember seeing.", hint:"Check the walls, floor, ceiling, and furniture.", d:"m"},
      {q:"The number sequence is: 4, 8, 2, 6. Say it back in the same order.", hint:"Try grouping them in pairs: 4-8, then 2-6.", d:"m"},
      {q:"Do this sequence: jump, spin, crouch, clap. Repeat it in the correct order.", hint:"Say each word as you do the action.", d:"m"},
      {q:"Colour pattern: Blue, Red, Blue, Yellow. Cover it and say it back.", hint:"Notice which colour appears twice.", d:"m"},
      {q:"Remember these 5 words: Cake, Train, Cloud, Shoe, River. Repeat them after a slow count to 10.", hint:"Make a story: a cake on a train under a cloud lost a shoe in a river.", d:"m"},
      {q:"Look around the room. Close your eyes. Can you remember what colour the ceiling is and name two things on any table?", hint:"Look up first, then look at any flat surfaces.", d:"m"},
      {q:"Number sequence: 3, 6, 9, 12. Repeat it back, then say what comes next.", hint:"Each number goes up by the same amount.", d:"m"},
      {q:"Action sequence: touch your nose, pull your ear, blink twice, stamp once. Repeat it.", hint:"Nose, ear, blink, stamp — use those words as reminders.", d:"m"},
      {q:"Listen: Monday, Wednesday, Friday, Sunday. Say them back, then name the missing days of the week.", hint:"These are every other day. Which days are skipped?", d:"m"},
      {q:"Look at the room for 15 seconds. Can you remember 3 things that are above your head height?", hint:"Think shelves, lights, curtain rails, tops of doors.", d:"m"},
      {q:"Colour sequence: Red, Yellow, Green, Blue, Red. Cover it and repeat back in full.", hint:"Notice the first and last colours are the same.", d:"m"},
      {q:"Remember: 7 dogs, 3 cats, 5 fish. How many animals are there altogether? Then repeat the list.", hint:"Add the numbers and remember which animal had which number.", d:"m"},
      {q:"Clap this rhythm from memory: clap-clap-pause-clap-pause-clap-clap-clap. Repeat it twice.", hint:"Count the claps carefully: 2, 1, 3.", d:"m"},
      {q:"Here are 4 colours in order: Orange, Blue, Pink, Green. Now say them backwards.", hint:"Start with the last colour you heard.", d:"m"},
      {q:"Look at the room. Close your eyes. Name 3 objects and say what colour each one is.", hint:"Pick objects that have a clear, single colour.", d:"m"},
      {q:"Remember this list: Lion, Spoon, Triangle, Cloud, Book. Repeat it back in order.", hint:"Create a wild picture: a lion eating with a spoon under a triangle-shaped cloud while reading a book.", d:"m"},
      {q:"Number sequence: 5, 10, 15, 20, 25. Repeat it, then say the next two numbers.", hint:"Count up in fives.", d:"m"},
      {q:"Action chain: stand up, turn right, take two steps, clap once, sit down. Repeat the full chain.", hint:"Say each step in your head as you do it.", d:"m"},
      {q:"Remember: Banana, Jupiter, Skateboard, Umbrella, Clock, Ladder. Repeat all six in order.", hint:"Build a silly story linking all six objects together.", d:"h"},
      {q:"Number sequence: 3, 7, 2, 9, 4, 8. Say it back in the same order, then in reverse.", hint:"Repeat it forward first to lock it in, then flip it.", d:"h"},
      {q:"Look around the room for 30 seconds. Close your eyes. Name 8 different objects and say where each one is in the room.", hint:"Scan in zones: left wall, right wall, floor, ceiling.", d:"h"},
      {q:"Colour sequence: Purple, Orange, White, Red, Green, Blue, Yellow. Repeat the full sequence in order.", hint:"Try grouping the 7 colours into a short story or picture.", d:"h"},
      {q:"Listen: Eagle, Trumpet, Blanket, Pyramid, Fossil, Compass. Repeat them back, then say every second word.", hint:"First get all six right, then pick words 2, 4, and 6.", d:"h"},
      {q:"Complex action chain: hop three times, spin left, touch the ground, clap twice, bow, wave right hand. Perform it in order.", hint:"Say each step as a word: hop, spin, touch, clap, bow, wave.", d:"h"},
      {q:"Number sequence: 1, 4, 9, 16, 25. Say them back, then say what the next number in the pattern is.", hint:"These are square numbers. Think 1x1, 2x2, 3x3...", d:"h"},
      {q:"Look at the room for 20 seconds. Close your eyes. Name everything you can remember and sort them by colour group.", hint:"Group objects: all red things, all blue things, and so on.", d:"h"},
      {q:"Remember these pairs: Cat-Blue, Dog-Red, Bird-Green, Fish-Yellow. Repeat each animal with its colour.", hint:"Imagine each animal painted in its matching colour.", d:"h"},
      {q:"Word list: Volcano, Ribbon, Anchor, Lantern, Marble, Feather, Crystal. Repeat in order after 10 seconds.", hint:"Link them in a story to remember the chain.", d:"h"},
      {q:"Number sequence: 2, 3, 5, 8, 13, 21. Say it back, then say the next number.", hint:"Add the two previous numbers together to get the next one.", d:"h"},
      {q:"Rhythm pattern: 3 fast claps, pause, 1 slow clap, pause, 2 fast claps, 1 slow clap. Repeat it twice exactly.", hint:"Count: fast-fast-fast, PAUSE, slow, PAUSE, fast-fast, slow.", d:"h"},
      {q:"Look at the room for 25 seconds. Close your eyes. Name every light source you can remember, and say if each was on or off.", hint:"Look for lamps, windows, screens, and ceiling lights.", d:"h"},
      {q:"Remember: 12 red squares, 7 blue circles, 4 green triangles. Repeat each shape with its number and colour.", hint:"Visualise each group as a pile of coloured shapes.", d:"h"},
      {q:"Listen to this 8-word list: Mirror, Compass, Bottle, Thunder, Ribbon, Candle, Shadow, Flame. Repeat in order.", hint:"Make a mini movie scene using all 8 words.", d:"h"},
      {q:"Mixed sequence: Red, 4, Star, Blue, 7, Circle, Green, 2. Repeat it back, then say only the numbers in order.", hint:"Track numbers separately from colours and shapes as you listen.", d:"h"},
      {q:"Remember these 5 instructions in order: open the door, count to 4, spin once, say your name, sit down. Carry them all out.", hint:"Repeat the list quietly before you start doing the actions.", d:"h"}
    ]
  },

  'emoji-stories': {
    id:'emoji-stories', name:'Emoji Stories',
    category:'Create', color:'#BF360C',
    description:'Decode emoji mysteries and create your own!',
    hasAnswer:true,
    questions:[
      {q:"Decode this fairy tale: [girl] [red hood] [basket] [forest] [big bad wolf] [grandmother house]", hint:"A little girl visits her sick grandma but meets a sneaky animal on the way.", d:"e", a:"Little Red Riding Hood"},
      {q:"Decode this story: [three pigs] [house] [wolf] [blowing] [bricks]", hint:"Three brothers each build a different kind of home.", d:"e", a:"The Three Little Pigs"},
      {q:"Decode this fairy tale: [girl] [glass slipper] [prince] [pumpkin carriage] [midnight clock]", hint:"She dances at a ball but must leave before the clock strikes twelve.", d:"e", a:"Cinderella"},
      {q:"Decode this movie: [toy cowboy] [toy astronaut] [child bedroom] [adventure]", hint:"Two very different toys become best friends.", d:"e", a:"Toy Story"},
      {q:"Decode this fairy tale: [girl] [long hair] [tall tower] [prince] [climbing]", hint:"Her hair is so long it can be used as a ladder.", d:"e", a:"Rapunzel"},
      {q:"Decode this story: [small bear] [big hat] [suitcase] [train station] [sandwich]", hint:"A bear from Peru travels to a big city in England.", d:"e", a:"Paddington Bear"},
      {q:"Decode this movie: [fish] [ocean] [lost] [clownfish dad] [search]", hint:"A father swims across the entire ocean to find his son.", d:"e", a:"Finding Nemo"},
      {q:"Decode this fairy tale: [ugly duck] [pond] [growing up] [beautiful swan]", hint:"A bird who looks different from the others becomes something stunning.", d:"e", a:"The Ugly Duckling"},
      {q:"Decode this movie: [lion cub] [king] [savanna] [circle] [pride rock]", hint:"A young lion must take his place as ruler of the land.", d:"e", a:"The Lion King"},
      {q:"Decode this sport: [round ball] [two teams] [goal net] [kick] [referee whistle]", hint:"The most popular sport in the world, played on a big green field.", d:"e", a:"Soccer (Football)"},
      {q:"Decode this fairy tale: [girl] [apple] [seven small men] [forest cottage] [sleeping]", hint:"She eats a poisoned fruit and falls into a deep sleep.", d:"e", a:"Snow White and the Seven Dwarfs"},
      {q:"Decode this movie: [snowflake] [two sisters] [ice castle] [frozen kingdom] [let it go]", hint:"One sister has magical powers that turn everything to ice.", d:"e", a:"Frozen"},
      {q:"Decode this story: [boy] [pirate ship] [flying] [lost boys] [fairy dust] [never grow up]", hint:"A boy who never ages lives in a magical place and fights a captain with a hook.", d:"e", a:"Peter Pan"},
      {q:"Decode this movie: [yellow minion] [villain] [shrink ray] [three girls] [family]", hint:"A villain adopts three orphan girls and learns to love them.", d:"e", a:"Despicable Me"},
      {q:"Decode this fairy tale: [magic lamp] [genie] [three wishes] [flying carpet] [princess]", hint:"A boy finds a lamp with a magical wish-granting spirit inside.", d:"e", a:"Aladdin"},
      {q:"Decode this story: [boy] [wooden] [nose grows] [puppet] [real boy] [cricket]", hint:"A wooden puppet wants to become a real boy, but he tells lies.", d:"e", a:"Pinocchio"},
      {q:"Decode this movie: [princess] [frog] [kiss] [bayou] [jazz music] [New Orleans]", hint:"A hardworking girl kisses a frog prince in Louisiana.", d:"e", a:"The Princess and the Frog"},
      {q:"Decode this movie: [boy wizard] [lightning bolt scar] [owl] [magic school] [broomstick] [wand]", hint:"An orphan discovers he is famous in the wizarding world.", d:"m", a:"Harry Potter"},
      {q:"Decode this fairy tale: [princess] [pea] [many mattresses] [king and queen] [test]", hint:"A royal family tests whether a visitor is truly of noble birth.", d:"m", a:"The Princess and the Pea"},
      {q:"Decode this sport: [hoop] [round ball] [dribble] [slam dunk] [court] [sneakers]", hint:"Players score by shooting a ball through an elevated ring.", d:"m", a:"Basketball"},
      {q:"Decode this movie: [superhero family] [masks] [living suburb] [secret identity] [baby fire powers]", hint:"A family of hidden superheroes must come out of retirement to save the world.", d:"m", a:"The Incredibles"},
      {q:"Decode this fairy tale: [spinning wheel] [sleeping beauty] [hundred years] [curse] [true love kiss]", hint:"A princess is put under a sleeping curse by an evil fairy.", d:"m", a:"Sleeping Beauty"},
      {q:"Decode this movie: [friendly ghost] [old house] [three uncles] [girl] [friendship]", hint:"A kind ghost makes friends with a girl who moves into a haunted mansion.", d:"m", a:"Casper"},
      {q:"Decode this story: [boy] [jungle] [wolf pack] [bear] [panther] [raised by wolves]", hint:"A human child is raised by animals in the jungle.", d:"m", a:"The Jungle Book"},
      {q:"Decode this sport: [bat] [ball] [diamond field] [pitcher] [home run] [glove]", hint:"Players hit a ball and run around four bases to score.", d:"m", a:"Baseball"},
      {q:"Decode this movie: [robot] [trash planet] [plant] [spaceship] [love story]", hint:"A lonely trash-compacting robot finds a green sprout and falls in love.", d:"m", a:"WALL-E"},
      {q:"Decode this fairy tale: [frog] [prince] [golden ball] [pond] [kiss] [transformation]", hint:"A royal animal asks a princess to keep her promise before turning human.", d:"m", a:"The Frog Prince"},
      {q:"Decode this movie: [jungle] [gorillas] [British boy] [raised by apes] [rope swinging]", hint:"A boy raised by apes meets humans from England for the first time.", d:"m", a:"Tarzan"},
      {q:"Decode this story: [gingerbread man] [running] [fox] [river] [eat] [run run as fast as you can]", hint:"A baked treat runs away from everyone but gets outsmarted by a sly animal.", d:"m", a:"The Gingerbread Man"},
      {q:"Decode this movie: [mermaid] [human world] [crab] [voice] [prince] [red hair]", hint:"A sea princess gives up her voice to be with a human she loves.", d:"m", a:"The Little Mermaid"},
      {q:"Decode this sport: [net] [small green ball] [racket] [grass court] [deuce]", hint:"Players hit a fuzzy ball back and forth over a net using a stringed racket.", d:"m", a:"Tennis"},
      {q:"Decode this fairy tale: [enchanted rose] [beast castle] [girl with books] [spell] [love breaks curse]", hint:"A bookish girl is held in a castle by a fearsome creature who is actually a prince.", d:"m", a:"Beauty and the Beast"},
      {q:"Decode this movie: [blue fish] [short memory] [coral reef] [ocean journey] [pelican]", hint:"A forgetful fish helps a clownfish search across the ocean.", d:"m", a:"Finding Dory"},
      {q:"Decode this movie: [old man] [thousands of balloons] [floating house] [boy scout] [waterfall] [South America]", hint:"An elderly man ties balloons to his house and flies to a far-off waterfall.", d:"h", a:"Up"},
      {q:"Decode this story: [cobbler] [night] [tiny people] [shoes made] [morning surprise]", hint:"A poor shoemaker gets mysterious overnight help from tiny creatures.", d:"h", a:"The Elves and the Shoemaker"},
      {q:"Decode this sport: [ice rink] [puck] [hockey stick] [goalie mask] [fast skating] [penalty box]", hint:"Teams hit a flat disc across ice and try to shoot it past the goalie.", d:"h", a:"Ice Hockey"},
      {q:"Decode this movie: [Iron Man] [green giant] [thunderstorm god] [archer] [black spy] [shield logo] [team]", hint:"A group of very different superheroes must unite to save Earth.", d:"h", a:"The Avengers"},
      {q:"Decode this fairy tale: [brother] [sister] [forest] [breadcrumbs] [candy house] [witch oven]", hint:"Two lost siblings follow a trail of crumbs and find a house made entirely of sweets.", d:"h", a:"Hansel and Gretel"},
      {q:"Decode this movie: [space] [desert planet] [twin suns] [lightsaber] [dark side] [force]", hint:"A farm boy on a sandy planet discovers his destiny as a space warrior.", d:"h", a:"Star Wars: A New Hope"},
      {q:"Decode this sport: [swimming pool] [eight lanes] [flip turn] [stopwatch] [goggles] [gold medal]", hint:"Athletes race through water in different strokes to reach the wall first.", d:"h", a:"Competitive Swimming"},
      {q:"Decode this movie: [young chef rat] [Paris] [fancy restaurant] [cooking pot] [food critic] [anyone can cook]", hint:"A rodent with gourmet taste secretly controls a chef to create amazing dishes.", d:"h", a:"Ratatouille"},
      {q:"Decode this fairy tale: [twelve dancing princesses] [soldier] [underground lake] [silver shoes] [invisible cloak] [secret revealed]", hint:"A clever soldier follows twelve sisters each night to find out where they secretly dance.", d:"h", a:"The Twelve Dancing Princesses"},
      {q:"Decode this movie: [ant colony] [leaf cutter] [circus bugs] [grasshopper villain] [harvest] [stand up]", hint:"A clumsy ant recruits misfit circus insects to help his colony fight back against bullies.", d:"h", a:"A Bug's Life"},
      {q:"Decode this story: [tin woodsman] [scarecrow] [cowardly lion] [yellow brick road] [emerald city] [wizard]", hint:"A girl and her new friends travel a golden road to ask a great wizard for help.", d:"h", a:"The Wizard of Oz"},
      {q:"Decode this sport: [oval track] [baton] [four runners] [hand off] [sprint] [relay exchange zone]", hint:"Four teammates each run part of a race and pass a stick between them.", d:"h", a:"Relay Race"},
      {q:"Decode this movie: [monster world] [doors] [screaming children] [power] [two best monster friends] [scare factory]", hint:"Monsters secretly power their city by collecting children's screams.", d:"h", a:"Monsters, Inc."},
      {q:"Create your own picture story using: [sun] [bicycle] [dog] [park] [ice cream] [happy face]. What happens?", hint:"Think about a fun summer day — who is there and what do they do?", d:"e"},
      {q:"Create your own story with these picture symbols: [rocket] [alien] [moon] [lost] [map] [friendship]. What adventure happens?", hint:"Two very different characters meet far from home — what do they discover together?", d:"m"},
      {q:"Make up a fairy tale using: [magic mirror] [brave knight] [enchanted forest] [hidden treasure] [dragon] [crown]. Tell the story!", hint:"What quest does the knight go on, and what must they overcome to win?", d:"h"},
      {q:"Decode this movie: [wooden puppet strings] [whale] [ocean swallowed] [cricket guide] [blue fairy] [wish]", hint:"A carved wooden figure goes on a dangerous journey inside a whale to find his maker.", d:"m", a:"Pinocchio"},
      {q:"Decode this fairy tale: [emperor] [invisible clothes] [tailors] [parade] [child shouts truth]", hint:"A proud ruler is tricked into wearing nothing at all, and only a child speaks up.", d:"h", a:"The Emperor's New Clothes"},
      {q:"Decode this sport: [white gloves] [boxing ring] [bell] [referee] [left jab] [championship belt]", hint:"Two competitors in padded gloves try to score points by landing punches.", d:"h", a:"Boxing"},
      {q:"Decode this movie: [toy cowboy] [buzz lightyear] [moving day] [pizza truck] [buzz wings] [infinity and beyond]", hint:"Two toy rivals must work together after being left behind during a family move.", d:"m", a:"Toy Story"},
      {q:"Decode this fairy tale: [girl] [porridge] [three bears] [beds] [golden hair] [just right]", hint:"A curious girl enters a house that belongs to a bear family and tries everything out.", d:"e", a:"Goldilocks and the Three Bears"}
    ]
  },

  'science-fun': {
    id:'science-fun', name:'Science Fun',
    category:'Think', color:'#1B5E20',
    description:'Discover the amazing science hiding around you!',
    hasAnswer:true,
    questions:[
      {q:"What is the closest star to Earth?", hint:"It gives us light and warmth every day.", d:"e", a:"The Sun"},
      {q:"How many planets are in our solar system?", hint:"Count from Mercury all the way out to Neptune.", d:"e", a:"8"},
      {q:"What gas do we breathe in to stay alive?", hint:"It makes up about 21 percent of the air around us.", d:"e", a:"Oxygen"},
      {q:"What do we call the bones inside our body?", hint:"They are hard and white, and they hold us up.", d:"e", a:"The skeleton"},
      {q:"What is frozen water called?", hint:"You find it in your freezer or at a skating rink.", d:"e", a:"Ice"},
      {q:"What part of a plant soaks up water from the soil?", hint:"It grows underground and holds the plant in place.", d:"e", a:"The roots"},
      {q:"Which planet is known as the Red Planet?", hint:"It is the fourth planet from the Sun.", d:"e", a:"Mars"},
      {q:"What do caterpillars turn into?", hint:"They sleep inside a cocoon or chrysalis first.", d:"e", a:"Butterflies or moths"},
      {q:"What falls from clouds during a rainstorm?", hint:"It fills rivers, puddles, and ponds.", d:"e", a:"Rain"},
      {q:"What is the name of the force that pulls things toward the ground?", hint:"It is why a dropped ball always falls down.", d:"e", a:"Gravity"},
      {q:"What color is a healthy plant's leaves?", hint:"It comes from a pigment called chlorophyll.", d:"e", a:"Green"},
      {q:"How many legs does an insect have?", hint:"Count the legs on a butterfly or an ant.", d:"e", a:"6"},
      {q:"What is the center of our solar system?", hint:"Every planet travels around it.", d:"e", a:"The Sun"},
      {q:"Which is the largest planet in our solar system?", hint:"It has a big red storm spot on its surface.", d:"e", a:"Jupiter"},
      {q:"What organ pumps blood around your body?", hint:"You can feel it beating in your chest.", d:"e", a:"The heart"},
      {q:"What do we call water that falls as tiny white flakes in winter?", hint:"Each flake has a unique six-sided shape.", d:"e", a:"Snow"},
      {q:"What simple machine is a ramp or sloped surface?", hint:"It helps you move heavy things up without lifting straight up.", d:"e", a:"An inclined plane"},
      {q:"What are the three states of matter?", hint:"Think of ice, water, and steam — they are all the same substance.", d:"m", a:"Solid, liquid, and gas"},
      {q:"What is the name of Earth's only natural satellite?", hint:"It orbits our planet and lights up the night sky.", d:"m", a:"The Moon"},
      {q:"What gas do plants take in from the air to make food?", hint:"Humans breathe it out, and plants breathe it in.", d:"m", a:"Carbon dioxide"},
      {q:"What do we call the layer of air surrounding Earth?", hint:"It protects us from the Sun's harmful rays.", d:"m", a:"The atmosphere"},
      {q:"What organ in your body helps you think and controls everything you do?", hint:"It is protected inside your skull.", d:"m", a:"The brain"},
      {q:"What is the process by which plants make food using sunlight?", hint:"The word contains 'photo', meaning light.", d:"m", a:"Photosynthesis"},
      {q:"What type of animal is warm-blooded and feeds its young with milk?", hint:"Humans, dogs, and whales all belong to this group.", d:"m", a:"A mammal"},
      {q:"Which planet has a ring system most famous for being visible from Earth?", hint:"It is the sixth planet from the Sun.", d:"m", a:"Saturn"},
      {q:"What do we call a scientist who studies weather?", hint:"They appear on TV to tell us if it will rain tomorrow.", d:"m", a:"A meteorologist"},
      {q:"What is the name for the path a planet takes around the Sun?", hint:"It is shaped like a stretched circle.", d:"m", a:"An orbit"},
      {q:"What is the chemical symbol for water?", hint:"It contains two hydrogen atoms and one oxygen atom.", d:"m", a:"H2O"},
      {q:"What do we call the very top layer of Earth where plants grow?", hint:"Worms and insects live in it.", d:"m", a:"Soil or topsoil"},
      {q:"What is a lever?", hint:"A seesaw in a playground is a classic example.", d:"m", a:"A simple machine that uses a bar and a pivot point to lift or move things"},
      {q:"What causes thunder during a storm?", hint:"It happens because lightning heats the air so fast it expands rapidly.", d:"m", a:"The rapid expansion of air heated by lightning"},
      {q:"What is electricity made of moving through a wire?", hint:"These tiny particles carry a negative charge.", d:"m", a:"Electrons"},
      {q:"What is the name for an animal that eats only plants?", hint:"Rabbits, cows, and deer are all examples.", d:"m", a:"Herbivore"},
      {q:"How long does Earth take to orbit the Sun once?", hint:"This is why we have 365 days in a year.", d:"m", a:"One year (about 365 days)"},
      {q:"What are clouds made of?", hint:"They are not made of cotton or smoke.", d:"m", a:"Tiny droplets of water or ice crystals"},
      {q:"What does DNA stand for?", hint:"It is the molecule that carries the instructions for life inside your cells.", d:"h", a:"Deoxyribonucleic acid"},
      {q:"What is the term for the change of a liquid into a gas by heating it?", hint:"You see this when a puddle disappears on a sunny day.", d:"h", a:"Evaporation"},
      {q:"What is the name of the galaxy that contains our solar system?", hint:"On a clear night you can see its faint band across the sky.", d:"h", a:"The Milky Way"},
      {q:"What is the smallest unit of a living organism that can carry out life functions?", hint:"All living things are made of one or more of these.", d:"h", a:"A cell"},
      {q:"What force opposes motion between two surfaces that are touching?", hint:"It is why sliding on rough pavement slows you down faster than ice.", d:"h", a:"Friction"},
      {q:"What type of rock is formed when magma cools and hardens?", hint:"Granite and basalt are well-known examples.", d:"h", a:"Igneous rock"},
      {q:"What is the name of the process by which water vapor cools and turns back into liquid water?", hint:"It is the opposite of evaporation and forms dew or clouds.", d:"h", a:"Condensation"},
      {q:"Which planet rotates on its side so its axis points almost directly at the Sun?", hint:"It is the seventh planet from the Sun and is pale blue-green.", d:"h", a:"Uranus"},
      {q:"What is the powerhouse of the animal cell where energy is produced?", hint:"Its name sounds like a tiny rice-grain shaped structure.", d:"h", a:"The mitochondria"},
      {q:"What is the term for an animal that can regulate its own body temperature internally?", hint:"Birds and mammals are examples; reptiles are not.", d:"h", a:"Endothermic or warm-blooded"},
      {q:"What is an electrical circuit that has only one path for current to flow?", hint:"If one bulb goes out, all the others go out too.", d:"h", a:"A series circuit"},
      {q:"What is the name of the outermost layer of the Sun that is visible during a total solar eclipse?", hint:"It appears as a glowing halo of white light.", d:"h", a:"The corona"},
      {q:"What is the bending of light as it passes from one material into another?", hint:"It is why a straw looks bent when it sits in a glass of water.", d:"h", a:"Refraction"},
      {q:"What is the term for the preserved remains or traces of ancient living things found in rock?", hint:"Paleontologists dig up dinosaur versions of these.", d:"h", a:"Fossils"},
      {q:"What is the process called when a solid changes directly into a gas without becoming liquid first?", hint:"Dry ice does this at room temperature.", d:"h", a:"Sublimation"},
      {q:"What is the part of the plant where seeds are made and fruits develop?", hint:"Bees visit them to collect pollen.", d:"h", a:"The flower"},
      {q:"What do we call the measure of how much matter is in an object?", hint:"It stays the same whether you are on Earth or on the Moon.", d:"h", a:"Mass"},
      {q:"What is the name of the scale used to measure the strength of earthquakes?", hint:"A reading of 2.0 is barely felt; a reading of 8.0 causes massive destruction.", d:"h", a:"The Richter scale"}
    ]
  },

  'nature-detectives': {
    id:'nature-detectives', name:'Nature Detectives',
    category:'Together', color:'#004D40',
    description:'Explore nature and become a wildlife expert!',
    hasAnswer:true,
    questions:[
      {q:"What do caterpillars turn into?", hint:"They wrap themselves in a cocoon first.", d:"e", a:"Butterflies or moths"},
      {q:"What color is a polar bear's fur?", hint:"Think about how it blends in with snow.", d:"e", a:"White"},
      {q:"Which animal is known for its very long neck?", hint:"It lives in Africa and eats leaves from tall trees.", d:"e", a:"Giraffe"},
      {q:"What do bees collect from flowers to make honey?", hint:"It is a sweet liquid found inside flowers.", d:"e", a:"Nectar"},
      {q:"What is a baby frog called before it grows legs?", hint:"It lives in water and has a tail.", d:"e", a:"Tadpole"},
      {q:"Which bird cannot fly but is an excellent swimmer?", hint:"It lives in cold places and has black and white feathers.", d:"e", a:"Penguin"},
      {q:"What do plants need from the sun to make food?", hint:"Without it, plants turn yellow and weak.", d:"e", a:"Light (sunlight)"},
      {q:"What do we call an animal that eats only plants?", hint:"Cows, rabbits, and deer are examples.", d:"e", a:"Herbivore"},
      {q:"Which large, striped cat is the biggest in the world?", hint:"It lives in Asia and loves to swim.", d:"e", a:"Tiger"},
      {q:"Where do fish breathe from?", hint:"These are on the sides of a fish's head.", d:"e", a:"Gills"},
      {q:"What season do bears usually hibernate?", hint:"It is the coldest season of the year.", d:"e", a:"Winter"},
      {q:"Which ocean animal has eight arms?", hint:"It can squirt ink to escape enemies.", d:"e", a:"Octopus"},
      {q:"What do we call the home a bird builds for its eggs?", hint:"It is often made from twigs and grass.", d:"e", a:"Nest"},
      {q:"Which plant traps and eats insects?", hint:"Its name sounds like it belongs to a planet.", d:"e", a:"Venus flytrap"},
      {q:"What is the fastest land animal on Earth?", hint:"It has spots and can run over 100 km per hour.", d:"e", a:"Cheetah"},
      {q:"What type of habitat is very hot, dry, and sandy?", hint:"Camels live here and it barely ever rains.", d:"e", a:"Desert"},
      {q:"What color do leaves often turn in autumn?", hint:"Think of orange, red, and yellow.", d:"e", a:"Orange, red, and yellow"},
      {q:"Which animal uses its trunk to drink water?", hint:"It is the largest land animal on Earth.", d:"e", a:"Elephant"},
      {q:"What do we call animals that are active at night?", hint:"Owls and bats are examples of these creatures.", d:"m", a:"Nocturnal animals"},
      {q:"Which rainforest layer gets the most sunlight?", hint:"It is the very top layer where the tallest trees poke through.", d:"m", a:"The emergent layer"},
      {q:"What special trick does a chameleon use to hide from predators?", hint:"It involves matching the colors around it.", d:"m", a:"Camouflage (changing color)"},
      {q:"What is the name of the process by which plants make their own food?", hint:"It uses sunlight, water, and carbon dioxide.", d:"m", a:"Photosynthesis"},
      {q:"What do we call an animal that eats both plants and meat?", hint:"Bears and humans are examples.", d:"m", a:"Omnivore"},
      {q:"How do dolphins communicate with each other?", hint:"They make clicking and whistling sounds underwater.", d:"m", a:"Through clicks, whistles, and echolocation"},
      {q:"What is the name of the sandy hills formed by wind in a desert?", hint:"They shift and move over time.", d:"m", a:"Sand dunes"},
      {q:"Which insect pollinates flowers and lives in a hive?", hint:"It makes a sweet food we spread on toast.", d:"m", a:"Honey bee"},
      {q:"What do we call the animals that eat the predators at the very top of a food chain?", hint:"Nothing hunts them — they are at the very peak.", d:"m", a:"Apex predators"},
      {q:"Why do arctic foxes change their fur color with the seasons?", hint:"In winter the land is white; in summer it is brown.", d:"m", a:"To camouflage with the changing environment"},
      {q:"What is the largest rainforest in the world?", hint:"It is in South America and named after a famous river.", d:"m", a:"The Amazon Rainforest"},
      {q:"What do we call it when a species dies out completely forever?", hint:"Dinosaurs are the most famous example.", d:"m", a:"Extinction"},
      {q:"What is the hard outer shell of a crab or lobster called?", hint:"It works like armor to protect them.", d:"m", a:"Exoskeleton"},
      {q:"Which African animal is the tallest in the world?", hint:"It uses its height to reach leaves at the tops of trees.", d:"m", a:"Giraffe"},
      {q:"What do migratory birds do in winter?", hint:"They fly very long distances to find warmer places.", d:"m", a:"They migrate to warmer regions"},
      {q:"What is a group of wolves called?", hint:"They hunt together and care for each other in this group.", d:"m", a:"A pack"},
      {q:"Which ocean is the largest on Earth?", hint:"It covers about one third of the planet's surface.", d:"m", a:"The Pacific Ocean"},
      {q:"What special feature helps a cactus survive in the desert without much water?", hint:"It stores water inside its thick, fleshy body.", d:"m", a:"Thick stem that stores water"},
      {q:"What is the term for an animal that hunts other animals for food?", hint:"Lions and sharks are famous examples.", d:"m", a:"Predator"},
      {q:"What percentage of Earth's surface is covered by ocean?", hint:"It is more than two thirds of the planet.", d:"h", a:"About 71 percent"},
      {q:"What is symbiosis in nature?", hint:"Think of clownfish living safely among sea anemone tentacles.", d:"h", a:"A close relationship between two different species that benefits one or both"},
      {q:"Which gas do plants release into the air during photosynthesis?", hint:"Humans and animals need to breathe this gas to survive.", d:"h", a:"Oxygen"},
      {q:"How does a Venus flytrap digest insects after trapping them?", hint:"It uses special liquids, like a stomach outside its body.", d:"h", a:"It secretes digestive enzymes to break down the insect"},
      {q:"What is the name of the zone in the ocean where no sunlight reaches?", hint:"Strange glowing creatures live in this dark, deep place.", d:"h", a:"The midnight zone (aphotic zone)"},
      {q:"What process do salmon use to find their way back to the river where they were born?", hint:"They detect something in the water using a very sharp sense.", d:"h", a:"They use their sense of smell to detect the unique chemical signature of their home river"},
      {q:"What is the scientific term for animals that regulate their body temperature using the environment?", hint:"Reptiles are the most familiar example.", d:"h", a:"Ectotherms (cold-blooded animals)"},
      {q:"Which biome stores the most carbon on land and is called the lungs of the Earth?", hint:"It is dense, wet, and home to half of all species on Earth.", d:"h", a:"Tropical rainforest"},
      {q:"What is the mutualistic relationship between bees and flowers called?", hint:"Both species benefit — one gets food, the other gets reproduced.", d:"h", a:"Mutualism (specifically pollination mutualism)"},
      {q:"What is the difference between a food web and a food chain?", hint:"One is a single straight line; the other shows many connected paths.", d:"h", a:"A food chain is a single sequence of who eats whom; a food web shows all the interconnected feeding relationships in an ecosystem"},
      {q:"Why do some deep-sea fish produce their own light?", hint:"It helps them in a place where sunlight never reaches.", d:"h", a:"To attract prey, find mates, or communicate in the darkness (bioluminescence)"},
      {q:"What adaptation allows camels to survive long periods without water in the desert?", hint:"It is not stored in their humps — look closer at what the humps actually store.", d:"h", a:"Camels store fat in their humps for energy; they conserve water through efficient kidneys and can tolerate body temperature swings"},
      {q:"What is a keystone species and can you name one example?", hint:"If this one species disappears, the whole ecosystem can collapse.", d:"h", a:"A keystone species has an outsized effect on its ecosystem relative to its abundance; an example is the sea otter, which controls sea urchin populations to protect kelp forests"},
      {q:"What is the term for the layer of gases surrounding Earth that keeps it warm?", hint:"Without it, Earth would be too cold for life.", d:"h", a:"The atmosphere"},
      {q:"What do we call a sea creature with a hard shell that walks sideways?", hint:"It has claws and lives near the ocean shore.", d:"e", a:"Crab"},
      {q:"Name an animal that can change its color to match its surroundings.", hint:"It lives in the ocean and has no bones.", d:"m", a:"Octopus or cuttlefish"}
    ]
  },

  'build-a-story': {
    id:'build-a-story', name:'Build a Story',
    category:'Create', color:'#4A148C',
    description:'Create incredible stories together!',
    hasAnswer:false,
    questions:[
      {q:"Start a story: 'One morning, a tiny dragon knocked on my front door and said...'", hint:"Think about what a dragon might want or need from a person.", d:"e"},
      {q:"Continue this story one word at a time with your partner. Begin with the word: 'Suddenly...'", hint:"Take turns adding one word each to build something surprising.", d:"e"},
      {q:"Tell a story about a talking sandwich who goes on an adventure. Where does it go?", hint:"Sandwiches might worry about being eaten — let that inspire your story!", d:"e"},
      {q:"Start a story using only sounds: 'CRASH! SPLAT! ZOOM!' What just happened?", hint:"Imagine a wild scene from just those three sound effects.", d:"e"},
      {q:"A bunny finds a magic carrot. What happens when it takes a bite?", hint:"Magic can go in funny or surprising directions — be creative!", d:"e"},
      {q:"Tell a story about a cloud that falls down from the sky. What does it do on the ground?", hint:"Think about what a fluffy, floaty cloud might find strange about the ground.", d:"e"},
      {q:"Use these 3 words in a short story: 'balloon,' 'mud,' 'giggle.'", hint:"Try to connect all three words in one silly scene.", d:"e"},
      {q:"Continue this story: 'The toy bear blinked its eyes, looked around, and whispered...'", hint:"Toys that come alive often have big feelings — what might it say first?", d:"e"},
      {q:"Tell a two-sentence rhyming story about a frog who loses his jump.", hint:"Try ending both sentences with rhyming words like 'hop' and 'stop.'", d:"e"},
      {q:"A fish learns to climb trees. Tell the story of its very first try.", hint:"Think about what would be hard or funny about a fish doing something so un-fishy.", d:"e"},
      {q:"Make up a story about a superhero whose only power is being very, very good at stacking things.", hint:"How could stacking things actually save the day?", d:"e"},
      {q:"Start a story: 'The pizza arrived, but it was moving all by itself...'", hint:"Where might a living pizza try to go, and why?", d:"e"},
      {q:"Tell a short story that starts at bedtime and ends at breakfast, but go BACKWARDS.", hint:"Start with 'Good morning!' and work your way back to 'Good night!'", d:"e"},
      {q:"Your pet dog suddenly starts speaking perfect English. What is the very first thing it says?", hint:"Think about what a dog notices every single day that a person might not.", d:"e"},
      {q:"Use these words to tell a story: 'sock,' 'rainbow,' 'sneeze.'", hint:"Could the sneeze cause the rainbow? Could the sock start it all?", d:"e"},
      {q:"Continue this story: 'The smallest kid in school had the biggest secret...'", hint:"Think of a surprising, happy secret that changes everything.", d:"e"},
      {q:"Tell a rhyming story in four lines about a cat who wants to fly.", hint:"Try a pattern like: cat / hat / sky / fly for your rhymes.", d:"e"},
      {q:"Tell a story backwards: A dragon is friends with a knight. Work backwards from how they first met.", hint:"Start with them being best friends and go back to the awkward first moment.", d:"m"},
      {q:"Build a story one sentence at a time, alternating with your partner. First sentence: 'The map had only one word on it: RUN.'", hint:"Each person adds one sentence — keep the tension going!", d:"m"},
      {q:"Use these 3 words in a story: 'inventor,' 'thunderstorm,' 'missing glove.'", hint:"What could an inventor be trying to build, and why does the glove matter?", d:"m"},
      {q:"Continue this story: 'Every night the moon would dip closer and closer to Earth, until one night it landed in our backyard.'", hint:"What does the moon need? What would it look like up close?", d:"m"},
      {q:"Tell a story entirely in questions. Every single sentence must be a question.", hint:"For example: 'What was that noise? Was someone there? Could it be...'", d:"m"},
      {q:"Create a story where the hero has to solve a problem without using their hands.", hint:"Think creatively — what tools could you use instead?", d:"m"},
      {q:"Tell a story about two siblings who disagree on everything but must work together to bake a cake.", hint:"The conflict and the cooperation are both part of the story.", d:"m"},
      {q:"Use these words in a rhyming story of at least 4 lines: 'night,' 'light,' 'afraid,' 'brave.'", hint:"Pair 'night' with 'light' and 'afraid' with 'brave' for a natural structure.", d:"m"},
      {q:"Start a backwards story: End with a child finding a secret door. Tell the story in reverse from that moment.", hint:"What clues or events could have led up to finding that door?", d:"m"},
      {q:"A robot escapes from a museum. Tell the story from the robot's point of view.", hint:"What does the robot think about humans? What does freedom feel like to it?", d:"m"},
      {q:"Use only dialogue — no descriptions — to tell a short story about two people stuck in an elevator.", hint:"Show everything through what they say to each other.", d:"m"},
      {q:"Continue this story: 'The librarian shelved the last book and then heard a knock from inside the wall.'", hint:"Old libraries are full of secrets — what or who could be knocking?", d:"m"},
      {q:"Tell a story using exactly 10 sentences — no more, no fewer.", hint:"Plan your beginning, middle, and end so you hit exactly 10.", d:"m"},
      {q:"Create a story where every character is named after a type of weather.", hint:"Names like 'Misty,' 'Gale,' 'Sunny,' or 'Hail' could all be characters.", d:"m"},
      {q:"Use these 3 words in a story: 'lantern,' 'footprints,' 'laughter.'", hint:"What kind of story has all three? A mystery? A celebration? Both?", d:"m"},
      {q:"Tell the story of the world's worst day, but make it funny instead of sad.", hint:"Everything goes wrong — but the worse it gets, the funnier it becomes.", d:"m"},
      {q:"Build a story one word at a time with your partner. The story must involve a journey. Start with: 'Once...'", hint:"Keep the story moving forward — where is the character going?", d:"m"},
      {q:"Tell a story about a child who discovers that their reflection has been living a completely different life.", hint:"What choices did the reflection make that the child did not?", d:"h"},
      {q:"Write a story told entirely from the perspective of an ordinary object that witnesses something extraordinary.", hint:"A chair, a lamp, or a pencil could all have very strong opinions about what they see.", d:"h"},
      {q:"Use these 3 words in a story that has a twist ending: 'compass,' 'photograph,' 'apology.'", hint:"Plant clues early so the twist feels surprising but fair.", d:"h"},
      {q:"Tell a story backwards, starting with the last line: 'And that is why no one ever opened that drawer again.'", hint:"Work your way back — what was in the drawer, and how did things escalate?", d:"h"},
      {q:"Create a story in which every paragraph begins with the next letter of the alphabet. Start with A.", hint:"Plan what each paragraph will cover so the story flows despite the constraint.", d:"h"},
      {q:"Tell a story about a town where everyone wakes up one day having swapped memories with a stranger.", hint:"Explore how one character handles knowing someone else's deepest experiences.", d:"h"},
      {q:"Use these words in a story with exactly three acts: 'inheritance,' 'broken clock,' 'a letter never sent.'", hint:"Act 1: introduce, Act 2: complicate, Act 3: resolve — use all three words across the acts.", d:"h"},
      {q:"Tell a story in which the villain genuinely believes they are the hero. Write it from their point of view.", hint:"What past event convinced them they were right? Make it believable.", d:"h"},
      {q:"Build a story one sentence at a time with your partner, but each new sentence must contradict something in the previous one.", hint:"Keep the contradictions surprising but try to still build a coherent ending.", d:"h"},
      {q:"Write a rhyming story of at least 8 lines about a scientist who invents a machine that translates animal thoughts.", hint:"Use a consistent rhyme scheme like AABB and let the animal dialogue drive the humor or drama.", d:"h"},
      {q:"Tell a story that takes place entirely within a single minute, but feels like a lifetime.", hint:"Slow time down with rich detail — what is happening and why does it matter so much?", d:"h"},
      {q:"Continue this story: 'The last lighthouse keeper received a distress signal — from the bottom of the ocean.'", hint:"What is down there, and why did they reach out to this specific lighthouse?", d:"h"},
      {q:"Use these 3 words to write a story that is both funny and a little bit spooky: 'inheritance,' 'giggling,' 'empty chair.'", hint:"Balance the humor and the eeriness — neither should cancel the other out.", d:"h"},
      {q:"Tell a story in which the setting is itself a character — it makes choices and drives the plot.", hint:"A forest, a house, or a city can have wants, moods, and motives of its own.", d:"h"},
      {q:"Write a story backwards from this final scene: 'She placed the last puzzle piece down, but the picture it revealed was not the one on the box.'", hint:"What was the puzzle, who made it, and how long had the truth been hiding in plain sight?", d:"h"},
      {q:"Tell a story using only the five senses to describe what is happening — no character names, no dialogue.", hint:"Let the reader figure out who and what through smell, sound, touch, taste, and sight alone.", d:"h"},
      {q:"Create a story in which two characters argue over how a shared memory happened. Both are telling the truth.", hint:"Memory is unreliable — what details does each person notice that the other missed?", d:"h"},
      {q:"Tell a story that starts happy, becomes sad in the middle, and ends with unexpected joy — all in under 15 sentences.", hint:"Map out the emotional arc before you start so each turn feels earned.", d:"h"}
    ]
  },

  'mystery-box': {
    id:'mystery-box', name:'Mystery Box',
    category:'Think', color:'#880E4F',
    description:'Solve mysteries using clever thinking and clues!',
    hasAnswer:true,
    questions:[
      {q:"I have hands but cannot clap. I have a face but no eyes. I tell you something important every day. What am I?", hint:"You check me when you need to know the time.", d:"e", a:"A clock"},
      {q:"I am full of keys but have no locks. I have space but no room. You can enter but cannot go inside. What am I?", hint:"You use me to type words and numbers.", d:"e", a:"A keyboard"},
      {q:"I go up but never come down. You cannot touch me but you feel me growing. What am I?", hint:"Think about something that increases every year on your birthday.", d:"e", a:"Your age"},
      {q:"I have a tail and a head but no body. I am not alive but I get tossed around. What am I?", hint:"You might flip me to make a decision.", d:"e", a:"A coin"},
      {q:"The more you take, the more you leave behind. What am I?", hint:"Look down at the ground when you walk outside.", d:"e", a:"Footsteps"},
      {q:"I am light as a feather but even the strongest person cannot hold me for more than a few minutes. What am I?", hint:"Every living thing needs me to survive, but you cannot see me.", d:"e", a:"Breath"},
      {q:"I have a neck but no head, two arms but no hands. What am I?", hint:"You might find me hanging in a closet.", d:"e", a:"A shirt"},
      {q:"I come down but never go up. I make plants grow and puddles form. What am I?", hint:"Look outside on a cloudy day.", d:"e", a:"Rain"},
      {q:"I shrink every time you use me. I am waxy and colorful. Artists love me. What am I?", hint:"Kids use me to draw pictures, and I come in a box.", d:"e", a:"A crayon"},
      {q:"I have four legs but cannot walk. You sit on me every day. What am I?", hint:"You pull me out from under a table.", d:"e", a:"A chair"},
      {q:"I bark but have no mouth. I stand tall but have no legs. I am found in the forest. What am I?", hint:"Animals climb me and birds nest in me.", d:"e", a:"A tree"},
      {q:"I have teeth but never bite. I help keep things neat and tidy. What am I?", hint:"You run me through your hair in the morning.", d:"e", a:"A comb"},
      {q:"I am always in front of you but cannot be seen. What am I?", hint:"Think about what has not happened yet.", d:"e", a:"The future"},
      {q:"I run around the whole yard without moving a single step. What am I?", hint:"I keep things inside and outside separate.", d:"e", a:"A fence"},
      {q:"I can fly without wings and cry without eyes. When I appear the sky gets dark. What am I?", hint:"I bring rain and sometimes thunder.", d:"e", a:"A cloud"},
      {q:"What has one eye but cannot see?", hint:"You use me when sewing clothes or fixing a button.", d:"e", a:"A needle"},
      {q:"I can be cracked, made, told, and played. What am I?", hint:"You tell me to make someone laugh.", d:"e", a:"A joke"},
      {q:"I am always hungry and must always be fed. Touch me and I will turn red. What am I?", hint:"Be very careful around me. I warm your home but I can burn you.", d:"e", a:"Fire"},
      {q:"If today is Wednesday and the day after tomorrow is Friday, what day is yesterday?", hint:"Count the days carefully on your fingers starting from today.", d:"e", a:"Tuesday"},
      {q:"I have no wings but I fly. I have no feet but I travel. I carry your words around the world. What am I?", hint:"You write me on a computer and press send.", d:"e", a:"An email"},
      {q:"Think of 5 words: piano, keys, lock, music, notes. What one word connects all of them?", hint:"A piano has 88 of these, and so does a door to your house.", d:"m", a:"Keys"},
      {q:"Decode this: each letter is shifted one step forward in the alphabet. What does BQQMF mean?", hint:"A stands for B, so B becomes... work backwards one step on each letter.", d:"m", a:"Apple"},
      {q:"A man walks into a room with no doors or windows. How did he get in?", hint:"Think carefully about what the puzzle says — and what it does NOT say.", d:"m", a:"He walked in before the doors and windows were removed"},
      {q:"What 5 things share this connection: Mars, Snickers, Milky Way, Bounty, Twix?", hint:"Look up at night and think about space — but also check a sweet shop.", d:"m", a:"They are all chocolate bar brands"},
      {q:"A farmer has 17 sheep. All but 9 run away. How many sheep does the farmer have left?", hint:"Read the clue very carefully — especially the phrase 'all but.'", d:"m", a:"9"},
      {q:"Crack this number code: 1=3, 2=3, 3=5, 4=4, 5=4. What is 6?", hint:"Count the letters in the word for each number.", d:"m", a:"3"},
      {q:"Five friends stand in a line: Ada is not first. Ben is behind Cara. Cara is first. Dan is behind Ada. Eve is last. Who is second?", hint:"Start with Cara in position 1 and place each person using the clues.", d:"m", a:"Ada"},
      {q:"Think of 5 things: stamp, envelope, post office, address, delivery. What mystery word connects them all?", hint:"Before email existed, people sent these to communicate.", d:"m", a:"Letter"},
      {q:"I am taken from a mine and locked in a wooden case. Everyone uses me but I am never released. What am I?", hint:"Writers and artists use me every day.", d:"m", a:"Pencil lead (graphite)"},
      {q:"Replace each number with its letter: 20-5-1. What word do you get?", hint:"A=1, B=2, C=3... so 20 is a letter near the end of the alphabet.", d:"m", a:"Tea"},
      {q:"A rooster lays an egg on the very top of a pointed roof. Which way does the egg roll?", hint:"Think carefully about what a rooster actually is.", d:"m", a:"Roosters do not lay eggs"},
      {q:"What connects: calendar, road, map, piano, ruler?", hint:"Every one of these things has a specific kind of these running across it.", d:"m", a:"Lines"},
      {q:"I speak without a mouth and hear without ears. I have no body but I come alive with the wind. What am I?", hint:"Stand near a canyon or an empty tunnel and call out loud.", d:"m", a:"An echo"},
      {q:"Two mothers and two daughters go fishing. They catch exactly three fish — one each. How is that possible?", hint:"Think about how three people could be both mothers and daughters at the same time.", d:"m", a:"There are only three people: a grandmother, mother, and daughter"},
      {q:"What connects: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune?", hint:"Look up on a clear night — or open a science textbook.", d:"m", a:"They are all planets in our solar system"},
      {q:"What do ocean, music, and a radio all have in common?", hint:"Think about what travels through all three as invisible ripples.", d:"m", a:"Waves"},
      {q:"What connects: Shakespeare, Dickens, Rowling, Dahl, Tolkien?", hint:"They all created beloved stories, characters, and worlds.", d:"m", a:"They are all famous authors"},
      {q:"A boy is looking at a photo. He says the person in the photo has no brothers or sisters but the person's father is my father's son. Who is in the photo?", hint:"Work out who my father's son would be if that person has no siblings.", d:"h", a:"The boy himself"},
      {q:"Decode: QBTTXPSE using a Caesar shift of 1. What does it say?", hint:"Each letter in the code is one step ahead of the real letter. Shift each one back by one.", d:"h", a:"Password"},
      {q:"Three boxes are labeled APPLES, ORANGES, and APPLES AND ORANGES. All labels are wrong. You can pick one fruit from one box. Which box do you pick from to identify all boxes?", hint:"Since every label is wrong, the APPLES AND ORANGES box cannot contain a mix. Start there.", d:"h", a:"Pick from the box labeled APPLES AND ORANGES"},
      {q:"A is the mother of B. B is the father of C. C is the sister of D. What is A to D?", hint:"Work through each relationship one step at a time.", d:"h", a:"Grandmother"},
      {q:"Crack the pattern: 1, 1, 2, 3, 5, 8, 13, ___. What comes next?", hint:"Each number is the sum of the two numbers before it.", d:"h", a:"21"},
      {q:"What 5-letter word becomes shorter when you add two letters to it?", hint:"Think about the meaning of the word short itself.", d:"h", a:"Short"},
      {q:"Decode this message using the phone keypad: 4-6-6-3. On a phone, 4=GHI, 6=MNO, 3=DEF. What word is it?", hint:"Each number maps to one of three letters. The word uses the second letter on each key.", d:"h", a:"Home"},
      {q:"What connects: Amazon, Nile, Thames, Mississippi, Yangtze?", hint:"They flow through different countries and empty into the sea.", d:"h", a:"They are all rivers"},
      {q:"I have cities but no houses. I have mountains but no trees. I have water but no fish. I have roads but no cars. What am I?", hint:"You use me to find your way from one place to another.", d:"h", a:"A map"},
      {q:"What single three-letter word can be placed in front of HOUSE, YARD, WORK, and PLAY to make four new words?", hint:"Think of a place outside where children have fun.", d:"h", a:"Out"},
      {q:"Crack this: if FISH = 6914 and DISH = 4914, what does WISH equal?", hint:"Each letter always maps to the same digit. Find the digit for W.", d:"h", a:"2914"},
      {q:"A clock is set correctly at noon. It gains 15 minutes every hour. When the clock shows 3:00 PM, what is the real time?", hint:"Each real hour, the clock shows 75 minutes. Work out how many real hours equal 3 hours on the fast clock.", d:"h", a:"2:24 PM"},
      {q:"What word is spelled the same forwards and backwards and means a midday rest?", hint:"Some people in warm countries take one of these after lunch.", d:"m", a:"Noon"},
      {q:"Five people each own one pet. The bird owner is at the end. The cat is next to the dog. The order is: bird, cat, dog, fish, rabbit. Who is next to the fish owner?", hint:"Write out the order and check who sits at position 3 and position 5.", d:"h", a:"The dog owner and the rabbit owner"},
      {q:"I have no voice, yet I speak to you. I tell of all things in the world that people do. I have leaves but am not a tree. What am I?", hint:"Something with 'leaves' that tells you stories and knowledge without making a sound.", d:"e", a:"A book"},
      {q:"Find the connection: Sleeping Beauty, Bluebeard, Little Red Riding Hood, Anne of Green Gables. One thing ties them all. What is it?", hint:"Each title hides a color name inside it.", d:"h", a:"They all contain a color"}
    ]
  },

  'superpower-challenges': {
    id:'superpower-challenges', name:'Superpower Challenges',
    category:'Together', color:'#E65100',
    description:'Unleash your creativity with super-powered challenges!',
    hasAnswer:false,
    questions:[
      {q:"If you could fly, where would you go first and why?", hint:"Think of your favorite place in the whole world!", d:"e"},
      {q:"You can talk to animals for one day. What is the first animal you talk to and what do you ask?", hint:"Pick an animal you have always wondered about.", d:"e"},
      {q:"You have the power to make it rain any food from the sky. What food do you choose?", hint:"Pick something yummy that would be fun to catch!", d:"e"},
      {q:"You can become invisible for one hour. What fun or helpful thing do you do?", hint:"Think of something sneaky but nice!", d:"e"},
      {q:"You can breathe underwater. Name one place in the ocean you would explore.", hint:"Think of colorful fish, coral reefs, or sunken ships!", d:"e"},
      {q:"You can make any toy come to life. Which toy do you bring to life and what do you play first?", hint:"Think of your all-time favorite toy.", d:"e"},
      {q:"You have super speed. Show the group how fast you would run in slow motion!", hint:"Move your arms and legs like you are running in slow motion.", d:"e"},
      {q:"You can copy any animal's power. Which animal power do you pick and why?", hint:"Think about animals that are strong, fast, or sneaky.", d:"e"},
      {q:"You have the power to grow any plant instantly. What plant do you grow and where?", hint:"Maybe a giant beanstalk, a chocolate tree, or a flower garden!", d:"e"},
      {q:"You can teleport anywhere in one second. Where do you go right now?", hint:"It can be real or made up, near or far!", d:"e"},
      {q:"You can give one superpower to your pet or a stuffed animal. What power do you give it?", hint:"Pick a power that fits that animal's personality!", d:"e"},
      {q:"Without using your hands, act out what it looks like to fly through the sky!", hint:"Use just your body, face, and sounds.", d:"e"},
      {q:"You shrink to the size of an ant. What is the scariest and most exciting thing you see in your house?", hint:"Look around the room and imagine it huge!", d:"e"},
      {q:"You can make one toy in the room come to life for five minutes. Act out what it does!", hint:"Be the toy! Move and talk like it would.", d:"e"},
      {q:"You have the power to make any food taste like your favorite food. What flavor do you put on everything?", hint:"Imagine broccoli tasting like candy or pizza!", d:"e"},
      {q:"You can talk to clouds and ask them to make shapes. What shapes do you request?", hint:"Draw the shape in the air with your finger!", d:"e"},
      {q:"You can pause time for one minute. What do you do while everyone else is frozen?", hint:"Think of something silly, sneaky, or helpful!", d:"e"},
      {q:"You discover your superpower only works when you are kind. Act out using your power by first doing something kind for someone in the group.", hint:"Do or say something genuinely nice, then show off your power!", d:"e"},
      {q:"You have the power to stretch your arms as long as you want. How far do you stretch them and what do you grab?", hint:"Reach out and show how far using your real arms!", d:"m"},
      {q:"You can control the weather. Describe the perfect weather day you would design for your family.", hint:"Think about temperature, wind, clouds, and maybe something magical!", d:"m"},
      {q:"You and a partner each have one superpower. Combine your powers to solve a flood emergency. What do you do?", hint:"Figure out how both powers work together as a team!", d:"m"},
      {q:"You can shrink to the size of a mouse. Name three dangers you would face in a kitchen and how you avoid them.", hint:"Think about cats, big feet, and countertop edges!", d:"m"},
      {q:"Without using your hands, show how you would open a door, pick up a ball, and wave hello.", hint:"Use your elbows, feet, or chin!", d:"m"},
      {q:"You can grow to the size of a building for ten minutes. What problem in your city do you fix?", hint:"Think about traffic, fires, floods, or lost cats in trees!", d:"m"},
      {q:"You and a teammate have telepathy. Without speaking, act out a secret message to them using only your face and body.", hint:"Your partner has to guess what you are trying to say!", d:"m"},
      {q:"You can time travel to any point in history. Where do you go and what is the first thing you do?", hint:"Think about dinosaurs, castles, ancient Egypt, or the moon landing!", d:"m"},
      {q:"You have super strength but no control over it. Act out doing gentle tasks like holding an egg or petting a cat.", hint:"Pretend you might accidentally crush everything you touch!", d:"m"},
      {q:"You can copy any superpower you see for one minute. What power do you hope to see first?", hint:"Think about powers in your favorite movies or stories.", d:"m"},
      {q:"Your team has two powers: one person can freeze things and one can fly. Together, how do you stop a runaway train?", hint:"Plan out each person's job step by step.", d:"m"},
      {q:"You shrink to the size of a bee. Name five things you could do that a normal person cannot.", hint:"Think about hiding spots, flying with insects, or sliding through tiny gaps!", d:"m"},
      {q:"You can see five minutes into the future. How do you use that power at school to be the best student in class?", hint:"Think about tests, questions, and knowing what happens next!", d:"m"},
      {q:"Without using your hands, build a tower using only household objects you can push with your nose or feet.", hint:"Start with big flat objects on the bottom!", d:"m"},
      {q:"You have the power to swap bodies with anyone for a day. Who do you swap with and what do you learn from it?", hint:"Think about a teacher, a parent, a friend, or an athlete!", d:"m"},
      {q:"If every person in your family had a different superpower, how would you work together to rescue someone stuck on a mountain?", hint:"Assign a power to each person and describe their role!", d:"h"},
      {q:"You can travel to the future but only one way with no return. Do you go? Where and when do you land, and why?", hint:"Think about what you would gain and what you would lose forever.", d:"h"},
      {q:"You have the power to erase one invention from history. Which one do you erase and what unexpected problems does that cause?", hint:"Think about how many things depend on that invention existing.", d:"h"},
      {q:"Your team has three powers: invisibility, super speed, and mind control. Design a plan to protect a city from a storm.", hint:"Each power must play a specific role in the plan.", d:"h"},
      {q:"You shrink to microscopic size and travel through a human body. Describe three things you see and one danger you face.", hint:"Think about blood cells, bones, and germs!", d:"h"},
      {q:"You can time travel but every trip ages you one year. How do you decide when it is worth using your power?", hint:"Think about what situations are important enough to give up a year of your life.", d:"h"},
      {q:"You can copy any living creature's ability but must give up one of your own senses each time. What are the trades you make?", hint:"Weigh each animal power against losing sight, smell, hearing, taste, or touch.", d:"h"},
      {q:"Without using your hands or voice, guide your partner across the room safely using only gestures and foot stomps.", hint:"Create a clear code before you start so your partner understands your signals!", d:"h"},
      {q:"You can grow to giant size but every time you do, something you love shrinks permanently. What rules do you set for yourself?", hint:"Think carefully about what you value most and how often you would really use this power.", d:"h"},
      {q:"You go back in time and accidentally stop two important inventions from being made. How do you fix history before you return?", hint:"Think step by step about cause and effect across many years.", d:"h"},
      {q:"Your team must combine telepathy, shape-shifting, and time control to rescue a trapped explorer on another planet. Plan the mission.", hint:"Assign each power to a team member and explain exactly how they use it.", d:"h"},
      {q:"You have the power to duplicate yourself, but each copy has half your intelligence and strength. How many copies do you make and for what task?", hint:"Think about whether more weak copies or fewer strong copies is smarter.", d:"h"},
      {q:"You can rewind time by ten seconds once per day. Describe three situations where those ten seconds would change everything.", hint:"Think about moments where one second makes a huge difference.", d:"h"},
      {q:"Without using hands, work with your partner to carry a pillow from one side of the room to the other.", hint:"You can use your arms, shoulders, chins, or knees together!", d:"h"},
      {q:"You can make yourself weigh nothing for thirty seconds. How do you use that power to escape from a locked room?", hint:"Think about floating, ceiling panels, vents, and timing perfectly.", d:"h"},
      {q:"Your team has the combined power of fire and ice. Create a new power name and describe three things it can do that neither fire nor ice can do alone.", hint:"When opposites combine, sometimes something completely new is created!", d:"h"},
      {q:"You can make objects enormous or tiny but only for exactly sixty seconds. Plan how you use this during a natural disaster.", hint:"Think about rocks, walls, boats, or escape routes.", d:"h"},
      {q:"If you could give one superpower to every person on Earth, which power would make life better for everyone and why?", hint:"Think about fairness, the environment, health, and happiness for all kinds of people.", d:"h"},
      {q:"You have the power to read minds but only hear the weirdest thought someone is thinking. Act out a strange thought you just heard!", hint:"Make it funny and completely random!", d:"m"}
    ]
  },

  'picture-puzzles': {
    id:'picture-puzzles', name:'Picture Puzzles',
    category:'Create', color:'#E65100',
    description:'Create and solve amazing visual challenges!',
    hasAnswer:false,
    questions:[
      {q:"Draw a happy sun wearing sunglasses on a beach. You have 60 seconds — go!", hint:"Add waves, sand, and a big smile to your sun.", d:"e"},
      {q:"Draw a cat sitting on top of a rainbow. Include at least three colors in your rainbow.", hint:"Start with the arc of the rainbow, then add the cat on top.", d:"e"},
      {q:"Draw a house with a garden. Include a door, two windows, and at least one flower.", hint:"Draw the house first, then add the garden details around it.", d:"e"},
      {q:"Draw a fish underwater. Add bubbles, seaweed, and a friendly face on the fish.", hint:"Use wavy lines for seaweed and small circles for bubbles.", d:"e"},
      {q:"Draw a snowman wearing a hat. Give him a carrot nose and stick arms.", hint:"Three circles stacked on top of each other make a great snowman.", d:"e"},
      {q:"Draw a cupcake with frosting on top. Add sprinkles and a cherry.", hint:"Start with a rectangle for the base, then a fluffy swirl on top.", d:"e"},
      {q:"Draw a butterfly on a flower. Use only circles and triangles for the wings.", hint:"Triangles make great wings — point them outward from a small body circle.", d:"e"},
      {q:"Draw a tree with a bird sitting on one of its branches.", hint:"Draw the trunk first, then add branches spreading out, then a small bird.", d:"e"},
      {q:"Draw a dog running with its tongue out. Use simple shapes — circles for the head and body.", hint:"An oval body, circle head, rectangle legs, and a wiggly tongue will do it.", d:"e"},
      {q:"Draw a rocket ship blasting off into space. Add stars around it.", hint:"A triangle on top of a rectangle makes a great rocket — add fire at the bottom.", d:"e"},
      {q:"Draw a pizza slice. Add your three favorite toppings on it.", hint:"Start with a triangle shape, then scatter toppings all over the top.", d:"e"},
      {q:"Draw a frog sitting on a lily pad in a pond. Give it a big smile.", hint:"A circle for the frog, a flat oval for the lily pad, and wavy lines for water.", d:"e"},
      {q:"Draw a cloud that looks like an animal of your choice. What animal is it?", hint:"Add fluffy bumps to your cloud shape to form ears, a snout, or a tail.", d:"e"},
      {q:"Draw a bicycle. Make sure it has two wheels, handlebars, and a seat.", hint:"Two circles first, then connect them with a triangle frame shape.", d:"e"},
      {q:"Draw a pirate ship on the ocean. Add a flag at the top of the mast.", hint:"Draw the hull like a boat, add a tall rectangle mast, then a little flag.", d:"e"},
      {q:"Draw a sandwich stacked with lots of layers. Label or show each filling.", hint:"Use wavy and straight lines for different fillings between two bread slices.", d:"e"},
      {q:"Draw a friendly monster with exactly three eyes and four arms.", hint:"Make it silly and fun — add spikes, spots, or stripes to decorate your monster.", d:"e"},
      {q:"Draw three things you would find on a farm — a barn, a chicken, and a tractor — all in one scene.", hint:"Place the barn in the background, tractor on one side, and chicken in the foreground.", d:"e"},
      {q:"Draw a park scene in 90 seconds. Include a tree, a bench, and one person enjoying the day.", hint:"Sketch the background first — grass and sky — then add details on top.", d:"m"},
      {q:"Describe a cozy kitchen scene for your partner to draw. Include at least four specific details.", hint:"Think about what is on the counter, the walls, and through the window.", d:"m"},
      {q:"Draw a dragon in a library, reading a book. Include shelves of books behind it.", hint:"Show the dragon looking small compared to the tall bookshelves around it.", d:"m"},
      {q:"Using only squares, rectangles, and triangles, draw a cityscape with at least four buildings.", hint:"Triangles make great rooftops — vary the height of each building.", d:"m"},
      {q:"Draw a 4-panel comic strip showing a dog finding a bone, burying it, forgetting where, and then sniffing it out.", hint:"Keep each panel simple — just the key action in each box.", d:"m"},
      {q:"Draw a robot chef cooking dinner. Show at least three kitchen tools the robot is using.", hint:"Give the robot arms holding utensils and a pot or pan on the stove.", d:"m"},
      {q:"Mirror drawing: one player draws the left half of a face, the other draws the matching right half without peeking.", hint:"Fold your paper mentally down the center — match every curve and line on the other side.", d:"m"},
      {q:"Draw an underwater treasure chest scene. Include coral, fish, and light rays coming from above.", hint:"Diagonal lines from the top of the page suggest light filtering through water.", d:"m"},
      {q:"Speed sketch challenge: draw a barn, a tractor, and a scarecrow in one field scene. You have 75 seconds.", hint:"Arrange them so nothing overlaps — barn in back, tractor and scarecrow in front.", d:"m"},
      {q:"Describe a jungle scene in detail for your partner to draw. Do not show them any pictures — only use words.", hint:"Mention the background, middle, and foreground — animals, plants, and lighting.", d:"m"},
      {q:"Draw a hot-air balloon floating over a mountain range. Include clouds and a tiny village below.", hint:"Layer it: mountains first, then village, then sky, then balloon on top.", d:"m"},
      {q:"Draw a wizard casting a spell in a forest at night. Include a moon, trees, and magical sparks.", hint:"Use radiating lines from the wizard's wand to show sparks and magical energy.", d:"m"},
      {q:"Collaborative drawing: Player 1 draws the head of a creature, folds it over. Player 2 draws the body without seeing the head. Reveal and describe your creation.", hint:"Think of an unusual animal for your section — mix different species for a funny result.", d:"m"},
      {q:"Draw a street market scene. Include at least five different stalls selling different things.", hint:"Stalls in a row with signs, awnings, and colorful goods on display work well.", d:"m"},
      {q:"Draw a volcano erupting on a tropical island. Show the ocean, palm trees, and lava flow.", hint:"Lava flows should be thick, wavy lines going down the sides of the volcano.", d:"m"},
      {q:"Draw a sports stadium from a bird's-eye view. Show the field markings, stands, and players.", hint:"Seen from above, the field is a rectangle or oval — tiny dots represent players.", d:"m"},
      {q:"Draw a futuristic city with flying cars, tall towers, and a sky train. Include at least one park.", hint:"Show depth by making buildings in the background smaller and lighter.", d:"h"},
      {q:"Using only five geometric shapes repeated in different sizes, draw a portrait of a person or animal.", hint:"Circles for eyes and head, rectangles for the body, triangles for ears or hair.", d:"h"},
      {q:"Draw a cross-section of an ant colony underground. Show tunnels, chambers, the queen, workers, and eggs.", hint:"Cut the ground with a horizontal line — below it shows the tunnel network in detail.", d:"h"},
      {q:"Describe-and-draw relay: describe a complex machine room scene for your partner to draw from memory after hearing it once.", hint:"Listen carefully once, then draw everything you can remember — no re-reads allowed.", d:"h"},
      {q:"Draw a detailed map of an imaginary island. Include mountains, a river, a forest, a city, and a hidden cave.", hint:"Use a legend or small symbols to mark each location — give the island a dramatic shape.", d:"h"},
      {q:"Draw a 4-panel comic strip in which a scientist accidentally shrinks herself and has to navigate a garden to find a way back to normal size.", hint:"Show scale change cleverly — make the grass towering in panel 2 compared to panel 1.", d:"h"},
      {q:"Draw a single scene that shows the same street corner in all four seasons, divided into four quadrants.", hint:"Use the same tree and building in every quadrant, but change the weather, colors, and details.", d:"h"},
      {q:"Mirror drawing challenge: draw a symmetrical alien face together. One player draws one half, the other mirrors it exactly.", hint:"Work slowly and check each feature — eyes, nostrils, and mouth must be perfectly mirrored.", d:"h"},
      {q:"Draw a medieval castle under siege. Include walls, towers, a drawbridge, attacking knights, and defending archers.", hint:"Show action and movement — arrows in flight, knights charging, flags on the towers.", d:"h"},
      {q:"Create a visual instruction manual in four drawings showing how to make a paper airplane. No words — only pictures.", hint:"Focus on the fold lines — use dashed lines to show where to crease the paper.", d:"h"},
      {q:"Draw an ocean food chain as one connected scene — from plankton to small fish to big fish to shark.", hint:"Show size increasing left to right with arrows or movement lines linking each creature.", d:"h"},
      {q:"Draw a scene inside a beehive. Show worker bees, hexagonal honeycomb cells, honey, and a queen bee.", hint:"Honeycomb cells are hexagons packed tightly together — show some filled with honey.", d:"h"},
      {q:"Abstract drawing: using only curved lines (no straight lines at all), draw something that represents the feeling of excitement.", hint:"Spirals, waves, and fast swooping curves can all suggest energy and excitement.", d:"h"},
      {q:"Draw a space station interior. Show astronauts working, equipment floating in zero gravity, and a window with Earth outside.", hint:"Objects and people floating at odd angles help show there is no gravity.", d:"h"},
      {q:"Collaborative scene: Player 1 draws the sky and background. Player 2 draws the ground and foreground. Agree on a theme before starting but do not share until both are done.", hint:"Agree on a season or setting — you will need to match your horizon lines when you combine.", d:"h"},
      {q:"Draw a detailed cross-section of a submarine. Show the crew, control room, engine room, and periscope.", hint:"Slice the submarine lengthways to reveal the different compartments inside.", d:"h"},
      {q:"Using only dots and straight lines (no curves), draw a landscape with a mountain, a sun, a lake, and a forest.", hint:"Zigzag lines for mountains, a starburst of lines for the sun, and vertical lines for trees.", d:"h"},
      {q:"Draw a 4-panel comic strip that tells a funny story about a penguin trying to fly. Include a surprise ending.", hint:"Build up the attempt in panels 1-3, then show an unexpected twist in panel 4.", d:"h"},
      {q:"Draw a 4-panel comic showing a plant growing from seed to flower. Label each stage.", hint:"Panel 1: seed in soil. Panel 2: sprout. Panel 3: stem and bud. Panel 4: full flower.", d:"m"}
    ]
  },

  'family-knowledge': {
    id:'family-knowledge', name:'Family Knowledge',
    category:'Together', color:'#0D47A1',
    description:'Discover amazing things about your own wonderful family!',
    hasAnswer:false,
    questions:[
      {q:"👨‍👩‍👧‍👦 Name EVERYONE in your family from OLDEST to YOUNGEST! Then say one genuinely amazing and specific thing about each person!", hint:"Include grandparents, cousins, aunts, uncles — everyone in your wider family!"},
      {q:"👨‍👩‍👧‍👦 What is your family's GREATEST tradition? Describe it in detail — how did it start, exactly what happens, and why is it so important?", hint:"Holiday traditions, weekly rituals, birthday customs, cooking traditions, special games..."},
      {q:"👨‍👩‍👧‍👦 Tell us about the BRAVEST or most courageous thing anyone in your family has ever done! Real stories only!", hint:"Moving to a new country? Overcoming illness? Rescuing someone? Standing up for what's right?"},
      {q:"👨‍👩‍👧‍👦 Teach the group a FAMILY RECIPE from memory — ingredients AND steps in order! If you don't know one, invent the perfect family recipe!", hint:"Grandma's special dish? A holiday biscuit? Dad's famous breakfast? The ultimate family sandwich?"},
      {q:"👨‍👩‍👧‍👦 Where are your family's ROOTS? Name the countries or cities your family originally comes from — share one fascinating fact about each place!", hint:"Think about grandparents and great-grandparents — where were they born and raised?"},
      {q:"👨‍👩‍👧‍👦 What is the FUNNIEST family story — the legendary one that gets told at every single gathering and makes everyone laugh every time?", hint:"The story everyone has heard a hundred times but still finds hilarious! The classic family legend!"},
      {q:"👨‍👩‍👧‍👦 If your whole family were superheroes, what unique power would each person have? Match the power to their personality — explain WHY each one fits!", hint:"Be thoughtful! 'Dad has the power to fix anything because he never gives up on broken things...'"},
      {q:"👨‍👩‍👧‍👦 What is something a parent, grandparent or elder in your family does that you genuinely want to learn how to do yourself?", hint:"Cooking, crafts, gardening, a sport, a musical instrument, a language, storytelling, carpentry..."},
      {q:"👨‍👩‍👧‍👦 Design your family's COAT OF ARMS in 3 minutes! Include symbols for: your values, favourite things, and what makes your family completely unique!", hint:"Traditional coats of arms tell family stories through symbols, animals, colours, and shapes!"},
      {q:"👨‍👩‍👧‍👦 Tell us about a real CHALLENGE your family faced and overcame TOGETHER. What did each person contribute? How did working as a team make you all stronger?", hint:"Moving homes? Health challenges? A big project? A difficult year? What did you learn together?"},
      {q:"👨‍👩‍👧‍👦 What are your family's 3 MOST IMPORTANT rules or values — the things your family truly believes in? Give a real example of each one in action!", hint:"Honesty? Kindness? Hard work? Adventure? Family first? Education? Give real stories!"},
      {q:"👨‍👩‍👧‍👦 If your family could take ONE perfect trip anywhere in the world, where would you go and why? Plan 3 days of the trip — what would you do each day?", hint:"Think about what EVERYONE in the family would enjoy — not just one person's dream trip!"}
    ]
  },
  'sibling-challenge': {
    id:'sibling-challenge', name:'Sibling Challenge',
    category:'Together', color:'#FFD700',
    description:'Both teams work together to earn bonus points for everyone!',
    hasAnswer:false, isSiblingChallenge:true,
    questions:[]
  }
};

// ─── GAME METADATA (difficulty, age, descriptions, examples) ────────────
const GAME_META = {
  'guess-what':       { difficulty:'Beginner', diffStars:1, ageRange:'5+', type:'Riddle Challenge',    longDesc:'Solve clever riddles and mystery descriptions! Read each clue carefully and work together to figure out the hidden object, animal, or place being described.',            examples:["I have four legs but can't walk — what am I?","I'm tall when young and short when old — what am I?","I speak without a mouth — what am I?"] },
  'act-it-out':       { difficulty:'Beginner', diffStars:1, ageRange:'4+', type:'Acting & Mime',       longDesc:'No words allowed! Use only your body to act out wild animals, emotions, and scenarios while your team shouts guesses. The more dramatic and silly, the better!',       examples:["Act like a robot with dying batteries","Waddle like a penguin on ice","Pretend to eat the world\'s spiciest food!"] },
  'draw-guess':       { difficulty:'Beginner', diffStars:1, ageRange:'4+', type:'Drawing Challenge',   longDesc:'Race to sketch wild, imaginative scenes in 60 seconds! Artistic talent not required — the funnier the drawing, the better the guesses!',                                 examples:["Draw a flying elephant with tiny wings","Draw a spaceship shaped like a banana","Draw a dog surfing on a giant ocean wave"] },
  'minute-challenge': { difficulty:'Explorer',  diffStars:2, ageRange:'6+', type:'Speed Challenge',    longDesc:'Race against the clock! Complete physical, mental, and creative challenges in 60 seconds or less. Can your team stay calm under pressure?',                            examples:["Name 10 ocean animals in 60 seconds","Say the alphabet backwards as fast as possible","Do 15 star jumps perfectly in sync!"] },
  'would-you-rather': { difficulty:'Beginner', diffStars:1, ageRange:'5+', type:'Creative Debate',     longDesc:'Choose between two impossible situations and defend your choice with reasons! There are no wrong answers — just imaginative, creative thinking.',                        examples:["Fly OR be invisible?","Live underwater OR on a space station?","Have a pet dragon OR a pet unicorn?"] },
  'brain-teasers':    { difficulty:'Champion',  diffStars:3, ageRange:'7+', type:'Logic Puzzles',       longDesc:'Trick questions, lateral thinking, and sneaky brain teasers that make your brain work hard. Read every word carefully — answers are cleverly hidden!',                 examples:["A rooster lays an egg on a roof — which side falls?","Forward I\'m heavy, backward I\'m not — what am I?","What has 13 hearts but no organs?"] },
  'memory-challenge': { difficulty:'Explorer',  diffStars:2, ageRange:'6+', type:'Memory Training',    longDesc:'How sharp is your memory? Listen, observe, and recall sequences, objects, and details under pressure. Your brain is the only tool you get!',                          examples:["Repeat 7 words in perfect order","Eyes closed — how many doors are in this room?","Say 6 colours then reverse them all!"] },
  'emoji-stories':    { difficulty:'Beginner', diffStars:1, ageRange:'5+', type:'Emoji Decoding',       longDesc:'Decode secret emoji messages to find hidden movies, fairy tales, and events — then create your own emoji puzzles for the other team to crack!',                         examples:["🦁👑🌍🎵 = The Lion King!","🧙‍♂️⚡👓📚 = Harry Potter!","🐠🦈🌊🔍 = Finding Nemo!"] },
  'science-fun':      { difficulty:'Champion',  diffStars:3, ageRange:'7+', type:'Science Quiz',        longDesc:'Discover amazing facts about space, nature, the human body, and the world! Answer fascinating science questions that will genuinely blow your mind.',                  examples:["Why is the sky blue?","Name all 8 planets in order from the Sun","What percentage of Earth is covered by water?"] },
  'nature-detectives':{ difficulty:'Explorer',  diffStars:2, ageRange:'6+', type:'Nature & Wildlife',  longDesc:'Investigate the natural world! From hibernating animals to incredible migrations, discover surprising facts about plants, animals, and ecosystems.',                    examples:["Name 5 animals that hibernate and why","Why are bees so important to our food?","How do birds navigate thousands of km without GPS?"] },
  'build-a-story':    { difficulty:'Beginner', diffStars:1, ageRange:'4+', type:'Creative Storytelling',longDesc:'Build wild, unplanned stories together — each person adds sentences, words, or plot twists. Every story is completely unique and wonderfully unpredictable!',          examples:["Continue: 'One stormy night a young inventor found a golden door...'","Tell a story using Dragon, Rainbow, and Ice cream","Tell a story completely backwards from the ending!"] },
  'mystery-box':      { difficulty:'Champion',  diffStars:3, ageRange:'7+', type:'Detective Mysteries', longDesc:'Crack codes, solve lateral thinking mysteries, and unravel tricky puzzles. Think like a detective — every clue is there for a reason!',                              examples:["20 YES/NO questions to identify any object","Crack the code: 8-5-12-12-15","What connects Rose, Ruby, Strawberry, and Mars?"] },
  'superpower-challenges':{ difficulty:'Beginner', diffStars:1, ageRange:'5+', type:'Imagination & Drama',longDesc:'Unlock your imagination with superpowers! Debate impossible choices, describe incredible scenarios, and act out what you\'d do with extraordinary abilities!',    examples:["Which food would you eat forever?","Stop time — what do you do in 3 minutes?","Shrink to ant size — describe your adventure!"] },
  'picture-puzzles':  { difficulty:'Explorer',  diffStars:2, ageRange:'5+', type:'Art Challenge',       longDesc:'Draw from descriptions, guess from drawings, and create visual masterpieces together. Artistic talent optional — creativity and imagination are everything!',           examples:["Draw a key, dragon and rainbow in one scene","Mirror drawing challenge — compare results!","Design your dream treehouse in 3 minutes"] },
  'family-knowledge': { difficulty:'Beginner', diffStars:1, ageRange:'4+', type:'Family Bonding',       longDesc:'Discover incredible things about your own family! Share stories, traditions, memories, and facts that make your unique family absolutely wonderful.',                  examples:["Name everyone from oldest to youngest with a fun fact each","What is your family\'s greatest tradition?","Tell the funniest family story everyone knows!"] },
};

// ─── SIBLING CHALLENGES ────────────────────────────────
const SIBLING_CHALLENGES = [
  { icon:'draw',    title:"The Blindfold Artist",    desc:"One player invents and describes a detailed imaginary scene while another draws it with eyes closed! Reveal the drawing — how close did it match the description? Both teams take a turn!", pts:20 },
  { icon:'mirror',  title:"Back-to-Back Telepathy",  desc:"Sit back-to-back! One person describes any object without naming it. The other must guess using only YES or NO questions! 3 guesses maximum. Switch roles and go again!", pts:20 },
  { icon:'sync',    title:"The Mirror Game",          desc:"One player leads slow movements for 30 seconds while their partner mirrors every move perfectly. Then switch! The team that stays in sync the longest without breaking earns the bonus!", pts:20 },
  { icon:'build',   title:"Paper Tower Challenge",    desc:"BOTH TEAMS WORKING TOGETHER: Using only 10 sheets of paper (no tape, no scissors, no other materials), build the TALLEST free-standing tower possible! It must stand alone for 10 seconds!", pts:25 },
  { icon:'lang',    title:"Invent a Secret Language", desc:"Both teams together create a secret family language — invent 8 words with real meanings and agree on one grammar rule. Then have a full conversation using ONLY your new language for 1 minute!", pts:25 },
  { icon:'memory',  title:"The Memory Chain",         desc:"Sit in a circle! First person says 'I went on an adventure and I found...' and names something. Each person repeats ALL previous items and adds one new one! How long can you make the chain?", pts:20 },
  { icon:'photo',   title:"Freeze Frame Movie",       desc:"Both teams work together! You have 60 seconds to create a frozen tableau (like a paused movie screenshot) from any famous film or fairy tale. The other team guesses — then switch!", pts:20 },
  { icon:'story',   title:"One Word at a Time Story", desc:"Everyone sits in a circle. Tell a story adding just ONE word at a time — each person says exactly one word and passes to the next. Build a 60-word story together without any planning! Say YES to everything!", pts:20 },
];

// ─── WORLDS ────────────────────────────────────────────
// ─── TEAM IDENTITY DATA ───────────────────────────────
const CHARACTERS = [
  { id:'astronaut', name:'Commander'   },
  { id:'alien',     name:'Alien'       },
  { id:'robot',     name:'Robot'       },
  { id:'spacecat',  name:'Space Cat'   },
  { id:'spacedog',  name:'Space Dog'   },
  { id:'dino',      name:'Dino Pilot'  },
  { id:'pirate',    name:'Pirate'      },
  { id:'superhero', name:'Hero'        },
  { id:'princess',  name:'Princess'    },
  { id:'wizard',    name:'Wizard'      },
  { id:'dragon',    name:'Dragon'      },
  { id:'monkey',    name:'Scientist'   },
];
const ROCKETS = [
  { id:'lightning', label:'Lightning', bg:'linear-gradient(135deg,#F5C518 0%,#FFD700 50%,#FFFDE4 100%)' },
  { id:'rainbow',   label:'Rainbow',   bg:'linear-gradient(135deg,#FF6B6B,#9D4EDD,#00C3FF)'              },
  { id:'galaxy',    label:'Galaxy',    bg:'linear-gradient(135deg,#0D0221,#4B0082,#9D4EDD)'              },
  { id:'fire',      label:'Fire',      bg:'linear-gradient(135deg,#FF6B00,#FF3B00,#CC0000)'              },
  { id:'ice',       label:'Ice',       bg:'linear-gradient(135deg,#E3F4FF,#90CAF9,#0288D1)'              },
  { id:'neon',      label:'Neon',      bg:'linear-gradient(135deg,#00FF9F,#00C3FF,#9D4EDD)'              },
];
const TEAM_COLORS = [
  { id:'blue',   hex:'#2B9FFF', label:'Blue'   },
  { id:'purple', hex:'#9D4EDD', label:'Purple' },
  { id:'green',  hex:'#00CC7A', label:'Green'  },
  { id:'orange', hex:'#FF8C00', label:'Orange' },
  { id:'red',    hex:'#FF3B5C', label:'Red'    },
  { id:'gold',   hex:'#FFD700', label:'Gold'   },
];
const BADGES = [
  { id:'star',      label:'Star'      },
  { id:'planet',    label:'Planet'    },
  { id:'moon',      label:'Moon'      },
  { id:'rocket',    label:'Rocket'    },
  { id:'crown',     label:'Crown'     },
  { id:'lightning', label:'Lightning' },
  { id:'treasure',  label:'Treasure'  },
];

const WORLDS = [
  { name:'Moon Base'        },
  { name:'Saturn Rings'     },
  { name:'Candy Planet'     },
  { name:'Dino Planet'      },
  { name:'Cosmic Depths'    },
  { name:'Robot Galaxy'     },
  { name:'Void Asteroid'    },
  { name:'Ice Planet'       },
  { name:'Jungle Planet'    },
  { name:'Galaxy Arena'     },
];

// ─── GAME STATE ────────────────────────────────────────
let state = {
  teams: [
    { name:'Team 1', score:0 },
    { name:'Team 2', score:0 }
  ],
  selectedIds: [],
  gameIdx: 0,
  round: 0,
  teamIdx: 0,
  questionsPerTeam: 2,
  usedQs: {},
  siblingIdx: 0,
  timerInt: null,
  timerVal: 60,
  activeFilter: 'all',
  streaks:   [0, 0],
  badges:    [[], []],
  powerups:  [
    { fifty:true, double:true, freeze:true, galaxy:true },
    { fifty:true, double:true, freeze:true, galaxy:true }
  ],
  doublePts: false,
  teamCustom: [
    { charId:'astronaut', charName:'Commander',    rocketId:'lightning', rocketLabel:'Lightning', color:'#2B9FFF', colorName:'Blue',  badgeId:'star',   badgeName:'Star'  },
    { charId:'dragon',    charName:'Dragon',       rocketId:'galaxy',    rocketLabel:'Galaxy',    color:'#00CC7A', colorName:'Green', badgeId:'crown',  badgeName:'Crown' },
  ],
  customizingTeam: 0,
  pickingTurn: 0,
  pickCount: [0, 0],
};

// ─── CANVAS STARFIELD ENGINE ─────────────────────────
(function() {
  let _sc = null, _ctx = null, _raf = null;
  let _stars = [], _shoots = [], _t = 0;
  let _mx = 0, _my = 0, _tmx = 0, _tmy = 0;
  let _bound = false;

  // 9-color realistic star palette (weighted toward white/blue-white)
  const PAL = [
    [255,255,255],  // pure white
    [200,215,255],  // blue-white A
    [178,198,255],  // blue-white B
    [255,255,235],  // warm white
    [255,248,210],  // yellow-white
    [255,228,150],  // yellow
    [255,185,100],  // orange
    [255,155,110],  // orange-red
    [255,120,100],  // red
  ];

  function _pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

  function _gen() {
    const W = _sc.width, H = _sc.height;
    _stars = [];

    const total = Math.min(2600, Math.round(W * H / 380));

    for (let i = 0; i < total; i++) {
      // Size: power-law — mostly micro
      const u = Math.random();
      const sz = u < 0.60 ? 0.22 + Math.random()*0.40   // micro (60%)
               : u < 0.86 ? 0.62 + Math.random()*0.54   // small (26%)
               : u < 0.96 ? 1.16 + Math.random()*0.74   // medium (10%)
               :             2.0  + Math.random()*1.5;   // bright (4%)

      // Color: weighted toward cold/white
      const cu = Math.random();
      const ci = cu<0.26?0 : cu<0.46?1 : cu<0.60?2 : cu<0.68?3
               : cu<0.76?4 : cu<0.83?5 : cu<0.89?6 : cu<0.94?7 : 8;
      const [r,g,b] = PAL[ci];

      // Position: 44% clustered in Milky Way diagonal band
      let x, y;
      if (Math.random() < 0.44) {
        const t  = Math.random();
        const bx = 0.86 - t * 0.72;
        const by = 0.04 + t * 0.92;
        const sp = 0.055 + Math.random() * 0.11;
        const ang = Math.random() * Math.PI * 2;
        const d   = Math.pow(Math.random(), 0.65) * sp;
        x = Math.max(0, Math.min(1, bx + Math.cos(ang)*d)) * W;
        y = Math.max(0, Math.min(1, by + Math.sin(ang)*d)) * H;
      } else {
        x = Math.random() * W;
        y = Math.random() * H;
      }

      const layer = sz < 0.65 ? 0 : sz < 1.4 ? 1 : 2;
      const baseOp = Math.min(1, 0.3 + sz * 0.27 + (Math.random()*0.18 - 0.09));

      _stars.push({
        x, y, sz, r, g, b, baseOp, layer,
        ph:  Math.random() * Math.PI * 2,
        spd: 0.22 + Math.random() * 1.6,
        amp: sz < 0.65 ? 0.05 : sz < 1.4 ? 0.17 : 0.31,
        bloom: sz > 1.05,
        bR:   sz * (3.2 + Math.random()*4.2),
        spike: sz > 2.1,
      });
    }

    // 2 compact star clusters (globular-style)
    for (let c = 0; c < 2; c++) {
      const cx = W * (0.18 + Math.random()*0.64);
      const cy = H * (0.12 + Math.random()*0.76);
      const cR = 38 + Math.random()*62;
      const n  = 55 + Math.floor(Math.random()*85);
      for (let i = 0; i < n; i++) {
        const ang = Math.random() * Math.PI * 2;
        const d   = Math.pow(Math.random(), 0.45) * cR;
        const sz  = 0.22 + Math.random()*0.65;
        const [r,g,b] = PAL[Math.floor(Math.random()*4)];
        _stars.push({
          x: cx+Math.cos(ang)*d, y: cy+Math.sin(ang)*d,
          sz, r, g, b,
          baseOp: 0.38 + Math.random()*0.55,
          layer: 0,
          ph: Math.random()*Math.PI*2,
          spd: 0.35 + Math.random()*0.9,
          amp: 0.11,
          bloom: sz > 0.88, bR: sz*4.2, spike: false,
        });
      }
    }
  }

  // Nebula definitions (static — positions relative to canvas)
  const NEBS = [
    { rx:0.22, ry:0.16, rot:-0.4, rgb:[70,0,160],   a:0.050, pos:[0.12,0.25] },
    { rx:0.18, ry:0.14, rot: 0.3, rgb:[0,65,138],   a:0.042, pos:[0.82,0.72] },
    { rx:0.28, ry:0.09, rot: 0.1, rgb:[0,48,122],   a:0.030, pos:[0.50,0.12] },
    { rx:0.16, ry:0.11, rot:-0.2, rgb:[110,18,88],  a:0.038, pos:[0.68,0.42] },
    { rx:0.19, ry:0.11, rot: 0.5, rgb:[14,68,128],  a:0.035, pos:[0.22,0.78] },
    { rx:0.13, ry:0.08, rot:-0.1, rgb:[28,90,158],  a:0.024, pos:[0.40,0.55] },
  ];

  // Distant galaxy smudges
  const GALS = [
    { rxp:0.72, ryp:0.18, rx:22, ry:8,  rot:0.4,  rgb:[178,158,220], a:0.058 },
    { rxp:0.18, ryp:0.48, rx:18, ry:6,  rot:-0.3, rgb:[158,178,220], a:0.052 },
    { rxp:0.88, ryp:0.55, rx:14, ry:5,  rot:0.8,  rgb:[198,178,240], a:0.048 },
    { rxp:0.35, ryp:0.82, rx:16, ry:5,  rot:-0.5, rgb:[168,188,230], a:0.044 },
  ];

  function _frame() {
    const W = _sc.width, H = _sc.height;
    const ctx = _ctx;
    _t += 0.012;

    // Smooth parallax tracking
    _mx += (_tmx - _mx) * 0.038;
    _my += (_tmy - _my) * 0.038;

    ctx.clearRect(0, 0, W, H);

    // 1 ── Milky Way luminosity band (diagonal)
    const mwG = ctx.createLinearGradient(W*0.85, H*0.02, W*0.15, H*0.98);
    mwG.addColorStop(0,   'rgba(40,55,145,0)');
    mwG.addColorStop(0.28,'rgba(50,72,170,0.036)');
    mwG.addColorStop(0.50,'rgba(60,88,200,0.052)');
    mwG.addColorStop(0.72,'rgba(50,72,170,0.036)');
    mwG.addColorStop(1,   'rgba(40,55,145,0)');
    ctx.fillStyle = mwG;
    ctx.fillRect(0, 0, W, H);

    // 2 ── Nebula clouds
    for (const n of NEBS) {
      const nx = n.pos[0]*W, ny = n.pos[1]*H;
      const nrx = n.rx*W;
      ctx.save();
      ctx.translate(nx, ny);
      ctx.rotate(n.rot);
      const ng = ctx.createRadialGradient(0,0,0, 0,0, nrx);
      const [nr,ng2,nb] = n.rgb;
      ng.addColorStop(0,    `rgba(${nr},${ng2},${nb},${n.a})`);
      ng.addColorStop(0.42, `rgba(${nr},${ng2},${nb},${(n.a*0.52).toFixed(4)})`);
      ng.addColorStop(1,    `rgba(${nr},${ng2},${nb},0)`);
      ctx.fillStyle = ng;
      ctx.scale(1, n.ry/n.rx);
      ctx.beginPath(); ctx.arc(0,0,nrx,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }

    // 3 ── Distant galaxy smudges
    for (const g of GALS) {
      ctx.save();
      ctx.translate(g.rxp*W, g.ryp*H);
      ctx.rotate(g.rot);
      const gg = ctx.createRadialGradient(0,0,0, 0,0, g.rx);
      const [gr,gg2,gb] = g.rgb;
      gg.addColorStop(0,   `rgba(${gr},${gg2},${gb},${g.a})`);
      gg.addColorStop(0.48,`rgba(${gr},${gg2},${gb},${(g.a*0.48).toFixed(4)})`);
      gg.addColorStop(1,   `rgba(${gr},${gg2},${gb},0)`);
      ctx.fillStyle = gg;
      ctx.scale(1, g.ry/g.rx);
      ctx.beginPath(); ctx.arc(0,0,g.rx,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }

    // 4 ── Stars
    const layerPx = [0.12, 0.55, 2.1]; // parallax strength per layer
    for (const s of _stars) {
      const px = layerPx[s.layer];
      const sx = s.x + _mx*W*0.042*px;
      const sy = s.y + _my*H*0.042*px;
      if (sx < -12 || sx > W+12 || sy < -12 || sy > H+12) continue;

      const tw = Math.sin(_t*s.spd + s.ph);
      const op = Math.max(0.02, Math.min(1, s.baseOp + tw*s.amp));

      // Bloom halo
      if (s.bloom) {
        const bg2 = ctx.createRadialGradient(sx,sy,0, sx,sy,s.bR);
        bg2.addColorStop(0,   `rgba(${s.r},${s.g},${s.b},${(op*0.14).toFixed(4)})`);
        bg2.addColorStop(0.38,`rgba(${s.r},${s.g},${s.b},${(op*0.055).toFixed(4)})`);
        bg2.addColorStop(1,   `rgba(${s.r},${s.g},${s.b},0)`);
        ctx.fillStyle = bg2;
        ctx.beginPath(); ctx.arc(sx,sy,s.bR,0,Math.PI*2); ctx.fill();
      }

      // Diffraction cross for brightest stars
      if (s.spike) {
        const sl = s.sz * 13;
        const so = (op*0.20).toFixed(4);
        ctx.save();
        ctx.lineWidth = 0.55;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${s.r},${s.g},${s.b},${so})`;
        ctx.moveTo(sx-sl,sy); ctx.lineTo(sx+sl,sy);
        ctx.moveTo(sx,sy-sl); ctx.lineTo(sx,sy+sl);
        ctx.stroke();
        // Softer diagonal spikes
        const dl = sl*0.48;
        const sod = (op*0.08).toFixed(4);
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${s.r},${s.g},${s.b},${sod})`;
        ctx.moveTo(sx-dl,sy-dl); ctx.lineTo(sx+dl,sy+dl);
        ctx.moveTo(sx+dl,sy-dl); ctx.lineTo(sx-dl,sy+dl);
        ctx.stroke();
        ctx.restore();
      }

      // Star core
      ctx.globalAlpha = op;
      ctx.fillStyle = `rgb(${s.r},${s.g},${s.b})`;
      ctx.beginPath();
      ctx.arc(sx, sy, s.sz, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    // 5 ── Shooting stars
    if (Math.random() < 0.0048 && _shoots.length < 5) {
      const ang = 0.28 + Math.random()*0.44;
      _shoots.push({
        x: Math.random()*W*0.72, y: Math.random()*H*0.42,
        vx: Math.cos(ang)*(9+Math.random()*15),
        vy: Math.sin(ang)*(9+Math.random()*15),
        len: 85+Math.random()*210,
        life:0, maxLife:42+Math.random()*50,
        w: 0.65+Math.random()*1.45,
      });
    }
    for (let i = _shoots.length-1; i >= 0; i--) {
      const ss = _shoots[i];
      ss.life++;
      ss.x += ss.vx; ss.y += ss.vy;
      if (ss.life >= ss.maxLife || ss.x > W*1.12 || ss.y > H*1.12) {
        _shoots.splice(i,1); continue;
      }
      const prog = ss.life / ss.maxLife;
      const op = prog < 0.18 ? prog/0.18 : 1-(prog-0.18)/0.82;
      const spd2 = Math.hypot(ss.vx, ss.vy);
      const tx = ss.x - (ss.vx/spd2)*ss.len;
      const ty = ss.y - (ss.vy/spd2)*ss.len;
      // Tail gradient
      const lg = ctx.createLinearGradient(tx,ty,ss.x,ss.y);
      lg.addColorStop(0,   'rgba(255,255,255,0)');
      lg.addColorStop(0.52,'rgba(210,228,255,'+(op*0.28).toFixed(3)+')');
      lg.addColorStop(1,   'rgba(255,255,255,'+(op*0.90).toFixed(3)+')');
      ctx.lineWidth = ss.w;
      ctx.strokeStyle = lg;
      ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(ss.x,ss.y); ctx.stroke();
      // Head glow
      const hR = ss.w*5.5;
      const hg = ctx.createRadialGradient(ss.x,ss.y,0, ss.x,ss.y,hR);
      hg.addColorStop(0, 'rgba(255,255,255,'+(op*0.94).toFixed(3)+')');
      hg.addColorStop(1, 'rgba(200,225,255,0)');
      ctx.fillStyle = hg;
      ctx.beginPath(); ctx.arc(ss.x,ss.y,hR,0,Math.PI*2); ctx.fill();
    }

    _raf = requestAnimationFrame(_frame);
  }

  window.initStarCanvas = function() {
    const old = document.getElementById('star-canvas');
    if (old) old.remove();
    if (_raf) { cancelAnimationFrame(_raf); _raf = null; }

    _sc = document.createElement('canvas');
    _sc.id = 'star-canvas';
    _sc.style.cssText = 'position:absolute;inset:0;pointer-events:none;display:block;';
    // Insert before floating-bg so planets render above stars
    const floatingBg = document.getElementById('floating-bg');
    const galaxyBg   = document.getElementById('galaxy-bg');
    galaxyBg.insertBefore(_sc, floatingBg);

    _ctx = _sc.getContext('2d');
    _sc.width  = window.innerWidth;
    _sc.height = window.innerHeight;
    _gen();

    if (!_bound) {
      _bound = true;
      window.addEventListener('resize', () => {
        if (!_sc) return;
        _sc.width  = window.innerWidth;
        _sc.height = window.innerHeight;
        _gen();
      });
      document.addEventListener('mousemove', e => {
        _tmx = e.clientX/window.innerWidth  - 0.5;
        _tmy = e.clientY/window.innerHeight - 0.5;
      });
    }

    _frame();
  };
})();

// ─── SPACE BACKGROUND ────────────────────────────────
function buildBackground() {
  const bg = document.getElementById('floating-bg');
  bg.innerHTML = '';

  // Canvas-based astronomical starfield
  initStarCanvas();

  // ── DETAILED PLANETS — 4 richly textured worlds ───
  const insertPlanet = (svgStr, wW, wH, top, left, durS, delayS, glow) => {
    const wrap = document.createElement('div');
    wrap.className = 'space-planet-svg';
    wrap.style.cssText = `width:${wW}px;height:${wH}px;top:${top};left:${left};filter:drop-shadow(0 0 ${Math.round(wW*0.32)}px ${glow});--dur:${durS};--delay:${delayS};`;
    wrap.innerHTML = svgStr;
    bg.appendChild(wrap);
  };

  // Earth-like planet (top-left)
  insertPlanet(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="90" height="90"><defs><clipPath id="ec"><circle cx="50" cy="50" r="48"/></clipPath><radialGradient id="esh" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="black" stop-opacity="0"/><stop offset="100%" stop-color="black" stop-opacity="0.52"/></radialGradient><radialGradient id="eli" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="white" stop-opacity="0.22"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs><circle cx="50" cy="50" r="48" fill="#1565C0"/><ellipse cx="60" cy="68" rx="30" ry="22" fill="#1976D2" clip-path="url(#ec)"/><ellipse cx="32" cy="38" rx="16" ry="10" fill="#2E7D32" clip-path="url(#ec)" transform="rotate(-15,32,38)"/><ellipse cx="55" cy="30" rx="13" ry="8" fill="#388E3C" clip-path="url(#ec)" transform="rotate(8,55,30)"/><ellipse cx="68" cy="50" rx="11" ry="15" fill="#2E7D32" clip-path="url(#ec)" transform="rotate(5,68,50)"/><ellipse cx="28" cy="58" rx="9" ry="6" fill="#33691E" clip-path="url(#ec)"/><ellipse cx="72" cy="68" rx="8" ry="6" fill="#2E7D32" clip-path="url(#ec)" transform="rotate(-10,72,68)"/><ellipse cx="47" cy="42" rx="5" ry="3" fill="#A1887F" clip-path="url(#ec)" transform="rotate(15,47,42)"/><ellipse cx="50" cy="7" rx="25" ry="12" fill="white" clip-path="url(#ec)"/><ellipse cx="50" cy="6" rx="22" ry="9" fill="#E3F2FD" clip-path="url(#ec)"/><ellipse cx="38" cy="24" rx="15" ry="4" fill="white" opacity="0.72" clip-path="url(#ec)" transform="rotate(-8,38,24)"/><ellipse cx="63" cy="44" rx="12" ry="3" fill="white" opacity="0.62" clip-path="url(#ec)"/><ellipse cx="34" cy="55" rx="13" ry="3" fill="white" opacity="0.52" clip-path="url(#ec)" transform="rotate(5,34,55)"/><ellipse cx="54" cy="73" rx="10" ry="2.5" fill="white" opacity="0.45" clip-path="url(#ec)"/><circle cx="50" cy="50" r="48" fill="url(#esh)"/><circle cx="50" cy="50" r="48" fill="url(#eli)"/><circle cx="50" cy="50" r="48" fill="none" stroke="#42A5F5" stroke-width="5" opacity="0.3"/><circle cx="50" cy="50" r="50" fill="none" stroke="#64B5F6" stroke-width="4" opacity="0.15"/></svg>`,
    90, 90, '7%', '3%', '9s', '-3s', 'rgba(30,100,220,0.45)');

  // Lava planet (bottom-right)
  insertPlanet(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="62" height="62"><defs><clipPath id="lc"><circle cx="50" cy="50" r="48"/></clipPath><radialGradient id="lsh" cx="65%" cy="68%" r="65%"><stop offset="0%" stop-color="black" stop-opacity="0"/><stop offset="100%" stop-color="black" stop-opacity="0.6"/></radialGradient><radialGradient id="lli" cx="28%" cy="25%" r="45%"><stop offset="0%" stop-color="#FF6600" stop-opacity="0.4"/><stop offset="100%" stop-color="#FF6600" stop-opacity="0"/></radialGradient></defs><circle cx="50" cy="50" r="48" fill="#1A0800"/><ellipse cx="35" cy="40" rx="20" ry="15" fill="#2D1200" clip-path="url(#lc)"/><ellipse cx="65" cy="60" rx="18" ry="12" fill="#3A1800" clip-path="url(#lc)"/><ellipse cx="45" cy="70" rx="15" ry="10" fill="#221000" clip-path="url(#lc)"/><path d="M20,30 Q35,45 25,60 Q15,75 30,88" stroke="#FF4400" stroke-width="2.5" fill="none" clip-path="url(#lc)" stroke-linecap="round"/><path d="M50,15 Q55,35 65,50 Q75,65 70,80" stroke="#FF5500" stroke-width="2" fill="none" clip-path="url(#lc)" stroke-linecap="round"/><path d="M30,20 Q50,30 60,20 Q75,15 85,30" stroke="#FF3300" stroke-width="1.5" fill="none" clip-path="url(#lc)" stroke-linecap="round"/><path d="M15,50 Q30,55 25,70 Q20,82 35,88" stroke="#FF6600" stroke-width="1.5" fill="none" clip-path="url(#lc)" stroke-linecap="round"/><path d="M60,30 Q65,50 75,60" stroke="#FF4400" stroke-width="1.2" fill="none" clip-path="url(#lc)" stroke-linecap="round"/><circle cx="28" cy="48" r="6" fill="#FF5500" opacity="0.6" clip-path="url(#lc)"/><circle cx="62" cy="38" r="4" fill="#FF7700" opacity="0.55" clip-path="url(#lc)"/><circle cx="45" cy="72" r="5" fill="#FF4400" opacity="0.5" clip-path="url(#lc)"/><circle cx="72" cy="62" r="3" fill="#FF8800" opacity="0.45" clip-path="url(#lc)"/><ellipse cx="40" cy="55" rx="8" ry="3" fill="#FF6600" opacity="0.35" clip-path="url(#lc)" transform="rotate(30,40,55)"/><circle cx="50" cy="50" r="48" fill="url(#lsh)"/><circle cx="50" cy="50" r="48" fill="url(#lli)"/><circle cx="50" cy="50" r="48" fill="none" stroke="#FF4400" stroke-width="5" opacity="0.38"/><circle cx="50" cy="50" r="50" fill="none" stroke="#FF6600" stroke-width="4" opacity="0.2"/></svg>`,
    62, 62, '74%', '87%', '11s', '-5s', 'rgba(220,80,0,0.5)');

  // Ice planet with rings (mid-left, wide SVG for ring system)
  insertPlanet(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100" width="148" height="92"><defs><clipPath id="icc"><circle cx="80" cy="48" r="42"/></clipPath><clipPath id="irf"><rect x="0" y="48" width="160" height="52"/></clipPath><radialGradient id="ish" cx="65%" cy="65%" r="60%"><stop offset="0%" stop-color="black" stop-opacity="0"/><stop offset="100%" stop-color="black" stop-opacity="0.45"/></radialGradient><radialGradient id="ili" cx="30%" cy="28%" r="50%"><stop offset="0%" stop-color="white" stop-opacity="0.35"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs><ellipse cx="80" cy="52" rx="74" ry="12" fill="none" stroke="#7AAABF" stroke-width="9" opacity="0.45"/><ellipse cx="80" cy="52" rx="74" ry="12" fill="none" stroke="#B8D8EE" stroke-width="5" opacity="0.3"/><ellipse cx="80" cy="52" rx="74" ry="12" fill="none" stroke="white" stroke-width="1.5" opacity="0.18"/><circle cx="80" cy="48" r="42" fill="#A8C8E0"/><ellipse cx="80" cy="20" rx="34" ry="14" fill="#D5EDF8" clip-path="url(#icc)"/><ellipse cx="62" cy="42" rx="20" ry="13" fill="#BDD8EE" clip-path="url(#icc)"/><ellipse cx="88" cy="60" rx="18" ry="11" fill="#95B8D0" clip-path="url(#icc)"/><ellipse cx="78" cy="58" rx="28" ry="18" fill="#8CAFC8" clip-path="url(#icc)"/><path d="M48,38 Q62,52 52,65" stroke="#6A9AB5" stroke-width="1.2" fill="none" clip-path="url(#icc)"/><path d="M82,16 Q88,36 103,48" stroke="#6A9AB5" stroke-width="1" fill="none" clip-path="url(#icc)"/><path d="M62,58 Q70,68 65,80" stroke="#6A9AB5" stroke-width="0.8" fill="none" clip-path="url(#icc)"/><ellipse cx="80" cy="10" rx="28" ry="10" fill="white" clip-path="url(#icc)"/><ellipse cx="80" cy="36" rx="32" ry="4.5" fill="white" opacity="0.45" clip-path="url(#icc)"/><ellipse cx="74" cy="60" rx="26" ry="3.5" fill="white" opacity="0.35" clip-path="url(#icc)"/><circle cx="80" cy="48" r="42" fill="url(#ish)"/><circle cx="80" cy="48" r="42" fill="url(#ili)"/><circle cx="80" cy="48" r="42" fill="none" stroke="#8ABFDE" stroke-width="5" opacity="0.35"/><ellipse cx="80" cy="52" rx="74" ry="12" fill="none" stroke="#7AAABF" stroke-width="9" opacity="0.55" clip-path="url(#irf)"/><ellipse cx="80" cy="52" rx="74" ry="12" fill="none" stroke="#C8E4F5" stroke-width="5" opacity="0.35" clip-path="url(#irf)"/><ellipse cx="80" cy="52" rx="74" ry="12" fill="none" stroke="white" stroke-width="1.5" opacity="0.25" clip-path="url(#irf)"/></svg>`,
    148, 92, '57%', '1%', '13s', '-7s', 'rgba(100,180,220,0.35)');

  // Candy planet (top-right)
  insertPlanet(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="52" height="52"><defs><clipPath id="cac"><circle cx="50" cy="50" r="48"/></clipPath><radialGradient id="cash" cx="65%" cy="65%" r="60%"><stop offset="0%" stop-color="black" stop-opacity="0"/><stop offset="100%" stop-color="black" stop-opacity="0.45"/></radialGradient><radialGradient id="cali" cx="32%" cy="28%" r="45%"><stop offset="0%" stop-color="white" stop-opacity="0.4"/><stop offset="100%" stop-color="white" stop-opacity="0"/></radialGradient></defs><circle cx="50" cy="50" r="48" fill="#E91E8C"/><ellipse cx="50" cy="25" rx="42" ry="15" fill="#FF4DB3" clip-path="url(#cac)"/><ellipse cx="50" cy="50" rx="45" ry="12" fill="#C2006A" clip-path="url(#cac)"/><ellipse cx="50" cy="74" rx="40" ry="13" fill="#B0005E" clip-path="url(#cac)"/><ellipse cx="35" cy="40" rx="12" ry="8" fill="#9C27B0" opacity="0.55" clip-path="url(#cac)" transform="rotate(-20,35,40)"/><ellipse cx="65" cy="60" rx="10" ry="7" fill="#7B1FA2" opacity="0.5" clip-path="url(#cac)"/><circle cx="42" cy="28" r="5" fill="#FFD700" opacity="0.7" clip-path="url(#cac)"/><circle cx="65" cy="35" r="4" fill="#FFD700" opacity="0.62" clip-path="url(#cac)"/><circle cx="30" cy="60" r="3" fill="#FF9800" opacity="0.6" clip-path="url(#cac)"/><circle cx="68" cy="68" r="4" fill="#FFD700" opacity="0.55" clip-path="url(#cac)"/><ellipse cx="55" cy="38" rx="8" ry="3" fill="white" opacity="0.35" clip-path="url(#cac)" transform="rotate(20,55,38)"/><ellipse cx="40" cy="55" rx="7" ry="2.5" fill="white" opacity="0.3" clip-path="url(#cac)" transform="rotate(-15,40,55)"/><circle cx="50" cy="50" r="48" fill="url(#cash)"/><circle cx="50" cy="50" r="48" fill="url(#cali)"/><circle cx="50" cy="50" r="48" fill="none" stroke="#FF69B4" stroke-width="5" opacity="0.4"/><circle cx="50" cy="50" r="50" fill="none" stroke="#FF90C8" stroke-width="4" opacity="0.2"/></svg>`,
    52, 52, '15%', '89%', '8s', '-2s', 'rgba(220,30,130,0.4)');

}

// ─── MISSION SELECTION ────────────────────────────────
let _mInfoTarget = null; // id of mission currently shown in info popup

// ─── GALAXY SHIP TRAVEL ───────────────────────────────
let _shipFlying   = false;
let _shipPos      = { x: 0, y: 0 };
let _trailTimer   = null;

function getShipSVG(rocketId, color) {
  const c = color || '#2B9FFF';
  const ships = {
    lightning: `<svg viewBox="0 0 90 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lg1" cx="20%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#FFE566" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#FFE566" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <path d="M80,26 L46,11 L13,22 L7,26 L13,30 L46,41 Z" fill="${c}" opacity="0.93"/>
      <path d="M37,19 L17,4 L21,19" fill="${c}" opacity="0.72"/>
      <path d="M37,33 L17,48 L21,33" fill="${c}" opacity="0.72"/>
      <ellipse cx="56" cy="26" rx="13" ry="9" fill="rgba(200,240,255,0.72)"/>
      <ellipse cx="54" cy="24" rx="7" ry="4.5" fill="rgba(255,255,255,0.28)"/>
      <ellipse cx="9" cy="26" rx="10" ry="6" fill="url(#lg1)"/>
      <ellipse cx="9" cy="26" rx="5" ry="3.5" fill="#FFE566" class="engine-flicker"/>
      <polyline points="57,18 51,26 56,26 50,34" stroke="#FFD700" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      <line x1="25" y1="26" x2="44" y2="26" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
    </svg>`,

    rainbow: `<svg viewBox="0 0 90 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rg1" cx="20%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#FF9FF3" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#FF9FF3" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="46" cy="26" rx="32" ry="15" fill="${c}" opacity="0.88"/>
      <path d="M78,26 L62,16 L62,36 Z" fill="${c}"/>
      <rect x="7" y="21" width="14" height="10" rx="5" fill="${c}" opacity="0.72"/>
      <rect x="38" y="10" width="18" height="3.5" rx="1.5" fill="#FF6B6B"/>
      <rect x="38" y="13.5" width="18" height="3.5" rx="1.5" fill="#FFD93D"/>
      <rect x="38" y="17" width="18" height="3.5" rx="1.5" fill="#6BCB77"/>
      <rect x="38" y="35" width="18" height="3.5" rx="1.5" fill="#4D96FF"/>
      <rect x="38" y="38.5" width="18" height="3.5" rx="1.5" fill="#C77DFF"/>
      <ellipse cx="57" cy="26" rx="12" ry="8" fill="rgba(200,240,255,0.65)"/>
      <ellipse cx="55" cy="24" rx="6" ry="4" fill="rgba(255,255,255,0.28)"/>
      <ellipse cx="8" cy="26" rx="9" ry="5.5" fill="url(#rg1)"/>
      <ellipse cx="8" cy="26" rx="4.5" ry="3" fill="#FF9FF3" class="engine-flicker"/>
    </svg>`,

    galaxy: `<svg viewBox="0 0 90 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gg1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#B07FFF" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#B07FFF" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="45" cy="31" rx="34" ry="10" fill="${c}" opacity="0.85"/>
      <ellipse cx="45" cy="25" rx="22" ry="13" fill="${c}" opacity="0.78"/>
      <path d="M45,17 C52,20 54,26 49,29 C44,32 38,30 40,25 C42,20 48,20 45,17" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" fill="none"/>
      <ellipse cx="45" cy="23" rx="9" ry="6.5" fill="rgba(180,140,255,0.62)"/>
      <ellipse cx="43" cy="21" rx="4.5" ry="3" fill="rgba(255,255,255,0.3)"/>
      <ellipse cx="67" cy="26" rx="10" ry="6" fill="${c}" opacity="0.7"/>
      <path d="M77,26 L68,20 L68,32 Z" fill="${c}"/>
      <ellipse cx="16" cy="31" rx="7" ry="4" fill="${c}" opacity="0.88"/>
      <ellipse cx="74" cy="31" rx="7" ry="4" fill="${c}" opacity="0.88"/>
      <ellipse cx="8" cy="31" rx="8" ry="4" fill="url(#gg1)"/>
      <ellipse cx="8" cy="31" rx="4" ry="2.5" fill="#B07FFF" class="engine-flicker"/>
    </svg>`,

    fire: `<svg viewBox="0 0 90 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="fg1" cx="20%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#FF6B00" stop-opacity="0.95"/>
          <stop offset="100%" stop-color="#FF6B00" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <path d="M84,26 L52,9 L18,19 L7,26 L18,33 L52,43 Z" fill="${c}" opacity="0.92"/>
      <path d="M84,26 L72,19 L72,33 Z" fill="${c}"/>
      <path d="M38,18 L26,2 L44,18" fill="${c}" opacity="0.78"/>
      <path d="M38,34 L26,50 L44,34" fill="${c}" opacity="0.78"/>
      <ellipse cx="59" cy="26" rx="11" ry="7.5" fill="rgba(255,180,100,0.62)"/>
      <ellipse cx="57" cy="24" rx="6" ry="4" fill="rgba(255,220,160,0.3)"/>
      <path d="M12,20 C3,22 0,26 3,30 C7,34 13,31 10,26 Z" fill="#FF6B00" class="engine-flicker"/>
      <path d="M12,23 C6,24 3,26 6,28 Z" fill="#FFD700" class="engine-flicker" style="animation-delay:0.12s"/>
      <line x1="28" y1="26" x2="52" y2="26" stroke="rgba(255,160,40,0.45)" stroke-width="2"/>
    </svg>`,

    ice: `<svg viewBox="0 0 90 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ig1" cx="20%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#88E8FF" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#88E8FF" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <path d="M78,26 L48,11 L15,21 L7,26 L15,31 L48,41 Z" fill="${c}" opacity="0.87"/>
      <path d="M35,20 L24,3 L42,13 Z" fill="${c}" opacity="0.67"/>
      <path d="M35,32 L24,49 L42,39 Z" fill="${c}" opacity="0.67"/>
      <path d="M58,17 L67,6 L70,19" fill="${c}" opacity="0.55"/>
      <ellipse cx="55" cy="26" rx="13" ry="8.5" fill="rgba(180,230,255,0.75)"/>
      <ellipse cx="53" cy="23.5" rx="7" ry="4.5" fill="rgba(255,255,255,0.42)"/>
      <line x1="30" y1="21" x2="38" y2="26" stroke="rgba(180,230,255,0.6)" stroke-width="1.5"/>
      <line x1="30" y1="31" x2="38" y2="26" stroke="rgba(180,230,255,0.6)" stroke-width="1.5"/>
      <ellipse cx="8" cy="26" rx="10" ry="5.5" fill="url(#ig1)"/>
      <ellipse cx="8" cy="26" rx="5" ry="3" fill="#88E8FF" class="engine-flicker"/>
    </svg>`,

    neon: `<svg viewBox="0 0 90 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ng1" cx="20%" cy="50%" r="60%">
          <stop offset="0%" stop-color="${c}" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="${c}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <path d="M82,26 L48,11 L11,22 L5,26 L11,30 L48,41 Z" fill="rgba(8,10,28,0.92)" stroke="${c}" stroke-width="1.8"/>
      <path d="M35,20 L15,5 L19,20" fill="rgba(8,10,28,0.85)" stroke="${c}" stroke-width="1.2"/>
      <path d="M35,32 L15,47 L19,32" fill="rgba(8,10,28,0.85)" stroke="${c}" stroke-width="1.2"/>
      <ellipse cx="57" cy="26" rx="13" ry="8.5" fill="rgba(0,0,18,0.88)" stroke="${c}" stroke-width="1.8"/>
      <ellipse cx="57" cy="26" rx="6.5" ry="4.5" fill="${c}" opacity="0.28"/>
      <line x1="19" y1="26" x2="48" y2="26" stroke="${c}" stroke-width="1.2" opacity="0.6"/>
      <line x1="27" y1="22" x2="27" y2="30" stroke="${c}" stroke-width="1" opacity="0.5"/>
      <ellipse cx="6" cy="26" rx="8" ry="4.5" fill="url(#ng1)"/>
      <ellipse cx="6" cy="26" rx="4" ry="2.5" fill="${c}" class="engine-flicker"/>
    </svg>`
  };
  return ships[rocketId] || ships['lightning'];
}

function _initGalaxyShip() {
  const traveler = document.getElementById('galaxy-traveler');
  if (!traveler) return;
  const ti = state.pickingTurn;
  const tc = (state.teamCustom && state.teamCustom[ti]) || { color: '#2B9FFF', charId: 'astronaut', rocketId: 'lightning' };
  const shipEl = document.getElementById('galaxy-ship-svg');
  if (shipEl) {
    shipEl.innerHTML = getShipSVG(tc.rocketId, tc.color);
    traveler.style.setProperty('--ship-glow', tc.color + 'AA');
  }
  // Start near the pick banner, right side
  const banner = document.getElementById('pick-banner');
  if (banner) {
    const r = banner.getBoundingClientRect();
    _shipPos = { x: r.right - 105, y: r.bottom + 12 };
  } else {
    _shipPos = { x: window.innerWidth / 2 - 45, y: 180 };
  }
  traveler.style.transition = 'none';
  traveler.style.left    = _shipPos.x + 'px';
  traveler.style.top     = _shipPos.y + 'px';
  traveler.style.opacity = '0';
  traveler.style.display = 'block';
  // Fade in
  requestAnimationFrame(() => {
    traveler.style.transition = 'opacity 0.5s ease';
    traveler.style.opacity    = '1';
  });
}

function _flyShipToCard(cardId, callback) {
  const traveler = document.getElementById('galaxy-traveler');
  const card     = document.getElementById('gplanet-' + cardId) || document.getElementById('mcard-' + cardId);
  if (!traveler || !card) { callback && callback(); return; }

  const cardRect  = card.getBoundingClientRect();
  const targetX   = cardRect.left + cardRect.width  / 2 - 45;
  const targetY   = cardRect.top  + cardRect.height / 2 - 24;
  const dx = targetX - _shipPos.x;
  const dy = targetY - _shipPos.y;
  const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
  const clampedAngle = Math.max(-35, Math.min(35, angleDeg * 0.4));

  const shipEl = document.getElementById('galaxy-ship-svg');
  if (shipEl) {
    shipEl.style.transition = 'transform 0.18s ease';
    shipEl.style.transform  = `rotate(${clampedAngle}deg) scale(1.18)`;
  }

  // Trail particles
  _trailTimer = setInterval(() => {
    const tc = state.teamCustom[state.pickingTurn];
    _spawnTrailParticle(
      parseFloat(traveler.style.left) + 5,
      parseFloat(traveler.style.top)  + 20,
      tc.color
    );
  }, 45);

  traveler.style.transition = 'left 0.65s cubic-bezier(0.25,0.46,0.45,0.94), top 0.65s cubic-bezier(0.25,0.46,0.45,0.94)';
  traveler.style.left = targetX + 'px';
  traveler.style.top  = targetY + 'px';
  _shipPos = { x: targetX, y: targetY };

  setTimeout(() => {
    clearInterval(_trailTimer); _trailTimer = null;
    if (shipEl) { shipEl.style.transition = 'transform 0.2s ease'; shipEl.style.transform = 'scale(0.78)'; }
    setTimeout(() => { callback && callback(); }, 220);
  }, 680);
}

function _spawnTrailParticle(x, y, color) {
  const p = document.createElement('div');
  p.style.cssText = `
    position:fixed; left:${x}px; top:${y}px;
    width:8px; height:8px; border-radius:50%;
    background:${color}; opacity:0.85;
    pointer-events:none; z-index:499;
    animation:trailFade 0.55s ease forwards;
  `;
  document.body.appendChild(p);
  setTimeout(() => p.remove(), 600);
}

function _updateGalaxyShip() {
  const ti    = state.pickingTurn;
  const tc    = state.teamCustom[ti];
  const shipEl = document.getElementById('galaxy-ship-svg');
  const trav   = document.getElementById('galaxy-traveler');
  if (!shipEl) return;
  shipEl.style.transition = 'opacity 0.22s';
  shipEl.style.opacity    = '0';
  if (trav) trav.style.setProperty('--ship-glow', tc.color + 'AA');
  setTimeout(() => {
    shipEl.innerHTML   = getShipSVG(tc.rocketId, tc.color);
    shipEl.style.opacity = '1';
  }, 230);
}

function _returnShipToBanner() {
  const traveler = document.getElementById('galaxy-traveler');
  const banner   = document.getElementById('pick-banner');
  if (!traveler || !banner) return;
  const shipEl = document.getElementById('galaxy-ship-svg');
  if (shipEl) { shipEl.style.transition = 'transform 0.2s ease'; shipEl.style.transform = ''; }
  const r = banner.getBoundingClientRect();
  const tx = r.right - 105;
  const ty = r.bottom + 12;
  traveler.style.transition = 'left 0.5s ease, top 0.5s ease';
  traveler.style.left = tx + 'px';
  traveler.style.top  = ty + 'px';
  _shipPos = { x: tx, y: ty };
}

function _launchShipAway(callback) {
  const traveler = document.getElementById('galaxy-traveler');
  if (!traveler) { callback && callback(); return; }
  const shipEl = document.getElementById('galaxy-ship-svg');
  if (shipEl) { shipEl.style.transition = 'transform 0.35s ease'; shipEl.style.transform = 'rotate(-25deg) scale(1.6)'; }
  traveler.style.transition = 'left 0.8s ease-in, top 0.8s ease-in, opacity 0.55s 0.25s ease';
  traveler.style.left    = (window.innerWidth / 2 - 45) + 'px';
  traveler.style.top     = '-120px';
  traveler.style.opacity = '0';
  setTimeout(() => { traveler.style.display = 'none'; callback && callback(); }, 900);
}

function showMissionSelect() {
  state.selectedIds = [];
  state.pickingTurn = 0;
  state.pickCount   = [0, 0];
  _shipFlying = false;
  _buildMissionCards();
  showScreen('screen-mission-select');
  setTimeout(() => {
    _updatePickUI();
    _initGalaxyShip();
  }, 120);
}

const MISSION_CATEGORIES = {
  Think:    { color:'#4488FF', abbr:'THINK'  },
  Create:   { color:'#FF44BB', abbr:'CREATE' },
  Act:      { color:'#FF5533', abbr:'ACT'    },
  Move:     { color:'#FFCC00', abbr:'MOVE'   },
  Together: { color:'#33DD88', abbr:'TEAM'   },
};

/* 15 named planet missions — teams pick 3 each from these options */
const GALAXY_PLANETS = [
  { id:'family-knowledge',      name:'Quiz World',       glow:'#FFD700', cat:'Together', subtitle:'Family Trivia',      difficulty:1 },
  { id:'act-it-out',            name:'Dragon Planet',    glow:'#FF5533', cat:'Act',      subtitle:'No Words Allowed',   difficulty:1 },
  { id:'draw-guess',            name:'Paint Nebula',     glow:'#FF44BB', cat:'Create',   subtitle:'Draw It Out',        difficulty:1 },
  { id:'minute-challenge',      name:'Speed Station',    glow:'#FFCC00', cat:'Move',     subtitle:'Race the Clock',     difficulty:3 },
  { id:'brain-teasers',         name:'Logic Labyrinth',  glow:'#AA55FF', cat:'Think',    subtitle:'Twist Your Brain',   difficulty:3 },
  { id:'memory-challenge',      name:'Memory Moon',      glow:'#33DD88', cat:'Think',    subtitle:'Remember It All',    difficulty:2 },
  { id:'mystery-box',           name:'Enigma Station',   glow:'#9933CC', cat:'Think',    subtitle:'Crack the Code',     difficulty:3 },
  { id:'superpower-challenges', name:'Hero Realm',       glow:'#FF3355', cat:'Together', subtitle:'Unlock Powers',      difficulty:1 },
  { id:'build-a-story',         name:'Story Forge',      glow:'#FF9944', cat:'Create',   subtitle:'Create Together',    difficulty:1 },
  { id:'guess-what',            name:'Riddle Nebula',    glow:'#4D8FFF', cat:'Think',    subtitle:'Solve the Mystery',  difficulty:2 },
  { id:'would-you-rather',      name:'Dilemma Moon',     glow:'#00DDAA', cat:'Think',    subtitle:'Make Your Choice',   difficulty:1 },
  { id:'emoji-stories',         name:'Pixel Planet',     glow:'#FF88DD', cat:'Create',   subtitle:'Decode the Icons',   difficulty:1 },
  { id:'science-fun',           name:'Nova Academy',     glow:'#44CCFF', cat:'Think',    subtitle:'Discover the Universe', difficulty:3 },
  { id:'nature-detectives',     name:'Jungle World',     glow:'#55DD44', cat:'Together', subtitle:'Find the Clues',     difficulty:2 },
  { id:'picture-puzzles',       name:'Art Asteroid',     glow:'#FFB833', cat:'Create',   subtitle:'Visual Challenge',   difficulty:2 },
];

const GALAXY_ROUTES = [];

function getCategoryCardSVG(catId, size) {
  size = size || 96;
  const s = size;
  const h = Math.round(s * 0.5);
  const c = Math.round(s * 0.5);

  if (catId === 'think') {
    return `<svg width="${s}" height="${s}" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tg-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1a3a7a" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#0a1240" stop-opacity="0.2"/>
        </radialGradient>
        <radialGradient id="tg-brain" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#7ec8ff"/>
          <stop offset="60%" stop-color="#4d8fff"/>
          <stop offset="100%" stop-color="#2255cc"/>
        </radialGradient>
      </defs>
      <circle cx="48" cy="48" r="44" fill="url(#tg-bg)"/>
      <!-- Brain shape -->
      <ellipse cx="34" cy="46" rx="16" ry="20" fill="url(#tg-brain)" opacity="0.9"/>
      <ellipse cx="62" cy="46" rx="16" ry="20" fill="url(#tg-brain)" opacity="0.9"/>
      <rect x="44" y="30" width="8" height="36" fill="url(#tg-brain)" rx="4" opacity="0.9"/>
      <!-- Brain folds -->
      <path d="M26 40 Q30 36 34 40 Q30 44 26 40Z" fill="rgba(120,200,255,0.4)"/>
      <path d="M26 52 Q30 48 34 52 Q30 56 26 52Z" fill="rgba(120,200,255,0.4)"/>
      <path d="M62 40 Q66 36 70 40 Q66 44 62 40Z" fill="rgba(120,200,255,0.4)"/>
      <path d="M62 52 Q66 48 70 52 Q66 56 62 52Z" fill="rgba(120,200,255,0.4)"/>
      <!-- Sparkles -->
      <circle cx="48" cy="22" r="3.5" fill="#7ec8ff" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.3;0.9" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="20" cy="30" r="2" fill="#a0d8ff" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2.4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="76" cy="30" r="2" fill="#a0d8ff" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.9s" repeatCount="indefinite"/>
      </circle>
      <circle cx="16" cy="55" r="1.5" fill="#4d8fff" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.1s" repeatCount="indefinite"/>
      </circle>
    </svg>`;
  }

  if (catId === 'create') {
    return `<svg width="${s}" height="${s}" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cr-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4a1530" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#1a0820" stop-opacity="0.2"/>
        </radialGradient>
      </defs>
      <circle cx="48" cy="48" r="44" fill="url(#cr-bg)"/>
      <!-- Paintbrush -->
      <rect x="44" y="16" width="8" height="44" rx="4" fill="#cc4477" opacity="0.9"
        transform="rotate(-30 48 48)"/>
      <ellipse cx="48" cy="20" rx="6" ry="8" fill="#ff88bb" opacity="0.95"
        transform="rotate(-30 48 48)"/>
      <!-- Paint swirls -->
      <circle cx="30" cy="62" r="9" fill="#ff6b9d" opacity="0.7">
        <animate attributeName="r" values="9;11;9" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="62" cy="68" r="7" fill="#ffcc44" opacity="0.7">
        <animate attributeName="r" values="7;9;7" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="50" cy="72" r="5" fill="#44ddff" opacity="0.7">
        <animate attributeName="r" values="5;7;5" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <!-- Stars -->
      <circle cx="74" cy="24" r="2.5" fill="#ffaadd" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.6s" repeatCount="indefinite"/>
      </circle>
      <circle cx="20" cy="40" r="1.8" fill="#ff88bb" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.2s" repeatCount="indefinite"/>
      </circle>
    </svg>`;
  }

  if (catId === 'act') {
    return `<svg width="${s}" height="${s}" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ac-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4a1a0a" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#1a0800" stop-opacity="0.2"/>
        </radialGradient>
        <radialGradient id="ac-star" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffaa44"/>
          <stop offset="100%" stop-color="#ff5533"/>
        </radialGradient>
      </defs>
      <circle cx="48" cy="48" r="44" fill="url(#ac-bg)"/>
      <!-- Spotlight beams -->
      <path d="M20 20 L38 55 L28 55Z" fill="#ffaa44" opacity="0.12"/>
      <path d="M76 20 L58 55 L68 55Z" fill="#ffaa44" opacity="0.12"/>
      <!-- Stage star -->
      <polygon points="48,18 55,38 76,38 60,50 66,70 48,58 30,70 36,50 20,38 41,38"
        fill="url(#ac-star)" opacity="0.95">
        <animateTransform attributeName="transform" type="rotate"
          values="0 48 48;5 48 48;0 48 48;-5 48 48;0 48 48"
          dur="3s" repeatCount="indefinite"/>
      </polygon>
      <!-- Glow center -->
      <circle cx="48" cy="48" r="8" fill="#ffcc66" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="22" cy="18" r="2" fill="#ffaa44" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.7s" repeatCount="indefinite"/>
      </circle>
      <circle cx="74" cy="18" r="2" fill="#ffaa44" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2.1s" repeatCount="indefinite"/>
      </circle>
    </svg>`;
  }

  if (catId === 'move') {
    return `<svg width="${s}" height="${s}" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mv-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3a3000" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#1a1500" stop-opacity="0.2"/>
        </radialGradient>
        <linearGradient id="mv-bolt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffe066"/>
          <stop offset="100%" stop-color="#ffcc00"/>
        </linearGradient>
      </defs>
      <circle cx="48" cy="48" r="44" fill="url(#mv-bg)"/>
      <!-- Speed lines -->
      <line x1="10" y1="38" x2="35" y2="38" stroke="#ffdd44" stroke-width="2" opacity="0.4"
        stroke-linecap="round">
        <animate attributeName="x1" values="10;18;10" dur="0.8s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="0.8s" repeatCount="indefinite"/>
      </line>
      <line x1="10" y1="48" x2="30" y2="48" stroke="#ffdd44" stroke-width="2.5" opacity="0.5"
        stroke-linecap="round">
        <animate attributeName="x1" values="10;20;10" dur="0.7s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="0.7s" repeatCount="indefinite"/>
      </line>
      <line x1="10" y1="58" x2="34" y2="58" stroke="#ffdd44" stroke-width="2" opacity="0.4"
        stroke-linecap="round">
        <animate attributeName="x1" values="10;16;10" dur="0.9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="0.9s" repeatCount="indefinite"/>
      </line>
      <!-- Lightning bolt -->
      <polygon points="56,14 38,50 52,50 40,82 70,42 54,42 66,14"
        fill="url(#mv-bolt)" opacity="0.96">
        <animate attributeName="opacity" values="0.96;0.7;0.96" dur="1.2s" repeatCount="indefinite"/>
      </polygon>
      <!-- Glow -->
      <circle cx="52" cy="48" r="12" fill="#ffcc00" opacity="0.18">
        <animate attributeName="r" values="12;18;12" dur="1.2s" repeatCount="indefinite"/>
      </circle>
    </svg>`;
  }

  if (catId === 'together') {
    return `<svg width="${s}" height="${s}" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tg2-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0a3020" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#041510" stop-opacity="0.2"/>
        </radialGradient>
      </defs>
      <circle cx="48" cy="48" r="44" fill="url(#tg2-bg)"/>
      <!-- Two overlapping circles representing teams -->
      <circle cx="36" cy="48" r="22" fill="#33dd88" opacity="0.25">
        <animate attributeName="cx" values="36;34;36" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="60" cy="48" r="22" fill="#44aaff" opacity="0.25">
        <animate attributeName="cx" values="60;62;60" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <!-- Character A (star shape) -->
      <polygon points="28,32 31,42 41,42 33,48 36,58 28,52 20,58 23,48 15,42 25,42"
        fill="#33dd88" opacity="0.9" transform="scale(0.85) translate(6 6)">
        <animateTransform attributeName="transform" type="translate"
          values="0 0;-1 -1;0 0" dur="2s" repeatCount="indefinite" additive="sum"/>
      </polygon>
      <!-- Character B (star shape) -->
      <polygon points="68,32 71,42 81,42 73,48 76,58 68,52 60,58 63,48 55,42 65,42"
        fill="#44aaff" opacity="0.9" transform="scale(0.85) translate(-6 6)">
        <animateTransform attributeName="transform" type="translate"
          values="0 0;1 -1;0 0" dur="2s" repeatCount="indefinite" additive="sum"/>
      </polygon>
      <!-- Connecting sparkle in center -->
      <circle cx="48" cy="48" r="5" fill="white" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.2;0.7" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="r" values="5;8;5" dur="1.5s" repeatCount="indefinite"/>
      </circle>
    </svg>`;
  }

  if (catId === 'sibling') {
    return `<svg width="${s}" height="${s}" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sb-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3a2a00" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#1a1200" stop-opacity="0.3"/>
        </radialGradient>
        <radialGradient id="sb-heart" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#ffe066"/>
          <stop offset="70%" stop-color="#ffd700"/>
          <stop offset="100%" stop-color="#cc9900"/>
        </radialGradient>
      </defs>
      <circle cx="48" cy="48" r="44" fill="url(#sb-bg)"/>
      <!-- Outer glow rings -->
      <circle cx="48" cy="48" r="38" fill="none" stroke="#ffd700" stroke-width="1" opacity="0.15">
        <animate attributeName="r" values="38;42;38" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.15;0.05;0.15" dur="2s" repeatCount="indefinite"/>
      </circle>
      <!-- Heart -->
      <path d="M48 72 C48 72 16 54 16 34 C16 24 24 18 34 20 C40 21 44 25 48 30 C52 25 56 21 62 20 C72 18 80 24 80 34 C80 54 48 72 48 72Z"
        fill="url(#sb-heart)" opacity="0.95">
        <animateTransform attributeName="transform" type="scale"
          values="1 1;1.05 1.05;1 1" dur="1.4s" repeatCount="indefinite"
          additive="sum" transform-origin="48 48"/>
        <animate attributeName="opacity" values="0.95;0.8;0.95" dur="1.4s" repeatCount="indefinite"/>
      </path>
      <!-- Two small stars inside heart -->
      <polygon points="36,42 38,48 44,48 39,52 41,58 36,54 31,58 33,52 28,48 34,48"
        fill="white" opacity="0.9" transform="scale(0.55) translate(30 24)"/>
      <polygon points="60,42 62,48 68,48 63,52 65,58 60,54 55,58 57,52 52,48 58,48"
        fill="white" opacity="0.9" transform="scale(0.55) translate(-18 24)"/>
      <!-- Sparkles -->
      <circle cx="22" cy="22" r="2.5" fill="#ffe066" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="1.8s" repeatCount="indefinite"/>
      </circle>
      <circle cx="74" cy="22" r="2.5" fill="#ffe066" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="16" cy="52" r="1.8" fill="#ffd700" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="80" cy="52" r="1.8" fill="#ffd700" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.1;0.7" dur="2s" repeatCount="indefinite"/>
      </circle>
    </svg>`;
  }

  // Fallback
  return `<svg width="${s}" height="${s}" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
    <circle cx="48" cy="48" r="44" fill="rgba(80,100,200,0.3)"/>
    <circle cx="48" cy="48" r="28" fill="rgba(100,150,255,0.5)"/>
  </svg>`;
}

function _buildMissionCards() {
  _buildMissionGrid();
}

function _buildMissionGrid() {
  const wrap = document.getElementById('mission-galaxy-grid');
  if (!wrap) return;
  wrap.className = 'mcard-grid-wrap';

  wrap.innerHTML = `
    <div class="mcard-grid" id="mcard-grid">
      ${GALAXY_PLANETS.map((p, idx) => {
        const cat      = MISSION_CATEGORIES[p.cat] || MISSION_CATEGORIES.Think;
        const dots     = [1,2,3].map(d =>
          `<span class="mcard-dot${d <= p.difficulty ? ' on' : ''}"></span>`).join('');
        const gameName = (typeof GAME_DATA !== 'undefined' && GAME_DATA[p.id])
                         ? GAME_DATA[p.id].name : p.name;
        return `
        <div class="mcard mcat-${p.cat.toLowerCase()}" id="mcard-${p.id}" data-id="${p.id}"
             style="--pcat:${cat.color};--pglow:${p.glow};animation-delay:${idx * 0.12}s"
             onclick="_onCardClick('${p.id}')" tabindex="0">
          <div class="mcard-planet-wrap">
            <div class="mcard-planet-glow"></div>
            <div class="mcard-planet-svg">${getPlanetSVG(p.id, 72)}</div>
          </div>
          <div class="mcard-body">
            <div class="mcard-name">${p.name}</div>
            <div class="mcard-desc">${gameName}</div>
            <div class="mcard-footer">
              <div class="mcard-diff" title="Difficulty">${dots}</div>
              <span class="mcard-cat-chip">${cat.abbr}</span>
            </div>
          </div>
          <div class="mcard-taken-badge" id="mcbadge-${p.id}"></div>
          <button class="mcard-info-btn mcard-info-abs" onclick="event.stopPropagation();showMissionInfo('${p.id}')" title="Mission info">i</button>
        </div>`;
      }).join('')}
    </div>
    <div class="mcard-hud">
      <div class="mcard-hud-turn" id="mcard-hud-turn"></div>
      <div class="mcard-hud-right">
        <span class="mcard-hud-icon">◈</span>
        <span id="msel-picks-left">6</span> picks left
      </div>
    </div>
  `;
}

function _onCardClick(id) {
  if (_shipFlying) return;
  const taken    = state.selectedIds.includes(id);
  const ti       = state.pickingTurn;
  const teamFull = state.pickCount[ti] >= 3;

  if (taken) {
    // clicking your own taken card cancels the selection
    const card    = document.getElementById('mcard-' + id);
    const takenBy = card ? parseInt(card.dataset.takenBy) : -1;
    if (takenBy >= 0) {
      _deselectMission(id, takenBy);
    } else {
      if (card) { card.classList.add('mcard-shake'); setTimeout(() => card.classList.remove('mcard-shake'), 440); }
    }
    return;
  }

  if (teamFull) {
    const card = document.getElementById('mcard-' + id);
    if (card) {
      card.classList.add('mcard-shake');
      setTimeout(() => card.classList.remove('mcard-shake'), 440);
    }
    return;
  }

  selectMission(id);
}

function _deselectMission(id, teamIdx) {
  const pos = state.selectedIds.indexOf(id);
  if (pos === -1) return;

  state.selectedIds.splice(pos, 1);
  state.pickCount[teamIdx] = Math.max(0, state.pickCount[teamIdx] - 1);
  state.pickingTurn = teamIdx;   // give the turn back to whoever cancelled

  // reset card glow to original planet colour + play deselect pop
  const planet = GALAXY_PLANETS.find(p => p.id === id);
  const card   = document.getElementById('mcard-' + id);
  if (card && planet) {
    card.style.setProperty('--pglow', planet.glow);
    card.dataset.takenBy = '';
    card.classList.add('mcard-deselecting');
    setTimeout(() => card.classList.remove('mcard-deselecting'), 340);
  }
  const badge = document.getElementById('mcbadge-' + id);
  if (badge) badge.innerHTML = '';

  _updateGalaxyMap();
  _updatePickUI();
  _updateGalaxyShip();
}

function _pickCategoryGame(catId) {
  const cat = GAME_CATEGORIES.find(c => c.id === catId);
  if (!cat) return null;
  if (!state.usedCategoryGames) state.usedCategoryGames = {};
  const used = state.usedCategoryGames[catId] || [];
  let available = cat.games.filter(g => !used.includes(g));
  if (available.length === 0) {
    state.usedCategoryGames[catId] = [];
    available = cat.games.slice();
  }
  const picked = available[Math.floor(Math.random() * available.length)];
  if (!state.usedCategoryGames[catId]) state.usedCategoryGames[catId] = [];
  state.usedCategoryGames[catId].push(picked);
  return picked;
}

function _revealCategoryPick(catId, gameId, callback) {
  const card = document.getElementById('mcard-' + catId);
  if (!card) { callback && callback(); return; }
  const g = GAME_DATA[gameId];
  const gameName = g ? g.name : gameId;
  const existing = card.querySelector('.mcard-reveal-overlay');
  if (existing) existing.remove();
  const reveal = document.createElement('div');
  reveal.className = 'mcard-reveal-overlay';
  reveal.innerHTML = `<div class="mcard-reveal-inner">
    <div class="mcard-reveal-ring"></div>
    <div class="mcard-reveal-text">${gameName}</div>
  </div>`;
  card.appendChild(reveal);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => { reveal.classList.add('mcard-reveal-active'); });
  });
  setTimeout(() => {
    reveal.classList.add('mcard-reveal-done');
    setTimeout(() => {
      reveal.remove();
      callback && callback();
    }, 180);
  }, 640);
}

function _buildGalaxyMap() {
  const grid = document.getElementById('mission-galaxy-grid');
  if (!grid) return;
  grid.className = 'galaxy-map-container';

  grid.innerHTML = `
    <div class="galaxy-map-wrap" id="galaxy-map-wrap">
      <div class="gmap-nebula gmap-neb-1"></div>
      <div class="gmap-nebula gmap-neb-2"></div>
      <div class="gmap-nebula gmap-neb-3"></div>
      <svg class="gmap-routes-svg" id="gmap-routes-svg"></svg>

      ${GALAXY_PLANETS.map(p => {
        const cat      = MISSION_CATEGORIES[p.cat] || MISSION_CATEGORIES.knowledge;
        const pSize    = Math.round(p.r * 2.6);
        const gameName = (typeof GAME_DATA !== 'undefined' && GAME_DATA[p.id]) ? GAME_DATA[p.id].name : p.name;
        const infoClass = p.labelPos === 'above' ? ' pi-above' : '';
        return `
        <div class="gmap-planet" id="gplanet-${p.id}" data-id="${p.id}"
             style="left:${p.x}%;top:${p.y}%;--pglow:${p.glow};--pcat:${cat.color}"
             onclick="_onPlanetClick('${p.id}')"
             onmouseenter="_onPlanetHover('${p.id}',true)"
             onmouseleave="_onPlanetHover('${p.id}',false)">
          <div class="planet-mission-ring"></div>
          <div class="planet-glow-bg"></div>
          <div class="planet-orbit-ring"></div>
          <div class="planet-bob-wrap">
            <div class="planet-body" id="pbody-${p.id}">${getPlanetSVG(p.id, pSize)}</div>
            <div class="planet-state-overlay" id="pstate-${p.id}"></div>
          </div>
          <div class="planet-info${infoClass}">
            <div class="pi-cat-badge pi-cat-${p.cat}">${cat.abbr}</div>
            <div class="pi-name">${p.name}</div>
            <div class="pi-subtitle">${p.subtitle}</div>
          </div>
          <div class="planet-tooltip" id="ptooltip-${p.id}">
            <strong>${gameName}</strong>
            <span>${cat.label} Mission</span>
          </div>
          <div class="planet-team-tag" id="ptag-${p.id}"></div>
        </div>`;
      }).join('')}

      <div class="gmap-legend" id="gmap-legend">
        <div class="gmap-legend-title">Mission Types</div>
        ${Object.entries(MISSION_CATEGORIES).map(([key, cat]) => `
          <div class="gmap-legend-item">
            <span class="gmap-legend-dot gmap-ldot-${key}"></span>
            <span class="gmap-legend-label">${cat.label}</span>
          </div>`).join('')}
      </div>

      <div class="gmap-hud" id="gmap-hud">
        <div class="gmap-hud-turn" id="gmap-hud-turn"></div>
        <div class="gmap-hud-picks">
          <span class="gmap-hud-icon">◈</span>
          <span id="msel-picks-left">6</span> picks left
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    _drawGalaxyRoutes();
    _startIdleParticles();
  }, 80);
}

function _drawGalaxyRoutes() {
  const svg  = document.getElementById('gmap-routes-svg');
  const wrap = document.getElementById('galaxy-map-wrap');
  if (!svg || !wrap) return;
  const wRect = wrap.getBoundingClientRect();
  if (wRect.width === 0) return;
  svg.setAttribute('width',  wRect.width);
  svg.setAttribute('height', wRect.height);
  svg.innerHTML = '';

  // Defs: store paths for animateMotion references
  const defs = document.createElementNS('http://www.w3.org/2000/svg','defs');
  svg.appendChild(defs);

  GALAXY_ROUTES.forEach(([aId, bId], idx) => {
    const pa = document.getElementById('gplanet-' + aId);
    const pb = document.getElementById('gplanet-' + bId);
    if (!pa || !pb) return;
    const ar = pa.getBoundingClientRect();
    const br = pb.getBoundingClientRect();
    const ax = ar.left + ar.width/2  - wRect.left;
    const ay = ar.top  + ar.height/2 - wRect.top;
    const bx = br.left + br.width/2  - wRect.left;
    const by = br.top  + br.height/2 - wRect.top;

    // Gentle quadratic curve with modest bend
    const cx1 = ax + (bx-ax)*0.4 + (by-ay)*0.18;
    const cy1 = ay + (by-ay)*0.4 - (bx-ax)*0.18;
    const d = `M${ax},${ay} Q${cx1},${cy1} ${bx},${by}`;

    // Store in defs for animateMotion
    const refPath = document.createElementNS('http://www.w3.org/2000/svg','path');
    refPath.setAttribute('d', d); refPath.id = 'rp-' + idx;
    defs.appendChild(refPath);

    // Clean, low-opacity dashed route — neutral color so it reads as infrastructure
    const line = document.createElementNS('http://www.w3.org/2000/svg','path');
    line.setAttribute('d', d); line.setAttribute('fill','none');
    line.setAttribute('stroke', 'rgba(160,200,255,1)');
    line.setAttribute('stroke-width', '0.7');
    line.setAttribute('stroke-opacity', '0.14');
    line.setAttribute('stroke-dasharray', '3 11');
    line.id = 'groute-' + aId + '-' + bId;
    svg.appendChild(line);

    // Sparse traveling dots — only half the routes get one (even indices)
    if (idx % 2 === 0) {
      const dot = document.createElementNS('http://www.w3.org/2000/svg','circle');
      dot.setAttribute('r', '1.6');
      dot.setAttribute('fill', 'rgba(180,215,255,0.9)');
      dot.setAttribute('opacity', '0.45');
      const anim = document.createElementNS('http://www.w3.org/2000/svg','animateMotion');
      anim.setAttribute('dur', (7 + (idx % 6)) + 's');
      anim.setAttribute('repeatCount','indefinite');
      const mp = document.createElementNS('http://www.w3.org/2000/svg','mpath');
      mp.setAttribute('href','#rp-' + idx);
      anim.appendChild(mp);
      dot.appendChild(anim);
      svg.appendChild(dot);
    }
  });
}

function _updateGalaxyMap() {
  const ti         = state.pickingTurn;
  const myTeamFull = state.pickCount[ti] >= 3;
  const allDone    = state.pickCount[0] + state.pickCount[1] >= 6;

  GALAXY_PLANETS.forEach(p => {
    const card = document.getElementById('mcard-' + p.id);
    if (!card) return;
    const taken  = state.selectedIds.includes(p.id);
    const locked = !taken && (myTeamFull || allDone);

    card.classList.toggle('mcard-taken',     taken);
    card.classList.toggle('mcard-available', !taken && !locked);
    card.classList.toggle('mcard-locked',    locked);

    if (taken) {
      const badge   = document.getElementById('mcbadge-' + p.id);
      const teamIdx = parseInt(card.dataset.takenBy || '0');
      const tc      = state.teamCustom[teamIdx] || state.teamCustom[0];
      card.style.setProperty('--pglow', tc.color);
      if (badge && !badge.innerHTML) {
        badge.innerHTML = `<span class="mcbadge-inner" style="border-color:${tc.color};box-shadow:0 0 10px ${tc.color}88">${getAvatarSVG(tc.charId, 22)}</span>`;
      }
    }
  });

  const turnDiv = document.getElementById('mcard-hud-turn');
  if (turnDiv && !allDone) {
    const tc        = state.teamCustom[ti] || state.teamCustom[0];
    const picksLeft = 3 - state.pickCount[ti];
    turnDiv.innerHTML = `
      <span class="mcard-turn-avatar">${getAvatarSVG(tc.charId, 16)}</span>
      <span class="mcard-turn-label" style="color:${tc.color}">${tc.charName || 'Team'}: ${picksLeft} picks</span>`;
  }

  const pl = document.getElementById('msel-picks-left');
  if (pl) pl.textContent = 6 - (state.pickCount[0] + state.pickCount[1]);
}

function _startIdleParticles() {
  GALAXY_PLANETS.forEach(p => {
    const div = document.getElementById('gplanet-' + p.id);
    if (!div) return;
    const count = 5;
    for (let i = 0; i < count; i++) {
      const pt = document.createElement('div');
      pt.className = 'planet-idle-particle';
      const angle = (i / count) * 360;
      const dist = 55 + (i % 3) * 12;
      const size = 2 + (i % 3);
      pt.style.cssText = `
        --angle:${angle}deg; --dist:${dist}%; --psize:${size}px;
        --pc:${p.glow}; --dur:${3 + (i * 0.7)}s;
        animation-delay:${-(i * 0.9)}s;
      `;
      div.appendChild(pt);
    }
  });
}

function _onPlanetHover(id, entering) {
  const div = document.getElementById('gplanet-' + id);
  if (!div) return;
  const taken = div.classList.contains('planet-taken');
  div.classList.toggle('planet-hovered', entering && !taken);

  if (entering && !taken) {
    // Spawn 6 burst particles
    const body = document.getElementById('pbody-' + id);
    if (body) {
      for (let i = 0; i < 6; i++) {
        const bp = document.createElement('div');
        bp.className = 'planet-hover-burst';
        const angle = Math.random() * 360;
        const dist = 60 + Math.random() * 30;
        bp.style.cssText = `--angle:${angle}deg;--dist:${dist}%;--pc:${div.style.getPropertyValue('--pglow')};animation-duration:${0.6 + Math.random()*0.4}s;`;
        div.appendChild(bp);
        setTimeout(() => bp.remove(), 1200);
      }
    }
  }
}

function _onPlanetClick(id) {
  const taken = state.selectedIds.includes(id);
  const ti = state.pickingTurn;
  const teamFull = state.pickCount[ti] >= 3;

  if (taken || teamFull) {
    const div = document.getElementById('gplanet-' + id);
    if (div) {
      div.classList.add('planet-shake');
      setTimeout(() => div.classList.remove('planet-shake'), 500);
    }
    return;
  }
  showMissionInfo(id);
}

function getPlanetSVG(id, size) {
  size = size || 100;
  const s = size;
  const planets = {

'family-knowledge': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @keyframes fk-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      @keyframes fk-twinkle{0%,100%{opacity:0.15;transform:scale(0.5)}60%{opacity:1;transform:scale(1.4)}}
      @keyframes fk-glow{0%,100%{opacity:0.28}55%{opacity:0.85}}
    </style>
    <clipPath id="fk-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="fk-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="fk-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <radialGradient id="fk-kg-${s}" cx="50%" cy="55%" r="52%"><stop offset="0%" stop-color="#FFE566" stop-opacity="0.82"/><stop offset="60%" stop-color="#FFAA00" stop-opacity="0.35"/><stop offset="100%" stop-color="#FF8800" stop-opacity="0"/></radialGradient>
    <filter id="fk-sf-${s}"><feGaussianBlur stdDeviation="2"/></filter>
  </defs>
  <!-- Planet base -->
  <circle cx="50" cy="50" r="46" fill="#9A6200"/>
  <!-- Terrain pushed to edges to clear center for family -->
  <ellipse cx="12" cy="68" rx="18" ry="14" fill="#B87A10" clip-path="url(#fk-c-${s})"/>
  <ellipse cx="88" cy="66" rx="16" ry="18" fill="#B07010" clip-path="url(#fk-c-${s})"/>
  <ellipse cx="50" cy="90" rx="32" ry="14" fill="#C48820" clip-path="url(#fk-c-${s})"/>
  <ellipse cx="16" cy="38" rx="13" ry="8" fill="#C08020" clip-path="url(#fk-c-${s})" transform="rotate(-10,16,38)"/>
  <ellipse cx="84" cy="36" rx="11" ry="7" fill="#D49A30" clip-path="url(#fk-c-${s})" transform="rotate(8,84,36)"/>
  <!-- Warm knowledge glow — bright centre behind figures -->
  <ellipse cx="50" cy="54" rx="32" ry="24" fill="url(#fk-kg-${s})" clip-path="url(#fk-c-${s})" style="animation:fk-glow 2.8s ease-in-out infinite;transform-box:fill-box;transform-origin:center"/>
  <!-- Clouds -->
  <ellipse cx="50" cy="8" rx="28" ry="13" fill="#F5F0E0" clip-path="url(#fk-c-${s})"/>
  <ellipse cx="34" cy="24" rx="15" ry="4" fill="#fff" opacity="0.65" clip-path="url(#fk-c-${s})" transform="rotate(-8,34,24)"/>
  <ellipse cx="66" cy="28" rx="11" ry="3" fill="#fff" opacity="0.5" clip-path="url(#fk-c-${s})"/>
  <!-- Knowledge sparkles (staggered twinkle) -->
  <g clip-path="url(#fk-c-${s})">
    <circle cx="50" cy="32" r="4.5" fill="#FFE566" filter="url(#fk-sf-${s})" style="animation:fk-twinkle 2.2s ease-in-out infinite;transform-box:fill-box;transform-origin:center"/>
    <circle cx="50" cy="32" r="2" fill="#FFFBE0" style="animation:fk-twinkle 2.2s ease-in-out infinite;transform-box:fill-box;transform-origin:center"/>
    <circle cx="29" cy="34" r="3" fill="#FFD700" filter="url(#fk-sf-${s})" style="animation:fk-twinkle 2.7s ease-in-out infinite 0.6s;transform-box:fill-box;transform-origin:center"/>
    <circle cx="29" cy="34" r="1.4" fill="#FFE566" style="animation:fk-twinkle 2.7s ease-in-out infinite 0.6s;transform-box:fill-box;transform-origin:center"/>
    <circle cx="71" cy="34" r="3" fill="#FFD700" filter="url(#fk-sf-${s})" style="animation:fk-twinkle 2.4s ease-in-out infinite 1.2s;transform-box:fill-box;transform-origin:center"/>
    <circle cx="71" cy="34" r="1.4" fill="#FFE566" style="animation:fk-twinkle 2.4s ease-in-out infinite 1.2s;transform-box:fill-box;transform-origin:center"/>
  </g>
  <!-- FAMILY (bob animation) -->
  <g clip-path="url(#fk-c-${s})" style="animation:fk-bob 3s ease-in-out infinite;transform-box:fill-box;transform-origin:50px 58px">
    <!-- === Parent LEFT (dad, tallest) === -->
    <line x1="27" y1="64" x2="24" y2="74" stroke="#3A1800" stroke-width="4" stroke-linecap="round"/>
    <line x1="31" y1="64" x2="34" y2="74" stroke="#3A1800" stroke-width="4" stroke-linecap="round"/>
    <rect x="23" y="51" width="12" height="14" rx="3" fill="#3A1800"/>
    <line x1="35" y1="55" x2="43" y2="58" stroke="#3A1800" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="23" y1="55" x2="16" y2="60" stroke="#3A1800" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="29" cy="43" r="9" fill="#5A2A00"/>
    <!-- === Child (center, shortest) === -->
    <line x1="48" y1="64" x2="46" y2="71" stroke="#2E1200" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="52" y1="64" x2="54" y2="71" stroke="#2E1200" stroke-width="3.5" stroke-linecap="round"/>
    <rect x="45" y="54" width="10" height="11" rx="2.5" fill="#2E1200"/>
    <line x1="45" y1="58" x2="43" y2="58" stroke="#2E1200" stroke-width="3" stroke-linecap="round"/>
    <line x1="55" y1="58" x2="57" y2="58" stroke="#2E1200" stroke-width="3" stroke-linecap="round"/>
    <circle cx="50" cy="47" r="7.5" fill="#4A2000"/>
    <!-- === Parent RIGHT (mom, dress) === -->
    <line x1="65" y1="65" x2="63" y2="75" stroke="#3A1800" stroke-width="4" stroke-linecap="round"/>
    <line x1="73" y1="65" x2="75" y2="75" stroke="#3A1800" stroke-width="4" stroke-linecap="round"/>
    <path d="M63,51 L75,51 L78,65 L60,65 Z" fill="#3A1800"/>
    <line x1="63" y1="55" x2="57" y2="58" stroke="#3A1800" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="75" y1="55" x2="82" y2="60" stroke="#3A1800" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="69" cy="43" r="9" fill="#5A2A00"/>
    <!-- Hand-join dots -->
    <circle cx="43" cy="58" r="3" fill="#7B3A0A"/>
    <circle cx="57" cy="58" r="3" fill="#7B3A0A"/>
  </g>
  <!-- 3-D overlays -->
  <circle cx="50" cy="50" r="46" fill="url(#fk-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#fk-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#FFD700" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#FFD700" stroke-width="3" opacity="0.15"/>
</svg>`,

'act-it-out': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="ao-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="ao-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="ao-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#6A0A00"/>
  <ellipse cx="58" cy="64" rx="26" ry="19" fill="#880E00" clip-path="url(#ao-c-${s})"/>
  <ellipse cx="28" cy="44" rx="16" ry="10" fill="#7A0A00" clip-path="url(#ao-c-${s})" transform="rotate(-10,28,44)"/>
  <ellipse cx="62" cy="34" rx="13" ry="8" fill="#920C00" clip-path="url(#ao-c-${s})" transform="rotate(6,62,34)"/>
  <ellipse cx="74" cy="52" rx="9" ry="13" fill="#800800" clip-path="url(#ao-c-${s})"/>
  <ellipse cx="30" cy="62" rx="10" ry="7" fill="#9A1000" clip-path="url(#ao-c-${s})"/>
  <ellipse cx="44" cy="46" rx="20" ry="4" fill="#FF6622" opacity="0.55" clip-path="url(#ao-c-${s})" transform="rotate(-5,44,46)"/>
  <ellipse cx="60" cy="58" rx="16" ry="3" fill="#FF5500" opacity="0.48" clip-path="url(#ao-c-${s})"/>
  <ellipse cx="34" cy="36" rx="14" ry="3" fill="#FF7733" opacity="0.42" clip-path="url(#ao-c-${s})" transform="rotate(8,34,36)"/>
  <ellipse cx="50" cy="70" rx="12" ry="2.5" fill="#FF4400" opacity="0.38" clip-path="url(#ao-c-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#ao-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#ao-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#FF5533" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#FF5533" stroke-width="3" opacity="0.15"/>
</svg>`,

'draw-guess': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="dg-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="dg-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="dg-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#770044"/>
  <ellipse cx="36" cy="40" rx="20" ry="14" fill="#00886A" clip-path="url(#dg-c-${s})" transform="rotate(-10,36,40)"/>
  <ellipse cx="64" cy="36" rx="15" ry="10" fill="#DDBB00" clip-path="url(#dg-c-${s})" transform="rotate(8,64,36)"/>
  <ellipse cx="56" cy="64" rx="18" ry="12" fill="#EE44AA" clip-path="url(#dg-c-${s})"/>
  <ellipse cx="30" cy="62" rx="12" ry="8" fill="#2266CC" clip-path="url(#dg-c-${s})"/>
  <ellipse cx="72" cy="54" rx="10" ry="14" fill="#AA0066" clip-path="url(#dg-c-${s})"/>
  <ellipse cx="50" cy="8" rx="26" ry="11" fill="#fff" clip-path="url(#dg-c-${s})"/>
  <ellipse cx="36" cy="24" rx="15" ry="4" fill="#fff" opacity="0.70" clip-path="url(#dg-c-${s})" transform="rotate(-8,36,24)"/>
  <ellipse cx="64" cy="46" rx="12" ry="3" fill="#fff" opacity="0.58" clip-path="url(#dg-c-${s})"/>
  <ellipse cx="34" cy="55" rx="13" ry="3" fill="#fff" opacity="0.48" clip-path="url(#dg-c-${s})" transform="rotate(5,34,55)"/>
  <circle cx="50" cy="50" r="46" fill="url(#dg-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#dg-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#FF44BB" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#FF44BB" stroke-width="3" opacity="0.15"/>
</svg>`,

'minute-challenge': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="mc2-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="mc2-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="mc2-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#002266"/>
  <ellipse cx="50" cy="30" rx="46" ry="8" fill="#003399" clip-path="url(#mc2-c-${s})"/>
  <ellipse cx="50" cy="42" rx="46" ry="6" fill="#1144BB" clip-path="url(#mc2-c-${s})"/>
  <ellipse cx="50" cy="54" rx="46" ry="7" fill="#002288" clip-path="url(#mc2-c-${s})"/>
  <ellipse cx="50" cy="66" rx="46" ry="6" fill="#0033AA" clip-path="url(#mc2-c-${s})"/>
  <ellipse cx="50" cy="78" rx="46" ry="8" fill="#001A77" clip-path="url(#mc2-c-${s})"/>
  <ellipse cx="50" cy="36" rx="36" ry="3" fill="#FFEE44" opacity="0.55" clip-path="url(#mc2-c-${s})"/>
  <ellipse cx="50" cy="60" rx="30" ry="2.5" fill="#FFCC00" opacity="0.48" clip-path="url(#mc2-c-${s})"/>
  <ellipse cx="50" cy="10" rx="24" ry="10" fill="#AACCFF" opacity="0.50" clip-path="url(#mc2-c-${s})"/>
  <ellipse cx="50" cy="48" rx="20" ry="3" fill="#88AAEE" opacity="0.42" clip-path="url(#mc2-c-${s})"/>
  <ellipse cx="50" cy="72" rx="16" ry="2.5" fill="#99BBFF" opacity="0.38" clip-path="url(#mc2-c-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#mc2-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#mc2-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#FFCC00" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#FFCC00" stroke-width="3" opacity="0.15"/>
</svg>`,

'brain-teasers': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="bt-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="bt-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="bt-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#1A0044"/>
  <ellipse cx="60" cy="64" rx="26" ry="18" fill="#2A0066" clip-path="url(#bt-c-${s})"/>
  <ellipse cx="30" cy="44" rx="17" ry="11" fill="#22005A" clip-path="url(#bt-c-${s})" transform="rotate(-12,30,44)"/>
  <ellipse cx="62" cy="34" rx="13" ry="8" fill="#330077" clip-path="url(#bt-c-${s})" transform="rotate(8,62,34)"/>
  <ellipse cx="74" cy="52" rx="9" ry="13" fill="#28006A" clip-path="url(#bt-c-${s})"/>
  <ellipse cx="26" cy="62" rx="9" ry="6" fill="#200055" clip-path="url(#bt-c-${s})"/>
  <ellipse cx="50" cy="10" rx="24" ry="10" fill="#CC99FF" opacity="0.48" clip-path="url(#bt-c-${s})"/>
  <ellipse cx="36" cy="26" rx="14" ry="3.5" fill="#BB88EE" opacity="0.45" clip-path="url(#bt-c-${s})" transform="rotate(-8,36,26)"/>
  <ellipse cx="62" cy="46" rx="12" ry="3" fill="#CC99FF" opacity="0.40" clip-path="url(#bt-c-${s})"/>
  <ellipse cx="34" cy="57" rx="13" ry="3" fill="#DDAAFF" opacity="0.35" clip-path="url(#bt-c-${s})" transform="rotate(5,34,57)"/>
  <circle cx="50" cy="50" r="46" fill="url(#bt-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#bt-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#AA55FF" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#AA55FF" stroke-width="3" opacity="0.15"/>
</svg>`,

'memory-challenge': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="mcl-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="mcl-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="mcl-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#003D2A"/>
  <ellipse cx="60" cy="66" rx="28" ry="20" fill="#005438" clip-path="url(#mcl-c-${s})"/>
  <ellipse cx="30" cy="42" rx="17" ry="11" fill="#006844" clip-path="url(#mcl-c-${s})" transform="rotate(-12,30,42)"/>
  <ellipse cx="62" cy="34" rx="13" ry="8" fill="#007A50" clip-path="url(#mcl-c-${s})" transform="rotate(8,62,34)"/>
  <ellipse cx="74" cy="52" rx="9" ry="13" fill="#004D34" clip-path="url(#mcl-c-${s})"/>
  <ellipse cx="26" cy="60" rx="9" ry="6" fill="#005C3E" clip-path="url(#mcl-c-${s})"/>
  <ellipse cx="50" cy="8" rx="26" ry="11" fill="#fff" clip-path="url(#mcl-c-${s})"/>
  <ellipse cx="36" cy="26" rx="15" ry="4" fill="#fff" opacity="0.70" clip-path="url(#mcl-c-${s})" transform="rotate(-8,36,26)"/>
  <ellipse cx="62" cy="46" rx="12" ry="3" fill="#fff" opacity="0.58" clip-path="url(#mcl-c-${s})"/>
  <ellipse cx="34" cy="55" rx="13" ry="3" fill="#fff" opacity="0.48" clip-path="url(#mcl-c-${s})" transform="rotate(5,34,55)"/>
  <circle cx="50" cy="50" r="46" fill="url(#mcl-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#mcl-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#33DD88" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#33DD88" stroke-width="3" opacity="0.15"/>
</svg>`,

'mystery-box': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="mxb-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="mxb-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.62"/></radialGradient>
    <radialGradient id="mxb-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.12"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#080012"/>
  <ellipse cx="58" cy="64" rx="24" ry="17" fill="#0E0022" clip-path="url(#mxb-c-${s})"/>
  <ellipse cx="28" cy="42" rx="15" ry="10" fill="#0C0020" clip-path="url(#mxb-c-${s})" transform="rotate(-10,28,42)"/>
  <ellipse cx="62" cy="32" rx="12" ry="8" fill="#120028" clip-path="url(#mxb-c-${s})" transform="rotate(8,62,32)"/>
  <ellipse cx="74" cy="52" rx="8" ry="12" fill="#0A001C" clip-path="url(#mxb-c-${s})"/>
  <ellipse cx="26" cy="60" rx="8" ry="6" fill="#10001E" clip-path="url(#mxb-c-${s})"/>
  <ellipse cx="50" cy="10" rx="22" ry="9" fill="#3A1060" opacity="0.35" clip-path="url(#mxb-c-${s})"/>
  <ellipse cx="36" cy="27" rx="13" ry="3" fill="#4A1880" opacity="0.28" clip-path="url(#mxb-c-${s})" transform="rotate(-8,36,27)"/>
  <ellipse cx="62" cy="46" rx="11" ry="2.5" fill="#3A1060" opacity="0.25" clip-path="url(#mxb-c-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#mxb-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#mxb-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#9933CC" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#9933CC" stroke-width="3" opacity="0.15"/>
</svg>`,

'superpower-challenges': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="spc-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="spc-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="spc-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#660011"/>
  <ellipse cx="60" cy="64" rx="26" ry="19" fill="#800018" clip-path="url(#spc-c-${s})"/>
  <ellipse cx="28" cy="42" rx="17" ry="11" fill="#700014" clip-path="url(#spc-c-${s})" transform="rotate(-12,28,42)"/>
  <ellipse cx="62" cy="34" rx="13" ry="8" fill="#8A001C" clip-path="url(#spc-c-${s})" transform="rotate(8,62,34)"/>
  <ellipse cx="74" cy="52" rx="9" ry="13" fill="#780016" clip-path="url(#spc-c-${s})"/>
  <ellipse cx="30" cy="62" rx="9" ry="6" fill="#6A0010" clip-path="url(#spc-c-${s})"/>
  <ellipse cx="44" cy="36" rx="18" ry="4" fill="#FFDD88" opacity="0.55" clip-path="url(#spc-c-${s})" transform="rotate(-5,44,36)"/>
  <ellipse cx="58" cy="52" rx="14" ry="3" fill="#FFB800" opacity="0.48" clip-path="url(#spc-c-${s})"/>
  <ellipse cx="50" cy="10" rx="24" ry="10" fill="#fff" clip-path="url(#spc-c-${s})"/>
  <ellipse cx="36" cy="26" rx="14" ry="3.5" fill="#fff" opacity="0.68" clip-path="url(#spc-c-${s})" transform="rotate(-8,36,26)"/>
  <ellipse cx="62" cy="46" rx="12" ry="3" fill="#fff" opacity="0.55" clip-path="url(#spc-c-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#spc-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#spc-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#FF3355" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#FF3355" stroke-width="3" opacity="0.15"/>
</svg>`,

'build-a-story': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @keyframes sfb-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
      @keyframes sfb-page{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(0.86)}}
      @keyframes sfb-spark{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-24px) scale(0.2);opacity:0}}
      @keyframes sfb-spark2{0%{transform:translateY(0) scale(1);opacity:0.85}100%{transform:translateY(-18px) scale(0.15);opacity:0}}
      @keyframes sfb-glow{0%,100%{opacity:0.28}50%{opacity:0.72}}
      @keyframes sfb-star{0%,100%{opacity:0.12}50%{opacity:0.9}}
    </style>
    <clipPath id="sfb-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="sfb-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.56"/></radialGradient>
    <radialGradient id="sfb-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.18"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <radialGradient id="sfb-bg-${s}" cx="50%" cy="42%" r="58%"><stop offset="0%" stop-color="#1c0b30"/><stop offset="100%" stop-color="#080010"/></radialGradient>
    <radialGradient id="sfb-gw-${s}" cx="50%" cy="65%" r="45%"><stop offset="0%" stop-color="#FF9944" stop-opacity="0.35"/><stop offset="100%" stop-color="#FF9944" stop-opacity="0"/></radialGradient>
    <linearGradient id="sfb-cl-${s}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#cc5500"/><stop offset="100%" stop-color="#7a2200"/></linearGradient>
    <linearGradient id="sfb-cr-${s}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e86600"/><stop offset="100%" stop-color="#8b2e00"/></linearGradient>
    <linearGradient id="sfb-pg-${s}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff8e8"/><stop offset="100%" stop-color="#ffe0a0"/></linearGradient>
    <filter id="sfb-blur-${s}"><feGaussianBlur stdDeviation="3"/></filter>
  </defs>
  <circle cx="50" cy="50" r="46" fill="url(#sfb-bg-${s})"/>
  <circle cx="18" cy="16" r="1" fill="white" style="animation:sfb-star 2.2s ease-in-out infinite"/>
  <circle cx="82" cy="20" r="0.8" fill="white" style="animation:sfb-star 3.1s ease-in-out infinite 0.4s"/>
  <circle cx="84" cy="76" r="0.9" fill="white" style="animation:sfb-star 2.7s ease-in-out infinite 0.9s"/>
  <circle cx="14" cy="78" r="0.7" fill="white" style="animation:sfb-star 3.4s ease-in-out infinite 1.3s"/>
  <circle cx="20" cy="46" r="0.7" fill="white" style="animation:sfb-star 2.5s ease-in-out infinite 0.6s"/>
  <circle cx="80" cy="48" r="0.8" fill="white" style="animation:sfb-star 2.9s ease-in-out infinite 1.1s"/>
  <ellipse cx="50" cy="73" rx="24" ry="8" fill="url(#sfb-gw-${s})" filter="url(#sfb-blur-${s})" style="animation:sfb-glow 2.5s ease-in-out infinite"/>
  <g style="transform-origin:50px 53px;transform-box:fill-box;animation:sfb-float 3.2s ease-in-out infinite">
    <ellipse cx="50" cy="74" rx="20" ry="4" fill="#FF6600" opacity="0.12" filter="url(#sfb-blur-${s})"/>
    <path d="M18,43 L50,39 L50,67 L18,62 Z" fill="url(#sfb-cl-${s})"/>
    <path d="M18,43 L50,39 L50,67 L18,62 Z" fill="none" stroke="#FF9944" stroke-width="0.8" stroke-opacity="0.65"/>
    <path d="M82,43 L50,39 L50,67 L82,62 Z" fill="url(#sfb-cr-${s})"/>
    <path d="M82,43 L50,39 L50,67 L82,62 Z" fill="none" stroke="#FF9944" stroke-width="0.8" stroke-opacity="0.65"/>
    <line x1="50" y1="39" x2="50" y2="67" stroke="#FF9944" stroke-width="2.5" stroke-linecap="round" opacity="0.95"/>
    <path d="M50,41 Q38,40 26,43 L26,64 Q38,64 50,65 Z" fill="url(#sfb-pg-${s})" opacity="0.93" style="transform-origin:50px 53px;transform-box:fill-box;animation:sfb-page 3.2s ease-in-out infinite"/>
    <path d="M50,41 Q62,40 74,43 L74,64 Q62,64 50,65 Z" fill="url(#sfb-pg-${s})" opacity="0.86"/>
    <line x1="29" y1="49" x2="47" y2="48" stroke="#cc8800" stroke-width="1" opacity="0.5"/>
    <line x1="29" y1="53" x2="47" y2="52" stroke="#cc8800" stroke-width="1" opacity="0.45"/>
    <line x1="29" y1="57" x2="47" y2="56" stroke="#cc8800" stroke-width="0.9" opacity="0.38"/>
    <line x1="29" y1="61" x2="45" y2="60" stroke="#cc8800" stroke-width="0.9" opacity="0.28"/>
    <line x1="53" y1="48" x2="71" y2="49" stroke="#cc8800" stroke-width="1" opacity="0.5"/>
    <line x1="53" y1="52" x2="71" y2="53" stroke="#cc8800" stroke-width="1" opacity="0.45"/>
    <line x1="53" y1="56" x2="71" y2="57" stroke="#cc8800" stroke-width="0.9" opacity="0.38"/>
    <line x1="53" y1="60" x2="69" y2="61" stroke="#cc8800" stroke-width="0.9" opacity="0.28"/>
  </g>
  <circle cx="40" cy="37" r="2" fill="#FFB84D" style="animation:sfb-spark 2.3s ease-out infinite"/>
  <circle cx="50" cy="34" r="1.5" fill="#FF9944" style="animation:sfb-spark2 2.9s ease-out infinite 0.6s"/>
  <circle cx="60" cy="37" r="1.8" fill="#FFD080" style="animation:sfb-spark 2.6s ease-out infinite 1.1s"/>
  <circle cx="45" cy="35" r="1.2" fill="#FF7700" style="animation:sfb-spark2 3.2s ease-out infinite 1.7s"/>
  <ellipse cx="50" cy="37" rx="18" ry="6" fill="#FF9944" opacity="0.11" filter="url(#sfb-blur-${s})" style="animation:sfb-glow 2.5s ease-in-out infinite"/>
  <circle cx="50" cy="50" r="46" fill="url(#sfb-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#sfb-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#FF9944" stroke-width="4" opacity="0.42"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#FF9944" stroke-width="3" opacity="0.18"/>
</svg>`,

'guess-what': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="gw-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="gw-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="gw-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#001244"/>
  <ellipse cx="62" cy="62" rx="28" ry="22" fill="#0A1E66" clip-path="url(#gw-c-${s})"/>
  <ellipse cx="28" cy="40" rx="16" ry="10" fill="#002288" clip-path="url(#gw-c-${s})" transform="rotate(-12,28,40)"/>
  <ellipse cx="34" cy="54" rx="10" ry="7" fill="#003A7A" clip-path="url(#gw-c-${s})"/>
  <ellipse cx="66" cy="36" rx="12" ry="8" fill="#001E6A" clip-path="url(#gw-c-${s})" transform="rotate(6,66,36)"/>
  <ellipse cx="72" cy="56" rx="9" ry="13" fill="#002266" clip-path="url(#gw-c-${s})"/>
  <ellipse cx="44" cy="44" rx="8" ry="5" fill="#2A6622" clip-path="url(#gw-c-${s})" transform="rotate(-8,44,44)"/>
  <ellipse cx="50" cy="8" rx="26" ry="11" fill="#fff" clip-path="url(#gw-c-${s})"/>
  <ellipse cx="36" cy="26" rx="15" ry="4" fill="#fff" opacity="0.70" clip-path="url(#gw-c-${s})" transform="rotate(-8,36,26)"/>
  <ellipse cx="62" cy="46" rx="12" ry="3" fill="#fff" opacity="0.58" clip-path="url(#gw-c-${s})"/>
  <ellipse cx="34" cy="57" rx="13" ry="3" fill="#fff" opacity="0.48" clip-path="url(#gw-c-${s})" transform="rotate(5,34,57)"/>
  <circle cx="50" cy="50" r="46" fill="url(#gw-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#gw-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#4D8FFF" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#4D8FFF" stroke-width="3" opacity="0.15"/>
</svg>`,

'would-you-rather': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="wyr-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <clipPath id="wyr-l-${s}"><rect x="4" y="4" width="46" height="92"/></clipPath>
    <clipPath id="wyr-r-${s}"><rect x="50" y="4" width="46" height="92"/></clipPath>
    <radialGradient id="wyr-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="wyr-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect x="4" y="4" width="46" height="92" fill="#001133" clip-path="url(#wyr-c-${s})"/>
  <rect x="50" y="4" width="46" height="92" fill="#003D2A" clip-path="url(#wyr-c-${s})"/>
  <ellipse cx="28" cy="44" rx="16" ry="10" fill="#002255" clip-path="url(#wyr-l-${s})" transform="rotate(-8,28,44)"/>
  <ellipse cx="22" cy="62" rx="12" ry="8" fill="#003366" clip-path="url(#wyr-l-${s})"/>
  <ellipse cx="66" cy="40" rx="14" ry="9" fill="#005A3A" clip-path="url(#wyr-r-${s})" transform="rotate(6,66,40)"/>
  <ellipse cx="72" cy="62" rx="10" ry="13" fill="#004D30" clip-path="url(#wyr-r-${s})"/>
  <ellipse cx="26" cy="14" rx="18" ry="5" fill="#fff" opacity="0.45" clip-path="url(#wyr-l-${s})"/>
  <ellipse cx="22" cy="30" rx="14" ry="3" fill="#fff" opacity="0.38" clip-path="url(#wyr-l-${s})" transform="rotate(-5,22,30)"/>
  <ellipse cx="68" cy="16" rx="16" ry="4" fill="#fff" opacity="0.45" clip-path="url(#wyr-r-${s})"/>
  <ellipse cx="72" cy="32" rx="12" ry="3" fill="#fff" opacity="0.38" clip-path="url(#wyr-r-${s})" transform="rotate(5,72,32)"/>
  <line x1="50" y1="4" x2="50" y2="96" stroke="#00DDAA" stroke-width="2.5" opacity="0.85"/>
  <circle cx="50" cy="50" r="46" fill="url(#wyr-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#wyr-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#00DDAA" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#00DDAA" stroke-width="3" opacity="0.15"/>
</svg>`,

'emoji-stories': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @keyframes es-orbit{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
      @keyframes es-orbit-r{0%{transform:rotate(0deg)}100%{transform:rotate(-360deg)}}
      @keyframes es-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.14)}}
      @keyframes es-glow{0%,100%{opacity:0.35}50%{opacity:0.75}}
    </style>
    <clipPath id="emst-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="emst-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="emst-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#660055"/>
  <ellipse cx="60" cy="64" rx="26" ry="18" fill="#880066" clip-path="url(#emst-c-${s})"/>
  <ellipse cx="30" cy="42" rx="17" ry="11" fill="#770060" clip-path="url(#emst-c-${s})" transform="rotate(-12,30,42)"/>
  <ellipse cx="62" cy="34" rx="13" ry="8" fill="#991177" clip-path="url(#emst-c-${s})" transform="rotate(8,62,34)"/>
  <ellipse cx="74" cy="52" rx="9" ry="13" fill="#7A0066" clip-path="url(#emst-c-${s})"/>
  <ellipse cx="26" cy="62" rx="9" ry="6" fill="#6E0055" clip-path="url(#emst-c-${s})"/>
  <ellipse cx="50" cy="8" rx="26" ry="11" fill="#fff" clip-path="url(#emst-c-${s})"/>
  <ellipse cx="36" cy="26" rx="15" ry="4" fill="#fff" opacity="0.70" clip-path="url(#emst-c-${s})" transform="rotate(-8,36,26)"/>
  <ellipse cx="62" cy="46" rx="12" ry="3" fill="#fff" opacity="0.58" clip-path="url(#emst-c-${s})"/>
  <ellipse cx="34" cy="55" rx="13" ry="3" fill="#fff" opacity="0.48" clip-path="url(#emst-c-${s})" transform="rotate(5,34,55)"/>
  <circle cx="50" cy="50" r="46" fill="url(#emst-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#emst-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#FF88DD" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#FF88DD" stroke-width="3" opacity="0.15"/>
  <g style="transform-origin:50px 50px;transform-box:fill-box;animation:es-orbit 6s linear infinite">
    <text x="50" y="19" text-anchor="middle" dominant-baseline="central" font-size="16" style="transform-origin:50px 19px;transform-box:fill-box;animation:es-orbit-r 6s linear infinite">😂</text>
    <text x="82" y="50" text-anchor="middle" dominant-baseline="central" font-size="16" style="transform-origin:82px 50px;transform-box:fill-box;animation:es-orbit-r 6s linear infinite">😍</text>
    <text x="50" y="82" text-anchor="middle" dominant-baseline="central" font-size="16" style="transform-origin:50px 82px;transform-box:fill-box;animation:es-orbit-r 6s linear infinite">🤩</text>
    <text x="18" y="50" text-anchor="middle" dominant-baseline="central" font-size="16" style="transform-origin:18px 50px;transform-box:fill-box;animation:es-orbit-r 6s linear infinite">😮</text>
  </g>
  <text x="50" y="53" text-anchor="middle" dominant-baseline="central" font-size="36" style="transform-origin:50px 53px;transform-box:fill-box;animation:es-pulse 2.2s ease-in-out infinite">😄</text>
</svg>`,

'science-fun': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="scf-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="scf-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="scf-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#001A33"/>
  <ellipse cx="62" cy="66" rx="28" ry="20" fill="#002244" clip-path="url(#scf-c-${s})"/>
  <ellipse cx="30" cy="42" rx="16" ry="10" fill="#003355" clip-path="url(#scf-c-${s})" transform="rotate(-12,30,42)"/>
  <ellipse cx="62" cy="34" rx="13" ry="8" fill="#00334D" clip-path="url(#scf-c-${s})" transform="rotate(8,62,34)"/>
  <ellipse cx="74" cy="52" rx="9" ry="13" fill="#002A3D" clip-path="url(#scf-c-${s})"/>
  <ellipse cx="26" cy="60" rx="9" ry="6" fill="#001E33" clip-path="url(#scf-c-${s})"/>
  <ellipse cx="44" cy="44" rx="14" ry="5" fill="#00AACC" opacity="0.45" clip-path="url(#scf-c-${s})" transform="rotate(-8,44,44)"/>
  <ellipse cx="60" cy="58" rx="10" ry="3" fill="#0099BB" opacity="0.40" clip-path="url(#scf-c-${s})"/>
  <ellipse cx="50" cy="8" rx="26" ry="11" fill="#fff" clip-path="url(#scf-c-${s})"/>
  <ellipse cx="36" cy="26" rx="15" ry="4" fill="#fff" opacity="0.70" clip-path="url(#scf-c-${s})" transform="rotate(-8,36,26)"/>
  <ellipse cx="62" cy="46" rx="12" ry="3" fill="#fff" opacity="0.58" clip-path="url(#scf-c-${s})"/>
  <ellipse cx="34" cy="57" rx="13" ry="3" fill="#fff" opacity="0.48" clip-path="url(#scf-c-${s})" transform="rotate(5,34,57)"/>
  <circle cx="50" cy="50" r="46" fill="url(#scf-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#scf-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#44CCFF" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#44CCFF" stroke-width="3" opacity="0.15"/>
</svg>`,

'nature-detectives': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="nd-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="nd-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="nd-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#1565C0"/>
  <ellipse cx="60" cy="68" rx="30" ry="22" fill="#1976D2" clip-path="url(#nd-c-${s})"/>
  <ellipse cx="32" cy="38" rx="16" ry="10" fill="#2E7D32" clip-path="url(#nd-c-${s})" transform="rotate(-15,32,38)"/>
  <ellipse cx="55" cy="30" rx="13" ry="8" fill="#388E3C" clip-path="url(#nd-c-${s})" transform="rotate(8,55,30)"/>
  <ellipse cx="68" cy="50" rx="11" ry="15" fill="#2E7D32" clip-path="url(#nd-c-${s})" transform="rotate(5,68,50)"/>
  <ellipse cx="28" cy="58" rx="9" ry="6" fill="#33691E" clip-path="url(#nd-c-${s})"/>
  <ellipse cx="72" cy="68" rx="8" ry="6" fill="#2E7D32" clip-path="url(#nd-c-${s})" transform="rotate(-10,72,68)"/>
  <ellipse cx="47" cy="42" rx="5" ry="3" fill="#A1887F" clip-path="url(#nd-c-${s})" transform="rotate(15,47,42)"/>
  <ellipse cx="50" cy="7" rx="25" ry="12" fill="white" clip-path="url(#nd-c-${s})"/>
  <ellipse cx="50" cy="6" rx="22" ry="9" fill="#E3F2FD" clip-path="url(#nd-c-${s})"/>
  <ellipse cx="38" cy="24" rx="15" ry="4" fill="white" opacity="0.72" clip-path="url(#nd-c-${s})" transform="rotate(-8,38,24)"/>
  <ellipse cx="63" cy="44" rx="12" ry="3" fill="white" opacity="0.62" clip-path="url(#nd-c-${s})"/>
  <ellipse cx="34" cy="55" rx="13" ry="3" fill="white" opacity="0.52" clip-path="url(#nd-c-${s})" transform="rotate(5,34,55)"/>
  <ellipse cx="54" cy="73" rx="10" ry="2.5" fill="white" opacity="0.45" clip-path="url(#nd-c-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#nd-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#nd-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#55DD44" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#55DD44" stroke-width="3" opacity="0.15"/>
</svg>`,

'picture-puzzles': `<svg viewBox="0 0 100 100" width="${s}" height="${s}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="pp-c-${s}"><circle cx="50" cy="50" r="46"/></clipPath>
    <radialGradient id="pp-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="pp-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="50" cy="50" r="46" fill="#4A2400"/>
  <ellipse cx="34" cy="36" rx="22" ry="14" fill="#CC2200" clip-path="url(#pp-c-${s})" transform="rotate(-10,34,36)"/>
  <ellipse cx="66" cy="34" rx="18" ry="12" fill="#FF8800" clip-path="url(#pp-c-${s})" transform="rotate(8,66,34)"/>
  <ellipse cx="58" cy="62" rx="20" ry="14" fill="#2244BB" clip-path="url(#pp-c-${s})"/>
  <ellipse cx="30" cy="62" rx="14" ry="10" fill="#DDAA00" clip-path="url(#pp-c-${s})"/>
  <ellipse cx="72" cy="52" rx="10" ry="14" fill="#226622" clip-path="url(#pp-c-${s})"/>
  <ellipse cx="46" cy="48" rx="10" ry="7" fill="#882288" clip-path="url(#pp-c-${s})" transform="rotate(-5,46,48)"/>
  <ellipse cx="50" cy="8" rx="26" ry="11" fill="#fff" clip-path="url(#pp-c-${s})"/>
  <ellipse cx="36" cy="26" rx="15" ry="4" fill="#fff" opacity="0.68" clip-path="url(#pp-c-${s})" transform="rotate(-8,36,26)"/>
  <ellipse cx="62" cy="46" rx="12" ry="3" fill="#fff" opacity="0.55" clip-path="url(#pp-c-${s})"/>
  <ellipse cx="34" cy="57" rx="13" ry="3" fill="#fff" opacity="0.45" clip-path="url(#pp-c-${s})" transform="rotate(5,34,57)"/>
  <circle cx="50" cy="50" r="46" fill="url(#pp-sh-${s})"/>
  <circle cx="50" cy="50" r="46" fill="url(#pp-hi-${s})"/>
  <circle cx="50" cy="50" r="46" fill="none" stroke="#FFB833" stroke-width="4" opacity="0.35"/>
  <circle cx="50" cy="50" r="48" fill="none" stroke="#FFB833" stroke-width="3" opacity="0.15"/>
</svg>`,


  };
  return planets[id] || planets['family-knowledge'];
}

function _updatePickUI() {
  const ti   = state.pickingTurn;
  const tc   = state.teamCustom[ti];
  const team = state.teams[ti];
  const num  = state.pickCount[ti] + 1;

  // Banner
  const charEl = document.getElementById('pick-char');
  const nameEl = document.getElementById('pick-team-name');
  const numEl  = document.getElementById('pick-num');
  const banner = document.getElementById('pick-banner');
  if (charEl) { charEl.innerHTML = getAvatarSVG(tc.charId, 40); charEl.style.width='40px'; charEl.style.height='40px'; }
  // Show team's ship in banner
  const bannerShipEl = document.getElementById('pick-banner-ship');
  if (bannerShipEl) {
    bannerShipEl.innerHTML = getShipSVG(tc.rocketId, tc.color);
    bannerShipEl.style.filter = `drop-shadow(0 0 10px ${tc.color}88)`;
  }
  if (nameEl) { nameEl.textContent = team.name; nameEl.style.color = tc.color; }
  if (numEl)  numEl.textContent  = num;
  if (banner) {
    banner.style.setProperty('--pcat', tc.color);
    banner.style.borderColor  = '';
    banner.style.background   = '';
    banner.style.boxShadow    = '';
    charEl.style.filter       = `drop-shadow(0 0 14px ${tc.color})`;
  }

  // Progress slots (6 total)
  for (let i = 0; i < 6; i++) {
    const sl = document.getElementById(`pslot-${i}`);
    if (!sl) continue;
    const slotTi  = i % 2; // alternating: T1 on even, T2 on odd
    const slotIdx = Math.floor(i / 2); // 0,1,2 for each team
    const filled  = slotIdx < state.pickCount[slotTi];
    const slotTc  = state.teamCustom[slotTi];
    sl.style.background   = filled ? slotTc.color : 'rgba(255,255,255,0.08)';
    sl.style.borderColor  = filled ? slotTc.color + 'cc' : 'rgba(255,255,255,0.15)';
    sl.style.boxShadow    = filled ? `0 0 10px ${slotTc.color}66` : 'none';
    sl.innerHTML          = filled ? getAvatarSVG(state.teamCustom[slotTi].charId, 22) : '';
    sl.title              = filled ? `${state.teams[slotTi].name}` : '';
  }

  // Highlight the current team's columns
  document.querySelectorAll('.mission-card:not(.locked)').forEach(c => {
    c.style.setProperty('--mc-ring', tc.color + '44');
  });
  _updateGalaxyMap();
}

function selectMission(id) {
  if (_shipFlying) return;
  const ti = state.pickingTurn;
  if (state.selectedIds.includes(id)) return;
  if (window.SFX) window.SFX.categorySelect();

  _shipFlying = true;
  const _safetyTimer = setTimeout(() => { _shipFlying = false; }, 3000);

  _flyShipToCard(id, () => {
    clearTimeout(_safetyTimer);
    try {
      state.selectedIds.push(id);
      state.pickCount[ti]++;

      const pDiv = document.getElementById('gplanet-' + id);
      if (pDiv) pDiv.dataset.takenBy = ti;

      const mCard = document.getElementById('mcard-' + id);
      if (mCard) mCard.dataset.takenBy = ti;

      const picksLeftEl = document.getElementById('msel-picks-left');
      if (picksLeftEl) picksLeftEl.textContent = 6 - (state.pickCount[0] + state.pickCount[1]);

      _updateGalaxyMap();

      charReact(ti, 'correct');
      state.pickingTurn = 1 - ti;

      const totalPicked = state.pickCount[0] + state.pickCount[1];
      if (totalPicked >= 6) {
        _shipFlying = false;
        _launchShipAway(() => _finalizeMissions());
      } else {
        _shipFlying = false;
        _updatePickUI();
        _updateGalaxyShip();
        setTimeout(() => _returnShipToBanner(), 280);
      }
    } catch(e) {
      console.error('selectMission callback error:', e);
      _shipFlying = false;
    }
  });
}

function _finalizeMissions() {
  // Build a brief "mission path" flash, then start game
  startAdventure();
}

function showMissionInfo(id) {
  const g    = GAME_DATA[id];
  const meta = GAME_META[id] || {};
  _mInfoTarget = id;

  const stars = '★'.repeat(meta.diffStars||1) + '☆'.repeat(3-(meta.diffStars||1));
  const el = (eid) => document.getElementById(eid);
  el('minfo-emoji').innerHTML = getMissionIconSVG(g.id, 56);
  el('minfo-title').textContent   = g.name;
  el('minfo-type').textContent    = meta.type || g.category;
  el('minfo-type').style.background    = g.color + '22';
  el('minfo-type').style.borderColor   = g.color + '66';
  el('minfo-type').style.color         = g.color;
  el('minfo-diff').textContent    = `${stars} ${meta.difficulty||''}`;
  el('minfo-age').textContent     = `Ages ${meta.ageRange||''}`;
  el('minfo-longdesc').textContent = meta.longDesc || g.description;
  const exList = el('minfo-examples');
  if (exList && meta.examples) {
    exList.innerHTML = meta.examples.map(e => `<li>${e}</li>`).join('');
  }
  // Choose button — disable if already locked or team has 3 picks
  const ti = state.pickingTurn;
  const alreadyTaken = state.selectedIds.includes(id);
  const teamFull     = state.pickCount[ti] >= 3;
  const chooseBtn    = el('minfo-choose-btn');
  if (chooseBtn) {
    chooseBtn.disabled = alreadyTaken || teamFull;
    chooseBtn.textContent = alreadyTaken ? 'Already Selected' : 'Choose This Mission';
    chooseBtn.style.opacity = (alreadyTaken || teamFull) ? '0.45' : '1';
  }

  // Style the modal header color
  const card = el('mission-info-card');
  if (card) card.style.setProperty('--minfo-color', g.color);

  el('mission-info-modal').style.display = 'flex';
}

function closeMissionInfo() {
  const m = document.getElementById('mission-info-modal');
  if (m) m.style.display = 'none';
  _mInfoTarget = null;
}

function chooseMission() {
  if (!_mInfoTarget) return;
  const id = _mInfoTarget;
  closeMissionInfo();
  selectMission(id);
}

// ─── SCORE STORAGE ────────────────────────────────────
const SCORES_KEY = 'siblingChallenge_v1';

function saveGameResult() {
  const scores = loadScores();
  const t0 = state.teams[0], t1 = state.teams[1];
  let winner;
  if (t0.score > t1.score)      winner = t0.name;
  else if (t1.score > t0.score) winner = t1.name;
  else                           winner = 'TIE';

  scores.unshift({
    date:   new Date().toLocaleDateString('en-GB', {day:'numeric',month:'short',year:'numeric'}),
    team1:  { name: t0.name, score: t0.score },
    team2:  { name: t1.name, score: t1.score },
    winner,
    games:  state.selectedIds.map(id => GAME_DATA[id].name)
  });
  try {
    localStorage.setItem(SCORES_KEY, JSON.stringify(scores.slice(0, 30)));
  } catch(e) {}
}

function loadScores() {
  try {
    return JSON.parse(localStorage.getItem(SCORES_KEY)) || [];
  } catch { return []; }
}

function showLeaderboard() {
  const scores = loadScores();
  const board  = document.getElementById('scores-board');
  const empty  = document.getElementById('scores-empty');
  board.innerHTML = '';

  if (scores.length === 0) {
    board.classList.add('hidden');
    empty.classList.remove('hidden');
  } else {
    board.classList.remove('hidden');
    empty.classList.add('hidden');
    scores.forEach(s => {
      const isTie = s.winner === 'TIE';
      const div = document.createElement('div');
      div.className = 'score-entry';
      div.innerHTML = `
        <div class="score-entry-date">${s.date}</div>
        <div class="score-entry-teams">
          <div class="score-entry-team">
            <div class="score-entry-tname">${s.team1.name}</div>
            <div class="score-entry-tscore">${s.team1.score}</div>
          </div>
          <div class="score-entry-vs">vs</div>
          <div class="score-entry-team">
            <div class="score-entry-tname">${s.team2.name}</div>
            <div class="score-entry-tscore">${s.team2.score}</div>
          </div>
        </div>
        <div class="score-entry-winner ${isTie ? 'tie-entry' : ''}">
          ${isTie ? 'It\'s a tie!' : `Winner: ${s.winner}`}
        </div>
        <div class="score-entry-games">${s.games.join(' · ')}</div>
      `;
      board.appendChild(div);
    });
  }
  showScreen('screen-scores');
}

function clearScores() {
  if (!confirm('Clear all score history?')) return;
  localStorage.removeItem(SCORES_KEY);
  showLeaderboard();
}

// ─── WARP TRANSITION ──────────────────────────────────
function warpTo(screenId) {
  const tunnel = document.getElementById('warp-tunnel');
  if (!tunnel) { showScreen(screenId); return; }
  tunnel.className = 'warp-tunnel warp-out';
  setTimeout(() => {
    showScreen(screenId);
    tunnel.className = 'warp-tunnel warp-in';
    setTimeout(() => { tunnel.className = 'warp-tunnel'; }, 420);
  }, 320);
}

// ─── SCREEN MANAGEMENT ────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  const beacon = document.getElementById('home-beacon');
  if (beacon) {
    const hide = (id === 'screen-welcome' || id === 'screen-scores');
    beacon.classList.toggle('visible', !hide);
  }
  window.scrollTo(0,0);
}

function goHome() {
  clearInterval(state.timerInt);
  state.timerInt = null;
  // Reset team-setup to phase 0 so it's not stuck on customization phase
  const p0 = document.getElementById('setup-phase-0');
  const pc = document.getElementById('setup-phase-custom');
  if (p0) p0.style.display = '';
  if (pc) pc.style.display = 'none';
  showScreen('screen-welcome');
}

// ─── TEAM SETUP ───────────────────────────────────────
function setName(team, name) {
  document.getElementById(`team${team}-input`).value = name;
}

function proceedToCustomize() {
  const n1 = document.getElementById('team1-input').value.trim() || 'Team Stars';
  const n2 = document.getElementById('team2-input').value.trim() || 'Team Dragons';
  state.teams[0].name = n1;
  state.teams[0].score = 0;
  state.teams[1].name = n2;
  state.teams[1].score = 0;
  state.customizingTeam = 0;
  _showCustomPhase(0);
}

function _showCustomPhase(ti) {
  document.getElementById('setup-phase-0').style.display = 'none';
  document.getElementById('setup-phase-custom').style.display = '';
  const tc = state.teamCustom[ti];
  const pill = document.getElementById('custom-team-pill');
  pill.textContent = `TEAM ${ti + 1}`;
  pill.style.background = tc.color;
  document.getElementById('custom-team-title').textContent = state.teams[ti].name;
  document.getElementById('custom-done-btn').textContent = ti === 0 ? 'NEXT: TEAM 2 →' : 'LET\'S PLAY!';
  _buildCustomUI(ti);
  _updateCustomPreview(ti);
}

function _buildCustomUI(ti) {
  const tc = state.teamCustom[ti];
  // Characters — SVG avatars
  document.getElementById('char-grid').innerHTML = CHARACTERS.map(c =>
    `<div class="char-option${tc.charId === c.id ? ' sel' : ''}" onclick="selectChar(${ti},'${c.id}','${c.name.replace(/'/g,'\\\'')}')">`+
    `<span class="char-opt-avatar">${getAvatarSVG(c.id, 48)}</span>`+
    `<span class="char-opt-name">${c.name}</span></div>`
  ).join('');
  // Rockets — SVG ship previews
  document.getElementById('rocket-row').innerHTML = ROCKETS.map(r =>
    `<div class="rocket-option${tc.rocketId === r.id ? ' sel' : ''}" style="background:${r.bg}" onclick="selectRocket(${ti},'${r.id}','${r.label}')">`+
    `<span class="rocket-ship-prev">${getShipSVG(r.id,'#ffffff')}</span>`+
    `<span class="rocket-lbl">${r.label}</span></div>`
  ).join('');
  // Colors
  document.getElementById('color-row').innerHTML = TEAM_COLORS.map(c =>
    `<button class="color-swatch${tc.color === c.hex ? ' sel' : ''}" style="background:${c.hex}" title="${c.label}" onclick="selectColor(${ti},'${c.hex}','${c.label}')">${tc.color === c.hex ? '✓' : ''}</button>`
  ).join('');
  // Badges — SVG badge icons
  document.getElementById('badge-row').innerHTML = BADGES.map(b =>
    `<div class="badge-option${tc.badgeId === b.id ? ' sel' : ''}" onclick="selectBadge(${ti},'${b.id}','${b.label}')">`+
    `<span class="badge-opt-icon">${getBadgeSVG(b.id, tc.color)}</span>`+
    `<span class="badge-opt-name">${b.label}</span></div>`
  ).join('');
}

function _updateCustomPreview(ti) {
  const tc = state.teamCustom[ti];
  const el = (id) => document.getElementById(id);
  const prev = el('custom-char-preview');
  if (prev) { prev.innerHTML = getAvatarSVG(tc.charId, 80); prev.style.filter = `drop-shadow(0 0 18px ${tc.color})`; }
  const nm = el('custom-char-name');    if (nm)  nm.textContent  = tc.charName;
  const rk = el('custom-rocket-prev'); if (rk)  rk.innerHTML    = `<span style="display:inline-block;vertical-align:middle;margin-right:4px">${getShipSVG(tc.rocketId, tc.color)}</span><span>${tc.rocketLabel} Rocket</span>`;
  const bd = el('custom-badge-prev');  if (bd)  bd.innerHTML    = `${getBadgeSVG(tc.badgeId, tc.color)}<span style="vertical-align:middle;margin-left:4px">${tc.badgeName}</span>`;
  const clr = el('custom-color-prev'); if (clr) { clr.style.background = tc.color; clr.textContent = tc.colorName; }
  const pill = el('custom-team-pill'); if (pill) pill.style.background = tc.color;
}

function selectChar(ti, id, name) {
  state.teamCustom[ti].charId   = id;
  state.teamCustom[ti].charName = name;
  _buildCustomUI(ti); _updateCustomPreview(ti);
}
function selectRocket(ti, id, label) {
  state.teamCustom[ti].rocketId    = id;
  state.teamCustom[ti].rocketLabel = label;
  _buildCustomUI(ti); _updateCustomPreview(ti);
}
function selectColor(ti, hex, name) {
  state.teamCustom[ti].color     = hex;
  state.teamCustom[ti].colorName = name;
  _buildCustomUI(ti); _updateCustomPreview(ti);
}
function selectBadge(ti, badgeId, name) {
  state.teamCustom[ti].badgeId   = badgeId;
  state.teamCustom[ti].badgeName = name;
  _buildCustomUI(ti); _updateCustomPreview(ti);
}

function confirmCustomize() {
  if (state.customizingTeam === 0) {
    state.customizingTeam = 1;
    _showCustomPhase(1);
  } else {
    document.getElementById('setup-phase-custom').style.display = 'none';
    document.getElementById('setup-phase-0').style.display = '';
    showMissionSelect();
  }
}
function backFromCustomize() {
  if (state.customizingTeam === 1) {
    state.customizingTeam = 0;
    _showCustomPhase(0);
  } else {
    document.getElementById('setup-phase-custom').style.display = 'none';
    document.getElementById('setup-phase-0').style.display = '';
  }
}

// ─── CHARACTER REACTIONS ───────────────────────────────
function charReact(teamIdx, type) {
  const overlay = document.getElementById('char-react-overlay');
  if (!overlay) return;
  const tc = state.teamCustom[teamIdx];
  const cheers  = ['AMAZING!','BRILLIANT!','ON FIRE!','SUPERSTAR!','PERFECT!'];
  const boos    = ['Keep going!','Next one!','You got this!','Almost there!'];
  const wins    = ['CHAMPION!','GALAXY WINNER!','OUTSTANDING!','LEGENDARY!'];
  const pool = type==='correct' ? cheers : type==='win' ? wins : boos;
  const msg  = pool[Math.floor(Math.random() * pool.length)];
  overlay.innerHTML =
    `<div class="react-bubble react-${type}" style="--rc:${tc.color}">` +
    `<span class="react-char">${getAvatarSVG(tc.charId, 80)}</span>` +
    `<span class="react-msg">${msg}</span></div>`;
  setTimeout(() => { if (overlay) overlay.innerHTML = ''; }, 1800);
}

// ─── START ADVENTURE ──────────────────────────────────
function startAdventure() {
  if (state.selectedIds.length < 6) return;
  state.gameIdx  = 0;
  state.round    = 0;
  state.teamIdx  = 0;
  state.siblingIdx = 0;
  state.usedQs   = {};
  state.questionsPerTeam = 3;
  state.streaks  = [0, 0];
  state.badges   = [[], []];
  state.doublePts = false;
  state.powerups = [
    { fifty:true, double:true, freeze:true, galaxy:true },
    { fifty:true, double:true, freeze:true, galaxy:true }
  ];
  state.teamDiffCounts = [{e:0,m:0,h:0},{e:0,m:0,h:0}];
  state.selectedIds.forEach(id => { state.usedQs[id] = new Set(); });
  showGameIntro();
}

// ─── WORLD HELPERS ────────────────────────────────────
function getWorld() {
  return WORLDS[state.gameIdx % WORLDS.length];
}

function updateWorldIndicator() {
  const w = getWorld();
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('world-icon',      '');
  setTxt('world-name',      w.name);
  setTxt('play-world-icon', '');
  setTxt('play-world-name', w.name);
}

// ─── TEAM PANEL UPDATER ───────────────────────────────
function updateTeamPanels() {
  [0,1].forEach(i => {
    const t  = state.teams[i];
    const tc = state.teamCustom[i];
    const n  = i + 1;
    const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    setTxt(`play-t${n}-name`,  t.name);
    const nameEl = document.getElementById(`play-t${n}-name`);
    if (nameEl) nameEl.style.color = tc.color;
    setTxt(`play-t${n}-score`, t.score);
    const streak = state.streaks[i];
    setTxt(`panel-streak-${n}`, streak > 0 ? `HOT x${streak}` : '');
    // Dynamic team color on panel
    const panel = document.getElementById(`team-panel-${n}`);
    if (panel) {
      panel.style.borderColor = tc.color + '55';
      panel.style.background  = tc.color + '0D';
      panel.style.boxShadow   = `0 0 22px ${tc.color}22, inset 0 1px 0 ${tc.color}18`;
    }
    // Character avatar
    const charEl = document.getElementById(`panel-char-${n}`);
    if (charEl) charEl.innerHTML =
      `<span class="panel-char-avatar">${getAvatarSVG(tc.charId, 36)}</span>` +
      `<span class="panel-char-badge">${getBadgeSVG(tc.badgeId, tc.color)}</span>`;
    // Achievement badges
    const badgeEl = document.getElementById(`panel-badges-${n}`);
    if (badgeEl) badgeEl.innerHTML = state.badges[i].map(b => `<span class="badge-icon">${getBadgeSVG(b,'#FFD700')}</span>`).join('');
  });
}

// ─── POWERUPS ─────────────────────────────────────────
function refreshPowerupUI() {
  const ti = state.teamIdx;
  const pu = state.powerups[ti];
  ['fifty','double','freeze','galaxy'].forEach(k => {
    const btn = document.getElementById(`pu-${k}`);
    if (!btn) return;
    btn.classList.toggle('used', !pu[k]);
    btn.disabled = !pu[k];
  });
  // Show double active state
  const gotit = document.getElementById('gotit-btn');
  if (gotit) gotit.classList.toggle('double-active', state.doublePts);
  if (gotit) gotit.textContent = state.doublePts ? 'Got it! +20' : 'Got it!';
}

function usePowerup(type) {
  const ti  = state.teamIdx;
  const pu  = state.powerups[ti];
  if (!pu[type]) return;
  pu[type] = false;

  if (type === 'fifty') {
    // Reveal hint immediately
    document.getElementById('hint-box').classList.remove('hidden');
    showPowerupEffect('50/50 ACTIVATED!', '#00C3FF');
  } else if (type === 'double') {
    state.doublePts = true;
    showPowerupEffect('×2 DOUBLE POINTS!', '#FFD700');
  } else if (type === 'freeze') {
    // Steal 5 pts from opponent
    const opp = 1 - ti;
    state.teams[opp].score = Math.max(0, state.teams[opp].score - 5);
    updateTeamPanels();
    showPowerupEffect('OPPONENT FROZEN! −5pts', '#00CFFF');
  } else if (type === 'galaxy') {
    // Show answer if available, otherwise enhanced hint
    const g = GAME_DATA[state.selectedIds[state.gameIdx]];
    if (g.hasAnswer) {
      document.getElementById('answer-box').classList.remove('hidden');
    }
    document.getElementById('hint-box').classList.remove('hidden');
    showPowerupEffect('ASK THE GALAXY!', '#9D4EDD');
  }

  refreshPowerupUI();
}

function showPowerupEffect(msg, color) {
  const ov = document.createElement('div');
  ov.className = 'feedback-overlay';
  ov.innerHTML = `<div class="feedback-bubble" style="color:${color};font-size:44px;">${msg}</div>`;
  document.body.appendChild(ov);
  setTimeout(() => ov.remove(), 1100);
}

// ─── STREAK + BADGE LOGIC ─────────────────────────────
function grantBadgeIfEarned(teamIdx) {
  const streak = state.streaks[teamIdx];
  const badges = state.badges[teamIdx];
  if (streak === 3 && !badges.includes('lightning')) badges.push('lightning');
  if (streak === 5 && !badges.includes('star'))      badges.push('star');
  if (state.teams[teamIdx].score >= 50 && !badges.includes('crown')) badges.push('crown');
}

// ─── GAME INTRO ───────────────────────────────────────
function showGameIntro() {
  const id = state.selectedIds[state.gameIdx];
  const g  = GAME_DATA[id];

  /* Route sibling challenge games to the dedicated screen */
  if (g && g.isSiblingChallenge) {
    showSiblingChallenge();
    return;
  }

  const w  = getWorld();
  const el  = (eid) => document.getElementById(eid);
  const setTxt = (eid, v) => { const e = el(eid); if (e) e.textContent = v; };
  setTxt('intro-badge',    `Mission ${state.gameIdx+1} of 6`);
  const introEmoji = el('intro-emoji'); if (introEmoji) introEmoji.innerHTML = getMissionIconSVG(g.id, 48);
  setTxt('intro-title',    g.name);
  setTxt('intro-desc',     g.description);
  setTxt('intro-t1-name',  state.teams[0].name);
  setTxt('intro-t2-name',  state.teams[1].name);
  const n1 = el('intro-t1-name'); if (n1) n1.style.color = state.teamCustom[0].color;
  const n2 = el('intro-t2-name'); if (n2) n2.style.color = state.teamCustom[1].color;
  setTxt('intro-t1-score', state.teams[0].score);
  setTxt('intro-t2-score', state.teams[1].score);
  setTxt('world-icon',     '');
  setTxt('world-name',     w.name);
  // Team characters + colors on score cards
  [0,1].forEach(i => {
    const tc = state.teamCustom[i];
    const n  = i + 1;
    const ch = el(`intro-char-${n}`);
    if (ch) { ch.innerHTML = getAvatarSVG(tc.charId, 48); ch.style.filter = `drop-shadow(0 0 14px ${tc.color})`; }
    const card = el(`intro-card-${n}`);
    if (card) {
      card.style.borderColor = tc.color + '55';
      card.style.boxShadow   = `0 0 36px ${tc.color}22, inset 0 1px 0 ${tc.color}12`;
    }
  });
  warpTo('screen-game-intro');
}

function beginCurrentGame() {
  state.round = 0;
  state.teamIdx = 0;
  showTeamSwitch();
}

// ─── TEAM SWITCH ──────────────────────────────────────
function showTeamSwitch() {
  if (window.SFX) window.SFX.teamSwitch();
  const id = state.selectedIds[state.gameIdx];
  const g  = GAME_DATA[id];
  const t  = state.teams[state.teamIdx];
  const tc = state.teamCustom[state.teamIdx];
  const card = document.getElementById('switch-card');
  card.style.borderColor = tc.color + '66';
  card.style.boxShadow   = `0 0 40px ${tc.color}22`;
  document.getElementById('switch-emoji').innerHTML =
    `<div style="width:80px;height:80px;margin:0 auto;filter:drop-shadow(0 0 18px ${tc.color})">${getAvatarSVG(tc.charId, 80)}</div>`;
  const switchName = document.getElementById('switch-team-name');
  switchName.textContent = t.name;
  switchName.style.color = tc.color;
  document.getElementById('switch-game-name').innerHTML = `<span style="display:inline-block;vertical-align:middle;margin-right:8px">${getMissionIconSVG(g.id,28)}</span>${g.name}`;
  showScreen('screen-switch');
}

// ─── AI HELPERS ────────────────────────────────────────
function _currentQuestion() { return state.currentQ || null; }
function _currentGame() {
  const id = state.selectedIds && state.selectedIds[state.gameIdx];
  return id ? GAME_DATA[id] : null;
}

// Top up questions from AI when pool is nearly empty
function _maybeTopUpQuestions(id) {
  const g = GAME_DATA[id];
  if (!g) return;
  const used    = state.usedQs[id] ? state.usedQs[id].size : 0;
  const total   = g.questions.length;
  const remaining = total - used;
  if (remaining > 3) return; // still plenty
  if (g._aiLoading) return;  // already fetching
  g._aiLoading = true;
  fetch('/api/generate-questions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ gameId: id, gameName: g.name, category: g.category, count: 8 }),
  })
    .then(r => r.json())
    .then(data => {
      if (Array.isArray(data.questions) && data.questions.length) {
        g.questions.push(...data.questions);
      }
      g._aiLoading = false;
    })
    .catch(() => { g._aiLoading = false; });
}

// ─── SHOW QUESTION ─────────────────────────────────────
function showQuestion() {
  const id = state.selectedIds[state.gameIdx];
  const g  = GAME_DATA[id];
  const q  = pickQuestion(id);
  _maybeTopUpQuestions(id);
  if (!q) {
    document.getElementById('qcard-game').textContent = g.name;
    document.getElementById('question-text').textContent =
      'All questions for this mission are used! Well played — you know this mission inside out!';
    document.getElementById('answer-box').classList.add('hidden');
    document.getElementById('hint-box').classList.add('hidden');
    document.getElementById('reveal-btn').style.display = 'none';
    document.getElementById('timer-wrap').style.display = 'none';
    showScreen('screen-playing');
    clearInterval(state.timerInt);
    return;
  }

  // Store on state for answer/hint
  state.currentQ = q;
  state.timerVal = 60;
  clearInterval(state.timerInt);

  // Update panels + world
  updateTeamPanels();
  updateWorldIndicator();
  document.getElementById('play-game-label').textContent = `Mission ${state.gameIdx+1}/6`;

  // Round pips (4 total per game)
  buildPips();

  // Team banner — use actual team color, not static CSS class
  const banner = document.getElementById('team-banner');
  const _tc = state.teamCustom[state.teamIdx];
  banner.className = 'team-banner';
  banner.style.cssText = `background:linear-gradient(135deg,${_tc.color}1A,${_tc.color}06);border-color:${_tc.color}60;color:${_tc.color};box-shadow:0 0 22px ${_tc.color}20;`;
  const _tname = state.teams[state.teamIdx].name;
  const _poss  = _tname.endsWith('s') ? `${_tname}'` : `${_tname}'s`;
  banner.innerHTML = `<span style="display:inline-block;vertical-align:middle;margin-right:8px">${getAvatarSVG(_tc.charId, 32)}</span>${_poss} Turn!`;

  // Question card
  document.getElementById('qcard-emoji').innerHTML = getMissionIconSVG(g.id, 32);
  document.getElementById('qcard-game').textContent  = g.name;
  const _qEl = document.getElementById('question-text');
  if (g.id === 'emoji-stories') {
    _qEl.innerHTML = _renderEmojiQuestion(q.q);
  } else {
    _qEl.textContent = _cleanQ(q.q);
  }

  // Reset answer/hint
  document.getElementById('answer-box').classList.add('hidden');
  document.getElementById('hint-box').classList.add('hidden');

  // Reveal button
  const revBtn = document.getElementById('reveal-btn');
  if (g.hasAnswer && q.a) {
    revBtn.style.display = '';
    document.getElementById('answer-text').textContent = q.a;
  } else {
    revBtn.style.display = 'none';
  }

  // Hint
  document.getElementById('hint-text').textContent = q.hint || '';

  // Reset double-pts display and powerup buttons
  refreshPowerupUI();

  showScreen('screen-playing');
  startTimer();
}

function buildPips() {
  const total = state.questionsPerTeam * 2;
  const pips = document.getElementById('round-pips');
  pips.innerHTML = '';
  for (let i = 0; i < total; i++) {
    const p = document.createElement('div');
    p.className = 'pip' + (i < state.round ? ' done' : (i === state.round ? ' active' : ''));
    pips.appendChild(p);
  }
}

function pickQuestion(id) {
  const g = GAME_DATA[id];
  const questions = g.questions;
  if (!questions || questions.length === 0) return null;
  const used = state.usedQs[id];
  const available = questions.map((_, i) => i).filter(i => !used.has(i));
  if (available.length === 0) return null;
  const ti = state.teamIdx;
  if (!state.teamDiffCounts[ti]) state.teamDiffCounts[ti] = {e:0, m:0, h:0};
  const dc = state.teamDiffCounts[ti];
  const minCount = Math.min(dc.e, dc.m, dc.h);
  const preferredDiffs = ['e','m','h'].filter(d => dc[d] === minCount);
  const preferredDiff = preferredDiffs[Math.floor(Math.random() * preferredDiffs.length)];
  const preferred = available.filter(i => (questions[i].d || 'm') === preferredDiff);
  const pool = preferred.length > 0 ? preferred : available;
  const idx = pool[Math.floor(Math.random() * pool.length)];
  used.add(idx);
  const d = questions[idx].d || 'm';
  dc[d] = (dc[d] || 0) + 1;
  return questions[idx];
}

// ─── TIMER ─────────────────────────────────────────────
const CIRC = 2 * Math.PI * 52; // ~327

function startTimer() {
  state.timerVal = 60;
  updateTimerUI(60);
  state.timerInt = setInterval(() => {
    state.timerVal--;
    updateTimerUI(state.timerVal);
    if (state.timerVal <= 0) {
      clearInterval(state.timerInt);
      document.getElementById('timer-circle').classList.add('urgent');
    }
  }, 1000);
}

function updateTimerUI(val) {
  const t = Math.max(val, 0);
  const pct = t / 60;
  const offset = CIRC * (1 - pct);
  const ring = document.getElementById('timer-circle');
  ring.style.strokeDashoffset = offset;
  ring.style.strokeDasharray  = CIRC;
  if (t <= 10) ring.classList.add('urgent');
  else         ring.classList.remove('urgent');
  document.getElementById('timer-num').textContent = t;
}

function stopTimer() {
  clearInterval(state.timerInt);
  state.timerInt = null;
}

// ─── HINT / ANSWER ─────────────────────────────────────
function showHint() {
  const q = _currentQuestion();
  const hintBox  = document.getElementById('hint-box');
  const hintText = document.getElementById('hint-text');

  // If we already have a hint, just show it
  if (q && q.hint) {
    hintBox.classList.remove('hidden');
    return;
  }

  // No hint — ask AI to generate one
  if (!q) { hintBox.classList.remove('hidden'); return; }
  hintText.textContent = 'Generating hint…';
  hintBox.classList.remove('hidden');

  const g = _currentGame();
  fetch('/api/generate-hint', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question: q.q, gameName: g ? g.name : '', answer: q.a || '' }),
  })
    .then(r => r.json())
    .then(data => {
      if (data.hint) {
        q.hint = data.hint;
        hintText.textContent = data.hint;
      } else {
        hintText.textContent = 'No hint available.';
      }
    })
    .catch(() => { hintText.textContent = 'Could not load hint.'; });
}
function revealAnswer() {
  document.getElementById('answer-box').classList.remove('hidden');
}

// ─── RECORD ANSWER ─────────────────────────────────────
function continueQuestion() {
  stopTimer();
  state.round++;
  const totalRounds = state.questionsPerTeam * 2;
  // Re-enable answer buttons for the next question
  const passBtn = document.querySelector('.btn-pass');
  const gotitBtn = document.getElementById('gotit-btn');
  if (passBtn)  { passBtn.disabled = false;  passBtn.style.opacity = ''; }
  if (gotitBtn) { gotitBtn.disabled = false; gotitBtn.style.opacity = ''; }
  if (state.round >= totalRounds) {
    showGameResult();
  } else {
    state.teamIdx = state.round % 2;
    showTeamSwitch();
  }
}

function recordAnswer(correct) {
  stopTimer();
  const ti = state.teamIdx;

  // Disable Pass and Got it! so only Continue can advance
  const passBtn = document.querySelector('.btn-pass');
  const gotitBtn = document.getElementById('gotit-btn');
  if (passBtn)  { passBtn.disabled = true;  passBtn.style.opacity = '0.4'; }
  if (gotitBtn) { gotitBtn.disabled = true; gotitBtn.style.opacity = '0.4'; }

  if (correct) {
    if (window.SFX) window.SFX.correct();
    const pts = state.doublePts ? 20 : 10;
    state.teams[ti].score += pts;
    state.streaks[ti]++;
    state.doublePts = false;
    grantBadgeIfEarned(ti);
    revealAnswer();
    showFeedback(`+${pts} pts!`, true);
    charReact(ti, 'correct');
  } else {
    if (window.SFX) window.SFX.wrong();
    state.streaks[ti] = 0;
    state.doublePts = false;
    showFeedback('Next time!', false);
    charReact(ti, 'wrong');
  }

  updateTeamPanels();
}

function showFeedback(msg, good) {
  const ov = document.createElement('div');
  ov.className = 'feedback-overlay';
  ov.innerHTML = `<div class="feedback-bubble" style="color:${good?'#00FF9F':'#FF6B6B'}">${msg}</div>`;
  document.body.appendChild(ov);
  setTimeout(() => ov.remove(), 950);

  if (good) {
    const scoreEl = document.getElementById(`play-t${state.teamIdx+1}-score`);
    if (scoreEl) {
      scoreEl.classList.add('score-popping');
      setTimeout(() => scoreEl.classList.remove('score-popping'), 600);
    }
  }
}

// ─── GAME RESULT ───────────────────────────────────────
function showGameResult() {
  if (window.SFX) window.SFX.missionComplete();
  const gameNum = state.gameIdx + 1;
  const el = (id) => document.getElementById(id);
  el('gresult-title').textContent    = `Mission ${gameNum} Complete!`;
  el('gresult-t1-name').textContent  = state.teams[0].name;
  el('gresult-t2-name').textContent  = state.teams[1].name;
  el('gresult-t1-score').textContent = state.teams[0].score;
  el('gresult-t2-score').textContent = state.teams[1].score;

  // Team characters + colors on result cards
  [0,1].forEach(i => {
    const tc   = state.teamCustom[i];
    const n    = i + 1;
    const ch   = el(`gresult-char-${n}`);
    const card = el(`gresult-card-${n}`);
    if (ch) { ch.innerHTML = getAvatarSVG(tc.charId, 48); ch.style.filter = `drop-shadow(0 0 16px ${tc.color})`; }
    if (card) {
      card.style.borderColor = tc.color + '55';
      card.style.boxShadow   = `0 0 36px ${tc.color}22, inset 0 1px 0 ${tc.color}12`;
    }
  });

  const diff = state.teams[0].score - state.teams[1].score;
  let leadText = '';
  if (diff > 0)      leadText = `${state.teams[0].name} is leading!`;
  else if (diff < 0) leadText = `${state.teams[1].name} is leading!`;
  else               leadText = "Perfectly tied!";
  el('gresult-lead').textContent = leadText;

  // Button label
  const isLast = state.gameIdx >= 5;
  const isSib  = (state.gameIdx === 1 || state.gameIdx === 3);
  el('gresult-next-btn').textContent = isLast ? 'FINAL RESULTS' : isSib ? 'SIBLING CHALLENGE' : 'NEXT MISSION';

  showScreen('screen-game-result');
}

function proceedAfterGame() {
  state.gameIdx++;
  if (state.gameIdx >= 6) {
    showFinalResults();
  } else if (state.gameIdx === 2 || state.gameIdx === 4) {
    showSiblingChallenge();
  } else {
    state.round  = 0;
    state.teamIdx = 0;
    showGameIntro();
  }
}

// ─── SIBLING CHALLENGE ─────────────────────────────────
function showSiblingChallenge() {
  const ch = SIBLING_CHALLENGES[state.siblingIdx % SIBLING_CHALLENGES.length];
  state.siblingIdx++;
  const el = (id) => document.getElementById(id);
  el('sibling-emoji').textContent      = '';
  el('sibling-chal-title').textContent = ch.title || '';
  el('sibling-chal-desc').textContent  = ch.desc;
  el('sibling-pts').textContent        = ch.pts;
  // Show team characters
  [0,1].forEach(i => {
    const tc = state.teamCustom[i];
    const sc = el(`sibling-char-${i+1}`);
    if (sc) { sc.innerHTML = getAvatarSVG(tc.charId, 64); sc.style.filter = `drop-shadow(0 0 18px ${tc.color})`; }
  });
  showScreen('screen-sibling');
}

function completeSibling(success) {
  if (success) {
    const ch = SIBLING_CHALLENGES[(state.siblingIdx - 1) % SIBLING_CHALLENGES.length];
    state.teams[0].score += ch.pts;
    state.teams[1].score += ch.pts;
    showFeedbackGlobal(`Both teams +${ch.pts} pts!`);
    setTimeout(() => continueToNextGame(), 1100);
  } else {
    continueToNextGame();
  }
}

function continueToNextGame() {
  if (state.gameIdx < 6) {
    state.round  = 0;
    state.teamIdx = 0;
    showGameIntro();
  } else {
    showFinalResults();
  }
}

function showFeedbackGlobal(msg) {
  const ov = document.createElement('div');
  ov.className = 'feedback-overlay';
  ov.innerHTML = `<div class="feedback-bubble" style="color:#FFD600;font-size:56px;">${msg}</div>`;
  document.body.appendChild(ov);
  setTimeout(() => ov.remove(), 1100);
}

// ─── FINAL RESULTS ─────────────────────────────────────
function showFinalResults() {
  const el = (id) => document.getElementById(id);
  const s0 = state.teams[0].score;
  const s1 = state.teams[1].score;

  el('final-t1-name').textContent  = state.teams[0].name;
  el('final-t2-name').textContent  = state.teams[1].name;
  el('final-t1-score').textContent = s0;
  el('final-t2-score').textContent = s1;

  let winName, msg;
  if (s0 > s1) {
    winName = state.teams[0].name;
    msg = `${state.teams[0].name} wins with ${s0} points! Amazing game!`;
    el('final-t1-card').classList.add('winner-highlight');
  } else if (s1 > s0) {
    winName = state.teams[1].name;
    msg = `${state.teams[1].name} wins with ${s1} points! Incredible!`;
    el('final-t2-card').classList.add('winner-highlight');
  } else {
    winName = "IT'S A TIE!";
    msg = `What a perfectly balanced game! Both teams are champions!`;
  }

  const crownEl = el('winner-crown');
  if (crownEl) {
    crownEl.innerHTML = `<svg class="trophy-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tg1" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#FFE566"/>
          <stop offset="100%" stop-color="#FF8C00"/>
        </radialGradient>
        <radialGradient id="tg2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FFD700" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#FFD700" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="50" cy="90" rx="22" ry="5" fill="url(#tg2)" class="trophy-glow-base"/>
      <rect x="40" y="72" width="20" height="10" rx="4" fill="url(#tg1)"/>
      <rect x="34" y="80" width="32" height="7" rx="4" fill="url(#tg1)"/>
      <path d="M28,30 L28,62 Q28,70 50,70 Q72,70 72,62 L72,30 Z" fill="url(#tg1)"/>
      <path d="M28,34 Q14,32 13,20 Q12,10 28,12 L28,34 Z" fill="url(#tg1)"/>
      <path d="M72,34 Q86,32 87,20 Q88,10 72,12 L72,34 Z" fill="url(#tg1)"/>
      <ellipse cx="50" cy="46" rx="16" ry="18" fill="rgba(255,220,80,0.35)"/>
      <path d="M44,38 L50,28 L56,38 L66,38 L58,44 L62,56 L50,48 L38,56 L42,44 L34,38 Z" fill="rgba(255,255,255,0.55)"/>
    </svg>`;
    crownEl.style.fontSize = '0';
  }

  el('winner-name').textContent = winName;
  el('final-msg').textContent   = msg;

  // Show team characters on final screen
  const fc1 = el('final-char-1');
  const fc2 = el('final-char-2');
  if (fc1) { fc1.innerHTML = getAvatarSVG(state.teamCustom[0].charId, 64); fc1.style.filter = `drop-shadow(0 0 20px ${state.teamCustom[0].color})`; }
  if (fc2) { fc2.innerHTML = getAvatarSVG(state.teamCustom[1].charId, 64); fc2.style.filter = `drop-shadow(0 0 20px ${state.teamCustom[1].color})`; }

  saveGameResult();
  showScreen('screen-final');
  launchConfetti();
  charReact(s0 > s1 ? 0 : s1 > s0 ? 1 : state.teamIdx, 'win');
}

// ─── CONFETTI ──────────────────────────────────────────
function launchConfetti() {
  const container = document.getElementById('confetti-container');
  container.innerHTML = '';
  const colours = ['#FFD600','#1565C0','#2E7D32','#E65100','#FFFFFF','#E91E63','#9C27B0'];
  for (let i = 0; i < 120; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    const colour = colours[Math.floor(Math.random() * colours.length)];
    const left   = Math.random() * 100;
    const cx     = (Math.random() - 0.5) * 200;
    el.style.cssText = `
      left:${left}%;
      background:${colour};
      --cdur:${1.5 + Math.random()*2}s;
      --cdelay:${Math.random()*1.5}s;
      --cx:${cx}px;
      width:${6+Math.random()*8}px;
      height:${10+Math.random()*12}px;
      border-radius:${Math.random() > 0.5 ? '50%' : '2px'};
    `;
    container.appendChild(el);
  }
  setTimeout(() => { container.innerHTML = ''; }, 5000);
}

// ─── RESET ─────────────────────────────────────────────
function resetGame() {
  state.selectedIds = [];
  state.gameIdx = 0;
  state.round   = 0;
  state.teamIdx = 0;
  state.siblingIdx = 0;
  state.usedQs  = {};
  state.streaks  = [0, 0];
  state.badges   = [[], []];
  state.doublePts = false;
  state.powerups = [
    { fifty:true, double:true, freeze:true, galaxy:true },
    { fifty:true, double:true, freeze:true, galaxy:true }
  ];
  state.teams[0].score = 0;
  state.teams[1].score = 0;
  // Reset final screen highlights
  document.getElementById('final-t1-card').classList.remove('winner-highlight');
  document.getElementById('final-t2-card').classList.remove('winner-highlight');
  document.getElementById('winner-crown').innerHTML = '';
  showScreen('screen-welcome');
}

function playAgain() {
  // Same crews, fresh game — jump straight to mission selection
  resetGame();
  showMissionSelect();
}

function newCrews() {
  // Full restart — go back to team setup with cleared names
  resetGame();
  const t1 = document.getElementById('team1-input');
  const t2 = document.getElementById('team2-input');
  if (t1) t1.value = '';
  if (t2) t2.value = '';
  document.getElementById('setup-phase-0').style.display   = '';
  document.getElementById('setup-phase-custom').style.display = 'none';
  _refreshNameSuggestions();
  showScreen('screen-teams');
}

// ─── TEAM NAME SUGGESTIONS ─────────────────────────────────────────────────────
const _NAME_POOL = [
  // Space crew titles
  'Astro Aces', 'Comet Chasers', 'Cosmic Rays', 'Dark Matter', 'Event Horizon',
  'Galactic Guard', 'Gravity Defiers', 'Interstellar', 'Light Speeders', 'Lunar Legends',
  'Meteor Squad', 'Milky Way Crew', 'Mission Control', 'Moon Walkers', 'Nebula Knights',
  'Nova Squad', 'Orbit Heroes', 'Planet Hoppers', 'Pulsar Pirates', 'Quasar Quest',
  'Rocket Riders', 'Solar Flares', 'Star Captains', 'Starship Crew', 'Stardust',
  'Supernova', 'Void Voyagers', 'Warp Jumpers', 'Zero Gravity', 'Aurora Squad',
  'Blackhole Busters', 'Cosmic Crusaders', 'Deep Space', 'Exo Explorers', 'Flux Riders',
  'Galaxy Scouts', 'Hyperspace', 'Ion Blasters', 'Jupiter Force', 'Kuiper Crew',
  'Laser Legends', 'Magnetar', 'Neutron Stars', 'Photon Fleet', 'Quantum Leap',
  'Redshift Crew', 'Saturn Rings', 'Tidal Force', 'Ultraviolet', 'Wormhole Gang',
  // Character-inspired
  'Alien Alliance', 'Bot Brigade', 'Commander Pack', 'Dino Pilots', 'Dragon Riders',
  'Hero League', 'Princess Guard', 'Pirate Fleet', 'Robot Rebellion', 'Space Cat Clan',
  'Space Dog Pack', 'Scientist Society', 'Wizard Circle', 'Cosmic Knights', 'Phantom Crew',
  // Mission-inspired
  'Art Asteroids', 'Dilemma Drifters', 'Enigma Elite', 'Logic Lords', 'Memory Masters',
  'Nebula Riddlers', 'Nova Learners', 'Pixel Pilots', 'Quiz Quasars', 'Riddle Rangers',
  'Speed Demons', 'Story Sages', 'Jungle Cadets', 'Dragon Tamers', 'Paint Nebula',
  // Fun space-flavoured
  'Big Bang', 'Cosmic Boom', 'Eclipse Gang', 'Frozen Orbit', 'Gravity Wells',
  'Laser Beams', 'Moon Dust', 'Neon Nebula', 'Orbit Breakers', 'Parallel Crew',
  'Quantum Squad', 'Rocket Fuel', 'Space Jam', 'Star Forge', 'Titan Force',
  'Ultra Crew', 'Velocity', 'Warp Core', 'X-Ray Crew', 'Zenith Squad',
];

function _refreshNameSuggestions() {
  const pool    = _NAME_POOL.slice(); // copy
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  // Pick 4 for each team (non-overlapping)
  const t1Names = pool.slice(0, 4);
  const t2Names = pool.slice(4, 8);

  [1, 2].forEach(team => {
    const el = document.getElementById(`name-sugg-${team}`);
    if (!el) return;
    const names = team === 1 ? t1Names : t2Names;
    el.innerHTML = names.map(n =>
      `<span onclick="window.setName(${team},'${n}')">${n}</span>`
    ).join('');
  });
}

// ─── ADD SHAKE KEYFRAME VIA JS ─────────────────────────
(function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%,100%{ transform: translateX(0); }
      20%{ transform: translateX(-8px) rotate(-2deg); }
      40%{ transform: translateX(8px)  rotate(2deg); }
      60%{ transform: translateX(-5px) rotate(-1deg); }
      80%{ transform: translateX(5px)  rotate(1deg); }
    }
  `;
  document.head.appendChild(style);
})();

// ─── SVG ASSET LIBRARY ────────────────────────────────
// Strip leading emoji/symbols from question text for display
function _cleanQ(str) {
  return (str||'').replace(/^[\u{1F000}-\u{1FFFF}\u{2600}-\u{27FF}\u{2300}-\u{23FF}\u{1F300}-\u{1F9FF}️⃣‍\s]+/gu,'').trim();
}

// ─── Emoji Stories: placeholder → emoji map ───────────────────────────────────
const _EMOJI_MAP = {
  // Characters
  'girl':'👧','boy':'👦','prince':'🤴','princess':'👸','king':'👑','king and queen':'🤴👸',
  'baby':'👶','old man':'👴','soldier':'💂','emperor':'👑','three uncles':'👴👴👴',
  'brother':'👦','sister':'👧','two sisters':'👭','three girls':'👧👧👧','lost boys':'👦',
  'cobbler':'👞','british boy':'👦🇬🇧','boy wizard':'🧙‍♂️','boy scout':'🎒',
  // Animals
  'wolf':'🐺','big bad wolf':'🐺','wolf pack':'🐺🐺','three pigs':'🐷🐷🐷',
  'bear':'🐻','small bear':'🐻','three bears':'🐻🐻🐻','panther':'🐆',
  'lion cub':'🦁','gorillas':'🦍','apes':'🦍','raised by apes':'🦍','raised by wolves':'🐺',
  'fish':'🐟','clownfish dad':'🐠','blue fish':'🐟','frog':'🐸',
  'duck':'🦆','ugly duck':'🦆','beautiful swan':'🦢','mermaid':'🧜‍♀️',
  'pelican':'🦅','crab':'🦀','whale':'🐋','cricket':'🦗','cricket guide':'🦗',
  'fox':'🦊','dog':'🐕','gingerbread man':'🍪','ant colony':'🐜',
  'grasshopper villain':'🦗😈','circus bugs':'🎪🐛','tiny people':'🧝',
  // Clothing & accessories
  'red hood':'🔴','glass slipper':'👠','big hat':'🎩','sneakers':'👟',
  'white gloves':'🥊','silver shoes':'👠','glove':'🧤','invisible cloak':'🫥',
  'invisible clothes':'🫥','masks':'🎭',
  // Objects
  'basket':'🧺','suitcase':'🧳','sandwich':'🥪','apple':'🍎','pea':'🟢',
  'magic lamp':'🪔','wand':'🪄','spell':'🪄','broomstick':'🧹',
  'bricks':'🧱','puppet':'🪆','wooden puppet strings':'🪆','spinning wheel':'🌀',
  'enchanted rose':'🌹','magic mirror':'🪞','breadcrumbs':'🍞','golden ball':'🟡',
  'baton':'🥉','puck':'🏒','hockey stick':'🥍','boxing ring':'🥊','bell':'🔔',
  'championship belt':'🏆','bat':'⚾','ball':'⚾','racket':'🎾','net':'🎾',
  'small green ball':'🎾','hoop':'🏀','round ball':'⚽','goal net':'🥅',
  'cooking pot':'🍲','shrink ray':'🔫','wand':'🪄','lightsaber':'⚔️',
  'porridge':'🥣','ice cream':'🍦','pizza truck':'🚕',
  // Places & settings
  'forest':'🌲','jungle':'🌴','pond':'🪷','ocean':'🌊','river':'🌊',
  'savanna':'🌾','bayou':'🌿','coral reef':'🪸','grass court':'🌿',
  'tall tower':'🗼','house':'🏠','grandmother house':'🏠','old house':'🏚️',
  'forest cottage':'🏡','ice castle':'🏰❄️','beast castle':'🏰',
  'candy house':'🍬🏠','emerald city':'💚🏙️','pride rock':'🪨',
  'train station':'🚉','paris':'🗼','fancy restaurant':'🍽️','magic school':'🏫',
  'underground lake':'🏞️','scare factory':'🏭','living suburb':'🏘️',
  'diamond field':'💎','oval track':'🏃','ice rink':'⛸️','court':'🏟️',
  'boxing ring':'🥊','swimming pool':'🏊','child bedroom':'🛏️',
  'park':'🌳','south america':'🌎',
  // Concepts & actions
  'blowing':'💨','flying':'✈️','climbing':'🧗','running':'🏃','eating':'😋',
  'eat':'😋','kiss':'💋','sleeping':'😴','growing up':'📈','transformation':'✨',
  'fairy dust':'✨','three wishes':'✨✨✨','let it go':'🎤','never grow up':'🙅',
  'love story':'💕','love breaks curse':'💕','true love kiss':'💋❤️',
  'curse':'😈','friendship':'🤝','adventure':'🗺️','search':'🔍',
  'lost':'❓','flying carpet':'🪁','rope swinging':'🪢',
  'secret identity':'🕵️','baby fire powers':'🔥👶','slam dunk':'⬆️🏀',
  'dribble':'🏃','kick':'🦵','home run':'🏃💨','fast skating':'⛸️💨',
  'hand off':'🤝','sprint':'💨','relay exchange zone':'🔄','flip turn':'🔄',
  'stand up':'✊','harvest':'🌾','power':'⚡','screaming children':'😱',
  'child shouts truth':'👦📢','left jab':'🥊','anyone can cook':'👨‍🍳',
  'shoes made':'👟✨','morning surprise':'🌅','run run as fast as you can':'🏃💨',
  'infinity and beyond':'♾️','wish':'⭐','secret revealed':'🔍',
  'many mattresses':'🛏️🛏️','hundred years':'💤💤','short memory':'🧠❓',
  'ocean journey':'🌊🗺️',
  // Characters (named)
  'genie':'🧞','villain':'😈','friendly ghost':'👻',
  'superhero family':'🦸‍♀️🦸‍♂️','iron man':'🦾','green giant':'💚',
  'thunderstorm god':'⚡🔨','archer':'🏹','black spy':'🕵️',
  'twelve dancing princesses':'👸💃','young chef rat':'🐀👨‍🍳',
  'toy cowboy':'🤠','toy astronaut':'👨‍🚀','buzz lightyear':'👨‍🚀🚀',
  'food critic':'📝','tailors':'🪡',
  // Nature
  'snowflake':'❄️','sun':'☀️','moon':'🌙','plant':'🌱','waterfall':'💦',
  'twin suns':'☀️☀️','circle':'⭕',
  // Transport
  'pirate ship':'🏴‍☠️','spaceship':'🚀','rocket':'🚀','pumpkin carriage':'🎃🚗',
  'flying carpet':'🛸','floating house':'🏠🎈','bicycle':'🚲',
  // Misc
  'midnight clock':'🕛','long hair':'👩‍🦱','golden hair':'👩‍🦱✨',
  'glass slipper':'👠','seven small men':'🧑🧑🧑','wooden':'🪵',
  'nose grows':'👃','real boy':'✅','pumpkin carriage':'🎃',
  'lightning bolt scar':'⚡','owl':'🦉','thousands of balloons':'🎈🎈',
  'two teams':'👥','referee whistle':'🔔','referee':'🧑‍⚖️',
  'shield logo':'🛡️','team':'👥','family':'👨‍👩‍👧‍👦',
  'yellow minion':'🟡','three girls':'👧👧👧',
  'sleeping beauty':'💤👸','enchanted forest':'🌲✨',
  'hidden treasure':'💎','dragon':'🐉','crown':'👑',
  'magic mirror':'🪞✨','brave knight':'⚔️','ocean swallowed':'🌊',
  'blue fairy':'🧚💙','pitch':'🧱','ice castle':'🏰❄️',
  'desk':'📚','girl with books':'👧📚','map':'🗺️',
  'eight lanes':'8️⃣🏊','stopwatch':'⏱️','goggles':'🥽','gold medal':'🥇',
  'doors':'🚪','monster world':'👾','two best monster friends':'👾👾',
  'night':'🌙','tin woodsman':'🤖','scarecrow':'🌾🎃',
  'cowardly lion':'🦁','yellow brick road':'🟡🛤️','wizard':'🧙',
  'four runners':'🏃🏃','test':'✅','pea':'🟢','sliding':'🏂',
  'voice':'🎤','red hair':'👩‍🦰','human world':'🌍','deuce':'🎾',
  'space':'🌌','desert planet':'🏜️','dark side':'😈','force':'💫',
  'moving day':'📦','buzz wings':'🚀','grand ship':'🚢',
  'leaf cutter':'🌿','ant':'🐜','penalty box':'⬛','goalie mask':'😷',
  'happy face':'😊','alien':'👽','ice':'❄️','snow':'❄️',
  // Previously missing tokens
  'frozen kingdom':'❄️🏰',
  'jazz music':'🎷🎵',
  'new orleans':'🎺🌆',
  'pitcher':'🤾⚾',
  'robot':'🤖',
  'trash planet':'🗑️🌍',
  'witch oven':'🧙‍♀️🔥',
  'beds':'🛏️',
  'just right':'✅',
};

function _renderEmojiQuestion(rawText) {
  // Replace every [token] with its emoji (or keep as-is if unknown)
  const resolved = rawText.replace(/\[([^\]]+)\]/gi, (_, key) => {
    const e = _EMOJI_MAP[key.trim().toLowerCase()];
    return e ? `<span class="eq-token">${e}</span>` : `<span class="eq-token">[${key}]</span>`;
  });
  // Split "Decode this ...: [emojis]" into a header + emoji grid
  const colonIdx = resolved.indexOf(':');
  if (colonIdx > -1) {
    const header = resolved.substring(0, colonIdx + 1).trim();
    const body   = resolved.substring(colonIdx + 1).trim();
    return `<span class="eq-prefix">${header}</span><div class="eq-grid">${body}</div>`;
  }
  return resolved;
}

function getAvatarSVG(charId, size) {
  size = size || 80;
  const s = size, h = size;
  const av = {
    astronaut:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <defs><radialGradient id="ah1" cx="38%" cy="32%" r="62%"><stop offset="0%" stop-color="#ddeeff"/><stop offset="100%" stop-color="#1a3060"/></radialGradient><radialGradient id="av1" cx="33%" cy="28%" r="68%"><stop offset="0%" stop-color="#2244aa" stop-opacity="0.5"/><stop offset="100%" stop-color="#040c24"/></radialGradient></defs>
      <circle cx="40" cy="40" r="38" fill="#1a90ff" opacity="0.07"/>
      <circle cx="40" cy="38" r="28" fill="url(#ah1)" stroke="#88bbff" stroke-width="1.5"/>
      <ellipse cx="40" cy="38" rx="20" ry="16" fill="url(#av1)"/>
      <ellipse cx="33" cy="30" rx="8" ry="5" fill="white" opacity="0.1" transform="rotate(-20,33,30)"/>
      <circle cx="31" cy="31" r="1.3" fill="white" opacity="0.75"/><circle cx="49" cy="29" r="0.9" fill="white" opacity="0.55"/><circle cx="40" cy="26" r="0.7" fill="white" opacity="0.5"/>
      <circle cx="40" cy="38" r="28" fill="none" stroke="#5588ee" stroke-width="2" opacity="0.4"/>
      <path d="M14,62 Q25,73 40,73 Q55,73 66,62" fill="#152850" stroke="#3366cc" stroke-width="2"/>
      <circle cx="15" cy="46" r="2.8" fill="#2244aa" stroke="#88aaff" stroke-width="0.8"/>
      <circle cx="65" cy="46" r="2.8" fill="#2244aa" stroke="#88aaff" stroke-width="0.8"/>
      <line x1="40" y1="10" x2="40" y2="4" stroke="#88aaff" stroke-width="1.5"/><circle cx="40" cy="3" r="2.5" fill="#00c3ff" opacity="0.9"/>
    </svg>`,

    alien:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <ellipse cx="40" cy="44" rx="28" ry="30" fill="#163320" stroke="#33dd66" stroke-width="1.5"/>
      <ellipse cx="34" cy="32" rx="14" ry="16" fill="#1e4a28" opacity="0.55"/>
      <ellipse cx="27" cy="40" rx="9" ry="10" fill="#060e10" stroke="#00ee88" stroke-width="1"/>
      <ellipse cx="53" cy="40" rx="9" ry="10" fill="#060e10" stroke="#00ee88" stroke-width="1"/>
      <ellipse cx="40" cy="27" rx="7" ry="8" fill="#060e10" stroke="#88ff44" stroke-width="1"/>
      <ellipse cx="27" cy="41" rx="5" ry="6" fill="#00ee88" opacity="0.85"/>
      <ellipse cx="53" cy="41" rx="5" ry="6" fill="#00ee88" opacity="0.85"/>
      <ellipse cx="40" cy="28" rx="3.5" ry="4" fill="#88ff44" opacity="0.85"/>
      <circle cx="25" cy="38" r="1.5" fill="white" opacity="0.7"/><circle cx="51" cy="38" r="1.5" fill="white" opacity="0.7"/><circle cx="38" cy="25" r="1.2" fill="white" opacity="0.7"/>
      <path d="M28,56 Q40,65 52,56" stroke="#44ff88" stroke-width="2" fill="none" stroke-linecap="round"/>
      <line x1="28" y1="15" x2="20" y2="3" stroke="#44ff88" stroke-width="1.5"/><line x1="52" y1="15" x2="60" y2="3" stroke="#44ff88" stroke-width="1.5"/>
      <circle cx="20" cy="3" r="3" fill="#00ff88"/><circle cx="60" cy="3" r="3" fill="#88ff44"/>
    </svg>`,

    robot:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <defs><linearGradient id="rg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#c8d8e8"/><stop offset="100%" stop-color="#5a7080"/></linearGradient></defs>
      <rect x="12" y="18" width="56" height="50" rx="8" fill="url(#rg1)" stroke="#99bbcc" stroke-width="1.5"/>
      <rect x="14" y="20" width="52" height="20" rx="6" fill="white" opacity="0.11"/>
      <rect x="18" y="28" width="44" height="20" rx="4" fill="#081018"/>
      <rect x="22" y="32" width="7" height="6" rx="1.5" fill="#ff4400" opacity="0.9"/>
      <rect x="22" y="40" width="7" height="6" rx="1.5" fill="#ff6600" opacity="0.65"/>
      <rect x="31" y="32" width="7" height="6" rx="1.5" fill="#ff6600" opacity="0.65"/>
      <rect x="31" y="40" width="7" height="6" rx="1.5" fill="#ff3300" opacity="0.45"/>
      <rect x="42" y="32" width="7" height="6" rx="1.5" fill="#ff4400" opacity="0.9"/>
      <rect x="42" y="40" width="7" height="6" rx="1.5" fill="#ff6600" opacity="0.65"/>
      <rect x="51" y="32" width="7" height="6" rx="1.5" fill="#ff6600" opacity="0.65"/>
      <rect x="51" y="40" width="7" height="6" rx="1.5" fill="#ff3300" opacity="0.45"/>
      <rect x="22" y="54" width="36" height="8" rx="3" fill="#081018"/>
      <line x1="28" y1="57" x2="28" y2="62" stroke="#3388ff" stroke-width="2" stroke-linecap="round"/>
      <line x1="35" y1="55" x2="35" y2="63" stroke="#3388ff" stroke-width="2" stroke-linecap="round"/>
      <line x1="40" y1="55" x2="40" y2="63" stroke="#55aaff" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="45" y1="55" x2="45" y2="63" stroke="#3388ff" stroke-width="2" stroke-linecap="round"/>
      <line x1="52" y1="57" x2="52" y2="62" stroke="#3388ff" stroke-width="2" stroke-linecap="round"/>
      <circle cx="14" cy="22" r="3" fill="#7a9aaa" stroke="#99bbcc" stroke-width="0.8"/>
      <circle cx="66" cy="22" r="3" fill="#7a9aaa" stroke="#99bbcc" stroke-width="0.8"/>
      <circle cx="14" cy="64" r="3" fill="#7a9aaa" stroke="#99bbcc" stroke-width="0.8"/>
      <circle cx="66" cy="64" r="3" fill="#7a9aaa" stroke="#99bbcc" stroke-width="0.8"/>
      <rect x="37" y="8" width="6" height="10" rx="2" fill="#99bbcc"/><circle cx="40" cy="6" r="4" fill="#3388ff" opacity="0.85"/>
    </svg>`,

    spacecat:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <polygon points="14,28 22,10 32,28" fill="#b86030"/><polygon points="48,28 58,10 66,28" fill="#b86030"/>
      <polygon points="16,27 22,13 30,27" fill="#ff9955" opacity="0.65"/><polygon points="50,27 58,13 64,27" fill="#ff9955" opacity="0.65"/>
      <circle cx="40" cy="46" r="27" fill="#cc7a3a" stroke="#ff9955" stroke-width="1.2"/>
      <ellipse cx="40" cy="36" rx="17" ry="12" fill="#e09050" opacity="0.55"/>
      <ellipse cx="40" cy="70" rx="20" ry="7" fill="#1e2e5e" stroke="#4477ff" stroke-width="1.8"/>
      <ellipse cx="28" cy="44" rx="8" ry="10" fill="#080c08" stroke="#55ff33" stroke-width="0.9"/>
      <ellipse cx="52" cy="44" rx="8" ry="10" fill="#080c08" stroke="#55ff33" stroke-width="0.9"/>
      <ellipse cx="28" cy="44" rx="2.5" ry="7.5" fill="#55ff33" opacity="0.9"/>
      <ellipse cx="52" cy="44" rx="2.5" ry="7.5" fill="#55ff33" opacity="0.9"/>
      <circle cx="25" cy="40" r="2" fill="white" opacity="0.75"/><circle cx="49" cy="40" r="2" fill="white" opacity="0.75"/>
      <ellipse cx="40" cy="54" rx="4" ry="3" fill="#bb5533"/>
      <path d="M36,56 Q40,60 44,56" stroke="#bb5533" stroke-width="1.5" fill="none"/>
      <line x1="6" y1="51" x2="30" y2="53" stroke="#ffaa66" stroke-width="0.9" opacity="0.7"/><line x1="6" y1="55" x2="30" y2="55" stroke="#ffaa66" stroke-width="0.9" opacity="0.7"/>
      <line x1="50" y1="53" x2="74" y2="51" stroke="#ffaa66" stroke-width="0.9" opacity="0.7"/><line x1="50" y1="55" x2="74" y2="55" stroke="#ffaa66" stroke-width="0.9" opacity="0.7"/>
    </svg>`,

    spacedog:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <ellipse cx="13" cy="46" rx="13" ry="20" fill="#7a5025" transform="rotate(-18,13,46)"/>
      <ellipse cx="67" cy="46" rx="13" ry="20" fill="#7a5025" transform="rotate(18,67,46)"/>
      <ellipse cx="13" cy="46" rx="9" ry="16" fill="#bb7840" transform="rotate(-18,13,46)" opacity="0.5"/>
      <ellipse cx="67" cy="46" rx="9" ry="16" fill="#bb7840" transform="rotate(18,67,46)" opacity="0.5"/>
      <circle cx="40" cy="41" r="26" fill="#9a602a"/>
      <ellipse cx="40" cy="35" rx="17" ry="13" fill="#b87840" opacity="0.5"/>
      <ellipse cx="40" cy="53" rx="13" ry="10" fill="#bb7840"/>
      <circle cx="28" cy="38" r="8" fill="#090604"/><circle cx="52" cy="38" r="8" fill="#090604"/>
      <circle cx="28" cy="38" r="5" fill="#3a1a00" opacity="0.8"/><circle cx="52" cy="38" r="5" fill="#3a1a00" opacity="0.8"/>
      <circle cx="25" cy="35" r="2.5" fill="white" opacity="0.8"/><circle cx="49" cy="35" r="2.5" fill="white" opacity="0.8"/>
      <ellipse cx="40" cy="51" rx="6" ry="4.5" fill="#280e00"/>
      <circle cx="38" cy="50" r="1.5" fill="white" opacity="0.35"/>
      <path d="M33,61 Q40,70 47,61" fill="#ff5577" stroke="none"/><path d="M36,63 Q40,68 44,63" fill="#ff3355" stroke="none"/>
      <rect x="20" y="63" width="40" height="10" rx="5" fill="#2a3a7a" stroke="#3366ff" stroke-width="1.5"/>
      <circle cx="40" cy="68" r="3.5" fill="#ffcc00"/>
    </svg>`,

    dino:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <polygon points="22,22 27,8 32,22" fill="#1e7030"/><polygon points="34,17 40,4 46,17" fill="#2a9040"/><polygon points="48,22 53,8 58,22" fill="#1e7030"/>
      <ellipse cx="40" cy="44" rx="27" ry="25" fill="#246630" stroke="#3aaa50" stroke-width="1.5"/>
      <ellipse cx="40" cy="35" rx="17" ry="12" fill="#30884a" opacity="0.5"/>
      <rect x="8" y="37" width="64" height="13" rx="5" fill="#22aaff" opacity="0.25" stroke="#44ccff" stroke-width="0.8"/>
      <circle cx="26" cy="43" r="11" fill="#08182a" stroke="#44ccff" stroke-width="2"/>
      <circle cx="26" cy="43" r="7" fill="#0c2236"/><circle cx="26" cy="43" r="5" fill="#102a40"/>
      <circle cx="54" cy="43" r="11" fill="#08182a" stroke="#44ccff" stroke-width="2"/>
      <circle cx="54" cy="43" r="7" fill="#0c2236"/><circle cx="54" cy="43" r="5" fill="#102a40"/>
      <circle cx="23" cy="40" r="2.5" fill="white" opacity="0.35"/><circle cx="51" cy="40" r="2.5" fill="white" opacity="0.35"/>
      <path d="M25,60 Q40,69 55,60" stroke="#3aaa50" stroke-width="2" fill="none"/>
      <line x1="31" y1="60" x2="31" y2="64" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="38" y1="61" x2="38" y2="65" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="45" y1="61" x2="45" y2="65" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,

    pirate:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <path d="M10,38 L24,14 L56,14 L70,38 Z" fill="#181818" stroke="#aa8800" stroke-width="1.5"/>
      <rect x="7" y="36" width="66" height="8" rx="4" fill="#2a2a2a" stroke="#aa8800" stroke-width="1"/>
      <circle cx="40" cy="24" r="9" fill="#d8d4c0"/><circle cx="37" cy="22" r="3" fill="#181818"/><circle cx="43" cy="22" r="3" fill="#181818"/>
      <path d="M35,27 Q40,30 45,27" stroke="#181818" stroke-width="1.5" fill="none"/>
      <line x1="33" y1="29" x2="35" y2="32" stroke="#d8d4c0" stroke-width="2.5"/><line x1="40" y1="30" x2="40" y2="33" stroke="#d8d4c0" stroke-width="2.5"/><line x1="47" y1="29" x2="45" y2="32" stroke="#d8d4c0" stroke-width="2.5"/>
      <ellipse cx="40" cy="54" rx="22" ry="19" fill="#b87840"/>
      <ellipse cx="27" cy="50" rx="10" ry="8" fill="#181818"/>
      <path d="M17,43 Q27,38 37,43" stroke="#181818" stroke-width="2" fill="none"/>
      <path d="M17,50 Q27,55 37,50" stroke="#181818" stroke-width="2" fill="none"/>
      <circle cx="53" cy="50" r="7" fill="#181818"/><circle cx="53" cy="50" r="4.5" fill="#aa3300"/>
      <circle cx="51" cy="48" r="1.5" fill="white" opacity="0.65"/>
      <path d="M46,40 L52,60" stroke="#995533" stroke-width="1.5" opacity="0.55"/>
      <path d="M30,66 Q40,73 54,64" stroke="#7a4422" stroke-width="2" fill="none"/>
    </svg>`,

    superhero:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <path d="M12,52 Q8,74 18,80 Q40,70 62,80 Q72,74 68,52" fill="#cc0022" opacity="0.88"/>
      <circle cx="40" cy="43" r="24" fill="#e8b870"/>
      <path d="M22,53 Q40,67 58,53 Q55,70 40,72 Q25,70 22,53" fill="#d8a060"/>
      <path d="M16,38 Q20,28 29,30 Q40,26 51,30 Q60,28 64,38 Q52,48 40,46 Q28,48 16,38Z" fill="#0022cc"/>
      <ellipse cx="28" cy="39" rx="6.5" ry="5.5" fill="#0011aa" stroke="#4466ff" stroke-width="0.8"/>
      <ellipse cx="52" cy="39" rx="6.5" ry="5.5" fill="#0011aa" stroke="#4466ff" stroke-width="0.8"/>
      <circle cx="26" cy="37" r="2" fill="white" opacity="0.55"/><circle cx="50" cy="37" r="2" fill="white" opacity="0.55"/>
      <path d="M30,59 Q40,64 50,59" stroke="#b08050" stroke-width="2" fill="none"/>
      <polygon points="40,6 42,12 49,12 43,17 46,24 40,19 34,24 37,17 31,12 38,12" fill="#ffdd00"/>
      <path d="M19,33 Q25,17 40,15 Q55,17 61,33" fill="#2a1404" opacity="0.75"/>
    </svg>`,

    princess:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <ellipse cx="40" cy="52" rx="32" ry="28" fill="#cc8800"/>
      <path d="M20,26 L25,12 L33,21 L40,8 L47,21 L55,12 L60,26 Z" fill="#ffcc00" stroke="#ff9900" stroke-width="1"/>
      <circle cx="40" cy="10" r="4.5" fill="#ff44aa"/><circle cx="25" cy="14" r="3" fill="#4488ff"/><circle cx="55" cy="14" r="3" fill="#44ff88"/>
      <rect x="18" y="24" width="44" height="7" rx="3.5" fill="#ffcc00" stroke="#ff9900" stroke-width="0.8"/>
      <circle cx="40" cy="48" r="24" fill="#f4c898"/>
      <ellipse cx="29" cy="44" rx="6.5" ry="7.5" fill="#180a00"/><ellipse cx="51" cy="44" rx="6.5" ry="7.5" fill="#180a00"/>
      <circle cx="29" cy="44" r="4.5" fill="#6644ff"/><circle cx="51" cy="44" r="4.5" fill="#6644ff"/>
      <path d="M24,37 Q28,32 35,36" stroke="#180a00" stroke-width="1.5" fill="none"/>
      <path d="M45,36 Q52,32 56,37" stroke="#180a00" stroke-width="1.5" fill="none"/>
      <circle cx="27" cy="42" r="2" fill="white" opacity="0.8"/><circle cx="49" cy="42" r="2" fill="white" opacity="0.8"/>
      <ellipse cx="21" cy="54" rx="7" ry="5" fill="#ff8888" opacity="0.3"/>
      <ellipse cx="59" cy="54" rx="7" ry="5" fill="#ff8888" opacity="0.3"/>
      <path d="M30,60 Q40,68 50,60" stroke="#c07a60" stroke-width="2" fill="none"/>
      <circle cx="10" cy="32" r="2.5" fill="#ffcc00" opacity="0.8"/><circle cx="70" cy="28" r="1.8" fill="#ff88ff" opacity="0.7"/><circle cx="72" cy="40" r="1.2" fill="#ffcc00" opacity="0.6"/>
    </svg>`,

    wizard:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <path d="M40,3 L60,42 L20,42 Z" fill="#280a5a" stroke="#8833ff" stroke-width="1.5"/>
      <circle cx="46" cy="18" r="2.5" fill="#ffdd00" opacity="0.9"/><circle cx="38" cy="28" r="1.8" fill="#aaaaff" opacity="0.8"/><circle cx="52" cy="32" r="1.3" fill="#ffdd00" opacity="0.7"/>
      <path d="M32,15 Q37,10 38,15 Q35,18 32,15Z" fill="#aaaaff" opacity="0.8"/>
      <ellipse cx="40" cy="42" rx="24" ry="5" fill="#38187a" stroke="#8833ff" stroke-width="0.8"/>
      <ellipse cx="40" cy="58" rx="20" ry="19" fill="#ccc0a0"/>
      <path d="M21,62 Q18,80 40,80 Q62,80 59,62" fill="white" opacity="0.88"/>
      <path d="M25,65 Q22,77 40,79 Q58,77 55,65" fill="white" opacity="0.65"/>
      <path d="M23,51 Q32,44 37,49" stroke="white" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <path d="M43,49 Q48,44 57,51" stroke="white" stroke-width="3.5" fill="none" stroke-linecap="round"/>
      <circle cx="30" cy="56" r="5.5" fill="#18082a"/><circle cx="50" cy="56" r="5.5" fill="#18082a"/>
      <circle cx="30" cy="56" r="3.5" fill="#7733ff"/><circle cx="50" cy="56" r="3.5" fill="#7733ff"/>
      <circle cx="28" cy="54" r="1.5" fill="white" opacity="0.8"/><circle cx="48" cy="54" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="70" cy="18" r="9" fill="#8833ff" opacity="0.25"/><circle cx="70" cy="18" r="5.5" fill="#cc88ff" opacity="0.5"/><circle cx="70" cy="18" r="3" fill="white" opacity="0.75"/>
    </svg>`,

    dragon:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <path d="M24,22 L14,4 L30,18" fill="#480a8a" stroke="#8822cc" stroke-width="1"/><path d="M56,22 L66,4 L50,18" fill="#480a8a" stroke="#8822cc" stroke-width="1"/>
      <ellipse cx="40" cy="47" rx="28" ry="27" fill="#180840" stroke="#5511bb" stroke-width="1.5"/>
      <path d="M13,42 Q20,37 28,42 Q36,37 44,42 Q52,37 60,42 Q65,48 60,52 Q52,47 44,52 Q36,47 28,52 Q20,47 14,52Z" fill="#220c50" opacity="0.7"/>
      <ellipse cx="28" cy="43" rx="11" ry="9" fill="#0a0420"/><ellipse cx="52" cy="43" rx="11" ry="9" fill="#0a0420"/>
      <ellipse cx="28" cy="43" rx="3" ry="7" fill="#ff6600"/><ellipse cx="52" cy="43" rx="3" ry="7" fill="#ff6600"/>
      <ellipse cx="28" cy="43" rx="1.5" ry="5.5" fill="#ffaa00" opacity="0.8"/><ellipse cx="52" cy="43" rx="1.5" ry="5.5" fill="#ffaa00" opacity="0.8"/>
      <path d="M28,24 L22,14 L32,20" fill="#5511aa" opacity="0.8"/><path d="M40,20 L38,8 L44,20" fill="#6622bb" opacity="0.8"/><path d="M52,24 L58,14 L48,20" fill="#5511aa" opacity="0.8"/>
      <circle cx="36" cy="58" r="3.5" fill="#180820"/><circle cx="44" cy="58" r="3.5" fill="#180820"/>
      <circle cx="36" cy="58" r="1.8" fill="#ff4400" opacity="0.65"/><circle cx="44" cy="58" r="1.8" fill="#ff4400" opacity="0.65"/>
    </svg>`,

    monkey:`<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" width="${s}" height="${h}">
      <circle cx="9" cy="44" r="15" fill="#7a3a14"/><circle cx="71" cy="44" r="15" fill="#7a3a14"/>
      <circle cx="9" cy="44" r="11" fill="#bb6630" opacity="0.55"/><circle cx="71" cy="44" r="11" fill="#bb6630" opacity="0.55"/>
      <circle cx="40" cy="43" r="27" fill="#9a4e1a"/>
      <ellipse cx="40" cy="48" rx="19" ry="17" fill="#c06a28" opacity="0.5"/>
      <path d="M12,68 L21,80 L40,73 L59,80 L68,68 Q57,60 40,62 Q23,60 12,68Z" fill="white"/>
      <line x1="40" y1="62" x2="40" y2="78" stroke="#cccccc" stroke-width="0.8"/>
      <ellipse cx="40" cy="55" rx="13" ry="9" fill="#c06a28"/>
      <circle cx="27" cy="43" r="10" fill="none" stroke="#1a2a38" stroke-width="2.5"/>
      <circle cx="53" cy="43" r="10" fill="none" stroke="#1a2a38" stroke-width="2.5"/>
      <line x1="37" y1="43" x2="43" y2="43" stroke="#1a2a38" stroke-width="2"/>
      <circle cx="27" cy="43" r="7" fill="#08040a"/><circle cx="53" cy="43" r="7" fill="#08040a"/>
      <circle cx="27" cy="43" r="4" fill="#321000"/><circle cx="53" cy="43" r="4" fill="#321000"/>
      <circle cx="24" cy="41" r="2" fill="white" opacity="0.7"/><circle cx="50" cy="41" r="2" fill="white" opacity="0.7"/>
      <ellipse cx="40" cy="54" rx="5.5" ry="4" fill="#6a1e00"/>
      <path d="M27,62 Q40,70 53,62" stroke="#6a1e00" stroke-width="2" fill="none"/>
    </svg>`,
  };
  return av[charId] || av['astronaut'];
}

function getMissionIconSVG(gameId, size) {
  size = size || 64;
  const s = size, h = size;
  const ic = {

    'family-knowledge':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @keyframes fki-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2.5px)}}
      @keyframes fki-twinkle{0%,100%{opacity:0.15;transform:scale(0.5)}60%{opacity:1;transform:scale(1.4)}}
      @keyframes fki-glow{0%,100%{opacity:0.28}55%{opacity:0.85}}
    </style>
    <clipPath id="fk-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="fk-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="fk-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <radialGradient id="fk-ikg-${s}" cx="50%" cy="55%" r="52%"><stop offset="0%" stop-color="#FFE566" stop-opacity="0.82"/><stop offset="60%" stop-color="#FFAA00" stop-opacity="0.35"/><stop offset="100%" stop-color="#FF8800" stop-opacity="0"/></radialGradient>
    <filter id="fk-isf-${s}"><feGaussianBlur stdDeviation="1.4"/></filter>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#9A6200"/>
  <ellipse cx="8" cy="44" rx="12" ry="9" fill="#B87A10" clip-path="url(#fk-ic-${s})"/>
  <ellipse cx="56" cy="42" rx="10" ry="12" fill="#B07010" clip-path="url(#fk-ic-${s})"/>
  <ellipse cx="32" cy="57" rx="21" ry="9" fill="#C48820" clip-path="url(#fk-ic-${s})"/>
  <ellipse cx="10" cy="24" rx="8" ry="5" fill="#C08020" clip-path="url(#fk-ic-${s})" transform="rotate(-10,10,24)"/>
  <ellipse cx="54" cy="23" rx="7" ry="4.5" fill="#D49A30" clip-path="url(#fk-ic-${s})" transform="rotate(8,54,23)"/>
  <ellipse cx="32" cy="35" rx="21" ry="15" fill="url(#fk-ikg-${s})" clip-path="url(#fk-ic-${s})" style="animation:fki-glow 2.8s ease-in-out infinite;transform-box:fill-box;transform-origin:center"/>
  <ellipse cx="32" cy="5" rx="18" ry="8" fill="#F5F0E0" clip-path="url(#fk-ic-${s})"/>
  <ellipse cx="22" cy="15" rx="10" ry="2.5" fill="#fff" opacity="0.65" clip-path="url(#fk-ic-${s})" transform="rotate(-8,22,15)"/>
  <ellipse cx="42" cy="18" rx="7" ry="2" fill="#fff" opacity="0.5" clip-path="url(#fk-ic-${s})"/>
  <!-- Sparkles -->
  <g clip-path="url(#fk-ic-${s})">
    <circle cx="32" cy="20" r="2.8" fill="#FFE566" filter="url(#fk-isf-${s})" style="animation:fki-twinkle 2.2s ease-in-out infinite;transform-box:fill-box;transform-origin:center"/>
    <circle cx="32" cy="20" r="1.3" fill="#FFFBE0" style="animation:fki-twinkle 2.2s ease-in-out infinite;transform-box:fill-box;transform-origin:center"/>
    <circle cx="19" cy="22" r="1.9" fill="#FFD700" filter="url(#fk-isf-${s})" style="animation:fki-twinkle 2.7s ease-in-out infinite 0.6s;transform-box:fill-box;transform-origin:center"/>
    <circle cx="19" cy="22" r="0.9" fill="#FFE566" style="animation:fki-twinkle 2.7s ease-in-out infinite 0.6s;transform-box:fill-box;transform-origin:center"/>
    <circle cx="45" cy="22" r="1.9" fill="#FFD700" filter="url(#fk-isf-${s})" style="animation:fki-twinkle 2.4s ease-in-out infinite 1.2s;transform-box:fill-box;transform-origin:center"/>
    <circle cx="45" cy="22" r="0.9" fill="#FFE566" style="animation:fki-twinkle 2.4s ease-in-out infinite 1.2s;transform-box:fill-box;transform-origin:center"/>
  </g>
  <!-- FAMILY -->
  <g clip-path="url(#fk-ic-${s})" style="animation:fki-bob 3s ease-in-out infinite;transform-box:fill-box;transform-origin:32px 37px">
    <!-- Parent LEFT -->
    <line x1="17" y1="41" x2="15" y2="47" stroke="#3A1800" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="20" y1="41" x2="22" y2="47" stroke="#3A1800" stroke-width="2.5" stroke-linecap="round"/>
    <rect x="14.5" y="32.5" width="8" height="9" rx="2" fill="#3A1800"/>
    <line x1="22.5" y1="35.5" x2="27" y2="37" stroke="#3A1800" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="14.5" y1="35.5" x2="10" y2="38.5" stroke="#3A1800" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="18.5" cy="27.5" r="5.8" fill="#5A2A00"/>
    <!-- Child CENTER -->
    <line x1="30.5" y1="41" x2="29.5" y2="46" stroke="#2E1200" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="33.5" y1="41" x2="34.5" y2="46" stroke="#2E1200" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="29" y="34.5" width="6" height="7" rx="1.8" fill="#2E1200"/>
    <line x1="29" y1="37" x2="27" y2="37" stroke="#2E1200" stroke-width="2" stroke-linecap="round"/>
    <line x1="35" y1="37" x2="37" y2="37" stroke="#2E1200" stroke-width="2" stroke-linecap="round"/>
    <circle cx="32" cy="30" r="4.8" fill="#4A2000"/>
    <!-- Parent RIGHT (dress) -->
    <line x1="41.5" y1="41.5" x2="40" y2="47" stroke="#3A1800" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="46.5" y1="41.5" x2="48" y2="47" stroke="#3A1800" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M40,32.5 L48,32.5 L50,41.5 L38,41.5 Z" fill="#3A1800"/>
    <line x1="40" y1="35.5" x2="37" y2="37" stroke="#3A1800" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="48" y1="35.5" x2="52" y2="38.5" stroke="#3A1800" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="44" cy="27.5" r="5.8" fill="#5A2A00"/>
    <!-- Hand-join dots -->
    <circle cx="27" cy="37" r="2" fill="#7B3A0A"/>
    <circle cx="37" cy="37" r="2" fill="#7B3A0A"/>
  </g>
  <circle cx="32" cy="32" r="30" fill="url(#fk-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#fk-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#FFD700" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#FFD700" stroke-width="2" opacity="0.15"/>
</svg>`,

    'act-it-out':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="ao-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="ao-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="ao-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#6A0A00"/>
  <ellipse cx="37" cy="41" rx="17" ry="12" fill="#880E00" clip-path="url(#ao-ic-${s})"/>
  <ellipse cx="18" cy="28" rx="10" ry="6" fill="#7A0A00" clip-path="url(#ao-ic-${s})" transform="rotate(-10,18,28)"/>
  <ellipse cx="40" cy="22" rx="8" ry="5" fill="#920C00" clip-path="url(#ao-ic-${s})" transform="rotate(6,40,22)"/>
  <ellipse cx="47" cy="33" rx="6" ry="8" fill="#800800" clip-path="url(#ao-ic-${s})"/>
  <ellipse cx="19" cy="40" rx="6" ry="4" fill="#9A1000" clip-path="url(#ao-ic-${s})"/>
  <ellipse cx="28" cy="30" rx="13" ry="3" fill="#FF6622" opacity="0.55" clip-path="url(#ao-ic-${s})" transform="rotate(-5,28,30)"/>
  <ellipse cx="38" cy="37" rx="10" ry="2" fill="#FF5500" opacity="0.48" clip-path="url(#ao-ic-${s})"/>
  <ellipse cx="22" cy="23" rx="9" ry="2" fill="#FF7733" opacity="0.42" clip-path="url(#ao-ic-${s})" transform="rotate(8,22,23)"/>
  <ellipse cx="32" cy="45" rx="8" ry="1.5" fill="#FF4400" opacity="0.38" clip-path="url(#ao-ic-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#ao-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#ao-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#FF5533" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#FF5533" stroke-width="2" opacity="0.15"/>
</svg>`,

    'draw-guess':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="dg-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="dg-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="dg-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#770044"/>
  <ellipse cx="23" cy="26" rx="13" ry="9" fill="#00886A" clip-path="url(#dg-ic-${s})" transform="rotate(-10,23,26)"/>
  <ellipse cx="41" cy="23" rx="10" ry="6" fill="#DDBB00" clip-path="url(#dg-ic-${s})" transform="rotate(8,41,23)"/>
  <ellipse cx="36" cy="41" rx="12" ry="8" fill="#EE44AA" clip-path="url(#dg-ic-${s})"/>
  <ellipse cx="19" cy="40" rx="8" ry="5" fill="#2266CC" clip-path="url(#dg-ic-${s})"/>
  <ellipse cx="46" cy="35" rx="7" ry="9" fill="#AA0066" clip-path="url(#dg-ic-${s})"/>
  <ellipse cx="32" cy="5" rx="17" ry="7" fill="#fff" clip-path="url(#dg-ic-${s})"/>
  <ellipse cx="23" cy="15" rx="10" ry="2.5" fill="#fff" opacity="0.70" clip-path="url(#dg-ic-${s})" transform="rotate(-8,23,15)"/>
  <ellipse cx="41" cy="30" rx="8" ry="2" fill="#fff" opacity="0.58" clip-path="url(#dg-ic-${s})"/>
  <ellipse cx="22" cy="36" rx="8" ry="2" fill="#fff" opacity="0.48" clip-path="url(#dg-ic-${s})" transform="rotate(5,22,36)"/>
  <circle cx="32" cy="32" r="30" fill="url(#dg-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#dg-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#FF44BB" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#FF44BB" stroke-width="2" opacity="0.15"/>
</svg>`,

    'minute-challenge':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="mc2-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="mc2-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="mc2-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#002266"/>
  <ellipse cx="32" cy="19" rx="30" ry="5" fill="#003399" clip-path="url(#mc2-ic-${s})"/>
  <ellipse cx="32" cy="27" rx="30" ry="4" fill="#1144BB" clip-path="url(#mc2-ic-${s})"/>
  <ellipse cx="32" cy="35" rx="30" ry="4.5" fill="#002288" clip-path="url(#mc2-ic-${s})"/>
  <ellipse cx="32" cy="42" rx="30" ry="4" fill="#0033AA" clip-path="url(#mc2-ic-${s})"/>
  <ellipse cx="32" cy="50" rx="30" ry="5" fill="#001A77" clip-path="url(#mc2-ic-${s})"/>
  <ellipse cx="32" cy="23" rx="23" ry="2" fill="#FFEE44" opacity="0.55" clip-path="url(#mc2-ic-${s})"/>
  <ellipse cx="32" cy="38" rx="19" ry="1.5" fill="#FFCC00" opacity="0.48" clip-path="url(#mc2-ic-${s})"/>
  <ellipse cx="32" cy="6" rx="16" ry="7" fill="#AACCFF" opacity="0.50" clip-path="url(#mc2-ic-${s})"/>
  <ellipse cx="32" cy="31" rx="13" ry="2" fill="#88AAEE" opacity="0.42" clip-path="url(#mc2-ic-${s})"/>
  <ellipse cx="32" cy="46" rx="10" ry="1.5" fill="#99BBFF" opacity="0.38" clip-path="url(#mc2-ic-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#mc2-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#mc2-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#FFCC00" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#FFCC00" stroke-width="2" opacity="0.15"/>
</svg>`,

    'brain-teasers':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="bt-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="bt-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="bt-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#1A0044"/>
  <ellipse cx="38" cy="41" rx="17" ry="12" fill="#2A0066" clip-path="url(#bt-ic-${s})"/>
  <ellipse cx="19" cy="28" rx="11" ry="7" fill="#22005A" clip-path="url(#bt-ic-${s})" transform="rotate(-12,19,28)"/>
  <ellipse cx="40" cy="22" rx="8" ry="5" fill="#330077" clip-path="url(#bt-ic-${s})" transform="rotate(8,40,22)"/>
  <ellipse cx="47" cy="33" rx="6" ry="8" fill="#28006A" clip-path="url(#bt-ic-${s})"/>
  <ellipse cx="17" cy="40" rx="6" ry="4" fill="#200055" clip-path="url(#bt-ic-${s})"/>
  <ellipse cx="32" cy="6" rx="16" ry="7" fill="#CC99FF" opacity="0.48" clip-path="url(#bt-ic-${s})"/>
  <ellipse cx="23" cy="17" rx="9" ry="2.5" fill="#BB88EE" opacity="0.45" clip-path="url(#bt-ic-${s})" transform="rotate(-8,23,17)"/>
  <ellipse cx="40" cy="30" rx="8" ry="2" fill="#CC99FF" opacity="0.40" clip-path="url(#bt-ic-${s})"/>
  <ellipse cx="22" cy="37" rx="8" ry="2" fill="#DDAAFF" opacity="0.35" clip-path="url(#bt-ic-${s})" transform="rotate(5,22,37)"/>
  <circle cx="32" cy="32" r="30" fill="url(#bt-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#bt-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#AA55FF" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#AA55FF" stroke-width="2" opacity="0.15"/>
</svg>`,

    'memory-challenge':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="mcl-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="mcl-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="mcl-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#003D2A"/>
  <ellipse cx="38" cy="42" rx="18" ry="13" fill="#005438" clip-path="url(#mcl-ic-${s})"/>
  <ellipse cx="19" cy="27" rx="11" ry="7" fill="#006844" clip-path="url(#mcl-ic-${s})" transform="rotate(-12,19,27)"/>
  <ellipse cx="40" cy="22" rx="8" ry="5" fill="#007A50" clip-path="url(#mcl-ic-${s})" transform="rotate(8,40,22)"/>
  <ellipse cx="47" cy="33" rx="6" ry="8" fill="#004D34" clip-path="url(#mcl-ic-${s})"/>
  <ellipse cx="17" cy="39" rx="6" ry="4" fill="#005C3E" clip-path="url(#mcl-ic-${s})"/>
  <ellipse cx="32" cy="5" rx="17" ry="7" fill="#fff" clip-path="url(#mcl-ic-${s})"/>
  <ellipse cx="23" cy="17" rx="10" ry="2.5" fill="#fff" opacity="0.70" clip-path="url(#mcl-ic-${s})" transform="rotate(-8,23,17)"/>
  <ellipse cx="40" cy="30" rx="8" ry="2" fill="#fff" opacity="0.58" clip-path="url(#mcl-ic-${s})"/>
  <ellipse cx="22" cy="36" rx="8" ry="2" fill="#fff" opacity="0.48" clip-path="url(#mcl-ic-${s})" transform="rotate(5,22,36)"/>
  <circle cx="32" cy="32" r="30" fill="url(#mcl-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#mcl-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#33DD88" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#33DD88" stroke-width="2" opacity="0.15"/>
</svg>`,

    'mystery-box':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="mxb-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="mxb-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.62"/></radialGradient>
    <radialGradient id="mxb-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.12"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#080012"/>
  <ellipse cx="37" cy="41" rx="16" ry="11" fill="#0E0022" clip-path="url(#mxb-ic-${s})"/>
  <ellipse cx="18" cy="27" rx="10" ry="6" fill="#0C0020" clip-path="url(#mxb-ic-${s})" transform="rotate(-10,18,27)"/>
  <ellipse cx="40" cy="21" rx="8" ry="5" fill="#120028" clip-path="url(#mxb-ic-${s})" transform="rotate(8,40,21)"/>
  <ellipse cx="47" cy="33" rx="5" ry="8" fill="#0A001C" clip-path="url(#mxb-ic-${s})"/>
  <ellipse cx="17" cy="39" rx="5" ry="4" fill="#10001E" clip-path="url(#mxb-ic-${s})"/>
  <ellipse cx="32" cy="6" rx="14" ry="6" fill="#3A1060" opacity="0.35" clip-path="url(#mxb-ic-${s})"/>
  <ellipse cx="23" cy="17" rx="8" ry="2" fill="#4A1880" opacity="0.28" clip-path="url(#mxb-ic-${s})" transform="rotate(-8,23,17)"/>
  <ellipse cx="40" cy="30" rx="7" ry="1.5" fill="#3A1060" opacity="0.25" clip-path="url(#mxb-ic-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#mxb-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#mxb-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#9933CC" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#9933CC" stroke-width="2" opacity="0.15"/>
</svg>`,

    'superpower-challenges':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="spc-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="spc-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="spc-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#660011"/>
  <ellipse cx="38" cy="41" rx="17" ry="12" fill="#800018" clip-path="url(#spc-ic-${s})"/>
  <ellipse cx="18" cy="27" rx="11" ry="7" fill="#700014" clip-path="url(#spc-ic-${s})" transform="rotate(-12,18,27)"/>
  <ellipse cx="40" cy="22" rx="8" ry="5" fill="#8A001C" clip-path="url(#spc-ic-${s})" transform="rotate(8,40,22)"/>
  <ellipse cx="47" cy="33" rx="6" ry="8" fill="#780016" clip-path="url(#spc-ic-${s})"/>
  <ellipse cx="19" cy="40" rx="6" ry="4" fill="#6A0010" clip-path="url(#spc-ic-${s})"/>
  <ellipse cx="28" cy="23" rx="12" ry="3" fill="#FFDD88" opacity="0.55" clip-path="url(#spc-ic-${s})" transform="rotate(-5,28,23)"/>
  <ellipse cx="37" cy="33" rx="9" ry="2" fill="#FFB800" opacity="0.48" clip-path="url(#spc-ic-${s})"/>
  <ellipse cx="32" cy="5" rx="15" ry="7" fill="#fff" clip-path="url(#spc-ic-${s})"/>
  <ellipse cx="23" cy="17" rx="9" ry="2.5" fill="#fff" opacity="0.68" clip-path="url(#spc-ic-${s})" transform="rotate(-8,23,17)"/>
  <ellipse cx="40" cy="30" rx="8" ry="2" fill="#fff" opacity="0.55" clip-path="url(#spc-ic-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#spc-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#spc-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#FF3355" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#FF3355" stroke-width="2" opacity="0.15"/>
</svg>`,

    'build-a-story':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @keyframes sfb-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
      @keyframes sfb-page{0%,100%{transform:skewY(0deg) scaleX(1)}50%{transform:skewY(-6deg) scaleX(0.86)}}
      @keyframes sfb-spark{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-24px) scale(0.2);opacity:0}}
      @keyframes sfb-spark2{0%{transform:translateY(0) scale(1);opacity:0.85}100%{transform:translateY(-18px) scale(0.15);opacity:0}}
      @keyframes sfb-glow{0%,100%{opacity:0.28}50%{opacity:0.72}}
      @keyframes sfb-star{0%,100%{opacity:0.12}50%{opacity:0.9}}
    </style>
    <clipPath id="sfbi-c-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="sfbi-sh-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.56"/></radialGradient>
    <radialGradient id="sfbi-hi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.18"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
    <radialGradient id="sfbi-bg-${s}" cx="50%" cy="42%" r="58%"><stop offset="0%" stop-color="#1c0b30"/><stop offset="100%" stop-color="#080010"/></radialGradient>
    <radialGradient id="sfbi-gw-${s}" cx="50%" cy="65%" r="45%"><stop offset="0%" stop-color="#FF9944" stop-opacity="0.35"/><stop offset="100%" stop-color="#FF9944" stop-opacity="0"/></radialGradient>
    <linearGradient id="sfbi-cl-${s}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#cc5500"/><stop offset="100%" stop-color="#7a2200"/></linearGradient>
    <linearGradient id="sfbi-cr-${s}" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e86600"/><stop offset="100%" stop-color="#8b2e00"/></linearGradient>
    <linearGradient id="sfbi-pg-${s}" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#fff8e8"/><stop offset="100%" stop-color="#ffe0a0"/></linearGradient>
    <filter id="sfbi-blur-${s}"><feGaussianBlur stdDeviation="2"/></filter>
  </defs>
  <circle cx="32" cy="32" r="30" fill="url(#sfbi-bg-${s})"/>
  <circle cx="11" cy="11" r="0.7" fill="white" style="animation:sfb-star 2.2s ease-in-out infinite"/>
  <circle cx="53" cy="13" r="0.6" fill="white" style="animation:sfb-star 3.1s ease-in-out infinite 0.4s"/>
  <circle cx="54" cy="50" r="0.6" fill="white" style="animation:sfb-star 2.7s ease-in-out infinite 0.9s"/>
  <circle cx="10" cy="51" r="0.5" fill="white" style="animation:sfb-star 3.4s ease-in-out infinite 1.3s"/>
  <ellipse cx="32" cy="47" rx="15" ry="5" fill="url(#sfbi-gw-${s})" filter="url(#sfbi-blur-${s})" style="animation:sfb-glow 2.5s ease-in-out infinite"/>
  <g style="transform-origin:32px 34px;transform-box:fill-box;animation:sfb-float 3.2s ease-in-out infinite">
    <path d="M12,27 L32,25 L32,43 L12,40 Z" fill="url(#sfbi-cl-${s})"/>
    <path d="M12,27 L32,25 L32,43 L12,40 Z" fill="none" stroke="#FF9944" stroke-width="0.7" stroke-opacity="0.65"/>
    <path d="M52,27 L32,25 L32,43 L52,40 Z" fill="url(#sfbi-cr-${s})"/>
    <path d="M52,27 L32,25 L32,43 L52,40 Z" fill="none" stroke="#FF9944" stroke-width="0.7" stroke-opacity="0.65"/>
    <line x1="32" y1="25" x2="32" y2="43" stroke="#FF9944" stroke-width="1.8" stroke-linecap="round" opacity="0.95"/>
    <path d="M32,26 Q24,25 17,27 L17,41 Q24,41 32,42 Z" fill="url(#sfbi-pg-${s})" opacity="0.93" style="transform-origin:32px 34px;transform-box:fill-box;animation:sfb-page 3.2s ease-in-out infinite"/>
    <path d="M32,26 Q40,25 47,27 L47,41 Q40,41 32,42 Z" fill="url(#sfbi-pg-${s})" opacity="0.86"/>
    <line x1="19" y1="31" x2="30" y2="30" stroke="#cc8800" stroke-width="0.8" opacity="0.5"/>
    <line x1="19" y1="34" x2="30" y2="33" stroke="#cc8800" stroke-width="0.8" opacity="0.44"/>
    <line x1="19" y1="37" x2="30" y2="36" stroke="#cc8800" stroke-width="0.7" opacity="0.36"/>
    <line x1="34" y1="30" x2="45" y2="31" stroke="#cc8800" stroke-width="0.8" opacity="0.5"/>
    <line x1="34" y1="33" x2="45" y2="34" stroke="#cc8800" stroke-width="0.8" opacity="0.44"/>
    <line x1="34" y1="36" x2="44" y2="37" stroke="#cc8800" stroke-width="0.7" opacity="0.36"/>
  </g>
  <circle cx="26" cy="23" r="1.3" fill="#FFB84D" style="animation:sfb-spark 2.3s ease-out infinite"/>
  <circle cx="32" cy="21" r="1" fill="#FF9944" style="animation:sfb-spark2 2.9s ease-out infinite 0.6s"/>
  <circle cx="38" cy="23" r="1.2" fill="#FFD080" style="animation:sfb-spark 2.6s ease-out infinite 1.1s"/>
  <circle cx="32" cy="32" r="30" fill="url(#sfbi-sh-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#sfbi-hi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#FF9944" stroke-width="2.5" opacity="0.42"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#FF9944" stroke-width="2" opacity="0.18"/>
</svg>`,

    'guess-what':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="gw-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="gw-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="gw-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#001244"/>
  <ellipse cx="40" cy="40" rx="18" ry="14" fill="#0A1E66" clip-path="url(#gw-ic-${s})"/>
  <ellipse cx="18" cy="26" rx="10" ry="6" fill="#002288" clip-path="url(#gw-ic-${s})" transform="rotate(-12,18,26)"/>
  <ellipse cx="22" cy="35" rx="6" ry="5" fill="#003A7A" clip-path="url(#gw-ic-${s})"/>
  <ellipse cx="42" cy="23" rx="8" ry="5" fill="#001E6A" clip-path="url(#gw-ic-${s})" transform="rotate(6,42,23)"/>
  <ellipse cx="46" cy="36" rx="6" ry="8" fill="#002266" clip-path="url(#gw-ic-${s})"/>
  <ellipse cx="28" cy="28" rx="5" ry="3" fill="#2A6622" clip-path="url(#gw-ic-${s})" transform="rotate(-8,28,28)"/>
  <ellipse cx="32" cy="5" rx="17" ry="7" fill="#fff" clip-path="url(#gw-ic-${s})"/>
  <ellipse cx="23" cy="17" rx="10" ry="2.5" fill="#fff" opacity="0.70" clip-path="url(#gw-ic-${s})" transform="rotate(-8,23,17)"/>
  <ellipse cx="40" cy="30" rx="8" ry="2" fill="#fff" opacity="0.58" clip-path="url(#gw-ic-${s})"/>
  <ellipse cx="22" cy="37" rx="8" ry="2" fill="#fff" opacity="0.48" clip-path="url(#gw-ic-${s})" transform="rotate(5,22,37)"/>
  <circle cx="32" cy="32" r="30" fill="url(#gw-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#gw-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#4D8FFF" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#4D8FFF" stroke-width="2" opacity="0.15"/>
</svg>`,

    'would-you-rather':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="wyr-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <clipPath id="wyr-il-${s}"><rect x="2" y="2" width="30" height="60"/></clipPath>
    <clipPath id="wyr-ir-${s}"><rect x="32" y="2" width="30" height="60"/></clipPath>
    <radialGradient id="wyr-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="wyr-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect x="2" y="2" width="30" height="60" fill="#001133" clip-path="url(#wyr-ic-${s})"/>
  <rect x="32" y="2" width="30" height="60" fill="#003D2A" clip-path="url(#wyr-ic-${s})"/>
  <ellipse cx="18" cy="28" rx="10" ry="6" fill="#002255" clip-path="url(#wyr-il-${s})" transform="rotate(-8,18,28)"/>
  <ellipse cx="14" cy="40" rx="8" ry="5" fill="#003366" clip-path="url(#wyr-il-${s})"/>
  <ellipse cx="42" cy="26" rx="9" ry="6" fill="#005A3A" clip-path="url(#wyr-ir-${s})" transform="rotate(6,42,26)"/>
  <ellipse cx="46" cy="40" rx="7" ry="8" fill="#004D30" clip-path="url(#wyr-ir-${s})"/>
  <ellipse cx="17" cy="9" rx="11" ry="3" fill="#fff" opacity="0.45" clip-path="url(#wyr-il-${s})"/>
  <ellipse cx="14" cy="19" rx="9" ry="2" fill="#fff" opacity="0.38" clip-path="url(#wyr-il-${s})" transform="rotate(-5,14,19)"/>
  <ellipse cx="44" cy="10" rx="10" ry="3" fill="#fff" opacity="0.45" clip-path="url(#wyr-ir-${s})"/>
  <ellipse cx="46" cy="21" rx="8" ry="2" fill="#fff" opacity="0.38" clip-path="url(#wyr-ir-${s})" transform="rotate(5,46,21)"/>
  <line x1="32" y1="2" x2="32" y2="62" stroke="#00DDAA" stroke-width="1.5" opacity="0.85"/>
  <circle cx="32" cy="32" r="30" fill="url(#wyr-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#wyr-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#00DDAA" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#00DDAA" stroke-width="2" opacity="0.15"/>
</svg>`,

    'emoji-stories':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="emst-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="emst-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="emst-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#660055"/>
  <ellipse cx="38" cy="41" rx="17" ry="12" fill="#880066" clip-path="url(#emst-ic-${s})"/>
  <ellipse cx="19" cy="27" rx="11" ry="7" fill="#770060" clip-path="url(#emst-ic-${s})" transform="rotate(-12,19,27)"/>
  <ellipse cx="40" cy="22" rx="8" ry="5" fill="#991177" clip-path="url(#emst-ic-${s})" transform="rotate(8,40,22)"/>
  <ellipse cx="47" cy="33" rx="6" ry="8" fill="#7A0066" clip-path="url(#emst-ic-${s})"/>
  <ellipse cx="17" cy="40" rx="6" ry="4" fill="#6E0055" clip-path="url(#emst-ic-${s})"/>
  <ellipse cx="32" cy="5" rx="17" ry="7" fill="#fff" clip-path="url(#emst-ic-${s})"/>
  <ellipse cx="23" cy="17" rx="10" ry="2.5" fill="#fff" opacity="0.70" clip-path="url(#emst-ic-${s})" transform="rotate(-8,23,17)"/>
  <ellipse cx="40" cy="30" rx="8" ry="2" fill="#fff" opacity="0.58" clip-path="url(#emst-ic-${s})"/>
  <ellipse cx="22" cy="36" rx="8" ry="2" fill="#fff" opacity="0.48" clip-path="url(#emst-ic-${s})" transform="rotate(5,22,36)"/>
  <circle cx="32" cy="32" r="30" fill="url(#emst-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#emst-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#FF88DD" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#FF88DD" stroke-width="2" opacity="0.15"/>
  <g style="transform-origin:32px 32px;transform-box:fill-box;animation:es-orbit 6s linear infinite">
    <text x="32" y="13" text-anchor="middle" dominant-baseline="central" font-size="10" style="transform-origin:32px 13px;transform-box:fill-box;animation:es-orbit-r 6s linear infinite">😂</text>
    <text x="52" y="32" text-anchor="middle" dominant-baseline="central" font-size="10" style="transform-origin:52px 32px;transform-box:fill-box;animation:es-orbit-r 6s linear infinite">😍</text>
    <text x="32" y="51" text-anchor="middle" dominant-baseline="central" font-size="10" style="transform-origin:32px 51px;transform-box:fill-box;animation:es-orbit-r 6s linear infinite">🤩</text>
    <text x="12" y="32" text-anchor="middle" dominant-baseline="central" font-size="10" style="transform-origin:12px 32px;transform-box:fill-box;animation:es-orbit-r 6s linear infinite">😮</text>
  </g>
  <text x="32" y="34" text-anchor="middle" dominant-baseline="central" font-size="22" style="transform-origin:32px 34px;transform-box:fill-box;animation:es-pulse 2.2s ease-in-out infinite">😄</text>
</svg>`,

    'science-fun':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="scf-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="scf-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="scf-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#001A33"/>
  <ellipse cx="40" cy="42" rx="18" ry="13" fill="#002244" clip-path="url(#scf-ic-${s})"/>
  <ellipse cx="19" cy="27" rx="10" ry="6" fill="#003355" clip-path="url(#scf-ic-${s})" transform="rotate(-12,19,27)"/>
  <ellipse cx="40" cy="22" rx="8" ry="5" fill="#00334D" clip-path="url(#scf-ic-${s})" transform="rotate(8,40,22)"/>
  <ellipse cx="47" cy="33" rx="6" ry="8" fill="#002A3D" clip-path="url(#scf-ic-${s})"/>
  <ellipse cx="17" cy="39" rx="6" ry="4" fill="#001E33" clip-path="url(#scf-ic-${s})"/>
  <ellipse cx="28" cy="28" rx="9" ry="3" fill="#00AACC" opacity="0.45" clip-path="url(#scf-ic-${s})" transform="rotate(-8,28,28)"/>
  <ellipse cx="38" cy="37" rx="7" ry="2" fill="#0099BB" opacity="0.40" clip-path="url(#scf-ic-${s})"/>
  <ellipse cx="32" cy="5" rx="17" ry="7" fill="#fff" clip-path="url(#scf-ic-${s})"/>
  <ellipse cx="23" cy="17" rx="10" ry="2.5" fill="#fff" opacity="0.70" clip-path="url(#scf-ic-${s})" transform="rotate(-8,23,17)"/>
  <ellipse cx="40" cy="30" rx="8" ry="2" fill="#fff" opacity="0.58" clip-path="url(#scf-ic-${s})"/>
  <ellipse cx="22" cy="37" rx="8" ry="2" fill="#fff" opacity="0.48" clip-path="url(#scf-ic-${s})" transform="rotate(5,22,37)"/>
  <circle cx="32" cy="32" r="30" fill="url(#scf-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#scf-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#44CCFF" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#44CCFF" stroke-width="2" opacity="0.15"/>
</svg>`,

    'nature-detectives':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="nd-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="nd-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="nd-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#1565C0"/>
  <ellipse cx="38" cy="44" rx="19" ry="14" fill="#1976D2" clip-path="url(#nd-ic-${s})"/>
  <ellipse cx="21" cy="24" rx="10" ry="6" fill="#2E7D32" clip-path="url(#nd-ic-${s})" transform="rotate(-15,21,24)"/>
  <ellipse cx="35" cy="19" rx="8" ry="5" fill="#388E3C" clip-path="url(#nd-ic-${s})" transform="rotate(8,35,19)"/>
  <ellipse cx="43" cy="32" rx="7" ry="10" fill="#2E7D32" clip-path="url(#nd-ic-${s})" transform="rotate(5,43,32)"/>
  <ellipse cx="18" cy="37" rx="6" ry="4" fill="#33691E" clip-path="url(#nd-ic-${s})"/>
  <ellipse cx="46" cy="44" rx="5" ry="4" fill="#2E7D32" clip-path="url(#nd-ic-${s})" transform="rotate(-10,46,44)"/>
  <ellipse cx="30" cy="27" rx="3" ry="2" fill="#A1887F" clip-path="url(#nd-ic-${s})" transform="rotate(15,30,27)"/>
  <ellipse cx="32" cy="4" rx="16" ry="8" fill="white" clip-path="url(#nd-ic-${s})"/>
  <ellipse cx="32" cy="4" rx="14" ry="6" fill="#E3F2FD" clip-path="url(#nd-ic-${s})"/>
  <ellipse cx="24" cy="15" rx="10" ry="2.5" fill="white" opacity="0.72" clip-path="url(#nd-ic-${s})" transform="rotate(-8,24,15)"/>
  <ellipse cx="40" cy="28" rx="8" ry="2" fill="white" opacity="0.62" clip-path="url(#nd-ic-${s})"/>
  <ellipse cx="22" cy="35" rx="8" ry="2" fill="white" opacity="0.52" clip-path="url(#nd-ic-${s})" transform="rotate(5,22,35)"/>
  <ellipse cx="35" cy="47" rx="6" ry="1.5" fill="white" opacity="0.45" clip-path="url(#nd-ic-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#nd-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#nd-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#55DD44" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#55DD44" stroke-width="2" opacity="0.15"/>
</svg>`,

    'picture-puzzles':`<svg viewBox="0 0 64 64" width="${s}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="pp-ic-${s}"><circle cx="32" cy="32" r="30"/></clipPath>
    <radialGradient id="pp-ish-${s}" cx="66%" cy="65%" r="62%"><stop offset="0%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.52"/></radialGradient>
    <radialGradient id="pp-ihi-${s}" cx="30%" cy="28%" r="48%"><stop offset="0%" stop-color="#fff" stop-opacity="0.22"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></radialGradient>
  </defs>
  <circle cx="32" cy="32" r="30" fill="#4A2400"/>
  <ellipse cx="22" cy="23" rx="14" ry="9" fill="#CC2200" clip-path="url(#pp-ic-${s})" transform="rotate(-10,22,23)"/>
  <ellipse cx="42" cy="22" rx="12" ry="8" fill="#FF8800" clip-path="url(#pp-ic-${s})" transform="rotate(8,42,22)"/>
  <ellipse cx="37" cy="40" rx="13" ry="9" fill="#2244BB" clip-path="url(#pp-ic-${s})"/>
  <ellipse cx="19" cy="40" rx="9" ry="6" fill="#DDAA00" clip-path="url(#pp-ic-${s})"/>
  <ellipse cx="46" cy="33" rx="7" ry="9" fill="#226622" clip-path="url(#pp-ic-${s})"/>
  <ellipse cx="30" cy="31" rx="6" ry="4" fill="#882288" clip-path="url(#pp-ic-${s})" transform="rotate(-5,30,31)"/>
  <ellipse cx="32" cy="5" rx="17" ry="7" fill="#fff" clip-path="url(#pp-ic-${s})"/>
  <ellipse cx="23" cy="17" rx="10" ry="2.5" fill="#fff" opacity="0.68" clip-path="url(#pp-ic-${s})" transform="rotate(-8,23,17)"/>
  <ellipse cx="40" cy="30" rx="8" ry="2" fill="#fff" opacity="0.55" clip-path="url(#pp-ic-${s})"/>
  <ellipse cx="22" cy="37" rx="8" ry="2" fill="#fff" opacity="0.45" clip-path="url(#pp-ic-${s})" transform="rotate(5,22,37)"/>
  <circle cx="32" cy="32" r="30" fill="url(#pp-ish-${s})"/>
  <circle cx="32" cy="32" r="30" fill="url(#pp-ihi-${s})"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#FFB833" stroke-width="2.5" opacity="0.35"/>
  <circle cx="32" cy="32" r="31" fill="none" stroke="#FFB833" stroke-width="2" opacity="0.15"/>
</svg>`,


  };
  return ic[gameId] || ic['guess-what'];
}

function getBadgeSVG(badgeId, color) {
  const c = color || '#FFD700';
  const badges = {
    star:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><polygon points="20,4 23,15 34,15 25,22 28,33 20,26 12,33 15,22 6,15 17,15" fill="${c}" opacity="0.9"/></svg>`,
    planet:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><circle cx="20" cy="20" r="10" fill="${c}" opacity="0.85"/><ellipse cx="20" cy="20" rx="18" ry="6" fill="none" stroke="${c}" stroke-width="2" opacity="0.7"/></svg>`,
    moon:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path d="M26,8 Q14,12 14,20 Q14,28 26,32 Q16,32 12,20 Q12,8 26,8Z" fill="${c}" opacity="0.9"/></svg>`,
    rocket:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path d="M20,4 Q28,8 28,20 L20,36 L12,20 Q12,8 20,4Z" fill="${c}" opacity="0.9"/><path d="M14,22 L8,28 L14,26Z" fill="${c}" opacity="0.65"/><path d="M26,22 L32,28 L26,26Z" fill="${c}" opacity="0.65"/></svg>`,
    crown:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path d="M4,28 L8,14 L16,22 L20,8 L24,22 L32,14 L36,28 Z" fill="${c}" opacity="0.9"/><rect x="4" y="28" width="32" height="5" rx="2" fill="${c}" opacity="0.75"/></svg>`,
    lightning:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path d="M22,4 L14,22 L21,20 L18,36 L28,16 L21,18 Z" fill="${c}" opacity="0.9"/></svg>`,
    treasure:`<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><polygon points="20,4 24,14 36,14 26,22 30,34 20,26 10,34 14,22 4,14 16,14" fill="${c}" opacity="0.85" stroke="${c}" stroke-width="0.5"/><circle cx="20" cy="20" r="5" fill="white" opacity="0.35"/></svg>`,
  };
  return badges[badgeId] || badges['star'];
}

// ─── COMET CURSOR ──────────────────────────────────────
function initCometCursor() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><defs><radialGradient id="chg" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#ffffff"/><stop offset="45%" stop-color="#aaeeff"/><stop offset="100%" stop-color="#0088cc" stop-opacity="0"/></radialGradient></defs><polygon points="6,6 40,22 37,30" fill="white" opacity="0.09"/><polygon points="6,6 37,16 40,22" fill="white" opacity="0.07"/><line x1="6" y1="6" x2="39" y2="21" stroke="white" stroke-width="1.3" opacity="0.38" stroke-linecap="round"/><line x1="6" y1="6" x2="37" y2="27" stroke="#aaddff" stroke-width="0.8" opacity="0.22" stroke-linecap="round"/><line x1="6" y1="6" x2="35" y2="18" stroke="white" stroke-width="0.7" opacity="0.2" stroke-linecap="round"/><circle cx="6" cy="6" r="5.5" fill="url(#chg)"/><circle cx="6" cy="6" r="2.8" fill="white"/></svg>`;
  const b64 = btoa(svg);
  document.body.style.cursor = `url("data:image/svg+xml;base64,${b64}") 6 6, auto`;
}

// ─── INIT ──────────────────────────────────────────────
function _gameInit() {
  buildBackground();
  initCometCursor();
  // Populate team avatar placeholders on the name-entry screen
  const np1 = document.getElementById('name-prev-1');
  const np2 = document.getElementById('name-prev-2');
  if (np1) np1.innerHTML = getAvatarSVG(state.teamCustom[0].charId, 52);
  if (np2) np2.innerHTML = getAvatarSVG(state.teamCustom[1].charId, 52);
  // Apply team colors to avatar icons
  if (np1) np1.style.filter = `drop-shadow(0 0 10px ${state.teamCustom[0].color})`;
  if (np2) np2.style.filter = `drop-shadow(0 0 10px ${state.teamCustom[1].color})`;
  // Seed name suggestions on first load
  _refreshNameSuggestions();
}
if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', _gameInit);
} else {
  _gameInit();
}

