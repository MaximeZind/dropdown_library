import React, { useState } from 'react';
import classes from './styles/NormalBox.module.css';
import PropTypes from 'prop-types';
import MagnifyingGlass from './icons/MagnifyingGlass';
import { dropdownFilter } from './scripts'
import ListItem from './ListItem';

/**
 * Composant NormalBox pour afficher les options d'une liste déroulante avec un input pour la recherche.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.list - La liste des éléments à afficher dans la boîte.
 * @param {number} props.height - La hauteur de la boîte.
 * @param {string} [props.backgroundColor] - Couleur de fond de la boîte.
 * @param {string} [props.hoveredBackgroundColor] - Couleur de fond lorsqu'un élément est survolé.
 * @param {string} [props.fontColor] - Couleur du texte dans la boîte.
 * @param {string} [props.hoveredFontColor] - Couleur du texte lorsque l'élément est survolé.
 * @param {string} [props.fontFamily] - Police de caractères à utiliser pour le texte.
 * @param {function} props.handleClick - Fonction de rappel appelée lorsque l'utilisateur clique sur un élément.
 * @param {boolean} [props.searchBar] - Indique si une barre de recherche est affichée pour filtrer les options.
 * @returns {JSX.Element} Le composant SeparatedBox rendu.
 */
function NormalBox({ list, height, backgroundColor, hoveredBackgroundColor, fontColor, hoveredFontColor, handleClick, searchBar }) {

    const [newList, setNewList] = useState(list);

    // Fonction pour filtrer les options en fonction de l'input
    function handleFilter(event) {
        const keywords = event.target.value.split(/[, ]+/).filter(item => item !== '');
        const updatedList = dropdownFilter(keywords, list);
        setNewList(updatedList);
    }

    return (
        <div className={classes.dropdown_content}
            style={{
                maxHeight: `${height*7}px`,
                backgroundColor: backgroundColor && backgroundColor,
            }}>
            {searchBar === true ?
                <div className={classes.filter_items}
                    style={{
                        minHeight: `${height}px`,
                        backgroundColor: hoveredBackgroundColor && hoveredBackgroundColor,
                    }}>
                    <span className={classes.filter_items_icon}>
                        <MagnifyingGlass color={fontColor} />
                    </span>
                    <input name='search_field'
                        style={{
                            color: fontColor,
                        }}
                        className={classes.filter_items_input}
                        type='text'
                        placeholder='Search...'
                        onChange={handleFilter} />
                </div> : null}
            <div className={classes.dropdown_options}>
                {newList.map((item, index) => {
                    return <ListItem key={item.name ? item.name : index}
                        item={item}
                        index={index}
                        height={height}
                        backgroundColor={backgroundColor}
                        hoveredBackgroundColor={hoveredBackgroundColor}
                        fontColor={fontColor}
                        hoveredFontColor={hoveredFontColor}
                        handleClick={handleClick} />
                })}
                {/* {newList.map((item) => {
                    return item.abbreviation ?
                        <span key={item.name} className={classes.dropdown_option} value={item.abbreviation} style={{ minHeight: `${height}px` }} onClick={() => handleClick(item.name, item.abbreviation)}>{item.name}</span> :
                        <span key={item.name} className={classes.dropdown_option} value={item.name} onClick={() => handleClick(item.name)}>{item.name}</span>
                })} */}
            </div>
        </div>
    );
}

NormalBox.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            abbreviation: PropTypes.string,
        })
    ).isRequired,
    height: PropTypes.number.isRequired,
    backgroundColor: PropTypes.string,
    hoveredBackgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
    hoveredFontColor: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    searchBar: PropTypes.bool
}

export default NormalBox;