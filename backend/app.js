// Import the framework and instantiate it
import Fastify from 'fastify'
const PORT = 9847
const fastify = Fastify({
  logger: true
})

fastify.get('/', async (request, reply) => {
  return { address: [
    {
        route: "/game",
        method: "GET",
        description: "Get All Games, The selected game type and if the game is active",
        example: {
            games: getGames(),
            gameType: getGames()[0],
            isActive: true,
          }
    },
    {
        route: "/homeOwners",
        method: "GET",
        description: "Get All Home Owners and their addresses",
        example: [
            {
                ownerName: "John Doe",
                ownerAge: 30,
                ownerAddress: {
                    streetAddress: "123 Main St",
                    cityName: "Anytown",
                    zipCode: "12345",
                    stateName: "CA",
                    homeOwner: "John Doe"
                }
            },
            {
                ownerName: "Jane Smith",
                ownerAge: 42,
                ownerAddress: {
                    streetAddress: "456 Oak Ave",
                    cityName: "Springfield",
                    zipCode: "62704",
                    stateName: "IL",
                    homeOwner: "Jane Smith"
                }
            }
        ]
    }
  ]}
})

// Game
fastify.get('/game', async function handler (request, reply) {
  return {
    games: getGames(),
    gameType: getGames()[Math.floor(Math.random() * getGames().length)],
    isActive: Math.random() > 0.5,
  }
  
})

function getGames() {
    return [
        "Poker",
        "Blackjack",
        "Roulette",
        "Baccarat",
        "Chess",
        "Checkers",
    ]
}
// People
fastify.get('/homeOwners', async function handler (request, reply) {
    return getPeople()    
  })


function getPeople() {
    return [
        {
            ownerName: "John Doe",
            ownerAge: 30,
            ownerAddress: {
                streetAddress: "123 Main St",
                cityName: "Anytown",
                zipCode: "12345",
                stateName: "CA",
                homeOwner: "John Doe"
            }
        },
        {
            ownerName: "Jane Smith",
            ownerAge: 42,
            ownerAddress: {
                streetAddress: "456 Oak Ave",
                cityName: "Springfield",
                zipCode: "62704",
                stateName: "IL",
                homeOwner: "Jane Smith"
            }
        },
        {
            ownerName: "Robert Johnson",
            ownerAge: 38,
            ownerAddress: {
                streetAddress: "789 Maple Dr",
                cityName: "Centerville",
                zipCode: "75833",
                stateName: "TX",
                homeOwner: "Robert Johnson"
            }
        },
        {
            ownerName: "Emily Davis",
            ownerAge: 27,
            ownerAddress: {
                streetAddress: "321 Elm St",
                cityName: "Greenville",
                zipCode: "29601",
                stateName: "SC",
                homeOwner: "Emily Davis"
            }
        },
        {
            ownerName: "Michael Brown",
            ownerAge: 35,
            ownerAddress: {
                streetAddress: "135 Pine Rd",
                cityName: "Hometown",
                zipCode: "32003",
                stateName: "FL",
                homeOwner: "Michael Brown"
            }
        },
        {
            ownerName: "Lisa Wilson",
            ownerAge: 50,
            ownerAddress: {
                streetAddress: "246 Cedar Ln",
                cityName: "Lakeview",
                zipCode: "55044",
                stateName: "MN",
                homeOwner: "Lisa Wilson"
            }
        },
        {
            ownerName: "James Martinez",
            ownerAge: 31,
            ownerAddress: {
                streetAddress: "579 Birch Blvd",
                cityName: "Rivertown",
                zipCode: "98001",
                stateName: "WA",
                homeOwner: "James Martinez"
            }
        },
        {
            ownerName: "Angela Thompson",
            ownerAge: 29,
            ownerAddress: {
                streetAddress: "864 Willow Way",
                cityName: "Brookfield",
                zipCode: "53005",
                stateName: "WI",
                homeOwner: "Angela Thompson"
            }
        },
        {
            ownerName: "Kevin Anderson",
            ownerAge: 45,
            ownerAddress: {
                streetAddress: "910 Aspen Ct",
                cityName: "Mountain View",
                zipCode: "80439",
                stateName: "CO",
                homeOwner: "Kevin Anderson"
            }
        },
        {
            ownerName: "Natalie Moore",
            ownerAge: 33,
            ownerAddress: {
                streetAddress: "112 Cherry St",
                cityName: "Sunnyvale",
                zipCode: "94086",
                stateName: "CA",
                homeOwner: "Natalie Moore"
            }
        }
    ];
    
}

// Run the server!
try {
  await fastify.listen({ port: PORT })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}