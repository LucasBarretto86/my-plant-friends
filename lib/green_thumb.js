"use strict";

import 'regenerator-runtime/runtime';

const GreenThumb = {
    async searchGreenFriends(params) {
        try {
            const response = await fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?${params}`);

            if (response.ok) {
                const JSONresponse = await response.json();
                const collection = await JSONresponse.map(friend => (
                    {
                        id: friend.id,
                        url: friend.url,
                        name: friend.name,
                        price: friend.price,
                        toxicity: friend.toxicity,
                        sun: friend.sun,
                        water: friend.water,
                        pets: friend.pets,
                        staff_favorite: friend.staff_favorite
                    }
                ));

                return collection;
            } else {
                return [];
            }

        } catch (e) {
            console.error(e);
        }
    }
}

export default GreenThumb;