import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {};

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
  params: {
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
  },
  headers: {
    'x-rapidapi-key': '0b523168b2msha09d4f5ff766d96p15fa9fjsnd2a1cc4222fe',
    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
  }
});

        return data;
    } catch (error) {
        console.log(error);
    }
};