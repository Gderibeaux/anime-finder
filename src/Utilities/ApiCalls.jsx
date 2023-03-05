export const getAnime = () => {
    return (
        fetch('https://api.jikan.moe/v4/anime')
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error()
            }
        })
    )

    }
    export const getAnimeDetails = (animeID) => {
        return (
          fetch(`https://api.jikan.moe/v4/anime/${animeID}`)
          .then(response => {
            if (!response.ok) {
              throw new Error()
            } else {
              return response.json()
            }
          })
        )
      }


      export const searchAnime = async (query) => {
        const url = `https://api.jikan.moe/v3/search/anime?q=${query}`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          return data.results;
        } catch (error) {
          throw new Error(error.message);
        }
      };


      export const getRandomAnime = (animeID) => {
        return (
          fetch(`https://api.jikan.moe/v4/anime/${animeID}`)
          .then(response => {
            if (!response.ok) {
              throw new Error()
            } else {
              return response.json()
            }
          })
        )
      }