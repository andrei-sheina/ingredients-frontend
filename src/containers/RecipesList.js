import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
// import Recipe from '../components/Recipe';

class RecipesList extends Component {
  render() {
      const tilesData = [
      {
        img: 'https://placehold.it/300?text=No+Image',
        title: 'Breakfast',
        author: 'jill111',
      },
      {
        img: 'https://placehold.it/300?text=No+Image',
        title: 'Tasty burger',
        author: 'pashminu',
      },
      {
        img: 'https://placehold.it/300?text=No+Image',
        title: 'Camera',
        author: 'Danson67',
      },
      {
        img: 'https://placehold.it/300?text=No+Image',
        title: 'Morning',
        author: 'fancycrave1',
      },
      {
        img: 'https://placehold.it/300?text=No+Image',
        title: 'Hats',
        author: 'Hans',
      },
      {
        img: 'https://placehold.it/300?text=No+Image',
        title: 'Honey',
        author: 'fancycravel',
      },
      {
        img: 'https://placehold.it/300?text=No+Image',
        title: 'Vegetables',
        author: 'jill111',
      },
      {
        img: 'https://placehold.it/300?text=No+Image',
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
      },
    ];

    const styles = {
      gridList: {
        width: 'auto',
        height: 'auto',
        overflowY: 'auto',
        paddingLeft: '5%',
        paddingRight: '5%',
      },
    };

    return (
      <GridList
        cellHeight={180}
        cols={4}
        style={styles.gridList}
      >
        {tilesData.map((tile) => (
          <GridTile
            key={tile.title}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          >
            <img src={tile.img} alt=""/>
          </GridTile>
        ))}
      </GridList>
    );
  }
}

export default RecipesList;
