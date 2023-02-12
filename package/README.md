# [nOOk API](https://nook-api.vercel.app)

## Animal Crossing New Horizons database, accessible to anyone! 🍃

Hello! I made this api as a little side project and I hope it can help anyone who wants to use it.
It's a free api containing various information about **Animal Crossing New Horizons.** 🦝

To start using it, just run `npm install nook-api`. 
[Here](https://www.npmjs.com/package/nook-api) is the NPM official page.

#### This database contains infos and sprites of:

- Fishes and sea creatures 🎣
- Bugs 🦋
- Art pieces 🎨
- K.K. songs 🐶🎵 (gotta love bubblegum)
- Hourly songs 🕛🎵
- Villagers 🦆

To get started, this package is made by different **clients**, each one for a different seed:

- [x] FishClient() > fishes
- [x] BugClient() > bugs
- [x] SeaCreatureClient() > sea creatures
- [ ] ArtClient() > art pieces
- [ ] SongClient() > songs
- [ ] VillagerClient() > villagers

Each one has its own function to find the data you need! Example (JavaScript):

```javascript
import { FishingClient } from "nook-api";
const client = new FishClient();

console.log(await client.renderById(45));
```

Which outputs:

![shark](https://nook-api.vercel.app/api/render/fish/74)

Or you can make a request to the api url!
Example:

```javascript
import { fetch } from "undici";

let req = await fetch("https://nook-api.vercel.app/api/data/fish/74");
let data = await req.json();
console.log(data);
```

```
{
  "id": 74,
  "names": {
    "en": "great white shark",
    "de": "hai",
    "es": "tiburón",
    "fr": "grand requin blanc",
    "it": "squalo bianco",
    "nl": "witte haai",
    "cn": "鲨鱼",
    "jp": "サメ",
    "kr": "상어",
    "ru": "большая белая акула"
  },
  "seasonality": {
    "northern": {
      "name": "jun-sep",
      "indices": "6-9",
      "indices_array": [6, 7, 8, 9]
    },
    "southern": {
      "name": "dec-mar",
      "indices": "12-3",
      "indices_array": [12, 1, 2, 3]
    }
  },
  "shadow_size": 6,
  "sell_prices": { "nook": 15000, "CJ": 22500 },
  "rarity": "***",
  "day": {
    "h12": "4pm-9am",
    "h24": "16-9",
    "hours_array": [
      16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    ]
  },
  "location": "sea",
  "phrases": {
    "catch": "I caught a great white shark! Watch out for its jaws!",
    "blathers": "Great white sharks are obviously known first and foremost for their biting. They are masters of the craft! They do lose teeth regularly through biting-related activities, but, luckily, those teeth grow back quickly. In fact, their missing teeth can be regrown in a single day. Just imagine their tooth-fairy-related income!"
  },
  "images": {
    "render": "https://nook-api.vercel.app/api/render/fish/74",
    "icon": "https://nook-api.vercel.app/api/icon/fish/74"
  }
}

```

## Thank you! <3
