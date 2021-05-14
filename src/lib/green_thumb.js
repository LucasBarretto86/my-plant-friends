"use strict";

const GreenThumb = {
    async searchGreenFriends(params) {
        try {
            const response = await fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?${params}`);

            if (response.status == 200) {
                const JSONresponse = await response.json();

                if (response.status == 404) return [];

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
            return [];
        }
    }
}

export default GreenThumb;