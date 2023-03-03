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
