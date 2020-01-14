import React, { useState } from "react";
import moment from "moment";
import HeadComponent from "../components/HeadComponent";

const Index: React.FC = () => {
  const albumsList = [
    {
      id: 1,
      artist: "BROCKHAMPTON",
      album: "Saturation III",
      releaseDate: moment("2017-12-15")
    },
    {
      id: 2,
      artist: "Maxo Kream",
      album: "Punken",
      releaseDate: moment("2018-01-12")
    },
    {
      id: 3,
      artist: "Migos",
      album: "Culture II",
      releaseDate: moment("2018-01-26")
    },
    {
      id: 4,
      artist: "SiR",
      album: "November",
      releaseDate: moment("2018-01-19")
    }
  ];
  const [albums, setAlbums] = useState(albumsList);
  const [filteredAlbums, setFilteredAlbums] = useState(albums);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const searchAlbums = (val: string) => {
    if (val) {
      let result = albums.filter(
        x =>
          x.album.toLowerCase().includes(val.toLowerCase()) ||
          x.artist.toLowerCase().includes(val.toLowerCase())
      );

      setFilteredAlbums(result);
    } else {
      setFilteredAlbums(albums);
    }
  };

  return (
    <>
      <HeadComponent />
      <div className="container">
        <h1>Hip-hop Releases</h1>
        <div className="search-container">
          <input
            placeholder="Search by name..."
            onChange={e => searchAlbums(e.target.value)}
          ></input>
        </div>
        <div className="search-options-container">
          <button className="pure-button">Search Options +</button>
        </div>
        <div className="album-list">
          {filteredAlbums
            .sort((a, b) => a.releaseDate.valueOf() - b.releaseDate.valueOf())
            .map(x => (
              <div className="album-container" key={x.id}>
                <div className="album-info">
                  <p>{x.artist}</p>
                  <p>{x.album}</p>
                </div>
                <div className="album-date">
                  {x.releaseDate.format("MMMM Do YYYY")}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Index;
