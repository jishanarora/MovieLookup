import React from "react";
import { connect } from "react-redux";
import { removeNomination } from "../../redux/movies/movies.actions";
import {
  NominationItem,
  ImageContainer,
  TitleContainer,
  RemoveButton,
} from "./nomination-items.styles";

const NominationItems = ({ movie, dispatch }) => {
  const noImage = "../images/noImageAvailable.jpeg";
  const { Poster, Title } = movie;
  return (
    <NominationItem>
      <ImageContainer>
        <img src={Poster === "N/A" ? noImage : Poster} alt="item" />
      </ImageContainer>
      <TitleContainer>{Title}</TitleContainer>
      <RemoveButton onClick={() => dispatch(removeNomination(movie))}>
        &#10005;
      </RemoveButton>
    </NominationItem>
  );
};

export default connect(null)(NominationItems);
